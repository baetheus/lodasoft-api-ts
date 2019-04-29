import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsConfigurationProductModel = {
    productId: Option<number>;
    productName: Option<string>;
    term: Option<number>;
    companyId: Option<number>;
};
export declare const LELodasoftDataAccessDbModelsConfigurationProductModelIO: import("io-ts").TypeC<{
    productId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    productName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    term: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
