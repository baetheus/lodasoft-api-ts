import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsDemoRequestDemoViewModel,
	LELodasoftCommonModelsDemoRequestDemoViewModelIO,
} from '../definitions/LELodasoftCommonModelsDemoRequestDemoViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type DemoController = {
	/**
	 * @param { object } parameters
	 */
	readonly Demo_RequestDemo: (parameters: {
		body: LELodasoftCommonModelsDemoRequestDemoViewModel;
	}) => Observable<AsyncData<Error, unknown>>;
};

export const demoController = asks(
	(e: { apiClient: TAPIClient }): DemoController => ({
		Demo_RequestDemo: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsDemoRequestDemoViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/demo/request`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},
	}),
);
