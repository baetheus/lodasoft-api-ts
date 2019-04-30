import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessModelsAppCountByFilterCriteria = {
	filterCriteriaId: Option<number>;
	total: Option<number>;
};
export const LELodasoftDataAccessModelsAppCountByFilterCriteriaIO = type({
	filterCriteriaId: createOptionFromNullable(number, 'filterCriteriaId'),
	total: createOptionFromNullable(number, 'total'),
});
