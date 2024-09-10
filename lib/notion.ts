import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

// Initializing a client
export const notion = new Client({
	auth: process.env.NOTION_TOKEN
});

export const n2m = new NotionToMarkdown({ notionClient: notion });
