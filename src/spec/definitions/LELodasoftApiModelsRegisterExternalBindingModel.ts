import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsRegisterExternalBindingModel = {
	userName: string;
	password: string;
	confirmPassword: Option<string>;
	provider: string;
	externalAccessToken: string;
};
export const LELodasoftApiModelsRegisterExternalBindingModelIO = type({
	userName: string,
	password: string,
	confirmPassword: createOptionFromOptional(string, 'confirmPassword'),
	provider: string,
	externalAccessToken: string,
});
