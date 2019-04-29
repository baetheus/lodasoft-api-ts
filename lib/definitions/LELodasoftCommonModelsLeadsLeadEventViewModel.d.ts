import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsLeadEventViewModel = {
    leadEventId: Option<number>;
    leadId: Option<number>;
    leadStatusId: Option<number>;
    createdByUserId: Option<string>;
    type: Option<string>;
    note: Option<string>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsLeadsLeadEventViewModelIO: import("io-ts").TypeC<{
    leadEventId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    leadId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    leadStatusId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    createdByUserId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    type: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    note: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
