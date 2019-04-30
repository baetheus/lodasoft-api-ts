import { Option } from 'fp-ts/lib/Option';
import { keyof, string, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationSendTestSmsRequest = {
	serviceType: Option<'Twilio'>;
	fromPhoneNumber: Option<string>;
	accountIdentifier: Option<string>;
	authToken: Option<string>;
	toPhoneNumber: Option<string>;
	message: Option<string>;
	companyId: Option<number>;
};
export const LELodasoftCommonModelsConfigurationSendTestSmsRequestIO = type({
	serviceType: createOptionFromNullable(keyof({ Twilio: null }), 'serviceType'),
	fromPhoneNumber: createOptionFromNullable(string, 'fromPhoneNumber'),
	accountIdentifier: createOptionFromNullable(string, 'accountIdentifier'),
	authToken: createOptionFromNullable(string, 'authToken'),
	toPhoneNumber: createOptionFromNullable(string, 'toPhoneNumber'),
	message: createOptionFromNullable(string, 'message'),
	companyId: createOptionFromNullable(number, 'companyId'),
});
