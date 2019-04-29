import { LELodasoftDataAccessModelsAppCountByFilterCriteria } from '../definitions/LELodasoftDataAccessModelsAppCountByFilterCriteria';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsAdminPipelineApplicationCounts = {
    byLoanStatus: Option<Array<LELodasoftDataAccessModelsAppCountByFilterCriteria>>;
    byLoanPurpose: Option<Array<LELodasoftDataAccessModelsAppCountByFilterCriteria>>;
};
export declare const LELodasoftApiModelsAdminPipelineApplicationCountsIO: import("io-ts").TypeC<{
    byLoanStatus: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        filterCriteriaId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        total: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    }>>>;
    byLoanPurpose: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        filterCriteriaId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        total: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    }>>>;
}>;
