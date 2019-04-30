import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponse = {
	newLeadsReceived: Option<number>;
	contactAttemptsCount: Option<number>;
	contactSuccessCount: Option<number>;
	emailsSentCount: Option<number>;
	uniqueLeadsContactedCount: Option<number>;
	leadsConvertedCount: Option<number>;
};
export const LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponseIO = type({
	newLeadsReceived: createOptionFromNullable(number, 'newLeadsReceived'),
	contactAttemptsCount: createOptionFromNullable(number, 'contactAttemptsCount'),
	contactSuccessCount: createOptionFromNullable(number, 'contactSuccessCount'),
	emailsSentCount: createOptionFromNullable(number, 'emailsSentCount'),
	uniqueLeadsContactedCount: createOptionFromNullable(number, 'uniqueLeadsContactedCount'),
	leadsConvertedCount: createOptionFromNullable(number, 'leadsConvertedCount'),
});
