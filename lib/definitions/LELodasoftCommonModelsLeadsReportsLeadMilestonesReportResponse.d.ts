import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponse = {
    speedToContactAttemptMinutes: Option<number>;
    speedToContactMinutes: Option<number>;
    activeLeads: Option<number>;
    contactRate: Option<number>;
    conversionRate: Option<number>;
    totalActiveLeads: Option<number>;
    totalConversionRate: Option<number>;
    totalContactRate: Option<number>;
};
export declare const LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponseIO: import("io-ts").TypeC<{
    speedToContactAttemptMinutes: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    speedToContactMinutes: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    activeLeads: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    contactRate: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    conversionRate: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    totalActiveLeads: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    totalConversionRate: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    totalContactRate: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
