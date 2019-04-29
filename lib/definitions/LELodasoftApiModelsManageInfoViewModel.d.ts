import { LELodasoftApiModelsExternalLoginViewModel } from '../definitions/LELodasoftApiModelsExternalLoginViewModel';
import { LELodasoftApiModelsUserLoginInfoViewModel } from '../definitions/LELodasoftApiModelsUserLoginInfoViewModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsManageInfoViewModel = {
    localLoginProvider: Option<string>;
    userName: Option<string>;
    logins: Option<Array<LELodasoftApiModelsUserLoginInfoViewModel>>;
    externalLoginProviders: Option<Array<LELodasoftApiModelsExternalLoginViewModel>>;
};
export declare const LELodasoftApiModelsManageInfoViewModelIO: import("io-ts").TypeC<{
    localLoginProvider: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    userName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    logins: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        loginProvider: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        providerKey: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>>;
    externalLoginProviders: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        url: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        state: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>>;
}>;
