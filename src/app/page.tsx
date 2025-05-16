import { HouseList } from '@/components/Molecules/HouseList/HouseList';
// import { getHousesInfinite } from '@/queries/getHouses';
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';

export default async function Home() {
	const queryClient = new QueryClient();

	// NOTE
	// This was intended for fetching the first page in the server which saved
	// us fetching it in the client giving a better UX for first render.
	// We disabled it for 2 reasons:
	// 1. The flakiness of the API made this unstable. When then API failed,
	// the prefetch returned an empty array and we ended up fetching
	// it in the client anyways.
	// 2. We were not able to properly persist (cache) the data in the client.
	// When trying to restore the cache, if we had fetched the page in the
	// server, we were getting a race condition which was busting the cache.

	// await queryClient.prefetchInfiniteQuery({
	// 	queryKey: ['houses-list'],
	// 	queryFn: () => getHousesInfinite({ pageParam: 1 }),
	// 	initialPageParam: 1,
	// });

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<main>
				<h1 className="mb-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl lg:text-center">
					HomeVision House Listing
				</h1>
				<HouseList />
			</main>
		</HydrationBoundary>
	);
}
