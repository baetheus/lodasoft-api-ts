import { Option } from 'fp-ts/lib/Option';
import { string, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsSharedCreateAccountResponseModel = {
	userId: Option<string>;
	success: Option<boolean>;
	alreadyRegistered: Option<boolean>;
	errorMessage: Option<string>;
};
export const LELodasoftCommonModelsSharedCreateAccountResponseModelIO = type({
	userId: createOptionFromOptional(string, 'userId'),
	success: createOptionFromOptional(boolean, 'success'),
	alreadyRegistered: createOptionFromOptional(boolean, 'alreadyRegistered'),
	errorMessage: createOptionFromOptional(string, 'errorMessage'),
});
