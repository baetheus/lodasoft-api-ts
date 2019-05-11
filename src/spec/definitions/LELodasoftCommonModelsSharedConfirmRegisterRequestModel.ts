import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsSharedConfirmRegisterRequestModel = {
	userName: Option<string>;
	token: Option<string>;
};
export const LELodasoftCommonModelsSharedConfirmRegisterRequestModelIO = type({
	userName: createOptionFromOptional(string, 'userName'),
	token: createOptionFromOptional(string, 'token'),
});
