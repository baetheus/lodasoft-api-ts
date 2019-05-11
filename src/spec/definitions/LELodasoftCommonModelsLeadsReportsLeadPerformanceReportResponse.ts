import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponse = {
	newLeadsReceived: Option<number>;
	contactAttemptsCount: Option<number>;
	contactSuccessCount: Option<number>;
	emailsSentCount: Option<number>;
	uniqueLeadsContactedCount: Option<number>;
	leadsConvertedCount: Option<number>;
};
export const LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponseIO = type({
	newLeadsReceived: createOptionFromOptional(number, 'newLeadsReceived'),
	contactAttemptsCount: createOptionFromOptional(number, 'contactAttemptsCount'),
	contactSuccessCount: createOptionFromOptional(number, 'contactSuccessCount'),
	emailsSentCount: createOptionFromOptional(number, 'emailsSentCount'),
	uniqueLeadsContactedCount: createOptionFromOptional(number, 'uniqueLeadsContactedCount'),
	leadsConvertedCount: createOptionFromOptional(number, 'leadsConvertedCount'),
});
