import { Option } from 'fp-ts/lib/Option';
import { Observable } from 'rxjs';
import { TAPIClient } from '../client/client';
import { LELodasoftApiModelsUserUserLookupView } from '../definitions/LELodasoftApiModelsUserUserLookupView';
import { LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel } from '../definitions/LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel';
import { LELodasoftDataAccessDbModelsConfigurationLoanStatusModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusModel';
import { LELodasoftDataAccessDbModelsConfigurationRoleModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationRoleModel';
export declare type LookupController = {
    /**
     * Get all roles for user's company
     */
    readonly Lookup_getAllRolesByCompanyId: () => Observable<Array<LELodasoftDataAccessDbModelsConfigurationRoleModel>>;
    /**
     * Get all users
     */
    readonly Lookup_getAllUsers: () => Observable<Array<LELodasoftApiModelsUserUserLookupView>>;
    /**
     * Get list of los providers
     * @param { object } [parameters]
     */
    readonly Lookup_GetLosProviders: (parameters: {
        query?: {
            providerId: Option<number>;
        };
    }) => Observable<Array<LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel>>;
    /**
     * Get loan statuses for loan purpose/loan status by user and role
     * @param { number } loanPurposeId -
     * @param { number } loanStatusId -
     */
    readonly Lookup_GetLoanStatusForLoanPurpose: (loanPurposeId: number, loanStatusId: number) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>;
    /**
     * Get lead statuses for loan purpose/loan status by user and role
     * @param { number } loanPurposeId -
     * @param { number } loanStatusId -
     */
    readonly Lookup_GetLeadStatusForLoanPurpose: (loanPurposeId: number, loanStatusId: number) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>;
};
export declare const lookupController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, LookupController>;
