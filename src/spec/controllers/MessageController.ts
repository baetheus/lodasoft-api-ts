import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsAdminMessageViewModel,
	LELodasoftCommonModelsAdminMessageViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminMessageViewModel';
import {
	LELodasoftCommonModelsMessageMessageViewModel,
	LELodasoftCommonModelsMessageMessageViewModelIO,
} from '../definitions/LELodasoftCommonModelsMessageMessageViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, array, partial, boolean } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MessageController = {
	/**
	 * Get Borrower Messages by Application.  Logged in user must be on the loan
	 * @param { number } applicationId -
	 */
	readonly Message_GetBorrowerMessages: (
		applicationId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminMessageViewModel>>>;

	/**
	 * Get internal Messages by Application.  Logged in user must be on the loan
	 * @param { number } applicationId -
	 */
	readonly Message_GetInternalMessages: (
		applicationId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminMessageViewModel>>>;

	/**
	 * Get Borrower Messages by Loan Doc Task. Logged in user must be on the loan
	 * @param { number } loanDocTaskId -
	 */
	readonly Message_GetBorrowerTaskMessages: (
		loanDocTaskId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminMessageViewModel>>>;

	/**
	 * Get internal Messages by Loan Doc Task. Logged in user must be on the loan
	 * @param { number } loanDocTaskId -
	 */
	readonly Message_GetInternalTaskMessages: (
		loanDocTaskId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminMessageViewModel>>>;

	/**
	 * Get count of messages since last reply
	 * @param { number } applicationId -
	 */
	readonly Message_GetMessageCountSinceLastReply: (applicationId: number) => Observable<AsyncData<Error, number>>;

	/**
	 * Post message to internal user
	 * @param { object } parameters
	 */
	readonly Message_PostInternalMessage: (parameters: {
		body: LELodasoftCommonModelsAdminMessageViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminMessageViewModel>>;

	/**
	 * Post message to borrower
	 * @param { object } parameters
	 */
	readonly Message_PostBorrowerMessage: (parameters: {
		body: LELodasoftCommonModelsAdminMessageViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminMessageViewModel>>;

	/**
	 * Inserts a Message Into the Queue
	 * @param { boolean } appendEmailSignature - should the email signature be appended to the email
	 * @param { object } parameters
	 */
	readonly Message_InsertLeadEmailIntoQueue: (
		appendEmailSignature: boolean,
		parameters: { body: LELodasoftCommonModelsMessageMessageViewModel },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * Inserts a Message Into the Queue
	 * @param { boolean } appendSMSSignature - should the SMS signature be appended to the email
	 * @param { object } parameters
	 */
	readonly Message_InsertLeadSMSIntoQueue: (
		appendSMSSignature: boolean,
		parameters: { body: LELodasoftCommonModelsMessageMessageViewModel },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * Inserts a Message Into the Queue
	 * @param { boolean } appendEmailSignature - should the email signature be appended to the email
	 * @param { object } parameters
	 */
	readonly Message_InsertLoanEmailIntoQueue: (
		appendEmailSignature: boolean,
		parameters: { body: LELodasoftCommonModelsMessageMessageViewModel },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * Inserts a Message Into the Queue
	 * @param { boolean } appendSMSSignature - should the SMS signature be appended to the SMS
	 * @param { object } parameters
	 */
	readonly Message_InsertLoanSMSIntoQueue: (
		appendSMSSignature: boolean,
		parameters: { body: LELodasoftCommonModelsMessageMessageViewModel },
	) => Observable<AsyncData<Error, unknown>>;
};

export const messageController = asks(
	(e: { apiClient: TAPIClient }): MessageController => ({
		Message_GetBorrowerMessages: applicationId => {
			return e.apiClient
				.request({
					url: `/api/Message/GetBorrowerMessages/${encodeURIComponent(
						number.encode(applicationId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminMessageViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Message_GetInternalMessages: applicationId => {
			return e.apiClient
				.request({
					url: `/api/Message/GetInternalMessages/${encodeURIComponent(
						number.encode(applicationId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminMessageViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Message_GetBorrowerTaskMessages: loanDocTaskId => {
			return e.apiClient
				.request({
					url: `/api/Message/GetBorrowerTaskMessages/${encodeURIComponent(
						number.encode(loanDocTaskId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminMessageViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Message_GetInternalTaskMessages: loanDocTaskId => {
			return e.apiClient
				.request({
					url: `/api/Message/GetInternalTaskMessages/${encodeURIComponent(
						number.encode(loanDocTaskId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminMessageViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Message_GetMessageCountSinceLastReply: applicationId => {
			return e.apiClient
				.request({
					url: `/api/Message/GetMessageCountSinceLastReply/${encodeURIComponent(
						number.encode(applicationId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(number.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		Message_PostInternalMessage: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminMessageViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Message/PostInternalMessage`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAdminMessageViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Message_PostBorrowerMessage: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminMessageViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Message/PostBorrowerMessage`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAdminMessageViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Message_InsertLeadEmailIntoQueue: (appendEmailSignature, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMessageMessageViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Message/InsertLeadEmailIntoQueue/${encodeURIComponent(
						boolean.encode(appendEmailSignature).toString(),
					)}`,
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

		Message_InsertLeadSMSIntoQueue: (appendSMSSignature, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMessageMessageViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Message/InsertLeadSMSIntoQueue/${encodeURIComponent(
						boolean.encode(appendSMSSignature).toString(),
					)}`,
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

		Message_InsertLoanEmailIntoQueue: (appendEmailSignature, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMessageMessageViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Message/InsertLoanEmailIntoQueue/${encodeURIComponent(
						boolean.encode(appendEmailSignature).toString(),
					)}`,
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

		Message_InsertLoanSMSIntoQueue: (appendSMSSignature, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMessageMessageViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Message/InsertLoanSMSIntoQueue/${encodeURIComponent(
						boolean.encode(appendSMSSignature).toString(),
					)}`,
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
