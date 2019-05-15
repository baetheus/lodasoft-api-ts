import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	agentId: createOptionFromOptional(number, 'agentId'),
	agentTypeId: createOptionFromOptional(number, 'agentTypeId'),
	agentType: createOptionFromOptional(string, 'agentType'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	phone: createOptionFromOptional(string, 'phone'),
	email: createOptionFromOptional(string, 'email'),
	orgName: createOptionFromOptional(string, 'orgName'),
	fax: createOptionFromOptional(string, 'fax'),
});
