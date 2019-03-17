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
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	title: createOptionFromNullable(string),
	agentNMLS: createOptionFromNullable(string),
	agentAvatarUrl: createOptionFromNullable(string),
	agentAddressUrl: createOptionFromNullable(string),
	phoneNumber: createOptionFromNullable(string),
	faxNumber: createOptionFromNullable(string),
	emailAddress: createOptionFromNullable(string),
	companyName: createOptionFromNullable(string),
	companyUrl: createOptionFromNullable(string),
	companyNMLS: createOptionFromNullable(string),
	address: createOptionFromNullable(string),
	city: createOptionFromNullable(string),
	state: createOptionFromNullable(string),
	zip: createOptionFromNullable(string),
	loanContacts: createOptionFromNullable(array(LELodasoftCommonModelsSharedLoanContactIO)),
});
