import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsAdminMessageViewModel,
	LELodasoftCommonModelsAdminMessageViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminMessageViewModel';
import {
	LELodasoftCommonModelsMessageMessageViewModel,
	LELodasoftCommonModelsMessageMessageViewModelIO,
} from '../definitions/LELodasoftCommonModelsMessageMessageViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, array, partial, boolean } from 'io-ts';
import { Observable } from 'rxjs';

export type MessageController = {
	/**
	 * Get Borrower Messages by Application.  Logged in user must be on the loan
	 * @param { number } applicationId -
	 */
	readonly Message_GetBorrowerMessages: (
		applicationId: number,
	) => Observable<Array<LELodasoftCommonModelsAdminMessageViewModel>>;

	/**
	 * Get internal Messages by Application.  Logged in user must be on the loan
	 * @param { number } applicationId -
	 */
	readonly Message_GetInternalMessages: (
		applicationId: number,
	) => Observable<Array<LELodasoftCommonModelsAdminMessageViewModel>>;

	/**
	 * Get Borrower Messages by Loan Doc Task. Logged in user must be on the loan
	 * @param { number } loanDocTaskId -
	 */
	readonly Message_GetBorrowerTaskMessages: (
		loanDocTaskId: number,
	) => Observable<Array<LELodasoftCommonModelsAdminMessageViewModel>>;

	/**
	 * Get internal Messages by Loan Doc Task. Logged in user must be on the loan
	 * @param { number } loanDocTaskId -
	 */
	readonly Message_GetInternalTaskMessages: (
		loanDocTaskId: number,
	) => Observable<Array<LELodasoftCommonModelsAdminMessageViewModel>>;

	/**
	 * Get count of messages since last reply
	 * @param { number } applicationId -
	 */
	readonly Message_GetMessageCountSinceLastReply: (applicationId: number) => Observable<number>;

	/**
	 * Post message to internal user
	 * @param { object } parameters
	 */
	readonly Message_PostInternalMessage: (parameters: {
		body: LELodasoftCommonModelsAdminMessageViewModel;
	}) => Observable<LELodasoftCommonModelsAdminMessageViewModel>;

	/**
	 * Post message to borrower
	 * @param { object } parameters
	 */
	readonly Message_PostBorrowerMessage: (parameters: {
		body: LELodasoftCommonModelsAdminMessageViewModel;
	}) => Observable<LELodasoftCommonModelsAdminMessageViewModel>;

	/**
	 * Inserts a Message Into the Queue
	 * @param { boolean } appendEmailSignature - should the email signature be appended to the email
	 * @param { object } parameters
	 */
	readonly Message_InsertLeadEmailIntoQueue: (
		appendEmailSignature: boolean,
		parameters: { body: LELodasoftCommonModelsMessageMessageViewModel },
	) => Observable<unknown>;

	/**
	 * Inserts a Message Into the Queue
	 * @param { boolean } appendSMSSignature - should the SMS signature be appended to the email
	 * @param { object } parameters
	 */
	readonly Message_InsertLeadSMSIntoQueue: (
		appendSMSSignature: boolean,
		parameters: { body: LELodasoftCommonModelsMessageMessageViewModel },
	) => Observable<unknown>;

	/**
	 * Inserts a Message Into the Queue
	 * @param { boolean } appendEmailSignature - should the email signature be appended to the email
	 * @param { object } parameters
	 */
	readonly Message_InsertLoanEmailIntoQueue: (
		appendEmailSignature: boolean,
		parameters: { body: LELodasoftCommonModelsMessageMessageViewModel },
	) => Observable<unknown>;

	/**
	 * Inserts a Message Into the Queue
	 * @param { boolean } appendSMSSignature - should the SMS signature be appended to the SMS
	 * @param { object } parameters
	 */
	readonly Message_InsertLoanSMSIntoQueue: (
		appendSMSSignature: boolean,
		parameters: { body: LELodasoftCommonModelsMessageMessageViewModel },
	) => Observable<unknown>;
};

export const messageController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): MessageController => ({
		Message_GetBorrowerMessages: applicationId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Message/GetBorrowerMessages/${encodeURIComponent(
					number.encode(applicationId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsAdminMessageViewModelIO)));
		},

		Message_GetInternalMessages: applicationId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Message/GetInternalMessages/${encodeURIComponent(
					number.encode(applicationId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsAdminMessageViewModelIO)));
		},

		Message_GetBorrowerTaskMessages: loanDocTaskId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Message/GetBorrowerTaskMessages/${encodeURIComponent(
					number.encode(loanDocTaskId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsAdminMessageViewModelIO)));
		},

		Message_GetInternalTaskMessages: loanDocTaskId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Message/GetInternalTaskMessages/${encodeURIComponent(
					number.encode(loanDocTaskId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsAdminMessageViewModelIO)));
		},

		Message_GetMessageCountSinceLastReply: applicationId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Message/GetMessageCountSinceLastReply/${encodeURIComponent(
					number.encode(applicationId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(number));
		},

		Message_PostInternalMessage: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminMessageViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Message/PostInternalMessage`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsAdminMessageViewModelIO));
		},

		Message_PostBorrowerMessage: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminMessageViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Message/PostBorrowerMessage`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsAdminMessageViewModelIO));
		},

		Message_InsertLeadEmailIntoQueue: (appendEmailSignature, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMessageMessageViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Message/InsertLeadEmailIntoQueue/${encodeURIComponent(
					boolean.encode(appendEmailSignature).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Message_InsertLeadSMSIntoQueue: (appendSMSSignature, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMessageMessageViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Message/InsertLeadSMSIntoQueue/${encodeURIComponent(
					boolean.encode(appendSMSSignature).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Message_InsertLoanEmailIntoQueue: (appendEmailSignature, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMessageMessageViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Message/InsertLoanEmailIntoQueue/${encodeURIComponent(
					boolean.encode(appendEmailSignature).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Message_InsertLoanSMSIntoQueue: (appendSMSSignature, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMessageMessageViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Message/InsertLoanSMSIntoQueue/${encodeURIComponent(
					boolean.encode(appendSMSSignature).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},
	}),
);
