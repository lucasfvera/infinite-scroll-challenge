/* 
    For now, we are gonna put everything related to the requests under the same file.

    If we want to scale this, we could have separate folders with the multiple
    services. We would have one folder per service we want to talk to and each
    service will expose methods to consume their API.

    |_ services
        |_ house-service
            |_ service.ts
                // ... tests

    We could also add some backend structure like controllers, domains, factories
    or whatever we want.
*/

import {
	getRandomNegative,
	getRandomPositive,
} from '@/app/api/screens/houses-list/helpers';
import { House } from '@/queries/interface';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	const page = req.nextUrl.searchParams.get('page');
	const per_page = req.nextUrl.searchParams.get('per_page');
	let houses;
	// TODO - To avoid sending a failed response to the client, we can add a
	// counter to retry the request N times before responding with an error

	try {
		const rawHousesResponse = await fetch(
			`https://staging.homevision.co/api_project/houses?page=${page}&per_page=${per_page}`
		);
		const jsonHousesResponse = await rawHousesResponse.json();
		if (!jsonHousesResponse.ok) {
			throw new Error(jsonHousesResponse.message);
		}
		// We will type it as any but we should have the proper House type. It would be slightly different from the one we get from the BE
		houses = jsonHousesResponse.houses.map((house: House) => ({
			...house,
			positiveCharacteristics: getRandomPositive(),
			negativeCharacteristics: getRandomNegative(),
		}));
	} catch (err) {
		console.error('There was an error while fetching the houses:', err);
		return Response.json({ data: [], ok: false }, { status: 500 });
	}

	// TODO - We will tweak the data structure to the one we need for our UI
	return Response.json({ data: houses, ok: true });
}
