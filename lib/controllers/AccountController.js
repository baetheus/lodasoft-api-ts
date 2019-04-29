"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsAddExternalLoginBindingModel_1 = require("../definitions/LELodasoftApiModelsAddExternalLoginBindingModel");
var LELodasoftApiModelsChangePasswordBindingModel_1 = require("../definitions/LELodasoftApiModelsChangePasswordBindingModel");
var LELodasoftApiModelsExternalLoginViewModel_1 = require("../definitions/LELodasoftApiModelsExternalLoginViewModel");
var LELodasoftApiModelsForgotPasswordBindingModel_1 = require("../definitions/LELodasoftApiModelsForgotPasswordBindingModel");
var LELodasoftApiModelsLoginBindingModel_1 = require("../definitions/LELodasoftApiModelsLoginBindingModel");
var LELodasoftApiModelsManageInfoViewModel_1 = require("../definitions/LELodasoftApiModelsManageInfoViewModel");
var LELodasoftApiModelsRegisterBindingModel_1 = require("../definitions/LELodasoftApiModelsRegisterBindingModel");
var LELodasoftApiModelsRegisterExternalBindingModel_1 = require("../definitions/LELodasoftApiModelsRegisterExternalBindingModel");
var LELodasoftApiModelsRemoveLoginBindingModel_1 = require("../definitions/LELodasoftApiModelsRemoveLoginBindingModel");
var LELodasoftApiModelsResetPasswordBindingModel_1 = require("../definitions/LELodasoftApiModelsResetPasswordBindingModel");
var LELodasoftApiModelsSetPasswordBindingModel_1 = require("../definitions/LELodasoftApiModelsSetPasswordBindingModel");
var LELodasoftApiModelsUserData_1 = require("../definitions/LELodasoftApiModelsUserData");
var LELodasoftApiModelsUserInfoViewModel_1 = require("../definitions/LELodasoftApiModelsUserInfoViewModel");
var LELodasoftApiModelsVerifyCodeModel_1 = require("../definitions/LELodasoftApiModelsVerifyCodeModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.accountController = Reader_1.asks(function (e) { return ({
    Account_GetUserInfo: function () {
        return e.apiClient
            .request({
            url: "/api/Account/UserInfo",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsUserInfoViewModel_1.LELodasoftApiModelsUserInfoViewModelIO));
    },
    Account_GetUserData: function () {
        return e.apiClient
            .request({
            url: "/api/Account/UserData",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsUserData_1.LELodasoftApiModelsUserDataIO));
    },
    Account_UpdateTwoFactor: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ twoFactor: io_ts_1.boolean }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/UpdateTwoFactor",
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_PostUpdatePhone: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ phone: io_ts_1.string, areacode: io_ts_1.string }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/UpdatePhone",
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_ConfirmUpdatePhone: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ phone: io_ts_1.string, areacode: io_ts_1.string, code: io_ts_1.string }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/ConfirmUpdatePhone",
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_ValidateAccount: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsLoginBindingModel_1.LELodasoftApiModelsLoginBindingModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/ValidateAccount",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_SendCode: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsLoginBindingModel_1.LELodasoftApiModelsLoginBindingModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/SendCode",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_VerifyCode: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsVerifyCodeModel_1.LELodasoftApiModelsVerifyCodeModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/VerifyCode",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_GetSendCodeExternal: function () {
        return e.apiClient
            .request({
            url: "/api/Account/SendCodeExternal",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_GetVerifyCodeExternal: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ code: io_ts_1.string }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/VerifyCodeExternal",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_GetLoginExternal: function () {
        return e.apiClient
            .request({
            url: "/api/Account/LoginExternal",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_Login: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsLoginBindingModel_1.LELodasoftApiModelsLoginBindingModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/Login",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_Logout: function () {
        return e.apiClient
            .request({
            url: "/api/Account/Logout",
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_GetManageInfo: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ returnUrl: io_ts_1.string, generateState: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean) }),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/ManageInfo",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsManageInfoViewModel_1.LELodasoftApiModelsManageInfoViewModelIO));
    },
    Account_ChangePassword: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsChangePasswordBindingModel_1.LELodasoftApiModelsChangePasswordBindingModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/ChangePassword",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_SetPassword: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsSetPasswordBindingModel_1.LELodasoftApiModelsSetPasswordBindingModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/SetPassword",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_AddExternalLogin: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsAddExternalLoginBindingModel_1.LELodasoftApiModelsAddExternalLoginBindingModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/AddExternalLogin",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_RemoveLogin: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsRemoveLoginBindingModel_1.LELodasoftApiModelsRemoveLoginBindingModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/RemoveLogin",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_GetExternalLogin: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ provider: io_ts_1.string, error: io_ts_types_1.createOptionFromNullable(io_ts_1.string) }),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/ExternalLogin",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_GetExternalLogins: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ returnUrl: io_ts_1.string, generateState: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean) }),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/ExternalLogins",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsExternalLoginViewModel_1.LELodasoftApiModelsExternalLoginViewModelIO)));
    },
    Account_Register: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ token: io_ts_types_1.createOptionFromNullable(io_ts_1.string) }),
            body: LELodasoftApiModelsRegisterBindingModel_1.LELodasoftApiModelsRegisterBindingModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/Register",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_GetConfirmEmail: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ userId: io_ts_1.string, code: io_ts_1.string }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/ConfirmEmail",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_ForgotPassword: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsForgotPasswordBindingModel_1.LELodasoftApiModelsForgotPasswordBindingModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/ForgotPassword",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_ResetPassword: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsResetPasswordBindingModel_1.LELodasoftApiModelsResetPasswordBindingModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/ResetPassword",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Account_RegisterExternal: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ token: io_ts_types_1.createOptionFromNullable(io_ts_1.string) }),
            body: LELodasoftApiModelsRegisterExternalBindingModel_1.LELodasoftApiModelsRegisterExternalBindingModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Account/RegisterExternal",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=AccountController.js.map