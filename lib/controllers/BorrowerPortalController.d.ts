import { TAPIClient } from '../client/client';
import { LELodasoftApiControllersInitializeFormFreeRequest } from '../definitions/LELodasoftApiControllersInitializeFormFreeRequest';
import { LELodasoftApiModelsBorrowerPortalBorrowerMessageModel } from '../definitions/LELodasoftApiModelsBorrowerPortalBorrowerMessageModel';
import { LELodasoftApiModelsForgotPasswordBindingModel } from '../definitions/LELodasoftApiModelsForgotPasswordBindingModel';
import { LELodasoftApiModelsResetPasswordBindingModel } from '../definitions/LELodasoftApiModelsResetPasswordBindingModel';
import { LELodasoftApiModelsSharedPortalContentViewModel } from '../definitions/LELodasoftApiModelsSharedPortalContentViewModel';
import { LELodasoftCommonModelsAdminMessageViewModel } from '../definitions/LELodasoftCommonModelsAdminMessageViewModel';
import { LELodasoftCommonModelsAdminPrequalDetailViewModel } from '../definitions/LELodasoftCommonModelsAdminPrequalDetailViewModel';
import { LELodasoftCommonModelsBorrowerPortalBorrowerContact } from '../definitions/LELodasoftCommonModelsBorrowerPortalBorrowerContact';
import { LELodasoftCommonModelsLoanLoanDocTaskViewModel } from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
import { LELodasoftCommonModelsSharedApplicationView } from '../definitions/LELodasoftCommonModelsSharedApplicationView';
import { LELodasoftCommonModelsSharedCallbackModel } from '../definitions/LELodasoftCommonModelsSharedCallbackModel';
import { LELodasoftCommonModelsSharedConfirmRegisterRequestModel } from '../definitions/LELodasoftCommonModelsSharedConfirmRegisterRequestModel';
import { LELodasoftCommonModelsSharedCreateAccountModel } from '../definitions/LELodasoftCommonModelsSharedCreateAccountModel';
import { LELodasoftCommonModelsSharedCreateAccountResponseModel } from '../definitions/LELodasoftCommonModelsSharedCreateAccountResponseModel';
import { LELodasoftCommonModelsSharedGeneratePrequalLetterRequest } from '../definitions/LELodasoftCommonModelsSharedGeneratePrequalLetterRequest';
import { LELodasoftCommonModelsSharedGeneratePrequalLetterResponse } from '../definitions/LELodasoftCommonModelsSharedGeneratePrequalLetterResponse';
import { LELodasoftCommonModelsSharedPortalLiveData } from '../definitions/LELodasoftCommonModelsSharedPortalLiveData';
import { LELodasoftCommonModelsSharedPortalTasks } from '../definitions/LELodasoftCommonModelsSharedPortalTasks';
import { LELodasoftCommonModelsSharedReferralAgent } from '../definitions/LELodasoftCommonModelsSharedReferralAgent';
import { LELodasoftCommonModelsSharedReferralModel } from '../definitions/LELodasoftCommonModelsSharedReferralModel';
import { LELodasoftCommonModelsSharedRegisterModel } from '../definitions/LELodasoftCommonModelsSharedRegisterModel';
import { LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse } from '../definitions/LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse';
import { Option } from 'fp-ts/lib/Option';
import { Observable } from 'rxjs';
export declare type BorrowerPortalController = {
    /**
     * @param { string } companyGuid undefined
     * @param { string } userGuid undefined
     * @param { object } parameters
     */
    readonly BorrowerPortal_CreateAccount: (companyGuid: string, userGuid: string, parameters: {
        body: LELodasoftCommonModelsSharedCreateAccountModel;
    }) => Observable<LELodasoftCommonModelsSharedCreateAccountResponseModel>;
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
    readonly BorrowerPortal_GetApplicationsForUser: () => Observable<Array<LELodasoftCommonModelsSharedApplicationView>>;
    readonly BorrowerPortal_GetPortalContent: () => Observable<LELodasoftApiModelsSharedPortalContentViewModel>;
    /**
     * @param { number } appId undefined
     */
    readonly BorrowerPortal_GetLoanDataForAppId: (appId: number) => Observable<LELodasoftCommonModelsSharedApplicationView>;
    /**
     * @param { number } appId undefined
     */
    readonly BorrowerPortal_GetTasksforAppId: (appId: number) => Observable<LELodasoftCommonModelsSharedPortalTasks>;
    /**
     * @param { number } appId undefined
     */
    readonly BorrowerPortal_GetPrequalDetail: (appId: number) => Observable<LELodasoftCommonModelsAdminPrequalDetailViewModel>;
    /**
     * @param { number } appId undefined
     * @param { object } parameters
     */
    readonly BorrowerPortal_GeneratePrequalLetter: (appId: number, parameters: {
        body: LELodasoftCommonModelsSharedGeneratePrequalLetterRequest;
    }) => Observable<LELodasoftCommonModelsSharedGeneratePrequalLetterResponse>;
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
    readonly BorrowerPortal_GetBorrowerContactInfoForApplication: (appId: number) => Observable<LELodasoftCommonModelsBorrowerPortalBorrowerContact>;
    /**
     * @param { number } applicationId undefined
     */
    readonly BorrowerPortal_GetMessages: (applicationId: number) => Observable<Array<LELodasoftCommonModelsAdminMessageViewModel>>;
    /**
     * @param { number } loanDocTaskId undefined
     */
    readonly BorrowerPortal_GetTaskMessages: (loanDocTaskId: number) => Observable<Array<LELodasoftCommonModelsAdminMessageViewModel>>;
    /**
     * @param { object } parameters
     */
    readonly BorrowerPortal_PostMessage: (parameters: {
        body: LELodasoftApiModelsBorrowerPortalBorrowerMessageModel;
    }) => Observable<boolean>;
    /**
     * @param { number } taskId undefined
     */
    readonly BorrowerPortal_ProgressTaskStatus: (taskId: number) => Observable<LELodasoftCommonModelsLoanLoanDocTaskViewModel>;
    /**
     * @param { number } taskId undefined
     * @param { string } borrowerNote undefined
     * @param { object } [parameters]
     */
    readonly BorrowerPortal_UploadDocument: (taskId: number, borrowerNote: string, parameters: {
        query?: {
            progressStatus: Option<boolean>;
        };
    }) => Observable<boolean>;
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
export declare const borrowerPortalController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, BorrowerPortalController>;
