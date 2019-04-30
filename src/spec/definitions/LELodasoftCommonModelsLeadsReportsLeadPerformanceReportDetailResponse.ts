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
	labels: createOptionFromNullable(array(string), 'labels'),
	newLeadsReceived: createOptionFromNullable(array(number), 'newLeadsReceived'),
	contactAttemptsCount: createOptionFromNullable(array(number), 'contactAttemptsCount'),
	contactSuccessCount: createOptionFromNullable(array(number), 'contactSuccessCount'),
	emailsSentCount: createOptionFromNullable(array(number), 'emailsSentCount'),
	uniqueLeadsContactedCount: createOptionFromNullable(array(number), 'uniqueLeadsContactedCount'),
	leadsConvertedCount: createOptionFromNullable(array(number), 'leadsConvertedCount'),
});
