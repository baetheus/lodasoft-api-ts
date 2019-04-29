import { TAPIClient } from '../client/client';
import {
	LELodasoftApiControllersLogControllerLogModel,
	LELodasoftApiControllersLogControllerLogModelIO,
} from '../definitions/LELodasoftApiControllersLogControllerLogModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { array, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type LogController = {
	/**
	 * @param { object } parameters
	 */
	readonly Log_Log: (parameters: {
		body: Array<LELodasoftApiControllersLogControllerLogModel>;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Log_LogBatchAuthed: (parameters: {
		body: Array<LELodasoftApiControllersLogControllerLogModel>;
	}) => Observable<unknown>;
};

export const logController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): LogController => ({
		Log_Log: parameters => {
			const encoded = partial({ body: array(LELodasoftApiControllersLogControllerLogModelIO) }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/log/batch`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Log_LogBatchAuthed: parameters => {
			const encoded = partial({ body: array(LELodasoftApiControllersLogControllerLogModelIO) }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/log/batch-authed`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},
	}),
);
