import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

export enum TypeOfEmailEnum {
	'PrimaryEmail',
	'AdditionalEmail',
}

export type LELodasoftCommonModelsMortgageEmailViewModel = {
	emailId: Option<number>;
	borrowerId: Option<number>;
	emailAddress: Option<string>;
	typeOfEmail: Option<TypeOfEmailEnum>;
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
	typeOfEmail: createOptionFromNullable(
		createEnumType<TypeOfEmailEnum>(TypeOfEmailEnum, 'TypeOfEmailEnum'),
		'typeOfEmail',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
