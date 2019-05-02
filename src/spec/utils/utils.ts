import { Either } from 'fp-ts/lib/Either';
import { failure as ioFailure, identity, success, Type, ValidationError } from 'io-ts';
import { failure } from 'io-ts/lib/PathReporter';
import { Observable, of, throwError } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

export const unknownType = new (class UnknownType extends Type<unknown> {
	readonly _tag: 'UnknownType' = 'UnknownType';

	constructor() {
		super('unknownType', (_: unknown): _ is unknown => true, success, identity);
	}
})();

export const chainValidation = <O>(obs: Observable<Either<ValidationError[], O>>) =>
	obs.pipe(mergeMap(v => v.fold(l => throwError(new Error(failure(l).join('\n'))), r => of(r))));

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
