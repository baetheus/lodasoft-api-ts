import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsVerifyCodeModel = {
	code: Option<string>;
	email: Option<string>;
	password: Option<string>;
};
export const LELodasoftApiModelsVerifyCodeModelIO = type({
	code: createOptionFromOptional(string, 'code'),
	email: createOptionFromOptional(string, 'email'),
	password: createOptionFromOptional(string, 'password'),
});
