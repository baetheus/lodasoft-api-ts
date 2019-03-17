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
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	birthDate: createOptionFromNullable(DateFromISOString),
	email: createOptionFromNullable(string),
	phone: createOptionFromNullable(string),
	workPhone: createOptionFromNullable(string),
	mailingAddress: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsAddressInfoIO),
	creditScore: createOptionFromNullable(number),
});
