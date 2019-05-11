import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	first_name: createOptionFromOptional(string, 'first_name'),
	last_name: createOptionFromOptional(string, 'last_name'),
	address: createOptionFromOptional(string, 'address'),
	city: createOptionFromOptional(string, 'city'),
	state: createOptionFromOptional(string, 'state'),
	zip_code: createOptionFromOptional(string, 'zip_code'),
	email_address: createOptionFromOptional(string, 'email_address'),
	phone_work: createOptionFromOptional(string, 'phone_work'),
	phone_home: createOptionFromOptional(string, 'phone_home'),
	phone_cell: createOptionFromOptional(string, 'phone_cell'),
	best_time: createOptionFromOptional(string, 'best_time'),
	ip_address: createOptionFromOptional(string, 'ip_address'),
	type_of_loan: createOptionFromOptional(string, 'type_of_loan'),
	home_value: createOptionFromOptional(number, 'home_value'),
	mortgage_amount: createOptionFromOptional(number, 'mortgage_amount'),
	property_description: createOptionFromOptional(string, 'property_description'),
	credit_rating: createOptionFromOptional(string, 'credit_rating'),
	loan_type: createOptionFromOptional(string, 'loan_type'),
	cash_out_request: createOptionFromOptional(number, 'cash_out_request'),
	current_interest_rate: createOptionFromOptional(number, 'current_interest_rate'),
	down_payment: createOptionFromOptional(number, 'down_payment'),
	found_home: createOptionFromOptional(string, 'found_home'),
	military_service: createOptionFromOptional(string, 'military_service'),
	website: createOptionFromOptional(string, 'website'),
	current_va: createOptionFromOptional(string, 'current_va'),
	current_fha: createOptionFromOptional(string, 'current_fha'),
	months_late: createOptionFromOptional(string, 'months_late'),
	improve_credit: createOptionFromOptional(string, 'improve_credit'),
	realtor: createOptionFromOptional(string, 'realtor'),
	property_purpose: createOptionFromOptional(string, 'property_purpose'),
	mortgage_payment: createOptionFromOptional(number, 'mortgage_payment'),
	bankruptcy: createOptionFromOptional(string, 'bankruptcy'),
	foreclosure: createOptionFromOptional(string, 'foreclosure'),
	first_homebuyer: createOptionFromOptional(string, 'first_homebuyer'),
	timeframe: createOptionFromOptional(string, 'timeframe'),
	leadID: createOptionFromOptional(string, 'leadID'),
});
