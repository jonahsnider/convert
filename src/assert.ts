export function assert(x: unknown): asserts x {}

export function isType<T>(x: unknown): x is T {
	return true;
}

export function assertType<T>(x: unknown): asserts x is T {}
