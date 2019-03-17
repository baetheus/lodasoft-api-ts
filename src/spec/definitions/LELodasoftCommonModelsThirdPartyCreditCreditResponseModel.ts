import { Option } from 'fp-ts/lib/Option';
import { boolean, string, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsThirdPartyCreditCreditResponseModel = {
	success: Option<boolean>;
	validationErrors: Option<Array<string>>;
	errorMessage: Option<string>;
};
export const LELodasoftCommonModelsThirdPartyCreditCreditResponseModelIO = type({
	success: createOptionFromNullable(boolean),
	validationErrors: createOptionFromNullable(array(string)),
	errorMessage: createOptionFromNullable(string),
});
