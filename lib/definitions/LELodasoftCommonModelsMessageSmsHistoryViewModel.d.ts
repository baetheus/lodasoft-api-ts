import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsMessageSmsHistoryViewModel = {
    id: Option<number>;
    from: Option<string>;
    to: Option<string>;
    body: Option<string>;
    direction: Option<'Unspecified' | 'Outbound' | 'Inbound'>;
    smsMessageSid: Option<string>;
    messageSid: Option<string>;
    accountSid: Option<string>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsMessageSmsHistoryViewModelIO: import("io-ts").TypeC<{
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    from: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    to: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    body: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    direction: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        Unspecified: null;
        Outbound: null;
        Inbound: null;
    }>>;
    smsMessageSid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    messageSid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    accountSid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
