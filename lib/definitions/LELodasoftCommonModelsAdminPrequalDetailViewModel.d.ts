import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsAdminPrequalDetailViewModel = {
    prequalDetailId: Option<number>;
    applicationId: Option<number>;
    loanProgramDescription: Option<string>;
    maxPurchasePrice: Option<number>;
    downPaymentPercent: Option<number>;
    interestRate: Option<number>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsAdminPrequalDetailViewModelIO: import("io-ts").TypeC<{
    prequalDetailId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    loanProgramDescription: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    maxPurchasePrice: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    downPaymentPercent: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    interestRate: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
