import { Option } from 'fp-ts/lib/Option';
import { string, number, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsLoanDocFileViewModel = {
	guid: Option<string>;
	loanDocId: Option<number>;
	applicationId: Option<number>;
	borrowerId: Option<number>;
	documentTypeId: Option<number>;
	note: Option<string>;
	borrowerNote: Option<string>;
	condition: Option<boolean>;
	fileName: Option<string>;
	mimeType: Option<string>;
	fileData: Option<string>;
	createDate: Option<Date>;
	exportDate: Option<Date>;
	active: Option<boolean>;
};
export const LELodasoftCommonModelsLoanDocFileViewModelIO = type({
	guid: createOptionFromNullable(string, 'guid'),
	loanDocId: createOptionFromNullable(number, 'loanDocId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	documentTypeId: createOptionFromNullable(number, 'documentTypeId'),
	note: createOptionFromNullable(string, 'note'),
	borrowerNote: createOptionFromNullable(string, 'borrowerNote'),
	condition: createOptionFromNullable(boolean, 'condition'),
	fileName: createOptionFromNullable(string, 'fileName'),
	mimeType: createOptionFromNullable(string, 'mimeType'),
	fileData: createOptionFromNullable(string, 'fileData'),
	createDate: createOptionFromNullable(DateFromISOString, 'createDate'),
	exportDate: createOptionFromNullable(DateFromISOString, 'exportDate'),
	active: createOptionFromNullable(boolean, 'active'),
});
