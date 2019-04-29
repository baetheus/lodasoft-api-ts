import { Either } from 'fp-ts/lib/Either';
import { identity, success, Type, ValidationError } from 'io-ts';
import { PathReporter } from 'io-ts/lib/PathReporter';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const unknownType = new (class UnknownType extends Type<unknown> {
	readonly _tag: 'UnknownType' = 'UnknownType';

	constructor() {
		super('unknownType', (_: unknown): _ is unknown => true, success, identity);
	}
})();

export const throwValidation = <O>() =>
	map<Either<ValidationError[], O>, O>(v =>
		v.getOrElseL(() => {
			throw new Error(PathReporter.report(v).join('\n'));
		}),
	);

export const decodeAndMap = <A, O = A, I = unknown>(t: Type<A, O, I>) => (obs: Observable<any>) =>
	obs.pipe(
		map(t.decode),
		throwValidation(),
	);
