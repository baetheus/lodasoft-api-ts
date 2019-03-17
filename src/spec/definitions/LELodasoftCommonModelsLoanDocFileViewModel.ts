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
	guid: createOptionFromNullable(string),
	loanDocId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	documentTypeId: createOptionFromNullable(number),
	note: createOptionFromNullable(string),
	borrowerNote: createOptionFromNullable(string),
	condition: createOptionFromNullable(boolean),
	fileName: createOptionFromNullable(string),
	mimeType: createOptionFromNullable(string),
	fileData: createOptionFromNullable(string),
	createDate: createOptionFromNullable(DateFromISOString),
	exportDate: createOptionFromNullable(DateFromISOString),
	active: createOptionFromNullable(boolean),
});
