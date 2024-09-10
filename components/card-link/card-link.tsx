import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './card-link.module.scss';

export interface CardLinkProps extends React.ComponentProps<typeof Link> {
	children: ReactNode;
	className?: string;
}

const CardLink = ({ className, ...props }: CardLinkProps) => {
	return (
		<Link
			className={cn(
				'bg-gray-0 group block space-y-2 rounded-md transition-shadow duration-300 overflow-hidden',
				styles['card-link'],
				className
			)}
			{...props}
		>
			{props.children}
		</Link>
	);
};

export default CardLink;
