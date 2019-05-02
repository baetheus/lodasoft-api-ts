import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedGenerateCreditAuthResponse = { docFileGuid: Option<string> };
export const LELodasoftCommonModelsSharedGenerateCreditAuthResponseIO = type({
	docFileGuid: createOptionFromNullable(string, 'docFileGuid'),
});
