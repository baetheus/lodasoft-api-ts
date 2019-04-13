import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsAdminAlertViewModel,
	LELodasoftCommonModelsAdminAlertViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminAlertViewModel';
import {
	LELodasoftCommonModelsAdminNotificationViewModel,
	LELodasoftCommonModelsAdminNotificationViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminNotificationViewModel';
import {
	LELodasoftDataAccessDbModelsAdminAlertModel,
	LELodasoftDataAccessDbModelsAdminAlertModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminAlertModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { array, string, number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type CommonController = {
	readonly Common_InsertDocExpire: () => Observable<AsyncData<Error, unknown>>;

	readonly Common_GetTaskStatusAlert: () => Observable<
		AsyncData<Error, Array<LELodasoftDataAccessDbModelsAdminAlertModel>>
	>;

	/**
	 * @param { string } alertTypeId undefined
	 */
	readonly Common_GetAlerts: (
		alertTypeId: string,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminAlertViewModel>>>;

	/**
	 * @param { number } alertId undefined
	 */
	readonly Common_ClearAlert: (alertId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { string } toUserId undefined
	 * @param { object } parameters
	 */
	readonly Common_SendAnonymous: (
		toUserId: string,
		parameters: { body: LELodasoftCommonModelsAdminNotificationViewModel },
	) => Observable<AsyncData<Error, unknown>>;
};

export const commonController = asks(
	(e: { apiClient: TAPIClient }): CommonController => ({
		Common_InsertDocExpire: () => {
			return e.apiClient
				.request({
					url: `/api/Common/InsertDocExpire`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Common_GetTaskStatusAlert: () => {
			return e.apiClient
				.request({
					url: `/api/Common/GetTaskStatusAlert`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsAdminAlertModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Common_GetAlerts: alertTypeId => {
			return e.apiClient
				.request({
					url: `/api/Common/GetAlerts/${encodeURIComponent(string.encode(alertTypeId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminAlertViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Common_ClearAlert: alertId => {
			return e.apiClient
				.request({
					url: `/api/Common/ClearAlert/${encodeURIComponent(number.encode(alertId).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Common_SendAnonymous: (toUserId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminNotificationViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Common/send-notification/${encodeURIComponent(string.encode(toUserId).toString())}`,
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
