import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsMortgageExpenseViewModel = {
    expenseId: Option<number>;
    borrowerId: Option<number>;
    monthlyAmount: Option<number>;
    expenseType: Option<'FirstMortgagePrincipalAndInterest' | 'HazardInsurance' | 'HomeownersInsurance' | 'HomeownersAssociationDuesAndCondominiumFees' | 'MorgageInsurance' | 'OtherHousingExpense' | 'OtherMortgageLoanPrincipalAndInterest' | 'RealEstateTax' | 'Rent'>;
    isCurrent: Option<boolean>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsMortgageExpenseViewModelIO: import("io-ts").TypeC<{
    expenseId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    borrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    monthlyAmount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    expenseType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        FirstMortgagePrincipalAndInterest: null;
        HazardInsurance: null;
        HomeownersInsurance: null;
        HomeownersAssociationDuesAndCondominiumFees: null;
        MorgageInsurance: null;
        OtherHousingExpense: null;
        OtherMortgageLoanPrincipalAndInterest: null;
        RealEstateTax: null;
        Rent: null;
    }>>;
    isCurrent: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
