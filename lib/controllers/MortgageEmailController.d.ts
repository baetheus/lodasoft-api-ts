import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageEmailViewModel } from '../definitions/LELodasoftCommonModelsMortgageEmailViewModel';
import { Observable } from 'rxjs';
export declare type MortgageEmailController = {
    /**
     * @param { number } emailId undefined
     */
    readonly MortgageEmail_GetEmailById: (emailId: number) => Observable<LELodasoftCommonModelsMortgageEmailViewModel>;
    /**
     * @param { number } emailId undefined
     * @param { object } parameters
     */
    readonly MortgageEmail_UpdateEmail: (emailId: number, parameters: {
        body: LELodasoftCommonModelsMortgageEmailViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageEmailViewModel>;
    /**
     * @param { number } emailId undefined
     */
    readonly MortgageEmail_DeleteEmail: (emailId: number) => Observable<unknown>;
};
export declare const mortgageEmailController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageEmailController>;
