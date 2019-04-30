import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

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
	speedToContactAttemptMinutes: createOptionFromNullable(number, 'speedToContactAttemptMinutes'),
	speedToContactMinutes: createOptionFromNullable(number, 'speedToContactMinutes'),
	activeLeads: createOptionFromNullable(number, 'activeLeads'),
	contactRate: createOptionFromNullable(number, 'contactRate'),
	conversionRate: createOptionFromNullable(number, 'conversionRate'),
	totalActiveLeads: createOptionFromNullable(number, 'totalActiveLeads'),
	totalConversionRate: createOptionFromNullable(number, 'totalConversionRate'),
	totalContactRate: createOptionFromNullable(number, 'totalContactRate'),
});
