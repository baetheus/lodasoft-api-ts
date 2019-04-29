import { Observable } from 'rxjs';
import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageAddressViewModel } from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
export declare type MortgageAddressController = {
    /**
     * @param { number } addressId undefined
     */
    readonly MortgageAddress_GetAddressById: (addressId: number) => Observable<LELodasoftCommonModelsMortgageAddressViewModel>;
    /**
     * @param { number } addressId undefined
     * @param { object } parameters
     */
    readonly MortgageAddress_UpdateAddress: (addressId: number, parameters: {
        body: LELodasoftCommonModelsMortgageAddressViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageAddressViewModel>;
    /**
     * @param { number } addressId undefined
     */
    readonly MortgageAddress_DeleteAddress: (addressId: number) => Observable<unknown>;
};
export declare const mortgageAddressController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageAddressController>;
