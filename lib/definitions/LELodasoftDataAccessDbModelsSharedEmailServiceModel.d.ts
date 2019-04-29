import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsSharedEmailServiceModel = {
    serviceType: Option<string>;
    server: Option<string>;
    port: Option<number>;
    userName: Option<string>;
    password: Option<string>;
    isSecure: Option<boolean>;
    userId: Option<string>;
    servicesUrl: Option<string>;
    companyId: Option<number>;
};
export declare const LELodasoftDataAccessDbModelsSharedEmailServiceModelIO: import("io-ts").TypeC<{
    serviceType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    server: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    port: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    userName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    password: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    isSecure: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    servicesUrl: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
