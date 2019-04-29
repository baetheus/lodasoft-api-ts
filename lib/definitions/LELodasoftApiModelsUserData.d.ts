import { MicrosoftAspNetIdentityUserLoginInfo } from '../definitions/MicrosoftAspNetIdentityUserLoginInfo';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsUserData = {
    userId: Option<string>;
    email: Option<string>;
    phoneNumber: Option<string>;
    twoFactor: Option<boolean>;
    logins: Option<Array<MicrosoftAspNetIdentityUserLoginInfo>>;
    lastTimeLogin: Option<Date>;
    avatar: Option<string>;
};
export declare const LELodasoftApiModelsUserDataIO: import("io-ts").TypeC<{
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    email: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    phoneNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    twoFactor: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    logins: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        loginProvider: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        providerKey: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>>;
    lastTimeLogin: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    avatar: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
