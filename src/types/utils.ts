/** @internal */
export type LiteralToPrimitive<T> = T extends number
	? number
	: T extends bigint
	  ? bigint
	  : T extends string
		  ? string
		  : T extends boolean
			  ? boolean
			  : T extends symbol
				  ? symbol
				  : T extends null
					  ? null
					  : T extends undefined
						  ? undefined
						  : never;
