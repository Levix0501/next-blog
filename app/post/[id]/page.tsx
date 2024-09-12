import { getPostMdByIdApi } from '@/api';
import MdxRemoteServer from '@/components/mdx/mdx-remote-server';
import { Card, CardContent } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import PostBreadcrumb from './_components/breadcrumb';
import { getTableOfContents } from '@/lib/toc';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DashboardTableOfContents } from '@/components/mdx/toc';

interface PostPageProps {
	params: {
		id: string;
	};
}

const PostPage = async ({ params: { id } }: PostPageProps) => {
	const post = await getPostMdByIdApi(id);

	if (!post) {
		notFound();
	}

	const toc = await getTableOfContents(post.md);

	return (
		<main className="container relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
			<div className="mx-auto w-full min-w-0">
				<PostBreadcrumb title={post.title} />

				{post.htmlStr && (
					<Card>
						<CardContent className="p-0">
							<div className="w-full pb-[calc(100vh-15rem)] relative rounded-md overflow-hidden">
								<iframe
									srcDoc={post.htmlStr}
									className="absolute w-full h-full"
								></iframe>
							</div>
						</CardContent>
					</Card>
				)}

				<div className="pb-12 pt-8">
					<MdxRemoteServer source={post.md} />
				</div>
			</div>

			<div className="hidden text-sm xl:block">
				<div className="sticky top-16 -mt-10 pt-4">
					<ScrollArea className="pb-10">
						<div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
							<DashboardTableOfContents toc={toc} />
						</div>
					</ScrollArea>
				</div>
			</div>
		</main>
	);
};

export default PostPage;
