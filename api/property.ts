import { notion } from '@/lib/notion';

export const getAllCategoriesApi = async () => {
	const database = await notion.databases.retrieve({
		database_id: process.env.NOTION_DATABASE_ID as string
	});

	const category = database.properties['category'] as any;
	const { options } = category[category.type];

	return options.map((e: any) => e.name) as string[];
};
