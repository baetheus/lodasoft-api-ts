import { Observable } from 'rxjs';
import { Errors, mixed } from 'io-ts';
import { AsyncData } from '@nll/dux';

export type TAPIRequest = {
	url: string;
	query?: object;
	body?: unknown;
};

export type TFullAPIRequest = TAPIRequest & {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
};

export type TAPIClient = {
	readonly request: (request: TFullAPIRequest) => Observable<AsyncData<Error, mixed>>;
};

export class ResponseValiationError extends Error {
	static create(errors: Errors): ResponseValiationError {
		return new ResponseValiationError(errors);
	}

	constructor(readonly errors: Errors) {
		super('ResponseValiationError');
		Object.setPrototypeOf(this, ResponseValiationError);
	}
}
