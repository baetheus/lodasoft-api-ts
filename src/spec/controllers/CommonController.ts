import { TAPIClient } from '../client/client';
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
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { array, string, number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type CommonController = {
	readonly Common_InsertDocExpire: () => Observable<unknown>;

	readonly Common_GetTaskStatusAlert: () => Observable<Array<LELodasoftDataAccessDbModelsAdminAlertModel>>;

	/**
	 * @param { string } alertTypeId undefined
	 */
	readonly Common_GetAlerts: (alertTypeId: string) => Observable<Array<LELodasoftCommonModelsAdminAlertViewModel>>;

	/**
	 * @param { number } alertId undefined
	 */
	readonly Common_ClearAlert: (alertId: number) => Observable<unknown>;

	/**
	 * @param { string } toUserId undefined
	 * @param { object } parameters
	 */
	readonly Common_SendAnonymous: (
		toUserId: string,
		parameters: { body: LELodasoftCommonModelsAdminNotificationViewModel },
	) => Observable<unknown>;
};

export const commonController = asks(
	(e: { apiClient: TAPIClient }): CommonController => ({
		Common_InsertDocExpire: () => {
			return e.apiClient
				.request({
					url: `/api/Common/InsertDocExpire`,
					method: 'POST',
				})
				.pipe(decodeAndMap(unknownType));
		},

		Common_GetTaskStatusAlert: () => {
			return e.apiClient
				.request({
					url: `/api/Common/GetTaskStatusAlert`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsAdminAlertModelIO)));
		},

		Common_GetAlerts: alertTypeId => {
			return e.apiClient
				.request({
					url: `/api/Common/GetAlerts/${encodeURIComponent(string.encode(alertTypeId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsAdminAlertViewModelIO)));
		},

		Common_ClearAlert: alertId => {
			return e.apiClient
				.request({
					url: `/api/Common/ClearAlert/${encodeURIComponent(number.encode(alertId).toString())}`,
					method: 'POST',
				})
				.pipe(decodeAndMap(unknownType));
		},

		Common_SendAnonymous: (toUserId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminNotificationViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Common/send-notification/${encodeURIComponent(string.encode(toUserId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(unknownType));
		},
	}),
);
