import { TAPIClient } from '../client/client';
import { LELodasoftApiControllersInitializeFormFreeRequest } from '../definitions/LELodasoftApiControllersInitializeFormFreeRequest';
import { LELodasoftApiModelsBorrowerApplicationViewModel } from '../definitions/LELodasoftApiModelsBorrowerApplicationViewModel';
import { LELodasoftApiModelsOnlineAppFeatureFlags } from '../definitions/LELodasoftApiModelsOnlineAppFeatureFlags';
import { LELodasoftCommonModelsConfigurationApplicationViewModel } from '../definitions/LELodasoftCommonModelsConfigurationApplicationViewModel';
import { LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel';
import { LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel';
import { LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequest } from '../definitions/LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequest';
import { LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponse } from '../definitions/LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponse';
import { LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel } from '../definitions/LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel';
import { LELodasoftDataAccessDbModelsConfigurationLoanTypeModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanTypeModel';
import { LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse } from '../definitions/LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse';
import { Observable } from 'rxjs';
export declare type OnlineAppController = {
    /**
     * Get feature flags for Online App
     * @param { number } loanId - loan id
     */
    readonly OnlineApp_GetFeatureFlags: (loanId: number) => Observable<LELodasoftApiModelsOnlineAppFeatureFlags>;
    /**
     * Get loan types for online application
     * @param { number } loanId - loan / application id
     */
    readonly OnlineApp_GetLoanTypes: (loanId: number) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanTypeModel>>;
    /**
     * Get application view model
     * @param { number } loanId - loan / application id
     */
    readonly OnlineApp_GetApplicationViewModel: (loanId: number) => Observable<LELodasoftCommonModelsConfigurationApplicationViewModel>;
    /**
     * Update Loan type on an application
     * @param { number } loanId - loan / application id
     * @param { number } loanTypeId - loan type id
     */
    readonly OnlineApp_UpdateLoanType: (loanId: number, loanTypeId: number) => Observable<LELodasoftApiModelsBorrowerApplicationViewModel>;
    /**
     * Update online application status
     * @param { number } loanId - loan / application id
     */
    readonly OnlineApp_GetStatus: (loanId: number) => Observable<LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel>;
    /**
     * Update online application status
     * @param { number } loanId - loan / application id
     * @param { number } mortgageId - id of the mortgage model
     * @param { number } currentStatusId - current status to save
     */
    readonly OnlineApp_UpdateStatus: (loanId: number, mortgageId: number, currentStatusId: number) => Observable<LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel>;
    /**
     * Submit Online Application
     * @param { number } loanId - loan / application id
     */
    readonly OnlineApp_SubmitOnlineApp: (loanId: number) => Observable<unknown>;
    /**
     * @param { string } companyGuid undefined
     * @param { object } parameters
     */
    readonly OnlineApp_CreateBorrowerAccountAndMortgage: (companyGuid: string, parameters: {
        body: LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequest;
    }) => Observable<LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponse>;
    /**
     * @deprecated
     * @param { string } companyGuid undefined
     */
    readonly OnlineApp_GetAllWizardConfigs: (companyGuid: string) => Observable<Array<LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel>>;
    /**
     * @deprecated
     * @param { string } companyGuid undefined
     * @param { number } wizardConfigId undefined
     */
    readonly OnlineApp_GetExtractedWizardConfigById: (companyGuid: string, wizardConfigId: number) => Observable<LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel>;
    /**
     * @deprecated
     * @param { string } companyGuid undefined
     * @param { object } parameters
     */
    readonly OnlineApp_InitializeFormFreeByCompanyGuid: (companyGuid: string, parameters: {
        body: LELodasoftApiControllersInitializeFormFreeRequest;
    }) => Observable<LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse>;
    /**
     * Initialize Form Free for Online Application (authed). This will link the request to the loanid and the primary borrower on that loan.
     * @param { number } loanId -
     * @param { object } parameters
     */
    readonly OnlineApp_InitializeFormFree: (loanId: number, parameters: {
        body: LELodasoftApiControllersInitializeFormFreeRequest;
    }) => Observable<LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse>;
    /**
     * Initialize Form Free for Online Application (authed). This will link the request to the loanid and the borrowerId passed.
     * @param { number } loanId - the loan id
     * @param { number } borrowerId - id of the borrower to initialize form free for
     */
    readonly OnlineApp_InitializeFormFreeForBorrower: (loanId: number, borrowerId: number) => Observable<LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse>;
    /**
     * Initialize Form Free for Online Application (authed). This will link the request to the loanid and the borrowerId passed.
     * @param { number } loanId - the loan id
     * @param { number } borrowerId - id of the borrower to initialize form free for
     */
    readonly OnlineApp_MarkFormFreeForBorrowerComplete: (loanId: number, borrowerId: number) => Observable<unknown>;
};
export declare const onlineAppController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, OnlineAppController>;
