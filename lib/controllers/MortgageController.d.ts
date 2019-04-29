import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageMortgageBorrowerViewModel } from '../definitions/LELodasoftCommonModelsMortgageMortgageBorrowerViewModel';
import { LELodasoftCommonModelsMortgageMortgageTermViewModel } from '../definitions/LELodasoftCommonModelsMortgageMortgageTermViewModel';
import { LELodasoftCommonModelsMortgageMortgageViewModel } from '../definitions/LELodasoftCommonModelsMortgageMortgageViewModel';
import { LELodasoftCommonModelsMortgageSubjectPropertyViewModel } from '../definitions/LELodasoftCommonModelsMortgageSubjectPropertyViewModel';
import { LELodasoftCommonModelsMortgageTransactionDetailViewModel } from '../definitions/LELodasoftCommonModelsMortgageTransactionDetailViewModel';
import { Option } from 'fp-ts/lib/Option';
import { Observable } from 'rxjs';
export declare type MortgageController = {
    /**
     * @param { number } mortgageId undefined
     */
    readonly Mortgage_GetMortgageById: (mortgageId: number) => Observable<LELodasoftCommonModelsMortgageMortgageViewModel>;
    /**
     * @param { number } mortgageId undefined
     * @param { object } parameters
     */
    readonly Mortgage_UpdateMortgage: (mortgageId: number, parameters: {
        body: LELodasoftCommonModelsMortgageMortgageViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageMortgageViewModel>;
    /**
     * @param { number } mortgageId undefined
     */
    readonly Mortgage_DeleteMortgage: (mortgageId: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Mortgage_GetMortgageByApplicationId: (parameters: {
        query: {
            applicationId: number;
        };
    }) => Observable<LELodasoftCommonModelsMortgageMortgageViewModel>;
    /**
     * Inserts a MORTGAGE model. Set the applicationId to link to a loan.
     * @param { object } parameters
     */
    readonly Mortgage_InsertMortgage: (parameters: {
        query?: {
            mapFromApplication: Option<boolean>;
        };
        body: LELodasoftCommonModelsMortgageMortgageViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageMortgageViewModel>;
    /**
     * @param { number } mortgageId undefined
     * @param { object } parameters
     */
    readonly Mortgage_ResetMortgage: (mortgageId: number, parameters: {
        body: LELodasoftCommonModelsMortgageMortgageViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageMortgageViewModel>;
    /**
     * Import DU
     * @param { number } loanId - id of the loan to import du 3.2
     * @param { number } mortgageId - id of the to mortgage import du 3.2
     */
    readonly Mortgage_ImportDu: (loanId: number, mortgageId: number) => Observable<LELodasoftCommonModelsMortgageMortgageViewModel>;
    /**
     * Export DU
     * @param { number } loanId - id of the loan to export mortgage to du 3.2
     */
    readonly Mortgage_ExportDu: (loanId: number) => Observable<unknown>;
    /**
     * Insert Subject Property for Mortgage
     * @param { number } mortgageId - id of the mortgage
     * @param { object } parameters
     */
    readonly Mortgage_InsertSubjectProperty: (mortgageId: number, parameters: {
        body: LELodasoftCommonModelsMortgageSubjectPropertyViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageSubjectPropertyViewModel>;
    /**
     * Insert Mortgage Term for Mortgage
     * @param { number } mortgageId - id of the mortgage
     * @param { object } parameters
     */
    readonly Mortgage_InsertMortgageTerm: (mortgageId: number, parameters: {
        body: LELodasoftCommonModelsMortgageMortgageTermViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageMortgageTermViewModel>;
    /**
     * Insert Transaction Detail for Mortgage
     * @param { number } mortgageId - id of the mortgage
     * @param { object } parameters
     */
    readonly Mortgage_InsertTransactionDetail: (mortgageId: number, parameters: {
        body: LELodasoftCommonModelsMortgageTransactionDetailViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageTransactionDetailViewModel>;
    /**
     * Get Borrower by Mortgage Id
     * @param { number } mortgageId undefined
     */
    readonly Mortgage_GetBorrowersByMortgageId: (mortgageId: number) => Observable<Array<LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>>;
    /**
     * Insert Borrower for Mortgage
     * @param { number } mortgageId - id of the mortgage
     * @param { object } parameters
     */
    readonly Mortgage_InsertBorrower: (mortgageId: number, parameters: {
        body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>;
};
export declare const mortgageController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageController>;
