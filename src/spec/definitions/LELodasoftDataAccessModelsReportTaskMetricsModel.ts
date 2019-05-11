import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftDataAccessModelsReportTaskMetricsModel = {
	userId: Option<string>;
	userFullName: Option<string>;
	applicationId: Option<number>;
	roleId: Option<number>;
	loanPurpose: Option<number>;
	loanType: Option<number>;
	taskCount: Option<number>;
	taskIdentifier: Option<string>;
	avgTaskCompletion: Option<number>;
	avgBorrSubmission: Option<number>;
	avgBorrApproval: Option<number>;
};
export const LELodasoftDataAccessModelsReportTaskMetricsModelIO = type({
	userId: createOptionFromOptional(string, 'userId'),
	userFullName: createOptionFromOptional(string, 'userFullName'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	roleId: createOptionFromOptional(number, 'roleId'),
	loanPurpose: createOptionFromOptional(number, 'loanPurpose'),
	loanType: createOptionFromOptional(number, 'loanType'),
	taskCount: createOptionFromOptional(number, 'taskCount'),
	taskIdentifier: createOptionFromOptional(string, 'taskIdentifier'),
	avgTaskCompletion: createOptionFromOptional(number, 'avgTaskCompletion'),
	avgBorrSubmission: createOptionFromOptional(number, 'avgBorrSubmission'),
	avgBorrApproval: createOptionFromOptional(number, 'avgBorrApproval'),
});
