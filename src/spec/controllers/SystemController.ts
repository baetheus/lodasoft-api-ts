import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftApiModelsSystemVersionResult,
	LELodasoftApiModelsSystemVersionResultIO,
} from '../definitions/LELodasoftApiModelsSystemVersionResult';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type SystemController = {
	/**
	 * Get System Version
	 */
	readonly System_GetVersion: () => Observable<AsyncData<Error, LELodasoftApiModelsSystemVersionResult>>;
};

export const systemController = asks(
	(e: { apiClient: TAPIClient }): SystemController => ({
		System_GetVersion: () => {
			return e.apiClient
				.request({
					url: `/api/System/Version`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsSystemVersionResultIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
