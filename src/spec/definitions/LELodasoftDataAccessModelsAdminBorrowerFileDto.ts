import { Option } from 'fp-ts/lib/Option';
import { string, number, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	guid: createOptionFromNullable(string, 'guid'),
	loanDocId: createOptionFromNullable(number, 'loanDocId'),
	fileName: createOptionFromNullable(string, 'fileName'),
	note: createOptionFromNullable(string, 'note'),
	borrowerNote: createOptionFromNullable(string, 'borrowerNote'),
	condition: createOptionFromNullable(boolean, 'condition'),
	createDate: createOptionFromNullable(DateFromISOString, 'createDate'),
	expirationDate: createOptionFromNullable(DateFromISOString, 'expirationDate'),
	active: createOptionFromNullable(boolean, 'active'),
});
