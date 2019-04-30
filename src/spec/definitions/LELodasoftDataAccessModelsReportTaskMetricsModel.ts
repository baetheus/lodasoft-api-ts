import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

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
	userId: createOptionFromNullable(string, 'userId'),
	userFullName: createOptionFromNullable(string, 'userFullName'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	roleId: createOptionFromNullable(number, 'roleId'),
	loanPurpose: createOptionFromNullable(number, 'loanPurpose'),
	loanType: createOptionFromNullable(number, 'loanType'),
	taskCount: createOptionFromNullable(number, 'taskCount'),
	taskIdentifier: createOptionFromNullable(string, 'taskIdentifier'),
	avgTaskCompletion: createOptionFromNullable(number, 'avgTaskCompletion'),
	avgBorrSubmission: createOptionFromNullable(number, 'avgBorrSubmission'),
	avgBorrApproval: createOptionFromNullable(number, 'avgBorrApproval'),
});
