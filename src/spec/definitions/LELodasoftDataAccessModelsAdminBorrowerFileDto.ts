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
	guid: createOptionFromNullable(string),
	loanDocId: createOptionFromNullable(number),
	fileName: createOptionFromNullable(string),
	note: createOptionFromNullable(string),
	borrowerNote: createOptionFromNullable(string),
	condition: createOptionFromNullable(boolean),
	createDate: createOptionFromNullable(DateFromISOString),
	expirationDate: createOptionFromNullable(DateFromISOString),
	active: createOptionFromNullable(boolean),
});
