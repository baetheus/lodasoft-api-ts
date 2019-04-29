import { Observable } from 'rxjs';
import { mixed } from 'io-ts';

export type TAPIRequest = {
	url: string;
	query?: object;
	body?: unknown;
};

export type TFullAPIRequest = TAPIRequest & {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
};

export type TAPIClient = {
	readonly request: (request: TFullAPIRequest) => Observable<mixed>;
};
