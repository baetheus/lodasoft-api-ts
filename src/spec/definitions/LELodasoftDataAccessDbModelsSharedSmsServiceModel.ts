import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	smsServiceId: createOptionFromOptional(number, 'smsServiceId'),
	userId: createOptionFromOptional(string, 'userId'),
	serviceType: createOptionFromOptional(string, 'serviceType'),
	fromPhoneNumber: createOptionFromOptional(string, 'fromPhoneNumber'),
	accountIdentifier: createOptionFromOptional(string, 'accountIdentifier'),
	authToken: createOptionFromOptional(string, 'authToken'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
