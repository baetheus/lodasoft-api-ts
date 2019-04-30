import { Option } from 'fp-ts/lib/Option';
import { number, keyof, string, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageAddressViewModel = {
	addressId: Option<number>;
	typeOfAddress: Option<'PresentAddress' | 'FormerAddress' | 'MailingAddress'>;
	address1: Option<string>;
	city: Option<string>;
	state: Option<string>;
	zipCode: Option<string>;
	country: Option<string>;
	active: Option<boolean>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageAddressViewModelIO = type({
	addressId: createOptionFromNullable(number, 'addressId'),
	typeOfAddress: createOptionFromNullable(
		keyof({ PresentAddress: null, FormerAddress: null, MailingAddress: null }),
		'typeOfAddress',
	),
	address1: createOptionFromNullable(string, 'address1'),
	city: createOptionFromNullable(string, 'city'),
	state: createOptionFromNullable(string, 'state'),
	zipCode: createOptionFromNullable(string, 'zipCode'),
	country: createOptionFromNullable(string, 'country'),
	active: createOptionFromNullable(boolean, 'active'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
