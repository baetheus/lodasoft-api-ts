import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

import { createOptionFromOptional } from '../utils/optionFromOptional';
import { createEnumType } from '../utils/utils';

export enum TypeOfAddressEnum {
	'PresentAddress',
	'FormerAddress',
	'MailingAddress',
}

export type LELodasoftCommonModelsMortgageAddressViewModel = {
	addressId: Option<number>;
	typeOfAddress: Option<TypeOfAddressEnum>;
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
	addressId: createOptionFromOptional(number, 'addressId'),
	typeOfAddress: createOptionFromOptional(
		createEnumType<TypeOfAddressEnum>(TypeOfAddressEnum, 'TypeOfAddressEnum'),
		'typeOfAddress',
	),
	address1: createOptionFromOptional(string, 'address1'),
	city: createOptionFromOptional(string, 'city'),
	state: createOptionFromOptional(string, 'state'),
	zipCode: createOptionFromOptional(string, 'zipCode'),
	country: createOptionFromOptional(string, 'country'),
	active: createOptionFromOptional(boolean, 'active'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
