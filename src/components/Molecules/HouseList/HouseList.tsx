'use client';

import { Spinner } from '@/components/Atoms/loadingSpinner';
import { HouseItem } from '@/components/Molecules/HouseItem/HouseItem';
import { getHousesInfinite } from '@/queries/getHouses';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function HouseList() {
	const { ref, inView } = useInView();
	const hasRestoredScroll = useRef(false);

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
		useInfiniteQuery({
			queryKey: ['houses-list'],
			queryFn: getHousesInfinite,
			initialPageParam: 1,
			getNextPageParam: (lastPage) => lastPage.nextCursor,
		});

	useEffect(() => {
		if (inView && hasNextPage && !isFetchingNextPage) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

	// NOTE
	// The save scroll position can be done with the Y position because we
	// are storing the items in cache which means that after refresh all the
	// items will be there.
	// If we move to a different approach, like virtualizing the list and only
	// fetching a set of items, we would need to change this approach
	// (maybe storing the item id instead to know the user's position in the list)

	// Save scroll position when users refresh the page
	useEffect(() => {
		const handleBeforeUnload = () => {
			localStorage.setItem('scrollY', window.scrollY.toString());
		};

		window.addEventListener('beforeunload', handleBeforeUnload);
		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload);
		};
	}, []);

	// Restore scroll position once we have the data from the cache
	useEffect(() => {
		if (!hasRestoredScroll.current && data) {
			const y = localStorage.getItem('scrollY');
			if (y) {
				window.scrollTo({ top: parseInt(y, 10), behavior: 'smooth' });
				hasRestoredScroll.current = true;
			}
		}
	}, [data]);

	return (
		<>
			<ul className="flex flex-col space-y-8 items-center">
				{data &&
					data.pages.map((page) =>
						page.data.map((house, index) => (
							<HouseItem
								key={house.id}
								// We set the observer to the element in the
								// middle of the list to ensure we have
								// the next page before the user gets to the bottom
								ref={
									Math.floor(page.data.length / 2) ===
									index + 1
										? ref
										: null
								}
								house={house}
							/>
						))
					)}
			</ul>
			<div className="py-[16px]">
				<Spinner show={isLoading || isFetchingNextPage} size="large" />
			</div>
		</>
	);
}

export { HouseList };
