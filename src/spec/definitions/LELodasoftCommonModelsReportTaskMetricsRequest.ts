import { Option } from 'fp-ts/lib/Option';
import { number, union, literal, boolean, array, type } from 'io-ts';
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
	companyId: createOptionFromNullable(number),
	startDate: createOptionFromNullable(DateFromISOString),
	endDate: createOptionFromNullable(DateFromISOString),
	reportType: createOptionFromNullable(
		union([
			literal('TasksByCompany'),
			literal('TasksByUser'),
			literal('TasksByRole'),
			literal('TasksByRoleByUser'),
			literal('TasksByTaskType'),
			literal('TasksByTaskTypeByUser'),
			literal('TasksByUserByTaskType'),
			literal('TasksByLoanType'),
			literal('TasksByLoanPurpose'),
		]),
	),
	activeLoansOnly: createOptionFromNullable(boolean),
	loanPurposeFilters: createOptionFromNullable(array(number)),
	loanStatusFilters: createOptionFromNullable(array(number)),
});
