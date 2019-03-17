import { Option } from 'fp-ts/lib/Option';
import { union, literal, string, number, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftApiModelsFileExportLoanDocModel = {
	taskStatus: Option<
		'Pending' | 'Submitted' | 'Rejected' | 'Approved' | 'NotApplicable' | 'Requested' | 'Completed' | 'ReviewReady'
	>;
	conditionStatus: Option<'ConditionPending' | 'ConditionCleared' | 'ConditionReOpened'>;
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
		union([
			literal('Pending'),
			literal('Submitted'),
			literal('Rejected'),
			literal('Approved'),
			literal('NotApplicable'),
			literal('Requested'),
			literal('Completed'),
			literal('ReviewReady'),
		]),
	),
	conditionStatus: createOptionFromNullable(
		union([literal('ConditionPending'), literal('ConditionCleared'), literal('ConditionReOpened')]),
	),
	guid: createOptionFromNullable(string),
	loanDocId: createOptionFromNullable(number),
	note: createOptionFromNullable(string),
	borrowerNote: createOptionFromNullable(string),
	condition: createOptionFromNullable(boolean),
	replacementValuesJson: createOptionFromNullable(string),
	fileName: createOptionFromNullable(string),
	mimeType: createOptionFromNullable(string),
	fileData: createOptionFromNullable(string),
	createDate: createOptionFromNullable(DateFromISOString),
	exportDate: createOptionFromNullable(DateFromISOString),
	active: createOptionFromNullable(boolean),
});
