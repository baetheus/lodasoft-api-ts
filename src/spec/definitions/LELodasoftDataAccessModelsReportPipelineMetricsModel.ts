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
	loanStatus: createOptionFromNullable(string, 'loanStatus'),
	primaryRoleUser: createOptionFromNullable(string, 'primaryRoleUser'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	primaryBorrowerId: createOptionFromNullable(number, 'primaryBorrowerId'),
	borrowerName: createOptionFromNullable(string, 'borrowerName'),
	loanAmount: createOptionFromNullable(number, 'loanAmount'),
	loanPurpose: createOptionFromNullable(string, 'loanPurpose'),
	loanType: createOptionFromNullable(string, 'loanType'),
});
