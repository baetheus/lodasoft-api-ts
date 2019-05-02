import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

export enum ReportTypeEnum {
	'TasksByCompany',
	'TasksByUser',
	'TasksByRole',
	'TasksByRoleByUser',
	'TasksByTaskType',
	'TasksByTaskTypeByUser',
	'TasksByUserByTaskType',
	'TasksByLoanType',
	'TasksByLoanPurpose',
}

export type LELodasoftCommonModelsReportTaskMetricsRequest = {
	companyId: Option<number>;
	startDate: Option<Date>;
	endDate: Option<Date>;
	reportType: Option<ReportTypeEnum>;
	activeLoansOnly: Option<boolean>;
	loanPurposeFilters: Option<Array<number>>;
	loanStatusFilters: Option<Array<number>>;
};
export const LELodasoftCommonModelsReportTaskMetricsRequestIO = type({
	companyId: createOptionFromNullable(number, 'companyId'),
	startDate: createOptionFromNullable(DateFromISOString, 'startDate'),
	endDate: createOptionFromNullable(DateFromISOString, 'endDate'),
	reportType: createOptionFromNullable(
		createEnumType<ReportTypeEnum>(ReportTypeEnum, 'ReportTypeEnum'),
		'reportType',
	),
	activeLoansOnly: createOptionFromNullable(boolean, 'activeLoansOnly'),
	loanPurposeFilters: createOptionFromNullable(array(number), 'loanPurposeFilters'),
	loanStatusFilters: createOptionFromNullable(array(number), 'loanStatusFilters'),
});
