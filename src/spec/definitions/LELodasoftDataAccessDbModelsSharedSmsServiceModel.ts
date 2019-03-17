import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsSharedSmsServiceModel = {
	smsServiceId: Option<number>;
	userId: Option<string>;
	serviceType: Option<string>;
	fromPhoneNumber: Option<string>;
	accountIdentifier: Option<string>;
	authToken: Option<string>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftDataAccessDbModelsSharedSmsServiceModelIO = type({
	smsServiceId: createOptionFromNullable(number),
	userId: createOptionFromNullable(string),
	serviceType: createOptionFromNullable(string),
	fromPhoneNumber: createOptionFromNullable(string),
	accountIdentifier: createOptionFromNullable(string),
	authToken: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
