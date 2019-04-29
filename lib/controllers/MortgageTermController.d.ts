import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageMortgageTermViewModel } from '../definitions/LELodasoftCommonModelsMortgageMortgageTermViewModel';
import { Observable } from 'rxjs';
export declare type MortgageTermController = {
    /**
     * @param { number } mortgageTermId undefined
     */
    readonly MortgageTerm_GetMortgageTermById: (mortgageTermId: number) => Observable<LELodasoftCommonModelsMortgageMortgageTermViewModel>;
    /**
     * @param { number } mortgageTermId undefined
     * @param { object } parameters
     */
    readonly MortgageTerm_UpdateMortgageTerm: (mortgageTermId: number, parameters: {
        body: LELodasoftCommonModelsMortgageMortgageTermViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageMortgageTermViewModel>;
    /**
     * @param { number } mortgageTermId undefined
     */
    readonly MortgageTerm_DeleteMortgageTerm: (mortgageTermId: number) => Observable<unknown>;
};
export declare const mortgageTermController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageTermController>;
