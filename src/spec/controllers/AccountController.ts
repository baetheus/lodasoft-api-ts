import { TAPIClient } from '../client/client';
import {
	LELodasoftApiModelsAddExternalLoginBindingModel,
	LELodasoftApiModelsAddExternalLoginBindingModelIO,
} from '../definitions/LELodasoftApiModelsAddExternalLoginBindingModel';
import {
	LELodasoftApiModelsChangePasswordBindingModel,
	LELodasoftApiModelsChangePasswordBindingModelIO,
} from '../definitions/LELodasoftApiModelsChangePasswordBindingModel';
import {
	LELodasoftApiModelsExternalLoginViewModel,
	LELodasoftApiModelsExternalLoginViewModelIO,
} from '../definitions/LELodasoftApiModelsExternalLoginViewModel';
import {
	LELodasoftApiModelsForgotPasswordBindingModel,
	LELodasoftApiModelsForgotPasswordBindingModelIO,
} from '../definitions/LELodasoftApiModelsForgotPasswordBindingModel';
import {
	LELodasoftApiModelsLoginBindingModel,
	LELodasoftApiModelsLoginBindingModelIO,
} from '../definitions/LELodasoftApiModelsLoginBindingModel';
import {
	LELodasoftApiModelsManageInfoViewModel,
	LELodasoftApiModelsManageInfoViewModelIO,
} from '../definitions/LELodasoftApiModelsManageInfoViewModel';
import {
	LELodasoftApiModelsRegisterBindingModel,
	LELodasoftApiModelsRegisterBindingModelIO,
} from '../definitions/LELodasoftApiModelsRegisterBindingModel';
import {
	LELodasoftApiModelsRegisterExternalBindingModel,
	LELodasoftApiModelsRegisterExternalBindingModelIO,
} from '../definitions/LELodasoftApiModelsRegisterExternalBindingModel';
import {
	LELodasoftApiModelsRemoveLoginBindingModel,
	LELodasoftApiModelsRemoveLoginBindingModelIO,
} from '../definitions/LELodasoftApiModelsRemoveLoginBindingModel';
import {
	LELodasoftApiModelsResetPasswordBindingModel,
	LELodasoftApiModelsResetPasswordBindingModelIO,
} from '../definitions/LELodasoftApiModelsResetPasswordBindingModel';
import {
	LELodasoftApiModelsSetPasswordBindingModel,
	LELodasoftApiModelsSetPasswordBindingModelIO,
} from '../definitions/LELodasoftApiModelsSetPasswordBindingModel';
import { LELodasoftApiModelsUserData, LELodasoftApiModelsUserDataIO } from '../definitions/LELodasoftApiModelsUserData';
import {
	LELodasoftApiModelsUserInfoViewModel,
	LELodasoftApiModelsUserInfoViewModelIO,
} from '../definitions/LELodasoftApiModelsUserInfoViewModel';
import {
	LELodasoftApiModelsVerifyCodeModel,
	LELodasoftApiModelsVerifyCodeModelIO,
} from '../definitions/LELodasoftApiModelsVerifyCodeModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { boolean, type, partial, string, array } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';

export type AccountController = {
	readonly Account_GetUserInfo: () => Observable<LELodasoftApiModelsUserInfoViewModel>;

	readonly Account_GetUserData: () => Observable<LELodasoftApiModelsUserData>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_UpdateTwoFactor: (parameters: { query: { twoFactor: boolean } }) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_PostUpdatePhone: (parameters: {
		query: { phone: string; areacode: string };
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_ConfirmUpdatePhone: (parameters: {
		query: { phone: string; areacode: string; code: string };
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_ValidateAccount: (parameters: {
		body: LELodasoftApiModelsLoginBindingModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_SendCode: (parameters: { body: LELodasoftApiModelsLoginBindingModel }) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_VerifyCode: (parameters: { body: LELodasoftApiModelsVerifyCodeModel }) => Observable<unknown>;

	readonly Account_GetSendCodeExternal: () => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_GetVerifyCodeExternal: (parameters: { query: { code: string } }) => Observable<unknown>;

	readonly Account_GetLoginExternal: () => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_Login: (parameters: { body: LELodasoftApiModelsLoginBindingModel }) => Observable<unknown>;

	readonly Account_Logout: () => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_GetManageInfo: (parameters: {
		query: { returnUrl: string; generateState: Option<boolean> };
	}) => Observable<LELodasoftApiModelsManageInfoViewModel>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_ChangePassword: (parameters: {
		body: LELodasoftApiModelsChangePasswordBindingModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_SetPassword: (parameters: {
		body: LELodasoftApiModelsSetPasswordBindingModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_AddExternalLogin: (parameters: {
		body: LELodasoftApiModelsAddExternalLoginBindingModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_RemoveLogin: (parameters: {
		body: LELodasoftApiModelsRemoveLoginBindingModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_GetExternalLogin: (parameters: {
		query: { provider: string; error: Option<string> };
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_GetExternalLogins: (parameters: {
		query: { returnUrl: string; generateState: Option<boolean> };
	}) => Observable<Array<LELodasoftApiModelsExternalLoginViewModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_Register: (parameters: {
		query?: { token: Option<string> };
		body: LELodasoftApiModelsRegisterBindingModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_GetConfirmEmail: (parameters: { query: { userId: string; code: string } }) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_ForgotPassword: (parameters: {
		body: LELodasoftApiModelsForgotPasswordBindingModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_ResetPassword: (parameters: {
		body: LELodasoftApiModelsResetPasswordBindingModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_RegisterExternal: (parameters: {
		query?: { token: Option<string> };
		body: LELodasoftApiModelsRegisterExternalBindingModel;
	}) => Observable<unknown>;
};

export const accountController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): AccountController => ({
		Account_GetUserInfo: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/UserInfo`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftApiModelsUserInfoViewModelIO));
		},

		Account_GetUserData: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/UserData`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftApiModelsUserDataIO));
		},

		Account_UpdateTwoFactor: parameters => {
			const encoded = partial({ query: type({ twoFactor: boolean }) }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/UpdateTwoFactor`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_PostUpdatePhone: parameters => {
			const encoded = partial({ query: type({ phone: string, areacode: string }) }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/UpdatePhone`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_ConfirmUpdatePhone: parameters => {
			const encoded = partial({ query: type({ phone: string, areacode: string, code: string }) }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/ConfirmUpdatePhone`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_ValidateAccount: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsLoginBindingModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/ValidateAccount`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_SendCode: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsLoginBindingModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/SendCode`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_VerifyCode: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsVerifyCodeModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/VerifyCode`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_GetSendCodeExternal: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/SendCodeExternal`,
				method: 'GET',
			}).pipe(decodeAndMap(unknownType));
		},

		Account_GetVerifyCodeExternal: parameters => {
			const encoded = partial({ query: type({ code: string }) }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/VerifyCodeExternal`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_GetLoginExternal: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/LoginExternal`,
				method: 'GET',
			}).pipe(decodeAndMap(unknownType));
		},

		Account_Login: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsLoginBindingModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/Login`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_Logout: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/Logout`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		Account_GetManageInfo: parameters => {
			const encoded = partial({
				query: type({ returnUrl: string, generateState: createOptionFromNullable(boolean) }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/ManageInfo`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftApiModelsManageInfoViewModelIO));
		},

		Account_ChangePassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsChangePasswordBindingModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/ChangePassword`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_SetPassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsSetPasswordBindingModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/SetPassword`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_AddExternalLogin: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsAddExternalLoginBindingModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/AddExternalLogin`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_RemoveLogin: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsRemoveLoginBindingModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/RemoveLogin`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_GetExternalLogin: parameters => {
			const encoded = partial({
				query: type({ provider: string, error: createOptionFromNullable(string) }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/ExternalLogin`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_GetExternalLogins: parameters => {
			const encoded = partial({
				query: type({ returnUrl: string, generateState: createOptionFromNullable(boolean) }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/ExternalLogins`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftApiModelsExternalLoginViewModelIO)));
		},

		Account_Register: parameters => {
			const encoded = partial({
				query: type({ token: createOptionFromNullable(string) }),
				body: LELodasoftApiModelsRegisterBindingModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/Register`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_GetConfirmEmail: parameters => {
			const encoded = partial({ query: type({ userId: string, code: string }) }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/ConfirmEmail`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_ForgotPassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsForgotPasswordBindingModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/ForgotPassword`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_ResetPassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsResetPasswordBindingModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/ResetPassword`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Account_RegisterExternal: parameters => {
			const encoded = partial({
				query: type({ token: createOptionFromNullable(string) }),
				body: LELodasoftApiModelsRegisterExternalBindingModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Account/RegisterExternal`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},
	}),
);
