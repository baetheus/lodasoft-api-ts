import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsSharedGenerateEConsentRequest = { eConsentText: Option<string> };
export const LELodasoftCommonModelsSharedGenerateEConsentRequestIO = type({
	eConsentText: createOptionFromOptional(string, 'eConsentText'),
});
