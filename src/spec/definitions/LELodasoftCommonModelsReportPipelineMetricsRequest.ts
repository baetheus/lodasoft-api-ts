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
	companyId: createOptionFromNullable(number),
	startDate: createOptionFromNullable(DateFromISOString),
	endDate: createOptionFromNullable(DateFromISOString),
	reportType: createOptionFromNullable(keyof({ PipelineByCompany: null })),
	activeLoansOnly: createOptionFromNullable(boolean),
	loanPurposeFilters: createOptionFromNullable(array(number)),
	loanStatusFilters: createOptionFromNullable(array(number)),
});
