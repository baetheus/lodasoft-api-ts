import { ResponseValiationError, TAPIClient } from '../client/client';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type IntegrationHistoryController = {
	/**
	 * @param { number } integrationHistoryId undefined
	 */
	readonly IntegrationHistory_GetDocument: (integrationHistoryId: number) => Observable<AsyncData<Error, unknown>>;
};

export const integrationHistoryController = asks(
	(e: { apiClient: TAPIClient }): IntegrationHistoryController => ({
		IntegrationHistory_GetDocument: integrationHistoryId => {
			return e.apiClient
				.request({
					url: `/api/integration-history/${encodeURIComponent(
						number.encode(integrationHistoryId).toString(),
					)}/document`,
					method: 'GET',
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
