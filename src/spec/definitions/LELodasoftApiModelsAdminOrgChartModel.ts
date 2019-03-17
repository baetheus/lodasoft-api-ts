import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsAdminOrgChartModel = { userId: Option<string>; reportTo: Option<string> };
export const LELodasoftApiModelsAdminOrgChartModelIO = type({
	userId: createOptionFromNullable(string),
	reportTo: createOptionFromNullable(string),
});
