import { Option } from 'fp-ts/lib/Option';
import { union, literal, string, number, type } from 'io-ts';
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
	serviceType: createOptionFromNullable(union([literal('Twilio')])),
	fromPhoneNumber: createOptionFromNullable(string),
	accountIdentifier: createOptionFromNullable(string),
	authToken: createOptionFromNullable(string),
	toPhoneNumber: createOptionFromNullable(string),
	message: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
});
