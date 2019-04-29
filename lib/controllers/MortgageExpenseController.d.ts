import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageExpenseViewModel } from '../definitions/LELodasoftCommonModelsMortgageExpenseViewModel';
import { Observable } from 'rxjs';
export declare type MortgageExpenseController = {
    /**
     * @param { number } expenseId undefined
     */
    readonly MortgageExpense_GetExpenseById: (expenseId: number) => Observable<LELodasoftCommonModelsMortgageExpenseViewModel>;
    /**
     * @param { number } expenseId undefined
     * @param { object } parameters
     */
    readonly MortgageExpense_UpdateExpense: (expenseId: number, parameters: {
        body: LELodasoftCommonModelsMortgageExpenseViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageExpenseViewModel>;
    /**
     * @param { number } expenseId undefined
     */
    readonly MortgageExpense_DeleteExpense: (expenseId: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly MortgageExpense_InsertExpense: (parameters: {
        body: LELodasoftCommonModelsMortgageExpenseViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageExpenseViewModel>;
};
export declare const mortgageExpenseController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageExpenseController>;
