import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsAuthenticationTokenResponseModel = {
	access_token: Option<string>;
	token_type: Option<string>;
	expires_in: Option<number>;
	userName: Option<string>;
	issued: Option<string>;
	expires: Option<string>;
};
export const LELodasoftCommonModelsAuthenticationTokenResponseModelIO = type({
	access_token: createOptionFromOptional(string, 'access_token'),
	token_type: createOptionFromOptional(string, 'token_type'),
	expires_in: createOptionFromOptional(number, 'expires_in'),
	userName: createOptionFromOptional(string, 'userName'),
	issued: createOptionFromOptional(string, 'issued'),
	expires: createOptionFromOptional(string, 'expires'),
});
