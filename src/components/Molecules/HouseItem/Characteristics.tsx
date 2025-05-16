import * as Icons from 'lucide-react';
import { CharacteristicsProps } from '@/components/Molecules/HouseItem/interface';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/Atoms/tooltip';
import { cn } from '@/lib/utils';

const Characteristics: React.FC<CharacteristicsProps> = ({
	characteristics,
	type,
	className,
}) => {
	const color = type === 'positive' ? 'text-green-700' : 'text-red-700';

	return (
		<div className={cn('flex flex-row gap-[8px]', className)}>
			{characteristics.map(({ description, icon, id, label }) => {
				// @ts-expect-error We will ignore the error since we know that the icon string is a valid Icon because we set it up manually.
				const Icon = Icons[icon];
				return (
					<TooltipProvider key={id}>
						<Tooltip>
							<TooltipTrigger asChild>
								<div
									key={id}
									className="flex flex-col max-w-[80px] gap-[4px] items-center"
								>
									<Icon className={color} />
									<p className="text-sm text-muted-foreground text-center">
										{label}
									</p>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p>{description}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				);
			})}
		</div>
	);
};

export { Characteristics };
