import { Option } from 'fp-ts/lib/Option';
import { string, array, number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	labels: createOptionFromOptional(array(string), 'labels'),
	newLeadsReceived: createOptionFromOptional(array(number), 'newLeadsReceived'),
	contactAttemptsCount: createOptionFromOptional(array(number), 'contactAttemptsCount'),
	contactSuccessCount: createOptionFromOptional(array(number), 'contactSuccessCount'),
	emailsSentCount: createOptionFromOptional(array(number), 'emailsSentCount'),
	uniqueLeadsContactedCount: createOptionFromOptional(array(number), 'uniqueLeadsContactedCount'),
	leadsConvertedCount: createOptionFromOptional(array(number), 'leadsConvertedCount'),
});
