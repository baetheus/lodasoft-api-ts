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
	userName: createOptionFromNullable(string, 'userName'),
	email: createOptionFromNullable(string, 'email'),
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	companyId: createOptionFromNullable(number, 'companyId'),
	sentDate: createOptionFromNullable(DateFromISOString, 'sentDate'),
	registerDate: createOptionFromNullable(DateFromISOString, 'registerDate'),
	isAdmin: createOptionFromNullable(boolean, 'isAdmin'),
	userId: createOptionFromNullable(string, 'userId'),
	active: createOptionFromNullable(boolean, 'active'),
});
