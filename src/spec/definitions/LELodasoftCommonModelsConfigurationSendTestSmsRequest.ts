import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

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
	serviceType: createOptionFromNullable(
		createEnumType<ServiceTypeEnum>(ServiceTypeEnum, 'ServiceTypeEnum'),
		'serviceType',
	),
	fromPhoneNumber: createOptionFromNullable(string, 'fromPhoneNumber'),
	accountIdentifier: createOptionFromNullable(string, 'accountIdentifier'),
	authToken: createOptionFromNullable(string, 'authToken'),
	toPhoneNumber: createOptionFromNullable(string, 'toPhoneNumber'),
	message: createOptionFromNullable(string, 'message'),
	companyId: createOptionFromNullable(number, 'companyId'),
});
