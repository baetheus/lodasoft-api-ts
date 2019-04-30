import { TAPIClient } from '../client/client';
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
import { decodeAndMap, unknownType } from '../utils/utils';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { string, partial, boolean, array, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';

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
	) => Observable<LELodasoftCommonModelsSharedCreateAccountResponseModel>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_ConfirmRegistrationToken: (parameters: {
		body: LELodasoftCommonModelsSharedConfirmRegisterRequestModel;
	}) => Observable<LELodasoftCommonModelsSharedRegisterModel>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_ConfirmRegistration: (parameters: {
		body: LELodasoftCommonModelsSharedRegisterModel;
	}) => Observable<boolean>;

	readonly BorrowerPortal_GetApplicationsForUser: () => Observable<
		Array<LELodasoftCommonModelsSharedApplicationView>
	>;

	readonly BorrowerPortal_GetPortalContent: () => Observable<LELodasoftApiModelsSharedPortalContentViewModel>;

	/**
	 * @param { number } appId undefined
	 */
	readonly BorrowerPortal_GetLoanDataForAppId: (
		appId: number,
	) => Observable<LELodasoftCommonModelsSharedApplicationView>;

	/**
	 * @param { number } appId undefined
	 */
	readonly BorrowerPortal_GetTasksforAppId: (appId: number) => Observable<LELodasoftCommonModelsSharedPortalTasks>;

	/**
	 * @param { number } appId undefined
	 */
	readonly BorrowerPortal_GetPrequalDetail: (
		appId: number,
	) => Observable<LELodasoftCommonModelsAdminPrequalDetailViewModel>;

	/**
	 * @param { number } appId undefined
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_GeneratePrequalLetter: (
		appId: number,
		parameters: { body: LELodasoftCommonModelsSharedGeneratePrequalLetterRequest },
	) => Observable<LELodasoftCommonModelsSharedGeneratePrequalLetterResponse>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_SendEmailResetPassword: (parameters: {
		body: LELodasoftApiModelsForgotPasswordBindingModel;
	}) => Observable<boolean>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_ResetPassword: (parameters: {
		body: LELodasoftApiModelsResetPasswordBindingModel;
	}) => Observable<unknown>;

	/**
	 * @param { number } appId undefined
	 */
	readonly BorrowerPortal_GetBorrowerContactInfoForApplication: (
		appId: number,
	) => Observable<LELodasoftCommonModelsBorrowerPortalBorrowerContact>;

	/**
	 * @param { number } applicationId undefined
	 */
	readonly BorrowerPortal_GetMessages: (
		applicationId: number,
	) => Observable<Array<LELodasoftCommonModelsAdminMessageViewModel>>;

	/**
	 * @param { number } loanDocTaskId undefined
	 */
	readonly BorrowerPortal_GetTaskMessages: (
		loanDocTaskId: number,
	) => Observable<Array<LELodasoftCommonModelsAdminMessageViewModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_PostMessage: (parameters: {
		body: LELodasoftApiModelsBorrowerPortalBorrowerMessageModel;
	}) => Observable<boolean>;

	/**
	 * @param { number } taskId undefined
	 */
	readonly BorrowerPortal_ProgressTaskStatus: (
		taskId: number,
	) => Observable<LELodasoftCommonModelsLoanLoanDocTaskViewModel>;

	/**
	 * @param { number } taskId undefined
	 * @param { string } borrowerNote undefined
	 * @param { object } [parameters]
	 */
	readonly BorrowerPortal_UploadDocument: (
		taskId: number,
		borrowerNote: string,
		parameters: { query?: { progressStatus: Option<boolean> } },
	) => Observable<boolean>;

	readonly BorrowerPortal_GetReferralAgents: () => Observable<Array<LELodasoftCommonModelsSharedReferralAgent>>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_ReferAFriend: (parameters: {
		body: LELodasoftCommonModelsSharedReferralModel;
	}) => Observable<boolean>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_RequestACallback: (parameters: {
		body: LELodasoftCommonModelsSharedCallbackModel;
	}) => Observable<boolean>;

	/**
	 * @param { object } parameters
	 */
	readonly BorrowerPortal_InitializeFormFree: (parameters: {
		body: LELodasoftApiControllersInitializeFormFreeRequest;
	}) => Observable<LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse>;

	readonly BorrowerPortal_GetUrgentLiveData: () => Observable<LELodasoftCommonModelsSharedPortalLiveData>;
};

export const borrowerPortalController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): BorrowerPortalController => ({
		BorrowerPortal_CreateAccount: (companyGuid, userGuid, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedCreateAccountModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/CreateAccount/${encodeURIComponent(
					string.encode(companyGuid).toString(),
				)}/${encodeURIComponent(string.encode(userGuid).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsSharedCreateAccountResponseModelIO));
		},

		BorrowerPortal_ConfirmRegistrationToken: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedConfirmRegisterRequestModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/ConfirmRegistrationToken`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsSharedRegisterModelIO));
		},

		BorrowerPortal_ConfirmRegistration: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedRegisterModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/ConfirmRegistration`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(boolean));
		},

		BorrowerPortal_GetApplicationsForUser: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/GetApplicationsForUser`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsSharedApplicationViewIO)));
		},

		BorrowerPortal_GetPortalContent: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/GetPortalContent`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftApiModelsSharedPortalContentViewModelIO));
		},

		BorrowerPortal_GetLoanDataForAppId: appId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/GetLoanDataForAppId/${encodeURIComponent(
					number.encode(appId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsSharedApplicationViewIO));
		},

		BorrowerPortal_GetTasksforAppId: appId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/GetTasksforAppId/${encodeURIComponent(
					number.encode(appId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsSharedPortalTasksIO));
		},

		BorrowerPortal_GetPrequalDetail: appId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/GetPrequalDetailForAppId/${encodeURIComponent(
					number.encode(appId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsAdminPrequalDetailViewModelIO));
		},

		BorrowerPortal_GeneratePrequalLetter: (appId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedGeneratePrequalLetterRequestIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/GeneratePrequalLetterForAppId/${encodeURIComponent(
					number.encode(appId).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsSharedGeneratePrequalLetterResponseIO));
		},

		BorrowerPortal_SendEmailResetPassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsForgotPasswordBindingModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/SendEmailResetPassword`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(boolean));
		},

		BorrowerPortal_ResetPassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsResetPasswordBindingModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/ResetPassword`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		BorrowerPortal_GetBorrowerContactInfoForApplication: appId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/GetBorrowerContactInfoForApplication/${encodeURIComponent(
					number.encode(appId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsBorrowerPortalBorrowerContactIO));
		},

		BorrowerPortal_GetMessages: applicationId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/GetMessages/${encodeURIComponent(
					number.encode(applicationId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsAdminMessageViewModelIO)));
		},

		BorrowerPortal_GetTaskMessages: loanDocTaskId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/GetTaskMessages/${encodeURIComponent(
					number.encode(loanDocTaskId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsAdminMessageViewModelIO)));
		},

		BorrowerPortal_PostMessage: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerPortalBorrowerMessageModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/PostMessage`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(boolean));
		},

		BorrowerPortal_ProgressTaskStatus: taskId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/ProgressTaskStatus/${encodeURIComponent(
					number.encode(taskId).toString(),
				)}`,
				method: 'POST',
			}).pipe(decodeAndMap(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO));
		},

		BorrowerPortal_UploadDocument: (taskId, borrowerNote, parameters) => {
			const encoded = partial({
				query: type({ progressStatus: createOptionFromNullable(boolean, 'progressStatus') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/UploadDocument/${encodeURIComponent(
					number.encode(taskId).toString(),
				)}/${encodeURIComponent(string.encode(borrowerNote).toString())}`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(boolean));
		},

		BorrowerPortal_GetReferralAgents: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/ReferralAgents`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsSharedReferralAgentIO)));
		},

		BorrowerPortal_ReferAFriend: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedReferralModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/ReferAFriend`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(boolean));
		},

		BorrowerPortal_RequestACallback: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedCallbackModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/RequestACallback`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(boolean));
		},

		BorrowerPortal_InitializeFormFree: parameters => {
			const encoded = partial({ body: LELodasoftApiControllersInitializeFormFreeRequestIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/InitializeFormFree`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO));
		},

		BorrowerPortal_GetUrgentLiveData: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/BorrowerPortal/LiveData`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsSharedPortalLiveDataIO));
		},
	}),
);
