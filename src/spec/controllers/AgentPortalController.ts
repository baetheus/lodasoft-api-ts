import { TAPIClient } from '../client/client';
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
	LELodasoftCommonModelsSharedReferralView,
	LELodasoftCommonModelsSharedReferralViewIO,
} from '../definitions/LELodasoftCommonModelsSharedReferralView';
import {
	LELodasoftCommonModelsSharedRegisterModel,
	LELodasoftCommonModelsSharedRegisterModelIO,
} from '../definitions/LELodasoftCommonModelsSharedRegisterModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { partial, boolean, array, number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';

export type AgentPortalController = {
	/**
	 * @param { object } parameters
	 */
	readonly AgentPortal_ConfirmRegistrationToken: (parameters: {
		body: LELodasoftCommonModelsSharedConfirmRegisterRequestModel;
	}) => Observable<LELodasoftCommonModelsSharedRegisterModel>;

	/**
	 * @param { object } parameters
	 */
	readonly AgentPortal_ConfirmRegistration: (parameters: {
		body: LELodasoftCommonModelsSharedRegisterModel;
	}) => Observable<boolean>;

	/**
	 * @param { object } parameters
	 */
	readonly AgentPortal_SendEmailResetPassword: (parameters: {
		body: LELodasoftApiModelsForgotPasswordBindingModel;
	}) => Observable<boolean>;

	/**
	 * @param { object } parameters
	 */
	readonly AgentPortal_ResetPassword: (parameters: {
		body: LELodasoftApiModelsResetPasswordBindingModel;
	}) => Observable<unknown>;

	readonly AgentPortal_GetApplicationsForUser: () => Observable<Array<LELodasoftCommonModelsSharedApplicationView>>;

	readonly AgentPortal_GetReferralsForUser: () => Observable<Array<LELodasoftCommonModelsSharedReferralView>>;

	readonly AgentPortal_GetPortalContent: () => Observable<LELodasoftApiModelsSharedPortalContentViewModel>;

	/**
	 * @param { number } appId undefined
	 */
	readonly AgentPortal_GetLoanDataForAppId: (
		appId: number,
	) => Observable<LELodasoftCommonModelsSharedApplicationView>;

	/**
	 * @param { number } appId undefined
	 */
	readonly AgentPortal_GetTasksforAppId: (appId: number) => Observable<LELodasoftCommonModelsSharedPortalTasks>;

	/**
	 * @param { number } appId undefined
	 */
	readonly AgentPortal_GetPrequalDetail: (
		appId: number,
	) => Observable<LELodasoftCommonModelsAdminPrequalDetailViewModel>;

	/**
	 * @param { number } appId undefined
	 * @param { object } parameters
	 */
	readonly AgentPortal_GeneratePrequalLetter: (
		appId: number,
		parameters: { body: LELodasoftCommonModelsSharedGeneratePrequalLetterRequest },
	) => Observable<LELodasoftCommonModelsSharedGeneratePrequalLetterResponse>;

	/**
	 * @param { number } appId undefined
	 */
	readonly AgentPortal_GetAgentContactInfoForApplication: (
		appId: number,
	) => Observable<LELodasoftCommonModelsAgentPortalAgentContact>;

	/**
	 * @param { number } taskId undefined
	 */
	readonly AgentPortal_ProgressTaskStatus: (
		taskId: number,
	) => Observable<LELodasoftCommonModelsLoanLoanDocTaskViewModel>;

	/**
	 * @param { number } taskId undefined
	 * @param { string } borrowerNote undefined
	 * @param { object } [parameters]
	 */
	readonly AgentPortal_UploadDocument: (
		taskId: number,
		borrowerNote: string,
		parameters: { query?: { progressStatus: Option<boolean> } },
	) => Observable<boolean>;

	readonly AgentPortal_GetReferralAgents: () => Observable<Array<LELodasoftCommonModelsSharedReferralAgent>>;

	/**
	 * @param { object } parameters
	 */
	readonly AgentPortal_ReferAFriend: (parameters: {
		body: LELodasoftCommonModelsSharedReferralModel;
	}) => Observable<boolean>;

	/**
	 * @param { object } parameters
	 */
	readonly AgentPortal_RequestACallback: (parameters: {
		body: LELodasoftCommonModelsSharedCallbackModel;
	}) => Observable<boolean>;

	readonly AgentPortal_GetLiveData: () => Observable<LELodasoftCommonModelsSharedPortalLiveData>;
};

export const agentPortalController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): AgentPortalController => ({
		AgentPortal_ConfirmRegistrationToken: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedConfirmRegisterRequestModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/ConfirmRegistrationToken`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsSharedRegisterModelIO));
		},

		AgentPortal_ConfirmRegistration: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedRegisterModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/ConfirmRegistration`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(boolean));
		},

		AgentPortal_SendEmailResetPassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsForgotPasswordBindingModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/SendEmailResetPassword`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(boolean));
		},

		AgentPortal_ResetPassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsResetPasswordBindingModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/ResetPassword`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		AgentPortal_GetApplicationsForUser: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/GetApplicationsForUser`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsSharedApplicationViewIO)));
		},

		AgentPortal_GetReferralsForUser: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/GetReferralsForUser`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsSharedReferralViewIO)));
		},

		AgentPortal_GetPortalContent: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/GetPortalContent`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftApiModelsSharedPortalContentViewModelIO));
		},

		AgentPortal_GetLoanDataForAppId: appId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/GetLoanDataForAppId/${encodeURIComponent(
					number.encode(appId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsSharedApplicationViewIO));
		},

		AgentPortal_GetTasksforAppId: appId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/GetTasksForAppId/${encodeURIComponent(
					number.encode(appId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsSharedPortalTasksIO));
		},

		AgentPortal_GetPrequalDetail: appId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/GetPrequalDetailForAppId/${encodeURIComponent(
					number.encode(appId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsAdminPrequalDetailViewModelIO));
		},

		AgentPortal_GeneratePrequalLetter: (appId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedGeneratePrequalLetterRequestIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/GeneratePrequalLetterForAppId/${encodeURIComponent(
					number.encode(appId).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsSharedGeneratePrequalLetterResponseIO));
		},

		AgentPortal_GetAgentContactInfoForApplication: appId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/GetAgentContactInfoForApplication/${encodeURIComponent(
					number.encode(appId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsAgentPortalAgentContactIO));
		},

		AgentPortal_ProgressTaskStatus: taskId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/ProgressTaskStatus/${encodeURIComponent(
					number.encode(taskId).toString(),
				)}`,
				method: 'POST',
			}).pipe(decodeAndMap(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO));
		},

		AgentPortal_UploadDocument: (taskId, borrowerNote, parameters) => {
			const encoded = partial({
				query: type({ progressStatus: createOptionFromNullable(boolean, 'progressStatus') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/UploadDocument/${encodeURIComponent(
					number.encode(taskId).toString(),
				)}/${encodeURIComponent(string.encode(borrowerNote).toString())}`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(boolean));
		},

		AgentPortal_GetReferralAgents: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/ReferralAgents`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsSharedReferralAgentIO)));
		},

		AgentPortal_ReferAFriend: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedReferralModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/ReferAFriend`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(boolean));
		},

		AgentPortal_RequestACallback: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedCallbackModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/RequestACallback`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(boolean));
		},

		AgentPortal_GetLiveData: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/AgentPortal/LiveData`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsSharedPortalLiveDataIO));
		},
	}),
);
