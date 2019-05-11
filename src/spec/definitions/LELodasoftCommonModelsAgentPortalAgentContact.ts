import {
	LELodasoftCommonModelsSharedLoanContact,
	LELodasoftCommonModelsSharedLoanContactIO,
} from '../definitions/LELodasoftCommonModelsSharedLoanContact';
import { Option } from 'fp-ts/lib/Option';
import { string, array, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsAgentPortalAgentContact = {
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
export const LELodasoftCommonModelsAgentPortalAgentContactIO = type({
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	title: createOptionFromOptional(string, 'title'),
	agentNMLS: createOptionFromOptional(string, 'agentNMLS'),
	agentAvatarUrl: createOptionFromOptional(string, 'agentAvatarUrl'),
	agentAddressUrl: createOptionFromOptional(string, 'agentAddressUrl'),
	phoneNumber: createOptionFromOptional(string, 'phoneNumber'),
	faxNumber: createOptionFromOptional(string, 'faxNumber'),
	emailAddress: createOptionFromOptional(string, 'emailAddress'),
	companyName: createOptionFromOptional(string, 'companyName'),
	companyUrl: createOptionFromOptional(string, 'companyUrl'),
	companyNMLS: createOptionFromOptional(string, 'companyNMLS'),
	address: createOptionFromOptional(string, 'address'),
	city: createOptionFromOptional(string, 'city'),
	state: createOptionFromOptional(string, 'state'),
	zip: createOptionFromOptional(string, 'zip'),
	loanContacts: createOptionFromOptional(array(LELodasoftCommonModelsSharedLoanContactIO), 'loanContacts'),
});
