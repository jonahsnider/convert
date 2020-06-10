export type ConverterGroup<T> = (
	quantity: Readonly<bigint | number>
) => {
	from: (
		fromUnit: T
	) => {
		to: (toUnit: T) => typeof quantity;
	};
};

export {convert, Unit} from './convert';
export {unitFamilies} from './unitFamilies';
