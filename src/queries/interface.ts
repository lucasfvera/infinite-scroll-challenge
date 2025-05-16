import { Characteristic } from '@/app/api/screens/houses-list/helpers';

export interface House {
	address: string;
	homeowner: string;
	id: number;
	photoURL: string;
	price: number;
	positiveCharacteristics: Characteristic[];
	negativeCharacteristics: Characteristic[];
}
