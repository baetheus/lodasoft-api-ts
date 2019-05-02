import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

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
	taskStatus: createOptionFromNullable(
		createEnumType<TaskStatusEnum>(TaskStatusEnum, 'TaskStatusEnum'),
		'taskStatus',
	),
	conditionStatus: createOptionFromNullable(
		createEnumType<ConditionStatusEnum>(ConditionStatusEnum, 'ConditionStatusEnum'),
		'conditionStatus',
	),
	guid: createOptionFromNullable(string, 'guid'),
	loanDocId: createOptionFromNullable(number, 'loanDocId'),
	note: createOptionFromNullable(string, 'note'),
	borrowerNote: createOptionFromNullable(string, 'borrowerNote'),
	condition: createOptionFromNullable(boolean, 'condition'),
	replacementValuesJson: createOptionFromNullable(string, 'replacementValuesJson'),
	fileName: createOptionFromNullable(string, 'fileName'),
	mimeType: createOptionFromNullable(string, 'mimeType'),
	fileData: createOptionFromNullable(string, 'fileData'),
	createDate: createOptionFromNullable(DateFromISOString, 'createDate'),
	exportDate: createOptionFromNullable(DateFromISOString, 'exportDate'),
	active: createOptionFromNullable(boolean, 'active'),
});
