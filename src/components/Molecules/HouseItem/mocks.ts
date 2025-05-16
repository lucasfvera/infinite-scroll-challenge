import type { House } from '@/queries/interface';

// NOTE
// We could move the mocks to another folder to have them centralized and reuse
// them if needed. For now we are gonna keep them near the test that uses it

export const MOCKED_HOUSE: House = {
	address: 'fake address 123',
	homeowner: 'John Doe',
	id: 1,
	photoURL: 'https://www.example.com',
	price: 100000,
	positiveCharacteristics: [],
	negativeCharacteristics: [],
};

export const MOCKED_HOUSES_LIST: House[] = [
	{
		address: 'fake address 123',
		homeowner: 'John Doe',
		id: 1,
		photoURL: 'https://www.example.com',
		price: 100000,
		positiveCharacteristics: [],
		negativeCharacteristics: [],
	},
	{
		address: 'fake address 456',
		homeowner: 'Jane Doe',
		id: 2,
		photoURL: 'https://www.example.com',
		price: 50000,
		positiveCharacteristics: [],
		negativeCharacteristics: [],
	},
	{
		address: 'fake address 789',
		homeowner: 'Rick Doe',
		id: 3,
		photoURL: 'https://www.example.com',
		price: 30000,
		positiveCharacteristics: [],
		negativeCharacteristics: [],
	},
];
