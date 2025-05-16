export interface Characteristic {
	id: number;
	label: string;
	description: string;
	icon: string;
}

export const POSITIVE_IMPACT: Characteristic[] = [
	{
		id: 1,
		label: 'Curb Appeal',
		description: 'Well-maintained exterior, fresh paint, landscaping',
		icon: 'Home',
	},
	{
		id: 2,
		label: 'Recent Renovations',
		description: 'Upgraded kitchen, bathrooms, new roof or HVAC',
		icon: 'Hammer',
	},
	{
		id: 3,
		label: 'Natural Light',
		description: 'Large windows or good lighting layout',
		icon: 'Sun',
	},
	{
		id: 4,
		label: 'Quality Materials',
		description: 'Hardwood floors, granite countertops, etc.',
		icon: 'Layers',
	},
	{
		id: 5,
		label: 'Garage / Parking',
		description: 'Attached garage or dedicated parking space',
		icon: 'Car',
	},
	{
		id: 6,
		label: 'Desirable Location',
		description: 'Good schools, low crime, close to amenities',
		icon: 'MapPin',
	},
	{
		id: 7,
		label: 'View / Lot Quality',
		description: 'Scenic views, large lot, privacy',
		icon: 'Mountain',
	},
	{
		id: 8,
		label: 'Energy Efficiency',
		description: 'Solar panels, double-pane windows, insulation',
		icon: 'Leaf',
	},
];

export const NEGATIVE_IMPACT: Characteristic[] = [
	{
		id: 1,
		label: 'Deferred Maintenance',
		description: 'Visible damage, old systems, needed repairs',
		icon: 'Wrench',
	},
	{
		id: 2,
		label: 'Unpermitted Additions',
		description: 'Rooms or features added without city approval',
		icon: 'Ban',
	},
	{
		id: 3,
		label: 'Water Damage / Mold',
		description: 'Stains, smells, or structural issues',
		icon: 'Droplet',
	},
	{
		id: 4,
		label: 'Outdated Interiors',
		description: 'Old appliances, fixtures, or finishes',
		icon: 'Building',
	},
	{
		id: 5,
		label: 'Functional Obsolescence',
		description: 'Weird layouts, small closets, low ceilings',
		icon: 'Ruler',
	},
	{
		id: 6,
		label: 'Overbuilt for Area',
		description: 'High-end features in a low-value neighborhood',
		icon: 'TrendingDown',
	},
	{
		id: 7,
		label: 'Noise / Proximity to Nuisances',
		description: 'Busy roads, train tracks, industrial zones',
		icon: 'Volume2',
	},
];

// We will simulate 4 random positive and negative characteristics for each
// house from the above list
export function getRandomFourElements(array: unknown[]) {
	const shuffled = [...array].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, 4);
}

export const getRandomPositive = () => getRandomFourElements(POSITIVE_IMPACT);
export const getRandomNegative = () => getRandomFourElements(NEGATIVE_IMPACT);
