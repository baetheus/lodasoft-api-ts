import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	loanStatus: createOptionFromOptional(string, 'loanStatus'),
	primaryRoleUser: createOptionFromOptional(string, 'primaryRoleUser'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	primaryBorrowerId: createOptionFromOptional(number, 'primaryBorrowerId'),
	borrowerName: createOptionFromOptional(string, 'borrowerName'),
	loanAmount: createOptionFromOptional(number, 'loanAmount'),
	loanPurpose: createOptionFromOptional(string, 'loanPurpose'),
	loanType: createOptionFromOptional(string, 'loanType'),
});
