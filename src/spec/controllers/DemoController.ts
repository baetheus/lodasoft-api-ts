import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsDemoRequestDemoViewModel,
	LELodasoftCommonModelsDemoRequestDemoViewModelIO,
} from '../definitions/LELodasoftCommonModelsDemoRequestDemoViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { partial } from 'io-ts';
import { Observable } from 'rxjs';

export type DemoController = {
	/**
	 * @param { object } parameters
	 */
	readonly Demo_RequestDemo: (parameters: {
		body: LELodasoftCommonModelsDemoRequestDemoViewModel;
	}) => Observable<unknown>;
};

export const demoController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): DemoController => ({
		Demo_RequestDemo: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsDemoRequestDemoViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/demo/request`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},
	}),
);
