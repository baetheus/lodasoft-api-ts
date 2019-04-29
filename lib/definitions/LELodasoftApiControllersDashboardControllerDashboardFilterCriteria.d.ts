import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiControllersDashboardControllerDashboardFilterCriteria = {
    lpValues: Option<Array<string>>;
    lsValues: Option<Array<string>>;
};
export declare const LELodasoftApiControllersDashboardControllerDashboardFilterCriteriaIO: import("io-ts").TypeC<{
    lpValues: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").StringC>>;
    lsValues: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").StringC>>;
}>;
