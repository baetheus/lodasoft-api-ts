import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, keyof, boolean, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageResidencyAddressViewModel = {
	residencyAddressId: Option<number>;
	borrowerId: number;
	addressId: Option<number>;
	residencyBasis: 'PresentAddress' | 'FormerAddress' | 'MailingAddress';
	durationYears: Option<number>;
	durationMonths: Option<number>;
	ownRentType: Option<'Own' | 'Rent' | 'LivingRentFree'>;
	fromCreditReport: Option<boolean>;
	address: Option<LELodasoftCommonModelsMortgageAddressViewModel>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageResidencyAddressViewModelIO = type({
	residencyAddressId: createOptionFromNullable(number, 'residencyAddressId'),
	borrowerId: number,
	addressId: createOptionFromNullable(number, 'addressId'),
	residencyBasis: keyof({ PresentAddress: null, FormerAddress: null, MailingAddress: null }),
	durationYears: createOptionFromNullable(number, 'durationYears'),
	durationMonths: createOptionFromNullable(number, 'durationMonths'),
	ownRentType: createOptionFromNullable(keyof({ Own: null, Rent: null, LivingRentFree: null }), 'ownRentType'),
	fromCreditReport: createOptionFromNullable(boolean, 'fromCreditReport'),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO, 'address'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
