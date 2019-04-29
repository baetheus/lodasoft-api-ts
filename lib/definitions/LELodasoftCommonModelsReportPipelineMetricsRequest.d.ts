import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsReportPipelineMetricsRequest = {
    companyId: Option<number>;
    startDate: Option<Date>;
    endDate: Option<Date>;
    reportType: Option<'PipelineByCompany'>;
    activeLoansOnly: Option<boolean>;
    loanPurposeFilters: Option<Array<number>>;
    loanStatusFilters: Option<Array<number>>;
};
export declare const LELodasoftCommonModelsReportPipelineMetricsRequestIO: import("io-ts").TypeC<{
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    startDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    endDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    reportType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        PipelineByCompany: null;
    }>>;
    activeLoansOnly: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    loanPurposeFilters: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
    loanStatusFilters: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
}>;
