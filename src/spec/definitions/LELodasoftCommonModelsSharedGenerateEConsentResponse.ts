import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsSharedGenerateEConsentResponse = { docFileGuid: Option<string> };
export const LELodasoftCommonModelsSharedGenerateEConsentResponseIO = type({
	docFileGuid: createOptionFromOptional(string, 'docFileGuid'),
});
