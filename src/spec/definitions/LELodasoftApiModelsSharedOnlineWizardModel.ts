import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsSharedOnlineWizardModel = { name: Option<string>; url: Option<string> };
export const LELodasoftApiModelsSharedOnlineWizardModelIO = type({
	name: createOptionFromOptional(string, 'name'),
	url: createOptionFromOptional(string, 'url'),
});
