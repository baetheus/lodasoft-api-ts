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
	smsServiceId: createOptionFromNullable(number, 'smsServiceId'),
	userId: createOptionFromNullable(string, 'userId'),
	serviceType: createOptionFromNullable(string, 'serviceType'),
	fromPhoneNumber: createOptionFromNullable(string, 'fromPhoneNumber'),
	accountIdentifier: createOptionFromNullable(string, 'accountIdentifier'),
	authToken: createOptionFromNullable(string, 'authToken'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
