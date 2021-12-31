// eslint-disable-next-line @typescript-eslint/no-empty-function
export function assert(x: unknown): asserts x {}

export function isType<T>(x: unknown): x is T {
	return true;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function assertType<T>(x: unknown): asserts x is T {}
