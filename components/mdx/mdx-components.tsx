import { CopyButton } from '../copy-button';
import { cn } from '@/lib/utils';
import '@/styles/highlight.css';

export const mdxComponents = {
	pre: ({
		className,
		__raw__,
		...props
	}: React.HTMLAttributes<HTMLPreElement> & { __raw__?: string }) => {
		return (
			<div className="relative">
				<pre
					className={cn(
						'relative mb-4 mt-6 max-h-[500px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900 whitespace-pre-wrap',
						className
					)}
					{...props}
				/>

				<CopyButton
					style={{ right: '16px', top: '16px' }}
					value={__raw__ ?? ''}
					className={cn('absolute right-4 top-4')}
				/>
			</div>
		);
	},
	code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<code
			className={cn(
				'relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm',
				className
			)}
			{...props}
		/>
	)
};
