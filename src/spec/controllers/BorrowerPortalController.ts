import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftApiControllersInitializeFormFreeRequest,
	LELodasoftApiControllersInitializeFormFreeRequestIO,
} from '../definitions/LELodasoftApiControllersInitializeFormFreeRequest';
import {
	LELodasoftApiModelsBorrowerPortalBorrowerMessageModel,
	LELodasoftApiModelsBorrowerPortalBorrowerMessageModelIO,
} from '../definitions/LELodasoftApiModelsBorrowerPortalBorrowerMessageModel';
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
	LELodasoftCommonModelsAdminMessageViewModel,
	LELodasoftCommonModelsAdminMessageViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminMessageViewModel';
import {
	LELodasoftCommonModelsAdminPrequalDetailViewModel,
	LELodasoftCommonModelsAdminPrequalDetailViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminPrequalDetailViewModel';
import {
	LELodasoftCommonModelsBorrowerPortalBorrowerContact,
	LELodasoftCommonModelsBorrowerPortalBorrowerContactIO,
} from '../definitions/LELodasoftCommonModelsBorrowerPortalBorrowerContact';
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
	LELodasoftCommonModelsSharedCreateAccountModel,
	LELodasoftCommonModelsSharedCreateAccountModelIO,
} from '../definitions/LELodasoftCommonModelsSharedCreateAccountModel';
import {
	LELodasoftCommonModelsSharedCreateAccountResponseModel,
	LELodasoftCommonModelsSharedCreateAccountResponseModelIO,
} from '../definitions/LELodasoftCommonModelsSharedCreateAccountResponseModel';
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
import {
	LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse,
	LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO,
} from '../definitions/LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { string, partial, boolean, array, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type BorrowerPortalController = {
	/**
	 * @param { string } companyGuid undefined
	 * @param { string } userGuid undefined
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_CreateAccount: (
		companyGuid: string,
		userGuid: string,
		parameters: { body: LELodasoftCommonModelsSharedCreateAccountModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsSharedCreateAccountResponseModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_ConfirmRegistrationToken: (parameters: {
		body: LELodasoftCommonModelsSharedConfirmRegisterRequestModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsSharedRegisterModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_ConfirmRegistration: (parameters: {
		body: LELodasoftCommonModelsSharedRegisterModel;
	}) => Observable<AsyncData<Error, boolean>>;

	readonly BorrowerPortal_GetApplicationsForUser: () => Observable<
		AsyncData<Error, Array<LELodasoftCommonModelsSharedApplicationView>>
	>;

	readonly BorrowerPortal_GetPortalContent: () => Observable<
		AsyncData<Error, LELodasoftApiModelsSharedPortalContentViewModel>
	>;

	/**
	 * @param { number } appId undefined
	 */
	readonly BorrowerPortal_GetLoanDataForAppId: (
		appId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsSharedApplicationView>>;

	/**
	 * @param { number } appId undefined
	 */
	readonly BorrowerPortal_GetTasksforAppId: (
		appId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsSharedPortalTasks>>;

	/**
	 * @param { number } appId undefined
	 */
	readonly BorrowerPortal_GetPrequalDetail: (
		appId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminPrequalDetailViewModel>>;

	/**
	 * @param { number } appId undefined
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_GeneratePrequalLetter: (
		appId: number,
		parameters: { body: LELodasoftCommonModelsSharedGeneratePrequalLetterRequest },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsSharedGeneratePrequalLetterResponse>>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_SendEmailResetPassword: (parameters: {
		body: LELodasoftApiModelsForgotPasswordBindingModel;
	}) => Observable<AsyncData<Error, boolean>>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_ResetPassword: (parameters: {
		body: LELodasoftApiModelsResetPasswordBindingModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } appId undefined
	 */
	readonly BorrowerPortal_GetBorrowerContactInfoForApplication: (
		appId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsBorrowerPortalBorrowerContact>>;

	/**
	 * @param { number } applicationId undefined
	 */
	readonly BorrowerPortal_GetMessages: (
		applicationId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminMessageViewModel>>>;

	/**
	 * @param { number } loanDocTaskId undefined
	 */
	readonly BorrowerPortal_GetTaskMessages: (
		loanDocTaskId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminMessageViewModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_PostMessage: (parameters: {
		body: LELodasoftApiModelsBorrowerPortalBorrowerMessageModel;
	}) => Observable<AsyncData<Error, boolean>>;

	/**
	 * @param { number } taskId undefined
	 */
	readonly BorrowerPortal_ProgressTaskStatus: (
		taskId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLoanLoanDocTaskViewModel>>;

	/**
	 * @param { number } taskId undefined
	 * @param { string } borrowerNote undefined
	 * @param { object } [parameters]
	 */
	readonly BorrowerPortal_UploadDocument: (
		taskId: number,
		borrowerNote: string,
		parameters: { query?: { progressStatus: Option<boolean> } },
	) => Observable<AsyncData<Error, boolean>>;

	readonly BorrowerPortal_GetReferralAgents: () => Observable<
		AsyncData<Error, Array<LELodasoftCommonModelsSharedReferralAgent>>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_ReferAFriend: (parameters: {
		body: LELodasoftCommonModelsSharedReferralModel;
	}) => Observable<AsyncData<Error, boolean>>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_RequestACallback: (parameters: {
		body: LELodasoftCommonModelsSharedCallbackModel;
	}) => Observable<AsyncData<Error, boolean>>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_InitializeFormFree: (parameters: {
		body: LELodasoftApiControllersInitializeFormFreeRequest;
	}) => Observable<AsyncData<Error, LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse>>;

	readonly BorrowerPortal_GetUrgentLiveData: () => Observable<
		AsyncData<Error, LELodasoftCommonModelsSharedPortalLiveData>
	>;
};

export const borrowerPortalController = asks(
	(e: { apiClient: TAPIClient }): BorrowerPortalController => ({
		BorrowerPortal_CreateAccount: (companyGuid, userGuid, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedCreateAccountModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/CreateAccount/${encodeURIComponent(
						string.encode(companyGuid).toString(),
					)}/${encodeURIComponent(string.encode(userGuid).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsSharedCreateAccountResponseModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		BorrowerPortal_ConfirmRegistrationToken: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedConfirmRegisterRequestModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/ConfirmRegistrationToken`,
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

		BorrowerPortal_ConfirmRegistration: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedRegisterModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/ConfirmRegistration`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(boolean.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		BorrowerPortal_GetApplicationsForUser: () => {
			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/GetApplicationsForUser`,
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

		BorrowerPortal_GetPortalContent: () => {
			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/GetPortalContent`,
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

		BorrowerPortal_GetLoanDataForAppId: appId => {
			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/GetLoanDataForAppId/${encodeURIComponent(
						number.encode(appId).toString(),
					)}`,
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

		BorrowerPortal_GetTasksforAppId: appId => {
			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/GetTasksforAppId/${encodeURIComponent(number.encode(appId).toString())}`,
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

		BorrowerPortal_GetPrequalDetail: appId => {
			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/GetPrequalDetailForAppId/${encodeURIComponent(
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

		BorrowerPortal_GeneratePrequalLetter: (appId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedGeneratePrequalLetterRequestIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/GeneratePrequalLetterForAppId/${encodeURIComponent(
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

		BorrowerPortal_SendEmailResetPassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsForgotPasswordBindingModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/SendEmailResetPassword`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(boolean.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		BorrowerPortal_ResetPassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsResetPasswordBindingModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/ResetPassword`,
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

		BorrowerPortal_GetBorrowerContactInfoForApplication: appId => {
			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/GetBorrowerContactInfoForApplication/${encodeURIComponent(
						number.encode(appId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsBorrowerPortalBorrowerContactIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		BorrowerPortal_GetMessages: applicationId => {
			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/GetMessages/${encodeURIComponent(
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

		BorrowerPortal_GetTaskMessages: loanDocTaskId => {
			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/GetTaskMessages/${encodeURIComponent(
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

		BorrowerPortal_PostMessage: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerPortalBorrowerMessageModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/PostMessage`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(boolean.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		BorrowerPortal_ProgressTaskStatus: taskId => {
			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/ProgressTaskStatus/${encodeURIComponent(
						number.encode(taskId).toString(),
					)}`,
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

		BorrowerPortal_UploadDocument: (taskId, borrowerNote, parameters) => {
			const encoded = partial({ query: type({ progressStatus: createOptionFromNullable(boolean) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/UploadDocument/${encodeURIComponent(
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

		BorrowerPortal_GetReferralAgents: () => {
			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/ReferralAgents`,
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

		BorrowerPortal_ReferAFriend: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedReferralModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/ReferAFriend`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(boolean.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		BorrowerPortal_RequestACallback: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedCallbackModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/RequestACallback`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(boolean.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		BorrowerPortal_InitializeFormFree: parameters => {
			const encoded = partial({ body: LELodasoftApiControllersInitializeFormFreeRequestIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/InitializeFormFree`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		BorrowerPortal_GetUrgentLiveData: () => {
			return e.apiClient
				.request({
					url: `/api/BorrowerPortal/LiveData`,
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
