import { n2m, notion } from '@/lib/notion';
import { Post } from '@/types/post';

export namespace PostApi {
	export interface GetPostsParams {
		startCursor?: string;
		pageSize?: number;
	}

	export interface GetPostsResult {
		results: Post[];
		next_cursor: string | null;
		has_more: boolean;
	}
}

const page2post = (page: any): Post => {
	return {
		id: page.id,
		title: page.properties.title.title[0].plain_text,
		cover: page.cover[page.cover.type].url
	};
};

export const getPostsApi = async ({
	startCursor,
	pageSize = 10
}: PostApi.GetPostsParams): Promise<PostApi.GetPostsResult> => {
	const { has_more, next_cursor, results } = await notion.databases.query({
		database_id: process.env.NOTION_DATABASE_ID as string,
		page_size: pageSize,
		start_cursor: startCursor,
		sorts: [{ property: 'createdTime', direction: 'descending' }],
		filter: {
			and: [
				{ type: 'select', property: 'status', select: { equals: 'published' } }
			]
		}
	});

	return {
		results: results.map(page2post),
		next_cursor,
		has_more
	};
};

export const getPostMdByIdApi = async (pageId: string) => {
	try {
		const page = await notion.pages.retrieve({ page_id: pageId });
		const post = page2post(page);

		const mdblocks = await n2m.pageToMarkdown(pageId);
		const mdString = n2m.toMarkdownString(mdblocks);

		let htmlStr = '';
		const blocks = await notion.blocks.children.list({ block_id: pageId });
		for (const item of blocks.results) {
			const block = item as any;
			if (block.type === 'code' && block.code.language === 'html') {
				htmlStr = block.code.rich_text[0].plain_text;
			}
		}
		return { ...post, md: mdString.parent, htmlStr };
	} catch (error) {
		return null;
	}
};
