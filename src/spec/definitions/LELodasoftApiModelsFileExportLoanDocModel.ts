import { Option } from 'fp-ts/lib/Option';
import { keyof, string, number, boolean, type } from 'io-ts';
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
		keyof({
			Pending: null,
			Submitted: null,
			Rejected: null,
			Approved: null,
			NotApplicable: null,
			Requested: null,
			Completed: null,
			ReviewReady: null,
		}),
	),
	conditionStatus: createOptionFromNullable(
		keyof({ ConditionPending: null, ConditionCleared: null, ConditionReOpened: null }),
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
