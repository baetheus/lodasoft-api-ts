import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessModelsAppCountByFilterCriteria = {
    filterCriteriaId: Option<number>;
    total: Option<number>;
};
export declare const LELodasoftDataAccessModelsAppCountByFilterCriteriaIO: import("io-ts").TypeC<{
    filterCriteriaId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    total: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
