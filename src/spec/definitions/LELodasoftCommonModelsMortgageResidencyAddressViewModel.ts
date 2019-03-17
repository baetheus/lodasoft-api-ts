import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, union, literal, boolean, string, type } from 'io-ts';
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
	residencyAddressId: createOptionFromNullable(number),
	borrowerId: number,
	addressId: createOptionFromNullable(number),
	residencyBasis: union([literal('PresentAddress'), literal('FormerAddress'), literal('MailingAddress')]),
	durationYears: createOptionFromNullable(number),
	durationMonths: createOptionFromNullable(number),
	ownRentType: createOptionFromNullable(union([literal('Own'), literal('Rent'), literal('LivingRentFree')])),
	fromCreditReport: createOptionFromNullable(boolean),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
