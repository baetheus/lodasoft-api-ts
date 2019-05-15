import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsPublicApiUserViewModel = {
	userId: Option<string>;
	avatar: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
};
export const LELodasoftCommonModelsPublicApiUserViewModelIO = type({
	userId: createOptionFromOptional(string, 'userId'),
	avatar: createOptionFromOptional(string, 'avatar'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
});
