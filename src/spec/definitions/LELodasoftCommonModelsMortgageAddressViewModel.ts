import { Option } from 'fp-ts/lib/Option';
import { number, union, literal, string, boolean, type } from 'io-ts';
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
	addressId: createOptionFromNullable(number),
	typeOfAddress: createOptionFromNullable(
		union([literal('PresentAddress'), literal('FormerAddress'), literal('MailingAddress')]),
	),
	address1: createOptionFromNullable(string),
	city: createOptionFromNullable(string),
	state: createOptionFromNullable(string),
	zipCode: createOptionFromNullable(string),
	country: createOptionFromNullable(string),
	active: createOptionFromNullable(boolean),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
