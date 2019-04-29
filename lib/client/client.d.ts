import { Observable } from 'rxjs';
import { mixed } from 'io-ts';
export declare type TAPIRequest = {
    url: string;
    query?: object;
    body?: unknown;
};
export declare type TFullAPIRequest = TAPIRequest & {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
};
export declare type TAPIClient = {
    readonly request: (request: TFullAPIRequest) => Observable<mixed>;
};
