import { appConfig } from '@/@config/app';

export const ThemeLayout = async ({
	children
}: {
	children: React.ReactNode;
}) => {
	const Layout = (await import(`./${appConfig.theme}/layout`)).default;

	return <Layout>{children}</Layout>;
};

export const ThemePostPage = async ({ id }: { id: string }) => {
	const PostPage = (await import(`./${appConfig.theme}/post-page`)).default;

	return <PostPage id={id} />;
};

export const ThemeLandingPage = async () => {
	const LandingPage = (await import(`./${appConfig.theme}/landing-page`))
		.default;

	return <LandingPage />;
};
