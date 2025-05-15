import { MOCKED_HOUSES_LIST } from '@/components/Molecules/HouseItem/mocks';
import { HouseList } from '@/components/Molecules/HouseList/HouseList';
import type { House } from '@/queries/interface';
// import { useInfiniteQuery } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

// NOTE
// We should actually create a mock wrapper that introduces a query client to
// be able to mock the queries and reuse them across components.
// This way we would be testing the actual behavior of the component.
jest.mock('@tanstack/react-query', () => ({
	useInfiniteQuery: jest.fn(() => ({
		data: {
			pages: [
				{
					data: MOCKED_HOUSES_LIST,
					nextCursor: 2,
				},
			],
		},
		fetchNextPage: jest.fn(),
		hasNextPage: true,
		isFetchingNextPage: false,
	})),
}));

jest.mock('@/components/Molecules/HouseItem/HouseItem', () => ({
	HouseItem: ({ house }: { house: House }) => (
		<li data-testid={'mocked-house-item'}>
			{'MockedHouseItem'}
			<span>{house.id}</span>
		</li>
	),
}));

describe('HouseList component', () => {
	it('Renders a list of houses', () => {
		render(<HouseList />);

		const houses = screen.getAllByTestId('mocked-house-item');

		expect(houses).toHaveLength(MOCKED_HOUSES_LIST.length);
	});
});
