import {
	LELodasoftDataAccessModelsAppCountByFilterCriteria,
	LELodasoftDataAccessModelsAppCountByFilterCriteriaIO,
} from '../definitions/LELodasoftDataAccessModelsAppCountByFilterCriteria';
import { Option } from 'fp-ts/lib/Option';
import { array, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsAdminPipelineApplicationCounts = {
	byLoanStatus: Option<Array<LELodasoftDataAccessModelsAppCountByFilterCriteria>>;
	byLoanPurpose: Option<Array<LELodasoftDataAccessModelsAppCountByFilterCriteria>>;
};
export const LELodasoftApiModelsAdminPipelineApplicationCountsIO = type({
	byLoanStatus: createOptionFromOptional(array(LELodasoftDataAccessModelsAppCountByFilterCriteriaIO), 'byLoanStatus'),
	byLoanPurpose: createOptionFromOptional(
		array(LELodasoftDataAccessModelsAppCountByFilterCriteriaIO),
		'byLoanPurpose',
	),
});
