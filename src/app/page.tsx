import HomeList from '@/app/HomeList';
import { getHouses } from '@/queries/getHouses';
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

	await queryClient.prefetchQuery({
		queryKey: ['houses'],
		queryFn: getHouses,
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
