import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsAuthenticationTokenResponseModel = {
	access_token: Option<string>;
	token_type: Option<string>;
	expires_in: Option<number>;
	userName: Option<string>;
	issued: Option<string>;
	expires: Option<string>;
};
export const LELodasoftCommonModelsAuthenticationTokenResponseModelIO = type({
	access_token: createOptionFromNullable(string),
	token_type: createOptionFromNullable(string),
	expires_in: createOptionFromNullable(number),
	userName: createOptionFromNullable(string),
	issued: createOptionFromNullable(string),
	expires: createOptionFromNullable(string),
});
