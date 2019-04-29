import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageAddressViewModel } from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { LELodasoftCommonModelsMortgageReoViewModel } from '../definitions/LELodasoftCommonModelsMortgageReoViewModel';
import { Observable } from 'rxjs';
export declare type MortgageReoController = {
    /**
     * @param { number } reoId undefined
     */
    readonly MortgageReo_GetReoById: (reoId: number) => Observable<LELodasoftCommonModelsMortgageReoViewModel>;
    /**
     * @param { number } reoId undefined
     * @param { object } parameters
     */
    readonly MortgageReo_UpdateReo: (reoId: number, parameters: {
        body: LELodasoftCommonModelsMortgageReoViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageReoViewModel>;
    /**
     * @param { number } reoId undefined
     */
    readonly MortgageReo_DeleteReo: (reoId: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly MortgageReo_InsertReo: (parameters: {
        body: LELodasoftCommonModelsMortgageReoViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageReoViewModel>;
    /**
     * @param { number } reoId undefined
     * @param { object } parameters
     */
    readonly MortgageReo_InsertAddress: (reoId: number, parameters: {
        body: LELodasoftCommonModelsMortgageAddressViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageAddressViewModel>;
};
export declare const mortgageReoController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageReoController>;
