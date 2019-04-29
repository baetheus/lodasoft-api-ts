import { LELodasoftCommonModelsAuthenticationTokenResponseModel } from '../definitions/LELodasoftCommonModelsAuthenticationTokenResponseModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponse = {
    borrowerId: Option<number>;
    applicationId: Option<number>;
    userExists: Option<boolean>;
    userMustConfirmRegistration: Option<boolean>;
    authToken: Option<LELodasoftCommonModelsAuthenticationTokenResponseModel>;
};
export declare const LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponseIO: import("io-ts").TypeC<{
    borrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    userExists: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    userMustConfirmRegistration: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    authToken: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        access_token: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        token_type: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        expires_in: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        userName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        issued: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        expires: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>;
}>;
