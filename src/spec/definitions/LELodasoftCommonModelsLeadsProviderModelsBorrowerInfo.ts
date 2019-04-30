import {
	LELodasoftCommonModelsLeadsProviderModelsAddressInfo,
	LELodasoftCommonModelsLeadsProviderModelsAddressInfoIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsAddressInfo';
import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	birthDate: createOptionFromNullable(DateFromISOString, 'birthDate'),
	email: createOptionFromNullable(string, 'email'),
	phone: createOptionFromNullable(string, 'phone'),
	workPhone: createOptionFromNullable(string, 'workPhone'),
	mailingAddress: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsAddressInfoIO, 'mailingAddress'),
	creditScore: createOptionFromNullable(number, 'creditScore'),
});
