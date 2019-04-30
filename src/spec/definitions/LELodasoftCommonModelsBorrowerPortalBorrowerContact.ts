import {
	LELodasoftCommonModelsSharedLoanContact,
	LELodasoftCommonModelsSharedLoanContactIO,
} from '../definitions/LELodasoftCommonModelsSharedLoanContact';
import { Option } from 'fp-ts/lib/Option';
import { string, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsBorrowerPortalBorrowerContact = {
	firstName: Option<string>;
	lastName: Option<string>;
	title: Option<string>;
	agentNMLS: Option<string>;
	agentAvatarUrl: Option<string>;
	agentAddressUrl: Option<string>;
	phoneNumber: Option<string>;
	faxNumber: Option<string>;
	emailAddress: Option<string>;
	companyName: Option<string>;
	companyUrl: Option<string>;
	companyNMLS: Option<string>;
	address: Option<string>;
	city: Option<string>;
	state: Option<string>;
	zip: Option<string>;
	loanContacts: Option<Array<LELodasoftCommonModelsSharedLoanContact>>;
};
export const LELodasoftCommonModelsBorrowerPortalBorrowerContactIO = type({
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	title: createOptionFromNullable(string, 'title'),
	agentNMLS: createOptionFromNullable(string, 'agentNMLS'),
	agentAvatarUrl: createOptionFromNullable(string, 'agentAvatarUrl'),
	agentAddressUrl: createOptionFromNullable(string, 'agentAddressUrl'),
	phoneNumber: createOptionFromNullable(string, 'phoneNumber'),
	faxNumber: createOptionFromNullable(string, 'faxNumber'),
	emailAddress: createOptionFromNullable(string, 'emailAddress'),
	companyName: createOptionFromNullable(string, 'companyName'),
	companyUrl: createOptionFromNullable(string, 'companyUrl'),
	companyNMLS: createOptionFromNullable(string, 'companyNMLS'),
	address: createOptionFromNullable(string, 'address'),
	city: createOptionFromNullable(string, 'city'),
	state: createOptionFromNullable(string, 'state'),
	zip: createOptionFromNullable(string, 'zip'),
	loanContacts: createOptionFromNullable(array(LELodasoftCommonModelsSharedLoanContactIO), 'loanContacts'),
});
