import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageAddressViewModel } from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { LELodasoftCommonModelsMortgageLiabilityViewModel } from '../definitions/LELodasoftCommonModelsMortgageLiabilityViewModel';
import { Observable } from 'rxjs';
export declare type MortgageLiabilityController = {
    /**
     * @param { number } liabilityId undefined
     */
    readonly MortgageLiability_GetLiabilityById: (liabilityId: number) => Observable<LELodasoftCommonModelsMortgageLiabilityViewModel>;
    /**
     * @param { number } liabilityId undefined
     * @param { object } parameters
     */
    readonly MortgageLiability_UpdateLiability: (liabilityId: number, parameters: {
        body: LELodasoftCommonModelsMortgageLiabilityViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageLiabilityViewModel>;
    /**
     * @param { number } liabilityId undefined
     */
    readonly MortgageLiability_DeleteLiability: (liabilityId: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly MortgageLiability_InsertLiability: (parameters: {
        body: LELodasoftCommonModelsMortgageLiabilityViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageLiabilityViewModel>;
    /**
     * @param { number } liabilityId undefined
     * @param { object } parameters
     */
    readonly MortgageLiability_InsertAddress: (liabilityId: number, parameters: {
        body: LELodasoftCommonModelsMortgageAddressViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageAddressViewModel>;
};
export declare const mortgageLiabilityController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageLiabilityController>;
