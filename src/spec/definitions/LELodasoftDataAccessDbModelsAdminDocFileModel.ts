import { Option } from 'fp-ts/lib/Option';
import { string, number, boolean, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	createDate: createOptionFromOptional(DateFromISOString, 'createDate'),
	exportDate: createOptionFromOptional(DateFromISOString, 'exportDate'),
	active: createOptionFromOptional(boolean, 'active'),
});
