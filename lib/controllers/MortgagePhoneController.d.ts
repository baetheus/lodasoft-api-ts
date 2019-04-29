import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgagePhoneViewModel } from '../definitions/LELodasoftCommonModelsMortgagePhoneViewModel';
import { Observable } from 'rxjs';
export declare type MortgagePhoneController = {
    /**
     * @param { number } phoneId undefined
     */
    readonly MortgagePhone_GetPhoneById: (phoneId: number) => Observable<LELodasoftCommonModelsMortgagePhoneViewModel>;
    /**
     * @param { number } phoneId undefined
     * @param { object } parameters
     */
    readonly MortgagePhone_UpdatePhone: (phoneId: number, parameters: {
        body: LELodasoftCommonModelsMortgagePhoneViewModel;
    }) => Observable<LELodasoftCommonModelsMortgagePhoneViewModel>;
    /**
     * @param { number } phoneId undefined
     */
    readonly MortgagePhone_DeletePhone: (phoneId: number) => Observable<unknown>;
};
export declare const mortgagePhoneController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgagePhoneController>;
