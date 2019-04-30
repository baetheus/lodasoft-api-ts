import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsBorrowerExternalContactView = {
	agentId: Option<number>;
	agentTypeId: Option<number>;
	agentType: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
	phone: Option<string>;
	email: Option<string>;
	orgName: Option<string>;
	fax: Option<string>;
};
export const LELodasoftApiModelsBorrowerExternalContactViewIO = type({
	agentId: createOptionFromNullable(number, 'agentId'),
	agentTypeId: createOptionFromNullable(number, 'agentTypeId'),
	agentType: createOptionFromNullable(string, 'agentType'),
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	phone: createOptionFromNullable(string, 'phone'),
	email: createOptionFromNullable(string, 'email'),
	orgName: createOptionFromNullable(string, 'orgName'),
	fax: createOptionFromNullable(string, 'fax'),
});
