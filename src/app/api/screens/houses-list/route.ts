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

export async function GET(req: Request) {
	let houses;

	try {
		const rawHousesResponse = await fetch(
			'https://staging.homevision.co/api_project/houses'
		);
		const jsonHousesResponse = await rawHousesResponse.json();
		if (!jsonHousesResponse.ok) {
			throw new Error(jsonHousesResponse.message);
		}
		houses = jsonHousesResponse.houses;
	} catch (err) {
		console.error('There was an error while fetching the houses:', err);
		return Response.json({ data: [], ok: false });
	}

	// TODO - We will tweak the data structure to the one we need for our UI
	return Response.json({ data: houses, ok: true });
}
