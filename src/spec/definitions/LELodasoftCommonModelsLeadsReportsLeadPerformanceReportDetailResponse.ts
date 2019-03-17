import { Option } from 'fp-ts/lib/Option';
import { string, array, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponse = {
	labels: Option<Array<string>>;
	newLeadsReceived: Option<Array<number>>;
	contactAttemptsCount: Option<Array<number>>;
	contactSuccessCount: Option<Array<number>>;
	emailsSentCount: Option<Array<number>>;
	uniqueLeadsContactedCount: Option<Array<number>>;
	leadsConvertedCount: Option<Array<number>>;
};
export const LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponseIO = type({
	labels: createOptionFromNullable(array(string)),
	newLeadsReceived: createOptionFromNullable(array(number)),
	contactAttemptsCount: createOptionFromNullable(array(number)),
	contactSuccessCount: createOptionFromNullable(array(number)),
	emailsSentCount: createOptionFromNullable(array(number)),
	uniqueLeadsContactedCount: createOptionFromNullable(array(number)),
	leadsConvertedCount: createOptionFromNullable(array(number)),
});
