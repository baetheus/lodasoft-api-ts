import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponse = {
    newLeadsReceived: Option<number>;
    contactAttemptsCount: Option<number>;
    contactSuccessCount: Option<number>;
    emailsSentCount: Option<number>;
    uniqueLeadsContactedCount: Option<number>;
    leadsConvertedCount: Option<number>;
};
export declare const LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponseIO: import("io-ts").TypeC<{
    newLeadsReceived: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    contactAttemptsCount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    contactSuccessCount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    emailsSentCount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    uniqueLeadsContactedCount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    leadsConvertedCount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
