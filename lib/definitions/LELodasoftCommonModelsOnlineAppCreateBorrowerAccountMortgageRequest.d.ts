import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequest = {
    companyGuid: string;
    userGuid: Option<string>;
    loanPurposeId: Option<number>;
    firstName: string;
    lastName: string;
    email: string;
    password: Option<string>;
};
export declare const LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequestIO: import("io-ts").TypeC<{
    companyGuid: import("io-ts").StringC;
    userGuid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    loanPurposeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    firstName: import("io-ts").StringC;
    lastName: import("io-ts").StringC;
    email: import("io-ts").StringC;
    password: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
