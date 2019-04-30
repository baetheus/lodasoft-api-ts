import { Option } from 'fp-ts/lib/Option';
import { string, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedRegisterModel = {
	token: Option<string>;
	isConfirmed: Option<boolean>;
	userName: string;
	password: string;
	confirmPassword: Option<string>;
};
export const LELodasoftCommonModelsSharedRegisterModelIO = type({
	token: createOptionFromNullable(string, 'token'),
	isConfirmed: createOptionFromNullable(boolean, 'isConfirmed'),
	userName: string,
	password: string,
	confirmPassword: createOptionFromNullable(string, 'confirmPassword'),
});
