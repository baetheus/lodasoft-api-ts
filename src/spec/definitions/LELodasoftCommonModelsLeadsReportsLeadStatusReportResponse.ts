import { Option } from 'fp-ts/lib/Option';
import { number, string, dictionary, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsReportsLeadStatusReportResponse = {
	leadCountByStatus: Option<{ [key: string]: number }>;
};
export const LELodasoftCommonModelsLeadsReportsLeadStatusReportResponseIO = type({
	leadCountByStatus: createOptionFromNullable(dictionary(string, number), 'leadCountByStatus'),
});
