import { Either } from 'fp-ts/lib/Either';
import { fromNullable, Option } from 'fp-ts/lib/Option';
import { failure as ioFailure, identity, success, Type, ValidationError } from 'io-ts';
import { formatValidationError } from 'io-ts-reporters';
import { Observable, of, throwError } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

export const unknownType = new (class UnknownType extends Type<unknown> {
	readonly _tag: 'UnknownType' = 'UnknownType';

	constructor() {
		super('unknownType', (_: unknown): _ is unknown => true, success, identity);
	}
})();

export class ValidatorError extends Error {
	readonly validations: Option<ValidationError[]>;

	constructor(msg: string, validations?: ValidationError[]) {
		super(msg);
		this.validations = fromNullable(validations);
	}
}

const formatErrors = (vs: ValidationError[]) => {
	const message = vs
		.map(formatValidationError)
		.map(v => v.getOrElse(''))
		.join('\n\n');
	const err = new ValidatorError(message, vs);
	return err;
};

export const chainValidation = <O>(obs: Observable<Either<ValidationError[], O>>) =>
	obs.pipe(mergeMap(v => v.fold(l => throwError(formatErrors(l)), r => of(r))));

export const decodeAndMap = <A, O = A, I = unknown>(t: Type<A, O, I>) => (obs: Observable<any>) =>
	obs.pipe(
		map(t.decode),
		chainValidation,
	);

// EnumType Class
export class EnumType<A> extends Type<A> {
	public readonly _tag: 'EnumType' = 'EnumType';
	public enumObject!: object;
	public constructor(e: object, name?: string) {
		super(
			name || 'enum',
			(u): u is A =>
				Object.keys(this.enumObject)
					.map(k => this.enumObject[k])
					.some(v => v === u),
			(u, c) => (this.is(u) ? success(u) : ioFailure(u, c)),
			identity,
		);
		this.enumObject = e;
	}
}

// simple helper function
export const createEnumType = <T>(e: object, name?: string) => new EnumType<T>(e, name);
