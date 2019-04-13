import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessModelsReportPipelineMetricsModel = {
	loanStatus: Option<string>;
	primaryRoleUser: Option<string>;
	applicationId: Option<number>;
	primaryBorrowerId: Option<number>;
	borrowerName: Option<string>;
	loanAmount: Option<number>;
	loanPurpose: Option<string>;
	loanType: Option<string>;
};
export const LELodasoftDataAccessModelsReportPipelineMetricsModelIO = type({
	loanStatus: createOptionFromNullable(string),
	primaryRoleUser: createOptionFromNullable(string),
	applicationId: createOptionFromNullable(number),
	primaryBorrowerId: createOptionFromNullable(number),
	borrowerName: createOptionFromNullable(string),
	loanAmount: createOptionFromNullable(number),
	loanPurpose: createOptionFromNullable(string),
	loanType: createOptionFromNullable(string),
});
