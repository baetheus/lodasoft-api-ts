import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageAssetViewModel } from '../definitions/LELodasoftCommonModelsMortgageAssetViewModel';
import { LELodasoftCommonModelsMortgageDeclarationViewModel } from '../definitions/LELodasoftCommonModelsMortgageDeclarationViewModel';
import { LELodasoftCommonModelsMortgageDependentViewModel } from '../definitions/LELodasoftCommonModelsMortgageDependentViewModel';
import { LELodasoftCommonModelsMortgageEmailViewModel } from '../definitions/LELodasoftCommonModelsMortgageEmailViewModel';
import { LELodasoftCommonModelsMortgageEmploymentViewModel } from '../definitions/LELodasoftCommonModelsMortgageEmploymentViewModel';
import { LELodasoftCommonModelsMortgageExpenseViewModel } from '../definitions/LELodasoftCommonModelsMortgageExpenseViewModel';
import { LELodasoftCommonModelsMortgageGovernmentMonitorViewModel } from '../definitions/LELodasoftCommonModelsMortgageGovernmentMonitorViewModel';
import { LELodasoftCommonModelsMortgageIncomeViewModel } from '../definitions/LELodasoftCommonModelsMortgageIncomeViewModel';
import { LELodasoftCommonModelsMortgageLiabilityViewModel } from '../definitions/LELodasoftCommonModelsMortgageLiabilityViewModel';
import { LELodasoftCommonModelsMortgageMortgageBorrowerViewModel } from '../definitions/LELodasoftCommonModelsMortgageMortgageBorrowerViewModel';
import { LELodasoftCommonModelsMortgagePhoneViewModel } from '../definitions/LELodasoftCommonModelsMortgagePhoneViewModel';
import { LELodasoftCommonModelsMortgageReoViewModel } from '../definitions/LELodasoftCommonModelsMortgageReoViewModel';
import { LELodasoftCommonModelsMortgageResidencyAddressViewModel } from '../definitions/LELodasoftCommonModelsMortgageResidencyAddressViewModel';
import { Observable } from 'rxjs';
export declare type MortgageBorrowerController = {
    /**
     * @param { number } borrowerId undefined
     */
    readonly MortgageBorrower_GetBorrowerById: (borrowerId: number) => Observable<LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>;
    /**
     * @param { number } borrowerId undefined
     * @param { object } parameters
     */
    readonly MortgageBorrower_UpdateBorrower: (borrowerId: number, parameters: {
        body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly MortgageBorrower_DeleteBorrower: (borrowerId: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly MortgageBorrower_InsertBorrower: (parameters: {
        body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly MortgageBorrower_GetAssetsByBorrowerId: (borrowerId: number) => Observable<Array<LELodasoftCommonModelsMortgageAssetViewModel>>;
    /**
     * @param { number } borrowerId undefined
     * @param { object } parameters
     */
    readonly MortgageBorrower_InsertAsset: (borrowerId: number, parameters: {
        body: LELodasoftCommonModelsMortgageAssetViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageAssetViewModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly MortgageBorrower_GetDeclarationsByBorrowerId: (borrowerId: number) => Observable<Array<LELodasoftCommonModelsMortgageDeclarationViewModel>>;
    /**
     * @param { number } borrowerId undefined
     * @param { object } parameters
     */
    readonly MortgageBorrower_InsertDeclaration: (borrowerId: number, parameters: {
        body: LELodasoftCommonModelsMortgageDeclarationViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageDeclarationViewModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly MortgageBorrower_GetDependentsByBorrowerId: (borrowerId: number) => Observable<Array<LELodasoftCommonModelsMortgageDependentViewModel>>;
    /**
     * @param { number } borrowerId undefined
     * @param { object } parameters
     */
    readonly MortgageBorrower_InsertDependent: (borrowerId: number, parameters: {
        body: LELodasoftCommonModelsMortgageDependentViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageDependentViewModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly MortgageBorrower_GetEmailsByBorrowerId: (borrowerId: number) => Observable<Array<LELodasoftCommonModelsMortgageEmailViewModel>>;
    /**
     * @param { number } borrowerId undefined
     * @param { object } parameters
     */
    readonly MortgageBorrower_InsertEmail: (borrowerId: number, parameters: {
        body: LELodasoftCommonModelsMortgageEmailViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageEmailViewModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly MortgageBorrower_GetEmploymentsByBorrowerId: (borrowerId: number) => Observable<Array<LELodasoftCommonModelsMortgageEmploymentViewModel>>;
    /**
     * @param { number } borrowerId undefined
     * @param { object } parameters
     */
    readonly MortgageBorrower_InsertEmployment: (borrowerId: number, parameters: {
        body: LELodasoftCommonModelsMortgageEmploymentViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageEmploymentViewModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly MortgageBorrower_GetExpensesByBorrowerId: (borrowerId: number) => Observable<Array<LELodasoftCommonModelsMortgageExpenseViewModel>>;
    /**
     * @param { number } borrowerId undefined
     * @param { object } parameters
     */
    readonly MortgageBorrower_InsertExpense: (borrowerId: number, parameters: {
        body: LELodasoftCommonModelsMortgageExpenseViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageExpenseViewModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly MortgageBorrower_GetGovernmentMonitorsByBorrowerId: (borrowerId: number) => Observable<Array<LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>>;
    /**
     * @param { number } borrowerId undefined
     * @param { object } parameters
     */
    readonly MortgageBorrower_InsertGovernmentMonitor: (borrowerId: number, parameters: {
        body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly MortgageBorrower_GetIncomesByBorrowerId: (borrowerId: number) => Observable<Array<LELodasoftCommonModelsMortgageIncomeViewModel>>;
    /**
     * @param { number } borrowerId undefined
     * @param { object } parameters
     */
    readonly MortgageBorrower_InsertIncome: (borrowerId: number, parameters: {
        body: LELodasoftCommonModelsMortgageIncomeViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageIncomeViewModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly MortgageBorrower_GetLiabilitiesByBorrowerId: (borrowerId: number) => Observable<Array<LELodasoftCommonModelsMortgageLiabilityViewModel>>;
    /**
     * @param { number } borrowerId undefined
     * @param { object } parameters
     */
    readonly MortgageBorrower_InsertLiability: (borrowerId: number, parameters: {
        body: LELodasoftCommonModelsMortgageLiabilityViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageLiabilityViewModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly MortgageBorrower_GetPhonesByBorrowerId: (borrowerId: number) => Observable<Array<LELodasoftCommonModelsMortgagePhoneViewModel>>;
    /**
     * @param { number } borrowerId undefined
     * @param { object } parameters
     */
    readonly MortgageBorrower_InsertPhone: (borrowerId: number, parameters: {
        body: LELodasoftCommonModelsMortgagePhoneViewModel;
    }) => Observable<LELodasoftCommonModelsMortgagePhoneViewModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly MortgageBorrower_GetReosByBorrowerId: (borrowerId: number) => Observable<Array<LELodasoftCommonModelsMortgageReoViewModel>>;
    /**
     * @param { number } borrowerId undefined
     * @param { object } parameters
     */
    readonly MortgageBorrower_InsertReo: (borrowerId: number, parameters: {
        body: LELodasoftCommonModelsMortgageReoViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageReoViewModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly MortgageBorrower_GetResidencyAddressesByBorrowerId: (borrowerId: number) => Observable<Array<LELodasoftCommonModelsMortgageResidencyAddressViewModel>>;
    /**
     * @param { number } borrowerId undefined
     * @param { object } parameters
     */
    readonly MortgageBorrower_InsertResidencyAddress: (borrowerId: number, parameters: {
        body: LELodasoftCommonModelsMortgageResidencyAddressViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageResidencyAddressViewModel>;
};
export declare const mortgageBorrowerController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageBorrowerController>;
