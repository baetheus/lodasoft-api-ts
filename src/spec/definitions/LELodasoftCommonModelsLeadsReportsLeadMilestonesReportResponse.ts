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
	speedToContactAttemptMinutes: createOptionFromNullable(number),
	speedToContactMinutes: createOptionFromNullable(number),
	activeLeads: createOptionFromNullable(number),
	contactRate: createOptionFromNullable(number),
	conversionRate: createOptionFromNullable(number),
	totalActiveLeads: createOptionFromNullable(number),
	totalConversionRate: createOptionFromNullable(number),
	totalContactRate: createOptionFromNullable(number),
});
