import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsPublicApiUserViewModel = {
	userId: Option<string>;
	avatar: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
};
export const LELodasoftCommonModelsPublicApiUserViewModelIO = type({
	userId: createOptionFromNullable(string, 'userId'),
	avatar: createOptionFromNullable(string, 'avatar'),
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
});
