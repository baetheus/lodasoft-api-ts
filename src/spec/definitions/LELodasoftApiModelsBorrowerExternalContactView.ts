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
	agentId: createOptionFromNullable(number),
	agentTypeId: createOptionFromNullable(number),
	agentType: createOptionFromNullable(string),
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	phone: createOptionFromNullable(string),
	email: createOptionFromNullable(string),
	orgName: createOptionFromNullable(string),
	fax: createOptionFromNullable(string),
});
