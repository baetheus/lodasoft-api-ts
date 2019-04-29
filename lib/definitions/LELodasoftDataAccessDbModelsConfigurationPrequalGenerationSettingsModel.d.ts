import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsConfigurationPrequalGenerationSettingsModel = {
    prequalGenerationSettingsId: Option<number>;
    documentTemplateId: Option<number>;
    enabledForInternalUsers: Option<boolean>;
    enabledForAgents: Option<boolean>;
    enabledForBorrowers: Option<boolean>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftDataAccessDbModelsConfigurationPrequalGenerationSettingsModelIO: import("io-ts").TypeC<{
    prequalGenerationSettingsId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    documentTemplateId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    enabledForInternalUsers: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    enabledForAgents: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    enabledForBorrowers: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
