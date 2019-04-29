import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer = {
    name: Option<string>;
    code: Option<string>;
    alternateIdentifier: Option<string>;
    salaryKey: Option<string>;
};
export declare const LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployerIO: import("io-ts").TypeC<{
    name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    code: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    alternateIdentifier: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    salaryKey: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
