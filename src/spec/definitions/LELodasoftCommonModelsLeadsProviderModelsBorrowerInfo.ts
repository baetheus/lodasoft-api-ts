import {
	LELodasoftCommonModelsLeadsProviderModelsAddressInfo,
	LELodasoftCommonModelsLeadsProviderModelsAddressInfoIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsAddressInfo';
import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsLeadsProviderModelsBorrowerInfo = {
	firstName: Option<string>;
	lastName: Option<string>;
	birthDate: Option<Date>;
	email: Option<string>;
	phone: Option<string>;
	workPhone: Option<string>;
	mailingAddress: Option<LELodasoftCommonModelsLeadsProviderModelsAddressInfo>;
	creditScore: Option<number>;
};
export const LELodasoftCommonModelsLeadsProviderModelsBorrowerInfoIO = type({
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	birthDate: createOptionFromOptional(DateFromISOString, 'birthDate'),
	email: createOptionFromOptional(string, 'email'),
	phone: createOptionFromOptional(string, 'phone'),
	workPhone: createOptionFromOptional(string, 'workPhone'),
	mailingAddress: createOptionFromOptional(LELodasoftCommonModelsLeadsProviderModelsAddressInfoIO, 'mailingAddress'),
	creditScore: createOptionFromOptional(number, 'creditScore'),
});
