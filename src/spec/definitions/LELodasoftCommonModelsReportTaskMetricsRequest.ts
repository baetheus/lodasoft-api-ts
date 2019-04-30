import { Option } from 'fp-ts/lib/Option';
import { number, keyof, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsReportTaskMetricsRequest = {
	companyId: Option<number>;
	startDate: Option<Date>;
	endDate: Option<Date>;
	reportType: Option<
		| 'TasksByCompany'
		| 'TasksByUser'
		| 'TasksByRole'
		| 'TasksByRoleByUser'
		| 'TasksByTaskType'
		| 'TasksByTaskTypeByUser'
		| 'TasksByUserByTaskType'
		| 'TasksByLoanType'
		| 'TasksByLoanPurpose'
	>;
	activeLoansOnly: Option<boolean>;
	loanPurposeFilters: Option<Array<number>>;
	loanStatusFilters: Option<Array<number>>;
};
export const LELodasoftCommonModelsReportTaskMetricsRequestIO = type({
	companyId: createOptionFromNullable(number, 'companyId'),
	startDate: createOptionFromNullable(DateFromISOString, 'startDate'),
	endDate: createOptionFromNullable(DateFromISOString, 'endDate'),
	reportType: createOptionFromNullable(
		keyof({
			TasksByCompany: null,
			TasksByUser: null,
			TasksByRole: null,
			TasksByRoleByUser: null,
			TasksByTaskType: null,
			TasksByTaskTypeByUser: null,
			TasksByUserByTaskType: null,
			TasksByLoanType: null,
			TasksByLoanPurpose: null,
		}),
		'reportType',
	),
	activeLoansOnly: createOptionFromNullable(boolean, 'activeLoansOnly'),
	loanPurposeFilters: createOptionFromNullable(array(number), 'loanPurposeFilters'),
	loanStatusFilters: createOptionFromNullable(array(number), 'loanStatusFilters'),
});
