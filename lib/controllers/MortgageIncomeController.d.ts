import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageIncomeViewModel } from '../definitions/LELodasoftCommonModelsMortgageIncomeViewModel';
import { Observable } from 'rxjs';
export declare type MortgageIncomeController = {
    /**
     * @param { number } incomeId undefined
     */
    readonly MortgageIncome_GetIncomeById: (incomeId: number) => Observable<LELodasoftCommonModelsMortgageIncomeViewModel>;
    /**
     * @param { number } incomeId undefined
     * @param { object } parameters
     */
    readonly MortgageIncome_UpdateIncome: (incomeId: number, parameters: {
        body: LELodasoftCommonModelsMortgageIncomeViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageIncomeViewModel>;
    /**
     * @param { number } incomeId undefined
     */
    readonly MortgageIncome_DeleteIncome: (incomeId: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly MortgageIncome_InsertIncome: (parameters: {
        body: LELodasoftCommonModelsMortgageIncomeViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageIncomeViewModel>;
};
export declare const mortgageIncomeController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageIncomeController>;
