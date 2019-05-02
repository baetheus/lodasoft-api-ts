import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedGenerateCreditAuthRequest = { creditAuthText: Option<string> };
export const LELodasoftCommonModelsSharedGenerateCreditAuthRequestIO = type({
	creditAuthText: createOptionFromNullable(string, 'creditAuthText'),
});
