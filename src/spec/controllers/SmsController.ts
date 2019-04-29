import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsConfigurationSendTestSmsRequest,
	LELodasoftCommonModelsConfigurationSendTestSmsRequestIO,
} from '../definitions/LELodasoftCommonModelsConfigurationSendTestSmsRequest';
import {
	LELodasoftCommonModelsMessageSendSmsBetweenModel,
	LELodasoftCommonModelsMessageSendSmsBetweenModelIO,
} from '../definitions/LELodasoftCommonModelsMessageSendSmsBetweenModel';
import {
	LELodasoftCommonModelsMessageSendSmsViewModel,
	LELodasoftCommonModelsMessageSendSmsViewModelIO,
} from '../definitions/LELodasoftCommonModelsMessageSendSmsViewModel';
import {
	LELodasoftCommonModelsMessageSmsHistoryViewModel,
	LELodasoftCommonModelsMessageSmsHistoryViewModelIO,
} from '../definitions/LELodasoftCommonModelsMessageSmsHistoryViewModel';
import {
	LELodasoftCommonModelsMessageSmsSearchBorrowerRequest,
	LELodasoftCommonModelsMessageSmsSearchBorrowerRequestIO,
} from '../definitions/LELodasoftCommonModelsMessageSmsSearchBorrowerRequest';
import {
	LELodasoftDataAccessModelsAdminBorrowerBorrowerDto,
	LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO,
} from '../definitions/LELodasoftDataAccessModelsAdminBorrowerBorrowerDto';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { partial, array, string } from 'io-ts';
import { Observable } from 'rxjs';

export type SmsController = {
	/**
	 * @param { object } parameters
	 */
	readonly Sms_SendTestSms: (parameters: {
		body: LELodasoftCommonModelsConfigurationSendTestSmsRequest;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Sms_SendSms: (parameters: { body: LELodasoftCommonModelsMessageSendSmsViewModel }) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Sms_GetBetween: (parameters: {
		body: LELodasoftCommonModelsMessageSendSmsBetweenModel;
	}) => Observable<Array<LELodasoftCommonModelsMessageSmsHistoryViewModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Sms_GetBorrowerInfo: (parameters: {
		body: LELodasoftCommonModelsMessageSmsSearchBorrowerRequest;
	}) => Observable<Array<LELodasoftDataAccessModelsAdminBorrowerBorrowerDto>>;

	/**
	 * @param { string } companyGuid undefined
	 */
	readonly Sms_ReceiveSms: (companyGuid: string) => Observable<unknown>;
};

export const smsController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): SmsController => ({
		Sms_SendTestSms: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsConfigurationSendTestSmsRequestIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Sms/SendTestSms`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Sms_SendSms: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMessageSendSmsViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Sms/send-sms`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Sms_GetBetween: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMessageSendSmsBetweenModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Sms/get-between`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsMessageSmsHistoryViewModelIO)));
		},

		Sms_GetBorrowerInfo: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMessageSmsSearchBorrowerRequestIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Sms/get-borrower-info`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)));
		},

		Sms_ReceiveSms: companyGuid => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Sms/receive-sms/${encodeURIComponent(string.encode(companyGuid).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(unknownType));
		},
	}),
);
