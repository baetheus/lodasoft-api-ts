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
	access_token: createOptionFromNullable(string, 'access_token'),
	token_type: createOptionFromNullable(string, 'token_type'),
	expires_in: createOptionFromNullable(number, 'expires_in'),
	userName: createOptionFromNullable(string, 'userName'),
	issued: createOptionFromNullable(string, 'issued'),
	expires: createOptionFromNullable(string, 'expires'),
});
