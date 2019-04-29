import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsProviderModelsAppointmentInfo = {
    date: Option<Date>;
    description: Option<string>;
    notes: Option<string>;
};
export declare const LELodasoftCommonModelsLeadsProviderModelsAppointmentInfoIO: import("io-ts").TypeC<{
    date: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    description: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    notes: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
