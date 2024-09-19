import { appConfig } from '@/@config/app';
import { notion } from '@/lib/notion';
import { DocMenuType, DocMenuItemType } from '@/types/doc';

export const getDocMenu = async (): Promise<DocMenuType> => {
	const { results } = await notion.databases.query({
		database_id: appConfig.notionDatabaseId,
		sorts: [{ direction: 'ascending', property: 'order' }],
		page_size: 1000
	});

	const map = new Map<string, any[]>();
	for (const item of results as any[]) {
		const group = item.properties.group.select.name;

		if (map.has(group)) {
			map.get(group)!.push(item);
		} else {
			map.set(group, [item]);
		}
	}

	const docMenu: DocMenuType = [];

	map.forEach((v, k) => {
		const children: DocMenuItemType[] = [];
		const startIndex = v[0].properties.isGroupIndexPage.checkbox ? 1 : 0;

		for (let i = startIndex; i < v.length; i++) {
			const item = v[i];
			children.push({
				id: item.id,
				label: item.properties.title.title[0].plain_text,
				children: []
			});
		}

		docMenu.push({
			id: v[0].id,
			label: k,
			isGroupIndexPage: v[0].properties.isGroupIndexPage.checkbox,
			children
		});
	});

	return docMenu;
};
