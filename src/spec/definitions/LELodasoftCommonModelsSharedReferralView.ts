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
	leadId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	streetViewImageUrl: createOptionFromNullable(string),
	mapViewImageUrl: createOptionFromNullable(string),
	address: createOptionFromNullable(string),
	city: createOptionFromNullable(string),
	state: createOptionFromNullable(string),
	zip: createOptionFromNullable(string),
	loanStatus: createOptionFromNullable(string),
	blurb: createOptionFromNullable(string),
	loanPurpose: createOptionFromNullable(string),
	loanAmount: createOptionFromNullable(number),
	interestRate: createOptionFromNullable(number),
	contactRole: createOptionFromNullable(string),
	contactName: createOptionFromNullable(string),
	contactNumber: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	companyName: createOptionFromNullable(string),
	applicationName: createOptionFromNullable(string),
	createDate: createOptionFromNullable(DateFromISOString),
	borrowerDetails: createOptionFromNullable(LELodasoftCommonModelsSharedBorrowerViewIO),
});
