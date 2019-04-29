import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsReportsLeadStatusReportResponse = {
    leadCountByStatus: Option<{
        [key: string]: number;
    }>;
};
export declare const LELodasoftCommonModelsLeadsReportsLeadStatusReportResponseIO: import("io-ts").TypeC<{
    leadCountByStatus: import("io-ts-types").OptionFromNullableC<import("io-ts").RecordC<import("io-ts").StringC, import("io-ts").NumberC>>;
}>;
