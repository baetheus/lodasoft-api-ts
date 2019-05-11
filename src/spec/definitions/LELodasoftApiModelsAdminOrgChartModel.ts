import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsAdminOrgChartModel = { userId: Option<string>; reportTo: Option<string> };
export const LELodasoftApiModelsAdminOrgChartModelIO = type({
	userId: createOptionFromOptional(string, 'userId'),
	reportTo: createOptionFromOptional(string, 'reportTo'),
});
