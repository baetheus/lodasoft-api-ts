import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftDataAccessModelsAppCountByFilterCriteria = {
	filterCriteriaId: Option<number>;
	total: Option<number>;
};
export const LELodasoftDataAccessModelsAppCountByFilterCriteriaIO = type({
	filterCriteriaId: createOptionFromOptional(number, 'filterCriteriaId'),
	total: createOptionFromOptional(number, 'total'),
});
