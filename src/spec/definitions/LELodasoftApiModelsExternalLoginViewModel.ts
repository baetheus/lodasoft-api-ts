import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsExternalLoginViewModel = {
	name: Option<string>;
	url: Option<string>;
	state: Option<string>;
};
export const LELodasoftApiModelsExternalLoginViewModelIO = type({
	name: createOptionFromOptional(string, 'name'),
	url: createOptionFromOptional(string, 'url'),
	state: createOptionFromOptional(string, 'state'),
});
