import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponse = {
    labels: Option<Array<string>>;
    newLeadsReceived: Option<Array<number>>;
    contactAttemptsCount: Option<Array<number>>;
    contactSuccessCount: Option<Array<number>>;
    emailsSentCount: Option<Array<number>>;
    uniqueLeadsContactedCount: Option<Array<number>>;
    leadsConvertedCount: Option<Array<number>>;
};
export declare const LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponseIO: import("io-ts").TypeC<{
    labels: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").StringC>>;
    newLeadsReceived: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
    contactAttemptsCount: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
    contactSuccessCount: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
    emailsSentCount: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
    uniqueLeadsContactedCount: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
    leadsConvertedCount: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
}>;
