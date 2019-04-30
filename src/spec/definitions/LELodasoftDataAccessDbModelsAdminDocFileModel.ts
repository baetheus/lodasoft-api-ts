import { Option } from 'fp-ts/lib/Option';
import { string, number, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
