import { House } from '@/app/page';

export const getHouses = async () => {
	const rawHousesResponse = await fetch(
		`http://localhost:3000/api/screens/houses-list?page`
	);
	const jsonHousesResponse = await rawHousesResponse.json();
	if (!jsonHousesResponse.ok) {
		throw new Error(jsonHousesResponse.data);
	}
	return jsonHousesResponse.data as House[];
};

export const getHousesInfinite = async ({
	pageParam,
}: {
	pageParam: number;
}) => {
	const rawHousesResponse = await fetch(
		`http://localhost:3000/api/screens/houses-list?page=${pageParam}`
	);
	const jsonHousesResponse = await rawHousesResponse.json();
	if (!jsonHousesResponse.ok) {
		throw new Error(jsonHousesResponse.data);
	}
	return {
		data: jsonHousesResponse.data as House[],
		nextCursor: pageParam + 1,
	};
};
