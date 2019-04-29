import { TAPIClient } from '../client/client';
import { LELodasoftApiModelsAddExternalLoginBindingModel } from '../definitions/LELodasoftApiModelsAddExternalLoginBindingModel';
import { LELodasoftApiModelsChangePasswordBindingModel } from '../definitions/LELodasoftApiModelsChangePasswordBindingModel';
import { LELodasoftApiModelsExternalLoginViewModel } from '../definitions/LELodasoftApiModelsExternalLoginViewModel';
import { LELodasoftApiModelsForgotPasswordBindingModel } from '../definitions/LELodasoftApiModelsForgotPasswordBindingModel';
import { LELodasoftApiModelsLoginBindingModel } from '../definitions/LELodasoftApiModelsLoginBindingModel';
import { LELodasoftApiModelsManageInfoViewModel } from '../definitions/LELodasoftApiModelsManageInfoViewModel';
import { LELodasoftApiModelsRegisterBindingModel } from '../definitions/LELodasoftApiModelsRegisterBindingModel';
import { LELodasoftApiModelsRegisterExternalBindingModel } from '../definitions/LELodasoftApiModelsRegisterExternalBindingModel';
import { LELodasoftApiModelsRemoveLoginBindingModel } from '../definitions/LELodasoftApiModelsRemoveLoginBindingModel';
import { LELodasoftApiModelsResetPasswordBindingModel } from '../definitions/LELodasoftApiModelsResetPasswordBindingModel';
import { LELodasoftApiModelsSetPasswordBindingModel } from '../definitions/LELodasoftApiModelsSetPasswordBindingModel';
import { LELodasoftApiModelsUserData } from '../definitions/LELodasoftApiModelsUserData';
import { LELodasoftApiModelsUserInfoViewModel } from '../definitions/LELodasoftApiModelsUserInfoViewModel';
import { LELodasoftApiModelsVerifyCodeModel } from '../definitions/LELodasoftApiModelsVerifyCodeModel';
import { Option } from 'fp-ts/lib/Option';
import { Observable } from 'rxjs';
export declare type AccountController = {
    readonly Account_GetUserInfo: () => Observable<LELodasoftApiModelsUserInfoViewModel>;
    readonly Account_GetUserData: () => Observable<LELodasoftApiModelsUserData>;
    /**
     * @param { object } parameters
     */
    readonly Account_UpdateTwoFactor: (parameters: {
        query: {
            twoFactor: boolean;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Account_PostUpdatePhone: (parameters: {
        query: {
            phone: string;
            areacode: string;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Account_ConfirmUpdatePhone: (parameters: {
        query: {
            phone: string;
            areacode: string;
            code: string;
        };
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
    readonly Account_SendCode: (parameters: {
        body: LELodasoftApiModelsLoginBindingModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Account_VerifyCode: (parameters: {
        body: LELodasoftApiModelsVerifyCodeModel;
    }) => Observable<unknown>;
    readonly Account_GetSendCodeExternal: () => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Account_GetVerifyCodeExternal: (parameters: {
        query: {
            code: string;
        };
    }) => Observable<unknown>;
    readonly Account_GetLoginExternal: () => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Account_Login: (parameters: {
        body: LELodasoftApiModelsLoginBindingModel;
    }) => Observable<unknown>;
    readonly Account_Logout: () => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Account_GetManageInfo: (parameters: {
        query: {
            returnUrl: string;
            generateState: Option<boolean>;
        };
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
        query: {
            provider: string;
            error: Option<string>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Account_GetExternalLogins: (parameters: {
        query: {
            returnUrl: string;
            generateState: Option<boolean>;
        };
    }) => Observable<Array<LELodasoftApiModelsExternalLoginViewModel>>;
    /**
     * @param { object } parameters
     */
    readonly Account_Register: (parameters: {
        query?: {
            token: Option<string>;
        };
        body: LELodasoftApiModelsRegisterBindingModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Account_GetConfirmEmail: (parameters: {
        query: {
            userId: string;
            code: string;
        };
    }) => Observable<unknown>;
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
        query?: {
            token: Option<string>;
        };
        body: LELodasoftApiModelsRegisterExternalBindingModel;
    }) => Observable<unknown>;
};
export declare const accountController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, AccountController>;
