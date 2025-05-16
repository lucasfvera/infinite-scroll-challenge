import { render, screen, within } from '@testing-library/react';
import { HouseItem } from '@/components/Molecules/HouseItem/HouseItem';
import { MOCKED_HOUSE } from '@/components/Molecules/HouseItem/mocks';

describe('HouseItem Component', () => {
	it('Renders a list item with the house data', () => {
		render(
			<ul>
				<HouseItem house={MOCKED_HOUSE} />
			</ul>
		);

		const item = screen.getByRole('listitem');
		const houseAddress = within(item).getByText(MOCKED_HOUSE.address, {
			exact: false,
		});
		const houseHomeOwner = within(item).getByText(MOCKED_HOUSE.homeowner, {
			exact: false,
		});
		const housePrice = within(item).getByText(MOCKED_HOUSE.price, {
			exact: false,
		});
		const housePhoto = within(item).getByAltText('house photo');

		expect(item).toBeInTheDocument();
		expect(houseAddress).toBeInTheDocument();
		expect(houseHomeOwner).toBeInTheDocument();
		expect(housePrice).toBeInTheDocument();
		expect(housePhoto).toBeInTheDocument();
	});

	it.todo('Renders a list of house characteristics when providing one');
});
