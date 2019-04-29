import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageAddressViewModel } from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { LELodasoftCommonModelsMortgageResidencyAddressViewModel } from '../definitions/LELodasoftCommonModelsMortgageResidencyAddressViewModel';
import { Observable } from 'rxjs';
export declare type MortgageResidencyAddressController = {
    /**
     * @param { number } residencyAddressId undefined
     */
    readonly MortgageResidencyAddress_GetResidencyAddressById: (residencyAddressId: number) => Observable<LELodasoftCommonModelsMortgageResidencyAddressViewModel>;
    /**
     * @param { number } residencyAddressId undefined
     * @param { object } parameters
     */
    readonly MortgageResidencyAddress_UpdateResidencyAddress: (residencyAddressId: number, parameters: {
        body: LELodasoftCommonModelsMortgageResidencyAddressViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageResidencyAddressViewModel>;
    /**
     * @param { number } residencyAddressId undefined
     */
    readonly MortgageResidencyAddress_DeleteResidencyAddress: (residencyAddressId: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly MortgageResidencyAddress_InsertResidencyAddress: (parameters: {
        body: LELodasoftCommonModelsMortgageResidencyAddressViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageResidencyAddressViewModel>;
    /**
     * @param { number } residencyAddressId undefined
     * @param { object } parameters
     */
    readonly MortgageResidencyAddress_InsertAddress: (residencyAddressId: number, parameters: {
        body: LELodasoftCommonModelsMortgageAddressViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageAddressViewModel>;
};
export declare const mortgageResidencyAddressController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageResidencyAddressController>;
