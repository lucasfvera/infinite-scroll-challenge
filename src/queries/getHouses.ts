import { House } from '@/app/page';

export const getHouses = async () => {
	const rawHousesResponse = await fetch(
		'http://localhost:3000/api/screens/houses-list'
	);
	const jsonHousesResponse = await rawHousesResponse.json();
	if (!jsonHousesResponse.ok) {
		throw new Error(jsonHousesResponse.data);
	}
	return jsonHousesResponse.data as House[];
};
