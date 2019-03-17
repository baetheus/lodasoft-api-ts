import { AsyncData, fromEither } from '@nll/dux';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { array, boolean, number, partial, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResponseValiationError, TAPIClient } from '../client/client';
import {
  LELodasoftApiModelsForgotPasswordBindingModel,
  LELodasoftApiModelsForgotPasswordBindingModelIO,
} from '../definitions/LELodasoftApiModelsForgotPasswordBindingModel';
import {
  LELodasoftApiModelsResetPasswordBindingModel,
  LELodasoftApiModelsResetPasswordBindingModelIO,
} from '../definitions/LELodasoftApiModelsResetPasswordBindingModel';
import {
  LELodasoftApiModelsSharedPortalContentViewModel,
  LELodasoftApiModelsSharedPortalContentViewModelIO,
} from '../definitions/LELodasoftApiModelsSharedPortalContentViewModel';
import {
  LELodasoftCommonModelsAdminPrequalDetailViewModel,
  LELodasoftCommonModelsAdminPrequalDetailViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminPrequalDetailViewModel';
import {
  LELodasoftCommonModelsAgentPortalAgentContact,
  LELodasoftCommonModelsAgentPortalAgentContactIO,
} from '../definitions/LELodasoftCommonModelsAgentPortalAgentContact';
import {
  LELodasoftCommonModelsLoanLoanDocTaskViewModel,
  LELodasoftCommonModelsLoanLoanDocTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
import {
  LELodasoftCommonModelsSharedApplicationView,
  LELodasoftCommonModelsSharedApplicationViewIO,
} from '../definitions/LELodasoftCommonModelsSharedApplicationView';
import {
  LELodasoftCommonModelsSharedCallbackModel,
  LELodasoftCommonModelsSharedCallbackModelIO,
} from '../definitions/LELodasoftCommonModelsSharedCallbackModel';
import {
  LELodasoftCommonModelsSharedConfirmRegisterRequestModel,
  LELodasoftCommonModelsSharedConfirmRegisterRequestModelIO,
} from '../definitions/LELodasoftCommonModelsSharedConfirmRegisterRequestModel';
import {
  LELodasoftCommonModelsSharedGeneratePrequalLetterRequest,
  LELodasoftCommonModelsSharedGeneratePrequalLetterRequestIO,
} from '../definitions/LELodasoftCommonModelsSharedGeneratePrequalLetterRequest';
import {
  LELodasoftCommonModelsSharedGeneratePrequalLetterResponse,
  LELodasoftCommonModelsSharedGeneratePrequalLetterResponseIO,
} from '../definitions/LELodasoftCommonModelsSharedGeneratePrequalLetterResponse';
import {
  LELodasoftCommonModelsSharedPortalLiveData,
  LELodasoftCommonModelsSharedPortalLiveDataIO,
} from '../definitions/LELodasoftCommonModelsSharedPortalLiveData';
import {
  LELodasoftCommonModelsSharedPortalTasks,
  LELodasoftCommonModelsSharedPortalTasksIO,
} from '../definitions/LELodasoftCommonModelsSharedPortalTasks';
import {
  LELodasoftCommonModelsSharedReferralAgent,
  LELodasoftCommonModelsSharedReferralAgentIO,
} from '../definitions/LELodasoftCommonModelsSharedReferralAgent';
import {
  LELodasoftCommonModelsSharedReferralModel,
  LELodasoftCommonModelsSharedReferralModelIO,
} from '../definitions/LELodasoftCommonModelsSharedReferralModel';
import {
  LELodasoftCommonModelsSharedRegisterModel,
  LELodasoftCommonModelsSharedRegisterModelIO,
} from '../definitions/LELodasoftCommonModelsSharedRegisterModel';
import { unknownType } from '../utils/utils';

export type AgentPortalController = {
	/**
	 * @param { object } parameters
	 */
	readonly AgentPortal_ConfirmRegistration: (parameters: {
		body: LELodasoftCommonModelsSharedConfirmRegisterRequestModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsSharedRegisterModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly AgentPortal_SendEmailResetPassword: (parameters: {
		body: LELodasoftApiModelsForgotPasswordBindingModel;
	}) => Observable<AsyncData<Error, boolean>>;

	/**
	 * @param { object } parameters
	 */
	readonly AgentPortal_ResetPassword: (parameters: {
		body: LELodasoftApiModelsResetPasswordBindingModel;
	}) => Observable<AsyncData<Error, unknown>>;

	readonly AgentPortal_GetApplicationsForUser: () => Observable<
		AsyncData<Error, Array<LELodasoftCommonModelsSharedApplicationView>>
	>;

	readonly AgentPortal_GetPortalContent: () => Observable<
		AsyncData<Error, LELodasoftApiModelsSharedPortalContentViewModel>
	>;

	/**
	 * @param { number } appId undefined
	 */
	readonly AgentPortal_GetLoanDataForAppId: (
		appId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsSharedApplicationView>>;

	/**
	 * @param { number } appId undefined
	 */
	readonly AgentPortal_GetTasksforAppId: (
		appId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsSharedPortalTasks>>;

	/**
	 * @param { number } appId undefined
	 */
	readonly AgentPortal_GetPrequalDetail: (
		appId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminPrequalDetailViewModel>>;

	/**
	 * @param { number } appId undefined
	 * @param { object } parameters
	 */
	readonly AgentPortal_GeneratePrequalLetter: (
		appId: number,
		parameters: { body: LELodasoftCommonModelsSharedGeneratePrequalLetterRequest },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsSharedGeneratePrequalLetterResponse>>;

	/**
	 * @param { number } appId undefined
	 */
	readonly AgentPortal_GetAgentContactInfoForApplication: (
		appId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsAgentPortalAgentContact>>;

	/**
	 * @param { number } taskId undefined
	 */
	readonly AgentPortal_ProgressTaskStatus: (
		taskId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLoanLoanDocTaskViewModel>>;

	/**
	 * @param { number } taskId undefined
	 * @param { string } borrowerNote undefined
	 * @param { object } [parameters]
	 */
	readonly AgentPortal_UploadDocument: (
		taskId: number,
		borrowerNote: string,
		parameters: { query?: { progressStatus: Option<boolean> } },
	) => Observable<AsyncData<Error, boolean>>;

	readonly AgentPortal_GetReferralAgents: () => Observable<
		AsyncData<Error, Array<LELodasoftCommonModelsSharedReferralAgent>>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly AgentPortal_ReferAFriend: (parameters: {
		body: LELodasoftCommonModelsSharedReferralModel;
	}) => Observable<AsyncData<Error, boolean>>;

	/**
	 * @param { object } parameters
	 */
	readonly AgentPortal_RequestACallback: (parameters: {
		body: LELodasoftCommonModelsSharedCallbackModel;
	}) => Observable<AsyncData<Error, boolean>>;

	readonly AgentPortal_GetLiveData: () => Observable<AsyncData<Error, LELodasoftCommonModelsSharedPortalLiveData>>;
};

export const agentPortalController = asks(
	(e: { apiClient: TAPIClient }): AgentPortalController => ({
		AgentPortal_ConfirmRegistration: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedConfirmRegisterRequestModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/AgentPortal/ConfirmRegistrationToken`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsSharedRegisterModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		AgentPortal_SendEmailResetPassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsForgotPasswordBindingModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/AgentPortal/SendEmailResetPassword`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(boolean.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		AgentPortal_ResetPassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsResetPasswordBindingModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/AgentPortal/ResetPassword`,
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

		AgentPortal_GetApplicationsForUser: () => {
			return e.apiClient
				.request({
					url: `/api/AgentPortal/GetApplicationsForUser`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsSharedApplicationViewIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		AgentPortal_GetPortalContent: () => {
			return e.apiClient
				.request({
					url: `/api/AgentPortal/GetPortalContent`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsSharedPortalContentViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		AgentPortal_GetLoanDataForAppId: appId => {
			return e.apiClient
				.request({
					url: `/api/AgentPortal/GetLoanDataForAppId/${encodeURIComponent(number.encode(appId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsSharedApplicationViewIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		AgentPortal_GetTasksforAppId: appId => {
			return e.apiClient
				.request({
					url: `/api/AgentPortal/GetTasksForAppId/${encodeURIComponent(number.encode(appId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsSharedPortalTasksIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		AgentPortal_GetPrequalDetail: appId => {
			return e.apiClient
				.request({
					url: `/api/AgentPortal/GetPrequalDetailForAppId/${encodeURIComponent(
						number.encode(appId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAdminPrequalDetailViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		AgentPortal_GeneratePrequalLetter: (appId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedGeneratePrequalLetterRequestIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/AgentPortal/GeneratePrequalLetterForAppId/${encodeURIComponent(
						number.encode(appId).toString(),
					)}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsSharedGeneratePrequalLetterResponseIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		AgentPortal_GetAgentContactInfoForApplication: appId => {
			return e.apiClient
				.request({
					url: `/api/AgentPortal/GetAgentContactInfoForApplication/${encodeURIComponent(
						number.encode(appId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAgentPortalAgentContactIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		AgentPortal_ProgressTaskStatus: taskId => {
			return e.apiClient
				.request({
					url: `/api/AgentPortal/ProgressTaskStatus/${encodeURIComponent(number.encode(taskId).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLoanLoanDocTaskViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		AgentPortal_UploadDocument: (taskId, borrowerNote, parameters) => {
			const encoded = partial({ query: type({ progressStatus: createOptionFromNullable(boolean) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/AgentPortal/UploadDocument/${encodeURIComponent(
						number.encode(taskId).toString(),
					)}/${encodeURIComponent(string.encode(borrowerNote).toString())}`,
					method: 'POST',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(boolean.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		AgentPortal_GetReferralAgents: () => {
			return e.apiClient
				.request({
					url: `/api/AgentPortal/ReferralAgents`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsSharedReferralAgentIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		AgentPortal_ReferAFriend: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedReferralModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/AgentPortal/ReferAFriend`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(boolean.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		AgentPortal_RequestACallback: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedCallbackModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/AgentPortal/RequestACallback`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(boolean.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		AgentPortal_GetLiveData: () => {
			return e.apiClient
				.request({
					url: `/api/AgentPortal/LiveData`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsSharedPortalLiveDataIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
