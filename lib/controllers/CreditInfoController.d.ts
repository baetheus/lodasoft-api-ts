import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsLoanCreditViewModel } from '../definitions/LELodasoftCommonModelsLoanCreditViewModel';
import { LELodasoftCommonModelsThirdPartyCreditCreditRequestModel } from '../definitions/LELodasoftCommonModelsThirdPartyCreditCreditRequestModel';
import { LELodasoftCommonModelsThirdPartyCreditCreditResponseModel } from '../definitions/LELodasoftCommonModelsThirdPartyCreditCreditResponseModel';
import { LELodasoftDataAccessDbModelsConfigurationCreditModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationCreditModel';
import { Observable } from 'rxjs';
export declare type CreditInfoController = {
    /**
     * Submit a credit pull request
     * @param { object } parameters
     */
    readonly CreditInfo_PullCreditReport: (parameters: {
        body: LELodasoftCommonModelsThirdPartyCreditCreditRequestModel;
    }) => Observable<LELodasoftCommonModelsThirdPartyCreditCreditResponseModel>;
    /**
     * Get Credit Report History
     * @param { number } loanId - loan id to pull history
     */
    readonly CreditInfo_PullCreditReportHistory: (loanId: number) => Observable<Array<LELodasoftCommonModelsLoanCreditViewModel>>;
    /**
     * @param { object } parameters
     */
    readonly CreditInfo_UpsertCreditInfo: (parameters: {
        body: LELodasoftCommonModelsLoanCreditViewModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationCreditModel>;
    /**
     * @param { number } creditInfoId undefined
     */
    readonly CreditInfo_DeleteCreditModel: (creditInfoId: number) => Observable<unknown>;
};
export declare const creditInfoController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, CreditInfoController>;
