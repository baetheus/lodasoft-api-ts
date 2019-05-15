import { Option } from 'fp-ts/lib/Option';
import { number, string, dictionary, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsLeadsReportsLeadStatusReportResponse = {
	leadCountByStatus: Option<{ [key: string]: number }>;
};
export const LELodasoftCommonModelsLeadsReportsLeadStatusReportResponseIO = type({
	leadCountByStatus: createOptionFromOptional(dictionary(string, number), 'leadCountByStatus'),
});
