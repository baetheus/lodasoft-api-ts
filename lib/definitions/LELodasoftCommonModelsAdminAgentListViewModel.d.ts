import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsAdminAgentListViewModel = {
    agentListId: Option<number>;
    name: Option<string>;
    description: Option<string>;
    agentIds: Option<Array<number>>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsAdminAgentListViewModelIO: import("io-ts").TypeC<{
    agentListId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    description: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    agentIds: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
