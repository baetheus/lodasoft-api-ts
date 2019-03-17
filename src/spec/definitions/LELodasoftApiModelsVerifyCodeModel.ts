import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsVerifyCodeModel = {
	code: Option<string>;
	email: Option<string>;
	password: Option<string>;
};
export const LELodasoftApiModelsVerifyCodeModelIO = type({
	code: createOptionFromNullable(string),
	email: createOptionFromNullable(string),
	password: createOptionFromNullable(string),
});
