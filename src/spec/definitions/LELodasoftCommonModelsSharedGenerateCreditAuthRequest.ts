import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsSharedGenerateCreditAuthRequest = { creditAuthText: Option<string> };
export const LELodasoftCommonModelsSharedGenerateCreditAuthRequestIO = type({
	creditAuthText: createOptionFromOptional(string, 'creditAuthText'),
});
