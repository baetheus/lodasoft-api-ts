import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsExternalLoginViewModel = {
	name: Option<string>;
	url: Option<string>;
	state: Option<string>;
};
export const LELodasoftApiModelsExternalLoginViewModelIO = type({
	name: createOptionFromNullable(string, 'name'),
	url: createOptionFromNullable(string, 'url'),
	state: createOptionFromNullable(string, 'state'),
});
