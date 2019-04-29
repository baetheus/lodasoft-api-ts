import { TAPIClient } from '../client/client';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number } from 'io-ts';
import { Observable } from 'rxjs';

export type IntegrationHistoryController = {
	/**
	 * @param { number } integrationHistoryId undefined
	 */
	readonly IntegrationHistory_GetDocument: (integrationHistoryId: number) => Observable<unknown>;
};

export const integrationHistoryController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): IntegrationHistoryController => ({
		IntegrationHistory_GetDocument: integrationHistoryId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/integration-history/${encodeURIComponent(
					number.encode(integrationHistoryId).toString(),
				)}/document`,
				method: 'GET',
			}).pipe(decodeAndMap(unknownType));
		},
	}),
);
