import { Either } from 'fp-ts/lib/Either';
import { Type, success, identity, ValidationError } from 'io-ts';
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
