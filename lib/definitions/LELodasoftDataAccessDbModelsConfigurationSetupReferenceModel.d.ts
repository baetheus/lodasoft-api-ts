import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel = {
    setupRefernceId: Option<number>;
    tableName: Option<string>;
    templateCompanyId: Option<number>;
    templateId: Option<number>;
    companyId: Option<number>;
    insertedId: Option<number>;
};
export declare const LELodasoftDataAccessDbModelsConfigurationSetupReferenceModelIO: import("io-ts").TypeC<{
    setupRefernceId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    tableName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    templateCompanyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    templateId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
