import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessModelsReportPipelineMetricsModel = {
    loanStatus: Option<string>;
    primaryRoleUser: Option<string>;
    applicationId: Option<number>;
    primaryBorrowerId: Option<number>;
    borrowerName: Option<string>;
    loanAmount: Option<number>;
    loanPurpose: Option<string>;
    loanType: Option<string>;
};
export declare const LELodasoftDataAccessModelsReportPipelineMetricsModelIO: import("io-ts").TypeC<{
    loanStatus: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    primaryRoleUser: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    primaryBorrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    borrowerName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    loanAmount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    loanPurpose: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    loanType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
