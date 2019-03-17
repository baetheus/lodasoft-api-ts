import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsSharedOnlineWizardModel = { name: Option<string>; url: Option<string> };
export const LELodasoftApiModelsSharedOnlineWizardModelIO = type({
	name: createOptionFromNullable(string),
	url: createOptionFromNullable(string),
});
