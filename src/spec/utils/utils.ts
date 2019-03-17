import { Type, success, identity } from 'io-ts';
export const unknownType = new class UnknownType extends Type<unknown> {
	readonly _tag: 'UnknownType' = 'UnknownType';

	constructor() {
		super('unknownType', (_: unknown): _ is unknown => true, success, identity);
	}
}();
