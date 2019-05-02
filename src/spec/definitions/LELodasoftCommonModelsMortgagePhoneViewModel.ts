import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

export enum TypeOfPhoneEnum {
	'HomePhone',
	'WorkPhone',
	'CellPhone',
}

export type LELodasoftCommonModelsMortgagePhoneViewModel = {
	phoneId: Option<number>;
	borrowerId: Option<number>;
	phoneNumber: Option<string>;
	typeOfPhone: Option<TypeOfPhoneEnum>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgagePhoneViewModelIO = type({
	phoneId: createOptionFromNullable(number, 'phoneId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	phoneNumber: createOptionFromNullable(string, 'phoneNumber'),
	typeOfPhone: createOptionFromNullable(
		createEnumType<TypeOfPhoneEnum>(TypeOfPhoneEnum, 'TypeOfPhoneEnum'),
		'typeOfPhone',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
