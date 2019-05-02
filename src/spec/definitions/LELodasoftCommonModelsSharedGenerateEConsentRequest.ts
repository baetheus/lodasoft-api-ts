import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedGenerateEConsentRequest = { eConsentText: Option<string> };
export const LELodasoftCommonModelsSharedGenerateEConsentRequestIO = type({
	eConsentText: createOptionFromNullable(string, 'eConsentText'),
});
