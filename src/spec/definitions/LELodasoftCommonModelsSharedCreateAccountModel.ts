import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsSharedCreateAccountModel = {
	firstName: string;
	lastName: string;
	userName: string;
	password: string;
	confirmPassword: Option<string>;
};
export const LELodasoftCommonModelsSharedCreateAccountModelIO = type({
	firstName: string,
	lastName: string,
	userName: string,
	password: string,
	confirmPassword: createOptionFromOptional(string, 'confirmPassword'),
});
