import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/Atoms/card';
import { Characteristics } from '@/components/Molecules/HouseItem/Characteristics';
import type { HouseItemProps } from '@/components/Molecules/HouseItem/interface';

const HouseItem: React.FC<HouseItemProps> = ({ house, ref }) => {
	const {
		address,
		homeowner,
		id,
		price,
		photoURL,
		positiveCharacteristics,
		negativeCharacteristics,
	} = house;

	return (
		<li ref={ref} className="flex w-full justify-center">
			<Card className="shadow-md hover:shadow-2xl transition-shadow w-full h-[200px] lg:h-[400px] relative  lg:max-w-[940px] overflow-hidden">
				<CardHeader className="max-w-1/2">
					<CardTitle>Owner: {homeowner}</CardTitle>
					<CardDescription>Address: {address}</CardDescription>
					<CardDescription>House nº {id + 1}</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-row justify-between">
					<div className="flex flex-col gap-[16px] justify-between">
						<h4 className="scroll-m-20 text-xl font-semibold tracking-tight lg:mb-[16px]">
							Valuation: $ {price}
						</h4>
						<Characteristics
							className="max-lg:hidden"
							characteristics={positiveCharacteristics}
							type="positive"
						/>
						<Characteristics
							className="max-lg:hidden"
							characteristics={negativeCharacteristics}
							type="negative"
						/>
					</div>
					<div className="h-[500px] md:shrink-0 w-full absolute right-0 top-1/2 -translate-y-1/2 max-w-[200px] md:max-w-[300px] lg:max-w-[400px]">
						<img
							className="h-[500px] absolute right-0 top-1/2 -translate-y-1/2 object-cover"
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
