import { ResponseValiationError, TAPIClient } from '../client/client';
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
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { partial, array, string } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type SmsController = {
	/**
	 * @param { object } parameters
	 */
	readonly Sms_SendTestSms: (parameters: {
		body: LELodasoftCommonModelsConfigurationSendTestSmsRequest;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Sms_SendSms: (parameters: {
		body: LELodasoftCommonModelsMessageSendSmsViewModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Sms_GetBetween: (parameters: {
		body: LELodasoftCommonModelsMessageSendSmsBetweenModel;
	}) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMessageSmsHistoryViewModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Sms_GetBorrowerInfo: (parameters: {
		body: LELodasoftCommonModelsMessageSmsSearchBorrowerRequest;
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessModelsAdminBorrowerBorrowerDto>>>;

	/**
	 * @param { string } companyGuid undefined
	 */
	readonly Sms_ReceiveSms: (companyGuid: string) => Observable<AsyncData<Error, unknown>>;
};

export const smsController = asks(
	(e: { apiClient: TAPIClient }): SmsController => ({
		Sms_SendTestSms: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsConfigurationSendTestSmsRequestIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Sms/SendTestSms`,
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

		Sms_SendSms: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMessageSendSmsViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Sms/send-sms`,
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

		Sms_GetBetween: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMessageSendSmsBetweenModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Sms/get-between`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMessageSmsHistoryViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Sms_GetBorrowerInfo: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMessageSmsSearchBorrowerRequestIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Sms/get-borrower-info`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Sms_ReceiveSms: companyGuid => {
			return e.apiClient
				.request({
					url: `/api/Sms/receive-sms/${encodeURIComponent(string.encode(companyGuid).toString())}`,
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
