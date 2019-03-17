import { Option } from 'fp-ts/lib/Option';
import { string, number, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftApiModelsAdminInviteViewModel = {
	userName: Option<string>;
	email: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
	companyId: Option<number>;
	sentDate: Option<Date>;
	registerDate: Option<Date>;
	isAdmin: Option<boolean>;
	userId: Option<string>;
	active: Option<boolean>;
};
export const LELodasoftApiModelsAdminInviteViewModelIO = type({
	userName: createOptionFromNullable(string),
	email: createOptionFromNullable(string),
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	sentDate: createOptionFromNullable(DateFromISOString),
	registerDate: createOptionFromNullable(DateFromISOString),
	isAdmin: createOptionFromNullable(boolean),
	userId: createOptionFromNullable(string),
	active: createOptionFromNullable(boolean),
});
