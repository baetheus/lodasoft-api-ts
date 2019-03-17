import { ResponseValiationError, TAPIClient } from '../client/client';
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
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { boolean, type, partial, string, array } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type AccountController = {
	readonly Account_GetUserInfo: () => Observable<AsyncData<Error, LELodasoftApiModelsUserInfoViewModel>>;

	readonly Account_GetUserData: () => Observable<AsyncData<Error, LELodasoftApiModelsUserData>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_UpdateTwoFactor: (parameters: {
		query: { twoFactor: boolean };
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_PostUpdatePhone: (parameters: {
		query: { phone: string; areacode: string };
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_ConfirmUpdatePhone: (parameters: {
		query: { phone: string; areacode: string; code: string };
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_ValidateAccount: (parameters: {
		body: LELodasoftApiModelsLoginBindingModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_SendCode: (parameters: {
		body: LELodasoftApiModelsLoginBindingModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_VerifyCode: (parameters: {
		body: LELodasoftApiModelsVerifyCodeModel;
	}) => Observable<AsyncData<Error, unknown>>;

	readonly Account_GetSendCodeExternal: () => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_GetVerifyCodeExternal: (parameters: {
		query: { code: string };
	}) => Observable<AsyncData<Error, unknown>>;

	readonly Account_GetLoginExternal: () => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_Login: (parameters: {
		body: LELodasoftApiModelsLoginBindingModel;
	}) => Observable<AsyncData<Error, unknown>>;

	readonly Account_Logout: () => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_GetManageInfo: (parameters: {
		query: { returnUrl: string; generateState: Option<boolean> };
	}) => Observable<AsyncData<Error, LELodasoftApiModelsManageInfoViewModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_ChangePassword: (parameters: {
		body: LELodasoftApiModelsChangePasswordBindingModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_SetPassword: (parameters: {
		body: LELodasoftApiModelsSetPasswordBindingModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_AddExternalLogin: (parameters: {
		body: LELodasoftApiModelsAddExternalLoginBindingModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_RemoveLogin: (parameters: {
		body: LELodasoftApiModelsRemoveLoginBindingModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_GetExternalLogin: (parameters: {
		query: { provider: string; error: Option<string> };
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_GetExternalLogins: (parameters: {
		query: { returnUrl: string; generateState: Option<boolean> };
	}) => Observable<AsyncData<Error, Array<LELodasoftApiModelsExternalLoginViewModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_Register: (parameters: {
		query?: { token: Option<string> };
		body: LELodasoftApiModelsRegisterBindingModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_GetConfirmEmail: (parameters: {
		query: { userId: string; code: string };
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_ForgotPassword: (parameters: {
		body: LELodasoftApiModelsForgotPasswordBindingModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_ResetPassword: (parameters: {
		body: LELodasoftApiModelsResetPasswordBindingModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Account_RegisterExternal: (parameters: {
		query?: { token: Option<string> };
		body: LELodasoftApiModelsRegisterExternalBindingModel;
	}) => Observable<AsyncData<Error, unknown>>;
};

export const accountController = asks(
	(e: { apiClient: TAPIClient }): AccountController => ({
		Account_GetUserInfo: () => {
			return e.apiClient
				.request({
					url: `/api/Account/UserInfo`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsUserInfoViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Account_GetUserData: () => {
			return e.apiClient
				.request({
					url: `/api/Account/UserData`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsUserDataIO.decode(value).mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Account_UpdateTwoFactor: parameters => {
			const encoded = partial({ query: type({ twoFactor: boolean }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/UpdateTwoFactor`,
					method: 'POST',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_PostUpdatePhone: parameters => {
			const encoded = partial({ query: type({ phone: string, areacode: string }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/UpdatePhone`,
					method: 'POST',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_ConfirmUpdatePhone: parameters => {
			const encoded = partial({ query: type({ phone: string, areacode: string, code: string }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Account/ConfirmUpdatePhone`,
					method: 'POST',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_ValidateAccount: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsLoginBindingModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/ValidateAccount`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_SendCode: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsLoginBindingModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/SendCode`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_VerifyCode: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsVerifyCodeModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/VerifyCode`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_GetSendCodeExternal: () => {
			return e.apiClient
				.request({
					url: `/api/Account/SendCodeExternal`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_GetVerifyCodeExternal: parameters => {
			const encoded = partial({ query: type({ code: string }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/VerifyCodeExternal`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_GetLoginExternal: () => {
			return e.apiClient
				.request({
					url: `/api/Account/LoginExternal`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_Login: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsLoginBindingModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/Login`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_Logout: () => {
			return e.apiClient
				.request({
					url: `/api/Account/Logout`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_GetManageInfo: parameters => {
			const encoded = partial({
				query: type({ returnUrl: string, generateState: createOptionFromNullable(boolean) }),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/ManageInfo`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsManageInfoViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Account_ChangePassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsChangePasswordBindingModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/ChangePassword`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_SetPassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsSetPasswordBindingModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/SetPassword`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_AddExternalLogin: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsAddExternalLoginBindingModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/AddExternalLogin`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_RemoveLogin: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsRemoveLoginBindingModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/RemoveLogin`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_GetExternalLogin: parameters => {
			const encoded = partial({
				query: type({ provider: string, error: createOptionFromNullable(string) }),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/ExternalLogin`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_GetExternalLogins: parameters => {
			const encoded = partial({
				query: type({ returnUrl: string, generateState: createOptionFromNullable(boolean) }),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/ExternalLogins`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsExternalLoginViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Account_Register: parameters => {
			const encoded = partial({
				query: type({ token: createOptionFromNullable(string) }),
				body: LELodasoftApiModelsRegisterBindingModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/Register`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_GetConfirmEmail: parameters => {
			const encoded = partial({ query: type({ userId: string, code: string }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/ConfirmEmail`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_ForgotPassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsForgotPasswordBindingModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/ForgotPassword`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_ResetPassword: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsResetPasswordBindingModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/ResetPassword`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Account_RegisterExternal: parameters => {
			const encoded = partial({
				query: type({ token: createOptionFromNullable(string) }),
				body: LELodasoftApiModelsRegisterExternalBindingModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Account/RegisterExternal`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},
	}),
);
