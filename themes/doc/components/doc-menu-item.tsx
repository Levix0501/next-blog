'use client';

import { cn } from '@/lib/utils';
import { DocMenuItemType } from '@/types/doc';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useMenu } from './menu-provider';

export interface DocMenuItemProps {
	item: DocMenuItemType;
}

const DocMenuItem = ({ item }: DocMenuItemProps) => {
	const { toggle } = useMenu();
	const pathname = usePathname();
	const pathArr = pathname.split('/');
	const docId = pathArr[pathArr.length - 1];
	const [isOpen, setIsOpen] = useState(
		item.id === docId || item.children.findIndex((e) => e.id === docId) !== -1
	);
	const isActive = docId === item.id;

	const className = cn(
		'px-2 py-1.5 flex items-center justify-between rounded text-sm text-gray-500',
		[
			isActive
				? 'text-[#004CA4] bg-[#E0EEFF]'
				: 'hover:text-gray-900 hover:bg-gray-100'
		]
	);

	useEffect(() => {
		toggle(false);
		setIsOpen(
			item.id === docId || item.children.findIndex((e) => e.id === docId) !== -1
		);
	}, [pathname]);

	const renderChildren = () => {
		const outerRef = useRef<HTMLDivElement>(null);
		const innerRef = useRef<HTMLDivElement>(null);

		useEffect(() => {
			if (!outerRef.current || !innerRef.current) return;
			outerRef.current.style.height = isOpen
				? `${innerRef.current.clientHeight}px`
				: '0px';
		}, [isOpen]);

		return (
			<div
				ref={outerRef}
				className={cn(
					'transition-all duration-300 ease-in-out overflow-hidden transform-gpu',
					{ 'h-0': !isOpen }
				)}
			>
				<div
					className={cn('pt-1 transition-opacity duration-500 ease-in-out', [
						isOpen ? 'opacity-100' : 'opacity-0'
					])}
					ref={innerRef}
				>
					<ul className="ml-3 pl-3 gap-1 flex flex-col relative before:absolute before:left-0 before:inset-y-1 before:w-px before:bg-gray-200">
						{item.children.map((e) => (
							<DocMenuItem key={e.id} item={e} />
						))}
					</ul>
				</div>
			</div>
		);
	};

	if (item.isGroupIndexPage && item.children.length) {
		return (
			<li>
				<Link
					href={`/post/${item.id}`}
					className={className}
					onClick={() => {
						if (isActive) {
							setIsOpen(!isOpen);
						} else {
							setIsOpen(true);
						}
					}}
				>
					{item.label}
					<ChevronRight
						className={cn('transition-all', { 'rotate-90': isOpen })}
						size={20}
					/>
				</Link>
				{renderChildren()}
			</li>
		);
	}

	if (item.children.length) {
		return (
			<li>
				<div
					role="button"
					className={cn(
						'px-2 py-1.5 flex items-center justify-between rounded text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100'
					)}
					onClick={() => setIsOpen(!isOpen)}
				>
					{item.label}
					<ChevronRight
						className={cn('transition-all', { 'rotate-90': isOpen })}
						size={20}
					/>
				</div>
				{renderChildren()}
			</li>
		);
	}

	return (
		<li>
			<Link href={`/post/${item.id}`} className={className}>
				{item.label}
			</Link>
		</li>
	);
};

export default DocMenuItem;
