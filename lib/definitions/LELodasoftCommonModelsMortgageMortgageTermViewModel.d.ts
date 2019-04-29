import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsMortgageMortgageTermViewModel = {
    mortgageTermId: Option<number>;
    mortgageAppliedFor: Option<'VA' | 'FHA' | 'Conventional' | 'USDARuralHousingService' | 'OtherMortgage'>;
    agencyCaseNumber: Option<string>;
    lenderCaseNumber: Option<string>;
    amount: Option<number>;
    appraisedValue: Option<number>;
    interestRate: Option<number>;
    noOfMonths: Option<number>;
    amortizationType: Option<'FixedRate' | 'GEM' | 'GPM' | 'ARM' | 'OtherAmortization'>;
    lienPosition: Option<'FirstLien' | 'SecondLien' | 'Other'>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsMortgageMortgageTermViewModelIO: import("io-ts").TypeC<{
    mortgageTermId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    mortgageAppliedFor: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        VA: null;
        FHA: null;
        Conventional: null;
        USDARuralHousingService: null;
        OtherMortgage: null;
    }>>;
    agencyCaseNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lenderCaseNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    amount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    appraisedValue: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    interestRate: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    noOfMonths: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    amortizationType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        FixedRate: null;
        GEM: null;
        GPM: null;
        ARM: null;
        OtherAmortization: null;
    }>>;
    lienPosition: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        FirstLien: null;
        SecondLien: null;
        Other: null;
    }>>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
