import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	emailId: createOptionFromOptional(number, 'emailId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	emailAddress: createOptionFromOptional(string, 'emailAddress'),
	typeOfEmail: createOptionFromOptional(
		createEnumType<TypeOfEmailEnum>(TypeOfEmailEnum, 'TypeOfEmailEnum'),
		'typeOfEmail',
	),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
