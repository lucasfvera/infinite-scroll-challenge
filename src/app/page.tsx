import HomeList from '@/app/HomeList';
import { getHouses, getHousesInfinite } from '@/queries/getHouses';
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';

export interface House {
	address: string;
	homeowner: string;
	id: number;
	photoURL: string;
	price: number;
}

export default async function Home() {
	const queryClient = new QueryClient();

	await queryClient.prefetchInfiniteQuery({
		queryKey: ['houses-list'],
		queryFn: () => getHousesInfinite({ pageParam: 1 }),
		initialPageParam: 1,
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<div>
				<main>
					<h1>HomeVision House Listing</h1>
				</main>
				<HomeList />
			</div>
		</HydrationBoundary>
	);
}
