import { render, screen, within } from '@testing-library/react';
import type { House } from '@/queries/interface';
import { HouseItem } from '@/components/Molecules/HouseItem/HouseItem';

const MOCKED_HOUSE: House = {
	address: 'fake address 123',
	homeowner: 'John Doe',
	id: 1,
	photoURL: 'https://www.example.com',
	price: 100000,
};

describe('HouseItem Component', () => {
	it('Renders a list item with the house data', () => {
		render(
			<ul>
				<HouseItem house={MOCKED_HOUSE} />
			</ul>
		);

		const item = screen.getByRole('listitem');
		const houseAddress = within(item).getByText(MOCKED_HOUSE.address);
		const houseHomeOwner = within(item).getByText(MOCKED_HOUSE.homeowner);
		const housePrice = within(item).getByText(MOCKED_HOUSE.price, {
			exact: false,
		});

		expect(item).toBeInTheDocument();
		expect(houseAddress).toBeInTheDocument();
		expect(houseHomeOwner).toBeInTheDocument();
		expect(housePrice).toBeInTheDocument();
	});
});
