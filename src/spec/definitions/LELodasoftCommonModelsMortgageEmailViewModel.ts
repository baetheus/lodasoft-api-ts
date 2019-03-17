import { Option } from 'fp-ts/lib/Option';
import { number, string, union, literal, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageEmailViewModel = {
	emailId: Option<number>;
	borrowerId: Option<number>;
	emailAddress: Option<string>;
	typeOfEmail: Option<'PrimaryEmail' | 'AdditionalEmail'>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageEmailViewModelIO = type({
	emailId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	emailAddress: createOptionFromNullable(string),
	typeOfEmail: createOptionFromNullable(union([literal('PrimaryEmail'), literal('AdditionalEmail')])),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
