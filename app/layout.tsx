import GoogleAnalytics from '@/components/google-analytics';
import { NprogressBar } from '@/components/nprogress-bar';
import { siteConfig } from '@/site-config';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { HeaderBar } from '@/components/layouts/header-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: '/logo.svg'
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: '/logo-dark.svg'
			}
		]
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh">
			<body className={inter.className}>
				<HeaderBar />
				{children}
				<NprogressBar />
			</body>
			<GoogleAnalytics />
		</html>
	);
}
