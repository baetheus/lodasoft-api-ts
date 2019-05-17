import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';

export enum TaskStatusEnum {
	'Pending',
	'Submitted',
	'Rejected',
	'Approved',
	'NotApplicable',
	'Requested',
	'Completed',
	'ReviewReady',
}

export enum ConditionStatusEnum {
	'ConditionPending',
	'ConditionCleared',
	'ConditionReOpened',
}

export type LELodasoftApiModelsFileExportLoanDocModel = {
	taskStatus: Option<TaskStatusEnum>;
	conditionStatus: Option<ConditionStatusEnum>;
	guid: Option<string>;
	loanDocId: Option<number>;
	note: Option<string>;
	borrowerNote: Option<string>;
	condition: Option<boolean>;
	replacementValuesJson: Option<string>;
	fileName: Option<string>;
	mimeType: Option<string>;
	fileData: Option<string>;
	createDate: Option<Date>;
	exportDate: Option<Date>;
	active: Option<boolean>;
};
export const LELodasoftApiModelsFileExportLoanDocModelIO = type({
	taskStatus: createOptionFromOptional(
		createEnumType<TaskStatusEnum>(TaskStatusEnum, 'TaskStatusEnum'),
		'taskStatus',
	),
	conditionStatus: createOptionFromOptional(
		createEnumType<ConditionStatusEnum>(ConditionStatusEnum, 'ConditionStatusEnum'),
		'conditionStatus',
	),
	guid: createOptionFromOptional(string, 'guid'),
	loanDocId: createOptionFromOptional(number, 'loanDocId'),
	note: createOptionFromOptional(string, 'note'),
	borrowerNote: createOptionFromOptional(string, 'borrowerNote'),
	condition: createOptionFromOptional(boolean, 'condition'),
	replacementValuesJson: createOptionFromOptional(string, 'replacementValuesJson'),
	fileName: createOptionFromOptional(string, 'fileName'),
	mimeType: createOptionFromOptional(string, 'mimeType'),
	fileData: createOptionFromOptional(string, 'fileData'),
	createDate: createOptionFromOptional(DateFromDatelike, 'createDate'),
	exportDate: createOptionFromOptional(DateFromDatelike, 'exportDate'),
	active: createOptionFromOptional(boolean, 'active'),
});
