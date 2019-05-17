import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';

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
	guid: createOptionFromOptional(string, 'guid'),
	loanDocId: createOptionFromOptional(number, 'loanDocId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	documentTypeId: createOptionFromOptional(number, 'documentTypeId'),
	note: createOptionFromOptional(string, 'note'),
	borrowerNote: createOptionFromOptional(string, 'borrowerNote'),
	condition: createOptionFromOptional(boolean, 'condition'),
	fileName: createOptionFromOptional(string, 'fileName'),
	mimeType: createOptionFromOptional(string, 'mimeType'),
	fileData: createOptionFromOptional(string, 'fileData'),
	createDate: createOptionFromOptional(DateFromDatelike, 'createDate'),
	exportDate: createOptionFromOptional(DateFromDatelike, 'exportDate'),
	active: createOptionFromOptional(boolean, 'active'),
});
