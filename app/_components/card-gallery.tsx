'use client';

import { getPostsAction } from '@/actions/post';
import CardLink from '@/components/card-link/card-link';
import { Button } from '@/components/ui/button';
import { Post } from '@/types/post';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import useSWRInfinite from 'swr/infinite';

const CardGallery = () => {
	const startCursors = useRef<(string | undefined)[]>([void 0]);

	const { data, isLoading, size, setSize } = useSWRInfinite(
		(index) => ({ startCursor: startCursors.current[index] }),
		(params) => getPostsAction(params),
		{
			onSuccess(data, key, config) {
				startCursors.current.push(data[data.length - 1].next_cursor ?? void 0);
			}
		}
	);

	const list: Post[] = data
		? data.reduce((pre, cur) => {
				cur.results.forEach((e) => pre.push(e));
				return pre;
			}, [] as Post[])
		: [];
	const isLoadingMore =
		isLoading || (size > 0 && data && data[size - 1] === void 0);
	const isReachingEnd = data && !data[data.length - 1].has_more;

	return (
		<>
			<div className="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{list.map((e) => (
					<CardLink key={e.id} href={`/post/${e.id}`}>
						<div className="relative pb-[58%]">
							<Image
								src={e.cover}
								fill
								alt={e.title}
								className="object-cover"
								sizes="650px"
							/>
						</div>

						<h2 className="p-2 text-slate-500 text-base">{e.title}</h2>
					</CardLink>
				))}
			</div>
			<div className="my-4 sm:my-8 flex justify-center">
				{!isReachingEnd && (
					<Button
						disabled={isLoadingMore}
						onClick={() => {
							setSize(size + 1);
						}}
					>
						{isLoadingMore && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
						Load More
					</Button>
				)}
			</div>
		</>
	);
};

export default CardGallery;
