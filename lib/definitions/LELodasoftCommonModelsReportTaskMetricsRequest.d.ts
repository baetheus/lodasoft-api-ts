import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsReportTaskMetricsRequest = {
    companyId: Option<number>;
    startDate: Option<Date>;
    endDate: Option<Date>;
    reportType: Option<'TasksByCompany' | 'TasksByUser' | 'TasksByRole' | 'TasksByRoleByUser' | 'TasksByTaskType' | 'TasksByTaskTypeByUser' | 'TasksByUserByTaskType' | 'TasksByLoanType' | 'TasksByLoanPurpose'>;
    activeLoansOnly: Option<boolean>;
    loanPurposeFilters: Option<Array<number>>;
    loanStatusFilters: Option<Array<number>>;
};
export declare const LELodasoftCommonModelsReportTaskMetricsRequestIO: import("io-ts").TypeC<{
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    startDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    endDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    reportType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        TasksByCompany: null;
        TasksByUser: null;
        TasksByRole: null;
        TasksByRoleByUser: null;
        TasksByTaskType: null;
        TasksByTaskTypeByUser: null;
        TasksByUserByTaskType: null;
        TasksByLoanType: null;
        TasksByLoanPurpose: null;
    }>>;
    activeLoansOnly: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    loanPurposeFilters: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
    loanStatusFilters: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
}>;
