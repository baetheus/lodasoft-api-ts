import {
	LELodasoftCommonModelsSharedBorrowerView,
	LELodasoftCommonModelsSharedBorrowerViewIO,
} from '../definitions/LELodasoftCommonModelsSharedBorrowerView';
import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsSharedReferralView = {
	leadId: Option<number>;
	applicationId: Option<number>;
	streetViewImageUrl: Option<string>;
	mapViewImageUrl: Option<string>;
	address: Option<string>;
	city: Option<string>;
	state: Option<string>;
	zip: Option<string>;
	loanStatus: Option<string>;
	blurb: Option<string>;
	loanPurpose: Option<string>;
	loanAmount: Option<number>;
	interestRate: Option<number>;
	contactRole: Option<string>;
	contactName: Option<string>;
	contactNumber: Option<string>;
	companyId: Option<number>;
	companyName: Option<string>;
	applicationName: Option<string>;
	createDate: Option<Date>;
	borrowerDetails: Option<LELodasoftCommonModelsSharedBorrowerView>;
};
export const LELodasoftCommonModelsSharedReferralViewIO = type({
	leadId: createOptionFromOptional(number, 'leadId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	streetViewImageUrl: createOptionFromOptional(string, 'streetViewImageUrl'),
	mapViewImageUrl: createOptionFromOptional(string, 'mapViewImageUrl'),
	address: createOptionFromOptional(string, 'address'),
	city: createOptionFromOptional(string, 'city'),
	state: createOptionFromOptional(string, 'state'),
	zip: createOptionFromOptional(string, 'zip'),
	loanStatus: createOptionFromOptional(string, 'loanStatus'),
	blurb: createOptionFromOptional(string, 'blurb'),
	loanPurpose: createOptionFromOptional(string, 'loanPurpose'),
	loanAmount: createOptionFromOptional(number, 'loanAmount'),
	interestRate: createOptionFromOptional(number, 'interestRate'),
	contactRole: createOptionFromOptional(string, 'contactRole'),
	contactName: createOptionFromOptional(string, 'contactName'),
	contactNumber: createOptionFromOptional(string, 'contactNumber'),
	companyId: createOptionFromOptional(number, 'companyId'),
	companyName: createOptionFromOptional(string, 'companyName'),
	applicationName: createOptionFromOptional(string, 'applicationName'),
	createDate: createOptionFromOptional(DateFromISOString, 'createDate'),
	borrowerDetails: createOptionFromOptional(LELodasoftCommonModelsSharedBorrowerViewIO, 'borrowerDetails'),
});
