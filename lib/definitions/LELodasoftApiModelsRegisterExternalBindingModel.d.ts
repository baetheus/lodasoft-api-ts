import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsRegisterExternalBindingModel = {
    userName: string;
    password: string;
    confirmPassword: Option<string>;
    provider: string;
    externalAccessToken: string;
};
export declare const LELodasoftApiModelsRegisterExternalBindingModelIO: import("io-ts").TypeC<{
    userName: import("io-ts").StringC;
    password: import("io-ts").StringC;
    confirmPassword: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    provider: import("io-ts").StringC;
    externalAccessToken: import("io-ts").StringC;
}>;
