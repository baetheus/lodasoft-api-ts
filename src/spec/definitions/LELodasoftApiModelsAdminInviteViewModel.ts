import { Option } from 'fp-ts/lib/Option';
import { string, number, boolean, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	userName: createOptionFromOptional(string, 'userName'),
	email: createOptionFromOptional(string, 'email'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	companyId: createOptionFromOptional(number, 'companyId'),
	sentDate: createOptionFromOptional(DateFromISOString, 'sentDate'),
	registerDate: createOptionFromOptional(DateFromISOString, 'registerDate'),
	isAdmin: createOptionFromOptional(boolean, 'isAdmin'),
	userId: createOptionFromOptional(string, 'userId'),
	active: createOptionFromOptional(boolean, 'active'),
});
