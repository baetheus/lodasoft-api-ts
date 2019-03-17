import { Option } from 'fp-ts/lib/Option';
import { string, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedCreateAccountResponseModel = {
	userId: Option<string>;
	success: Option<boolean>;
	alreadyRegistered: Option<boolean>;
	errorMessage: Option<string>;
};
export const LELodasoftCommonModelsSharedCreateAccountResponseModelIO = type({
	userId: createOptionFromNullable(string),
	success: createOptionFromNullable(boolean),
	alreadyRegistered: createOptionFromNullable(boolean),
	errorMessage: createOptionFromNullable(string),
});
