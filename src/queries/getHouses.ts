import type { House } from '@/queries/interface';

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

	// We need to know if there is a next page to fetch or not. Since we don't
	// have access to that information with the provided API we will assume that
	// if we get less items in the list than the required ones, there are no
	// more pages to fetch. There is an edge case where if the last page has
	// the same amount of elements than the elements required per page, we will
	// do an extra fetch which won't exist. For this exercise we won't care
	// about this extra fetch since it would happen once at the end of the list.
	const nextCursor = houses.length < PER_PAGE ? null : pageParam + 1;

	return {
		data: houses,
		nextCursor,
	};
};
