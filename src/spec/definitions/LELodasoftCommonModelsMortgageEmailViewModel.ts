import { Option } from 'fp-ts/lib/Option';
import { number, string, keyof, type } from 'io-ts';
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
	emailId: createOptionFromNullable(number, 'emailId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	emailAddress: createOptionFromNullable(string, 'emailAddress'),
	typeOfEmail: createOptionFromNullable(keyof({ PrimaryEmail: null, AdditionalEmail: null }), 'typeOfEmail'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
