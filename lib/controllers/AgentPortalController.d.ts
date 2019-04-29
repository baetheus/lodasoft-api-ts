import { TAPIClient } from '../client/client';
import { LELodasoftApiModelsForgotPasswordBindingModel } from '../definitions/LELodasoftApiModelsForgotPasswordBindingModel';
import { LELodasoftApiModelsResetPasswordBindingModel } from '../definitions/LELodasoftApiModelsResetPasswordBindingModel';
import { LELodasoftApiModelsSharedPortalContentViewModel } from '../definitions/LELodasoftApiModelsSharedPortalContentViewModel';
import { LELodasoftCommonModelsAdminPrequalDetailViewModel } from '../definitions/LELodasoftCommonModelsAdminPrequalDetailViewModel';
import { LELodasoftCommonModelsAgentPortalAgentContact } from '../definitions/LELodasoftCommonModelsAgentPortalAgentContact';
import { LELodasoftCommonModelsLoanLoanDocTaskViewModel } from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
import { LELodasoftCommonModelsSharedApplicationView } from '../definitions/LELodasoftCommonModelsSharedApplicationView';
import { LELodasoftCommonModelsSharedCallbackModel } from '../definitions/LELodasoftCommonModelsSharedCallbackModel';
import { LELodasoftCommonModelsSharedConfirmRegisterRequestModel } from '../definitions/LELodasoftCommonModelsSharedConfirmRegisterRequestModel';
import { LELodasoftCommonModelsSharedGeneratePrequalLetterRequest } from '../definitions/LELodasoftCommonModelsSharedGeneratePrequalLetterRequest';
import { LELodasoftCommonModelsSharedGeneratePrequalLetterResponse } from '../definitions/LELodasoftCommonModelsSharedGeneratePrequalLetterResponse';
import { LELodasoftCommonModelsSharedPortalLiveData } from '../definitions/LELodasoftCommonModelsSharedPortalLiveData';
import { LELodasoftCommonModelsSharedPortalTasks } from '../definitions/LELodasoftCommonModelsSharedPortalTasks';
import { LELodasoftCommonModelsSharedReferralAgent } from '../definitions/LELodasoftCommonModelsSharedReferralAgent';
import { LELodasoftCommonModelsSharedReferralModel } from '../definitions/LELodasoftCommonModelsSharedReferralModel';
import { LELodasoftCommonModelsSharedReferralView } from '../definitions/LELodasoftCommonModelsSharedReferralView';
import { LELodasoftCommonModelsSharedRegisterModel } from '../definitions/LELodasoftCommonModelsSharedRegisterModel';
import { Option } from 'fp-ts/lib/Option';
import { Observable } from 'rxjs';
export declare type AgentPortalController = {
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
    readonly AgentPortal_GetLoanDataForAppId: (appId: number) => Observable<LELodasoftCommonModelsSharedApplicationView>;
    /**
     * @param { number } appId undefined
     */
    readonly AgentPortal_GetTasksforAppId: (appId: number) => Observable<LELodasoftCommonModelsSharedPortalTasks>;
    /**
     * @param { number } appId undefined
     */
    readonly AgentPortal_GetPrequalDetail: (appId: number) => Observable<LELodasoftCommonModelsAdminPrequalDetailViewModel>;
    /**
     * @param { number } appId undefined
     * @param { object } parameters
     */
    readonly AgentPortal_GeneratePrequalLetter: (appId: number, parameters: {
        body: LELodasoftCommonModelsSharedGeneratePrequalLetterRequest;
    }) => Observable<LELodasoftCommonModelsSharedGeneratePrequalLetterResponse>;
    /**
     * @param { number } appId undefined
     */
    readonly AgentPortal_GetAgentContactInfoForApplication: (appId: number) => Observable<LELodasoftCommonModelsAgentPortalAgentContact>;
    /**
     * @param { number } taskId undefined
     */
    readonly AgentPortal_ProgressTaskStatus: (taskId: number) => Observable<LELodasoftCommonModelsLoanLoanDocTaskViewModel>;
    /**
     * @param { number } taskId undefined
     * @param { string } borrowerNote undefined
     * @param { object } [parameters]
     */
    readonly AgentPortal_UploadDocument: (taskId: number, borrowerNote: string, parameters: {
        query?: {
            progressStatus: Option<boolean>;
        };
    }) => Observable<boolean>;
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
export declare const agentPortalController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, AgentPortalController>;
