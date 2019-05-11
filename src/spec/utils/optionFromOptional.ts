import { fromNullable, None, Option, Some } from 'fp-ts/lib/Option';
import * as t from 'io-ts';

/**
 * A modification of OptionFromNullable from io-ts-types to encode to undefined
 * instead of null. (Since the lodasoft api attributes special characteristics to null)
 */

export class OptionFromOptionalType<C extends t.Any, A = any, O = A, I = unknown> extends t.Type<A, O, I> {
	readonly _tag: 'OptionFromOptionalType' = 'OptionFromOptionalType';
	constructor(
		name: string,
		is: OptionFromOptionalType<C, A, O, I>['is'],
		validate: OptionFromOptionalType<C, A, O, I>['validate'],
		serialize: OptionFromOptionalType<C, A, O, I>['encode'],
		readonly type: C,
	) {
		super(name, is, validate, serialize);
	}
}

export interface OptionFromOptional<C extends t.Mixed>
	extends OptionFromOptionalType<C, Option<t.TypeOf<C>>, t.OutputOf<C> | null, unknown> {}

export const createOptionFromOptional = <C extends t.Mixed>(
	codec: C,
	name: string = `Option<${codec.name}>`,
): OptionFromOptional<C> => {
	const Nullable = t.union([codec, t.null, t.undefined]);
	return new OptionFromOptionalType(
		name,
		(m): m is Option<t.TypeOf<C>> => m instanceof None || (m instanceof Some && codec.is(m.value)),
		(s, c) => {
			const validation = Nullable.validate(s, c);
			return validation.isLeft() ? (validation as any) : t.success(fromNullable(validation.value));
		},
		a => a.map(codec.encode).toUndefined(),
		codec,
	);
};
