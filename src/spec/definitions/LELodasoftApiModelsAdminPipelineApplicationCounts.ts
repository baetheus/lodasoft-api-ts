import {
	LELodasoftDataAccessModelsAppCountByFilterCriteria,
	LELodasoftDataAccessModelsAppCountByFilterCriteriaIO,
} from '../definitions/LELodasoftDataAccessModelsAppCountByFilterCriteria';
import { Option } from 'fp-ts/lib/Option';
import { array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsAdminPipelineApplicationCounts = {
	byLoanStatus: Option<Array<LELodasoftDataAccessModelsAppCountByFilterCriteria>>;
	byLoanPurpose: Option<Array<LELodasoftDataAccessModelsAppCountByFilterCriteria>>;
};
export const LELodasoftApiModelsAdminPipelineApplicationCountsIO = type({
	byLoanStatus: createOptionFromNullable(array(LELodasoftDataAccessModelsAppCountByFilterCriteriaIO)),
	byLoanPurpose: createOptionFromNullable(array(LELodasoftDataAccessModelsAppCountByFilterCriteriaIO)),
});
