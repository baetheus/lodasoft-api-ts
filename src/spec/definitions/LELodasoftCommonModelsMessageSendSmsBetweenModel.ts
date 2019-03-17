import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsMessageSendSmsBetweenModel = { num1: Option<string>; num2: Option<string> };
export const LELodasoftCommonModelsMessageSendSmsBetweenModelIO = type({
	num1: createOptionFromNullable(string),
	num2: createOptionFromNullable(string),
});
