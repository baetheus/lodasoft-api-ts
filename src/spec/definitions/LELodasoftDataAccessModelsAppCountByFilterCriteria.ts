import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftDataAccessModelsAppCountByFilterCriteria = {
	filterCriteriaId: Option<number>;
	total: Option<number>;
};
export const LELodasoftDataAccessModelsAppCountByFilterCriteriaIO = type({
	filterCriteriaId: createOptionFromOptional(number, 'filterCriteriaId'),
	total: createOptionFromOptional(number, 'total'),
});
