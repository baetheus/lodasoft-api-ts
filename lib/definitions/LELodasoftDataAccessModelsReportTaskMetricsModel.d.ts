import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessModelsReportTaskMetricsModel = {
    userId: Option<string>;
    userFullName: Option<string>;
    applicationId: Option<number>;
    roleId: Option<number>;
    loanPurpose: Option<number>;
    loanType: Option<number>;
    taskCount: Option<number>;
    taskIdentifier: Option<string>;
    avgTaskCompletion: Option<number>;
    avgBorrSubmission: Option<number>;
    avgBorrApproval: Option<number>;
};
export declare const LELodasoftDataAccessModelsReportTaskMetricsModelIO: import("io-ts").TypeC<{
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    userFullName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    roleId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    loanPurpose: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    loanType: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    taskCount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    taskIdentifier: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    avgTaskCompletion: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    avgBorrSubmission: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    avgBorrApproval: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
