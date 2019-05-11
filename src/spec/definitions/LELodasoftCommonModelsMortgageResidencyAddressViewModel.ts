import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

import {
  LELodasoftCommonModelsMortgageAddressViewModel,
  LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { createOptionFromOptional } from '../utils/optionFromOptional';
import { createEnumType } from '../utils/utils';

export enum OwnRentTypeEnum {
	'Own',
	'Rent',
	'LivingRentFree',
}

export enum ResidencyBasisEnum {
	'PresentAddress',
	'FormerAddress',
	'MailingAddress',
	'UnknownAddress',
}

export type LELodasoftCommonModelsMortgageResidencyAddressViewModel = {
	residencyAddressId: Option<number>;
	borrowerId: number;
	addressId: Option<number>;
	residencyBasis: ResidencyBasisEnum;
	durationYears: Option<number>;
	durationMonths: Option<number>;
	ownRentType: Option<OwnRentTypeEnum>;
	fromCreditReport: Option<boolean>;
	address: Option<LELodasoftCommonModelsMortgageAddressViewModel>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageResidencyAddressViewModelIO = type({
	residencyAddressId: createOptionFromOptional(number, 'residencyAddressId'),
	borrowerId: number,
	addressId: createOptionFromOptional(number, 'addressId'),
	residencyBasis: createEnumType<ResidencyBasisEnum>(ResidencyBasisEnum, 'ResidencyBasisEnum'),
	durationYears: createOptionFromOptional(number, 'durationYears'),
	durationMonths: createOptionFromOptional(number, 'durationMonths'),
	ownRentType: createOptionFromOptional(
		createEnumType<OwnRentTypeEnum>(OwnRentTypeEnum, 'OwnRentTypeEnum'),
		'ownRentType',
	),
	fromCreditReport: createOptionFromOptional(boolean, 'fromCreditReport'),
	address: createOptionFromOptional(LELodasoftCommonModelsMortgageAddressViewModelIO, 'address'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
