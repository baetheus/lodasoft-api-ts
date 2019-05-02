import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedGenerateEConsentResponse = { docFileGuid: Option<string> };
export const LELodasoftCommonModelsSharedGenerateEConsentResponseIO = type({
	docFileGuid: createOptionFromNullable(string, 'docFileGuid'),
});
