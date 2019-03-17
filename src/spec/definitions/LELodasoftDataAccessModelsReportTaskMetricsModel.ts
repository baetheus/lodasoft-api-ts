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
	userId: createOptionFromNullable(string),
	userFullName: createOptionFromNullable(string),
	applicationId: createOptionFromNullable(number),
	roleId: createOptionFromNullable(number),
	loanPurpose: createOptionFromNullable(number),
	loanType: createOptionFromNullable(number),
	taskCount: createOptionFromNullable(number),
	taskIdentifier: createOptionFromNullable(string),
	avgTaskCompletion: createOptionFromNullable(number),
	avgBorrSubmission: createOptionFromNullable(number),
	avgBorrApproval: createOptionFromNullable(number),
});
