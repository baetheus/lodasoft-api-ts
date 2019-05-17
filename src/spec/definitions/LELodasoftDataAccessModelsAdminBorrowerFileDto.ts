import { Option } from 'fp-ts/lib/Option';
import { string, number, boolean, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftDataAccessModelsAdminBorrowerFileDto = {
	guid: Option<string>;
	loanDocId: Option<number>;
	fileName: Option<string>;
	note: Option<string>;
	borrowerNote: Option<string>;
	condition: Option<boolean>;
	createDate: Option<Date>;
	expirationDate: Option<Date>;
	active: Option<boolean>;
};
export const LELodasoftDataAccessModelsAdminBorrowerFileDtoIO = type({
	guid: createOptionFromOptional(string, 'guid'),
	loanDocId: createOptionFromOptional(number, 'loanDocId'),
	fileName: createOptionFromOptional(string, 'fileName'),
	note: createOptionFromOptional(string, 'note'),
	borrowerNote: createOptionFromOptional(string, 'borrowerNote'),
	condition: createOptionFromOptional(boolean, 'condition'),
	createDate: createOptionFromOptional(DateFromDatelike, 'createDate'),
	expirationDate: createOptionFromOptional(DateFromDatelike, 'expirationDate'),
	active: createOptionFromOptional(boolean, 'active'),
});
