import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsProviderModelsBestReferralLead = {
	first_name: Option<string>;
	last_name: Option<string>;
	address: Option<string>;
	city: Option<string>;
	state: Option<string>;
	zip_code: Option<string>;
	email_address: Option<string>;
	phone_work: Option<string>;
	phone_home: Option<string>;
	phone_cell: Option<string>;
	best_time: Option<string>;
	ip_address: Option<string>;
	type_of_loan: Option<string>;
	home_value: Option<number>;
	mortgage_amount: Option<number>;
	property_description: Option<string>;
	credit_rating: Option<string>;
	loan_type: Option<string>;
	cash_out_request: Option<number>;
	current_interest_rate: Option<number>;
	down_payment: Option<number>;
	found_home: Option<string>;
	military_service: Option<string>;
	website: Option<string>;
	current_va: Option<string>;
	current_fha: Option<string>;
	months_late: Option<string>;
	improve_credit: Option<string>;
	realtor: Option<string>;
	property_purpose: Option<string>;
	mortgage_payment: Option<number>;
	bankruptcy: Option<string>;
	foreclosure: Option<string>;
	first_homebuyer: Option<string>;
	timeframe: Option<string>;
	leadID: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsBestReferralLeadIO = type({
	first_name: createOptionFromNullable(string),
	last_name: createOptionFromNullable(string),
	address: createOptionFromNullable(string),
	city: createOptionFromNullable(string),
	state: createOptionFromNullable(string),
	zip_code: createOptionFromNullable(string),
	email_address: createOptionFromNullable(string),
	phone_work: createOptionFromNullable(string),
	phone_home: createOptionFromNullable(string),
	phone_cell: createOptionFromNullable(string),
	best_time: createOptionFromNullable(string),
	ip_address: createOptionFromNullable(string),
	type_of_loan: createOptionFromNullable(string),
	home_value: createOptionFromNullable(number),
	mortgage_amount: createOptionFromNullable(number),
	property_description: createOptionFromNullable(string),
	credit_rating: createOptionFromNullable(string),
	loan_type: createOptionFromNullable(string),
	cash_out_request: createOptionFromNullable(number),
	current_interest_rate: createOptionFromNullable(number),
	down_payment: createOptionFromNullable(number),
	found_home: createOptionFromNullable(string),
	military_service: createOptionFromNullable(string),
	website: createOptionFromNullable(string),
	current_va: createOptionFromNullable(string),
	current_fha: createOptionFromNullable(string),
	months_late: createOptionFromNullable(string),
	improve_credit: createOptionFromNullable(string),
	realtor: createOptionFromNullable(string),
	property_purpose: createOptionFromNullable(string),
	mortgage_payment: createOptionFromNullable(number),
	bankruptcy: createOptionFromNullable(string),
	foreclosure: createOptionFromNullable(string),
	first_homebuyer: createOptionFromNullable(string),
	timeframe: createOptionFromNullable(string),
	leadID: createOptionFromNullable(string),
});
