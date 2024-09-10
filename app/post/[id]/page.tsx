import { getPostMdByIdApi } from '@/api';
import { notFound } from 'next/navigation';
import PostBreadcrumb from './_components/breadcrumb';
import MdxRemoteServer from '@/components/mdx/mdx-remote-server';
import { Card, CardContent } from '@/components/ui/card';

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

	return (
		<>
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
			<MdxRemoteServer source={post.md} />
		</>
	);
};

export default PostPage;
