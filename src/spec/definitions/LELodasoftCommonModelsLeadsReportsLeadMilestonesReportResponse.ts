import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponse = {
	speedToContactAttemptMinutes: Option<number>;
	speedToContactMinutes: Option<number>;
	activeLeads: Option<number>;
	contactRate: Option<number>;
	conversionRate: Option<number>;
	totalActiveLeads: Option<number>;
	totalConversionRate: Option<number>;
	totalContactRate: Option<number>;
};
export const LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponseIO = type({
	speedToContactAttemptMinutes: createOptionFromOptional(number, 'speedToContactAttemptMinutes'),
	speedToContactMinutes: createOptionFromOptional(number, 'speedToContactMinutes'),
	activeLeads: createOptionFromOptional(number, 'activeLeads'),
	contactRate: createOptionFromOptional(number, 'contactRate'),
	conversionRate: createOptionFromOptional(number, 'conversionRate'),
	totalActiveLeads: createOptionFromOptional(number, 'totalActiveLeads'),
	totalConversionRate: createOptionFromOptional(number, 'totalConversionRate'),
	totalContactRate: createOptionFromOptional(number, 'totalContactRate'),
});
