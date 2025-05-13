import { House } from '@/app/page';

export const getHouses = async () => {
	const rawHousesResponse = await fetch(
		`${process.env.NEXT_PUBLIC_BFF_BASE_URL}screens/houses-list`
	);
	const jsonHousesResponse = await rawHousesResponse.json();
	if (!jsonHousesResponse.ok) {
		throw new Error(jsonHousesResponse.data);
	}
	return jsonHousesResponse.data as House[];
};

const PER_PAGE = 30;

export const getHousesInfinite = async ({
	pageParam,
}: {
	pageParam: number;
}) => {
	const rawHousesResponse = await fetch(
		`${process.env.NEXT_PUBLIC_BFF_BASE_URL}screens/houses-list?page=${pageParam}&per_page=${PER_PAGE}`
	);
	const jsonHousesResponse = await rawHousesResponse.json();
	if (!jsonHousesResponse.ok) {
		throw new Error(jsonHousesResponse.data);
	}
	const houses = jsonHousesResponse.data as House[];

	const nextCursor = houses.length < PER_PAGE ? null : pageParam + 1;

	return {
		data: houses,
		nextCursor,
	};
};
