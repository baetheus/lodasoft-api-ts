import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsMessageSendSmsBetweenModel = { num1: Option<string>; num2: Option<string> };
export const LELodasoftCommonModelsMessageSendSmsBetweenModelIO = type({
	num1: createOptionFromOptional(string, 'num1'),
	num2: createOptionFromOptional(string, 'num2'),
});
