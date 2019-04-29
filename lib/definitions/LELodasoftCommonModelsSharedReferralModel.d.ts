import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsSharedReferralModel = {
    referToUserId: Option<string>;
    referralType: Option<'Borrower' | 'Agent'>;
    firstName: Option<string>;
    lastName: Option<string>;
    userContact: Option<string>;
    email: Option<string>;
    phone: Option<string>;
    note: Option<string>;
    referredByName: Option<string>;
    referredByEmail: Option<string>;
    referredByPhone: Option<string>;
};
export declare const LELodasoftCommonModelsSharedReferralModelIO: import("io-ts").TypeC<{
    referToUserId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    referralType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        Borrower: null;
        Agent: null;
    }>>;
    firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    userContact: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    email: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    phone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    note: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    referredByName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    referredByEmail: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    referredByPhone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
