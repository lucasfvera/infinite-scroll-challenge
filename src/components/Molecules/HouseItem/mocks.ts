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
};
