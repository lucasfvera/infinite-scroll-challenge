import { Characteristic } from '@/app/api/screens/houses-list/helpers';
import type { House } from '@/queries/interface';

export interface HouseItemProps {
	ref?: React.Ref<HTMLLIElement>;
	house: House;
}

export interface CharacteristicsProps {
	characteristics: Characteristic[];
	type: 'positive' | 'negative';
	className?: string;
}
