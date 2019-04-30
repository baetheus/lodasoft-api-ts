import { Option } from 'fp-ts/lib/Option';
import { number, keyof, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsReportPipelineMetricsRequest = {
	companyId: Option<number>;
	startDate: Option<Date>;
	endDate: Option<Date>;
	reportType: Option<'PipelineByCompany'>;
	activeLoansOnly: Option<boolean>;
	loanPurposeFilters: Option<Array<number>>;
	loanStatusFilters: Option<Array<number>>;
};
export const LELodasoftCommonModelsReportPipelineMetricsRequestIO = type({
	companyId: createOptionFromNullable(number, 'companyId'),
	startDate: createOptionFromNullable(DateFromISOString, 'startDate'),
	endDate: createOptionFromNullable(DateFromISOString, 'endDate'),
	reportType: createOptionFromNullable(keyof({ PipelineByCompany: null }), 'reportType'),
	activeLoansOnly: createOptionFromNullable(boolean, 'activeLoansOnly'),
	loanPurposeFilters: createOptionFromNullable(array(number), 'loanPurposeFilters'),
	loanStatusFilters: createOptionFromNullable(array(number), 'loanStatusFilters'),
});
