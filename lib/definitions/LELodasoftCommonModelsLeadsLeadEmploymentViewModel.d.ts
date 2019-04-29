import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsLeadEmploymentViewModel = {
    leadEmploymentId: Option<number>;
    leadId: Option<number>;
    companyName: Option<string>;
    position: Option<string>;
    employmentLengthYears: Option<number>;
    monthlyIncome: Option<number>;
    isCurrentEmployer: Option<boolean>;
    notes: Option<string>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO: import("io-ts").TypeC<{
    leadEmploymentId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    leadId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    position: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    employmentLengthYears: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    monthlyIncome: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    isCurrentEmployer: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    notes: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
