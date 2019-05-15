import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

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
	phoneId: createOptionFromOptional(number, 'phoneId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	phoneNumber: createOptionFromOptional(string, 'phoneNumber'),
	typeOfPhone: createOptionFromOptional(
		createEnumType<TypeOfPhoneEnum>(TypeOfPhoneEnum, 'TypeOfPhoneEnum'),
		'typeOfPhone',
	),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
