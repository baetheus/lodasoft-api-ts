import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsSharedSmsServiceModel = {
    smsServiceId: Option<number>;
    userId: Option<string>;
    serviceType: Option<string>;
    fromPhoneNumber: Option<string>;
    accountIdentifier: Option<string>;
    authToken: Option<string>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftDataAccessDbModelsSharedSmsServiceModelIO: import("io-ts").TypeC<{
    smsServiceId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    serviceType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    fromPhoneNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    accountIdentifier: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    authToken: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
