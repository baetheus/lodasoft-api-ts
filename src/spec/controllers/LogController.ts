import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftApiControllersLogControllerLogModel,
	LELodasoftApiControllersLogControllerLogModelIO,
} from '../definitions/LELodasoftApiControllersLogControllerLogModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { array, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type LogController = {
	/**
	 * @param { object } parameters
	 */
	readonly Log_Log: (parameters: {
		body: Array<LELodasoftApiControllersLogControllerLogModel>;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Log_LogBatchAuthed: (parameters: {
		body: Array<LELodasoftApiControllersLogControllerLogModel>;
	}) => Observable<AsyncData<Error, unknown>>;
};

export const logController = asks(
	(e: { apiClient: TAPIClient }): LogController => ({
		Log_Log: parameters => {
			const encoded = partial({ body: array(LELodasoftApiControllersLogControllerLogModelIO) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/log/batch`,
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

		Log_LogBatchAuthed: parameters => {
			const encoded = partial({ body: array(LELodasoftApiControllersLogControllerLogModelIO) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/log/batch-authed`,
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
