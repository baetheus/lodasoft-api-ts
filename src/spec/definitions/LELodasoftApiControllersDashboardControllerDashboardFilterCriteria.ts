import { Option } from 'fp-ts/lib/Option';
import { string, array, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiControllersDashboardControllerDashboardFilterCriteria = {
	lpValues: Option<Array<string>>;
	lsValues: Option<Array<string>>;
};
export const LELodasoftApiControllersDashboardControllerDashboardFilterCriteriaIO = type({
	lpValues: createOptionFromOptional(array(string), 'lpValues'),
	lsValues: createOptionFromOptional(array(string), 'lsValues'),
});
