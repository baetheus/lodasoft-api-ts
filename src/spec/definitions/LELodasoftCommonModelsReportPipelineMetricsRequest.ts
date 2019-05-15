import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

export enum ReportTypeEnum {
	'PipelineByCompany',
}

export type LELodasoftCommonModelsReportPipelineMetricsRequest = {
	companyId: Option<number>;
	startDate: Option<Date>;
	endDate: Option<Date>;
	reportType: Option<ReportTypeEnum>;
	activeLoansOnly: Option<boolean>;
	loanPurposeFilters: Option<Array<number>>;
	loanStatusFilters: Option<Array<number>>;
};
export const LELodasoftCommonModelsReportPipelineMetricsRequestIO = type({
	companyId: createOptionFromOptional(number, 'companyId'),
	startDate: createOptionFromOptional(DateFromISOString, 'startDate'),
	endDate: createOptionFromOptional(DateFromISOString, 'endDate'),
	reportType: createOptionFromOptional(
		createEnumType<ReportTypeEnum>(ReportTypeEnum, 'ReportTypeEnum'),
		'reportType',
	),
	activeLoansOnly: createOptionFromOptional(boolean, 'activeLoansOnly'),
	loanPurposeFilters: createOptionFromOptional(array(number), 'loanPurposeFilters'),
	loanStatusFilters: createOptionFromOptional(array(number), 'loanStatusFilters'),
});
