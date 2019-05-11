import { Option } from 'fp-ts/lib/Option';
import { string, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsSharedRegisterModel = {
	token: Option<string>;
	isConfirmed: Option<boolean>;
	userName: string;
	password: string;
	confirmPassword: Option<string>;
};
export const LELodasoftCommonModelsSharedRegisterModelIO = type({
	token: createOptionFromOptional(string, 'token'),
	isConfirmed: createOptionFromOptional(boolean, 'isConfirmed'),
	userName: string,
	password: string,
	confirmPassword: createOptionFromOptional(string, 'confirmPassword'),
});
