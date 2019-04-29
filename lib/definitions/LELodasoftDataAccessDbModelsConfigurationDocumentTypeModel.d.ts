import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel = {
    documentTypeId: Option<number>;
    companyId: Option<number>;
    documentTypeName: Option<string>;
    order: Option<number>;
};
export declare const LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO: import("io-ts").TypeC<{
    documentTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    documentTypeName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    order: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
