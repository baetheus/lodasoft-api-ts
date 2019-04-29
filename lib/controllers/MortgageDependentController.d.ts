import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageDependentViewModel } from '../definitions/LELodasoftCommonModelsMortgageDependentViewModel';
import { Observable } from 'rxjs';
export declare type MortgageDependentController = {
    /**
     * @param { number } dependentId undefined
     */
    readonly MortgageDependent_GetDependentById: (dependentId: number) => Observable<LELodasoftCommonModelsMortgageDependentViewModel>;
    /**
     * @param { number } dependentId undefined
     * @param { object } parameters
     */
    readonly MortgageDependent_UpdateDependent: (dependentId: number, parameters: {
        body: LELodasoftCommonModelsMortgageDependentViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageDependentViewModel>;
    /**
     * @param { number } dependentId undefined
     */
    readonly MortgageDependent_DeleteDependent: (dependentId: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly MortgageDependent_InsertDependent: (parameters: {
        body: LELodasoftCommonModelsMortgageDependentViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageDependentViewModel>;
};
export declare const mortgageDependentController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageDependentController>;
