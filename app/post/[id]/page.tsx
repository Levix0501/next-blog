import { ThemePostPage } from '@/themes';

interface PostPageProps {
	params: {
		id: string;
	};
}

export async function generateStaticParams(): Promise<
	PostPageProps['params'][]
> {
	return [];
}

const PostPage = async ({ params: { id } }: PostPageProps) => {
	return <ThemePostPage id={id} />;
};

export default PostPage;
