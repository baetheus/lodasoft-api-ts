import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsAdminOrgChartModel = {
    userId: Option<string>;
    reportTo: Option<string>;
};
export declare const LELodasoftApiModelsAdminOrgChartModelIO: import("io-ts").TypeC<{
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    reportTo: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
