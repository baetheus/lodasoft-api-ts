import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsAdminTrackingUserViewModel = {
	id: Option<string>;
	userName: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
};
export const LELodasoftCommonModelsAdminTrackingUserViewModelIO = type({
	id: createOptionFromOptional(string, 'id'),
	userName: createOptionFromOptional(string, 'userName'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
});
