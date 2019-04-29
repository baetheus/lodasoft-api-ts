import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsAdminPipelineFilterCriteria = {
    loanPurposes: Option<Array<number>>;
    loanStatuses: Option<Array<number>>;
    users: Option<Array<string>>;
};
export declare const LELodasoftApiModelsAdminPipelineFilterCriteriaIO: import("io-ts").TypeC<{
    loanPurposes: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
    loanStatuses: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
    users: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").StringC>>;
}>;
