export interface DocMenuItemType {
	id: string;
	label: string;
	isGroupIndexPage?: boolean;
	children: DocMenuItemType[];
}

export type DocMenuType = DocMenuItemType[];
