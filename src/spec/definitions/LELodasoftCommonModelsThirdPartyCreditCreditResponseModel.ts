import { Option } from 'fp-ts/lib/Option';
import { boolean, string, array, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsThirdPartyCreditCreditResponseModel = {
	success: Option<boolean>;
	validationErrors: Option<Array<string>>;
	errorMessage: Option<string>;
};
export const LELodasoftCommonModelsThirdPartyCreditCreditResponseModelIO = type({
	success: createOptionFromOptional(boolean, 'success'),
	validationErrors: createOptionFromOptional(array(string), 'validationErrors'),
	errorMessage: createOptionFromOptional(string, 'errorMessage'),
});
