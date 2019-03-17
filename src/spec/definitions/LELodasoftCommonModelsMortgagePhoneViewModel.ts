import { Option } from 'fp-ts/lib/Option';
import { number, string, union, literal, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgagePhoneViewModel = {
	phoneId: Option<number>;
	borrowerId: Option<number>;
	phoneNumber: Option<string>;
	typeOfPhone: Option<'HomePhone' | 'WorkPhone' | 'CellPhone'>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgagePhoneViewModelIO = type({
	phoneId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	phoneNumber: createOptionFromNullable(string),
	typeOfPhone: createOptionFromNullable(union([literal('HomePhone'), literal('WorkPhone'), literal('CellPhone')])),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
