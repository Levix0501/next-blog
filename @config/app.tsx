import { ReactNode } from 'react';
import Logo from './logo';

export interface AppConfig {
	siteName: string;
	description: string;
	logo: ReactNode;
	notionToken: string;
	notionDatabaseId: string;
	theme: 'doc' | 'blog';
}

export const appConfig: AppConfig = {
	// site info
	siteName: 'Next Blog',
	description: '',
	logo: <Logo />,

	// notion config
	notionToken: process.env.NOTION_TOKEN as string,
	notionDatabaseId: process.env.NOTION_DATABASE_ID as string,

	// theme
	theme: (process.env.APP_CONFIG_THEME as any) ?? 'doc'
};
