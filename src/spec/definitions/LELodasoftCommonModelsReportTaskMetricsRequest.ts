import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';

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
	companyId: createOptionFromOptional(number, 'companyId'),
	startDate: createOptionFromOptional(DateFromDatelike, 'startDate'),
	endDate: createOptionFromOptional(DateFromDatelike, 'endDate'),
	reportType: createOptionFromOptional(
		createEnumType<ReportTypeEnum>(ReportTypeEnum, 'ReportTypeEnum'),
		'reportType',
	),
	activeLoansOnly: createOptionFromOptional(boolean, 'activeLoansOnly'),
	loanPurposeFilters: createOptionFromOptional(array(number), 'loanPurposeFilters'),
	loanStatusFilters: createOptionFromOptional(array(number), 'loanStatusFilters'),
});
