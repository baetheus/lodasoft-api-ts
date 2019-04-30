import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsAdminTrackingUserViewModel = {
	id: Option<string>;
	userName: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
};
export const LELodasoftCommonModelsAdminTrackingUserViewModelIO = type({
	id: createOptionFromNullable(string, 'id'),
	userName: createOptionFromNullable(string, 'userName'),
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
});
