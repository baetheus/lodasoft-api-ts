import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftThirdPartyFormFreeModelsLiteAccountInfo = {
    accountId: Option<string>;
    accountType: Option<'DDA' | 'SDA' | 'INV' | 'OLA'>;
    accountName: Option<string>;
    accountNumber: Option<string>;
    accountHolder: Option<string>;
    fiName: Option<string>;
    fiAccountType: Option<string>;
    fiPlanName: Option<string>;
    balance: Option<number>;
    balanceDate: Option<Date>;
};
export declare const LELodasoftThirdPartyFormFreeModelsLiteAccountInfoIO: import("io-ts").TypeC<{
    accountId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    accountType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        DDA: null;
        SDA: null;
        INV: null;
        OLA: null;
    }>>;
    accountName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    accountNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    accountHolder: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    fiName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    fiAccountType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    fiPlanName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    balance: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    balanceDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
