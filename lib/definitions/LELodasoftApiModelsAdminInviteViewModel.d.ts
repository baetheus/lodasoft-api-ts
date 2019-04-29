import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsAdminInviteViewModel = {
    userName: Option<string>;
    email: Option<string>;
    firstName: Option<string>;
    lastName: Option<string>;
    companyId: Option<number>;
    sentDate: Option<Date>;
    registerDate: Option<Date>;
    isAdmin: Option<boolean>;
    userId: Option<string>;
    active: Option<boolean>;
};
export declare const LELodasoftApiModelsAdminInviteViewModelIO: import("io-ts").TypeC<{
    userName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    email: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    sentDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    registerDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    isAdmin: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    active: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
}>;
