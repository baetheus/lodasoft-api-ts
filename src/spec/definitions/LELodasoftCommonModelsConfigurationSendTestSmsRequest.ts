import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';

export enum ServiceTypeEnum {
	'Twilio',
}

export type LELodasoftCommonModelsConfigurationSendTestSmsRequest = {
	serviceType: Option<ServiceTypeEnum>;
	fromPhoneNumber: Option<string>;
	accountIdentifier: Option<string>;
	authToken: Option<string>;
	toPhoneNumber: Option<string>;
	message: Option<string>;
	companyId: Option<number>;
};
export const LELodasoftCommonModelsConfigurationSendTestSmsRequestIO = type({
	serviceType: createOptionFromOptional(
		createEnumType<ServiceTypeEnum>(ServiceTypeEnum, 'ServiceTypeEnum'),
		'serviceType',
	),
	fromPhoneNumber: createOptionFromOptional(string, 'fromPhoneNumber'),
	accountIdentifier: createOptionFromOptional(string, 'accountIdentifier'),
	authToken: createOptionFromOptional(string, 'authToken'),
	toPhoneNumber: createOptionFromOptional(string, 'toPhoneNumber'),
	message: createOptionFromOptional(string, 'message'),
	companyId: createOptionFromOptional(number, 'companyId'),
});
