import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgagePurchaseCreditViewModel } from '../definitions/LELodasoftCommonModelsMortgagePurchaseCreditViewModel';
import { LELodasoftCommonModelsMortgageTransactionDetailViewModel } from '../definitions/LELodasoftCommonModelsMortgageTransactionDetailViewModel';
import { Observable } from 'rxjs';
export declare type MortgageTransactionDetailController = {
    /**
     * @param { number } transactionDetailId undefined
     */
    readonly MortgageTransactionDetail_GetTransactionDetailById: (transactionDetailId: number) => Observable<LELodasoftCommonModelsMortgageTransactionDetailViewModel>;
    /**
     * @param { number } transactionDetailId undefined
     * @param { object } parameters
     */
    readonly MortgageTransactionDetail_UpdateTransactionDetail: (transactionDetailId: number, parameters: {
        body: LELodasoftCommonModelsMortgageTransactionDetailViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageTransactionDetailViewModel>;
    /**
     * @param { number } transactionDetailId undefined
     */
    readonly MortgageTransactionDetail_DeleteTransactionDetail: (transactionDetailId: number) => Observable<unknown>;
    /**
     * @param { number } transactionDetailId undefined
     */
    readonly MortgageTransactionDetail_GetPurchaseCreditsByTransactionDetailId: (transactionDetailId: number) => Observable<Array<LELodasoftCommonModelsMortgagePurchaseCreditViewModel>>;
    /**
     * @param { number } transactionDetailId undefined
     * @param { object } parameters
     */
    readonly MortgageTransactionDetail_InsertPurchaseCredit: (transactionDetailId: number, parameters: {
        body: LELodasoftCommonModelsMortgagePurchaseCreditViewModel;
    }) => Observable<LELodasoftCommonModelsMortgagePurchaseCreditViewModel>;
};
export declare const mortgageTransactionDetailController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageTransactionDetailController>;
