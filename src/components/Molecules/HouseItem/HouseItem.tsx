import type { HouseItemProps } from '@/components/Molecules/HouseItem/interface';

const HouseItem: React.FC<HouseItemProps> = ({ house, ref }) => {
	const { address, homeowner, id, price } = house;

	return (
		<li
			ref={ref}
			style={{
				border: '1px solid blue',
				marginBottom: '8px',
				padding: '4px',
			}}
		>
			<p>{id}</p>
			<p>{homeowner}</p>
			<p>{address}</p>
			<p>$ {price}</p>
		</li>
	);
};

export { HouseItem };
