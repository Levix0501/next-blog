'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { DocMenuType } from '@/types/doc';
import DocMenuItem from './doc-menu-item';
import styles from './doc-menu.module.scss';
import { useMenu } from './menu-provider';

export interface DocMenuProps {
	docMenu: DocMenuType;
}

const DocMenu = ({ docMenu }: DocMenuProps) => {
	const { isOpen } = useMenu();

	return (
		<aside
			className={cn(
				'md:w-64 md:top-16 md:sticky md:flex-shrink-0 flex flex-col md:self-start transition-all ease-in-out transform-gpu',
				styles['sidebar-container'],
				isOpen ? 'max-md:translate-y-[0]' : 'max-md:translate-y-[-100%]'
			)}
		>
			<ScrollArea className="md:h-[calc(100vh-4rem)]">
				<div className="p-4">
					<ul className="gap-1 flex flex-col">
						{docMenu.map((e) => (
							<DocMenuItem key={e.id} item={e} />
						))}
					</ul>
				</div>
			</ScrollArea>
		</aside>
	);
};

export default DocMenu;
