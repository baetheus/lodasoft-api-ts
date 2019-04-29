import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMessageMessageHistoryViewModel,
	LELodasoftCommonModelsMessageMessageHistoryViewModelIO,
} from '../definitions/LELodasoftCommonModelsMessageMessageHistoryViewModel';
import {
	LELodasoftCommonModelsMessageMessageViewModel,
	LELodasoftCommonModelsMessageMessageViewModelIO,
} from '../definitions/LELodasoftCommonModelsMessageMessageViewModel';
import {
	LELodasoftDataAccessDbModelsSharedEmailServiceModel,
	LELodasoftDataAccessDbModelsSharedEmailServiceModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsSharedEmailServiceModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { partial, string, number, array } from 'io-ts';
import { Observable } from 'rxjs';

export type EmailController = {
	/**
	 * @param { object } parameters
	 */
	readonly Email_SendTestEmail: (parameters: {
		body: LELodasoftDataAccessDbModelsSharedEmailServiceModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Email_AutoDiscoverExchangeUrl: (parameters: {
		body: LELodasoftDataAccessDbModelsSharedEmailServiceModel;
	}) => Observable<string>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly Email_GetEmailsSentToBorrower: (
		borrowerId: number,
	) => Observable<Array<LELodasoftCommonModelsMessageMessageHistoryViewModel>>;

	/**
	 * @param { number } appId undefined
	 */
	readonly Email_GetEmailsSentForApp: (
		appId: number,
	) => Observable<Array<LELodasoftCommonModelsMessageMessageHistoryViewModel>>;

	/**
	 * @param { number } leadId undefined
	 */
	readonly Email_GetEmailsSentForLead: (
		leadId: number,
	) => Observable<Array<LELodasoftCommonModelsMessageMessageHistoryViewModel>>;

	/**
	 * @param { number } agentId undefined
	 */
	readonly Email_GetEmailsSentToAgent: (
		agentId: number,
	) => Observable<Array<LELodasoftCommonModelsMessageMessageHistoryViewModel>>;

	/**
	 * @param { number } messageId undefined
	 */
	readonly Email_SetEmailPriorityToRetry: (
		messageId: number,
	) => Observable<LELodasoftCommonModelsMessageMessageViewModel>;

	readonly Email_GetFailedEmailsSentByUser: () => Observable<
		Array<LELodasoftCommonModelsMessageMessageHistoryViewModel>
	>;
};

export const emailController = asks(
	(e: { apiClient: TAPIClient }): EmailController => ({
		Email_SendTestEmail: parameters => {
			const encoded = partial({ body: LELodasoftDataAccessDbModelsSharedEmailServiceModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Email/SendTestEmail`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(unknownType));
		},

		Email_AutoDiscoverExchangeUrl: parameters => {
			const encoded = partial({ body: LELodasoftDataAccessDbModelsSharedEmailServiceModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Email/AutoDiscoverExchangeUrl`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(string));
		},

		Email_GetEmailsSentToBorrower: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/Email/GetEmailsSentToBorrower/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMessageMessageHistoryViewModelIO)));
		},

		Email_GetEmailsSentForApp: appId => {
			return e.apiClient
				.request({
					url: `/api/Email/GetEmailsSentForApp/${encodeURIComponent(number.encode(appId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMessageMessageHistoryViewModelIO)));
		},

		Email_GetEmailsSentForLead: leadId => {
			return e.apiClient
				.request({
					url: `/api/Email/GetEmailsSentForLead/${encodeURIComponent(number.encode(leadId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMessageMessageHistoryViewModelIO)));
		},

		Email_GetEmailsSentToAgent: agentId => {
			return e.apiClient
				.request({
					url: `/api/Email/GetEmailsSentToAgent/${encodeURIComponent(number.encode(agentId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMessageMessageHistoryViewModelIO)));
		},

		Email_SetEmailPriorityToRetry: messageId => {
			return e.apiClient
				.request({
					url: `/api/Email/SetEmailPriorityToRetry/${encodeURIComponent(
						number.encode(messageId).toString(),
					)}`,
					method: 'POST',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMessageMessageViewModelIO));
		},

		Email_GetFailedEmailsSentByUser: () => {
			return e.apiClient
				.request({
					url: `/api/Email/GetFailedEmailsSentByUser`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMessageMessageHistoryViewModelIO)));
		},
	}),
);
