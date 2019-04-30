import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedConfirmRegisterRequestModel = {
	userName: Option<string>;
	token: Option<string>;
};
export const LELodasoftCommonModelsSharedConfirmRegisterRequestModelIO = type({
	userName: createOptionFromNullable(string, 'userName'),
	token: createOptionFromNullable(string, 'token'),
});
