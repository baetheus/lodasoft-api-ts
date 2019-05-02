import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import {
  LELodasoftCommonModelsMortgageAddressViewModel,
  LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
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
	residencyAddressId: createOptionFromNullable(number, 'residencyAddressId'),
	borrowerId: number,
	addressId: createOptionFromNullable(number, 'addressId'),
	residencyBasis: createEnumType<ResidencyBasisEnum>(ResidencyBasisEnum, 'ResidencyBasisEnum'),
	durationYears: createOptionFromNullable(number, 'durationYears'),
	durationMonths: createOptionFromNullable(number, 'durationMonths'),
	ownRentType: createOptionFromNullable(
		createEnumType<OwnRentTypeEnum>(OwnRentTypeEnum, 'OwnRentTypeEnum'),
		'ownRentType',
	),
	fromCreditReport: createOptionFromNullable(boolean, 'fromCreditReport'),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO, 'address'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
