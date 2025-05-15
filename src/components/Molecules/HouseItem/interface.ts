import type { House } from '@/queries/interface';

export interface HouseItemProps {
	ref?: React.Ref<HTMLLIElement>;
	house: House;
}
