import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsConfigurationSendTestSmsRequest = {
    serviceType: Option<'Twilio'>;
    fromPhoneNumber: Option<string>;
    accountIdentifier: Option<string>;
    authToken: Option<string>;
    toPhoneNumber: Option<string>;
    message: Option<string>;
    companyId: Option<number>;
};
export declare const LELodasoftCommonModelsConfigurationSendTestSmsRequestIO: import("io-ts").TypeC<{
    serviceType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        Twilio: null;
    }>>;
    fromPhoneNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    accountIdentifier: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    authToken: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    toPhoneNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    message: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
