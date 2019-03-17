import { Option } from 'fp-ts/lib/Option';
import { string, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiControllersDashboardControllerDashboardFilterCriteria = {
	lpValues: Option<Array<string>>;
	lsValues: Option<Array<string>>;
};
export const LELodasoftApiControllersDashboardControllerDashboardFilterCriteriaIO = type({
	lpValues: createOptionFromNullable(array(string)),
	lsValues: createOptionFromNullable(array(string)),
});
