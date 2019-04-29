import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsConfigurationAgentTypeModel = {
    agentTypeId: Option<number>;
    agentTypeName: Option<string>;
    order: Option<number>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftDataAccessDbModelsConfigurationAgentTypeModelIO: import("io-ts").TypeC<{
    agentTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    agentTypeName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    order: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
