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
	first_name: createOptionFromNullable(string, 'first_name'),
	last_name: createOptionFromNullable(string, 'last_name'),
	address: createOptionFromNullable(string, 'address'),
	city: createOptionFromNullable(string, 'city'),
	state: createOptionFromNullable(string, 'state'),
	zip_code: createOptionFromNullable(string, 'zip_code'),
	email_address: createOptionFromNullable(string, 'email_address'),
	phone_work: createOptionFromNullable(string, 'phone_work'),
	phone_home: createOptionFromNullable(string, 'phone_home'),
	phone_cell: createOptionFromNullable(string, 'phone_cell'),
	best_time: createOptionFromNullable(string, 'best_time'),
	ip_address: createOptionFromNullable(string, 'ip_address'),
	type_of_loan: createOptionFromNullable(string, 'type_of_loan'),
	home_value: createOptionFromNullable(number, 'home_value'),
	mortgage_amount: createOptionFromNullable(number, 'mortgage_amount'),
	property_description: createOptionFromNullable(string, 'property_description'),
	credit_rating: createOptionFromNullable(string, 'credit_rating'),
	loan_type: createOptionFromNullable(string, 'loan_type'),
	cash_out_request: createOptionFromNullable(number, 'cash_out_request'),
	current_interest_rate: createOptionFromNullable(number, 'current_interest_rate'),
	down_payment: createOptionFromNullable(number, 'down_payment'),
	found_home: createOptionFromNullable(string, 'found_home'),
	military_service: createOptionFromNullable(string, 'military_service'),
	website: createOptionFromNullable(string, 'website'),
	current_va: createOptionFromNullable(string, 'current_va'),
	current_fha: createOptionFromNullable(string, 'current_fha'),
	months_late: createOptionFromNullable(string, 'months_late'),
	improve_credit: createOptionFromNullable(string, 'improve_credit'),
	realtor: createOptionFromNullable(string, 'realtor'),
	property_purpose: createOptionFromNullable(string, 'property_purpose'),
	mortgage_payment: createOptionFromNullable(number, 'mortgage_payment'),
	bankruptcy: createOptionFromNullable(string, 'bankruptcy'),
	foreclosure: createOptionFromNullable(string, 'foreclosure'),
	first_homebuyer: createOptionFromNullable(string, 'first_homebuyer'),
	timeframe: createOptionFromNullable(string, 'timeframe'),
	leadID: createOptionFromNullable(string, 'leadID'),
});
