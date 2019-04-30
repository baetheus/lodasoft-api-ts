import {
	LELodasoftCommonModelsSharedBorrowerView,
	LELodasoftCommonModelsSharedBorrowerViewIO,
} from '../definitions/LELodasoftCommonModelsSharedBorrowerView';
import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	leadId: createOptionFromNullable(number, 'leadId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	streetViewImageUrl: createOptionFromNullable(string, 'streetViewImageUrl'),
	mapViewImageUrl: createOptionFromNullable(string, 'mapViewImageUrl'),
	address: createOptionFromNullable(string, 'address'),
	city: createOptionFromNullable(string, 'city'),
	state: createOptionFromNullable(string, 'state'),
	zip: createOptionFromNullable(string, 'zip'),
	loanStatus: createOptionFromNullable(string, 'loanStatus'),
	blurb: createOptionFromNullable(string, 'blurb'),
	loanPurpose: createOptionFromNullable(string, 'loanPurpose'),
	loanAmount: createOptionFromNullable(number, 'loanAmount'),
	interestRate: createOptionFromNullable(number, 'interestRate'),
	contactRole: createOptionFromNullable(string, 'contactRole'),
	contactName: createOptionFromNullable(string, 'contactName'),
	contactNumber: createOptionFromNullable(string, 'contactNumber'),
	companyId: createOptionFromNullable(number, 'companyId'),
	companyName: createOptionFromNullable(string, 'companyName'),
	applicationName: createOptionFromNullable(string, 'applicationName'),
	createDate: createOptionFromNullable(DateFromISOString, 'createDate'),
	borrowerDetails: createOptionFromNullable(LELodasoftCommonModelsSharedBorrowerViewIO, 'borrowerDetails'),
});
