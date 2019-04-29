import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgagePurchaseCreditViewModel } from '../definitions/LELodasoftCommonModelsMortgagePurchaseCreditViewModel';
import { Observable } from 'rxjs';
export declare type MortgagePurchaseCreditController = {
    /**
     * @param { number } purchaseCreditId undefined
     */
    readonly MortgagePurchaseCredit_GetPurchaseCreditById: (purchaseCreditId: number) => Observable<LELodasoftCommonModelsMortgagePurchaseCreditViewModel>;
    /**
     * @param { number } purchaseCreditId undefined
     * @param { object } parameters
     */
    readonly MortgagePurchaseCredit_UpdatePurchaseCredit: (purchaseCreditId: number, parameters: {
        body: LELodasoftCommonModelsMortgagePurchaseCreditViewModel;
    }) => Observable<LELodasoftCommonModelsMortgagePurchaseCreditViewModel>;
    /**
     * @param { number } purchaseCreditId undefined
     */
    readonly MortgagePurchaseCredit_DeletePurchaseCredit: (purchaseCreditId: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly MortgagePurchaseCredit_InsertPurchaseCredit: (parameters: {
        body: LELodasoftCommonModelsMortgagePurchaseCreditViewModel;
    }) => Observable<LELodasoftCommonModelsMortgagePurchaseCreditViewModel>;
};
export declare const mortgagePurchaseCreditController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgagePurchaseCreditController>;
