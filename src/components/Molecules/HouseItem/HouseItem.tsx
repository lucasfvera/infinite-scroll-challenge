import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/Atoms/card';
import type { HouseItemProps } from '@/components/Molecules/HouseItem/interface';

const HouseItem: React.FC<HouseItemProps> = ({ house, ref }) => {
	const { address, homeowner, id, price, photoURL } = house;

	return (
		<li ref={ref} className="flex w-full justify-center">
			<Card className="shadow-md hover:shadow-2xl transition-shadow w-full h-[200px] lg:h-[300px] relative xl:max-w-3/4 overflow-hidden">
				<CardHeader className="max-w-1/2">
					<CardTitle>Owner: {homeowner}</CardTitle>
					<CardDescription>Address: {address}</CardDescription>
					<CardDescription>House nº {id + 1}</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-row justify-between">
					<div>
						<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
							Valuation: $ {price}
						</h4>
					</div>
					<div className="h-[400px] md:shrink-0 w-full absolute right-0 top-1/2 -translate-y-1/2 max-w-[200px] md:max-w-[300px] lg:max-w-[400px]">
						<img
							className="h-[400px] absolute right-0 top-1/2 -translate-y-1/2 object-cover"
							alt="house photo"
							src={photoURL}
						/>
					</div>
				</CardContent>
			</Card>
		</li>
	);
};

export { HouseItem };
