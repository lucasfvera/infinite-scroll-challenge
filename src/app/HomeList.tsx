'use client';

import { getHouses } from '@/queries/getHouses';
import { useQuery } from '@tanstack/react-query';

/*
    This component could be in a components folder using the Atomic Design
    pattern (layouts, molecules, atoms).
 */

export default function HomeList() {
	const { data: houses } = useQuery({
		queryKey: ['houses'],
		queryFn: () => getHouses(),
	});

	return (
		<ul
			style={{
				border: '1px solid black',
				padding: '8px',
				margin: '0 16px',
			}}
		>
			{houses &&
				houses.map(({ id, address, homeowner, price }) => (
					<li
						key={id}
						style={{
							border: '1px solid blue',
							marginBottom: '8px',
							padding: '4px',
						}}
					>
						<p>{homeowner}</p>
						<p>{address}</p>
						<p>${price}</p>
					</li>
				))}
		</ul>
	);
}
