import { Option } from 'fp-ts/lib/Option';
import { string, number, boolean, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftDataAccessDbModelsAdminDocFileModel = {
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
export const LELodasoftDataAccessDbModelsAdminDocFileModelIO = type({
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
