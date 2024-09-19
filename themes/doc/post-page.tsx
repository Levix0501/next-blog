import { getPostMdByIdApi } from '@/api';
import MdxRemoteServer from '@/components/mdx/mdx-remote-server';
import { DashboardTableOfContents } from '@/components/mdx/toc';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getTableOfContents } from '@/lib/toc';
import { notFound } from 'next/navigation';
import PostBreadcrumb from './components/breadcrumb';

const Page = async ({ id }: { id: string }) => {
	const post = await getPostMdByIdApi(id);

	if (!post) {
		notFound();
	}

	const toc = await getTableOfContents(post.md);

	return (
		<main className="w-full relative xl:grid xl:grid-cols-[1fr_256px]">
			<div className="mx-auto w-full min-w-0 px-6 pt-6 md:px-12">
				<PostBreadcrumb title={post.title} />

				<h1 className="font-heading mt-2 scroll-m-20 text-4xl font-bold">
					{post.title}
				</h1>

				{post.htmlStr && (
					<Card className="mt-8">
						<CardContent className="p-0">
							<div className="w-full pb-[calc(100vh-15rem)] relative rounded-md overflow-hidden">
								<iframe
									title={post.title}
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

			<div className="hidden text-sm xl:block px-4">
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

export default Page;
