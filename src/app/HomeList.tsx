'use client';

import { getHouses, getHousesInfinite } from '@/queries/getHouses';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

/*
    This component could be in a components folder using the Atomic Design
    pattern (layouts, molecules, atoms).
 */

export default function HomeList() {
	// const { data: houses2 } = useQuery({
	// 	queryKey: ['houses'],
	// 	queryFn: () => getHouses(),
	// });
	const { ref, inView } = useInView();

	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
	} = useInfiniteQuery({
		queryKey: ['houses-list'],
		queryFn: getHousesInfinite,
		initialPageParam: 1,
		getNextPageParam: (lastPage) => lastPage.nextCursor,
	});

	useEffect(() => {
		if (inView && hasNextPage && !isFetchingNextPage) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage, hasNextPage]);

	// TODO - If we want a cleaner code and make it more readable, we could extract
	// the list item into it's own component
	return (
		<ul
			style={{
				border: '1px solid black',
				padding: '8px',
				margin: '0 16px',
			}}
		>
			{data &&
				data.pages.map((page) =>
					page.data.map(
						({ id, address, homeowner, price }, index) => (
							<li
								key={id}
								// We set the observer to the element in the
								// middle of the list to ensure we have
								// the next page before the user gets to the bottom
								ref={
									Math.floor(page.data.length / 2) ===
									index + 1
										? ref
										: null
								}
								style={{
									border: '1px solid blue',
									marginBottom: '8px',
									padding: '4px',
								}}
							>
								<p>{id}</p>
								<p>{homeowner}</p>
								<p>{address}</p>
								<p>${price}</p>
							</li>
						)
					)
				)}
		</ul>
	);
}
