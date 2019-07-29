import * as t from 'io-ts';

import * as m from './models';
import * as u from './utilities';

export type Account_GetUserInfoResponse = m.UserInfoViewModel;
export const Account_GetUserInfoResponse = m.UserInfoViewModel;

/* Account_GetUserInfo */
export const Account_GetUserInfoReader = u.requestlessControllerFactory<
  Account_GetUserInfoResponse
>(Account_GetUserInfoResponse, 'get', '/api/Account/UserInfo');

export type Account_GetUserDataResponse = m.UserData;
export const Account_GetUserDataResponse = m.UserData;

/* Account_GetUserData */
export const Account_GetUserDataReader = u.requestlessControllerFactory<
  Account_GetUserDataResponse
>(Account_GetUserDataResponse, 'get', '/api/Account/UserData');

export interface Account_UpdateTwoFactorRequest {
  query: {
    twoFactor: boolean;
  };
}
export type Account_UpdateTwoFactorResponse = Record<string, unknown>;
export const Account_UpdateTwoFactorResponse = t.UnknownRecord;

/* Account_UpdateTwoFactor */
export const Account_UpdateTwoFactorReader = u.controllerFactory<
  Account_UpdateTwoFactorRequest,
  Account_UpdateTwoFactorResponse
>(Account_UpdateTwoFactorResponse, 'post', '/api/Account/UpdateTwoFactor');

export interface Account_PostUpdatePhoneRequest {
  query: {
    phone: string;
    areacode: string;
  };
}
export type Account_PostUpdatePhoneResponse = Record<string, unknown>;
export const Account_PostUpdatePhoneResponse = t.UnknownRecord;

/* Account_PostUpdatePhone */
export const Account_PostUpdatePhoneReader = u.controllerFactory<
  Account_PostUpdatePhoneRequest,
  Account_PostUpdatePhoneResponse
>(Account_PostUpdatePhoneResponse, 'post', '/api/Account/UpdatePhone');

export interface Account_ConfirmUpdatePhoneRequest {
  query: {
    phone: string;
    areacode: string;
    code: string;
  };
}
export type Account_ConfirmUpdatePhoneResponse = Record<string, unknown>;
export const Account_ConfirmUpdatePhoneResponse = t.UnknownRecord;

/* Account_ConfirmUpdatePhone */
export const Account_ConfirmUpdatePhoneReader = u.controllerFactory<
  Account_ConfirmUpdatePhoneRequest,
  Account_ConfirmUpdatePhoneResponse
>(
  Account_ConfirmUpdatePhoneResponse,
  'post',
  '/api/Account/ConfirmUpdatePhone'
);

export interface Account_ValidateAccountRequest {
  body: m.LoginBindingModel;
}
export type Account_ValidateAccountResponse = Record<string, unknown>;
export const Account_ValidateAccountResponse = t.UnknownRecord;

/* Account_ValidateAccount */
export const Account_ValidateAccountReader = u.controllerFactory<
  Account_ValidateAccountRequest,
  Account_ValidateAccountResponse
>(Account_ValidateAccountResponse, 'post', '/api/Account/ValidateAccount');

export interface Account_SendCodeRequest {
  body: m.LoginBindingModel;
}
export type Account_SendCodeResponse = Record<string, unknown>;
export const Account_SendCodeResponse = t.UnknownRecord;

/* Account_SendCode */
export const Account_SendCodeReader = u.controllerFactory<
  Account_SendCodeRequest,
  Account_SendCodeResponse
>(Account_SendCodeResponse, 'post', '/api/Account/SendCode');

export interface Account_VerifyCodeRequest {
  body: m.VerifyCodeModel;
}
export type Account_VerifyCodeResponse = Record<string, unknown>;
export const Account_VerifyCodeResponse = t.UnknownRecord;

/* Account_VerifyCode */
export const Account_VerifyCodeReader = u.controllerFactory<
  Account_VerifyCodeRequest,
  Account_VerifyCodeResponse
>(Account_VerifyCodeResponse, 'post', '/api/Account/VerifyCode');

export type Account_GetSendCodeExternalResponse = Record<string, unknown>;
export const Account_GetSendCodeExternalResponse = t.UnknownRecord;

/* Account_GetSendCodeExternal */
export const Account_GetSendCodeExternalReader = u.requestlessControllerFactory<
  Account_GetSendCodeExternalResponse
>(Account_GetSendCodeExternalResponse, 'get', '/api/Account/SendCodeExternal');

export interface Account_GetVerifyCodeExternalRequest {
  query: {
    code: string;
  };
}
export type Account_GetVerifyCodeExternalResponse = Record<string, unknown>;
export const Account_GetVerifyCodeExternalResponse = t.UnknownRecord;

/* Account_GetVerifyCodeExternal */
export const Account_GetVerifyCodeExternalReader = u.controllerFactory<
  Account_GetVerifyCodeExternalRequest,
  Account_GetVerifyCodeExternalResponse
>(
  Account_GetVerifyCodeExternalResponse,
  'get',
  '/api/Account/VerifyCodeExternal'
);

export type Account_GetLoginExternalResponse = Record<string, unknown>;
export const Account_GetLoginExternalResponse = t.UnknownRecord;

/* Account_GetLoginExternal */
export const Account_GetLoginExternalReader = u.requestlessControllerFactory<
  Account_GetLoginExternalResponse
>(Account_GetLoginExternalResponse, 'get', '/api/Account/LoginExternal');

export interface Account_LoginRequest {
  body: m.LoginBindingModel;
}
export type Account_LoginResponse = Record<string, unknown>;
export const Account_LoginResponse = t.UnknownRecord;

/* Account_Login */
export const Account_LoginReader = u.controllerFactory<
  Account_LoginRequest,
  Account_LoginResponse
>(Account_LoginResponse, 'post', '/api/Account/Login');

export type Account_LogoutResponse = Record<string, unknown>;
export const Account_LogoutResponse = t.UnknownRecord;

/* Account_Logout */
export const Account_LogoutReader = u.requestlessControllerFactory<
  Account_LogoutResponse
>(Account_LogoutResponse, 'post', '/api/Account/Logout');

export interface Account_GetManageInfoRequest {
  query: {
    returnUrl: string;
    generateState?: boolean;
  };
}
export type Account_GetManageInfoResponse = m.ManageInfoViewModel;
export const Account_GetManageInfoResponse = m.ManageInfoViewModel;

/* Account_GetManageInfo */
export const Account_GetManageInfoReader = u.controllerFactory<
  Account_GetManageInfoRequest,
  Account_GetManageInfoResponse
>(Account_GetManageInfoResponse, 'get', '/api/Account/ManageInfo');

export interface Account_ChangePasswordRequest {
  body: m.ChangePasswordBindingModel;
}
export type Account_ChangePasswordResponse = Record<string, unknown>;
export const Account_ChangePasswordResponse = t.UnknownRecord;

/* Account_ChangePassword */
export const Account_ChangePasswordReader = u.controllerFactory<
  Account_ChangePasswordRequest,
  Account_ChangePasswordResponse
>(Account_ChangePasswordResponse, 'post', '/api/Account/ChangePassword');

export interface Account_SetPasswordRequest {
  body: m.SetPasswordBindingModel;
}
export type Account_SetPasswordResponse = Record<string, unknown>;
export const Account_SetPasswordResponse = t.UnknownRecord;

/* Account_SetPassword */
export const Account_SetPasswordReader = u.controllerFactory<
  Account_SetPasswordRequest,
  Account_SetPasswordResponse
>(Account_SetPasswordResponse, 'post', '/api/Account/SetPassword');

export interface Account_AddExternalLoginRequest {
  body: m.AddExternalLoginBindingModel;
}
export type Account_AddExternalLoginResponse = Record<string, unknown>;
export const Account_AddExternalLoginResponse = t.UnknownRecord;

/* Account_AddExternalLogin */
export const Account_AddExternalLoginReader = u.controllerFactory<
  Account_AddExternalLoginRequest,
  Account_AddExternalLoginResponse
>(Account_AddExternalLoginResponse, 'post', '/api/Account/AddExternalLogin');

export interface Account_RemoveLoginRequest {
  body: m.RemoveLoginBindingModel;
}
export type Account_RemoveLoginResponse = Record<string, unknown>;
export const Account_RemoveLoginResponse = t.UnknownRecord;

/* Account_RemoveLogin */
export const Account_RemoveLoginReader = u.controllerFactory<
  Account_RemoveLoginRequest,
  Account_RemoveLoginResponse
>(Account_RemoveLoginResponse, 'post', '/api/Account/RemoveLogin');

export interface Account_GetExternalLoginRequest {
  query: {
    provider: string;
    error?: string;
  };
}
export type Account_GetExternalLoginResponse = Record<string, unknown>;
export const Account_GetExternalLoginResponse = t.UnknownRecord;

/* Account_GetExternalLogin */
export const Account_GetExternalLoginReader = u.controllerFactory<
  Account_GetExternalLoginRequest,
  Account_GetExternalLoginResponse
>(Account_GetExternalLoginResponse, 'get', '/api/Account/ExternalLogin');

export interface Account_GetExternalLoginsRequest {
  query: {
    returnUrl: string;
    generateState?: boolean;
  };
}
export type Account_GetExternalLoginsResponse = Array<m.ExternalLoginViewModel>;
export const Account_GetExternalLoginsResponse = t.array(
  m.ExternalLoginViewModel
);

/* Account_GetExternalLogins */
export const Account_GetExternalLoginsReader = u.controllerFactory<
  Account_GetExternalLoginsRequest,
  Account_GetExternalLoginsResponse
>(Account_GetExternalLoginsResponse, 'get', '/api/Account/ExternalLogins');

export interface Account_RegisterRequest {
  query: {
    token?: string;
  };
  body: m.RegisterBindingModel;
}
export type Account_RegisterResponse = Record<string, unknown>;
export const Account_RegisterResponse = t.UnknownRecord;

/* Account_Register */
export const Account_RegisterReader = u.controllerFactory<
  Account_RegisterRequest,
  Account_RegisterResponse
>(Account_RegisterResponse, 'post', '/api/Account/Register');

export interface Account_GetConfirmEmailRequest {
  query: {
    userId: string;
    code: string;
  };
}
export type Account_GetConfirmEmailResponse = Record<string, unknown>;
export const Account_GetConfirmEmailResponse = t.UnknownRecord;

/* Account_GetConfirmEmail */
export const Account_GetConfirmEmailReader = u.controllerFactory<
  Account_GetConfirmEmailRequest,
  Account_GetConfirmEmailResponse
>(Account_GetConfirmEmailResponse, 'get', '/api/Account/ConfirmEmail');

export interface Account_ForgotPasswordRequest {
  body: m.ForgotPasswordBindingModel;
}
export type Account_ForgotPasswordResponse = Record<string, unknown>;
export const Account_ForgotPasswordResponse = t.UnknownRecord;

/* Account_ForgotPassword */
export const Account_ForgotPasswordReader = u.controllerFactory<
  Account_ForgotPasswordRequest,
  Account_ForgotPasswordResponse
>(Account_ForgotPasswordResponse, 'post', '/api/Account/ForgotPassword');

export interface Account_ResetPasswordRequest {
  body: m.ResetPasswordBindingModel;
}
export type Account_ResetPasswordResponse = Record<string, unknown>;
export const Account_ResetPasswordResponse = t.UnknownRecord;

/* Account_ResetPassword */
export const Account_ResetPasswordReader = u.controllerFactory<
  Account_ResetPasswordRequest,
  Account_ResetPasswordResponse
>(Account_ResetPasswordResponse, 'post', '/api/Account/ResetPassword');

export interface Account_RegisterExternalRequest {
  query: {
    token?: string;
  };
  body: m.RegisterExternalBindingModel;
}
export type Account_RegisterExternalResponse = Record<string, unknown>;
export const Account_RegisterExternalResponse = t.UnknownRecord;

/* Account_RegisterExternal */
export const Account_RegisterExternalReader = u.controllerFactory<
  Account_RegisterExternalRequest,
  Account_RegisterExternalResponse
>(Account_RegisterExternalResponse, 'post', '/api/Account/RegisterExternal');

export interface Admin_GetSystemLevelRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetSystemLevelResponse = m.SystemLevel;
export const Admin_GetSystemLevelResponse = m.SystemLevel;

/* Admin_GetSystemLevel */
export const Admin_GetSystemLevelReader = u.controllerFactory<
  Admin_GetSystemLevelRequest,
  Admin_GetSystemLevelResponse
>(Admin_GetSystemLevelResponse, 'get', '/api/Admin/GetSystemLevel');

export interface Admin_GetExportFileNamingRequest {
  path: {
    companyId: number;
  };
}
export type Admin_GetExportFileNamingResponse = m.ConfigurationModel;
export const Admin_GetExportFileNamingResponse = m.ConfigurationModel;

/* Admin_GetExportFileNaming */
export const Admin_GetExportFileNamingReader = u.controllerFactory<
  Admin_GetExportFileNamingRequest,
  Admin_GetExportFileNamingResponse
>(
  Admin_GetExportFileNamingResponse,
  'get',
  '/api/Admin/GetExportFileNaming/{companyId}'
);

export interface Admin_AllChecklistQuestionsRequest {
  path: {
    checklistId: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_AllChecklistQuestionsResponse = Record<string, unknown>;
export const Admin_AllChecklistQuestionsResponse = t.UnknownRecord;

/* Admin_AllChecklistQuestions */
export const Admin_AllChecklistQuestionsReader = u.controllerFactory<
  Admin_AllChecklistQuestionsRequest,
  Admin_AllChecklistQuestionsResponse
>(
  Admin_AllChecklistQuestionsResponse,
  'get',
  '/api/Admin/checklists/{checklistId}/questions'
);

export interface Admin_UpdateChecklistQuestionsRequest {
  path: {
    checklistId: number;
  };
  query: {
    companyId?: number;
  };
  body: Array<m.ChecklistQuestionModel>;
}
export type Admin_UpdateChecklistQuestionsResponse = Record<string, unknown>;
export const Admin_UpdateChecklistQuestionsResponse = t.UnknownRecord;

/* Admin_UpdateChecklistQuestions */
export const Admin_UpdateChecklistQuestionsReader = u.controllerFactory<
  Admin_UpdateChecklistQuestionsRequest,
  Admin_UpdateChecklistQuestionsResponse
>(
  Admin_UpdateChecklistQuestionsResponse,
  'post',
  '/api/Admin/checklists/{checklistId}/questions'
);

export interface Admin_GetAllByCompanyIdRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllByCompanyIdResponse = Array<m.ProductModel>;
export const Admin_GetAllByCompanyIdResponse = t.array(m.ProductModel);

/* Admin_GetAllByCompanyId */
export const Admin_GetAllByCompanyIdReader = u.controllerFactory<
  Admin_GetAllByCompanyIdRequest,
  Admin_GetAllByCompanyIdResponse
>(
  Admin_GetAllByCompanyIdResponse,
  'get',
  '/api/Admin/GetAllProductByCompanyId'
);

export interface Admin_GetProductByIdRequest {
  path: {
    productId: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_GetProductByIdResponse = m.ProductModel;
export const Admin_GetProductByIdResponse = m.ProductModel;

/* Admin_GetProductById */
export const Admin_GetProductByIdReader = u.controllerFactory<
  Admin_GetProductByIdRequest,
  Admin_GetProductByIdResponse
>(Admin_GetProductByIdResponse, 'get', '/api/Admin/GetProductById/{productId}');

export interface Admin_UpdateProductRequest {
  query: {
    companyId?: number;
  };
  body: m.ProductModel;
}
export type Admin_UpdateProductResponse = Record<string, unknown>;
export const Admin_UpdateProductResponse = t.UnknownRecord;

/* Admin_UpdateProduct */
export const Admin_UpdateProductReader = u.controllerFactory<
  Admin_UpdateProductRequest,
  Admin_UpdateProductResponse
>(Admin_UpdateProductResponse, 'post', '/api/Admin/UpdateProduct');

export interface Admin_InsertProductRequest {
  query: {
    companyId?: number;
  };
  body: m.ProductModel;
}
export type Admin_InsertProductResponse = Record<string, unknown>;
export const Admin_InsertProductResponse = t.UnknownRecord;

/* Admin_InsertProduct */
export const Admin_InsertProductReader = u.controllerFactory<
  Admin_InsertProductRequest,
  Admin_InsertProductResponse
>(Admin_InsertProductResponse, 'post', '/api/Admin/InsertProduct');

export interface Admin_DeleteProductRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteProductResponse = Record<string, unknown>;
export const Admin_DeleteProductResponse = t.UnknownRecord;

/* Admin_DeleteProduct */
export const Admin_DeleteProductReader = u.controllerFactory<
  Admin_DeleteProductRequest,
  Admin_DeleteProductResponse
>(Admin_DeleteProductResponse, 'delete', '/api/Admin/DeleteProduct/{id}');

export interface Admin_GetAllQuestionRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllQuestionResponse = Array<m.QuestionModel>;
export const Admin_GetAllQuestionResponse = t.array(m.QuestionModel);

/* Admin_GetAllQuestion */
export const Admin_GetAllQuestionReader = u.controllerFactory<
  Admin_GetAllQuestionRequest,
  Admin_GetAllQuestionResponse
>(Admin_GetAllQuestionResponse, 'get', '/api/Admin/AllQuestion');

export interface Admin_UpdateQuestionRequest {
  query: {
    companyId?: number;
  };
  body: m.QuestionModel;
}
export type Admin_UpdateQuestionResponse = Record<string, unknown>;
export const Admin_UpdateQuestionResponse = t.UnknownRecord;

/* Admin_UpdateQuestion */
export const Admin_UpdateQuestionReader = u.controllerFactory<
  Admin_UpdateQuestionRequest,
  Admin_UpdateQuestionResponse
>(Admin_UpdateQuestionResponse, 'post', '/api/Admin/UpdateQuestion');

export interface Admin_InsertQuestionRequest {
  query: {
    companyId?: number;
  };
  body: m.QuestionModel;
}
export type Admin_InsertQuestionResponse = Record<string, unknown>;
export const Admin_InsertQuestionResponse = t.UnknownRecord;

/* Admin_InsertQuestion */
export const Admin_InsertQuestionReader = u.controllerFactory<
  Admin_InsertQuestionRequest,
  Admin_InsertQuestionResponse
>(Admin_InsertQuestionResponse, 'post', '/api/Admin/InsertQuestion');

export interface Admin_DeleteQuestionRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteQuestionResponse = Record<string, unknown>;
export const Admin_DeleteQuestionResponse = t.UnknownRecord;

/* Admin_DeleteQuestion */
export const Admin_DeleteQuestionReader = u.controllerFactory<
  Admin_DeleteQuestionRequest,
  Admin_DeleteQuestionResponse
>(Admin_DeleteQuestionResponse, 'delete', '/api/Admin/DeleteQuestion/{id}');

export interface Admin_QuestionAnswerGroupByQuestionRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_QuestionAnswerGroupByQuestionResponse = Record<
  string,
  unknown
>;
export const Admin_QuestionAnswerGroupByQuestionResponse = t.UnknownRecord;

/* Admin_QuestionAnswerGroupByQuestion */
export const Admin_QuestionAnswerGroupByQuestionReader = u.controllerFactory<
  Admin_QuestionAnswerGroupByQuestionRequest,
  Admin_QuestionAnswerGroupByQuestionResponse
>(
  Admin_QuestionAnswerGroupByQuestionResponse,
  'get',
  '/api/Admin/QuestionAnswerGroupByQuestion'
);

export interface Admin_GetAllQuestionAnswerRequest {
  path: {
    questionId: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllQuestionAnswerResponse = Array<m.QuestionTaskAnswerDto>;
export const Admin_GetAllQuestionAnswerResponse = t.array(
  m.QuestionTaskAnswerDto
);

/* Admin_GetAllQuestionAnswer */
export const Admin_GetAllQuestionAnswerReader = u.controllerFactory<
  Admin_GetAllQuestionAnswerRequest,
  Admin_GetAllQuestionAnswerResponse
>(
  Admin_GetAllQuestionAnswerResponse,
  'get',
  '/api/Admin/AllQuestionAnswer/{questionId}'
);

export interface Admin_UpdateQuestionAnswerRequest {
  query: {
    companyId?: number;
  };
  body: m.QuestionTaskAnswerDto;
}
export type Admin_UpdateQuestionAnswerResponse = Record<string, unknown>;
export const Admin_UpdateQuestionAnswerResponse = t.UnknownRecord;

/* Admin_UpdateQuestionAnswer */
export const Admin_UpdateQuestionAnswerReader = u.controllerFactory<
  Admin_UpdateQuestionAnswerRequest,
  Admin_UpdateQuestionAnswerResponse
>(
  Admin_UpdateQuestionAnswerResponse,
  'post',
  '/api/Admin/UpdateQuestionAnswer'
);

export interface Admin_InsertQuestionAnswerRequest {
  query: {
    companyId?: number;
  };
  body: m.QuestionTaskAnswerDto;
}
export type Admin_InsertQuestionAnswerResponse = Record<string, unknown>;
export const Admin_InsertQuestionAnswerResponse = t.UnknownRecord;

/* Admin_InsertQuestionAnswer */
export const Admin_InsertQuestionAnswerReader = u.controllerFactory<
  Admin_InsertQuestionAnswerRequest,
  Admin_InsertQuestionAnswerResponse
>(
  Admin_InsertQuestionAnswerResponse,
  'post',
  '/api/Admin/InsertQuestionAnswer'
);

export interface Admin_DeleteQuestionAnswerRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteQuestionAnswerResponse = Record<string, unknown>;
export const Admin_DeleteQuestionAnswerResponse = t.UnknownRecord;

/* Admin_DeleteQuestionAnswer */
export const Admin_DeleteQuestionAnswerReader = u.controllerFactory<
  Admin_DeleteQuestionAnswerRequest,
  Admin_DeleteQuestionAnswerResponse
>(
  Admin_DeleteQuestionAnswerResponse,
  'delete',
  '/api/Admin/DeleteQuestionAnswer/{id}'
);

export interface Admin_GetAllQATaskModelRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllQATaskModelResponse = Array<m.QATaskModel>;
export const Admin_GetAllQATaskModelResponse = t.array(m.QATaskModel);

/* Admin_GetAllQATaskModel */
export const Admin_GetAllQATaskModelReader = u.controllerFactory<
  Admin_GetAllQATaskModelRequest,
  Admin_GetAllQATaskModelResponse
>(Admin_GetAllQATaskModelResponse, 'get', '/api/Admin/AllQATaskModel');

export interface Admin_UpdateQATaskModelRequest {
  query: {
    companyId?: number;
  };
  body: m.QATaskModel;
}
export type Admin_UpdateQATaskModelResponse = Record<string, unknown>;
export const Admin_UpdateQATaskModelResponse = t.UnknownRecord;

/* Admin_UpdateQATaskModel */
export const Admin_UpdateQATaskModelReader = u.controllerFactory<
  Admin_UpdateQATaskModelRequest,
  Admin_UpdateQATaskModelResponse
>(Admin_UpdateQATaskModelResponse, 'post', '/api/Admin/UpdateQATaskModel');

export interface Admin_InsertQATaskModelRequest {
  query: {
    companyId?: number;
  };
  body: m.QATaskModel;
}
export type Admin_InsertQATaskModelResponse = m.QATaskModel;
export const Admin_InsertQATaskModelResponse = m.QATaskModel;

/* Admin_InsertQATaskModel */
export const Admin_InsertQATaskModelReader = u.controllerFactory<
  Admin_InsertQATaskModelRequest,
  Admin_InsertQATaskModelResponse
>(Admin_InsertQATaskModelResponse, 'post', '/api/Admin/InsertQATaskModel');

export interface Admin_DeleteQATaskModelRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteQATaskModelResponse = Record<string, unknown>;
export const Admin_DeleteQATaskModelResponse = t.UnknownRecord;

/* Admin_DeleteQATaskModel */
export const Admin_DeleteQATaskModelReader = u.controllerFactory<
  Admin_DeleteQATaskModelRequest,
  Admin_DeleteQATaskModelResponse
>(
  Admin_DeleteQATaskModelResponse,
  'delete',
  '/api/Admin/DeleteQATaskModel/{id}'
);

export interface Admin_GetAllCheckListItemRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllCheckListItemResponse = Array<m.ChecklistModel>;
export const Admin_GetAllCheckListItemResponse = t.array(m.ChecklistModel);

/* Admin_GetAllCheckListItem */
export const Admin_GetAllCheckListItemReader = u.controllerFactory<
  Admin_GetAllCheckListItemRequest,
  Admin_GetAllCheckListItemResponse
>(Admin_GetAllCheckListItemResponse, 'get', '/api/Admin/AllCheckListItem');

export interface Admin_UpdateCheckListItemRequest {
  query: {
    companyId?: number;
  };
  body: m.ChecklistModel;
}
export type Admin_UpdateCheckListItemResponse = Record<string, unknown>;
export const Admin_UpdateCheckListItemResponse = t.UnknownRecord;

/* Admin_UpdateCheckListItem */
export const Admin_UpdateCheckListItemReader = u.controllerFactory<
  Admin_UpdateCheckListItemRequest,
  Admin_UpdateCheckListItemResponse
>(Admin_UpdateCheckListItemResponse, 'post', '/api/Admin/UpdateCheckListItem');

export interface Admin_InsertCheckListItemRequest {
  query: {
    companyId?: number;
  };
  body: m.ChecklistModel;
}
export type Admin_InsertCheckListItemResponse = m.ChecklistModel;
export const Admin_InsertCheckListItemResponse = m.ChecklistModel;

/* Admin_InsertCheckListItem */
export const Admin_InsertCheckListItemReader = u.controllerFactory<
  Admin_InsertCheckListItemRequest,
  Admin_InsertCheckListItemResponse
>(Admin_InsertCheckListItemResponse, 'post', '/api/Admin/InsertCheckListItem');

export interface Admin_DeleteCheckListItemRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteCheckListItemResponse = Record<string, unknown>;
export const Admin_DeleteCheckListItemResponse = t.UnknownRecord;

/* Admin_DeleteCheckListItem */
export const Admin_DeleteCheckListItemReader = u.controllerFactory<
  Admin_DeleteCheckListItemRequest,
  Admin_DeleteCheckListItemResponse
>(
  Admin_DeleteCheckListItemResponse,
  'delete',
  '/api/Admin/DeleteCheckListItem/{id}'
);

export interface Admin_GetSetupReferenceByTemplateCompany_CompanyIdRequest {
  path: {
    TemplateCompanyId: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_GetSetupReferenceByTemplateCompany_CompanyIdResponse = Array<
  m.SetupReferenceModel
>;
export const Admin_GetSetupReferenceByTemplateCompany_CompanyIdResponse = t.array(
  m.SetupReferenceModel
);

/* Admin_GetSetupReferenceByTemplateCompany_CompanyId */
export const Admin_GetSetupReferenceByTemplateCompany_CompanyIdReader = u.controllerFactory<
  Admin_GetSetupReferenceByTemplateCompany_CompanyIdRequest,
  Admin_GetSetupReferenceByTemplateCompany_CompanyIdResponse
>(
  Admin_GetSetupReferenceByTemplateCompany_CompanyIdResponse,
  'get',
  '/api/Admin/GetSetupReferenceByTemplateCompany_CompanyId/{TemplateCompanyId}'
);

export interface Admin_UpsertSetupReferenceRequest {
  query: {
    companyId?: number;
  };
  body: m.SetupReferenceModel;
}
export type Admin_UpsertSetupReferenceResponse = m.SetupReferenceModel;
export const Admin_UpsertSetupReferenceResponse = m.SetupReferenceModel;

/* Admin_UpsertSetupReference */
export const Admin_UpsertSetupReferenceReader = u.controllerFactory<
  Admin_UpsertSetupReferenceRequest,
  Admin_UpsertSetupReferenceResponse
>(
  Admin_UpsertSetupReferenceResponse,
  'post',
  '/api/Admin/UpsertSetupReference'
);

export interface Admin_GetPageResourceRequest {
  path: {
    page: string;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_GetPageResourceResponse = Record<string, unknown>;
export const Admin_GetPageResourceResponse = t.UnknownRecord;

/* Admin_GetPageResource */
export const Admin_GetPageResourceReader = u.controllerFactory<
  Admin_GetPageResourceRequest,
  Admin_GetPageResourceResponse
>(Admin_GetPageResourceResponse, 'get', '/api/Admin/PageResource/{page}');

export interface Admin_GetProfileRequest {
  path: {
    userId: string;
  };
}
export type Admin_GetProfileResponse = m.ProfileModel;
export const Admin_GetProfileResponse = m.ProfileModel;

/* Admin_GetProfile */
export const Admin_GetProfileReader = u.controllerFactory<
  Admin_GetProfileRequest,
  Admin_GetProfileResponse
>(Admin_GetProfileResponse, 'get', '/api/Admin/Profile/{userId}');

export interface Admin_PostSaveProfileRequest {
  body: m.ProfileModel;
}
export type Admin_PostSaveProfileResponse = Record<string, unknown>;
export const Admin_PostSaveProfileResponse = t.UnknownRecord;

/* Admin_PostSaveProfile */
export const Admin_PostSaveProfileReader = u.controllerFactory<
  Admin_PostSaveProfileRequest,
  Admin_PostSaveProfileResponse
>(Admin_PostSaveProfileResponse, 'post', '/api/Admin/SaveProfile');

export interface Admin_WizardEverythingElseRequest {
  body: m.WizardEverythingElseRequestModel;
}
export type Admin_WizardEverythingElseResponse = Record<string, unknown>;
export const Admin_WizardEverythingElseResponse = t.UnknownRecord;

/* Admin_WizardEverythingElse */
export const Admin_WizardEverythingElseReader = u.controllerFactory<
  Admin_WizardEverythingElseRequest,
  Admin_WizardEverythingElseResponse
>(
  Admin_WizardEverythingElseResponse,
  'post',
  '/api/Admin/WizardEverythingElse'
);

export interface Admin_GetCurrentReleaseNotesRequest {
  query: {
    releaseNotesVersion: string;
  };
}
export type Admin_GetCurrentReleaseNotesResponse = m.ReleaseNotesViewModel;
export const Admin_GetCurrentReleaseNotesResponse = m.ReleaseNotesViewModel;

/* Admin_GetCurrentReleaseNotes */
export const Admin_GetCurrentReleaseNotesReader = u.controllerFactory<
  Admin_GetCurrentReleaseNotesRequest,
  Admin_GetCurrentReleaseNotesResponse
>(
  Admin_GetCurrentReleaseNotesResponse,
  'get',
  '/api/Admin/CurrentReleaseNotes'
);

export interface Admin_ViewedReleaseNotesRequest {
  query: {
    releaseNotesVersion: string;
  };
}
export type Admin_ViewedReleaseNotesResponse = Record<string, unknown>;
export const Admin_ViewedReleaseNotesResponse = t.UnknownRecord;

/* Admin_ViewedReleaseNotes */
export const Admin_ViewedReleaseNotesReader = u.controllerFactory<
  Admin_ViewedReleaseNotesRequest,
  Admin_ViewedReleaseNotesResponse
>(Admin_ViewedReleaseNotesResponse, 'post', '/api/Admin/ViewedReleaseNotes');

export type Admin_GetReleaseNotesResponse = Array<m.ReleaseNotesViewModel>;
export const Admin_GetReleaseNotesResponse = t.array(m.ReleaseNotesViewModel);

/* Admin_GetReleaseNotes */
export const Admin_GetReleaseNotesReader = u.requestlessControllerFactory<
  Admin_GetReleaseNotesResponse
>(Admin_GetReleaseNotesResponse, 'get', '/api/Admin/AllReleaseNotes');

export interface Admin_InsertReleaseNotesRequest {
  body: m.ReleaseNotesViewModel;
}
export type Admin_InsertReleaseNotesResponse = m.ReleaseNotesViewModel;
export const Admin_InsertReleaseNotesResponse = m.ReleaseNotesViewModel;

/* Admin_InsertReleaseNotes */
export const Admin_InsertReleaseNotesReader = u.controllerFactory<
  Admin_InsertReleaseNotesRequest,
  Admin_InsertReleaseNotesResponse
>(Admin_InsertReleaseNotesResponse, 'post', '/api/Admin/ReleaseNotes');

export interface Admin_UpdateReleaseNotesRequest {
  path: {
    id: number;
  };
  body: m.ReleaseNotesViewModel;
}
export type Admin_UpdateReleaseNotesResponse = m.ReleaseNotesViewModel;
export const Admin_UpdateReleaseNotesResponse = m.ReleaseNotesViewModel;

/* Admin_UpdateReleaseNotes */
export const Admin_UpdateReleaseNotesReader = u.controllerFactory<
  Admin_UpdateReleaseNotesRequest,
  Admin_UpdateReleaseNotesResponse
>(Admin_UpdateReleaseNotesResponse, 'post', '/api/Admin/ReleaseNotes/{id}');

export interface Admin_DeleteReleaseNotesRequest {
  path: {
    id: number;
  };
}
export type Admin_DeleteReleaseNotesResponse = Record<string, unknown>;
export const Admin_DeleteReleaseNotesResponse = t.UnknownRecord;

/* Admin_DeleteReleaseNotes */
export const Admin_DeleteReleaseNotesReader = u.controllerFactory<
  Admin_DeleteReleaseNotesRequest,
  Admin_DeleteReleaseNotesResponse
>(Admin_DeleteReleaseNotesResponse, 'delete', '/api/Admin/ReleaseNotes/{id}');

export interface Admin_GetPermissionMenuRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetPermissionMenuResponse = m.PermissionMenu;
export const Admin_GetPermissionMenuResponse = m.PermissionMenu;

/* Admin_GetPermissionMenu */
export const Admin_GetPermissionMenuReader = u.controllerFactory<
  Admin_GetPermissionMenuRequest,
  Admin_GetPermissionMenuResponse
>(Admin_GetPermissionMenuResponse, 'get', '/api/Admin/PermissionMenu');

export type Admin_GetAllTableResponse = Record<string, Record<string, string>>;
export const Admin_GetAllTableResponse = t.record(
  t.string,
  t.record(t.string, t.string)
);

/* Admin_GetAllTable */
export const Admin_GetAllTableReader = u.requestlessControllerFactory<
  Admin_GetAllTableResponse
>(Admin_GetAllTableResponse, 'get', '/api/Admin/AllTable');

export interface Admin_GetAllUserModelRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllUserModelResponse = Array<m.UserProfile>;
export const Admin_GetAllUserModelResponse = t.array(m.UserProfile);

/* Admin_GetAllUserModel */
export const Admin_GetAllUserModelReader = u.controllerFactory<
  Admin_GetAllUserModelRequest,
  Admin_GetAllUserModelResponse
>(Admin_GetAllUserModelResponse, 'get', '/api/Admin/AllUserModel');

export interface Admin_UpdateUserModelRequest {
  query: {
    companyId?: number;
  };
  body: m.UserProfile;
}
export type Admin_UpdateUserModelResponse = Record<string, unknown>;
export const Admin_UpdateUserModelResponse = t.UnknownRecord;

/* Admin_UpdateUserModel */
export const Admin_UpdateUserModelReader = u.controllerFactory<
  Admin_UpdateUserModelRequest,
  Admin_UpdateUserModelResponse
>(Admin_UpdateUserModelResponse, 'post', '/api/Admin/UpdateUserModel');

export interface Admin_InsertUserModelRequest {
  query: {
    companyId?: number;
  };
  body: m.UserProfile;
}
export type Admin_InsertUserModelResponse = m.UserProfile;
export const Admin_InsertUserModelResponse = m.UserProfile;

/* Admin_InsertUserModel */
export const Admin_InsertUserModelReader = u.controllerFactory<
  Admin_InsertUserModelRequest,
  Admin_InsertUserModelResponse
>(Admin_InsertUserModelResponse, 'post', '/api/Admin/InsertUserModel');

export interface Admin_DeleteUserModelRequest {
  path: {
    id: string;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteUserModelResponse = string;
export const Admin_DeleteUserModelResponse = t.string;

/* Admin_DeleteUserModel */
export const Admin_DeleteUserModelReader = u.controllerFactory<
  Admin_DeleteUserModelRequest,
  Admin_DeleteUserModelResponse
>(Admin_DeleteUserModelResponse, 'delete', '/api/Admin/DeleteUserModel/{id}');

export type Admin_GetAllCompanyModelResponse = Array<m.CompanyModel>;
export const Admin_GetAllCompanyModelResponse = t.array(m.CompanyModel);

/* Admin_GetAllCompanyModel */
export const Admin_GetAllCompanyModelReader = u.requestlessControllerFactory<
  Admin_GetAllCompanyModelResponse
>(Admin_GetAllCompanyModelResponse, 'get', '/api/Admin/AllCompanyModel');

export interface Admin_UpdateCompanyModelRequest {
  query: {
    companyId?: number;
  };
  body: m.CompanyModel;
}
export type Admin_UpdateCompanyModelResponse = Record<string, unknown>;
export const Admin_UpdateCompanyModelResponse = t.UnknownRecord;

/* Admin_UpdateCompanyModel */
export const Admin_UpdateCompanyModelReader = u.controllerFactory<
  Admin_UpdateCompanyModelRequest,
  Admin_UpdateCompanyModelResponse
>(Admin_UpdateCompanyModelResponse, 'post', '/api/Admin/UpdateCompanyModel');

export interface Admin_InsertCompanyModelRequest {
  body: m.CompanyModel;
}
export type Admin_InsertCompanyModelResponse = m.CompanyModel;
export const Admin_InsertCompanyModelResponse = m.CompanyModel;

/* Admin_InsertCompanyModel */
export const Admin_InsertCompanyModelReader = u.controllerFactory<
  Admin_InsertCompanyModelRequest,
  Admin_InsertCompanyModelResponse
>(Admin_InsertCompanyModelResponse, 'post', '/api/Admin/InsertCompanyModel');

export interface Admin_DeleteCompanyModelRequest {
  path: {
    id: number;
  };
}
export type Admin_DeleteCompanyModelResponse = Record<string, unknown>;
export const Admin_DeleteCompanyModelResponse = t.UnknownRecord;

/* Admin_DeleteCompanyModel */
export const Admin_DeleteCompanyModelReader = u.controllerFactory<
  Admin_DeleteCompanyModelRequest,
  Admin_DeleteCompanyModelResponse
>(
  Admin_DeleteCompanyModelResponse,
  'delete',
  '/api/Admin/DeleteCompanyModel/{id}'
);

export interface Admin_GetCheckRegisterRequest {
  body: m.CheckRegisterModel;
}
export type Admin_GetCheckRegisterResponse = Record<string, unknown>;
export const Admin_GetCheckRegisterResponse = t.UnknownRecord;

/* Admin_GetCheckRegister */
export const Admin_GetCheckRegisterReader = u.controllerFactory<
  Admin_GetCheckRegisterRequest,
  Admin_GetCheckRegisterResponse
>(Admin_GetCheckRegisterResponse, 'post', '/api/Admin/CheckRegister');

export interface Admin_DeleteInviteRequest {
  path: {
    userId: string;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteInviteResponse = Record<string, unknown>;
export const Admin_DeleteInviteResponse = t.UnknownRecord;

/* Admin_DeleteInvite */
export const Admin_DeleteInviteReader = u.controllerFactory<
  Admin_DeleteInviteRequest,
  Admin_DeleteInviteResponse
>(Admin_DeleteInviteResponse, 'delete', '/api/Admin/DeleteInvite/{userId}');

export interface Admin_ResendInviteRequest {
  path: {
    userId: string;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_ResendInviteResponse = Record<string, unknown>;
export const Admin_ResendInviteResponse = t.UnknownRecord;

/* Admin_ResendInvite */
export const Admin_ResendInviteReader = u.controllerFactory<
  Admin_ResendInviteRequest,
  Admin_ResendInviteResponse
>(Admin_ResendInviteResponse, 'post', '/api/Admin/ResendInvite/{userId}');

export interface Admin_InviteUserRequest {
  query: {
    companyId?: number;
  };
  body: m.InviteViewModel;
}
export type Admin_InviteUserResponse = m.UserProfile;
export const Admin_InviteUserResponse = m.UserProfile;

/* Admin_InviteUser */
export const Admin_InviteUserReader = u.controllerFactory<
  Admin_InviteUserRequest,
  Admin_InviteUserResponse
>(Admin_InviteUserResponse, 'post', '/api/Admin/InviteUser');

export interface Admin_GetAllInviteRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllInviteResponse = Array<m.InviteViewModel>;
export const Admin_GetAllInviteResponse = t.array(m.InviteViewModel);

/* Admin_GetAllInvite */
export const Admin_GetAllInviteReader = u.controllerFactory<
  Admin_GetAllInviteRequest,
  Admin_GetAllInviteResponse
>(Admin_GetAllInviteResponse, 'get', '/api/Admin/AllInvite');

export interface Admin_ImportListUserForCompanyRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_ImportListUserForCompanyResponse = m.InviteViewModel;
export const Admin_ImportListUserForCompanyResponse = m.InviteViewModel;

/* Admin_ImportListUserForCompany */
export const Admin_ImportListUserForCompanyReader = u.controllerFactory<
  Admin_ImportListUserForCompanyRequest,
  Admin_ImportListUserForCompanyResponse
>(
  Admin_ImportListUserForCompanyResponse,
  'post',
  '/api/Admin/ImportListUserForCompany'
);

export interface Admin_GetAllRoleModelRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllRoleModelResponse = Array<m.RoleModel>;
export const Admin_GetAllRoleModelResponse = t.array(m.RoleModel);

/* Admin_GetAllRoleModel */
export const Admin_GetAllRoleModelReader = u.controllerFactory<
  Admin_GetAllRoleModelRequest,
  Admin_GetAllRoleModelResponse
>(Admin_GetAllRoleModelResponse, 'get', '/api/Admin/AllRoleModel');

export interface Admin_UpdateRoleModelRequest {
  query: {
    companyId?: number;
  };
  body: m.RoleModel;
}
export type Admin_UpdateRoleModelResponse = Record<string, unknown>;
export const Admin_UpdateRoleModelResponse = t.UnknownRecord;

/* Admin_UpdateRoleModel */
export const Admin_UpdateRoleModelReader = u.controllerFactory<
  Admin_UpdateRoleModelRequest,
  Admin_UpdateRoleModelResponse
>(Admin_UpdateRoleModelResponse, 'post', '/api/Admin/UpdateRoleModel');

export interface Admin_InsertRoleModelRequest {
  query: {
    companyId?: number;
  };
  body: m.RoleModel;
}
export type Admin_InsertRoleModelResponse = Record<string, unknown>;
export const Admin_InsertRoleModelResponse = t.UnknownRecord;

/* Admin_InsertRoleModel */
export const Admin_InsertRoleModelReader = u.controllerFactory<
  Admin_InsertRoleModelRequest,
  Admin_InsertRoleModelResponse
>(Admin_InsertRoleModelResponse, 'post', '/api/Admin/InsertRoleModel');

export interface Admin_DeleteRoleModelRequest {
  path: {
    /** id of the role to delete */
    id: number;
  };
  query: {
    /** optional companyId */
    companyId?: number;
    /** optional role id to replace where deleted role was */
    replaceWithRoleId?: number;
  };
}
export type Admin_DeleteRoleModelResponse = Record<string, unknown>;
export const Admin_DeleteRoleModelResponse = t.UnknownRecord;

/* Admin_DeleteRoleModel */
export const Admin_DeleteRoleModelReader = u.controllerFactory<
  Admin_DeleteRoleModelRequest,
  Admin_DeleteRoleModelResponse
>(Admin_DeleteRoleModelResponse, 'delete', '/api/Admin/DeleteRoleModel/{id}');

export interface Admin_UpdateRoleOrderRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanPurposeModel;
}
export type Admin_UpdateRoleOrderResponse = Record<string, unknown>;
export const Admin_UpdateRoleOrderResponse = t.UnknownRecord;

/* Admin_UpdateRoleOrder */
export const Admin_UpdateRoleOrderReader = u.controllerFactory<
  Admin_UpdateRoleOrderRequest,
  Admin_UpdateRoleOrderResponse
>(Admin_UpdateRoleOrderResponse, 'post', '/api/Admin/UpdateRoleOrder');

export interface Admin_GetCompanyAndRoleAndUserAligmentRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetCompanyAndRoleAndUserAligmentResponse = Record<
  string,
  unknown
>;
export const Admin_GetCompanyAndRoleAndUserAligmentResponse = t.UnknownRecord;

/* Admin_GetCompanyAndRoleAndUserAligment */
export const Admin_GetCompanyAndRoleAndUserAligmentReader = u.controllerFactory<
  Admin_GetCompanyAndRoleAndUserAligmentRequest,
  Admin_GetCompanyAndRoleAndUserAligmentResponse
>(
  Admin_GetCompanyAndRoleAndUserAligmentResponse,
  'get',
  '/api/Admin/CompanyAndRoleAndUserForAligment'
);

export interface Admin_GetAllAlignmentModelRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllAlignmentModelResponse = Record<string, unknown>;
export const Admin_GetAllAlignmentModelResponse = t.UnknownRecord;

/* Admin_GetAllAlignmentModel */
export const Admin_GetAllAlignmentModelReader = u.controllerFactory<
  Admin_GetAllAlignmentModelRequest,
  Admin_GetAllAlignmentModelResponse
>(Admin_GetAllAlignmentModelResponse, 'get', '/api/Admin/AllAlignmentModel');

export interface Admin_UpdateAlignmentModelRequest {
  query: {
    companyId?: number;
  };
  body: Record<string, any>;
}
export type Admin_UpdateAlignmentModelResponse = Record<string, unknown>;
export const Admin_UpdateAlignmentModelResponse = t.UnknownRecord;

/* Admin_UpdateAlignmentModel */
export const Admin_UpdateAlignmentModelReader = u.controllerFactory<
  Admin_UpdateAlignmentModelRequest,
  Admin_UpdateAlignmentModelResponse
>(
  Admin_UpdateAlignmentModelResponse,
  'post',
  '/api/Admin/UpdateAlignmentModel'
);

export interface Admin_InsertAlignmentModelRequest {
  query: {
    companyId?: number;
  };
  body: Record<string, any>;
}
export type Admin_InsertAlignmentModelResponse = Record<string, unknown>;
export const Admin_InsertAlignmentModelResponse = t.UnknownRecord;

/* Admin_InsertAlignmentModel */
export const Admin_InsertAlignmentModelReader = u.controllerFactory<
  Admin_InsertAlignmentModelRequest,
  Admin_InsertAlignmentModelResponse
>(
  Admin_InsertAlignmentModelResponse,
  'post',
  '/api/Admin/InsertAlignmentModel'
);

export interface Admin_DeleteAlignmentModelRequest {
  path: {
    groupnumber: string;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteAlignmentModelResponse = Record<string, unknown>;
export const Admin_DeleteAlignmentModelResponse = t.UnknownRecord;

/* Admin_DeleteAlignmentModel */
export const Admin_DeleteAlignmentModelReader = u.controllerFactory<
  Admin_DeleteAlignmentModelRequest,
  Admin_DeleteAlignmentModelResponse
>(
  Admin_DeleteAlignmentModelResponse,
  'delete',
  '/api/Admin/DeleteAlignmentModel/{groupnumber}'
);

export interface Admin_GetAllLeadStatusModelRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllLeadStatusModelResponse = Array<m.LoanStatusModel>;
export const Admin_GetAllLeadStatusModelResponse = t.array(m.LoanStatusModel);

/* Admin_GetAllLeadStatusModel */
export const Admin_GetAllLeadStatusModelReader = u.controllerFactory<
  Admin_GetAllLeadStatusModelRequest,
  Admin_GetAllLeadStatusModelResponse
>(Admin_GetAllLeadStatusModelResponse, 'get', '/api/Admin/AllLeadStatusModel');

export interface Admin_GetLeadStatusRequest {
  path: {
    leadStatusId: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_GetLeadStatusResponse = Record<string, unknown>;
export const Admin_GetLeadStatusResponse = t.UnknownRecord;

/* Admin_GetLeadStatus */
export const Admin_GetLeadStatusReader = u.controllerFactory<
  Admin_GetLeadStatusRequest,
  Admin_GetLeadStatusResponse
>(
  Admin_GetLeadStatusResponse,
  'get',
  '/api/Admin/GetLeadStatus/{leadStatusId}'
);

export interface Admin_GetLeadStatusByLoanPurposeIdRequest {
  path: {
    LoanPurposeId: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_GetLeadStatusByLoanPurposeIdResponse = Array<
  m.LoanStatusModel
>;
export const Admin_GetLeadStatusByLoanPurposeIdResponse = t.array(
  m.LoanStatusModel
);

/* Admin_GetLeadStatusByLoanPurposeId */
export const Admin_GetLeadStatusByLoanPurposeIdReader = u.controllerFactory<
  Admin_GetLeadStatusByLoanPurposeIdRequest,
  Admin_GetLeadStatusByLoanPurposeIdResponse
>(
  Admin_GetLeadStatusByLoanPurposeIdResponse,
  'get',
  '/api/Admin/GetLeadStatusByLoanPurposeId/{LoanPurposeId}'
);

export interface Admin_UpdateLeadStatusModelRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanStatusModel;
}
export type Admin_UpdateLeadStatusModelResponse = Record<string, unknown>;
export const Admin_UpdateLeadStatusModelResponse = t.UnknownRecord;

/* Admin_UpdateLeadStatusModel */
export const Admin_UpdateLeadStatusModelReader = u.controllerFactory<
  Admin_UpdateLeadStatusModelRequest,
  Admin_UpdateLeadStatusModelResponse
>(
  Admin_UpdateLeadStatusModelResponse,
  'post',
  '/api/Admin/UpdateLeadStatusModel'
);

export interface Admin_InsertLeadStatusModelRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanStatusModel;
}
export type Admin_InsertLeadStatusModelResponse = m.LoanStatusModel;
export const Admin_InsertLeadStatusModelResponse = m.LoanStatusModel;

/* Admin_InsertLeadStatusModel */
export const Admin_InsertLeadStatusModelReader = u.controllerFactory<
  Admin_InsertLeadStatusModelRequest,
  Admin_InsertLeadStatusModelResponse
>(
  Admin_InsertLeadStatusModelResponse,
  'post',
  '/api/Admin/InsertLeadStatusModel'
);

export interface Admin_SaveAssociateLeadStatusRequest {
  path: {
    loanStatusId: number;
    loanPurposeId: number;
    associate: string;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_SaveAssociateLeadStatusResponse = m.LoanStatusAssociationModel;
export const Admin_SaveAssociateLeadStatusResponse =
  m.LoanStatusAssociationModel;

/* Admin_SaveAssociateLeadStatus */
export const Admin_SaveAssociateLeadStatusReader = u.controllerFactory<
  Admin_SaveAssociateLeadStatusRequest,
  Admin_SaveAssociateLeadStatusResponse
>(
  Admin_SaveAssociateLeadStatusResponse,
  'post',
  '/api/Admin/SaveAssociateLeadStatus/{loanPurposeId}/{loanStatusId}/{associate}'
);

export interface Admin_SaveLeadStatusFlowRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanStatusAssociationModel;
}
export type Admin_SaveLeadStatusFlowResponse = m.LoanStatusAssociationModel;
export const Admin_SaveLeadStatusFlowResponse = m.LoanStatusAssociationModel;

/* Admin_SaveLeadStatusFlow */
export const Admin_SaveLeadStatusFlowReader = u.controllerFactory<
  Admin_SaveLeadStatusFlowRequest,
  Admin_SaveLeadStatusFlowResponse
>(Admin_SaveLeadStatusFlowResponse, 'post', '/api/Admin/SaveLeadStatusFlow');

export interface Admin_DeleteLeadStatusModelRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
    replaceWithLeadStatusId?: number;
  };
}
export type Admin_DeleteLeadStatusModelResponse = Record<string, unknown>;
export const Admin_DeleteLeadStatusModelResponse = t.UnknownRecord;

/* Admin_DeleteLeadStatusModel */
export const Admin_DeleteLeadStatusModelReader = u.controllerFactory<
  Admin_DeleteLeadStatusModelRequest,
  Admin_DeleteLeadStatusModelResponse
>(
  Admin_DeleteLeadStatusModelResponse,
  'delete',
  '/api/Admin/DeleteLeadStatusModel/{id}'
);

export interface Admin_UpdateLeadOrderRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanPurposeModel;
}
export type Admin_UpdateLeadOrderResponse = Record<string, unknown>;
export const Admin_UpdateLeadOrderResponse = t.UnknownRecord;

/* Admin_UpdateLeadOrder */
export const Admin_UpdateLeadOrderReader = u.controllerFactory<
  Admin_UpdateLeadOrderRequest,
  Admin_UpdateLeadOrderResponse
>(Admin_UpdateLeadOrderResponse, 'post', '/api/Admin/UpdateLeadOrder');

export interface Admin_GetAllLoanStatusModelRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllLoanStatusModelResponse = Array<m.LoanStatusModel>;
export const Admin_GetAllLoanStatusModelResponse = t.array(m.LoanStatusModel);

/* Admin_GetAllLoanStatusModel */
export const Admin_GetAllLoanStatusModelReader = u.controllerFactory<
  Admin_GetAllLoanStatusModelRequest,
  Admin_GetAllLoanStatusModelResponse
>(Admin_GetAllLoanStatusModelResponse, 'get', '/api/Admin/AllLoanStatusModel');

export interface Admin_GetLoanStatusRequest {
  path: {
    loanStatusId: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_GetLoanStatusResponse = Record<string, unknown>;
export const Admin_GetLoanStatusResponse = t.UnknownRecord;

/* Admin_GetLoanStatus */
export const Admin_GetLoanStatusReader = u.controllerFactory<
  Admin_GetLoanStatusRequest,
  Admin_GetLoanStatusResponse
>(
  Admin_GetLoanStatusResponse,
  'get',
  '/api/Admin/GetLoanStatus/{loanStatusId}'
);

export interface Admin_GetLoanStatusByLoanTypeIdRequest {
  path: {
    loanPurposeId: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_GetLoanStatusByLoanTypeIdResponse = Array<m.LoanStatusModel>;
export const Admin_GetLoanStatusByLoanTypeIdResponse = t.array(
  m.LoanStatusModel
);

/* Admin_GetLoanStatusByLoanTypeId */
export const Admin_GetLoanStatusByLoanTypeIdReader = u.controllerFactory<
  Admin_GetLoanStatusByLoanTypeIdRequest,
  Admin_GetLoanStatusByLoanTypeIdResponse
>(
  Admin_GetLoanStatusByLoanTypeIdResponse,
  'get',
  '/api/Admin/GetLoanStatusByLoanPurposeId/{loanPurposeId}'
);

export interface Admin_UpdateLoanStatusModelRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanStatusModel;
}
export type Admin_UpdateLoanStatusModelResponse = Record<string, unknown>;
export const Admin_UpdateLoanStatusModelResponse = t.UnknownRecord;

/* Admin_UpdateLoanStatusModel */
export const Admin_UpdateLoanStatusModelReader = u.controllerFactory<
  Admin_UpdateLoanStatusModelRequest,
  Admin_UpdateLoanStatusModelResponse
>(
  Admin_UpdateLoanStatusModelResponse,
  'post',
  '/api/Admin/UpdateLoanStatusModel'
);

export interface Admin_InsertLoanStatusModelRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanStatusModel;
}
export type Admin_InsertLoanStatusModelResponse = m.LoanStatusModel;
export const Admin_InsertLoanStatusModelResponse = m.LoanStatusModel;

/* Admin_InsertLoanStatusModel */
export const Admin_InsertLoanStatusModelReader = u.controllerFactory<
  Admin_InsertLoanStatusModelRequest,
  Admin_InsertLoanStatusModelResponse
>(
  Admin_InsertLoanStatusModelResponse,
  'post',
  '/api/Admin/InsertLoanStatusModel'
);

export interface Admin_SaveAssociateLoanStatusRequest {
  path: {
    loanPurposeId: number;
    loanStatusId: number;
    associate: string;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_SaveAssociateLoanStatusResponse = m.LoanStatusAssociationModel;
export const Admin_SaveAssociateLoanStatusResponse =
  m.LoanStatusAssociationModel;

/* Admin_SaveAssociateLoanStatus */
export const Admin_SaveAssociateLoanStatusReader = u.controllerFactory<
  Admin_SaveAssociateLoanStatusRequest,
  Admin_SaveAssociateLoanStatusResponse
>(
  Admin_SaveAssociateLoanStatusResponse,
  'post',
  '/api/Admin/SaveAssociateLoanStatus/{loanPurposeId}/{loanStatusId}/{associate}'
);

export interface Admin_SaveLoanStatusFlowRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanStatusAssociationModel;
}
export type Admin_SaveLoanStatusFlowResponse = m.LoanStatusAssociationModel;
export const Admin_SaveLoanStatusFlowResponse = m.LoanStatusAssociationModel;

/* Admin_SaveLoanStatusFlow */
export const Admin_SaveLoanStatusFlowReader = u.controllerFactory<
  Admin_SaveLoanStatusFlowRequest,
  Admin_SaveLoanStatusFlowResponse
>(Admin_SaveLoanStatusFlowResponse, 'post', '/api/Admin/SaveLoanStatusFlow');

export interface Admin_DeleteLoanStatusModelRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
    replaceWithLoanStatusId?: number;
  };
}
export type Admin_DeleteLoanStatusModelResponse = Record<string, unknown>;
export const Admin_DeleteLoanStatusModelResponse = t.UnknownRecord;

/* Admin_DeleteLoanStatusModel */
export const Admin_DeleteLoanStatusModelReader = u.controllerFactory<
  Admin_DeleteLoanStatusModelRequest,
  Admin_DeleteLoanStatusModelResponse
>(
  Admin_DeleteLoanStatusModelResponse,
  'delete',
  '/api/Admin/DeleteLoanStatusModel/{id}'
);

export interface Admin_UpdateLoanOrderRequest {
  query: {
    companyId?: number;
    leadStatus?: boolean;
  };
  body: m.LoanPurposeModel;
}
export type Admin_UpdateLoanOrderResponse = Record<string, unknown>;
export const Admin_UpdateLoanOrderResponse = t.UnknownRecord;

/* Admin_UpdateLoanOrder */
export const Admin_UpdateLoanOrderReader = u.controllerFactory<
  Admin_UpdateLoanOrderRequest,
  Admin_UpdateLoanOrderResponse
>(Admin_UpdateLoanOrderResponse, 'post', '/api/Admin/UpdateLoanOrder');

export interface Admin_GetAllLoanTypeModelRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllLoanTypeModelResponse = Array<m.LoanTypeModel>;
export const Admin_GetAllLoanTypeModelResponse = t.array(m.LoanTypeModel);

/* Admin_GetAllLoanTypeModel */
export const Admin_GetAllLoanTypeModelReader = u.controllerFactory<
  Admin_GetAllLoanTypeModelRequest,
  Admin_GetAllLoanTypeModelResponse
>(Admin_GetAllLoanTypeModelResponse, 'get', '/api/Admin/AllLoanTypeModel');

export interface Admin_UpdateLoanTypeModelRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanTypeModel;
}
export type Admin_UpdateLoanTypeModelResponse = Record<string, unknown>;
export const Admin_UpdateLoanTypeModelResponse = t.UnknownRecord;

/* Admin_UpdateLoanTypeModel */
export const Admin_UpdateLoanTypeModelReader = u.controllerFactory<
  Admin_UpdateLoanTypeModelRequest,
  Admin_UpdateLoanTypeModelResponse
>(Admin_UpdateLoanTypeModelResponse, 'post', '/api/Admin/UpdateLoanTypeModel');

export interface Admin_InsertLoanTypeModelRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanTypeModel;
}
export type Admin_InsertLoanTypeModelResponse = m.LoanTypeModel;
export const Admin_InsertLoanTypeModelResponse = m.LoanTypeModel;

/* Admin_InsertLoanTypeModel */
export const Admin_InsertLoanTypeModelReader = u.controllerFactory<
  Admin_InsertLoanTypeModelRequest,
  Admin_InsertLoanTypeModelResponse
>(Admin_InsertLoanTypeModelResponse, 'post', '/api/Admin/InsertLoanTypeModel');

export interface Admin_DeleteLoanTypeModelRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteLoanTypeModelResponse = Record<string, unknown>;
export const Admin_DeleteLoanTypeModelResponse = t.UnknownRecord;

/* Admin_DeleteLoanTypeModel */
export const Admin_DeleteLoanTypeModelReader = u.controllerFactory<
  Admin_DeleteLoanTypeModelRequest,
  Admin_DeleteLoanTypeModelResponse
>(
  Admin_DeleteLoanTypeModelResponse,
  'delete',
  '/api/Admin/DeleteLoanTypeModel/{id}'
);

export interface Admin_UpdateLoanTypeOrderRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanPurposeModel;
}
export type Admin_UpdateLoanTypeOrderResponse = Record<string, unknown>;
export const Admin_UpdateLoanTypeOrderResponse = t.UnknownRecord;

/* Admin_UpdateLoanTypeOrder */
export const Admin_UpdateLoanTypeOrderReader = u.controllerFactory<
  Admin_UpdateLoanTypeOrderRequest,
  Admin_UpdateLoanTypeOrderResponse
>(Admin_UpdateLoanTypeOrderResponse, 'post', '/api/Admin/UpdateLoanTypeOrder');

export interface Admin_GetAllLoanPurposeModelRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllLoanPurposeModelResponse = Array<m.LoanPurposeModel>;
export const Admin_GetAllLoanPurposeModelResponse = t.array(m.LoanPurposeModel);

/* Admin_GetAllLoanPurposeModel */
export const Admin_GetAllLoanPurposeModelReader = u.controllerFactory<
  Admin_GetAllLoanPurposeModelRequest,
  Admin_GetAllLoanPurposeModelResponse
>(
  Admin_GetAllLoanPurposeModelResponse,
  'get',
  '/api/Admin/AllLoanPurposeModel'
);

export interface Admin_UpdateLoanPurposeModelRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanPurposeModel;
}
export type Admin_UpdateLoanPurposeModelResponse = Record<string, unknown>;
export const Admin_UpdateLoanPurposeModelResponse = t.UnknownRecord;

/* Admin_UpdateLoanPurposeModel */
export const Admin_UpdateLoanPurposeModelReader = u.controllerFactory<
  Admin_UpdateLoanPurposeModelRequest,
  Admin_UpdateLoanPurposeModelResponse
>(
  Admin_UpdateLoanPurposeModelResponse,
  'post',
  '/api/Admin/UpdateLoanPurposeModel'
);

export interface Admin_InsertLoanPurposeModelRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanPurposeModel;
}
export type Admin_InsertLoanPurposeModelResponse = m.LoanPurposeModel;
export const Admin_InsertLoanPurposeModelResponse = m.LoanPurposeModel;

/* Admin_InsertLoanPurposeModel */
export const Admin_InsertLoanPurposeModelReader = u.controllerFactory<
  Admin_InsertLoanPurposeModelRequest,
  Admin_InsertLoanPurposeModelResponse
>(
  Admin_InsertLoanPurposeModelResponse,
  'post',
  '/api/Admin/InsertLoanPurposeModel'
);

export interface Admin_DeleteLoanPurposeModelRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteLoanPurposeModelResponse = Record<string, unknown>;
export const Admin_DeleteLoanPurposeModelResponse = t.UnknownRecord;

/* Admin_DeleteLoanPurposeModel */
export const Admin_DeleteLoanPurposeModelReader = u.controllerFactory<
  Admin_DeleteLoanPurposeModelRequest,
  Admin_DeleteLoanPurposeModelResponse
>(
  Admin_DeleteLoanPurposeModelResponse,
  'delete',
  '/api/Admin/DeleteLoanPurposeModel/{id}'
);

export interface Admin_UpdateLoanPurposeOrderRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanPurposeModel;
}
export type Admin_UpdateLoanPurposeOrderResponse = Record<string, unknown>;
export const Admin_UpdateLoanPurposeOrderResponse = t.UnknownRecord;

/* Admin_UpdateLoanPurposeOrder */
export const Admin_UpdateLoanPurposeOrderReader = u.controllerFactory<
  Admin_UpdateLoanPurposeOrderRequest,
  Admin_UpdateLoanPurposeOrderResponse
>(
  Admin_UpdateLoanPurposeOrderResponse,
  'post',
  '/api/Admin/UpdateLoanPurposeOrder'
);

export interface Admin_GetAllLeadStatusAssociationsRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllLeadStatusAssociationsResponse = Array<
  m.LoanStatusAssociationModel
>;
export const Admin_GetAllLeadStatusAssociationsResponse = t.array(
  m.LoanStatusAssociationModel
);

/* Admin_GetAllLeadStatusAssociations */
export const Admin_GetAllLeadStatusAssociationsReader = u.controllerFactory<
  Admin_GetAllLeadStatusAssociationsRequest,
  Admin_GetAllLeadStatusAssociationsResponse
>(
  Admin_GetAllLeadStatusAssociationsResponse,
  'get',
  '/api/Admin/GetAllLeadStatusAssociations'
);

export interface Admin_GetAllLeadStatusAssociationsByLoanPurposeRequest {
  path: {
    loanPurposeId: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllLeadStatusAssociationsByLoanPurposeResponse = Array<
  m.LoanStatusAssociationModel
>;
export const Admin_GetAllLeadStatusAssociationsByLoanPurposeResponse = t.array(
  m.LoanStatusAssociationModel
);

/* Admin_GetAllLeadStatusAssociationsByLoanPurpose */
export const Admin_GetAllLeadStatusAssociationsByLoanPurposeReader = u.controllerFactory<
  Admin_GetAllLeadStatusAssociationsByLoanPurposeRequest,
  Admin_GetAllLeadStatusAssociationsByLoanPurposeResponse
>(
  Admin_GetAllLeadStatusAssociationsByLoanPurposeResponse,
  'get',
  '/api/Admin/GetAllLeadStatusAssociationsByLoanPurpose/{loanPurposeId}'
);

export interface Admin_UpdateLeadStatusAssociationRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanStatusAssociationModel;
}
export type Admin_UpdateLeadStatusAssociationResponse = Record<string, unknown>;
export const Admin_UpdateLeadStatusAssociationResponse = t.UnknownRecord;

/* Admin_UpdateLeadStatusAssociation */
export const Admin_UpdateLeadStatusAssociationReader = u.controllerFactory<
  Admin_UpdateLeadStatusAssociationRequest,
  Admin_UpdateLeadStatusAssociationResponse
>(
  Admin_UpdateLeadStatusAssociationResponse,
  'post',
  '/api/Admin/UpdateLeadStatusAssociation'
);

export interface Admin_DeleteLeadStatusAssociationRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteLeadStatusAssociationResponse = Record<string, unknown>;
export const Admin_DeleteLeadStatusAssociationResponse = t.UnknownRecord;

/* Admin_DeleteLeadStatusAssociation */
export const Admin_DeleteLeadStatusAssociationReader = u.controllerFactory<
  Admin_DeleteLeadStatusAssociationRequest,
  Admin_DeleteLeadStatusAssociationResponse
>(
  Admin_DeleteLeadStatusAssociationResponse,
  'delete',
  '/api/Admin/DeleteLeadStatusAssociation/{id}'
);

export interface Admin_InsertLeadStatusAssociationRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanStatusAssociationModel;
}
export type Admin_InsertLeadStatusAssociationResponse = m.LoanStatusAssociationModel;
export const Admin_InsertLeadStatusAssociationResponse =
  m.LoanStatusAssociationModel;

/* Admin_InsertLeadStatusAssociation */
export const Admin_InsertLeadStatusAssociationReader = u.controllerFactory<
  Admin_InsertLeadStatusAssociationRequest,
  Admin_InsertLeadStatusAssociationResponse
>(
  Admin_InsertLeadStatusAssociationResponse,
  'post',
  '/api/Admin/InsertLeadStatusAssociation'
);

export interface Admin_UpdateLeadStatusFlowOrderRequest {
  path: {
    loanPurposeId: number;
  };
  query: {
    companyId?: number;
  };
  body: m.LoanPurposeModel;
}
export type Admin_UpdateLeadStatusFlowOrderResponse = Record<string, unknown>;
export const Admin_UpdateLeadStatusFlowOrderResponse = t.UnknownRecord;

/* Admin_UpdateLeadStatusFlowOrder */
export const Admin_UpdateLeadStatusFlowOrderReader = u.controllerFactory<
  Admin_UpdateLeadStatusFlowOrderRequest,
  Admin_UpdateLeadStatusFlowOrderResponse
>(
  Admin_UpdateLeadStatusFlowOrderResponse,
  'post',
  '/api/Admin/UpdateLeadStatusFlowOrder/{loanPurposeId}'
);

export interface Admin_GetAllLoanStatusAssociationsRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllLoanStatusAssociationsResponse = Array<
  m.LoanStatusAssociationModel
>;
export const Admin_GetAllLoanStatusAssociationsResponse = t.array(
  m.LoanStatusAssociationModel
);

/* Admin_GetAllLoanStatusAssociations */
export const Admin_GetAllLoanStatusAssociationsReader = u.controllerFactory<
  Admin_GetAllLoanStatusAssociationsRequest,
  Admin_GetAllLoanStatusAssociationsResponse
>(
  Admin_GetAllLoanStatusAssociationsResponse,
  'get',
  '/api/Admin/GetAllLoanStatusAssociations'
);

export interface Admin_GetAllLoanStatusAssociationsByLoanPurposeRequest {
  path: {
    loanPurposeId: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllLoanStatusAssociationsByLoanPurposeResponse = Array<
  m.LoanStatusAssociationModel
>;
export const Admin_GetAllLoanStatusAssociationsByLoanPurposeResponse = t.array(
  m.LoanStatusAssociationModel
);

/* Admin_GetAllLoanStatusAssociationsByLoanPurpose */
export const Admin_GetAllLoanStatusAssociationsByLoanPurposeReader = u.controllerFactory<
  Admin_GetAllLoanStatusAssociationsByLoanPurposeRequest,
  Admin_GetAllLoanStatusAssociationsByLoanPurposeResponse
>(
  Admin_GetAllLoanStatusAssociationsByLoanPurposeResponse,
  'get',
  '/api/Admin/GetAllLoanStatusAssociationsByLoanPurpose/{loanPurposeId}'
);

export interface Admin_UpdateLoanStatusAssociationRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanStatusAssociationModel;
}
export type Admin_UpdateLoanStatusAssociationResponse = Record<string, unknown>;
export const Admin_UpdateLoanStatusAssociationResponse = t.UnknownRecord;

/* Admin_UpdateLoanStatusAssociation */
export const Admin_UpdateLoanStatusAssociationReader = u.controllerFactory<
  Admin_UpdateLoanStatusAssociationRequest,
  Admin_UpdateLoanStatusAssociationResponse
>(
  Admin_UpdateLoanStatusAssociationResponse,
  'post',
  '/api/Admin/UpdateLoanStatusAssociation'
);

export interface Admin_DeleteLoanStatusAssociationRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteLoanStatusAssociationResponse = Record<string, unknown>;
export const Admin_DeleteLoanStatusAssociationResponse = t.UnknownRecord;

/* Admin_DeleteLoanStatusAssociation */
export const Admin_DeleteLoanStatusAssociationReader = u.controllerFactory<
  Admin_DeleteLoanStatusAssociationRequest,
  Admin_DeleteLoanStatusAssociationResponse
>(
  Admin_DeleteLoanStatusAssociationResponse,
  'delete',
  '/api/Admin/DeleteLoanStatusAssociation/{id}'
);

export interface Admin_InsertLoanStatusAssociationRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanStatusAssociationModel;
}
export type Admin_InsertLoanStatusAssociationResponse = m.LoanStatusAssociationModel;
export const Admin_InsertLoanStatusAssociationResponse =
  m.LoanStatusAssociationModel;

/* Admin_InsertLoanStatusAssociation */
export const Admin_InsertLoanStatusAssociationReader = u.controllerFactory<
  Admin_InsertLoanStatusAssociationRequest,
  Admin_InsertLoanStatusAssociationResponse
>(
  Admin_InsertLoanStatusAssociationResponse,
  'post',
  '/api/Admin/InsertLoanStatusAssociation'
);

export interface Admin_UpdateLoanStatusFlowOrderRequest {
  path: {
    loanPurposeId: number;
  };
  query: {
    companyId?: number;
  };
  body: m.LoanPurposeModel;
}
export type Admin_UpdateLoanStatusFlowOrderResponse = Record<string, unknown>;
export const Admin_UpdateLoanStatusFlowOrderResponse = t.UnknownRecord;

/* Admin_UpdateLoanStatusFlowOrder */
export const Admin_UpdateLoanStatusFlowOrderReader = u.controllerFactory<
  Admin_UpdateLoanStatusFlowOrderRequest,
  Admin_UpdateLoanStatusFlowOrderResponse
>(
  Admin_UpdateLoanStatusFlowOrderResponse,
  'post',
  '/api/Admin/UpdateLoanStatusFlowOrder/{loanPurposeId}'
);

export interface Admin_GetAllTaskModelRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllTaskModelResponse = Array<m.TaskViewModel>;
export const Admin_GetAllTaskModelResponse = t.array(m.TaskViewModel);

/* Admin_GetAllTaskModel */
export const Admin_GetAllTaskModelReader = u.controllerFactory<
  Admin_GetAllTaskModelRequest,
  Admin_GetAllTaskModelResponse
>(Admin_GetAllTaskModelResponse, 'get', '/api/Admin/AllTaskModel');

export interface Admin_GetLeadAllTaskModelRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetLeadAllTaskModelResponse = Array<m.TaskViewModel>;
export const Admin_GetLeadAllTaskModelResponse = t.array(m.TaskViewModel);

/* Admin_GetLeadAllTaskModel */
export const Admin_GetLeadAllTaskModelReader = u.controllerFactory<
  Admin_GetLeadAllTaskModelRequest,
  Admin_GetLeadAllTaskModelResponse
>(Admin_GetLeadAllTaskModelResponse, 'get', '/api/Admin/GetLeadAllTaskModel');

export interface Admin_GetTaskByIdRequest {
  path: {
    taskId: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_GetTaskByIdResponse = Record<string, unknown>;
export const Admin_GetTaskByIdResponse = t.UnknownRecord;

/* Admin_GetTaskById */
export const Admin_GetTaskByIdReader = u.controllerFactory<
  Admin_GetTaskByIdRequest,
  Admin_GetTaskByIdResponse
>(Admin_GetTaskByIdResponse, 'get', '/api/Admin/GetTaskById/{taskId}');

export interface Admin_UpdateTaskModelRequest {
  query: {
    companyId?: number;
  };
  body: m.TaskViewModel;
}
export type Admin_UpdateTaskModelResponse = Record<string, unknown>;
export const Admin_UpdateTaskModelResponse = t.UnknownRecord;

/* Admin_UpdateTaskModel */
export const Admin_UpdateTaskModelReader = u.controllerFactory<
  Admin_UpdateTaskModelRequest,
  Admin_UpdateTaskModelResponse
>(Admin_UpdateTaskModelResponse, 'post', '/api/Admin/UpdateTaskModel');

export interface Admin_UpdateTaskSubTaskRequest {
  path: {
    taskId: number;
    subTasks: string;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_UpdateTaskSubTaskResponse = Record<string, unknown>;
export const Admin_UpdateTaskSubTaskResponse = t.UnknownRecord;

/* Admin_UpdateTaskSubTask */
export const Admin_UpdateTaskSubTaskReader = u.controllerFactory<
  Admin_UpdateTaskSubTaskRequest,
  Admin_UpdateTaskSubTaskResponse
>(
  Admin_UpdateTaskSubTaskResponse,
  'post',
  '/api/Admin/UpdateTaskSubTask/{taskId}/{subTasks}'
);

export interface Admin_InsertTaskModelRequest {
  query: {
    companyId?: number;
  };
  body: m.TaskViewModel;
}
export type Admin_InsertTaskModelResponse = m.TaskViewModel;
export const Admin_InsertTaskModelResponse = m.TaskViewModel;

/* Admin_InsertTaskModel */
export const Admin_InsertTaskModelReader = u.controllerFactory<
  Admin_InsertTaskModelRequest,
  Admin_InsertTaskModelResponse
>(Admin_InsertTaskModelResponse, 'post', '/api/Admin/InsertTaskModel');

export interface Admin_InsertTaskModelFromTemplateRequest {
  path: {
    templateCompanyId: number;
    templateTaskId: number;
  };
  query: {
    companyId?: number;
  };
  body: m.TaskViewModel;
}
export type Admin_InsertTaskModelFromTemplateResponse = m.TaskViewModel;
export const Admin_InsertTaskModelFromTemplateResponse = m.TaskViewModel;

/* Admin_InsertTaskModelFromTemplate */
export const Admin_InsertTaskModelFromTemplateReader = u.controllerFactory<
  Admin_InsertTaskModelFromTemplateRequest,
  Admin_InsertTaskModelFromTemplateResponse
>(
  Admin_InsertTaskModelFromTemplateResponse,
  'post',
  '/api/Admin/InsertTaskModelFromTemplate/{templateCompanyId}/{templateTaskId}'
);

export interface Admin_DeleteTaskModelRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteTaskModelResponse = Record<string, unknown>;
export const Admin_DeleteTaskModelResponse = t.UnknownRecord;

/* Admin_DeleteTaskModel */
export const Admin_DeleteTaskModelReader = u.controllerFactory<
  Admin_DeleteTaskModelRequest,
  Admin_DeleteTaskModelResponse
>(Admin_DeleteTaskModelResponse, 'delete', '/api/Admin/DeleteTaskModel/{id}');

export type Admin_GetGlobalEmailMergeFieldsModelResponse = Array<
  m.GlobalEmailMergeFieldModel
>;
export const Admin_GetGlobalEmailMergeFieldsModelResponse = t.array(
  m.GlobalEmailMergeFieldModel
);

/* Admin_GetGlobalEmailMergeFieldsModel */
export const Admin_GetGlobalEmailMergeFieldsModelReader = u.requestlessControllerFactory<
  Admin_GetGlobalEmailMergeFieldsModelResponse
>(
  Admin_GetGlobalEmailMergeFieldsModelResponse,
  'get',
  '/api/Admin/AllGlobalEmailMergeFieldsModel'
);

export interface Admin_UpdateGlobalEmailMergeFieldsModelRequest {
  body: m.GlobalEmailMergeFieldModel;
}
export type Admin_UpdateGlobalEmailMergeFieldsModelResponse = Record<
  string,
  unknown
>;
export const Admin_UpdateGlobalEmailMergeFieldsModelResponse = t.UnknownRecord;

/* Admin_UpdateGlobalEmailMergeFieldsModel */
export const Admin_UpdateGlobalEmailMergeFieldsModelReader = u.controllerFactory<
  Admin_UpdateGlobalEmailMergeFieldsModelRequest,
  Admin_UpdateGlobalEmailMergeFieldsModelResponse
>(
  Admin_UpdateGlobalEmailMergeFieldsModelResponse,
  'post',
  '/api/Admin/UpdateGlobalEmailMergeFieldsModel'
);

export interface Admin_InsertGlobalEmailMergeFieldsModelRequest {
  body: m.GlobalEmailMergeFieldModel;
}
export type Admin_InsertGlobalEmailMergeFieldsModelResponse = m.GlobalEmailMergeFieldModel;
export const Admin_InsertGlobalEmailMergeFieldsModelResponse =
  m.GlobalEmailMergeFieldModel;

/* Admin_InsertGlobalEmailMergeFieldsModel */
export const Admin_InsertGlobalEmailMergeFieldsModelReader = u.controllerFactory<
  Admin_InsertGlobalEmailMergeFieldsModelRequest,
  Admin_InsertGlobalEmailMergeFieldsModelResponse
>(
  Admin_InsertGlobalEmailMergeFieldsModelResponse,
  'post',
  '/api/Admin/InsertGlobalEmailMergeFieldsModel'
);

export interface Admin_DeleteGlobalEmailMergeFieldsModelRequest {
  path: {
    id: number;
  };
}
export type Admin_DeleteGlobalEmailMergeFieldsModelResponse = Record<
  string,
  unknown
>;
export const Admin_DeleteGlobalEmailMergeFieldsModelResponse = t.UnknownRecord;

/* Admin_DeleteGlobalEmailMergeFieldsModel */
export const Admin_DeleteGlobalEmailMergeFieldsModelReader = u.controllerFactory<
  Admin_DeleteGlobalEmailMergeFieldsModelRequest,
  Admin_DeleteGlobalEmailMergeFieldsModelResponse
>(
  Admin_DeleteGlobalEmailMergeFieldsModelResponse,
  'delete',
  '/api/Admin/DeleteGlobalEmailMergeFieldsModel/{id}'
);

export interface Admin_GetAllEmailCampaignTriggerModelRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllEmailCampaignTriggerModelResponse = Array<
  m.GetAllEmailCampaignTrigger
>;
export const Admin_GetAllEmailCampaignTriggerModelResponse = t.array(
  m.GetAllEmailCampaignTrigger
);

/* Admin_GetAllEmailCampaignTriggerModel */
export const Admin_GetAllEmailCampaignTriggerModelReader = u.controllerFactory<
  Admin_GetAllEmailCampaignTriggerModelRequest,
  Admin_GetAllEmailCampaignTriggerModelResponse
>(
  Admin_GetAllEmailCampaignTriggerModelResponse,
  'get',
  '/api/Admin/AllEmailCampaignTriggerModel'
);

export interface Admin_UpdateEmailCampaignTriggerModelRequest {
  query: {
    companyId?: number;
  };
  body: m.EmailCampaignTriggerModelView;
}
export type Admin_UpdateEmailCampaignTriggerModelResponse = Record<
  string,
  unknown
>;
export const Admin_UpdateEmailCampaignTriggerModelResponse = t.UnknownRecord;

/* Admin_UpdateEmailCampaignTriggerModel */
export const Admin_UpdateEmailCampaignTriggerModelReader = u.controllerFactory<
  Admin_UpdateEmailCampaignTriggerModelRequest,
  Admin_UpdateEmailCampaignTriggerModelResponse
>(
  Admin_UpdateEmailCampaignTriggerModelResponse,
  'post',
  '/api/Admin/UpdateEmailCampaignTriggerModel'
);

export interface Admin_InsertEmailCampaignTriggerRequest {
  query: {
    companyId?: number;
  };
  body: m.EmailCampaignTriggerModelView;
}
export type Admin_InsertEmailCampaignTriggerResponse = m.EmailCampaignTriggerModelView;
export const Admin_InsertEmailCampaignTriggerResponse =
  m.EmailCampaignTriggerModelView;

/* Admin_InsertEmailCampaignTrigger */
export const Admin_InsertEmailCampaignTriggerReader = u.controllerFactory<
  Admin_InsertEmailCampaignTriggerRequest,
  Admin_InsertEmailCampaignTriggerResponse
>(
  Admin_InsertEmailCampaignTriggerResponse,
  'post',
  '/api/Admin/InsertEmailCampaignTrigger'
);

export interface Admin_InsertChildEmailCampaignTriggerRequest {
  query: {
    companyId?: number;
  };
  body: m.EmailCampaignTriggerModelView;
}
export type Admin_InsertChildEmailCampaignTriggerResponse = m.EmailCampaignTriggerModelView;
export const Admin_InsertChildEmailCampaignTriggerResponse =
  m.EmailCampaignTriggerModelView;

/* Admin_InsertChildEmailCampaignTrigger */
export const Admin_InsertChildEmailCampaignTriggerReader = u.controllerFactory<
  Admin_InsertChildEmailCampaignTriggerRequest,
  Admin_InsertChildEmailCampaignTriggerResponse
>(
  Admin_InsertChildEmailCampaignTriggerResponse,
  'post',
  '/api/Admin/InsertChildEmailCampaignTrigger'
);

export interface Admin_DeleteEmailCampaignTriggerModelRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteEmailCampaignTriggerModelResponse = Record<
  string,
  unknown
>;
export const Admin_DeleteEmailCampaignTriggerModelResponse = t.UnknownRecord;

/* Admin_DeleteEmailCampaignTriggerModel */
export const Admin_DeleteEmailCampaignTriggerModelReader = u.controllerFactory<
  Admin_DeleteEmailCampaignTriggerModelRequest,
  Admin_DeleteEmailCampaignTriggerModelResponse
>(
  Admin_DeleteEmailCampaignTriggerModelResponse,
  'delete',
  '/api/Admin/DeleteEmailCampaignTriggerModel/{id}'
);

export interface Admin_GetAllTaskCategoryModelRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllTaskCategoryModelResponse = Array<
  m.CharacteristicViewModel
>;
export const Admin_GetAllTaskCategoryModelResponse = t.array(
  m.CharacteristicViewModel
);

/* Admin_GetAllTaskCategoryModel */
export const Admin_GetAllTaskCategoryModelReader = u.controllerFactory<
  Admin_GetAllTaskCategoryModelRequest,
  Admin_GetAllTaskCategoryModelResponse
>(
  Admin_GetAllTaskCategoryModelResponse,
  'get',
  '/api/Admin/AllTaskCategoryModel'
);

export interface Admin_InsertTaskCategoryModelRequest {
  query: {
    companyId?: number;
  };
  body: m.CharacteristicViewModel;
}
export type Admin_InsertTaskCategoryModelResponse = m.CharacteristicViewModel;
export const Admin_InsertTaskCategoryModelResponse = m.CharacteristicViewModel;

/* Admin_InsertTaskCategoryModel */
export const Admin_InsertTaskCategoryModelReader = u.controllerFactory<
  Admin_InsertTaskCategoryModelRequest,
  Admin_InsertTaskCategoryModelResponse
>(
  Admin_InsertTaskCategoryModelResponse,
  'post',
  '/api/Admin/InsertTaskCategoryModel'
);

export interface Admin_DeleteTaskCategoryModelRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteTaskCategoryModelResponse = Record<string, unknown>;
export const Admin_DeleteTaskCategoryModelResponse = t.UnknownRecord;

/* Admin_DeleteTaskCategoryModel */
export const Admin_DeleteTaskCategoryModelReader = u.controllerFactory<
  Admin_DeleteTaskCategoryModelRequest,
  Admin_DeleteTaskCategoryModelResponse
>(
  Admin_DeleteTaskCategoryModelResponse,
  'delete',
  '/api/Admin/DeleteTaskCategoryModel/{id}'
);

export interface Admin_UpdateTaskCategoryModelRequest {
  query: {
    companyId?: number;
  };
  body: m.CharacteristicViewModel;
}
export type Admin_UpdateTaskCategoryModelResponse = Record<string, unknown>;
export const Admin_UpdateTaskCategoryModelResponse = t.UnknownRecord;

/* Admin_UpdateTaskCategoryModel */
export const Admin_UpdateTaskCategoryModelReader = u.controllerFactory<
  Admin_UpdateTaskCategoryModelRequest,
  Admin_UpdateTaskCategoryModelResponse
>(
  Admin_UpdateTaskCategoryModelResponse,
  'post',
  '/api/Admin/UpdateTaskCategoryModel'
);

export interface Admin_UpdateTaskCategoryOrderRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanPurposeModel;
}
export type Admin_UpdateTaskCategoryOrderResponse = Record<string, unknown>;
export const Admin_UpdateTaskCategoryOrderResponse = t.UnknownRecord;

/* Admin_UpdateTaskCategoryOrder */
export const Admin_UpdateTaskCategoryOrderReader = u.controllerFactory<
  Admin_UpdateTaskCategoryOrderRequest,
  Admin_UpdateTaskCategoryOrderResponse
>(
  Admin_UpdateTaskCategoryOrderResponse,
  'post',
  '/api/Admin/UpdateTaskCategoryOrder'
);

export interface Admin_GetCustomTaskModelByTypeRequest {
  path: {
    type: string;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_GetCustomTaskModelByTypeResponse = Array<m.CustomTaskModel>;
export const Admin_GetCustomTaskModelByTypeResponse = t.array(
  m.CustomTaskModel
);

/* Admin_GetCustomTaskModelByType */
export const Admin_GetCustomTaskModelByTypeReader = u.controllerFactory<
  Admin_GetCustomTaskModelByTypeRequest,
  Admin_GetCustomTaskModelByTypeResponse
>(
  Admin_GetCustomTaskModelByTypeResponse,
  'get',
  '/api/Admin/GetCustomTaskModelByType/{type}'
);

export interface Admin_InsertCustomTaskModelRequest {
  query: {
    companyId?: number;
  };
  body: m.CustomTaskViewModel;
}
export type Admin_InsertCustomTaskModelResponse = m.CustomTaskViewModel;
export const Admin_InsertCustomTaskModelResponse = m.CustomTaskViewModel;

/* Admin_InsertCustomTaskModel */
export const Admin_InsertCustomTaskModelReader = u.controllerFactory<
  Admin_InsertCustomTaskModelRequest,
  Admin_InsertCustomTaskModelResponse
>(
  Admin_InsertCustomTaskModelResponse,
  'post',
  '/api/Admin/InsertCustomTaskModel'
);

export interface Admin_DeleteCustomTaskModelRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteCustomTaskModelResponse = Record<string, unknown>;
export const Admin_DeleteCustomTaskModelResponse = t.UnknownRecord;

/* Admin_DeleteCustomTaskModel */
export const Admin_DeleteCustomTaskModelReader = u.controllerFactory<
  Admin_DeleteCustomTaskModelRequest,
  Admin_DeleteCustomTaskModelResponse
>(
  Admin_DeleteCustomTaskModelResponse,
  'delete',
  '/api/Admin/DeleteCustomTaskModel/{id}'
);

export interface Admin_UpdateCustomTaskModelRequest {
  query: {
    companyId?: number;
  };
  body: m.CustomTaskViewModel;
}
export type Admin_UpdateCustomTaskModelResponse = Record<string, unknown>;
export const Admin_UpdateCustomTaskModelResponse = t.UnknownRecord;

/* Admin_UpdateCustomTaskModel */
export const Admin_UpdateCustomTaskModelReader = u.controllerFactory<
  Admin_UpdateCustomTaskModelRequest,
  Admin_UpdateCustomTaskModelResponse
>(
  Admin_UpdateCustomTaskModelResponse,
  'post',
  '/api/Admin/UpdateCustomTaskModel'
);

export interface Admin_GetAllDocumentModelRequest {
  path: {
    dbOnly: boolean;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllDocumentModelResponse = Array<m.DocumentTypeModel>;
export const Admin_GetAllDocumentModelResponse = t.array(m.DocumentTypeModel);

/* Admin_GetAllDocumentModel */
export const Admin_GetAllDocumentModelReader = u.controllerFactory<
  Admin_GetAllDocumentModelRequest,
  Admin_GetAllDocumentModelResponse
>(
  Admin_GetAllDocumentModelResponse,
  'get',
  '/api/Admin/AllDocumentModel/{dbOnly}'
);

export interface Admin_UpdateDocumentModelRequest {
  query: {
    companyId?: number;
  };
  body: m.DocumentTypeModel;
}
export type Admin_UpdateDocumentModelResponse = Record<string, unknown>;
export const Admin_UpdateDocumentModelResponse = t.UnknownRecord;

/* Admin_UpdateDocumentModel */
export const Admin_UpdateDocumentModelReader = u.controllerFactory<
  Admin_UpdateDocumentModelRequest,
  Admin_UpdateDocumentModelResponse
>(Admin_UpdateDocumentModelResponse, 'post', '/api/Admin/UpdateDocumentModel');

export interface Admin_InsertDocumentModelRequest {
  query: {
    companyId?: number;
  };
  body: m.DocumentTypeModel;
}
export type Admin_InsertDocumentModelResponse = m.DocumentTypeModel;
export const Admin_InsertDocumentModelResponse = m.DocumentTypeModel;

/* Admin_InsertDocumentModel */
export const Admin_InsertDocumentModelReader = u.controllerFactory<
  Admin_InsertDocumentModelRequest,
  Admin_InsertDocumentModelResponse
>(Admin_InsertDocumentModelResponse, 'post', '/api/Admin/InsertDocumentModel');

export interface Admin_DeleteDocumentModelRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
    replaceWithDocumentTypeId?: number;
  };
}
export type Admin_DeleteDocumentModelResponse = Record<string, unknown>;
export const Admin_DeleteDocumentModelResponse = t.UnknownRecord;

/* Admin_DeleteDocumentModel */
export const Admin_DeleteDocumentModelReader = u.controllerFactory<
  Admin_DeleteDocumentModelRequest,
  Admin_DeleteDocumentModelResponse
>(
  Admin_DeleteDocumentModelResponse,
  'delete',
  '/api/Admin/DeleteDocumentModel/{id}'
);

export interface Admin_UpdateDocumentOrderRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanPurposeModel;
}
export type Admin_UpdateDocumentOrderResponse = Record<string, unknown>;
export const Admin_UpdateDocumentOrderResponse = t.UnknownRecord;

/* Admin_UpdateDocumentOrder */
export const Admin_UpdateDocumentOrderReader = u.controllerFactory<
  Admin_UpdateDocumentOrderRequest,
  Admin_UpdateDocumentOrderResponse
>(Admin_UpdateDocumentOrderResponse, 'post', '/api/Admin/UpdateDocumentOrder');

export interface Admin_GetAllAgentTypeRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllAgentTypeResponse = Array<m.AgentTypeModel>;
export const Admin_GetAllAgentTypeResponse = t.array(m.AgentTypeModel);

/* Admin_GetAllAgentType */
export const Admin_GetAllAgentTypeReader = u.controllerFactory<
  Admin_GetAllAgentTypeRequest,
  Admin_GetAllAgentTypeResponse
>(Admin_GetAllAgentTypeResponse, 'get', '/api/Admin/AllAgentType');

export interface Admin_UpdateAgentTypeRequest {
  query: {
    companyId?: number;
  };
  body: m.AgentTypeModel;
}
export type Admin_UpdateAgentTypeResponse = Record<string, unknown>;
export const Admin_UpdateAgentTypeResponse = t.UnknownRecord;

/* Admin_UpdateAgentType */
export const Admin_UpdateAgentTypeReader = u.controllerFactory<
  Admin_UpdateAgentTypeRequest,
  Admin_UpdateAgentTypeResponse
>(Admin_UpdateAgentTypeResponse, 'post', '/api/Admin/UpdateAgentType');

export interface Admin_InsertAgentTypeRequest {
  query: {
    companyId?: number;
  };
  body: m.AgentTypeModel;
}
export type Admin_InsertAgentTypeResponse = m.AgentTypeModel;
export const Admin_InsertAgentTypeResponse = m.AgentTypeModel;

/* Admin_InsertAgentType */
export const Admin_InsertAgentTypeReader = u.controllerFactory<
  Admin_InsertAgentTypeRequest,
  Admin_InsertAgentTypeResponse
>(Admin_InsertAgentTypeResponse, 'post', '/api/Admin/InsertAgentType');

export interface Admin_DeleteAgentTypeRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteAgentTypeResponse = Record<string, unknown>;
export const Admin_DeleteAgentTypeResponse = t.UnknownRecord;

/* Admin_DeleteAgentType */
export const Admin_DeleteAgentTypeReader = u.controllerFactory<
  Admin_DeleteAgentTypeRequest,
  Admin_DeleteAgentTypeResponse
>(Admin_DeleteAgentTypeResponse, 'delete', '/api/Admin/DeleteAgentType/{id}');

export interface Admin_UpdateAgentTypeOrderRequest {
  query: {
    companyId?: number;
  };
  body: m.LoanPurposeModel;
}
export type Admin_UpdateAgentTypeOrderResponse = Record<string, unknown>;
export const Admin_UpdateAgentTypeOrderResponse = t.UnknownRecord;

/* Admin_UpdateAgentTypeOrder */
export const Admin_UpdateAgentTypeOrderReader = u.controllerFactory<
  Admin_UpdateAgentTypeOrderRequest,
  Admin_UpdateAgentTypeOrderResponse
>(
  Admin_UpdateAgentTypeOrderResponse,
  'post',
  '/api/Admin/UpdateAgentTypeOrder'
);

export interface Admin_GetAllLenderRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllLenderResponse = Array<m.LenderModelView>;
export const Admin_GetAllLenderResponse = t.array(m.LenderModelView);

/* Admin_GetAllLender */
export const Admin_GetAllLenderReader = u.controllerFactory<
  Admin_GetAllLenderRequest,
  Admin_GetAllLenderResponse
>(Admin_GetAllLenderResponse, 'get', '/api/Admin/AllLender');

export interface Admin_UpdateLenderRequest {
  query: {
    companyId?: number;
  };
  body: m.LenderModelView;
}
export type Admin_UpdateLenderResponse = Record<string, unknown>;
export const Admin_UpdateLenderResponse = t.UnknownRecord;

/* Admin_UpdateLender */
export const Admin_UpdateLenderReader = u.controllerFactory<
  Admin_UpdateLenderRequest,
  Admin_UpdateLenderResponse
>(Admin_UpdateLenderResponse, 'post', '/api/Admin/UpdateLender');

export interface Admin_InsertLenderRequest {
  query: {
    companyId?: number;
  };
  body: m.LenderModelView;
}
export type Admin_InsertLenderResponse = m.LenderModelView;
export const Admin_InsertLenderResponse = m.LenderModelView;

/* Admin_InsertLender */
export const Admin_InsertLenderReader = u.controllerFactory<
  Admin_InsertLenderRequest,
  Admin_InsertLenderResponse
>(Admin_InsertLenderResponse, 'post', '/api/Admin/InsertLender');

export interface Admin_DeleteLenderRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteLenderResponse = Record<string, unknown>;
export const Admin_DeleteLenderResponse = t.UnknownRecord;

/* Admin_DeleteLender */
export const Admin_DeleteLenderReader = u.controllerFactory<
  Admin_DeleteLenderRequest,
  Admin_DeleteLenderResponse
>(Admin_DeleteLenderResponse, 'delete', '/api/Admin/DeleteLender/{id}');

export interface Admin_GetAllStackingOrderRequest {
  query: {
    companyId?: number;
  };
}
export type Admin_GetAllStackingOrderResponse = Array<m.StackingOrderModel>;
export const Admin_GetAllStackingOrderResponse = t.array(m.StackingOrderModel);

/* Admin_GetAllStackingOrder */
export const Admin_GetAllStackingOrderReader = u.controllerFactory<
  Admin_GetAllStackingOrderRequest,
  Admin_GetAllStackingOrderResponse
>(Admin_GetAllStackingOrderResponse, 'get', '/api/Admin/AllStackingOrder');

export interface Admin_GetStackingOrderInfoRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_GetStackingOrderInfoResponse = m.StackingOrderModel;
export const Admin_GetStackingOrderInfoResponse = m.StackingOrderModel;

/* Admin_GetStackingOrderInfo */
export const Admin_GetStackingOrderInfoReader = u.controllerFactory<
  Admin_GetStackingOrderInfoRequest,
  Admin_GetStackingOrderInfoResponse
>(
  Admin_GetStackingOrderInfoResponse,
  'get',
  '/api/Admin/StackingOrderInfo/{id}'
);

export interface Admin_UpdateStackingOrderRequest {
  query: {
    companyId?: number;
  };
  body: m.StackingOrderModel;
}
export type Admin_UpdateStackingOrderResponse = Record<string, unknown>;
export const Admin_UpdateStackingOrderResponse = t.UnknownRecord;

/* Admin_UpdateStackingOrder */
export const Admin_UpdateStackingOrderReader = u.controllerFactory<
  Admin_UpdateStackingOrderRequest,
  Admin_UpdateStackingOrderResponse
>(Admin_UpdateStackingOrderResponse, 'post', '/api/Admin/UpdateStackingOrder');

export interface Admin_InsertStackingOrderRequest {
  query: {
    companyId?: number;
  };
  body: m.StackingOrderModel;
}
export type Admin_InsertStackingOrderResponse = m.StackingOrderModel;
export const Admin_InsertStackingOrderResponse = m.StackingOrderModel;

/* Admin_InsertStackingOrder */
export const Admin_InsertStackingOrderReader = u.controllerFactory<
  Admin_InsertStackingOrderRequest,
  Admin_InsertStackingOrderResponse
>(Admin_InsertStackingOrderResponse, 'post', '/api/Admin/InsertStackingOrder');

export interface Admin_DeleteStackingOrderRequest {
  path: {
    id: number;
  };
  query: {
    companyId?: number;
  };
}
export type Admin_DeleteStackingOrderResponse = Record<string, unknown>;
export const Admin_DeleteStackingOrderResponse = t.UnknownRecord;

/* Admin_DeleteStackingOrder */
export const Admin_DeleteStackingOrderReader = u.controllerFactory<
  Admin_DeleteStackingOrderRequest,
  Admin_DeleteStackingOrderResponse
>(
  Admin_DeleteStackingOrderResponse,
  'delete',
  '/api/Admin/DeleteStackingOrder/{id}'
);

export interface Admin_PostSaveOrgChartRequest {
  query: {
    companyId?: number;
  };
  body: Array<m.OrgChartModel>;
}
export type Admin_PostSaveOrgChartResponse = Record<string, unknown>;
export const Admin_PostSaveOrgChartResponse = t.UnknownRecord;

/* Admin_PostSaveOrgChart */
export const Admin_PostSaveOrgChartReader = u.controllerFactory<
  Admin_PostSaveOrgChartRequest,
  Admin_PostSaveOrgChartResponse
>(Admin_PostSaveOrgChartResponse, 'post', '/api/Admin/SaveOrgChart');

export interface Admin_SaveSystemLevelRequest {
  query: {
    companyId?: number;
  };
  body: m.SystemLevel;
}
export type Admin_SaveSystemLevelResponse = m.SystemLevel;
export const Admin_SaveSystemLevelResponse = m.SystemLevel;

/* Admin_SaveSystemLevel */
export const Admin_SaveSystemLevelReader = u.controllerFactory<
  Admin_SaveSystemLevelRequest,
  Admin_SaveSystemLevelResponse
>(Admin_SaveSystemLevelResponse, 'post', '/api/Admin/SaveSystemLevel');

export type Agent_GetAllAgentResponse = Array<m.AgentViewModel>;
export const Agent_GetAllAgentResponse = t.array(m.AgentViewModel);

/* Agent_GetAllAgent */
export const Agent_GetAllAgentReader = u.requestlessControllerFactory<
  Agent_GetAllAgentResponse
>(Agent_GetAllAgentResponse, 'get', '/api/Agent/AllAgent');

export type Agent_GetAllReferralSourcesResponse = Array<m.ReferralSourceModel>;
export const Agent_GetAllReferralSourcesResponse = t.array(
  m.ReferralSourceModel
);

/* Agent_GetAllReferralSources */
export const Agent_GetAllReferralSourcesReader = u.requestlessControllerFactory<
  Agent_GetAllReferralSourcesResponse
>(Agent_GetAllReferralSourcesResponse, 'get', '/api/Agent/AllReferralSources');

export interface Agent_GetAgentbyIdRequest {
  path: {
    id: number;
  };
}
export type Agent_GetAgentbyIdResponse = m.AgentFull;
export const Agent_GetAgentbyIdResponse = m.AgentFull;

/* Agent_GetAgentbyId */
export const Agent_GetAgentbyIdReader = u.controllerFactory<
  Agent_GetAgentbyIdRequest,
  Agent_GetAgentbyIdResponse
>(Agent_GetAgentbyIdResponse, 'get', '/api/Agent/GetAgent/{id}');

export interface Agent_UpsertAgentRequest {
  path: {
    sendInvite: boolean;
  };
  body: m.AgentFull;
}
export type Agent_UpsertAgentResponse = m.AgentFull;
export const Agent_UpsertAgentResponse = m.AgentFull;

/* Agent_UpsertAgent */
export const Agent_UpsertAgentReader = u.controllerFactory<
  Agent_UpsertAgentRequest,
  Agent_UpsertAgentResponse
>(Agent_UpsertAgentResponse, 'post', '/api/Agent/UpsertAgent/{sendInvite}');

export interface Agent_InviteAgentRequest {
  path: {
    agentId: number;
  };
}
export type Agent_InviteAgentResponse = Record<string, unknown>;
export const Agent_InviteAgentResponse = t.UnknownRecord;

/* Agent_InviteAgent */
export const Agent_InviteAgentReader = u.controllerFactory<
  Agent_InviteAgentRequest,
  Agent_InviteAgentResponse
>(Agent_InviteAgentResponse, 'post', '/api/Agent/InviteAgent/{agentId}');

export interface Agent_DeleteAgentRequest {
  path: {
    agentId: number;
  };
}
export type Agent_DeleteAgentResponse = Record<string, unknown>;
export const Agent_DeleteAgentResponse = t.UnknownRecord;

/* Agent_DeleteAgent */
export const Agent_DeleteAgentReader = u.controllerFactory<
  Agent_DeleteAgentRequest,
  Agent_DeleteAgentResponse
>(Agent_DeleteAgentResponse, 'delete', '/api/Agent/DeleteAgent/{agentId}');

export interface Agent_GetAllApplicationInfoRequest {
  path: {
    agentId: number;
  };
}
export type Agent_GetAllApplicationInfoResponse = Array<
  m.PipelineApplicationView
>;
export const Agent_GetAllApplicationInfoResponse = t.array(
  m.PipelineApplicationView
);

/* Agent_GetAllApplicationInfo */
export const Agent_GetAllApplicationInfoReader = u.controllerFactory<
  Agent_GetAllApplicationInfoRequest,
  Agent_GetAllApplicationInfoResponse
>(
  Agent_GetAllApplicationInfoResponse,
  'get',
  '/api/Agent/{agentId}/GetAllApplicationInfo'
);

export type Agent_GetAllAgentListsResponse = Array<m.AgentListViewModel>;
export const Agent_GetAllAgentListsResponse = t.array(m.AgentListViewModel);

/* Agent_GetAllAgentLists */
export const Agent_GetAllAgentListsReader = u.requestlessControllerFactory<
  Agent_GetAllAgentListsResponse
>(Agent_GetAllAgentListsResponse, 'get', '/api/Agent/lists');

export interface Agent_InsertAgentListRequest {
  body: m.AgentListViewModel;
}
export type Agent_InsertAgentListResponse = m.AgentListViewModel;
export const Agent_InsertAgentListResponse = m.AgentListViewModel;

/* Agent_InsertAgentList */
export const Agent_InsertAgentListReader = u.controllerFactory<
  Agent_InsertAgentListRequest,
  Agent_InsertAgentListResponse
>(Agent_InsertAgentListResponse, 'post', '/api/Agent/lists');

export interface Agent_GetAgentListsByAgentIdRequest {
  path: {
    agentId: number;
  };
}
export type Agent_GetAgentListsByAgentIdResponse = Array<m.AgentListViewModel>;
export const Agent_GetAgentListsByAgentIdResponse = t.array(
  m.AgentListViewModel
);

/* Agent_GetAgentListsByAgentId */
export const Agent_GetAgentListsByAgentIdReader = u.controllerFactory<
  Agent_GetAgentListsByAgentIdRequest,
  Agent_GetAgentListsByAgentIdResponse
>(Agent_GetAgentListsByAgentIdResponse, 'get', '/api/Agent/{agentId}/lists');

export interface Agent_GetAgentListByIdRequest {
  path: {
    agentListId: number;
  };
}
export type Agent_GetAgentListByIdResponse = m.AgentListViewModel;
export const Agent_GetAgentListByIdResponse = m.AgentListViewModel;

/* Agent_GetAgentListById */
export const Agent_GetAgentListByIdReader = u.controllerFactory<
  Agent_GetAgentListByIdRequest,
  Agent_GetAgentListByIdResponse
>(Agent_GetAgentListByIdResponse, 'get', '/api/Agent/lists/{agentListId}');

export interface Agent_UpdateAgentListRequest {
  path: {
    agentListId: number;
  };
  body: m.AgentListViewModel;
}
export type Agent_UpdateAgentListResponse = m.AgentListViewModel;
export const Agent_UpdateAgentListResponse = m.AgentListViewModel;

/* Agent_UpdateAgentList */
export const Agent_UpdateAgentListReader = u.controllerFactory<
  Agent_UpdateAgentListRequest,
  Agent_UpdateAgentListResponse
>(Agent_UpdateAgentListResponse, 'post', '/api/Agent/lists/{agentListId}');

export interface Agent_DeleteAgentListRequest {
  path: {
    agentListId: number;
  };
}
export type Agent_DeleteAgentListResponse = Record<string, unknown>;
export const Agent_DeleteAgentListResponse = t.UnknownRecord;

/* Agent_DeleteAgentList */
export const Agent_DeleteAgentListReader = u.controllerFactory<
  Agent_DeleteAgentListRequest,
  Agent_DeleteAgentListResponse
>(Agent_DeleteAgentListResponse, 'delete', '/api/Agent/lists/{agentListId}');

export interface Agent_GetAgentsByAgentListIdRequest {
  path: {
    agentListId: number;
  };
}
export type Agent_GetAgentsByAgentListIdResponse = Array<m.AgentViewModel>;
export const Agent_GetAgentsByAgentListIdResponse = t.array(m.AgentViewModel);

/* Agent_GetAgentsByAgentListId */
export const Agent_GetAgentsByAgentListIdReader = u.controllerFactory<
  Agent_GetAgentsByAgentListIdRequest,
  Agent_GetAgentsByAgentListIdResponse
>(
  Agent_GetAgentsByAgentListIdResponse,
  'get',
  '/api/Agent/lists/{agentListId}/agents'
);

export interface Agent_AddAgentToAgentListRequest {
  path: {
    agentListId: number;
    agentId: number;
  };
}
export type Agent_AddAgentToAgentListResponse = Record<string, unknown>;
export const Agent_AddAgentToAgentListResponse = t.UnknownRecord;

/* Agent_AddAgentToAgentList */
export const Agent_AddAgentToAgentListReader = u.controllerFactory<
  Agent_AddAgentToAgentListRequest,
  Agent_AddAgentToAgentListResponse
>(
  Agent_AddAgentToAgentListResponse,
  'post',
  '/api/Agent/lists/{agentListId}/agents/{agentId}'
);

export interface Agent_RemoveAgentFromAgentListRequest {
  path: {
    agentListId: number;
    agentId: number;
  };
}
export type Agent_RemoveAgentFromAgentListResponse = Record<string, unknown>;
export const Agent_RemoveAgentFromAgentListResponse = t.UnknownRecord;

/* Agent_RemoveAgentFromAgentList */
export const Agent_RemoveAgentFromAgentListReader = u.controllerFactory<
  Agent_RemoveAgentFromAgentListRequest,
  Agent_RemoveAgentFromAgentListResponse
>(
  Agent_RemoveAgentFromAgentListResponse,
  'delete',
  '/api/Agent/lists/{agentListId}/agents/{agentId}'
);

export interface Agent_AddAgentNoteRequest {
  path: {
    agentId: number;
  };
  body: m.AgentNoteViewModel;
}
export type Agent_AddAgentNoteResponse = Record<string, unknown>;
export const Agent_AddAgentNoteResponse = t.UnknownRecord;

/* Agent_AddAgentNote */
export const Agent_AddAgentNoteReader = u.controllerFactory<
  Agent_AddAgentNoteRequest,
  Agent_AddAgentNoteResponse
>(Agent_AddAgentNoteResponse, 'post', '/api/Agent/{agentId}/note');

export interface Agent_GetAgentNotesRequest {
  path: {
    agentId: number;
  };
}
export type Agent_GetAgentNotesResponse = Array<m.AgentNoteViewModel>;
export const Agent_GetAgentNotesResponse = t.array(m.AgentNoteViewModel);

/* Agent_GetAgentNotes */
export const Agent_GetAgentNotesReader = u.controllerFactory<
  Agent_GetAgentNotesRequest,
  Agent_GetAgentNotesResponse
>(Agent_GetAgentNotesResponse, 'get', '/api/Agent/{agentId}/notes');

export interface AgentPortal_ConfirmRegistrationTokenRequest {
  body: m.ConfirmRegisterRequestModel;
}
export type AgentPortal_ConfirmRegistrationTokenResponse = m.RegisterModel;
export const AgentPortal_ConfirmRegistrationTokenResponse = m.RegisterModel;

/* AgentPortal_ConfirmRegistrationToken */
export const AgentPortal_ConfirmRegistrationTokenReader = u.controllerFactory<
  AgentPortal_ConfirmRegistrationTokenRequest,
  AgentPortal_ConfirmRegistrationTokenResponse
>(
  AgentPortal_ConfirmRegistrationTokenResponse,
  'post',
  '/api/AgentPortal/ConfirmRegistrationToken'
);

export interface AgentPortal_ConfirmRegistrationRequest {
  body: m.RegisterModel;
}
export type AgentPortal_ConfirmRegistrationResponse = boolean;
export const AgentPortal_ConfirmRegistrationResponse = t.boolean;

/* AgentPortal_ConfirmRegistration */
export const AgentPortal_ConfirmRegistrationReader = u.controllerFactory<
  AgentPortal_ConfirmRegistrationRequest,
  AgentPortal_ConfirmRegistrationResponse
>(
  AgentPortal_ConfirmRegistrationResponse,
  'post',
  '/api/AgentPortal/ConfirmRegistration'
);

export interface AgentPortal_SendEmailResetPasswordRequest {
  body: m.ForgotPasswordBindingModel;
}
export type AgentPortal_SendEmailResetPasswordResponse = boolean;
export const AgentPortal_SendEmailResetPasswordResponse = t.boolean;

/* AgentPortal_SendEmailResetPassword */
export const AgentPortal_SendEmailResetPasswordReader = u.controllerFactory<
  AgentPortal_SendEmailResetPasswordRequest,
  AgentPortal_SendEmailResetPasswordResponse
>(
  AgentPortal_SendEmailResetPasswordResponse,
  'post',
  '/api/AgentPortal/SendEmailResetPassword'
);

export interface AgentPortal_ResetPasswordRequest {
  body: m.ResetPasswordBindingModel;
}
export type AgentPortal_ResetPasswordResponse = Record<string, unknown>;
export const AgentPortal_ResetPasswordResponse = t.UnknownRecord;

/* AgentPortal_ResetPassword */
export const AgentPortal_ResetPasswordReader = u.controllerFactory<
  AgentPortal_ResetPasswordRequest,
  AgentPortal_ResetPasswordResponse
>(AgentPortal_ResetPasswordResponse, 'post', '/api/AgentPortal/ResetPassword');

export type AgentPortal_GetApplicationsForUserResponse = Array<
  m.ApplicationView
>;
export const AgentPortal_GetApplicationsForUserResponse = t.array(
  m.ApplicationView
);

/* AgentPortal_GetApplicationsForUser */
export const AgentPortal_GetApplicationsForUserReader = u.requestlessControllerFactory<
  AgentPortal_GetApplicationsForUserResponse
>(
  AgentPortal_GetApplicationsForUserResponse,
  'get',
  '/api/AgentPortal/GetApplicationsForUser'
);

export type AgentPortal_GetReferralsForUserResponse = Array<m.ReferralView>;
export const AgentPortal_GetReferralsForUserResponse = t.array(m.ReferralView);

/* AgentPortal_GetReferralsForUser */
export const AgentPortal_GetReferralsForUserReader = u.requestlessControllerFactory<
  AgentPortal_GetReferralsForUserResponse
>(
  AgentPortal_GetReferralsForUserResponse,
  'get',
  '/api/AgentPortal/GetReferralsForUser'
);

export type AgentPortal_GetPortalContentResponse = m.PortalContentViewModel;
export const AgentPortal_GetPortalContentResponse = m.PortalContentViewModel;

/* AgentPortal_GetPortalContent */
export const AgentPortal_GetPortalContentReader = u.requestlessControllerFactory<
  AgentPortal_GetPortalContentResponse
>(
  AgentPortal_GetPortalContentResponse,
  'get',
  '/api/AgentPortal/GetPortalContent'
);

export interface AgentPortal_GetLoanDataForAppIdRequest {
  path: {
    appId: number;
  };
}
export type AgentPortal_GetLoanDataForAppIdResponse = m.ApplicationView;
export const AgentPortal_GetLoanDataForAppIdResponse = m.ApplicationView;

/* AgentPortal_GetLoanDataForAppId */
export const AgentPortal_GetLoanDataForAppIdReader = u.controllerFactory<
  AgentPortal_GetLoanDataForAppIdRequest,
  AgentPortal_GetLoanDataForAppIdResponse
>(
  AgentPortal_GetLoanDataForAppIdResponse,
  'get',
  '/api/AgentPortal/GetLoanDataForAppId/{appId}'
);

export interface AgentPortal_GetTasksforAppIdRequest {
  path: {
    appId: number;
  };
}
export type AgentPortal_GetTasksforAppIdResponse = m.PortalTasks;
export const AgentPortal_GetTasksforAppIdResponse = m.PortalTasks;

/* AgentPortal_GetTasksforAppId */
export const AgentPortal_GetTasksforAppIdReader = u.controllerFactory<
  AgentPortal_GetTasksforAppIdRequest,
  AgentPortal_GetTasksforAppIdResponse
>(
  AgentPortal_GetTasksforAppIdResponse,
  'get',
  '/api/AgentPortal/GetTasksForAppId/{appId}'
);

export interface AgentPortal_GetPrequalDetailRequest {
  path: {
    appId: number;
  };
}
export type AgentPortal_GetPrequalDetailResponse = m.PrequalDetailViewModel;
export const AgentPortal_GetPrequalDetailResponse = m.PrequalDetailViewModel;

/* AgentPortal_GetPrequalDetail */
export const AgentPortal_GetPrequalDetailReader = u.controllerFactory<
  AgentPortal_GetPrequalDetailRequest,
  AgentPortal_GetPrequalDetailResponse
>(
  AgentPortal_GetPrequalDetailResponse,
  'get',
  '/api/AgentPortal/GetPrequalDetailForAppId/{appId}'
);

export interface AgentPortal_GeneratePrequalLetterRequest {
  path: {
    appId: number;
  };
  body: m.GeneratePrequalLetterRequest;
}
export type AgentPortal_GeneratePrequalLetterResponse = m.GeneratePrequalLetterResponse;
export const AgentPortal_GeneratePrequalLetterResponse =
  m.GeneratePrequalLetterResponse;

/* AgentPortal_GeneratePrequalLetter */
export const AgentPortal_GeneratePrequalLetterReader = u.controllerFactory<
  AgentPortal_GeneratePrequalLetterRequest,
  AgentPortal_GeneratePrequalLetterResponse
>(
  AgentPortal_GeneratePrequalLetterResponse,
  'post',
  '/api/AgentPortal/GeneratePrequalLetterForAppId/{appId}'
);

export interface AgentPortal_GetAgentContactInfoForApplicationRequest {
  path: {
    appId: number;
  };
}
export type AgentPortal_GetAgentContactInfoForApplicationResponse = m.AgentContact;
export const AgentPortal_GetAgentContactInfoForApplicationResponse =
  m.AgentContact;

/* AgentPortal_GetAgentContactInfoForApplication */
export const AgentPortal_GetAgentContactInfoForApplicationReader = u.controllerFactory<
  AgentPortal_GetAgentContactInfoForApplicationRequest,
  AgentPortal_GetAgentContactInfoForApplicationResponse
>(
  AgentPortal_GetAgentContactInfoForApplicationResponse,
  'get',
  '/api/AgentPortal/GetAgentContactInfoForApplication/{appId}'
);

export interface AgentPortal_ProgressTaskStatusRequest {
  path: {
    taskId: number;
  };
}
export type AgentPortal_ProgressTaskStatusResponse = m.LoanDocTaskViewModel;
export const AgentPortal_ProgressTaskStatusResponse = m.LoanDocTaskViewModel;

/* AgentPortal_ProgressTaskStatus */
export const AgentPortal_ProgressTaskStatusReader = u.controllerFactory<
  AgentPortal_ProgressTaskStatusRequest,
  AgentPortal_ProgressTaskStatusResponse
>(
  AgentPortal_ProgressTaskStatusResponse,
  'post',
  '/api/AgentPortal/ProgressTaskStatus/{taskId}'
);

export interface AgentPortal_UploadDocumentRequest {
  path: {
    taskId: number;
    borrowerNote: string;
  };
  query: {
    progressStatus?: boolean;
  };
}
export type AgentPortal_UploadDocumentResponse = boolean;
export const AgentPortal_UploadDocumentResponse = t.boolean;

/* AgentPortal_UploadDocument */
export const AgentPortal_UploadDocumentReader = u.controllerFactory<
  AgentPortal_UploadDocumentRequest,
  AgentPortal_UploadDocumentResponse
>(
  AgentPortal_UploadDocumentResponse,
  'post',
  '/api/AgentPortal/UploadDocument/{taskId}/{borrowerNote}'
);

export type AgentPortal_GetReferralAgentsResponse = Array<m.ReferralAgent>;
export const AgentPortal_GetReferralAgentsResponse = t.array(m.ReferralAgent);

/* AgentPortal_GetReferralAgents */
export const AgentPortal_GetReferralAgentsReader = u.requestlessControllerFactory<
  AgentPortal_GetReferralAgentsResponse
>(
  AgentPortal_GetReferralAgentsResponse,
  'get',
  '/api/AgentPortal/ReferralAgents'
);

export interface AgentPortal_ReferAFriendRequest {
  body: m.ReferralModel;
}
export type AgentPortal_ReferAFriendResponse = boolean;
export const AgentPortal_ReferAFriendResponse = t.boolean;

/* AgentPortal_ReferAFriend */
export const AgentPortal_ReferAFriendReader = u.controllerFactory<
  AgentPortal_ReferAFriendRequest,
  AgentPortal_ReferAFriendResponse
>(AgentPortal_ReferAFriendResponse, 'post', '/api/AgentPortal/ReferAFriend');

export interface AgentPortal_RequestACallbackRequest {
  body: m.CallbackModel;
}
export type AgentPortal_RequestACallbackResponse = boolean;
export const AgentPortal_RequestACallbackResponse = t.boolean;

/* AgentPortal_RequestACallback */
export const AgentPortal_RequestACallbackReader = u.controllerFactory<
  AgentPortal_RequestACallbackRequest,
  AgentPortal_RequestACallbackResponse
>(
  AgentPortal_RequestACallbackResponse,
  'post',
  '/api/AgentPortal/RequestACallback'
);

export type AgentPortal_GetLiveDataResponse = m.PortalLiveData;
export const AgentPortal_GetLiveDataResponse = m.PortalLiveData;

/* AgentPortal_GetLiveData */
export const AgentPortal_GetLiveDataReader = u.requestlessControllerFactory<
  AgentPortal_GetLiveDataResponse
>(AgentPortal_GetLiveDataResponse, 'get', '/api/AgentPortal/LiveData');

export type Borrower_GetAllBorrowerResponse = Array<m.BorrowerDto>;
export const Borrower_GetAllBorrowerResponse = t.array(m.BorrowerDto);

/* Borrower_GetAllBorrower */
export const Borrower_GetAllBorrowerReader = u.requestlessControllerFactory<
  Borrower_GetAllBorrowerResponse
>(Borrower_GetAllBorrowerResponse, 'get', '/api/Borrower/AllBorrower');

export interface Borrower_UpsertBorrowerRequest {
  path: {
    sendInvite: boolean;
  };
  body: m.BorrowerFull;
}
export type Borrower_UpsertBorrowerResponse = m.BorrowerFull;
export const Borrower_UpsertBorrowerResponse = m.BorrowerFull;

/* Borrower_UpsertBorrower */
export const Borrower_UpsertBorrowerReader = u.controllerFactory<
  Borrower_UpsertBorrowerRequest,
  Borrower_UpsertBorrowerResponse
>(
  Borrower_UpsertBorrowerResponse,
  'post',
  '/api/Borrower/UpsertBorrower/{sendInvite}'
);

export interface Borrower_InviteBorrowerRequest {
  path: {
    borrowerId: number;
  };
}
export type Borrower_InviteBorrowerResponse = Record<string, unknown>;
export const Borrower_InviteBorrowerResponse = t.UnknownRecord;

/* Borrower_InviteBorrower */
export const Borrower_InviteBorrowerReader = u.controllerFactory<
  Borrower_InviteBorrowerRequest,
  Borrower_InviteBorrowerResponse
>(
  Borrower_InviteBorrowerResponse,
  'post',
  '/api/Borrower/InviteBorrower/{borrowerId}'
);

export interface Borrower_GetBorrowerRequest {
  path: {
    borrowerId: number;
    isAdmin: boolean;
  };
}
export type Borrower_GetBorrowerResponse = m.BorrowerFull;
export const Borrower_GetBorrowerResponse = m.BorrowerFull;

/* Borrower_GetBorrower */
export const Borrower_GetBorrowerReader = u.controllerFactory<
  Borrower_GetBorrowerRequest,
  Borrower_GetBorrowerResponse
>(Borrower_GetBorrowerResponse, 'get', '/api/Borrower/{borrowerId}/{isAdmin}');

export interface Borrower_DeleteBorrowerRequest {
  path: {
    borrowerId: number;
  };
}
export type Borrower_DeleteBorrowerResponse = Record<string, unknown>;
export const Borrower_DeleteBorrowerResponse = t.UnknownRecord;

/* Borrower_DeleteBorrower */
export const Borrower_DeleteBorrowerReader = u.controllerFactory<
  Borrower_DeleteBorrowerRequest,
  Borrower_DeleteBorrowerResponse
>(Borrower_DeleteBorrowerResponse, 'delete', '/api/Borrower/{borrowerId}');

export interface Borrower_AddNewApplicationRequest {
  path: {
    borrowerId: number;
    shouldSendCoBorrInvite: boolean;
  };
  body: m.NewApplicationRequest;
}
export type Borrower_AddNewApplicationResponse = m.ApplicationModel;
export const Borrower_AddNewApplicationResponse = m.ApplicationModel;

/* Borrower_AddNewApplication */
export const Borrower_AddNewApplicationReader = u.controllerFactory<
  Borrower_AddNewApplicationRequest,
  Borrower_AddNewApplicationResponse
>(
  Borrower_AddNewApplicationResponse,
  'post',
  '/api/Borrower/{borrowerId}/AddNewApplication/{shouldSendCoBorrInvite}'
);

export interface Borrower_GetAllApplicationInfoRequest {
  path: {
    borrowerId: number;
  };
}
export type Borrower_GetAllApplicationInfoResponse = Array<
  m.ApplicationViewModel
>;
export const Borrower_GetAllApplicationInfoResponse = t.array(
  m.ApplicationViewModel
);

/* Borrower_GetAllApplicationInfo */
export const Borrower_GetAllApplicationInfoReader = u.controllerFactory<
  Borrower_GetAllApplicationInfoRequest,
  Borrower_GetAllApplicationInfoResponse
>(
  Borrower_GetAllApplicationInfoResponse,
  'get',
  '/api/Borrower/{borrowerId}/GetAllApplicationInfo'
);

export interface Borrower_UpsertApplicationInfoRequest {
  path: {
    borrowerId: number;
  };
  body: m.UpsertApplicationInfoView;
}
export type Borrower_UpsertApplicationInfoResponse = m.LoanDocTaskModel;
export const Borrower_UpsertApplicationInfoResponse = m.LoanDocTaskModel;

/* Borrower_UpsertApplicationInfo */
export const Borrower_UpsertApplicationInfoReader = u.controllerFactory<
  Borrower_UpsertApplicationInfoRequest,
  Borrower_UpsertApplicationInfoResponse
>(
  Borrower_UpsertApplicationInfoResponse,
  'post',
  '/api/Borrower/{borrowerId}/UpsertApplicationInfo'
);

export interface Borrower_AllEmploymentInfoRequest {
  path: {
    borrowerId: number;
  };
}
export type Borrower_AllEmploymentInfoResponse = Array<m.EmploymentInfoModel>;
export const Borrower_AllEmploymentInfoResponse = t.array(
  m.EmploymentInfoModel
);

/* Borrower_AllEmploymentInfo */
export const Borrower_AllEmploymentInfoReader = u.controllerFactory<
  Borrower_AllEmploymentInfoRequest,
  Borrower_AllEmploymentInfoResponse
>(
  Borrower_AllEmploymentInfoResponse,
  'get',
  '/api/Borrower/{borrowerId}/AllEmploymentInfo'
);

export interface Borrower_AllCreditInfoRequest {
  path: {
    borrowerId: number;
  };
}
export type Borrower_AllCreditInfoResponse = m.CreditViewModel;
export const Borrower_AllCreditInfoResponse = m.CreditViewModel;

/* Borrower_AllCreditInfo */
export const Borrower_AllCreditInfoReader = u.controllerFactory<
  Borrower_AllCreditInfoRequest,
  Borrower_AllCreditInfoResponse
>(
  Borrower_AllCreditInfoResponse,
  'get',
  '/api/Borrower/{borrowerId}/AllCreditInfo'
);

export interface BorrowerPortal_CreateAccountRequest {
  path: {
    companyGuid: string;
    userGuid: string;
  };
  body: m.CreateAccountModel;
}
export type BorrowerPortal_CreateAccountResponse = m.CreateAccountResponseModel;
export const BorrowerPortal_CreateAccountResponse =
  m.CreateAccountResponseModel;

/* BorrowerPortal_CreateAccount */
export const BorrowerPortal_CreateAccountReader = u.controllerFactory<
  BorrowerPortal_CreateAccountRequest,
  BorrowerPortal_CreateAccountResponse
>(
  BorrowerPortal_CreateAccountResponse,
  'post',
  '/api/BorrowerPortal/CreateAccount/{companyGuid}/{userGuid}'
);

export interface BorrowerPortal_ConfirmRegistrationTokenRequest {
  body: m.ConfirmRegisterRequestModel;
}
export type BorrowerPortal_ConfirmRegistrationTokenResponse = m.RegisterModel;
export const BorrowerPortal_ConfirmRegistrationTokenResponse = m.RegisterModel;

/* BorrowerPortal_ConfirmRegistrationToken */
export const BorrowerPortal_ConfirmRegistrationTokenReader = u.controllerFactory<
  BorrowerPortal_ConfirmRegistrationTokenRequest,
  BorrowerPortal_ConfirmRegistrationTokenResponse
>(
  BorrowerPortal_ConfirmRegistrationTokenResponse,
  'post',
  '/api/BorrowerPortal/ConfirmRegistrationToken'
);

export interface BorrowerPortal_ConfirmRegistrationRequest {
  body: m.RegisterModel;
}
export type BorrowerPortal_ConfirmRegistrationResponse = boolean;
export const BorrowerPortal_ConfirmRegistrationResponse = t.boolean;

/* BorrowerPortal_ConfirmRegistration */
export const BorrowerPortal_ConfirmRegistrationReader = u.controllerFactory<
  BorrowerPortal_ConfirmRegistrationRequest,
  BorrowerPortal_ConfirmRegistrationResponse
>(
  BorrowerPortal_ConfirmRegistrationResponse,
  'post',
  '/api/BorrowerPortal/ConfirmRegistration'
);

export type BorrowerPortal_GetApplicationsForUserResponse = Array<
  m.ApplicationView
>;
export const BorrowerPortal_GetApplicationsForUserResponse = t.array(
  m.ApplicationView
);

/* BorrowerPortal_GetApplicationsForUser */
export const BorrowerPortal_GetApplicationsForUserReader = u.requestlessControllerFactory<
  BorrowerPortal_GetApplicationsForUserResponse
>(
  BorrowerPortal_GetApplicationsForUserResponse,
  'get',
  '/api/BorrowerPortal/GetApplicationsForUser'
);

export type BorrowerPortal_GetPortalContentResponse = m.PortalContentViewModel;
export const BorrowerPortal_GetPortalContentResponse = m.PortalContentViewModel;

/* BorrowerPortal_GetPortalContent */
export const BorrowerPortal_GetPortalContentReader = u.requestlessControllerFactory<
  BorrowerPortal_GetPortalContentResponse
>(
  BorrowerPortal_GetPortalContentResponse,
  'get',
  '/api/BorrowerPortal/GetPortalContent'
);

export interface BorrowerPortal_GetLoanDataForAppIdRequest {
  path: {
    appId: number;
  };
}
export type BorrowerPortal_GetLoanDataForAppIdResponse = m.ApplicationView;
export const BorrowerPortal_GetLoanDataForAppIdResponse = m.ApplicationView;

/* BorrowerPortal_GetLoanDataForAppId */
export const BorrowerPortal_GetLoanDataForAppIdReader = u.controllerFactory<
  BorrowerPortal_GetLoanDataForAppIdRequest,
  BorrowerPortal_GetLoanDataForAppIdResponse
>(
  BorrowerPortal_GetLoanDataForAppIdResponse,
  'get',
  '/api/BorrowerPortal/GetLoanDataForAppId/{appId}'
);

export interface BorrowerPortal_GetTasksforAppIdRequest {
  path: {
    appId: number;
  };
}
export type BorrowerPortal_GetTasksforAppIdResponse = m.PortalTasks;
export const BorrowerPortal_GetTasksforAppIdResponse = m.PortalTasks;

/* BorrowerPortal_GetTasksforAppId */
export const BorrowerPortal_GetTasksforAppIdReader = u.controllerFactory<
  BorrowerPortal_GetTasksforAppIdRequest,
  BorrowerPortal_GetTasksforAppIdResponse
>(
  BorrowerPortal_GetTasksforAppIdResponse,
  'get',
  '/api/BorrowerPortal/GetTasksforAppId/{appId}'
);

export interface BorrowerPortal_GetPrequalDetailRequest {
  path: {
    appId: number;
  };
}
export type BorrowerPortal_GetPrequalDetailResponse = m.PrequalDetailViewModel;
export const BorrowerPortal_GetPrequalDetailResponse = m.PrequalDetailViewModel;

/* BorrowerPortal_GetPrequalDetail */
export const BorrowerPortal_GetPrequalDetailReader = u.controllerFactory<
  BorrowerPortal_GetPrequalDetailRequest,
  BorrowerPortal_GetPrequalDetailResponse
>(
  BorrowerPortal_GetPrequalDetailResponse,
  'get',
  '/api/BorrowerPortal/GetPrequalDetailForAppId/{appId}'
);

export interface BorrowerPortal_GeneratePrequalLetterRequest {
  path: {
    appId: number;
  };
  body: m.GeneratePrequalLetterRequest;
}
export type BorrowerPortal_GeneratePrequalLetterResponse = m.GeneratePrequalLetterResponse;
export const BorrowerPortal_GeneratePrequalLetterResponse =
  m.GeneratePrequalLetterResponse;

/* BorrowerPortal_GeneratePrequalLetter */
export const BorrowerPortal_GeneratePrequalLetterReader = u.controllerFactory<
  BorrowerPortal_GeneratePrequalLetterRequest,
  BorrowerPortal_GeneratePrequalLetterResponse
>(
  BorrowerPortal_GeneratePrequalLetterResponse,
  'post',
  '/api/BorrowerPortal/GeneratePrequalLetterForAppId/{appId}'
);

export interface BorrowerPortal_SendEmailResetPasswordRequest {
  body: m.ForgotPasswordBindingModel;
}
export type BorrowerPortal_SendEmailResetPasswordResponse = boolean;
export const BorrowerPortal_SendEmailResetPasswordResponse = t.boolean;

/* BorrowerPortal_SendEmailResetPassword */
export const BorrowerPortal_SendEmailResetPasswordReader = u.controllerFactory<
  BorrowerPortal_SendEmailResetPasswordRequest,
  BorrowerPortal_SendEmailResetPasswordResponse
>(
  BorrowerPortal_SendEmailResetPasswordResponse,
  'post',
  '/api/BorrowerPortal/SendEmailResetPassword'
);

export interface BorrowerPortal_ResetPasswordRequest {
  body: m.ResetPasswordBindingModel;
}
export type BorrowerPortal_ResetPasswordResponse = Record<string, unknown>;
export const BorrowerPortal_ResetPasswordResponse = t.UnknownRecord;

/* BorrowerPortal_ResetPassword */
export const BorrowerPortal_ResetPasswordReader = u.controllerFactory<
  BorrowerPortal_ResetPasswordRequest,
  BorrowerPortal_ResetPasswordResponse
>(
  BorrowerPortal_ResetPasswordResponse,
  'post',
  '/api/BorrowerPortal/ResetPassword'
);

export interface BorrowerPortal_GetBorrowerContactInfoForApplicationRequest {
  path: {
    appId: number;
  };
}
export type BorrowerPortal_GetBorrowerContactInfoForApplicationResponse = m.BorrowerContact;
export const BorrowerPortal_GetBorrowerContactInfoForApplicationResponse =
  m.BorrowerContact;

/* BorrowerPortal_GetBorrowerContactInfoForApplication */
export const BorrowerPortal_GetBorrowerContactInfoForApplicationReader = u.controllerFactory<
  BorrowerPortal_GetBorrowerContactInfoForApplicationRequest,
  BorrowerPortal_GetBorrowerContactInfoForApplicationResponse
>(
  BorrowerPortal_GetBorrowerContactInfoForApplicationResponse,
  'get',
  '/api/BorrowerPortal/GetBorrowerContactInfoForApplication/{appId}'
);

export interface BorrowerPortal_GetMessagesRequest {
  path: {
    applicationId: number;
  };
}
export type BorrowerPortal_GetMessagesResponse = Array<m.MessageViewModel>;
export const BorrowerPortal_GetMessagesResponse = t.array(m.MessageViewModel);

/* BorrowerPortal_GetMessages */
export const BorrowerPortal_GetMessagesReader = u.controllerFactory<
  BorrowerPortal_GetMessagesRequest,
  BorrowerPortal_GetMessagesResponse
>(
  BorrowerPortal_GetMessagesResponse,
  'get',
  '/api/BorrowerPortal/GetMessages/{applicationId}'
);

export interface BorrowerPortal_GetTaskMessagesRequest {
  path: {
    loanDocTaskId: number;
  };
}
export type BorrowerPortal_GetTaskMessagesResponse = Array<m.MessageViewModel>;
export const BorrowerPortal_GetTaskMessagesResponse = t.array(
  m.MessageViewModel
);

/* BorrowerPortal_GetTaskMessages */
export const BorrowerPortal_GetTaskMessagesReader = u.controllerFactory<
  BorrowerPortal_GetTaskMessagesRequest,
  BorrowerPortal_GetTaskMessagesResponse
>(
  BorrowerPortal_GetTaskMessagesResponse,
  'get',
  '/api/BorrowerPortal/GetTaskMessages/{loanDocTaskId}'
);

export interface BorrowerPortal_PostMessageRequest {
  body: m.BorrowerMessageModel;
}
export type BorrowerPortal_PostMessageResponse = boolean;
export const BorrowerPortal_PostMessageResponse = t.boolean;

/* BorrowerPortal_PostMessage */
export const BorrowerPortal_PostMessageReader = u.controllerFactory<
  BorrowerPortal_PostMessageRequest,
  BorrowerPortal_PostMessageResponse
>(
  BorrowerPortal_PostMessageResponse,
  'post',
  '/api/BorrowerPortal/PostMessage'
);

export interface BorrowerPortal_ProgressTaskStatusRequest {
  path: {
    taskId: number;
  };
}
export type BorrowerPortal_ProgressTaskStatusResponse = m.LoanDocTaskViewModel;
export const BorrowerPortal_ProgressTaskStatusResponse = m.LoanDocTaskViewModel;

/* BorrowerPortal_ProgressTaskStatus */
export const BorrowerPortal_ProgressTaskStatusReader = u.controllerFactory<
  BorrowerPortal_ProgressTaskStatusRequest,
  BorrowerPortal_ProgressTaskStatusResponse
>(
  BorrowerPortal_ProgressTaskStatusResponse,
  'post',
  '/api/BorrowerPortal/ProgressTaskStatus/{taskId}'
);

export interface BorrowerPortal_UploadDocumentRequest {
  path: {
    taskId: number;
    borrowerNote: string;
  };
  query: {
    progressStatus?: boolean;
  };
}
export type BorrowerPortal_UploadDocumentResponse = boolean;
export const BorrowerPortal_UploadDocumentResponse = t.boolean;

/* BorrowerPortal_UploadDocument */
export const BorrowerPortal_UploadDocumentReader = u.controllerFactory<
  BorrowerPortal_UploadDocumentRequest,
  BorrowerPortal_UploadDocumentResponse
>(
  BorrowerPortal_UploadDocumentResponse,
  'post',
  '/api/BorrowerPortal/UploadDocument/{taskId}/{borrowerNote}'
);

export type BorrowerPortal_GetReferralAgentsResponse = Array<m.ReferralAgent>;
export const BorrowerPortal_GetReferralAgentsResponse = t.array(
  m.ReferralAgent
);

/* BorrowerPortal_GetReferralAgents */
export const BorrowerPortal_GetReferralAgentsReader = u.requestlessControllerFactory<
  BorrowerPortal_GetReferralAgentsResponse
>(
  BorrowerPortal_GetReferralAgentsResponse,
  'get',
  '/api/BorrowerPortal/ReferralAgents'
);

export interface BorrowerPortal_ReferAFriendRequest {
  body: m.ReferralModel;
}
export type BorrowerPortal_ReferAFriendResponse = boolean;
export const BorrowerPortal_ReferAFriendResponse = t.boolean;

/* BorrowerPortal_ReferAFriend */
export const BorrowerPortal_ReferAFriendReader = u.controllerFactory<
  BorrowerPortal_ReferAFriendRequest,
  BorrowerPortal_ReferAFriendResponse
>(
  BorrowerPortal_ReferAFriendResponse,
  'post',
  '/api/BorrowerPortal/ReferAFriend'
);

export interface BorrowerPortal_RequestACallbackRequest {
  body: m.CallbackModel;
}
export type BorrowerPortal_RequestACallbackResponse = boolean;
export const BorrowerPortal_RequestACallbackResponse = t.boolean;

/* BorrowerPortal_RequestACallback */
export const BorrowerPortal_RequestACallbackReader = u.controllerFactory<
  BorrowerPortal_RequestACallbackRequest,
  BorrowerPortal_RequestACallbackResponse
>(
  BorrowerPortal_RequestACallbackResponse,
  'post',
  '/api/BorrowerPortal/RequestACallback'
);

export interface BorrowerPortal_InitializeFormFreeRequest {
  body: m.InitializeFormFreeRequest;
}
export type BorrowerPortal_InitializeFormFreeResponse = m.EnrollmentWidgetResponse;
export const BorrowerPortal_InitializeFormFreeResponse =
  m.EnrollmentWidgetResponse;

/* BorrowerPortal_InitializeFormFree */
export const BorrowerPortal_InitializeFormFreeReader = u.controllerFactory<
  BorrowerPortal_InitializeFormFreeRequest,
  BorrowerPortal_InitializeFormFreeResponse
>(
  BorrowerPortal_InitializeFormFreeResponse,
  'post',
  '/api/BorrowerPortal/InitializeFormFree'
);

export type BorrowerPortal_GetUrgentLiveDataResponse = m.PortalLiveData;
export const BorrowerPortal_GetUrgentLiveDataResponse = m.PortalLiveData;

/* BorrowerPortal_GetUrgentLiveData */
export const BorrowerPortal_GetUrgentLiveDataReader = u.requestlessControllerFactory<
  BorrowerPortal_GetUrgentLiveDataResponse
>(
  BorrowerPortal_GetUrgentLiveDataResponse,
  'get',
  '/api/BorrowerPortal/LiveData'
);

export type Campaign_GetCampaignsAsyncResponse = Array<m.CampaignViewModel>;
export const Campaign_GetCampaignsAsyncResponse = t.array(m.CampaignViewModel);

/* Campaign_GetCampaignsAsync */
export const Campaign_GetCampaignsAsyncReader = u.requestlessControllerFactory<
  Campaign_GetCampaignsAsyncResponse
>(Campaign_GetCampaignsAsyncResponse, 'get', '/api/campaign');

export interface Campaign_CreateCampaignAsyncRequest {
  body: m.CampaignViewModel;
}
export type Campaign_CreateCampaignAsyncResponse = m.CampaignViewModel;
export const Campaign_CreateCampaignAsyncResponse = m.CampaignViewModel;

/* Campaign_CreateCampaignAsync */
export const Campaign_CreateCampaignAsyncReader = u.controllerFactory<
  Campaign_CreateCampaignAsyncRequest,
  Campaign_CreateCampaignAsyncResponse
>(Campaign_CreateCampaignAsyncResponse, 'post', '/api/campaign');

export interface Campaign_GetSupportedOperatorsForContactListFieldRequest {
  path: {
    fieldId: number;
  };
}
export type Campaign_GetSupportedOperatorsForContactListFieldResponse = Array<
  | 'Equal'
  | 'NotEqual'
  | 'GreaterThan'
  | 'GreaterThanOrEqual'
  | 'LessThan'
  | 'LessThanOrEqual'
  | 'In'
  | 'NotIn'
>;
export const Campaign_GetSupportedOperatorsForContactListFieldResponse = t.array(
  t.keyof({
    Equal: null,
    NotEqual: null,
    GreaterThan: null,
    GreaterThanOrEqual: null,
    LessThan: null,
    LessThanOrEqual: null,
    In: null,
    NotIn: null,
  })
);

/* Campaign_GetSupportedOperatorsForContactListField */
export const Campaign_GetSupportedOperatorsForContactListFieldReader = u.controllerFactory<
  Campaign_GetSupportedOperatorsForContactListFieldRequest,
  Campaign_GetSupportedOperatorsForContactListFieldResponse
>(
  Campaign_GetSupportedOperatorsForContactListFieldResponse,
  'get',
  '/api/campaign/operators/{fieldId}'
);

export interface Campaign_GetCampaignAsyncRequest {
  path: {
    id: number;
  };
}
export type Campaign_GetCampaignAsyncResponse = m.CampaignViewModel;
export const Campaign_GetCampaignAsyncResponse = m.CampaignViewModel;

/* Campaign_GetCampaignAsync */
export const Campaign_GetCampaignAsyncReader = u.controllerFactory<
  Campaign_GetCampaignAsyncRequest,
  Campaign_GetCampaignAsyncResponse
>(Campaign_GetCampaignAsyncResponse, 'get', '/api/campaign/{id}');

export interface Campaign_UpdateCampaignAsyncRequest {
  path: {
    id: number;
  };
  body: m.CampaignViewModel;
}
export type Campaign_UpdateCampaignAsyncResponse = m.CampaignViewModel;
export const Campaign_UpdateCampaignAsyncResponse = m.CampaignViewModel;

/* Campaign_UpdateCampaignAsync */
export const Campaign_UpdateCampaignAsyncReader = u.controllerFactory<
  Campaign_UpdateCampaignAsyncRequest,
  Campaign_UpdateCampaignAsyncResponse
>(Campaign_UpdateCampaignAsyncResponse, 'post', '/api/campaign/{id}');

export interface Chat_GetBorrowerChatMessagesRequest {
  path: {
    applicationId: number;
  };
}
export type Chat_GetBorrowerChatMessagesResponse = m.ChatMessageViewModel;
export const Chat_GetBorrowerChatMessagesResponse = m.ChatMessageViewModel;

/* Chat_GetBorrowerChatMessages: Get Borrower Messages by Application.  Logged in user must be on the loan */
export const Chat_GetBorrowerChatMessagesReader = u.controllerFactory<
  Chat_GetBorrowerChatMessagesRequest,
  Chat_GetBorrowerChatMessagesResponse
>(
  Chat_GetBorrowerChatMessagesResponse,
  'get',
  '/api/chat/GetBorrowerChatMessages/{applicationId}'
);

export interface Chat_GetSmsChatMessagesRequest {
  path: {
    userPhone: string;
    betweenPhone: string;
  };
}
export type Chat_GetSmsChatMessagesResponse = m.ChatSmsViewModel;
export const Chat_GetSmsChatMessagesResponse = m.ChatSmsViewModel;

/* Chat_GetSmsChatMessages: Get SMS Messages by between phone numbers */
export const Chat_GetSmsChatMessagesReader = u.controllerFactory<
  Chat_GetSmsChatMessagesRequest,
  Chat_GetSmsChatMessagesResponse
>(
  Chat_GetSmsChatMessagesResponse,
  'get',
  '/api/chat/GetSmsChatMessages/{userPhone}/{betweenPhone}'
);

export interface Checklist_GetAllByLoanForChecklistRequest {
  path: {
    /** id of the checklist */
    checklistId: number;
  };
  query: {
    /** id of the loan/application */
    loanId: number;
  };
}
export type Checklist_GetAllByLoanForChecklistResponse = Array<
  m.ChecklistAnswerViewModel
>;
export const Checklist_GetAllByLoanForChecklistResponse = t.array(
  m.ChecklistAnswerViewModel
);

/* Checklist_GetAllByLoanForChecklist: Get all checklist answers for loan */
export const Checklist_GetAllByLoanForChecklistReader = u.controllerFactory<
  Checklist_GetAllByLoanForChecklistRequest,
  Checklist_GetAllByLoanForChecklistResponse
>(
  Checklist_GetAllByLoanForChecklistResponse,
  'get',
  '/api/checklist/{checklistId}/answers'
);

export interface Checklist_InsertChecklistAnswerByChecklistIdRequest {
  query: {
    checklistId: number;
  };
  body: m.ChecklistAnswerViewModel;
}
export type Checklist_InsertChecklistAnswerByChecklistIdResponse = m.ChecklistAnswerViewModel;
export const Checklist_InsertChecklistAnswerByChecklistIdResponse =
  m.ChecklistAnswerViewModel;

/* Checklist_InsertChecklistAnswerByChecklistId: Insert an answer to a checklist */
export const Checklist_InsertChecklistAnswerByChecklistIdReader = u.controllerFactory<
  Checklist_InsertChecklistAnswerByChecklistIdRequest,
  Checklist_InsertChecklistAnswerByChecklistIdResponse
>(
  Checklist_InsertChecklistAnswerByChecklistIdResponse,
  'post',
  '/api/checklist/answers'
);

export interface Checklist_InsertChecklistAnswerByChecklistIdAndAnswerIdRequest {
  path: {
    checklistId: number;
    answerId: number;
  };
  body: m.ChecklistAnswerViewModel;
}
export type Checklist_InsertChecklistAnswerByChecklistIdAndAnswerIdResponse = m.ChecklistAnswerViewModel;
export const Checklist_InsertChecklistAnswerByChecklistIdAndAnswerIdResponse =
  m.ChecklistAnswerViewModel;

/* Checklist_InsertChecklistAnswerByChecklistIdAndAnswerId: Insert an answer to a checklist */
export const Checklist_InsertChecklistAnswerByChecklistIdAndAnswerIdReader = u.controllerFactory<
  Checklist_InsertChecklistAnswerByChecklistIdAndAnswerIdRequest,
  Checklist_InsertChecklistAnswerByChecklistIdAndAnswerIdResponse
>(
  Checklist_InsertChecklistAnswerByChecklistIdAndAnswerIdResponse,
  'post',
  '/api/checklist/{checklistId}/answers/{answerId}'
);

export type Common_InsertDocExpireResponse = Record<string, unknown>;
export const Common_InsertDocExpireResponse = t.UnknownRecord;

/* Common_InsertDocExpire */
export const Common_InsertDocExpireReader = u.requestlessControllerFactory<
  Common_InsertDocExpireResponse
>(Common_InsertDocExpireResponse, 'post', '/api/Common/InsertDocExpire');

export type Common_GetTaskStatusAlertResponse = Array<m.AlertModel>;
export const Common_GetTaskStatusAlertResponse = t.array(m.AlertModel);

/* Common_GetTaskStatusAlert */
export const Common_GetTaskStatusAlertReader = u.requestlessControllerFactory<
  Common_GetTaskStatusAlertResponse
>(Common_GetTaskStatusAlertResponse, 'get', '/api/Common/GetTaskStatusAlert');

export interface Common_GetAlertsRequest {
  path: {
    alertTypeId:
      | 'Immediately'
      | 'OnLoanStatus'
      | 'CreateInternalContact'
      | 'UpdateInternalContact'
      | 'Private'
      | 'Group'
      | 'Public'
      | 'Al'
      | 'Event'
      | 'ToDo'
      | 'Appointment'
      | 'AutoApply'
      | 'Confirm'
      | 'RequestQuantity'
      | 'LoanCharacteristic'
      | 'BorrowerCharacteristic'
      | 'LessThan'
      | 'LessThanOrEqualTo'
      | 'EqualTo'
      | 'GreatherThan'
      | 'GreaterThanOrEqualTo'
      | 'NullOrEmpty'
      | 'NotNullOrEmpty'
      | 'StartsWith'
      | 'Contains'
      | 'DoesNotContain'
      | 'In'
      | 'NotIn'
      | 'YesNo'
      | 'TrueFalse'
      | 'OnOff'
      | 'Text'
      | 'Integer'
      | 'Decimal'
      | 'MultiSelect'
      | 'SelectList'
      | 'Value'
      | 'Docvalue'
      | 'DataValidation'
      | 'DocumentValidation'
      | 'ManualValidation'
      | 'Pdf'
      | 'Doc'
      | 'Txt'
      | 'Excel'
      | 'Csv'
      | 'Img'
      | 'ApplyToLoan'
      | 'ApplyToPrimaryBorrower'
      | 'ApplyToSelectBorrowers'
      | 'ChangeStatus'
      | 'Uploadfile'
      | 'DeleteFile'
      | 'DownloadFile'
      | 'ExportFile'
      | 'FileNoteUpdated'
      | 'BorrowerNoteUpdated'
      | 'DeleteTask'
      | 'RemoveFileFromTrash'
      | 'ConditionStatusChange'
      | 'CreateTask'
      | 'RestoreTask'
      | 'MergeFile'
      | 'PostponeTask'
      | 'ChangeFollowUpDate'
      | 'ChangeDueDate'
      | 'ViewFile'
      | 'FileNameChanged'
      | 'ChangeConditionFlag'
      | 'ChangeDescription'
      | 'ChangeNotifyParty'
      | 'ChangePriority'
      | 'ChangeResponsibleParty'
      | 'ChangeReviewRequired'
      | 'InternalMessageAlert'
      | 'BorrowerMessageAlert'
      | 'TaskStatusAlert'
      | 'GeneralAlert'
      | 'LoanStatusAlert'
      | 'FailedEmailAlert'
      | 'FailedSmsAlert'
      | 'NewLeadAlert';
  };
}
export type Common_GetAlertsResponse = Array<m.AlertViewModel>;
export const Common_GetAlertsResponse = t.array(m.AlertViewModel);

/* Common_GetAlerts */
export const Common_GetAlertsReader = u.controllerFactory<
  Common_GetAlertsRequest,
  Common_GetAlertsResponse
>(Common_GetAlertsResponse, 'get', '/api/Common/GetAlerts/{alertTypeId}');

export interface Common_ClearAlertRequest {
  path: {
    alertId: number;
  };
}
export type Common_ClearAlertResponse = Record<string, unknown>;
export const Common_ClearAlertResponse = t.UnknownRecord;

/* Common_ClearAlert */
export const Common_ClearAlertReader = u.controllerFactory<
  Common_ClearAlertRequest,
  Common_ClearAlertResponse
>(Common_ClearAlertResponse, 'post', '/api/Common/ClearAlert/{alertId}');

export interface Common_SendAnonymousRequest {
  path: {
    toUserId: string;
  };
  body: m.NotificationViewModel;
}
export type Common_SendAnonymousResponse = Record<string, unknown>;
export const Common_SendAnonymousResponse = t.UnknownRecord;

/* Common_SendAnonymous */
export const Common_SendAnonymousReader = u.controllerFactory<
  Common_SendAnonymousRequest,
  Common_SendAnonymousResponse
>(
  Common_SendAnonymousResponse,
  'post',
  '/api/Common/send-notification/{toUserId}'
);

export type ContactList_GetContactListsResponse = Array<m.ContactListViewModel>;
export const ContactList_GetContactListsResponse = t.array(
  m.ContactListViewModel
);

/* ContactList_GetContactLists */
export const ContactList_GetContactListsReader = u.requestlessControllerFactory<
  ContactList_GetContactListsResponse
>(ContactList_GetContactListsResponse, 'get', '/api/contact-list');

export interface ContactList_CreateContactListRequest {
  body: m.ContactListViewModel;
}
export type ContactList_CreateContactListResponse = m.ContactListViewModel;
export const ContactList_CreateContactListResponse = m.ContactListViewModel;

/* ContactList_CreateContactList */
export const ContactList_CreateContactListReader = u.controllerFactory<
  ContactList_CreateContactListRequest,
  ContactList_CreateContactListResponse
>(ContactList_CreateContactListResponse, 'post', '/api/contact-list');

export interface ContactList_GetLookupListValuesRequest {
  path: {
    type:
      | 'None'
      | 'Integer'
      | 'Double'
      | 'Decimal'
      | 'String'
      | 'Boolean'
      | 'DateTime'
      | 'Enum'
      | 'Email'
      | 'MobilePhone'
      | 'LandLinePhone'
      | 'FaxPhone'
      | 'LoanType'
      | 'LoanPurpose'
      | 'LoanStatus'
      | 'LeadStatus'
      | 'User'
      | 'Product'
      | 'Lender'
      | 'LookupList';
  };
}
export type ContactList_GetLookupListValuesResponse = Array<
  m.LookupListValueViewModel
>;
export const ContactList_GetLookupListValuesResponse = t.array(
  m.LookupListValueViewModel
);

/* ContactList_GetLookupListValues */
export const ContactList_GetLookupListValuesReader = u.controllerFactory<
  ContactList_GetLookupListValuesRequest,
  ContactList_GetLookupListValuesResponse
>(
  ContactList_GetLookupListValuesResponse,
  'get',
  '/api/contact-list/lookups/{type}'
);

export interface ContactList_GetContactListRequest {
  path: {
    id: number;
  };
}
export type ContactList_GetContactListResponse = m.ContactListViewModel;
export const ContactList_GetContactListResponse = m.ContactListViewModel;

/* ContactList_GetContactList */
export const ContactList_GetContactListReader = u.controllerFactory<
  ContactList_GetContactListRequest,
  ContactList_GetContactListResponse
>(ContactList_GetContactListResponse, 'get', '/api/contact-list/{id}');

export interface ContactList_UpdateContactListRequest {
  path: {
    id: number;
  };
  body: m.ContactListViewModel;
}
export type ContactList_UpdateContactListResponse = m.ContactListViewModel;
export const ContactList_UpdateContactListResponse = m.ContactListViewModel;

/* ContactList_UpdateContactList */
export const ContactList_UpdateContactListReader = u.controllerFactory<
  ContactList_UpdateContactListRequest,
  ContactList_UpdateContactListResponse
>(ContactList_UpdateContactListResponse, 'post', '/api/contact-list/{id}');

export interface ContactList_DeleteContactListRequest {
  path: {
    id: number;
  };
}
export type ContactList_DeleteContactListResponse = Record<string, unknown>;
export const ContactList_DeleteContactListResponse = t.UnknownRecord;

/* ContactList_DeleteContactList */
export const ContactList_DeleteContactListReader = u.controllerFactory<
  ContactList_DeleteContactListRequest,
  ContactList_DeleteContactListResponse
>(ContactList_DeleteContactListResponse, 'delete', '/api/contact-list/{id}');

export interface ContactList_GetContactListFieldTypeEnumRequest {
  path: {
    id: number;
  };
}
export type ContactList_GetContactListFieldTypeEnumResponse = m.ContactListFieldTypeEnumViewModel;
export const ContactList_GetContactListFieldTypeEnumResponse =
  m.ContactListFieldTypeEnumViewModel;

/* ContactList_GetContactListFieldTypeEnum */
export const ContactList_GetContactListFieldTypeEnumReader = u.controllerFactory<
  ContactList_GetContactListFieldTypeEnumRequest,
  ContactList_GetContactListFieldTypeEnumResponse
>(
  ContactList_GetContactListFieldTypeEnumResponse,
  'get',
  '/api/contact-list/enum/{id}'
);

export interface ContactList_UpdateContactListFieldTypeEnumRequest {
  path: {
    id: number;
  };
  body: m.ContactListFieldTypeEnumViewModel;
}
export type ContactList_UpdateContactListFieldTypeEnumResponse = m.ContactListFieldTypeEnumViewModel;
export const ContactList_UpdateContactListFieldTypeEnumResponse =
  m.ContactListFieldTypeEnumViewModel;

/* ContactList_UpdateContactListFieldTypeEnum */
export const ContactList_UpdateContactListFieldTypeEnumReader = u.controllerFactory<
  ContactList_UpdateContactListFieldTypeEnumRequest,
  ContactList_UpdateContactListFieldTypeEnumResponse
>(
  ContactList_UpdateContactListFieldTypeEnumResponse,
  'post',
  '/api/contact-list/enum/{id}'
);

export interface ContactList_CreateContactListFieldTypeEnumRequest {
  body: m.ContactListFieldTypeEnumViewModel;
}
export type ContactList_CreateContactListFieldTypeEnumResponse = m.ContactListFieldTypeEnumViewModel;
export const ContactList_CreateContactListFieldTypeEnumResponse =
  m.ContactListFieldTypeEnumViewModel;

/* ContactList_CreateContactListFieldTypeEnum */
export const ContactList_CreateContactListFieldTypeEnumReader = u.controllerFactory<
  ContactList_CreateContactListFieldTypeEnumRequest,
  ContactList_CreateContactListFieldTypeEnumResponse
>(
  ContactList_CreateContactListFieldTypeEnumResponse,
  'post',
  '/api/contact-list/enum'
);

export type ContactList_ParseContactListFromXlsxAsyncResponse = m.ContactListViewModel;
export const ContactList_ParseContactListFromXlsxAsyncResponse =
  m.ContactListViewModel;

/* ContactList_ParseContactListFromXlsxAsync */
export const ContactList_ParseContactListFromXlsxAsyncReader = u.requestlessControllerFactory<
  ContactList_ParseContactListFromXlsxAsyncResponse
>(
  ContactList_ParseContactListFromXlsxAsyncResponse,
  'post',
  '/api/contact-list/parse'
);

export interface CreditInfo_PullCreditReportAsyncRequest {
  body: m.CreditRequestModel;
}
export type CreditInfo_PullCreditReportAsyncResponse = m.CreditResponseModel;
export const CreditInfo_PullCreditReportAsyncResponse = m.CreditResponseModel;

/* CreditInfo_PullCreditReportAsync: Submit a credit pull request */
export const CreditInfo_PullCreditReportAsyncReader = u.controllerFactory<
  CreditInfo_PullCreditReportAsyncRequest,
  CreditInfo_PullCreditReportAsyncResponse
>(
  CreditInfo_PullCreditReportAsyncResponse,
  'post',
  '/api/CreditInfo/pull-report'
);

export interface CreditInfo_ReissueCreditReportAsyncRequest {
  path: {
    integrationHistoryId: number;
  };
}
export type CreditInfo_ReissueCreditReportAsyncResponse = m.CreditResponseModel;
export const CreditInfo_ReissueCreditReportAsyncResponse =
  m.CreditResponseModel;

/* CreditInfo_ReissueCreditReportAsync */
export const CreditInfo_ReissueCreditReportAsyncReader = u.controllerFactory<
  CreditInfo_ReissueCreditReportAsyncRequest,
  CreditInfo_ReissueCreditReportAsyncResponse
>(
  CreditInfo_ReissueCreditReportAsyncResponse,
  'post',
  '/api/CreditInfo/reissue-report/{integrationHistoryId}'
);

export interface CreditInfo_PullCreditReportHistoryRequest {
  query: {
    /** loan id to pull history */
    applicationId?: number;
    /** lead id to pull history */
    leadId?: number;
  };
}
export type CreditInfo_PullCreditReportHistoryResponse = Array<
  m.CreditViewModel
>;
export const CreditInfo_PullCreditReportHistoryResponse = t.array(
  m.CreditViewModel
);

/* CreditInfo_PullCreditReportHistory: Get Credit Report History */
export const CreditInfo_PullCreditReportHistoryReader = u.controllerFactory<
  CreditInfo_PullCreditReportHistoryRequest,
  CreditInfo_PullCreditReportHistoryResponse
>(CreditInfo_PullCreditReportHistoryResponse, 'get', '/api/CreditInfo/history');

export interface CreditInfo_UpsertCreditInfoRequest {
  body: m.CreditViewModel;
}
export type CreditInfo_UpsertCreditInfoResponse = m.CreditModel;
export const CreditInfo_UpsertCreditInfoResponse = m.CreditModel;

/* CreditInfo_UpsertCreditInfo */
export const CreditInfo_UpsertCreditInfoReader = u.controllerFactory<
  CreditInfo_UpsertCreditInfoRequest,
  CreditInfo_UpsertCreditInfoResponse
>(
  CreditInfo_UpsertCreditInfoResponse,
  'post',
  '/api/CreditInfo/UpsertCreditInfo'
);

export interface CreditInfo_DeleteCreditModelRequest {
  path: {
    creditInfoId: number;
  };
}
export type CreditInfo_DeleteCreditModelResponse = Record<string, unknown>;
export const CreditInfo_DeleteCreditModelResponse = t.UnknownRecord;

/* CreditInfo_DeleteCreditModel */
export const CreditInfo_DeleteCreditModelReader = u.controllerFactory<
  CreditInfo_DeleteCreditModelRequest,
  CreditInfo_DeleteCreditModelResponse
>(
  CreditInfo_DeleteCreditModelResponse,
  'delete',
  '/api/CreditInfo/{creditInfoId}'
);

export interface Dashboard_GetTaskCountsbyFilterCriteriaRequest {
  body: m.DashboardFilterCriteria;
}
export type Dashboard_GetTaskCountsbyFilterCriteriaResponse = m.TaskCountModel;
export const Dashboard_GetTaskCountsbyFilterCriteriaResponse = m.TaskCountModel;

/* Dashboard_GetTaskCountsbyFilterCriteria */
export const Dashboard_GetTaskCountsbyFilterCriteriaReader = u.controllerFactory<
  Dashboard_GetTaskCountsbyFilterCriteriaRequest,
  Dashboard_GetTaskCountsbyFilterCriteriaResponse
>(
  Dashboard_GetTaskCountsbyFilterCriteriaResponse,
  'post',
  '/api/Dashboard/GetTaskCountsbyFilterCriteria'
);

export interface Dashboard_GetTaskByFilterbyFilterCriteriaRequest {
  path: {
    filter: number;
  };
  body: m.DashboardFilterCriteria;
}
export type Dashboard_GetTaskByFilterbyFilterCriteriaResponse = Array<
  m.LoanDocTaskDashBoardView
>;
export const Dashboard_GetTaskByFilterbyFilterCriteriaResponse = t.array(
  m.LoanDocTaskDashBoardView
);

/* Dashboard_GetTaskByFilterbyFilterCriteria */
export const Dashboard_GetTaskByFilterbyFilterCriteriaReader = u.controllerFactory<
  Dashboard_GetTaskByFilterbyFilterCriteriaRequest,
  Dashboard_GetTaskByFilterbyFilterCriteriaResponse
>(
  Dashboard_GetTaskByFilterbyFilterCriteriaResponse,
  'post',
  '/api/Dashboard/GetTaskByFilterbyFilterCriteria/{filter}'
);

export type Dashboard_GetTaskCountsResponse = m.TaskCountModel;
export const Dashboard_GetTaskCountsResponse = m.TaskCountModel;

/* Dashboard_GetTaskCounts */
export const Dashboard_GetTaskCountsReader = u.requestlessControllerFactory<
  Dashboard_GetTaskCountsResponse
>(Dashboard_GetTaskCountsResponse, 'get', '/api/Dashboard/GetTaskCounts');

export interface Dashboard_GetTaskByFilterRequest {
  path: {
    filter: number;
  };
}
export type Dashboard_GetTaskByFilterResponse = Array<
  m.LoanDocTaskDashBoardView
>;
export const Dashboard_GetTaskByFilterResponse = t.array(
  m.LoanDocTaskDashBoardView
);

/* Dashboard_GetTaskByFilter */
export const Dashboard_GetTaskByFilterReader = u.controllerFactory<
  Dashboard_GetTaskByFilterRequest,
  Dashboard_GetTaskByFilterResponse
>(
  Dashboard_GetTaskByFilterResponse,
  'get',
  '/api/Dashboard/GetTaskByFilter/{filter}'
);

export interface Dashboard_GetTaskByFilterInAppRequest {
  path: {
    filter: number;
    appId: number;
  };
}
export type Dashboard_GetTaskByFilterInAppResponse = Array<
  m.LoanDocTaskDashBoardView
>;
export const Dashboard_GetTaskByFilterInAppResponse = t.array(
  m.LoanDocTaskDashBoardView
);

/* Dashboard_GetTaskByFilterInApp */
export const Dashboard_GetTaskByFilterInAppReader = u.controllerFactory<
  Dashboard_GetTaskByFilterInAppRequest,
  Dashboard_GetTaskByFilterInAppResponse
>(
  Dashboard_GetTaskByFilterInAppResponse,
  'get',
  '/api/Dashboard/GetTaskByFilterInApp/{filter}/{appId}'
);

export interface Dashboard_GetTaskByFilterInLeadRequest {
  path: {
    filter: number;
    leadId: number;
  };
}
export type Dashboard_GetTaskByFilterInLeadResponse = Array<
  m.LoanDocTaskDashBoardView
>;
export const Dashboard_GetTaskByFilterInLeadResponse = t.array(
  m.LoanDocTaskDashBoardView
);

/* Dashboard_GetTaskByFilterInLead */
export const Dashboard_GetTaskByFilterInLeadReader = u.controllerFactory<
  Dashboard_GetTaskByFilterInLeadRequest,
  Dashboard_GetTaskByFilterInLeadResponse
>(
  Dashboard_GetTaskByFilterInLeadResponse,
  'get',
  '/api/Dashboard/GetTaskByFilterInLead/{filter}/{leadId}'
);

export interface Demo_RequestDemoRequest {
  body: m.RequestDemoViewModel;
}
export type Demo_RequestDemoResponse = Record<string, unknown>;
export const Demo_RequestDemoResponse = t.UnknownRecord;

/* Demo_RequestDemo */
export const Demo_RequestDemoReader = u.controllerFactory<
  Demo_RequestDemoRequest,
  Demo_RequestDemoResponse
>(Demo_RequestDemoResponse, 'post', '/api/demo/request');

export type DocumentTemplate_GetApplicationGlobalMergeFieldKeysResponse = Array<
  string
>;
export const DocumentTemplate_GetApplicationGlobalMergeFieldKeysResponse = t.array(
  t.string
);

/* DocumentTemplate_GetApplicationGlobalMergeFieldKeys */
export const DocumentTemplate_GetApplicationGlobalMergeFieldKeysReader = u.requestlessControllerFactory<
  DocumentTemplate_GetApplicationGlobalMergeFieldKeysResponse
>(
  DocumentTemplate_GetApplicationGlobalMergeFieldKeysResponse,
  'get',
  '/api/configuration/document-templates/app-global-merge-field-keys'
);

export type DocumentTemplate_GetLeadGlobalMergeFieldKeysResponse = Array<
  string
>;
export const DocumentTemplate_GetLeadGlobalMergeFieldKeysResponse = t.array(
  t.string
);

/* DocumentTemplate_GetLeadGlobalMergeFieldKeys */
export const DocumentTemplate_GetLeadGlobalMergeFieldKeysReader = u.requestlessControllerFactory<
  DocumentTemplate_GetLeadGlobalMergeFieldKeysResponse
>(
  DocumentTemplate_GetLeadGlobalMergeFieldKeysResponse,
  'get',
  '/api/configuration/document-templates/lead-global-merge-field-keys'
);

export type DocumentTemplate_GetAllDocumentTemplatesResponse = Array<
  m.DocumentTemplateViewModel
>;
export const DocumentTemplate_GetAllDocumentTemplatesResponse = t.array(
  m.DocumentTemplateViewModel
);

/* DocumentTemplate_GetAllDocumentTemplates */
export const DocumentTemplate_GetAllDocumentTemplatesReader = u.requestlessControllerFactory<
  DocumentTemplate_GetAllDocumentTemplatesResponse
>(
  DocumentTemplate_GetAllDocumentTemplatesResponse,
  'get',
  '/api/configuration/document-templates/templates'
);

export type DocumentTemplate_InsertDocumentTemplateResponse = Record<
  string,
  unknown
>;
export const DocumentTemplate_InsertDocumentTemplateResponse = t.UnknownRecord;

/* DocumentTemplate_InsertDocumentTemplate */
export const DocumentTemplate_InsertDocumentTemplateReader = u.requestlessControllerFactory<
  DocumentTemplate_InsertDocumentTemplateResponse
>(
  DocumentTemplate_InsertDocumentTemplateResponse,
  'post',
  '/api/configuration/document-templates/templates'
);

export interface DocumentTemplate_GetDocumentTemplateByIdRequest {
  path: {
    documentTemplateId: number;
  };
}
export type DocumentTemplate_GetDocumentTemplateByIdResponse = m.DocumentTemplateViewModel;
export const DocumentTemplate_GetDocumentTemplateByIdResponse =
  m.DocumentTemplateViewModel;

/* DocumentTemplate_GetDocumentTemplateById */
export const DocumentTemplate_GetDocumentTemplateByIdReader = u.controllerFactory<
  DocumentTemplate_GetDocumentTemplateByIdRequest,
  DocumentTemplate_GetDocumentTemplateByIdResponse
>(
  DocumentTemplate_GetDocumentTemplateByIdResponse,
  'get',
  '/api/configuration/document-templates/templates/{documentTemplateId}'
);

export interface DocumentTemplate_UpdateDocumentTemplateRequest {
  path: {
    documentTemplateId: number;
  };
}
export type DocumentTemplate_UpdateDocumentTemplateResponse = Record<
  string,
  unknown
>;
export const DocumentTemplate_UpdateDocumentTemplateResponse = t.UnknownRecord;

/* DocumentTemplate_UpdateDocumentTemplate */
export const DocumentTemplate_UpdateDocumentTemplateReader = u.controllerFactory<
  DocumentTemplate_UpdateDocumentTemplateRequest,
  DocumentTemplate_UpdateDocumentTemplateResponse
>(
  DocumentTemplate_UpdateDocumentTemplateResponse,
  'post',
  '/api/configuration/document-templates/templates/{documentTemplateId}'
);

export interface DocumentTemplate_DeleteDocumentTemplateRequest {
  path: {
    documentTemplateId: number;
  };
}
export type DocumentTemplate_DeleteDocumentTemplateResponse = Record<
  string,
  unknown
>;
export const DocumentTemplate_DeleteDocumentTemplateResponse = t.UnknownRecord;

/* DocumentTemplate_DeleteDocumentTemplate */
export const DocumentTemplate_DeleteDocumentTemplateReader = u.controllerFactory<
  DocumentTemplate_DeleteDocumentTemplateRequest,
  DocumentTemplate_DeleteDocumentTemplateResponse
>(
  DocumentTemplate_DeleteDocumentTemplateResponse,
  'delete',
  '/api/configuration/document-templates/templates/{documentTemplateId}'
);

export interface DocumentTemplate_GetDocumentTemplateFieldsByIdRequest {
  path: {
    documentTemplateId: number;
  };
}
export type DocumentTemplate_GetDocumentTemplateFieldsByIdResponse = Array<
  m.DocumentTemplateFieldViewModel
>;
export const DocumentTemplate_GetDocumentTemplateFieldsByIdResponse = t.array(
  m.DocumentTemplateFieldViewModel
);

/* DocumentTemplate_GetDocumentTemplateFieldsById */
export const DocumentTemplate_GetDocumentTemplateFieldsByIdReader = u.controllerFactory<
  DocumentTemplate_GetDocumentTemplateFieldsByIdRequest,
  DocumentTemplate_GetDocumentTemplateFieldsByIdResponse
>(
  DocumentTemplate_GetDocumentTemplateFieldsByIdResponse,
  'get',
  '/api/configuration/document-templates/templates/{documentTemplateId}/fields'
);

export interface DocumentTemplate_UpdateDocumentTemplateFieldRequest {
  path: {
    documentTemplateFieldId: number;
  };
  body: m.DocumentTemplateFieldViewModel;
}
export type DocumentTemplate_UpdateDocumentTemplateFieldResponse = Record<
  string,
  unknown
>;
export const DocumentTemplate_UpdateDocumentTemplateFieldResponse =
  t.UnknownRecord;

/* DocumentTemplate_UpdateDocumentTemplateField */
export const DocumentTemplate_UpdateDocumentTemplateFieldReader = u.controllerFactory<
  DocumentTemplate_UpdateDocumentTemplateFieldRequest,
  DocumentTemplate_UpdateDocumentTemplateFieldResponse
>(
  DocumentTemplate_UpdateDocumentTemplateFieldResponse,
  'post',
  '/api/configuration/document-templates/fields/{documentTemplateFieldId}/update'
);

export interface DocumentTemplate_GetDocumentTemplatePagesByIdRequest {
  path: {
    documentTemplateId: number;
  };
}
export type DocumentTemplate_GetDocumentTemplatePagesByIdResponse = Array<
  m.DocumentTemplatePageViewModel
>;
export const DocumentTemplate_GetDocumentTemplatePagesByIdResponse = t.array(
  m.DocumentTemplatePageViewModel
);

/* DocumentTemplate_GetDocumentTemplatePagesById */
export const DocumentTemplate_GetDocumentTemplatePagesByIdReader = u.controllerFactory<
  DocumentTemplate_GetDocumentTemplatePagesByIdRequest,
  DocumentTemplate_GetDocumentTemplatePagesByIdResponse
>(
  DocumentTemplate_GetDocumentTemplatePagesByIdResponse,
  'get',
  '/api/configuration/document-templates/templates/{documentTemplateId}/pages'
);

export interface DocumentTemplate_UpsertDocumentTemplatePagesRequest {
  path: {
    documentTemplateId: number;
  };
  body: m.AddDocumentTemplatePagesViewModel;
}
export type DocumentTemplate_UpsertDocumentTemplatePagesResponse = Record<
  string,
  unknown
>;
export const DocumentTemplate_UpsertDocumentTemplatePagesResponse =
  t.UnknownRecord;

/* DocumentTemplate_UpsertDocumentTemplatePages */
export const DocumentTemplate_UpsertDocumentTemplatePagesReader = u.controllerFactory<
  DocumentTemplate_UpsertDocumentTemplatePagesRequest,
  DocumentTemplate_UpsertDocumentTemplatePagesResponse
>(
  DocumentTemplate_UpsertDocumentTemplatePagesResponse,
  'post',
  '/api/configuration/document-templates/templates/{documentTemplateId}/pages'
);

export interface DocumentTemplate_DeleteDocumentTemplatePageRequest {
  path: {
    documentTemplatePageId: number;
  };
}
export type DocumentTemplate_DeleteDocumentTemplatePageResponse = Record<
  string,
  unknown
>;
export const DocumentTemplate_DeleteDocumentTemplatePageResponse =
  t.UnknownRecord;

/* DocumentTemplate_DeleteDocumentTemplatePage */
export const DocumentTemplate_DeleteDocumentTemplatePageReader = u.controllerFactory<
  DocumentTemplate_DeleteDocumentTemplatePageRequest,
  DocumentTemplate_DeleteDocumentTemplatePageResponse
>(
  DocumentTemplate_DeleteDocumentTemplatePageResponse,
  'delete',
  '/api/configuration/document-templates/pages/{documentTemplatePageId}/delete'
);

export interface Email_SendTestEmailRequest {
  body: m.EmailServiceModel;
}
export type Email_SendTestEmailResponse = Record<string, unknown>;
export const Email_SendTestEmailResponse = t.UnknownRecord;

/* Email_SendTestEmail */
export const Email_SendTestEmailReader = u.controllerFactory<
  Email_SendTestEmailRequest,
  Email_SendTestEmailResponse
>(Email_SendTestEmailResponse, 'post', '/api/Email/SendTestEmail');

export interface Email_AutoDiscoverExchangeUrlRequest {
  body: m.EmailServiceModel;
}
export type Email_AutoDiscoverExchangeUrlResponse = string;
export const Email_AutoDiscoverExchangeUrlResponse = t.string;

/* Email_AutoDiscoverExchangeUrl */
export const Email_AutoDiscoverExchangeUrlReader = u.controllerFactory<
  Email_AutoDiscoverExchangeUrlRequest,
  Email_AutoDiscoverExchangeUrlResponse
>(
  Email_AutoDiscoverExchangeUrlResponse,
  'post',
  '/api/Email/AutoDiscoverExchangeUrl'
);

export interface Email_GetEmailsSentToBorrowerRequest {
  path: {
    borrowerId: number;
  };
}
export type Email_GetEmailsSentToBorrowerResponse = Array<
  m.MessageHistoryViewModel
>;
export const Email_GetEmailsSentToBorrowerResponse = t.array(
  m.MessageHistoryViewModel
);

/* Email_GetEmailsSentToBorrower */
export const Email_GetEmailsSentToBorrowerReader = u.controllerFactory<
  Email_GetEmailsSentToBorrowerRequest,
  Email_GetEmailsSentToBorrowerResponse
>(
  Email_GetEmailsSentToBorrowerResponse,
  'get',
  '/api/Email/GetEmailsSentToBorrower/{borrowerId}'
);

export interface Email_GetEmailsSentForAppRequest {
  path: {
    appId: number;
  };
}
export type Email_GetEmailsSentForAppResponse = Array<
  m.MessageHistoryViewModel
>;
export const Email_GetEmailsSentForAppResponse = t.array(
  m.MessageHistoryViewModel
);

/* Email_GetEmailsSentForApp */
export const Email_GetEmailsSentForAppReader = u.controllerFactory<
  Email_GetEmailsSentForAppRequest,
  Email_GetEmailsSentForAppResponse
>(
  Email_GetEmailsSentForAppResponse,
  'get',
  '/api/Email/GetEmailsSentForApp/{appId}'
);

export interface Email_GetEmailsSentForLeadRequest {
  path: {
    leadId: number;
  };
}
export type Email_GetEmailsSentForLeadResponse = Array<
  m.MessageHistoryViewModel
>;
export const Email_GetEmailsSentForLeadResponse = t.array(
  m.MessageHistoryViewModel
);

/* Email_GetEmailsSentForLead */
export const Email_GetEmailsSentForLeadReader = u.controllerFactory<
  Email_GetEmailsSentForLeadRequest,
  Email_GetEmailsSentForLeadResponse
>(
  Email_GetEmailsSentForLeadResponse,
  'get',
  '/api/Email/GetEmailsSentForLead/{leadId}'
);

export interface Email_GetEmailsSentToAgentRequest {
  path: {
    agentId: number;
  };
}
export type Email_GetEmailsSentToAgentResponse = Array<
  m.MessageHistoryViewModel
>;
export const Email_GetEmailsSentToAgentResponse = t.array(
  m.MessageHistoryViewModel
);

/* Email_GetEmailsSentToAgent */
export const Email_GetEmailsSentToAgentReader = u.controllerFactory<
  Email_GetEmailsSentToAgentRequest,
  Email_GetEmailsSentToAgentResponse
>(
  Email_GetEmailsSentToAgentResponse,
  'get',
  '/api/Email/GetEmailsSentToAgent/{agentId}'
);

export interface Email_SetEmailPriorityToRetryRequest {
  path: {
    messageId: number;
  };
}
export type Email_SetEmailPriorityToRetryResponse = m.MessageViewModel;
export const Email_SetEmailPriorityToRetryResponse = m.MessageViewModel;

/* Email_SetEmailPriorityToRetry */
export const Email_SetEmailPriorityToRetryReader = u.controllerFactory<
  Email_SetEmailPriorityToRetryRequest,
  Email_SetEmailPriorityToRetryResponse
>(
  Email_SetEmailPriorityToRetryResponse,
  'post',
  '/api/Email/SetEmailPriorityToRetry/{messageId}'
);

export type Email_GetFailedEmailsSentByUserResponse = Array<
  m.MessageHistoryViewModel
>;
export const Email_GetFailedEmailsSentByUserResponse = t.array(
  m.MessageHistoryViewModel
);

/* Email_GetFailedEmailsSentByUser */
export const Email_GetFailedEmailsSentByUserReader = u.requestlessControllerFactory<
  Email_GetFailedEmailsSentByUserResponse
>(
  Email_GetFailedEmailsSentByUserResponse,
  'get',
  '/api/Email/GetFailedEmailsSentByUser'
);

export type EmailCampaign_GetAllEmailCampaignsResponse = Array<
  m.EmailCampaignViewModel
>;
export const EmailCampaign_GetAllEmailCampaignsResponse = t.array(
  m.EmailCampaignViewModel
);

/* EmailCampaign_GetAllEmailCampaigns */
export const EmailCampaign_GetAllEmailCampaignsReader = u.requestlessControllerFactory<
  EmailCampaign_GetAllEmailCampaignsResponse
>(
  EmailCampaign_GetAllEmailCampaignsResponse,
  'get',
  '/api/admin/email-campaigns/campaigns'
);

export interface EmailCampaign_InsertEmailCampaignRequest {
  body: m.EmailCampaignViewModel;
}
export type EmailCampaign_InsertEmailCampaignResponse = m.EmailCampaignViewModel;
export const EmailCampaign_InsertEmailCampaignResponse =
  m.EmailCampaignViewModel;

/* EmailCampaign_InsertEmailCampaign */
export const EmailCampaign_InsertEmailCampaignReader = u.controllerFactory<
  EmailCampaign_InsertEmailCampaignRequest,
  EmailCampaign_InsertEmailCampaignResponse
>(
  EmailCampaign_InsertEmailCampaignResponse,
  'post',
  '/api/admin/email-campaigns/campaigns'
);

export interface EmailCampaign_GetEmailCampaignByIdRequest {
  path: {
    emailCampaignId: number;
  };
}
export type EmailCampaign_GetEmailCampaignByIdResponse = m.EmailCampaignViewModel;
export const EmailCampaign_GetEmailCampaignByIdResponse =
  m.EmailCampaignViewModel;

/* EmailCampaign_GetEmailCampaignById */
export const EmailCampaign_GetEmailCampaignByIdReader = u.controllerFactory<
  EmailCampaign_GetEmailCampaignByIdRequest,
  EmailCampaign_GetEmailCampaignByIdResponse
>(
  EmailCampaign_GetEmailCampaignByIdResponse,
  'get',
  '/api/admin/email-campaigns/campaigns/{emailCampaignId}'
);

export interface EmailCampaign_UpdateEmailCampaignRequest {
  path: {
    emailCampaignId: number;
  };
  body: m.EmailCampaignViewModel;
}
export type EmailCampaign_UpdateEmailCampaignResponse = m.EmailCampaignViewModel;
export const EmailCampaign_UpdateEmailCampaignResponse =
  m.EmailCampaignViewModel;

/* EmailCampaign_UpdateEmailCampaign */
export const EmailCampaign_UpdateEmailCampaignReader = u.controllerFactory<
  EmailCampaign_UpdateEmailCampaignRequest,
  EmailCampaign_UpdateEmailCampaignResponse
>(
  EmailCampaign_UpdateEmailCampaignResponse,
  'post',
  '/api/admin/email-campaigns/campaigns/{emailCampaignId}'
);

export interface EmailCampaign_DeleteEmailCampaignRequest {
  path: {
    emailCampaignId: number;
  };
}
export type EmailCampaign_DeleteEmailCampaignResponse = Record<string, unknown>;
export const EmailCampaign_DeleteEmailCampaignResponse = t.UnknownRecord;

/* EmailCampaign_DeleteEmailCampaign */
export const EmailCampaign_DeleteEmailCampaignReader = u.controllerFactory<
  EmailCampaign_DeleteEmailCampaignRequest,
  EmailCampaign_DeleteEmailCampaignResponse
>(
  EmailCampaign_DeleteEmailCampaignResponse,
  'delete',
  '/api/admin/email-campaigns/campaigns/{emailCampaignId}'
);

export type EmailCampaign_GetAllEmailTemplatesResponse = Array<
  m.EmailTemplateViewModel
>;
export const EmailCampaign_GetAllEmailTemplatesResponse = t.array(
  m.EmailTemplateViewModel
);

/* EmailCampaign_GetAllEmailTemplates */
export const EmailCampaign_GetAllEmailTemplatesReader = u.requestlessControllerFactory<
  EmailCampaign_GetAllEmailTemplatesResponse
>(
  EmailCampaign_GetAllEmailTemplatesResponse,
  'get',
  '/api/admin/email-campaigns/templates'
);

export interface EmailCampaign_InsertEmailTemplateRequest {
  body: m.EmailTemplateViewModel;
}
export type EmailCampaign_InsertEmailTemplateResponse = m.EmailTemplateViewModel;
export const EmailCampaign_InsertEmailTemplateResponse =
  m.EmailTemplateViewModel;

/* EmailCampaign_InsertEmailTemplate */
export const EmailCampaign_InsertEmailTemplateReader = u.controllerFactory<
  EmailCampaign_InsertEmailTemplateRequest,
  EmailCampaign_InsertEmailTemplateResponse
>(
  EmailCampaign_InsertEmailTemplateResponse,
  'post',
  '/api/admin/email-campaigns/templates'
);

export interface EmailCampaign_GetAllManualEmailTemplatesRequest {
  query: {
    emailTemplateType?: 'Loan' | 'Lead';
  };
}
export type EmailCampaign_GetAllManualEmailTemplatesResponse = Array<
  m.EmailTemplateViewModel
>;
export const EmailCampaign_GetAllManualEmailTemplatesResponse = t.array(
  m.EmailTemplateViewModel
);

/* EmailCampaign_GetAllManualEmailTemplates */
export const EmailCampaign_GetAllManualEmailTemplatesReader = u.controllerFactory<
  EmailCampaign_GetAllManualEmailTemplatesRequest,
  EmailCampaign_GetAllManualEmailTemplatesResponse
>(
  EmailCampaign_GetAllManualEmailTemplatesResponse,
  'get',
  '/api/admin/email-campaigns/manual-templates'
);

export interface EmailCampaign_GetManualEmailTemplateByIdRequest {
  path: {
    emailTemplateId: number;
  };
  query: {
    loanId?: number;
    leadId?: number;
  };
}
export type EmailCampaign_GetManualEmailTemplateByIdResponse = m.EmailTemplateViewModel;
export const EmailCampaign_GetManualEmailTemplateByIdResponse =
  m.EmailTemplateViewModel;

/* EmailCampaign_GetManualEmailTemplateById */
export const EmailCampaign_GetManualEmailTemplateByIdReader = u.controllerFactory<
  EmailCampaign_GetManualEmailTemplateByIdRequest,
  EmailCampaign_GetManualEmailTemplateByIdResponse
>(
  EmailCampaign_GetManualEmailTemplateByIdResponse,
  'get',
  '/api/admin/email-campaigns/manual-templates/{emailTemplateId}'
);

export interface EmailCampaign_GetEmailTemplateByIdRequest {
  path: {
    emailTemplateId: number;
  };
}
export type EmailCampaign_GetEmailTemplateByIdResponse = m.EmailTemplateViewModel;
export const EmailCampaign_GetEmailTemplateByIdResponse =
  m.EmailTemplateViewModel;

/* EmailCampaign_GetEmailTemplateById */
export const EmailCampaign_GetEmailTemplateByIdReader = u.controllerFactory<
  EmailCampaign_GetEmailTemplateByIdRequest,
  EmailCampaign_GetEmailTemplateByIdResponse
>(
  EmailCampaign_GetEmailTemplateByIdResponse,
  'get',
  '/api/admin/email-campaigns/templates/{emailTemplateId}'
);

export interface EmailCampaign_UpdateEmailTemplateRequest {
  path: {
    emailTemplateId: number;
  };
  body: m.EmailTemplateViewModel;
}
export type EmailCampaign_UpdateEmailTemplateResponse = m.EmailTemplateViewModel;
export const EmailCampaign_UpdateEmailTemplateResponse =
  m.EmailTemplateViewModel;

/* EmailCampaign_UpdateEmailTemplate */
export const EmailCampaign_UpdateEmailTemplateReader = u.controllerFactory<
  EmailCampaign_UpdateEmailTemplateRequest,
  EmailCampaign_UpdateEmailTemplateResponse
>(
  EmailCampaign_UpdateEmailTemplateResponse,
  'post',
  '/api/admin/email-campaigns/templates/{emailTemplateId}'
);

export interface EmailCampaign_DeleteEmailTemplateRequest {
  path: {
    emailTemplateId: number;
  };
}
export type EmailCampaign_DeleteEmailTemplateResponse = Record<string, unknown>;
export const EmailCampaign_DeleteEmailTemplateResponse = t.UnknownRecord;

/* EmailCampaign_DeleteEmailTemplate */
export const EmailCampaign_DeleteEmailTemplateReader = u.controllerFactory<
  EmailCampaign_DeleteEmailTemplateRequest,
  EmailCampaign_DeleteEmailTemplateResponse
>(
  EmailCampaign_DeleteEmailTemplateResponse,
  'delete',
  '/api/admin/email-campaigns/templates/{emailTemplateId}'
);

export interface Employment_UpsertEmploymentInfoRequest {
  body: m.EmploymentInfoModel;
}
export type Employment_UpsertEmploymentInfoResponse = m.EmploymentInfoModel;
export const Employment_UpsertEmploymentInfoResponse = m.EmploymentInfoModel;

/* Employment_UpsertEmploymentInfo */
export const Employment_UpsertEmploymentInfoReader = u.controllerFactory<
  Employment_UpsertEmploymentInfoRequest,
  Employment_UpsertEmploymentInfoResponse
>(
  Employment_UpsertEmploymentInfoResponse,
  'post',
  '/api/Employment/UpsertEmploymentInfo'
);

export interface Employment_DeleteEmploymentInfoRequest {
  path: {
    employmentId: number;
  };
}
export type Employment_DeleteEmploymentInfoResponse = boolean;
export const Employment_DeleteEmploymentInfoResponse = t.boolean;

/* Employment_DeleteEmploymentInfo */
export const Employment_DeleteEmploymentInfoReader = u.controllerFactory<
  Employment_DeleteEmploymentInfoRequest,
  Employment_DeleteEmploymentInfoResponse
>(
  Employment_DeleteEmploymentInfoResponse,
  'delete',
  '/api/Employment/{employmentId}'
);

export interface Events_PostNewEventRequest {
  body: m.EventViewModel;
}
export type Events_PostNewEventResponse = m.EventViewModel;
export const Events_PostNewEventResponse = m.EventViewModel;

/* Events_PostNewEvent */
export const Events_PostNewEventReader = u.controllerFactory<
  Events_PostNewEventRequest,
  Events_PostNewEventResponse
>(Events_PostNewEventResponse, 'post', '/api/Events/NewEvent');

export interface Events_PostDropEventRequest {
  path: {
    eventid: number;
    delay: number;
    allday: boolean;
  };
}
export type Events_PostDropEventResponse = Record<string, unknown>;
export const Events_PostDropEventResponse = t.UnknownRecord;

/* Events_PostDropEvent */
export const Events_PostDropEventReader = u.controllerFactory<
  Events_PostDropEventRequest,
  Events_PostDropEventResponse
>(
  Events_PostDropEventResponse,
  'post',
  '/api/Events/DropEvent/{eventid}/{delay}/{allday}'
);

export interface Events_PostResizeEventRequest {
  path: {
    eventid: number;
    delay: number;
    addDays: boolean;
  };
}
export type Events_PostResizeEventResponse = Record<string, unknown>;
export const Events_PostResizeEventResponse = t.UnknownRecord;

/* Events_PostResizeEvent */
export const Events_PostResizeEventReader = u.controllerFactory<
  Events_PostResizeEventRequest,
  Events_PostResizeEventResponse
>(
  Events_PostResizeEventResponse,
  'post',
  '/api/Events/ResizeEvent/{eventid}/{delay}/{addDays}'
);

export interface Events_UpdateEventRequest {
  body: m.EventViewModel;
}
export type Events_UpdateEventResponse = m.EventViewModel;
export const Events_UpdateEventResponse = m.EventViewModel;

/* Events_UpdateEvent */
export const Events_UpdateEventReader = u.controllerFactory<
  Events_UpdateEventRequest,
  Events_UpdateEventResponse
>(Events_UpdateEventResponse, 'post', '/api/Events/UpdateEvent');

export interface Events_DeleteEventRequest {
  path: {
    eventId: number;
  };
}
export type Events_DeleteEventResponse = Record<string, unknown>;
export const Events_DeleteEventResponse = t.UnknownRecord;

/* Events_DeleteEvent */
export const Events_DeleteEventReader = u.controllerFactory<
  Events_DeleteEventRequest,
  Events_DeleteEventResponse
>(Events_DeleteEventResponse, 'delete', '/api/Events/DeleteEvent/{eventId}');

export interface Events_GetAllEventsRequest {
  query: {
    /** filter by max date to search through */
    filterdate?: string;
    /** filter by application id */
    applicationId?: number;
    /** filter by lead id */
    leadId?: number;
  };
}
export type Events_GetAllEventsResponse = Array<m.EventViewModel>;
export const Events_GetAllEventsResponse = t.array(m.EventViewModel);

/* Events_GetAllEvents: Get all events */
export const Events_GetAllEventsReader = u.controllerFactory<
  Events_GetAllEventsRequest,
  Events_GetAllEventsResponse
>(Events_GetAllEventsResponse, 'get', '/api/Events/AllEvents');

export interface Events_GetAllEventSchedulingRequest {
  path: {
    companyId: number;
    userId: string;
    isAdmin: boolean;
  };
}
export type Events_GetAllEventSchedulingResponse = Array<m.EventViewModel>;
export const Events_GetAllEventSchedulingResponse = t.array(m.EventViewModel);

/* Events_GetAllEventScheduling */
export const Events_GetAllEventSchedulingReader = u.controllerFactory<
  Events_GetAllEventSchedulingRequest,
  Events_GetAllEventSchedulingResponse
>(
  Events_GetAllEventSchedulingResponse,
  'get',
  '/api/Events/AllEventScheduling/{companyId}/{userId}/{isAdmin}'
);

export interface Events_PostRemoveListEventRequest {
  body: number[];
}
export type Events_PostRemoveListEventResponse = boolean;
export const Events_PostRemoveListEventResponse = t.boolean;

/* Events_PostRemoveListEvent */
export const Events_PostRemoveListEventReader = u.controllerFactory<
  Events_PostRemoveListEventRequest,
  Events_PostRemoveListEventResponse
>(Events_PostRemoveListEventResponse, 'post', '/api/Events/RemoveListEvent');

export interface Events_GetUserNameRequest {
  path: {
    userId: string;
  };
}
export type Events_GetUserNameResponse = string;
export const Events_GetUserNameResponse = t.string;

/* Events_GetUserName */
export const Events_GetUserNameReader = u.controllerFactory<
  Events_GetUserNameRequest,
  Events_GetUserNameResponse
>(Events_GetUserNameResponse, 'get', '/api/Events/UserName/{userId}');

export interface File_TrackingFileRequest {
  path: {
    guid: string;
  };
}
export type File_TrackingFileResponse = Array<m.TrackingViewModel>;
export const File_TrackingFileResponse = t.array(m.TrackingViewModel);

/* File_TrackingFile */
export const File_TrackingFileReader = u.controllerFactory<
  File_TrackingFileRequest,
  File_TrackingFileResponse
>(File_TrackingFileResponse, 'get', '/api/File/TrackingFile/{guid}');

export interface File_GetDocFileRequest {
  path: {
    guid: string;
  };
}
export type File_GetDocFileResponse = m.DocFileModel;
export const File_GetDocFileResponse = m.DocFileModel;

/* File_GetDocFile */
export const File_GetDocFileReader = u.controllerFactory<
  File_GetDocFileRequest,
  File_GetDocFileResponse
>(File_GetDocFileResponse, 'get', '/api/File/GetDocFile/{guid}');

export interface File_RemoveFileRequest {
  path: {
    guid: string;
  };
}
export type File_RemoveFileResponse = m.DocFileModel;
export const File_RemoveFileResponse = m.DocFileModel;

/* File_RemoveFile */
export const File_RemoveFileReader = u.controllerFactory<
  File_RemoveFileRequest,
  File_RemoveFileResponse
>(File_RemoveFileResponse, 'post', '/api/File/RemoveFile/{guid}');

export interface File_UpsertFileFromTaskRequest {
  path: {
    taskId: number;
  };
  query: {
    autoTransition?: boolean;
  };
}
export type File_UpsertFileFromTaskResponse = m.FileDto;
export const File_UpsertFileFromTaskResponse = m.FileDto;

/* File_UpsertFileFromTask */
export const File_UpsertFileFromTaskReader = u.controllerFactory<
  File_UpsertFileFromTaskRequest,
  File_UpsertFileFromTaskResponse
>(
  File_UpsertFileFromTaskResponse,
  'post',
  '/api/File/UpsertFileFromTask/{taskId}'
);

export interface File_UpsertFileFromLoanDocRequest {
  path: {
    loanDocId: number;
  };
}
export type File_UpsertFileFromLoanDocResponse = m.FileDto;
export const File_UpsertFileFromLoanDocResponse = m.FileDto;

/* File_UpsertFileFromLoanDoc */
export const File_UpsertFileFromLoanDocReader = u.controllerFactory<
  File_UpsertFileFromLoanDocRequest,
  File_UpsertFileFromLoanDocResponse
>(
  File_UpsertFileFromLoanDocResponse,
  'post',
  '/api/File/UpsertFileFromLoanDoc/{loanDocId}'
);

export interface File_GetFileForExportRequest {
  path: {
    appId: number;
  };
}
export type File_GetFileForExportResponse = Array<m.ExportDocumentModel>;
export const File_GetFileForExportResponse = t.array(m.ExportDocumentModel);

/* File_GetFileForExport */
export const File_GetFileForExportReader = u.controllerFactory<
  File_GetFileForExportRequest,
  File_GetFileForExportResponse
>(File_GetFileForExportResponse, 'get', '/api/File/GetFileForExport/{appId}');

export interface File_DownloadFileRequest {
  path: {
    fileGuid: string;
    downloadUserId: string;
  };
}
export type File_DownloadFileResponse = Record<string, unknown>;
export const File_DownloadFileResponse = t.UnknownRecord;

/* File_DownloadFile */
export const File_DownloadFileReader = u.controllerFactory<
  File_DownloadFileRequest,
  File_DownloadFileResponse
>(
  File_DownloadFileResponse,
  'get',
  '/api/File/DownloadFile/{fileGuid}/{downloadUserId}'
);

export interface File_ViewFileRequest {
  path: {
    fileGuid: string;
    userId: string;
  };
}
export type File_ViewFileResponse = Record<string, unknown>;
export const File_ViewFileResponse = t.UnknownRecord;

/* File_ViewFile */
export const File_ViewFileReader = u.controllerFactory<
  File_ViewFileRequest,
  File_ViewFileResponse
>(File_ViewFileResponse, 'get', '/api/File/ViewFile/{fileGuid}/{userId}');

export interface File_ExportFileRequest {
  path: {
    asPDF: boolean;
  };
  body: m.ExportDocFilesRequest;
}
export type File_ExportFileResponse = Record<string, unknown>;
export const File_ExportFileResponse = t.UnknownRecord;

/* File_ExportFile */
export const File_ExportFileReader = u.controllerFactory<
  File_ExportFileRequest,
  File_ExportFileResponse
>(File_ExportFileResponse, 'post', '/api/File/ExportFile/{asPDF}');

export interface File_ConvertToPdfRequest {
  path: {
    fileGuid: string;
  };
}
export type File_ConvertToPdfResponse = string;
export const File_ConvertToPdfResponse = t.string;

/* File_ConvertToPdf */
export const File_ConvertToPdfReader = u.controllerFactory<
  File_ConvertToPdfRequest,
  File_ConvertToPdfResponse
>(File_ConvertToPdfResponse, 'post', '/api/File/convert-to-pdf/{fileGuid}');

export interface FlowBuilder_GetFlowsFilteredRequest {
  query: {
    companyIdFilter: number;
    flowTypeFilter:
      | 'Unspecified'
      | 'LeadPost'
      | 'OnlineApplication'
      | 'ContactStrategy';
  };
}
export type FlowBuilder_GetFlowsFilteredResponse = Array<
  m.FlowBuilderViewModel
>;
export const FlowBuilder_GetFlowsFilteredResponse = t.array(
  m.FlowBuilderViewModel
);

/* FlowBuilder_GetFlowsFiltered */
export const FlowBuilder_GetFlowsFilteredReader = u.controllerFactory<
  FlowBuilder_GetFlowsFilteredRequest,
  FlowBuilder_GetFlowsFilteredResponse
>(FlowBuilder_GetFlowsFilteredResponse, 'get', '/api/flow-builder');

export interface FlowBuilder_InsertFlowRequest {
  body: m.FlowBuilderViewModel;
}
export type FlowBuilder_InsertFlowResponse = m.FlowBuilderViewModel;
export const FlowBuilder_InsertFlowResponse = m.FlowBuilderViewModel;

/* FlowBuilder_InsertFlow */
export const FlowBuilder_InsertFlowReader = u.controllerFactory<
  FlowBuilder_InsertFlowRequest,
  FlowBuilder_InsertFlowResponse
>(FlowBuilder_InsertFlowResponse, 'post', '/api/flow-builder');

export interface FlowBuilder_GetFlowRequest {
  path: {
    flowId: number;
  };
}
export type FlowBuilder_GetFlowResponse = m.FlowBuilderViewModel;
export const FlowBuilder_GetFlowResponse = m.FlowBuilderViewModel;

/* FlowBuilder_GetFlow */
export const FlowBuilder_GetFlowReader = u.controllerFactory<
  FlowBuilder_GetFlowRequest,
  FlowBuilder_GetFlowResponse
>(FlowBuilder_GetFlowResponse, 'get', '/api/flow-builder/{flowId}');

export interface FlowBuilder_UpdateFlowRequest {
  path: {
    flowId: number;
  };
  body: m.FlowBuilderViewModel;
}
export type FlowBuilder_UpdateFlowResponse = m.FlowBuilderViewModel;
export const FlowBuilder_UpdateFlowResponse = m.FlowBuilderViewModel;

/* FlowBuilder_UpdateFlow */
export const FlowBuilder_UpdateFlowReader = u.controllerFactory<
  FlowBuilder_UpdateFlowRequest,
  FlowBuilder_UpdateFlowResponse
>(FlowBuilder_UpdateFlowResponse, 'put', '/api/flow-builder/{flowId}');

export interface FlowBuilder_DeleteFlowRequest {
  path: {
    flowId: number;
  };
}
export type FlowBuilder_DeleteFlowResponse = Record<string, unknown>;
export const FlowBuilder_DeleteFlowResponse = t.UnknownRecord;

/* FlowBuilder_DeleteFlow */
export const FlowBuilder_DeleteFlowReader = u.controllerFactory<
  FlowBuilder_DeleteFlowRequest,
  FlowBuilder_DeleteFlowResponse
>(FlowBuilder_DeleteFlowResponse, 'delete', '/api/flow-builder/{flowId}');

export interface FlowBuilder_GetFlowByGuidRequest {
  path: {
    flowguid: string;
  };
}
export type FlowBuilder_GetFlowByGuidResponse = m.FlowBuilderViewModel;
export const FlowBuilder_GetFlowByGuidResponse = m.FlowBuilderViewModel;

/* FlowBuilder_GetFlowByGuid */
export const FlowBuilder_GetFlowByGuidReader = u.controllerFactory<
  FlowBuilder_GetFlowByGuidRequest,
  FlowBuilder_GetFlowByGuidResponse
>(
  FlowBuilder_GetFlowByGuidResponse,
  'get',
  '/api/flow-builder/by-guid/{flowguid}'
);

export interface FlowBuilder_UpdateFlowByGuidRequest {
  path: {
    flowGuid: string;
  };
  body: m.FlowBuilderViewModel;
}
export type FlowBuilder_UpdateFlowByGuidResponse = m.FlowBuilderViewModel;
export const FlowBuilder_UpdateFlowByGuidResponse = m.FlowBuilderViewModel;

/* FlowBuilder_UpdateFlowByGuid */
export const FlowBuilder_UpdateFlowByGuidReader = u.controllerFactory<
  FlowBuilder_UpdateFlowByGuidRequest,
  FlowBuilder_UpdateFlowByGuidResponse
>(
  FlowBuilder_UpdateFlowByGuidResponse,
  'put',
  '/api/flow-builder/by-guid/{flowGuid}'
);

export interface FlowBuilder_DeleteFlowByGuidRequest {
  path: {
    flowGuid: string;
  };
}
export type FlowBuilder_DeleteFlowByGuidResponse = Record<string, unknown>;
export const FlowBuilder_DeleteFlowByGuidResponse = t.UnknownRecord;

/* FlowBuilder_DeleteFlowByGuid */
export const FlowBuilder_DeleteFlowByGuidReader = u.controllerFactory<
  FlowBuilder_DeleteFlowByGuidRequest,
  FlowBuilder_DeleteFlowByGuidResponse
>(
  FlowBuilder_DeleteFlowByGuidResponse,
  'delete',
  '/api/flow-builder/by-guid/{flowGuid}'
);

export interface FlowBuilder_InsertFlowByGuidRequest {
  body: m.FlowBuilderViewModel;
}
export type FlowBuilder_InsertFlowByGuidResponse = m.FlowBuilderViewModel;
export const FlowBuilder_InsertFlowByGuidResponse = m.FlowBuilderViewModel;

/* FlowBuilder_InsertFlowByGuid */
export const FlowBuilder_InsertFlowByGuidReader = u.controllerFactory<
  FlowBuilder_InsertFlowByGuidRequest,
  FlowBuilder_InsertFlowByGuidResponse
>(FlowBuilder_InsertFlowByGuidResponse, 'post', '/api/flow-builder/by-guid');

export interface FormFree_GetFormFreeHistoryRequest {
  query: {
    /** id of the application to filter on */
    loanId?: number;
    /** id of the lead to filter on */
    leadId?: number;
    /** id of the borrower to filter on */
    borrowerId?: number;
  };
}
export type FormFree_GetFormFreeHistoryResponse = Array<
  m.FormFreeHistoryViewModel
>;
export const FormFree_GetFormFreeHistoryResponse = t.array(
  m.FormFreeHistoryViewModel
);

/* FormFree_GetFormFreeHistory: Get form free history by filters */
export const FormFree_GetFormFreeHistoryReader = u.controllerFactory<
  FormFree_GetFormFreeHistoryRequest,
  FormFree_GetFormFreeHistoryResponse
>(FormFree_GetFormFreeHistoryResponse, 'get', '/api/form-free/history');

export interface FormFree_GetLiteAccountInfoRequest {
  path: {
    transactionId: string;
  };
}
export type FormFree_GetLiteAccountInfoResponse = Array<m.LiteAccountInfo>;
export const FormFree_GetLiteAccountInfoResponse = t.array(m.LiteAccountInfo);

/* FormFree_GetLiteAccountInfo: Retrieves Account info for VOA transaction id */
export const FormFree_GetLiteAccountInfoReader = u.controllerFactory<
  FormFree_GetLiteAccountInfoRequest,
  FormFree_GetLiteAccountInfoResponse
>(
  FormFree_GetLiteAccountInfoResponse,
  'get',
  '/api/form-free/{transactionId}/lite'
);

export interface FormFree_UpgradeVoaRequestRequest {
  path: {
    transactionId: string;
  };
}
export type FormFree_UpgradeVoaRequestResponse = m.FormFreeHistoryViewModel;
export const FormFree_UpgradeVoaRequestResponse = m.FormFreeHistoryViewModel;

/* FormFree_UpgradeVoaRequest: Upgrade the VOA for transaction id */
export const FormFree_UpgradeVoaRequestReader = u.controllerFactory<
  FormFree_UpgradeVoaRequestRequest,
  FormFree_UpgradeVoaRequestResponse
>(
  FormFree_UpgradeVoaRequestResponse,
  'post',
  '/api/form-free/{transactionId}/upgrade'
);

export interface FormFree_LinkHistoryToBorrowerRequest {
  path: {
    /** id of the form free history record */
    historyId: number;
    /** id of the borrower to link to the record */
    borrowerId: number;
  };
}
export type FormFree_LinkHistoryToBorrowerResponse = Array<
  m.FormFreeHistoryViewModel
>;
export const FormFree_LinkHistoryToBorrowerResponse = t.array(
  m.FormFreeHistoryViewModel
);

/* FormFree_LinkHistoryToBorrower: Link history to borrower by Id */
export const FormFree_LinkHistoryToBorrowerReader = u.controllerFactory<
  FormFree_LinkHistoryToBorrowerRequest,
  FormFree_LinkHistoryToBorrowerResponse
>(
  FormFree_LinkHistoryToBorrowerResponse,
  'post',
  '/api/form-free/history/{historyId}/link-to-borrower/{borrowerId}'
);

export interface FormFree_InviteBorrowerRequest {
  path: {
    /** id of the loan */
    loanId: number;
    /** id of the borrower to invite */
    borrowerId: number;
  };
  query: {
    /** type of voa request to perform (optional: will default to lite if not provided) */
    requestType?: 'full' | 'lite';
  };
}
export type FormFree_InviteBorrowerResponse = Record<string, unknown>;
export const FormFree_InviteBorrowerResponse = t.UnknownRecord;

/* FormFree_InviteBorrower: Invite the borrower to complete VOA */
export const FormFree_InviteBorrowerReader = u.controllerFactory<
  FormFree_InviteBorrowerRequest,
  FormFree_InviteBorrowerResponse
>(
  FormFree_InviteBorrowerResponse,
  'post',
  '/api/form-free/invite/{loanId}/{borrowerId}'
);

export interface GeneratedDocument_GenerateDocumentRequest {
  body: m.GenerateDocumentRequest;
}
export type GeneratedDocument_GenerateDocumentResponse = string;
export const GeneratedDocument_GenerateDocumentResponse = t.string;

/* GeneratedDocument_GenerateDocument */
export const GeneratedDocument_GenerateDocumentReader = u.controllerFactory<
  GeneratedDocument_GenerateDocumentRequest,
  GeneratedDocument_GenerateDocumentResponse
>(
  GeneratedDocument_GenerateDocumentResponse,
  'post',
  '/api/admin/generated-documents'
);

export interface IntegrationHistory_GetDocumentRequest {
  path: {
    integrationHistoryId: number;
  };
}
export type IntegrationHistory_GetDocumentResponse = Record<string, unknown>;
export const IntegrationHistory_GetDocumentResponse = t.UnknownRecord;

/* IntegrationHistory_GetDocument */
export const IntegrationHistory_GetDocumentReader = u.controllerFactory<
  IntegrationHistory_GetDocumentRequest,
  IntegrationHistory_GetDocumentResponse
>(
  IntegrationHistory_GetDocumentResponse,
  'get',
  '/api/integration-history/{integrationHistoryId}/document'
);

export type Kpi_GetAvailableDashboardsResponse = Array<string>;
export const Kpi_GetAvailableDashboardsResponse = t.array(t.string);

/* Kpi_GetAvailableDashboards: Get Available Dashboards */
export const Kpi_GetAvailableDashboardsReader = u.requestlessControllerFactory<
  Kpi_GetAvailableDashboardsResponse
>(Kpi_GetAvailableDashboardsResponse, 'get', '/api/kpi/get-dashboards');

export type Kpi_GetAvailableKpisResponse = Array<string>;
export const Kpi_GetAvailableKpisResponse = t.array(t.string);

/* Kpi_GetAvailableKpis: Get Available Kpis */
export const Kpi_GetAvailableKpisReader = u.requestlessControllerFactory<
  Kpi_GetAvailableKpisResponse
>(Kpi_GetAvailableKpisResponse, 'get', '/api/kpi/get-kpis');

export interface Kpi_GetKpisRequest {
  body: Array<m.KpiRequestModel>;
}
export type Kpi_GetKpisResponse = Array<m.KpiResponseModel>;
export const Kpi_GetKpisResponse = t.array(m.KpiResponseModel);

/* Kpi_GetKpis: Get kpis */
export const Kpi_GetKpisReader = u.controllerFactory<
  Kpi_GetKpisRequest,
  Kpi_GetKpisResponse
>(Kpi_GetKpisResponse, 'post', '/api/kpi/get-kpis');

export interface Lead_GetAllLeadsRequest {
  query: {
    showArchived?: boolean;
    campaignId?: number;
    dateInsertedStart?: string;
    dateInsertedEnd?: string;
  };
}
export type Lead_GetAllLeadsResponse = Array<m.LeadViewModel>;
export const Lead_GetAllLeadsResponse = t.array(m.LeadViewModel);

/* Lead_GetAllLeads */
export const Lead_GetAllLeadsReader = u.controllerFactory<
  Lead_GetAllLeadsRequest,
  Lead_GetAllLeadsResponse
>(Lead_GetAllLeadsResponse, 'get', '/api/leads/all');

export interface Lead_GetAllUnassignedLeadsRequest {
  query: {
    showArchived?: boolean;
  };
}
export type Lead_GetAllUnassignedLeadsResponse = Array<m.LeadViewModel>;
export const Lead_GetAllUnassignedLeadsResponse = t.array(m.LeadViewModel);

/* Lead_GetAllUnassignedLeads */
export const Lead_GetAllUnassignedLeadsReader = u.controllerFactory<
  Lead_GetAllUnassignedLeadsRequest,
  Lead_GetAllUnassignedLeadsResponse
>(Lead_GetAllUnassignedLeadsResponse, 'get', '/api/leads/unassigned');

export interface Lead_GetLeadByIdRequest {
  path: {
    leadId: number;
  };
}
export type Lead_GetLeadByIdResponse = m.LeadViewModel;
export const Lead_GetLeadByIdResponse = m.LeadViewModel;

/* Lead_GetLeadById */
export const Lead_GetLeadByIdReader = u.controllerFactory<
  Lead_GetLeadByIdRequest,
  Lead_GetLeadByIdResponse
>(Lead_GetLeadByIdResponse, 'get', '/api/leads/{leadId}');

export interface Lead_UpdateLeadRequest {
  path: {
    leadId: number;
  };
  body: m.LeadViewModel;
}
export type Lead_UpdateLeadResponse = m.LeadViewModel;
export const Lead_UpdateLeadResponse = m.LeadViewModel;

/* Lead_UpdateLead */
export const Lead_UpdateLeadReader = u.controllerFactory<
  Lead_UpdateLeadRequest,
  Lead_UpdateLeadResponse
>(Lead_UpdateLeadResponse, 'post', '/api/leads/{leadId}');

export interface Lead_DeleteLeadRequest {
  path: {
    leadId: number;
  };
}
export type Lead_DeleteLeadResponse = Record<string, unknown>;
export const Lead_DeleteLeadResponse = t.UnknownRecord;

/* Lead_DeleteLead */
export const Lead_DeleteLeadReader = u.controllerFactory<
  Lead_DeleteLeadRequest,
  Lead_DeleteLeadResponse
>(Lead_DeleteLeadResponse, 'delete', '/api/leads/{leadId}');

export interface Lead_InsertLeadRequest {
  body: m.LeadViewModel;
}
export type Lead_InsertLeadResponse = m.LeadViewModel;
export const Lead_InsertLeadResponse = m.LeadViewModel;

/* Lead_InsertLead */
export const Lead_InsertLeadReader = u.controllerFactory<
  Lead_InsertLeadRequest,
  Lead_InsertLeadResponse
>(Lead_InsertLeadResponse, 'post', '/api/leads');

export interface Lead_ConvertLeadToBorrowerRequest {
  path: {
    leadId: number;
    referralSourceType: number;
  };
}
export type Lead_ConvertLeadToBorrowerResponse = Record<string, unknown>;
export const Lead_ConvertLeadToBorrowerResponse = t.UnknownRecord;

/* Lead_ConvertLeadToBorrower */
export const Lead_ConvertLeadToBorrowerReader = u.controllerFactory<
  Lead_ConvertLeadToBorrowerRequest,
  Lead_ConvertLeadToBorrowerResponse
>(
  Lead_ConvertLeadToBorrowerResponse,
  'post',
  '/api/leads/{leadId}/convert/{referralSourceType}'
);

export interface Lead_ImportListUserForCompanyRequest {
  query: {
    companyId?: number;
  };
}
export type Lead_ImportListUserForCompanyResponse = m.LeadViewModel;
export const Lead_ImportListUserForCompanyResponse = m.LeadViewModel;

/* Lead_ImportListUserForCompany */
export const Lead_ImportListUserForCompanyReader = u.controllerFactory<
  Lead_ImportListUserForCompanyRequest,
  Lead_ImportListUserForCompanyResponse
>(Lead_ImportListUserForCompanyResponse, 'post', '/api/leads/import-leads');

export type Lead_ExportLeadsResponse = Record<string, unknown>;
export const Lead_ExportLeadsResponse = t.UnknownRecord;

/* Lead_ExportLeads */
export const Lead_ExportLeadsReader = u.requestlessControllerFactory<
  Lead_ExportLeadsResponse
>(Lead_ExportLeadsResponse, 'get', '/api/leads/export-leads');

export interface Lead_GetLeadEventsByLeadIdRequest {
  path: {
    leadId: number;
  };
}
export type Lead_GetLeadEventsByLeadIdResponse = Array<m.LeadEventViewModel>;
export const Lead_GetLeadEventsByLeadIdResponse = t.array(m.LeadEventViewModel);

/* Lead_GetLeadEventsByLeadId */
export const Lead_GetLeadEventsByLeadIdReader = u.controllerFactory<
  Lead_GetLeadEventsByLeadIdRequest,
  Lead_GetLeadEventsByLeadIdResponse
>(Lead_GetLeadEventsByLeadIdResponse, 'get', '/api/leads/{leadId}/events');

export interface Lead_InsertLeadEventRequest {
  path: {
    leadId: number;
  };
  body: m.LeadEventViewModel;
}
export type Lead_InsertLeadEventResponse = m.LeadEventViewModel;
export const Lead_InsertLeadEventResponse = m.LeadEventViewModel;

/* Lead_InsertLeadEvent */
export const Lead_InsertLeadEventReader = u.controllerFactory<
  Lead_InsertLeadEventRequest,
  Lead_InsertLeadEventResponse
>(Lead_InsertLeadEventResponse, 'post', '/api/leads/{leadId}/events');

export interface Lead_GetLeadEventByIdRequest {
  path: {
    leadEventId: number;
  };
}
export type Lead_GetLeadEventByIdResponse = m.LeadEventViewModel;
export const Lead_GetLeadEventByIdResponse = m.LeadEventViewModel;

/* Lead_GetLeadEventById */
export const Lead_GetLeadEventByIdReader = u.controllerFactory<
  Lead_GetLeadEventByIdRequest,
  Lead_GetLeadEventByIdResponse
>(Lead_GetLeadEventByIdResponse, 'get', '/api/leads/events/{leadEventId}');

export interface Lead_UpdateLeadEventRequest {
  path: {
    leadEventId: number;
  };
  body: m.LeadEventViewModel;
}
export type Lead_UpdateLeadEventResponse = m.LeadEventViewModel;
export const Lead_UpdateLeadEventResponse = m.LeadEventViewModel;

/* Lead_UpdateLeadEvent */
export const Lead_UpdateLeadEventReader = u.controllerFactory<
  Lead_UpdateLeadEventRequest,
  Lead_UpdateLeadEventResponse
>(Lead_UpdateLeadEventResponse, 'post', '/api/leads/events/{leadEventId}');

export interface Lead_DeleteLeadEventRequest {
  path: {
    leadEventId: number;
  };
}
export type Lead_DeleteLeadEventResponse = Record<string, unknown>;
export const Lead_DeleteLeadEventResponse = t.UnknownRecord;

/* Lead_DeleteLeadEvent */
export const Lead_DeleteLeadEventReader = u.controllerFactory<
  Lead_DeleteLeadEventRequest,
  Lead_DeleteLeadEventResponse
>(Lead_DeleteLeadEventResponse, 'delete', '/api/leads/events/{leadEventId}');

export interface Lead_GetLeadEmploymentsByLeadIdRequest {
  path: {
    leadId: number;
  };
}
export type Lead_GetLeadEmploymentsByLeadIdResponse = Array<
  m.LeadEmploymentViewModel
>;
export const Lead_GetLeadEmploymentsByLeadIdResponse = t.array(
  m.LeadEmploymentViewModel
);

/* Lead_GetLeadEmploymentsByLeadId */
export const Lead_GetLeadEmploymentsByLeadIdReader = u.controllerFactory<
  Lead_GetLeadEmploymentsByLeadIdRequest,
  Lead_GetLeadEmploymentsByLeadIdResponse
>(
  Lead_GetLeadEmploymentsByLeadIdResponse,
  'get',
  '/api/leads/{leadId}/employments'
);

export interface Lead_InsertLeadEmploymentRequest {
  path: {
    leadId: number;
  };
  body: m.LeadEmploymentViewModel;
}
export type Lead_InsertLeadEmploymentResponse = m.LeadEmploymentViewModel;
export const Lead_InsertLeadEmploymentResponse = m.LeadEmploymentViewModel;

/* Lead_InsertLeadEmployment */
export const Lead_InsertLeadEmploymentReader = u.controllerFactory<
  Lead_InsertLeadEmploymentRequest,
  Lead_InsertLeadEmploymentResponse
>(Lead_InsertLeadEmploymentResponse, 'post', '/api/leads/{leadId}/employments');

export interface Lead_GetLeadEmploymentByIdRequest {
  path: {
    leadEmploymentId: number;
  };
}
export type Lead_GetLeadEmploymentByIdResponse = m.LeadEmploymentViewModel;
export const Lead_GetLeadEmploymentByIdResponse = m.LeadEmploymentViewModel;

/* Lead_GetLeadEmploymentById */
export const Lead_GetLeadEmploymentByIdReader = u.controllerFactory<
  Lead_GetLeadEmploymentByIdRequest,
  Lead_GetLeadEmploymentByIdResponse
>(
  Lead_GetLeadEmploymentByIdResponse,
  'get',
  '/api/leads/employments/{leadEmploymentId}'
);

export interface Lead_UpdateLeadEmploymentRequest {
  path: {
    leadEmploymentId: number;
  };
  body: m.LeadEmploymentViewModel;
}
export type Lead_UpdateLeadEmploymentResponse = m.LeadEmploymentViewModel;
export const Lead_UpdateLeadEmploymentResponse = m.LeadEmploymentViewModel;

/* Lead_UpdateLeadEmployment */
export const Lead_UpdateLeadEmploymentReader = u.controllerFactory<
  Lead_UpdateLeadEmploymentRequest,
  Lead_UpdateLeadEmploymentResponse
>(
  Lead_UpdateLeadEmploymentResponse,
  'post',
  '/api/leads/employments/{leadEmploymentId}'
);

export interface Lead_DeleteLeadEmploymentRequest {
  path: {
    leadEmploymentId: number;
  };
}
export type Lead_DeleteLeadEmploymentResponse = Record<string, unknown>;
export const Lead_DeleteLeadEmploymentResponse = t.UnknownRecord;

/* Lead_DeleteLeadEmployment */
export const Lead_DeleteLeadEmploymentReader = u.controllerFactory<
  Lead_DeleteLeadEmploymentRequest,
  Lead_DeleteLeadEmploymentResponse
>(
  Lead_DeleteLeadEmploymentResponse,
  'delete',
  '/api/leads/employments/{leadEmploymentId}'
);

export interface Lead_GetLeadCreditsByLeadIdRequest {
  path: {
    leadId: number;
  };
}
export type Lead_GetLeadCreditsByLeadIdResponse = Array<m.LeadCreditViewModel>;
export const Lead_GetLeadCreditsByLeadIdResponse = t.array(
  m.LeadCreditViewModel
);

/* Lead_GetLeadCreditsByLeadId */
export const Lead_GetLeadCreditsByLeadIdReader = u.controllerFactory<
  Lead_GetLeadCreditsByLeadIdRequest,
  Lead_GetLeadCreditsByLeadIdResponse
>(Lead_GetLeadCreditsByLeadIdResponse, 'get', '/api/leads/{leadId}/credits');

export interface Lead_InsertLeadCreditRequest {
  path: {
    leadId: number;
  };
  body: m.LeadCreditViewModel;
}
export type Lead_InsertLeadCreditResponse = m.LeadCreditViewModel;
export const Lead_InsertLeadCreditResponse = m.LeadCreditViewModel;

/* Lead_InsertLeadCredit */
export const Lead_InsertLeadCreditReader = u.controllerFactory<
  Lead_InsertLeadCreditRequest,
  Lead_InsertLeadCreditResponse
>(Lead_InsertLeadCreditResponse, 'post', '/api/leads/{leadId}/credits');

export interface Lead_GetLeadCreditByIdRequest {
  path: {
    leadCreditId: number;
  };
}
export type Lead_GetLeadCreditByIdResponse = m.LeadCreditViewModel;
export const Lead_GetLeadCreditByIdResponse = m.LeadCreditViewModel;

/* Lead_GetLeadCreditById */
export const Lead_GetLeadCreditByIdReader = u.controllerFactory<
  Lead_GetLeadCreditByIdRequest,
  Lead_GetLeadCreditByIdResponse
>(Lead_GetLeadCreditByIdResponse, 'get', '/api/leads/credits/{leadCreditId}');

export interface Lead_UpdateLeadCreditRequest {
  path: {
    leadCreditId: number;
  };
  body: m.LeadCreditViewModel;
}
export type Lead_UpdateLeadCreditResponse = m.LeadCreditViewModel;
export const Lead_UpdateLeadCreditResponse = m.LeadCreditViewModel;

/* Lead_UpdateLeadCredit */
export const Lead_UpdateLeadCreditReader = u.controllerFactory<
  Lead_UpdateLeadCreditRequest,
  Lead_UpdateLeadCreditResponse
>(Lead_UpdateLeadCreditResponse, 'post', '/api/leads/credits/{leadCreditId}');

export interface Lead_DeleteLeadCreditRequest {
  path: {
    leadCreditId: number;
  };
}
export type Lead_DeleteLeadCreditResponse = Record<string, unknown>;
export const Lead_DeleteLeadCreditResponse = t.UnknownRecord;

/* Lead_DeleteLeadCredit */
export const Lead_DeleteLeadCreditReader = u.controllerFactory<
  Lead_DeleteLeadCreditRequest,
  Lead_DeleteLeadCreditResponse
>(Lead_DeleteLeadCreditResponse, 'delete', '/api/leads/credits/{leadCreditId}');

export type Lead_GetAllLeadCampaignsResponse = Array<m.LeadCampaignViewModel>;
export const Lead_GetAllLeadCampaignsResponse = t.array(
  m.LeadCampaignViewModel
);

/* Lead_GetAllLeadCampaigns */
export const Lead_GetAllLeadCampaignsReader = u.requestlessControllerFactory<
  Lead_GetAllLeadCampaignsResponse
>(Lead_GetAllLeadCampaignsResponse, 'get', '/api/leads/campaigns');

export interface Lead_InsertLeadCampaignRequest {
  body: m.LeadCampaignViewModel;
}
export type Lead_InsertLeadCampaignResponse = m.LeadCampaignViewModel;
export const Lead_InsertLeadCampaignResponse = m.LeadCampaignViewModel;

/* Lead_InsertLeadCampaign */
export const Lead_InsertLeadCampaignReader = u.controllerFactory<
  Lead_InsertLeadCampaignRequest,
  Lead_InsertLeadCampaignResponse
>(Lead_InsertLeadCampaignResponse, 'post', '/api/leads/campaigns');

export interface Lead_GetLeadCampaignByIdRequest {
  path: {
    leadCampaignId: number;
  };
}
export type Lead_GetLeadCampaignByIdResponse = m.LeadCampaignViewModel;
export const Lead_GetLeadCampaignByIdResponse = m.LeadCampaignViewModel;

/* Lead_GetLeadCampaignById */
export const Lead_GetLeadCampaignByIdReader = u.controllerFactory<
  Lead_GetLeadCampaignByIdRequest,
  Lead_GetLeadCampaignByIdResponse
>(
  Lead_GetLeadCampaignByIdResponse,
  'get',
  '/api/leads/campaigns/{leadCampaignId}'
);

export interface Lead_UpdateLeadCampaignRequest {
  path: {
    leadCampaignId: number;
  };
  body: m.LeadCampaignViewModel;
}
export type Lead_UpdateLeadCampaignResponse = m.LeadCampaignViewModel;
export const Lead_UpdateLeadCampaignResponse = m.LeadCampaignViewModel;

/* Lead_UpdateLeadCampaign */
export const Lead_UpdateLeadCampaignReader = u.controllerFactory<
  Lead_UpdateLeadCampaignRequest,
  Lead_UpdateLeadCampaignResponse
>(
  Lead_UpdateLeadCampaignResponse,
  'post',
  '/api/leads/campaigns/{leadCampaignId}'
);

export interface Lead_DeleteLeadCampaignRequest {
  path: {
    leadCampaignId: number;
  };
}
export type Lead_DeleteLeadCampaignResponse = Record<string, unknown>;
export const Lead_DeleteLeadCampaignResponse = t.UnknownRecord;

/* Lead_DeleteLeadCampaign */
export const Lead_DeleteLeadCampaignReader = u.controllerFactory<
  Lead_DeleteLeadCampaignRequest,
  Lead_DeleteLeadCampaignResponse
>(
  Lead_DeleteLeadCampaignResponse,
  'delete',
  '/api/leads/campaigns/{leadCampaignId}'
);

export type Lead_GetAllLeadListsResponse = Array<m.LeadListViewModel>;
export const Lead_GetAllLeadListsResponse = t.array(m.LeadListViewModel);

/* Lead_GetAllLeadLists */
export const Lead_GetAllLeadListsReader = u.requestlessControllerFactory<
  Lead_GetAllLeadListsResponse
>(Lead_GetAllLeadListsResponse, 'get', '/api/leads/lists');

export interface Lead_InsertLeadListRequest {
  body: m.LeadListViewModel;
}
export type Lead_InsertLeadListResponse = m.LeadListViewModel;
export const Lead_InsertLeadListResponse = m.LeadListViewModel;

/* Lead_InsertLeadList */
export const Lead_InsertLeadListReader = u.controllerFactory<
  Lead_InsertLeadListRequest,
  Lead_InsertLeadListResponse
>(Lead_InsertLeadListResponse, 'post', '/api/leads/lists');

export interface Lead_GetLeadListsByLeadIdRequest {
  path: {
    leadId: number;
  };
}
export type Lead_GetLeadListsByLeadIdResponse = Array<m.LeadListViewModel>;
export const Lead_GetLeadListsByLeadIdResponse = t.array(m.LeadListViewModel);

/* Lead_GetLeadListsByLeadId */
export const Lead_GetLeadListsByLeadIdReader = u.controllerFactory<
  Lead_GetLeadListsByLeadIdRequest,
  Lead_GetLeadListsByLeadIdResponse
>(Lead_GetLeadListsByLeadIdResponse, 'get', '/api/leads/{leadId}/lists');

export interface Lead_GetLeadListByIdRequest {
  path: {
    leadListId: number;
  };
}
export type Lead_GetLeadListByIdResponse = m.LeadListViewModel;
export const Lead_GetLeadListByIdResponse = m.LeadListViewModel;

/* Lead_GetLeadListById */
export const Lead_GetLeadListByIdReader = u.controllerFactory<
  Lead_GetLeadListByIdRequest,
  Lead_GetLeadListByIdResponse
>(Lead_GetLeadListByIdResponse, 'get', '/api/leads/lists/{leadListId}');

export interface Lead_UpdateLeadListRequest {
  path: {
    leadListId: number;
  };
  body: m.LeadListViewModel;
}
export type Lead_UpdateLeadListResponse = m.LeadListViewModel;
export const Lead_UpdateLeadListResponse = m.LeadListViewModel;

/* Lead_UpdateLeadList */
export const Lead_UpdateLeadListReader = u.controllerFactory<
  Lead_UpdateLeadListRequest,
  Lead_UpdateLeadListResponse
>(Lead_UpdateLeadListResponse, 'post', '/api/leads/lists/{leadListId}');

export interface Lead_DeleteLeadListRequest {
  path: {
    leadListId: number;
  };
}
export type Lead_DeleteLeadListResponse = Record<string, unknown>;
export const Lead_DeleteLeadListResponse = t.UnknownRecord;

/* Lead_DeleteLeadList */
export const Lead_DeleteLeadListReader = u.controllerFactory<
  Lead_DeleteLeadListRequest,
  Lead_DeleteLeadListResponse
>(Lead_DeleteLeadListResponse, 'delete', '/api/leads/lists/{leadListId}');

export interface Lead_GetLeadsByLeadListIdRequest {
  path: {
    leadListId: number;
  };
}
export type Lead_GetLeadsByLeadListIdResponse = Array<m.LeadViewModel>;
export const Lead_GetLeadsByLeadListIdResponse = t.array(m.LeadViewModel);

/* Lead_GetLeadsByLeadListId */
export const Lead_GetLeadsByLeadListIdReader = u.controllerFactory<
  Lead_GetLeadsByLeadListIdRequest,
  Lead_GetLeadsByLeadListIdResponse
>(
  Lead_GetLeadsByLeadListIdResponse,
  'get',
  '/api/leads/lists/{leadListId}/leads'
);

export interface Lead_AddLeadToLeadListRequest {
  path: {
    leadListId: number;
    leadId: number;
  };
}
export type Lead_AddLeadToLeadListResponse = Record<string, unknown>;
export const Lead_AddLeadToLeadListResponse = t.UnknownRecord;

/* Lead_AddLeadToLeadList */
export const Lead_AddLeadToLeadListReader = u.controllerFactory<
  Lead_AddLeadToLeadListRequest,
  Lead_AddLeadToLeadListResponse
>(
  Lead_AddLeadToLeadListResponse,
  'post',
  '/api/leads/lists/{leadListId}/leads/{leadId}'
);

export interface Lead_RemoveLeadFromLeadListRequest {
  path: {
    leadListId: number;
    leadId: number;
  };
}
export type Lead_RemoveLeadFromLeadListResponse = Record<string, unknown>;
export const Lead_RemoveLeadFromLeadListResponse = t.UnknownRecord;

/* Lead_RemoveLeadFromLeadList */
export const Lead_RemoveLeadFromLeadListReader = u.controllerFactory<
  Lead_RemoveLeadFromLeadListRequest,
  Lead_RemoveLeadFromLeadListResponse
>(
  Lead_RemoveLeadFromLeadListResponse,
  'delete',
  '/api/leads/lists/{leadListId}/leads/{leadId}'
);

export interface Lead_GetLeadMilestonesReportRequest {
  query: {
    campaignId?: number;
    leadListId?: number;
    dateCreatedStart?: string;
    dateCreatedEnd?: string;
  };
}
export type Lead_GetLeadMilestonesReportResponse = m.LeadMilestonesReportResponse;
export const Lead_GetLeadMilestonesReportResponse =
  m.LeadMilestonesReportResponse;

/* Lead_GetLeadMilestonesReport */
export const Lead_GetLeadMilestonesReportReader = u.controllerFactory<
  Lead_GetLeadMilestonesReportRequest,
  Lead_GetLeadMilestonesReportResponse
>(Lead_GetLeadMilestonesReportResponse, 'get', '/api/leads/reports/milestones');

export interface Lead_GetLeadPerformanceReportRequest {
  query: {
    campaignId?: number;
    leadListId?: number;
    dateCreatedStart?: string;
    dateCreatedEnd?: string;
  };
}
export type Lead_GetLeadPerformanceReportResponse = m.LeadPerformanceReportResponse;
export const Lead_GetLeadPerformanceReportResponse =
  m.LeadPerformanceReportResponse;

/* Lead_GetLeadPerformanceReport */
export const Lead_GetLeadPerformanceReportReader = u.controllerFactory<
  Lead_GetLeadPerformanceReportRequest,
  Lead_GetLeadPerformanceReportResponse
>(
  Lead_GetLeadPerformanceReportResponse,
  'get',
  '/api/leads/reports/performance'
);

export interface Lead_GetLeadPerformanceReportDetailRequest {
  query: {
    campaignId?: number;
    leadListId?: number;
    dateCreatedStart?: string;
    dateCreatedEnd?: string;
  };
}
export type Lead_GetLeadPerformanceReportDetailResponse = m.LeadPerformanceReportDetailResponse;
export const Lead_GetLeadPerformanceReportDetailResponse =
  m.LeadPerformanceReportDetailResponse;

/* Lead_GetLeadPerformanceReportDetail */
export const Lead_GetLeadPerformanceReportDetailReader = u.controllerFactory<
  Lead_GetLeadPerformanceReportDetailRequest,
  Lead_GetLeadPerformanceReportDetailResponse
>(
  Lead_GetLeadPerformanceReportDetailResponse,
  'get',
  '/api/leads/reports/performance-detail'
);

export interface Lead_GetLeadStatusReportRequest {
  query: {
    CampaignId?: number;
    DateCreatedStart?: string;
    DateCreatedEnd?: string;
  };
}
export type Lead_GetLeadStatusReportResponse = m.LeadStatusReportResponse;
export const Lead_GetLeadStatusReportResponse = m.LeadStatusReportResponse;

/* Lead_GetLeadStatusReport */
export const Lead_GetLeadStatusReportReader = u.controllerFactory<
  Lead_GetLeadStatusReportRequest,
  Lead_GetLeadStatusReportResponse
>(Lead_GetLeadStatusReportResponse, 'get', '/api/leads/reports/status');

export interface Lead_GetTaskCountByLeadIdRequest {
  path: {
    leadId: number;
  };
}
export type Lead_GetTaskCountByLeadIdResponse = m.TaskCountModel;
export const Lead_GetTaskCountByLeadIdResponse = m.TaskCountModel;

/* Lead_GetTaskCountByLeadId */
export const Lead_GetTaskCountByLeadIdReader = u.controllerFactory<
  Lead_GetTaskCountByLeadIdRequest,
  Lead_GetTaskCountByLeadIdResponse
>(
  Lead_GetTaskCountByLeadIdResponse,
  'get',
  '/api/leads/{leadId}/GetTaskCountByLeadId'
);

export type Lead_ParseDuResponse = m.ParseDuLeadViewModel;
export const Lead_ParseDuResponse = m.ParseDuLeadViewModel;

/* Lead_ParseDu: Returns the LeadViewModel that was parsed from the Du file (not persisted) */
export const Lead_ParseDuReader = u.requestlessControllerFactory<
  Lead_ParseDuResponse
>(Lead_ParseDuResponse, 'post', '/api/leads/parse-du');

export interface Loan_GetBorrowersByLoanIdRequest {
  path: {
    loanId: number;
  };
}
export type Loan_GetBorrowersByLoanIdResponse = Array<m.BorrowerDto>;
export const Loan_GetBorrowersByLoanIdResponse = t.array(m.BorrowerDto);

/* Loan_GetBorrowersByLoanId */
export const Loan_GetBorrowersByLoanIdReader = u.controllerFactory<
  Loan_GetBorrowersByLoanIdRequest,
  Loan_GetBorrowersByLoanIdResponse
>(Loan_GetBorrowersByLoanIdResponse, 'get', '/api/Loan/{loanId}/Borrowers');

export interface Loan_GetBorrowerNotOwnedByLoanRequest {
  path: {
    loanId: number;
  };
}
export type Loan_GetBorrowerNotOwnedByLoanResponse = Array<m.BorrowerDto>;
export const Loan_GetBorrowerNotOwnedByLoanResponse = t.array(m.BorrowerDto);

/* Loan_GetBorrowerNotOwnedByLoan */
export const Loan_GetBorrowerNotOwnedByLoanReader = u.controllerFactory<
  Loan_GetBorrowerNotOwnedByLoanRequest,
  Loan_GetBorrowerNotOwnedByLoanResponse
>(
  Loan_GetBorrowerNotOwnedByLoanResponse,
  'get',
  '/api/Loan/{loanId}/BorrowersNotOwnedByLoan'
);

export interface Loan_SelectBorrowerRequest {
  path: {
    loanId: number;
    borrowerId: number;
  };
}
export type Loan_SelectBorrowerResponse = Record<string, unknown>;
export const Loan_SelectBorrowerResponse = t.UnknownRecord;

/* Loan_SelectBorrower */
export const Loan_SelectBorrowerReader = u.controllerFactory<
  Loan_SelectBorrowerRequest,
  Loan_SelectBorrowerResponse
>(
  Loan_SelectBorrowerResponse,
  'post',
  '/api/Loan/{loanId}/SelectBorrower/{borrowerId}'
);

export interface Loan_GetFirstBorrowerAddressRequest {
  path: {
    loanId: number;
    borrowerId: number;
  };
}
export type Loan_GetFirstBorrowerAddressResponse = Record<string, unknown>;
export const Loan_GetFirstBorrowerAddressResponse = t.UnknownRecord;

/* Loan_GetFirstBorrowerAddress */
export const Loan_GetFirstBorrowerAddressReader = u.controllerFactory<
  Loan_GetFirstBorrowerAddressRequest,
  Loan_GetFirstBorrowerAddressResponse
>(
  Loan_GetFirstBorrowerAddressResponse,
  'get',
  '/api/Loan/{loanId}/GetFirstBorrowerAddress/{borrowerId}'
);

export interface Loan_SetBorrowerAsPrimaryOnLoanRequest {
  path: {
    loanId: number;
    borrowerId: number;
  };
}
export type Loan_SetBorrowerAsPrimaryOnLoanResponse = Record<string, unknown>;
export const Loan_SetBorrowerAsPrimaryOnLoanResponse = t.UnknownRecord;

/* Loan_SetBorrowerAsPrimaryOnLoan */
export const Loan_SetBorrowerAsPrimaryOnLoanReader = u.controllerFactory<
  Loan_SetBorrowerAsPrimaryOnLoanRequest,
  Loan_SetBorrowerAsPrimaryOnLoanResponse
>(
  Loan_SetBorrowerAsPrimaryOnLoanResponse,
  'post',
  '/api/Loan/{loanId}/SetBorrowerAsPrimaryOnLoan/{borrowerId}'
);

export interface Loan_SetAllowPrimaryToStatisfyFlagOnLoanRequest {
  path: {
    loanId: number;
    borrowerId: number;
    allow: boolean;
  };
}
export type Loan_SetAllowPrimaryToStatisfyFlagOnLoanResponse = Record<
  string,
  unknown
>;
export const Loan_SetAllowPrimaryToStatisfyFlagOnLoanResponse = t.UnknownRecord;

/* Loan_SetAllowPrimaryToStatisfyFlagOnLoan */
export const Loan_SetAllowPrimaryToStatisfyFlagOnLoanReader = u.controllerFactory<
  Loan_SetAllowPrimaryToStatisfyFlagOnLoanRequest,
  Loan_SetAllowPrimaryToStatisfyFlagOnLoanResponse
>(
  Loan_SetAllowPrimaryToStatisfyFlagOnLoanResponse,
  'post',
  '/api/Loan/{loanId}/SetAllowPrimaryToStatisfyFlagOnLoan/{borrowerId}/{allow}'
);

export interface Loan_RemoveBorrowerFromLoanRequest {
  path: {
    loanId: number;
    borrowerId: number;
  };
}
export type Loan_RemoveBorrowerFromLoanResponse = Record<string, unknown>;
export const Loan_RemoveBorrowerFromLoanResponse = t.UnknownRecord;

/* Loan_RemoveBorrowerFromLoan */
export const Loan_RemoveBorrowerFromLoanReader = u.controllerFactory<
  Loan_RemoveBorrowerFromLoanRequest,
  Loan_RemoveBorrowerFromLoanResponse
>(
  Loan_RemoveBorrowerFromLoanResponse,
  'post',
  '/api/Loan/{loanId}/RemoveBorrowerFromLoan/{borrowerId}'
);

export interface Loan_AllExternalContactsRequest {
  path: {
    loanId: number;
  };
}
export type Loan_AllExternalContactsResponse = Array<m.ExternalContactView>;
export const Loan_AllExternalContactsResponse = t.array(m.ExternalContactView);

/* Loan_AllExternalContacts */
export const Loan_AllExternalContactsReader = u.controllerFactory<
  Loan_AllExternalContactsRequest,
  Loan_AllExternalContactsResponse
>(
  Loan_AllExternalContactsResponse,
  'get',
  '/api/Loan/{loanId}/AllExternalContacts'
);

export interface Loan_AllRemainExternalContactsRequest {
  path: {
    loanId: number;
  };
}
export type Loan_AllRemainExternalContactsResponse = Array<m.AgentViewModel>;
export const Loan_AllRemainExternalContactsResponse = t.array(m.AgentViewModel);

/* Loan_AllRemainExternalContacts */
export const Loan_AllRemainExternalContactsReader = u.controllerFactory<
  Loan_AllRemainExternalContactsRequest,
  Loan_AllRemainExternalContactsResponse
>(
  Loan_AllRemainExternalContactsResponse,
  'get',
  '/api/Loan/{loanId}/AllRemainExternalContacts'
);

export interface Loan_SelectAgentForExternalContactRequest {
  path: {
    loanId: number;
    agentId: number;
  };
  query: {
    agentTypeId: number;
  };
}
export type Loan_SelectAgentForExternalContactResponse = boolean;
export const Loan_SelectAgentForExternalContactResponse = t.boolean;

/* Loan_SelectAgentForExternalContact */
export const Loan_SelectAgentForExternalContactReader = u.controllerFactory<
  Loan_SelectAgentForExternalContactRequest,
  Loan_SelectAgentForExternalContactResponse
>(
  Loan_SelectAgentForExternalContactResponse,
  'post',
  '/api/Loan/{loanId}/SelectAgentForExternalContact/{agentId}'
);

export interface Loan_RemoveAgentFromExternalContactRequest {
  path: {
    loanId: number;
    agentId: number;
  };
}
export type Loan_RemoveAgentFromExternalContactResponse = boolean;
export const Loan_RemoveAgentFromExternalContactResponse = t.boolean;

/* Loan_RemoveAgentFromExternalContact */
export const Loan_RemoveAgentFromExternalContactReader = u.controllerFactory<
  Loan_RemoveAgentFromExternalContactRequest,
  Loan_RemoveAgentFromExternalContactResponse
>(
  Loan_RemoveAgentFromExternalContactResponse,
  'delete',
  '/api/Loan/{loanId}/RemoveAgentFromExternalContact/{agentId}'
);

export interface Loan_InternalContactsRequest {
  path: {
    loanId: number;
  };
}
export type Loan_InternalContactsResponse = Record<string, unknown>;
export const Loan_InternalContactsResponse = t.UnknownRecord;

/* Loan_InternalContacts */
export const Loan_InternalContactsReader = u.controllerFactory<
  Loan_InternalContactsRequest,
  Loan_InternalContactsResponse
>(Loan_InternalContactsResponse, 'get', '/api/Loan/{loanId}/InternalContacts');

export interface Loan_InternalContactsTrackingHistoryRequest {
  path: {
    loanId: number;
  };
}
export type Loan_InternalContactsTrackingHistoryResponse = Record<
  string,
  unknown
>;
export const Loan_InternalContactsTrackingHistoryResponse = t.UnknownRecord;

/* Loan_InternalContactsTrackingHistory */
export const Loan_InternalContactsTrackingHistoryReader = u.controllerFactory<
  Loan_InternalContactsTrackingHistoryRequest,
  Loan_InternalContactsTrackingHistoryResponse
>(
  Loan_InternalContactsTrackingHistoryResponse,
  'get',
  '/api/Loan/{loanId}/InternalContacts/TrackingHistory'
);

export interface Loan_UpsertInternalContactsRequest {
  path: {
    /** loan id */
    loanId: number;
  };
  query: {
    /** true if tasks assigned to old user by role (not manually created tasks) should be reassigned to new user, else false (default) */
    updateTasks?: boolean;
  };
  body: Array<m.InternalContactModel>;
}
export type Loan_UpsertInternalContactsResponse = Array<m.InternalContactModel>;
export const Loan_UpsertInternalContactsResponse = t.array(
  m.InternalContactModel
);

/* Loan_UpsertInternalContacts */
export const Loan_UpsertInternalContactsReader = u.controllerFactory<
  Loan_UpsertInternalContactsRequest,
  Loan_UpsertInternalContactsResponse
>(
  Loan_UpsertInternalContactsResponse,
  'post',
  '/api/Loan/{loanId}/UpsertInternalContacts'
);

export interface Loan_CurrentLoanInfoRequest {
  path: {
    loanId: number;
  };
}
export type Loan_CurrentLoanInfoResponse = m.CurrentLoanInfoModel;
export const Loan_CurrentLoanInfoResponse = m.CurrentLoanInfoModel;

/* Loan_CurrentLoanInfo */
export const Loan_CurrentLoanInfoReader = u.controllerFactory<
  Loan_CurrentLoanInfoRequest,
  Loan_CurrentLoanInfoResponse
>(Loan_CurrentLoanInfoResponse, 'get', '/api/Loan/{loanId}/CurrentLoanInfo');

export interface Loan_UpsertCurrentLoanInfoRequest {
  path: {
    loanId: number;
  };
  body: m.CurrentLoanInfoModel;
}
export type Loan_UpsertCurrentLoanInfoResponse = m.CurrentLoanInfoModel;
export const Loan_UpsertCurrentLoanInfoResponse = m.CurrentLoanInfoModel;

/* Loan_UpsertCurrentLoanInfo */
export const Loan_UpsertCurrentLoanInfoReader = u.controllerFactory<
  Loan_UpsertCurrentLoanInfoRequest,
  Loan_UpsertCurrentLoanInfoResponse
>(
  Loan_UpsertCurrentLoanInfoResponse,
  'post',
  '/api/Loan/{loanId}/UpsertCurrentLoanInfo'
);

export interface Loan_GetLoanCharacteristicRequest {
  path: {
    loanId: number;
  };
}
export type Loan_GetLoanCharacteristicResponse = Array<
  m.LoanCharacteristicViewModel
>;
export const Loan_GetLoanCharacteristicResponse = t.array(
  m.LoanCharacteristicViewModel
);

/* Loan_GetLoanCharacteristic */
export const Loan_GetLoanCharacteristicReader = u.controllerFactory<
  Loan_GetLoanCharacteristicRequest,
  Loan_GetLoanCharacteristicResponse
>(
  Loan_GetLoanCharacteristicResponse,
  'get',
  '/api/Loan/{loanId}/GetLoanCharacteristics'
);

export interface Loan_UpsertLoanCharacteristicPreviewRequest {
  path: {
    loanId: number;
  };
  body: Array<m.LoanCharacteristicViewModel>;
}
export type Loan_UpsertLoanCharacteristicPreviewResponse = Array<
  m.LoanDocTaskViewModel
>;
export const Loan_UpsertLoanCharacteristicPreviewResponse = t.array(
  m.LoanDocTaskViewModel
);

/* Loan_UpsertLoanCharacteristicPreview */
export const Loan_UpsertLoanCharacteristicPreviewReader = u.controllerFactory<
  Loan_UpsertLoanCharacteristicPreviewRequest,
  Loan_UpsertLoanCharacteristicPreviewResponse
>(
  Loan_UpsertLoanCharacteristicPreviewResponse,
  'post',
  '/api/Loan/{loanId}/UpsertLoanCharacteristicsPreview'
);

export interface Loan_UpsertLoanCharacteristicRequest {
  path: {
    loanId: number;
  };
  body: m.UpsertLoanCharacteristicView;
}
export type Loan_UpsertLoanCharacteristicResponse = Record<string, unknown>;
export const Loan_UpsertLoanCharacteristicResponse = t.UnknownRecord;

/* Loan_UpsertLoanCharacteristic */
export const Loan_UpsertLoanCharacteristicReader = u.controllerFactory<
  Loan_UpsertLoanCharacteristicRequest,
  Loan_UpsertLoanCharacteristicResponse
>(
  Loan_UpsertLoanCharacteristicResponse,
  'post',
  '/api/Loan/{loanId}/UpsertLoanCharacteristics'
);

export interface Loan_GetBorrowerCharacteristicsRequest {
  path: {
    loanId: number;
  };
}
export type Loan_GetBorrowerCharacteristicsResponse = Array<
  m.BorrowerCharacteristicViewModel
>;
export const Loan_GetBorrowerCharacteristicsResponse = t.array(
  m.BorrowerCharacteristicViewModel
);

/* Loan_GetBorrowerCharacteristics */
export const Loan_GetBorrowerCharacteristicsReader = u.controllerFactory<
  Loan_GetBorrowerCharacteristicsRequest,
  Loan_GetBorrowerCharacteristicsResponse
>(
  Loan_GetBorrowerCharacteristicsResponse,
  'get',
  '/api/Loan/{loanId}/GetBorrowerCharacteristics'
);

export interface Loan_UpsertBorrowerCharacteristicsPreviewRequest {
  path: {
    loanId: number;
  };
  body: Array<m.BorrowerCharacteristicViewModel>;
}
export type Loan_UpsertBorrowerCharacteristicsPreviewResponse = Array<
  m.LoanDocTaskViewModel
>;
export const Loan_UpsertBorrowerCharacteristicsPreviewResponse = t.array(
  m.LoanDocTaskViewModel
);

/* Loan_UpsertBorrowerCharacteristicsPreview */
export const Loan_UpsertBorrowerCharacteristicsPreviewReader = u.controllerFactory<
  Loan_UpsertBorrowerCharacteristicsPreviewRequest,
  Loan_UpsertBorrowerCharacteristicsPreviewResponse
>(
  Loan_UpsertBorrowerCharacteristicsPreviewResponse,
  'post',
  '/api/Loan/{loanId}/UpsertBorrowerCharacteristicsPreview'
);

export interface Loan_UpsertBorrowerCharacteristicsRequest {
  path: {
    loanId: number;
  };
  body: m.UpsertBorrowerCharacteristicsView;
}
export type Loan_UpsertBorrowerCharacteristicsResponse = Array<
  m.BorrowerCharacteristicViewModel
>;
export const Loan_UpsertBorrowerCharacteristicsResponse = t.array(
  m.BorrowerCharacteristicViewModel
);

/* Loan_UpsertBorrowerCharacteristics */
export const Loan_UpsertBorrowerCharacteristicsReader = u.controllerFactory<
  Loan_UpsertBorrowerCharacteristicsRequest,
  Loan_UpsertBorrowerCharacteristicsResponse
>(
  Loan_UpsertBorrowerCharacteristicsResponse,
  'post',
  '/api/Loan/{loanId}/UpsertBorrowerCharacteristics'
);

export interface Loan_GetAllLoanDocsRequest {
  path: {
    loanId: number;
  };
}
export type Loan_GetAllLoanDocsResponse = Array<m.LoanDocModel>;
export const Loan_GetAllLoanDocsResponse = t.array(m.LoanDocModel);

/* Loan_GetAllLoanDocs */
export const Loan_GetAllLoanDocsReader = u.controllerFactory<
  Loan_GetAllLoanDocsRequest,
  Loan_GetAllLoanDocsResponse
>(Loan_GetAllLoanDocsResponse, 'get', '/api/Loan/{loanId}/GetAllLoanDocs');

export interface Loan_UpsertLoanDocRequest {
  path: {
    loanId: number;
  };
  body: m.LoanDocModel;
}
export type Loan_UpsertLoanDocResponse = m.LoanDocDto;
export const Loan_UpsertLoanDocResponse = m.LoanDocDto;

/* Loan_UpsertLoanDoc */
export const Loan_UpsertLoanDocReader = u.controllerFactory<
  Loan_UpsertLoanDocRequest,
  Loan_UpsertLoanDocResponse
>(Loan_UpsertLoanDocResponse, 'post', '/api/Loan/{loanId}/UpsertLoanDoc');

export interface Loan_GetAllDocFilesRequest {
  path: {
    loanId: number;
  };
}
export type Loan_GetAllDocFilesResponse = Array<m.DocFileViewModel>;
export const Loan_GetAllDocFilesResponse = t.array(m.DocFileViewModel);

/* Loan_GetAllDocFiles */
export const Loan_GetAllDocFilesReader = u.controllerFactory<
  Loan_GetAllDocFilesRequest,
  Loan_GetAllDocFilesResponse
>(Loan_GetAllDocFilesResponse, 'get', '/api/Loan/{loanId}/GetAllDocFiles');

export interface Loan_GetTaskCountByApplicationIDRequest {
  path: {
    loanId: number;
  };
}
export type Loan_GetTaskCountByApplicationIDResponse = m.TaskCountModel;
export const Loan_GetTaskCountByApplicationIDResponse = m.TaskCountModel;

/* Loan_GetTaskCountByApplicationID */
export const Loan_GetTaskCountByApplicationIDReader = u.controllerFactory<
  Loan_GetTaskCountByApplicationIDRequest,
  Loan_GetTaskCountByApplicationIDResponse
>(
  Loan_GetTaskCountByApplicationIDResponse,
  'get',
  '/api/Loan/{loanId}/GetTaskCountByApplicationID'
);

export interface Loan_GetAllLoanDocTaskConditionsRequest {
  path: {
    loanId: number;
  };
}
export type Loan_GetAllLoanDocTaskConditionsResponse = Array<
  m.LoanDocTaskViewModel
>;
export const Loan_GetAllLoanDocTaskConditionsResponse = t.array(
  m.LoanDocTaskViewModel
);

/* Loan_GetAllLoanDocTaskConditions */
export const Loan_GetAllLoanDocTaskConditionsReader = u.controllerFactory<
  Loan_GetAllLoanDocTaskConditionsRequest,
  Loan_GetAllLoanDocTaskConditionsResponse
>(
  Loan_GetAllLoanDocTaskConditionsResponse,
  'get',
  '/api/Loan/{loanId}/GetAllLoanDocTaskConditions'
);

export interface Loan_SaveFirstLoanStatusByLoanPurposeRequest {
  path: {
    loanId: number;
  };
  body: m.LoanDocTaskViewModel[];
}
export type Loan_SaveFirstLoanStatusByLoanPurposeResponse = Record<
  string,
  unknown
>;
export const Loan_SaveFirstLoanStatusByLoanPurposeResponse = t.UnknownRecord;

/* Loan_SaveFirstLoanStatusByLoanPurpose */
export const Loan_SaveFirstLoanStatusByLoanPurposeReader = u.controllerFactory<
  Loan_SaveFirstLoanStatusByLoanPurposeRequest,
  Loan_SaveFirstLoanStatusByLoanPurposeResponse
>(
  Loan_SaveFirstLoanStatusByLoanPurposeResponse,
  'post',
  '/api/Loan/{loanId}/SaveFirstLoanStatusByLoanPurpose'
);

export interface Loan_UpdateLoanStatusRequest {
  path: {
    loanId: number;
    loanStatusId: number;
  };
  body: m.LoanDocTaskViewModel[];
}
export type Loan_UpdateLoanStatusResponse = Record<string, unknown>;
export const Loan_UpdateLoanStatusResponse = t.UnknownRecord;

/* Loan_UpdateLoanStatus */
export const Loan_UpdateLoanStatusReader = u.controllerFactory<
  Loan_UpdateLoanStatusRequest,
  Loan_UpdateLoanStatusResponse
>(
  Loan_UpdateLoanStatusResponse,
  'post',
  '/api/Loan/{loanId}/UpdateLoanStatus/{loanStatusId}'
);

export interface Loan_ViewLoanStatusHistoryRequest {
  path: {
    loanId: number;
  };
}
export type Loan_ViewLoanStatusHistoryResponse = Array<m.TrackingViewModel>;
export const Loan_ViewLoanStatusHistoryResponse = t.array(m.TrackingViewModel);

/* Loan_ViewLoanStatusHistory */
export const Loan_ViewLoanStatusHistoryReader = u.controllerFactory<
  Loan_ViewLoanStatusHistoryRequest,
  Loan_ViewLoanStatusHistoryResponse
>(
  Loan_ViewLoanStatusHistoryResponse,
  'get',
  '/api/Loan/{loanId}/ViewLoanStatusHistory'
);

export interface Loan_ViewLoanStatusHistory1Request {
  path: {
    applicationId: number;
  };
}
export type Loan_ViewLoanStatusHistory1Response = Array<m.ActivityLogViewModel>;
export const Loan_ViewLoanStatusHistory1Response = t.array(
  m.ActivityLogViewModel
);

/* Loan_ViewLoanStatusHistory1 */
export const Loan_ViewLoanStatusHistory1Reader = u.controllerFactory<
  Loan_ViewLoanStatusHistory1Request,
  Loan_ViewLoanStatusHistory1Response
>(
  Loan_ViewLoanStatusHistory1Response,
  'get',
  '/api/Loan/{applicationId}/GetActivityLogs'
);

export interface Loan_SaveLoanInfoRequest {
  path: {
    loanId: number;
  };
  body: m.LoanInfo;
}
export type Loan_SaveLoanInfoResponse = Record<string, unknown>;
export const Loan_SaveLoanInfoResponse = t.UnknownRecord;

/* Loan_SaveLoanInfo */
export const Loan_SaveLoanInfoReader = u.controllerFactory<
  Loan_SaveLoanInfoRequest,
  Loan_SaveLoanInfoResponse
>(Loan_SaveLoanInfoResponse, 'post', '/api/Loan/{loanId}/SaveLoanInfo');

export interface Loan_GetLoanInfoRequest {
  path: {
    loanId: number;
  };
}
export type Loan_GetLoanInfoResponse = m.NewApplicationRequest;
export const Loan_GetLoanInfoResponse = m.NewApplicationRequest;

/* Loan_GetLoanInfo */
export const Loan_GetLoanInfoReader = u.controllerFactory<
  Loan_GetLoanInfoRequest,
  Loan_GetLoanInfoResponse
>(Loan_GetLoanInfoResponse, 'get', '/api/Loan/{loanId}/GetLoanInfo');

export interface Loan_DeActivateLoanRequest {
  query: {
    applicationId: number;
  };
}
export type Loan_DeActivateLoanResponse = Record<string, unknown>;
export const Loan_DeActivateLoanResponse = t.UnknownRecord;

/* Loan_DeActivateLoan */
export const Loan_DeActivateLoanReader = u.controllerFactory<
  Loan_DeActivateLoanRequest,
  Loan_DeActivateLoanResponse
>(Loan_DeActivateLoanResponse, 'delete', '/api/Loan/DeActivateLoan');

export interface Loan_UpsertSubjectPropertyRequest {
  path: {
    loanId: number;
  };
  body: m.AddressView;
}
export type Loan_UpsertSubjectPropertyResponse = m.ApplicationModel;
export const Loan_UpsertSubjectPropertyResponse = m.ApplicationModel;

/* Loan_UpsertSubjectProperty */
export const Loan_UpsertSubjectPropertyReader = u.controllerFactory<
  Loan_UpsertSubjectPropertyRequest,
  Loan_UpsertSubjectPropertyResponse
>(
  Loan_UpsertSubjectPropertyResponse,
  'post',
  '/api/Loan/{loanId}/UpsertSubjectProperty'
);

export interface Loan_AddOnlineApplicationTaskRequest {
  path: {
    /** loan / application id */
    loanId: number;
  };
}
export type Loan_AddOnlineApplicationTaskResponse = m.LoanDocTaskViewModel;
export const Loan_AddOnlineApplicationTaskResponse = m.LoanDocTaskViewModel;

/* Loan_AddOnlineApplicationTask: Add Online Application Task for Application */
export const Loan_AddOnlineApplicationTaskReader = u.controllerFactory<
  Loan_AddOnlineApplicationTaskRequest,
  Loan_AddOnlineApplicationTaskResponse
>(
  Loan_AddOnlineApplicationTaskResponse,
  'post',
  '/api/Loan/{loanId}/add-online-app-task'
);

export interface Loan_CheckForOnlineApplicationTaskRequest {
  path: {
    /** loan / application id */
    loanId: number;
  };
}
export type Loan_CheckForOnlineApplicationTaskResponse = m.LoanDocTaskViewModel;
export const Loan_CheckForOnlineApplicationTaskResponse =
  m.LoanDocTaskViewModel;

/* Loan_CheckForOnlineApplicationTask: Check Online Application Task for Application */
export const Loan_CheckForOnlineApplicationTaskReader = u.controllerFactory<
  Loan_CheckForOnlineApplicationTaskRequest,
  Loan_CheckForOnlineApplicationTaskResponse
>(
  Loan_CheckForOnlineApplicationTaskResponse,
  'post',
  '/api/Loan/{loanId}/check-for-online-app-task'
);

export interface LoanDoc_GetRequest {
  path: {
    loanDocId: number;
  };
}
export type LoanDoc_GetResponse = m.LoanDocModel;
export const LoanDoc_GetResponse = m.LoanDocModel;

/* LoanDoc_Get: Get a loan document */
export const LoanDoc_GetReader = u.controllerFactory<
  LoanDoc_GetRequest,
  LoanDoc_GetResponse
>(LoanDoc_GetResponse, 'get', '/api/LoanDoc/{loanDocId}');

export interface LoanDoc_ChangeDocumentTypeOfLoanDocRequest {
  path: {
    loanDocId: number;
    documentTypeId: number;
  };
}
export type LoanDoc_ChangeDocumentTypeOfLoanDocResponse = unknown;
export const LoanDoc_ChangeDocumentTypeOfLoanDocResponse = t.unknown;

/* LoanDoc_ChangeDocumentTypeOfLoanDoc: Change the document type for a loan document */
export const LoanDoc_ChangeDocumentTypeOfLoanDocReader = u.controllerFactory<
  LoanDoc_ChangeDocumentTypeOfLoanDocRequest,
  LoanDoc_ChangeDocumentTypeOfLoanDocResponse
>(
  LoanDoc_ChangeDocumentTypeOfLoanDocResponse,
  'post',
  '/api/LoanDoc/{loanDocId}/ChangeDocumentType/{documentTypeId}'
);

export interface LoanDoc_RemoveLoanDocRequest {
  path: {
    loanDocId: number;
  };
}
export type LoanDoc_RemoveLoanDocResponse = unknown;
export const LoanDoc_RemoveLoanDocResponse = t.unknown;

/* LoanDoc_RemoveLoanDoc: Delete a loan document */
export const LoanDoc_RemoveLoanDocReader = u.controllerFactory<
  LoanDoc_RemoveLoanDocRequest,
  LoanDoc_RemoveLoanDocResponse
>(
  LoanDoc_RemoveLoanDocResponse,
  'delete',
  '/api/LoanDoc/{loanDocId}/RemoveLoanDoc'
);

export interface LoanDoc_UpsertFileRequest {
  path: {
    loanDocId: number;
  };
  body: m.DocFileModel;
}
export type LoanDoc_UpsertFileResponse = m.FileDto;
export const LoanDoc_UpsertFileResponse = m.FileDto;

/* LoanDoc_UpsertFile: Update or Insert a doc file to a Loan Document */
export const LoanDoc_UpsertFileReader = u.controllerFactory<
  LoanDoc_UpsertFileRequest,
  LoanDoc_UpsertFileResponse
>(LoanDoc_UpsertFileResponse, 'post', '/api/LoanDoc/{loanDocId}/UpsertFile');

export interface LoanDoc_MergeDocFilesRequest {
  path: {
    loanDocId: number;
  };
  body: m.MergeDocFilesRequest;
}
export type LoanDoc_MergeDocFilesResponse = unknown;
export const LoanDoc_MergeDocFilesResponse = t.unknown;

/* LoanDoc_MergeDocFiles: Merge doc files into a single file for a Loan Document */
export const LoanDoc_MergeDocFilesReader = u.controllerFactory<
  LoanDoc_MergeDocFilesRequest,
  LoanDoc_MergeDocFilesResponse
>(
  LoanDoc_MergeDocFilesResponse,
  'post',
  '/api/LoanDoc/{loanDocId}/MergeDocFiles'
);

export interface Log_BatchLogUnauthorizedRequest {
  body: m.LogModel[];
}
export type Log_BatchLogUnauthorizedResponse = Record<string, unknown>;
export const Log_BatchLogUnauthorizedResponse = t.UnknownRecord;

/* Log_BatchLogUnauthorized */
export const Log_BatchLogUnauthorizedReader = u.controllerFactory<
  Log_BatchLogUnauthorizedRequest,
  Log_BatchLogUnauthorizedResponse
>(Log_BatchLogUnauthorizedResponse, 'post', '/api/log/batch');

export interface Log_BatchLogAuthorizedRequest {
  body: m.LogModel[];
}
export type Log_BatchLogAuthorizedResponse = Record<string, unknown>;
export const Log_BatchLogAuthorizedResponse = t.UnknownRecord;

/* Log_BatchLogAuthorized */
export const Log_BatchLogAuthorizedReader = u.controllerFactory<
  Log_BatchLogAuthorizedRequest,
  Log_BatchLogAuthorizedResponse
>(Log_BatchLogAuthorizedResponse, 'post', '/api/log/batch-authed');

export type Lookup_getAllRolesByCompanyIdResponse = Array<m.RoleModel>;
export const Lookup_getAllRolesByCompanyIdResponse = t.array(m.RoleModel);

/* Lookup_getAllRolesByCompanyId: Get all roles for user's company */
export const Lookup_getAllRolesByCompanyIdReader = u.requestlessControllerFactory<
  Lookup_getAllRolesByCompanyIdResponse
>(Lookup_getAllRolesByCompanyIdResponse, 'get', '/api/Lookup/getAllRoles');

export type Lookup_GetLeadSourcesResponse = Array<string>;
export const Lookup_GetLeadSourcesResponse = t.array(t.string);

/* Lookup_GetLeadSources: Get all roles for user's company */
export const Lookup_GetLeadSourcesReader = u.requestlessControllerFactory<
  Lookup_GetLeadSourcesResponse
>(Lookup_GetLeadSourcesResponse, 'get', '/api/Lookup/get-lead-sources');

export type Lookup_getAllUsersResponse = Array<m.UserLookupView>;
export const Lookup_getAllUsersResponse = t.array(m.UserLookupView);

/* Lookup_getAllUsers: Get all users */
export const Lookup_getAllUsersReader = u.requestlessControllerFactory<
  Lookup_getAllUsersResponse
>(Lookup_getAllUsersResponse, 'get', '/api/Lookup/getAllUsers');

export interface Lookup_GetLosProvidersRequest {
  query: {
    providerId?: number;
  };
}
export type Lookup_GetLosProvidersResponse = Array<
  m.ThirdPartyCredentialsViewModel
>;
export const Lookup_GetLosProvidersResponse = t.array(
  m.ThirdPartyCredentialsViewModel
);

/* Lookup_GetLosProviders: Get list of los providers */
export const Lookup_GetLosProvidersReader = u.controllerFactory<
  Lookup_GetLosProvidersRequest,
  Lookup_GetLosProvidersResponse
>(Lookup_GetLosProvidersResponse, 'get', '/api/Lookup/get-los-providers');

export interface Lookup_GetLoanStatusForLoanPurposeRequest {
  path: {
    loanPurposeId: number;
    loanStatusId: number;
  };
}
export type Lookup_GetLoanStatusForLoanPurposeResponse = Array<
  m.LoanStatusModel
>;
export const Lookup_GetLoanStatusForLoanPurposeResponse = t.array(
  m.LoanStatusModel
);

/* Lookup_GetLoanStatusForLoanPurpose: Get loan statuses for loan purpose/loan status by user and role */
export const Lookup_GetLoanStatusForLoanPurposeReader = u.controllerFactory<
  Lookup_GetLoanStatusForLoanPurposeRequest,
  Lookup_GetLoanStatusForLoanPurposeResponse
>(
  Lookup_GetLoanStatusForLoanPurposeResponse,
  'get',
  '/api/Lookup/GetLoanStatusForLoanPurpose/{loanPurposeId}/{loanStatusId}'
);

export interface Lookup_GetLeadStatusForLoanPurposeRequest {
  path: {
    loanPurposeId: number;
    loanStatusId: number;
  };
}
export type Lookup_GetLeadStatusForLoanPurposeResponse = Array<
  m.LoanStatusModel
>;
export const Lookup_GetLeadStatusForLoanPurposeResponse = t.array(
  m.LoanStatusModel
);

/* Lookup_GetLeadStatusForLoanPurpose: Get lead statuses for loan purpose/loan status by user and role */
export const Lookup_GetLeadStatusForLoanPurposeReader = u.controllerFactory<
  Lookup_GetLeadStatusForLoanPurposeRequest,
  Lookup_GetLeadStatusForLoanPurposeResponse
>(
  Lookup_GetLeadStatusForLoanPurposeResponse,
  'get',
  '/api/Lookup/GetLeadStatusForLoanPurpose/{loanPurposeId}/{loanStatusId}'
);

export interface Message_GetBorrowerMessagesRequest {
  path: {
    applicationId: number;
  };
}
export type Message_GetBorrowerMessagesResponse = Array<m.MessageViewModel>;
export const Message_GetBorrowerMessagesResponse = t.array(m.MessageViewModel);

/* Message_GetBorrowerMessages: Get Borrower Messages by Application.  Logged in user must be on the loan */
export const Message_GetBorrowerMessagesReader = u.controllerFactory<
  Message_GetBorrowerMessagesRequest,
  Message_GetBorrowerMessagesResponse
>(
  Message_GetBorrowerMessagesResponse,
  'get',
  '/api/Message/GetBorrowerMessages/{applicationId}'
);

export interface Message_GetInternalMessagesRequest {
  path: {
    applicationId: number;
  };
}
export type Message_GetInternalMessagesResponse = Array<m.MessageViewModel>;
export const Message_GetInternalMessagesResponse = t.array(m.MessageViewModel);

/* Message_GetInternalMessages: Get internal Messages by Application.  Logged in user must be on the loan */
export const Message_GetInternalMessagesReader = u.controllerFactory<
  Message_GetInternalMessagesRequest,
  Message_GetInternalMessagesResponse
>(
  Message_GetInternalMessagesResponse,
  'get',
  '/api/Message/GetInternalMessages/{applicationId}'
);

export interface Message_GetBorrowerTaskMessagesRequest {
  path: {
    loanDocTaskId: number;
  };
}
export type Message_GetBorrowerTaskMessagesResponse = Array<m.MessageViewModel>;
export const Message_GetBorrowerTaskMessagesResponse = t.array(
  m.MessageViewModel
);

/* Message_GetBorrowerTaskMessages: Get Borrower Messages by Loan Doc Task. Logged in user must be on the loan */
export const Message_GetBorrowerTaskMessagesReader = u.controllerFactory<
  Message_GetBorrowerTaskMessagesRequest,
  Message_GetBorrowerTaskMessagesResponse
>(
  Message_GetBorrowerTaskMessagesResponse,
  'get',
  '/api/Message/GetBorrowerTaskMessages/{loanDocTaskId}'
);

export interface Message_GetInternalTaskMessagesRequest {
  path: {
    loanDocTaskId: number;
  };
}
export type Message_GetInternalTaskMessagesResponse = Array<m.MessageViewModel>;
export const Message_GetInternalTaskMessagesResponse = t.array(
  m.MessageViewModel
);

/* Message_GetInternalTaskMessages: Get internal Messages by Loan Doc Task. Logged in user must be on the loan */
export const Message_GetInternalTaskMessagesReader = u.controllerFactory<
  Message_GetInternalTaskMessagesRequest,
  Message_GetInternalTaskMessagesResponse
>(
  Message_GetInternalTaskMessagesResponse,
  'get',
  '/api/Message/GetInternalTaskMessages/{loanDocTaskId}'
);

export interface Message_GetMessageCountSinceLastReplyRequest {
  path: {
    applicationId: number;
  };
}
export type Message_GetMessageCountSinceLastReplyResponse = number;
export const Message_GetMessageCountSinceLastReplyResponse = t.number;

/* Message_GetMessageCountSinceLastReply: Get count of messages since last reply */
export const Message_GetMessageCountSinceLastReplyReader = u.controllerFactory<
  Message_GetMessageCountSinceLastReplyRequest,
  Message_GetMessageCountSinceLastReplyResponse
>(
  Message_GetMessageCountSinceLastReplyResponse,
  'get',
  '/api/Message/GetMessageCountSinceLastReply/{applicationId}'
);

export interface Message_PostInternalMessageRequest {
  body: m.MessageViewModel;
}
export type Message_PostInternalMessageResponse = m.MessageViewModel;
export const Message_PostInternalMessageResponse = m.MessageViewModel;

/* Message_PostInternalMessage: Post message to internal user */
export const Message_PostInternalMessageReader = u.controllerFactory<
  Message_PostInternalMessageRequest,
  Message_PostInternalMessageResponse
>(
  Message_PostInternalMessageResponse,
  'post',
  '/api/Message/PostInternalMessage'
);

export interface Message_PostBorrowerMessageRequest {
  body: m.MessageViewModel;
}
export type Message_PostBorrowerMessageResponse = m.MessageViewModel;
export const Message_PostBorrowerMessageResponse = m.MessageViewModel;

/* Message_PostBorrowerMessage: Post message to borrower */
export const Message_PostBorrowerMessageReader = u.controllerFactory<
  Message_PostBorrowerMessageRequest,
  Message_PostBorrowerMessageResponse
>(
  Message_PostBorrowerMessageResponse,
  'post',
  '/api/Message/PostBorrowerMessage'
);

export interface Message_InsertLeadEmailIntoQueueRequest {
  path: {
    /** should the email signature be appended to the email */
    appendEmailSignature: boolean;
  };
  body: m.MessageViewModel;
}
export type Message_InsertLeadEmailIntoQueueResponse = Record<string, unknown>;
export const Message_InsertLeadEmailIntoQueueResponse = t.UnknownRecord;

/* Message_InsertLeadEmailIntoQueue: Inserts a Message Into the Queue */
export const Message_InsertLeadEmailIntoQueueReader = u.controllerFactory<
  Message_InsertLeadEmailIntoQueueRequest,
  Message_InsertLeadEmailIntoQueueResponse
>(
  Message_InsertLeadEmailIntoQueueResponse,
  'post',
  '/api/Message/InsertLeadEmailIntoQueue/{appendEmailSignature}'
);

export interface Message_InsertLeadSMSIntoQueueRequest {
  path: {
    /** should the SMS signature be appended to the email */
    appendSMSSignature: boolean;
  };
  body: m.MessageViewModel;
}
export type Message_InsertLeadSMSIntoQueueResponse = Record<string, unknown>;
export const Message_InsertLeadSMSIntoQueueResponse = t.UnknownRecord;

/* Message_InsertLeadSMSIntoQueue: Inserts a Message Into the Queue */
export const Message_InsertLeadSMSIntoQueueReader = u.controllerFactory<
  Message_InsertLeadSMSIntoQueueRequest,
  Message_InsertLeadSMSIntoQueueResponse
>(
  Message_InsertLeadSMSIntoQueueResponse,
  'post',
  '/api/Message/InsertLeadSMSIntoQueue/{appendSMSSignature}'
);

export interface Message_InsertLoanEmailIntoQueueRequest {
  path: {
    /** should the email signature be appended to the email */
    appendEmailSignature: boolean;
  };
  body: m.MessageViewModel;
}
export type Message_InsertLoanEmailIntoQueueResponse = Record<string, unknown>;
export const Message_InsertLoanEmailIntoQueueResponse = t.UnknownRecord;

/* Message_InsertLoanEmailIntoQueue: Inserts a Message Into the Queue */
export const Message_InsertLoanEmailIntoQueueReader = u.controllerFactory<
  Message_InsertLoanEmailIntoQueueRequest,
  Message_InsertLoanEmailIntoQueueResponse
>(
  Message_InsertLoanEmailIntoQueueResponse,
  'post',
  '/api/Message/InsertLoanEmailIntoQueue/{appendEmailSignature}'
);

export interface Message_InsertLoanSMSIntoQueueRequest {
  path: {
    /** should the SMS signature be appended to the SMS */
    appendSMSSignature: boolean;
  };
  body: m.MessageViewModel;
}
export type Message_InsertLoanSMSIntoQueueResponse = Record<string, unknown>;
export const Message_InsertLoanSMSIntoQueueResponse = t.UnknownRecord;

/* Message_InsertLoanSMSIntoQueue: Inserts a Message Into the Queue */
export const Message_InsertLoanSMSIntoQueueReader = u.controllerFactory<
  Message_InsertLoanSMSIntoQueueRequest,
  Message_InsertLoanSMSIntoQueueResponse
>(
  Message_InsertLoanSMSIntoQueueResponse,
  'post',
  '/api/Message/InsertLoanSMSIntoQueue/{appendSMSSignature}'
);

export interface Mortgage_GetMortgageByIdRequest {
  path: {
    mortgageId: number;
  };
}
export type Mortgage_GetMortgageByIdResponse = m.MortgageViewModel;
export const Mortgage_GetMortgageByIdResponse = m.MortgageViewModel;

/* Mortgage_GetMortgageById */
export const Mortgage_GetMortgageByIdReader = u.controllerFactory<
  Mortgage_GetMortgageByIdRequest,
  Mortgage_GetMortgageByIdResponse
>(Mortgage_GetMortgageByIdResponse, 'get', '/api/mortgages/{mortgageId}');

export interface Mortgage_UpdateMortgageRequest {
  path: {
    mortgageId: number;
  };
  body: m.MortgageViewModel;
}
export type Mortgage_UpdateMortgageResponse = m.MortgageViewModel;
export const Mortgage_UpdateMortgageResponse = m.MortgageViewModel;

/* Mortgage_UpdateMortgage */
export const Mortgage_UpdateMortgageReader = u.controllerFactory<
  Mortgage_UpdateMortgageRequest,
  Mortgage_UpdateMortgageResponse
>(Mortgage_UpdateMortgageResponse, 'post', '/api/mortgages/{mortgageId}');

export interface Mortgage_DeleteMortgageRequest {
  path: {
    mortgageId: number;
  };
}
export type Mortgage_DeleteMortgageResponse = Record<string, unknown>;
export const Mortgage_DeleteMortgageResponse = t.UnknownRecord;

/* Mortgage_DeleteMortgage */
export const Mortgage_DeleteMortgageReader = u.controllerFactory<
  Mortgage_DeleteMortgageRequest,
  Mortgage_DeleteMortgageResponse
>(Mortgage_DeleteMortgageResponse, 'delete', '/api/mortgages/{mortgageId}');

export interface Mortgage_GetMortgageByApplicationIdRequest {
  query: {
    applicationId: number;
  };
}
export type Mortgage_GetMortgageByApplicationIdResponse = m.MortgageViewModel;
export const Mortgage_GetMortgageByApplicationIdResponse = m.MortgageViewModel;

/* Mortgage_GetMortgageByApplicationId */
export const Mortgage_GetMortgageByApplicationIdReader = u.controllerFactory<
  Mortgage_GetMortgageByApplicationIdRequest,
  Mortgage_GetMortgageByApplicationIdResponse
>(Mortgage_GetMortgageByApplicationIdResponse, 'get', '/api/mortgages');

export interface Mortgage_InsertMortgageRequest {
  query: {
    /** set to true to map from the application. This should only be called when initializing a new mortgage model from an application Id */
    mapFromApplication?: boolean;
  };
  body: m.MortgageViewModel;
}
export type Mortgage_InsertMortgageResponse = m.MortgageViewModel;
export const Mortgage_InsertMortgageResponse = m.MortgageViewModel;

/* Mortgage_InsertMortgage: Inserts a MORTGAGE model. Set the applicationId to link to a loan. */
export const Mortgage_InsertMortgageReader = u.controllerFactory<
  Mortgage_InsertMortgageRequest,
  Mortgage_InsertMortgageResponse
>(Mortgage_InsertMortgageResponse, 'post', '/api/mortgages');

export interface Mortgage_ResetMortgageRequest {
  path: {
    mortgageId: number;
  };
  body: m.MortgageViewModel;
}
export type Mortgage_ResetMortgageResponse = m.MortgageViewModel;
export const Mortgage_ResetMortgageResponse = m.MortgageViewModel;

/* Mortgage_ResetMortgage */
export const Mortgage_ResetMortgageReader = u.controllerFactory<
  Mortgage_ResetMortgageRequest,
  Mortgage_ResetMortgageResponse
>(Mortgage_ResetMortgageResponse, 'post', '/api/mortgages/{mortgageId}/reset');

export interface Mortgage_ImportDuRequest {
  path: {
    /** id of the loan to import du 3.2 */
    loanId: number;
    /** id of the to mortgage import du 3.2 */
    mortgageId: number;
  };
}
export type Mortgage_ImportDuResponse = m.MortgageViewModel;
export const Mortgage_ImportDuResponse = m.MortgageViewModel;

/* Mortgage_ImportDu: Import DU */
export const Mortgage_ImportDuReader = u.controllerFactory<
  Mortgage_ImportDuRequest,
  Mortgage_ImportDuResponse
>(
  Mortgage_ImportDuResponse,
  'post',
  '/api/mortgages/{loanId}/import-du/{mortgageId}'
);

export interface Mortgage_ExportDuRequest {
  path: {
    /** id of the loan to export mortgage to du 3.2 */
    loanId: number;
  };
}
export type Mortgage_ExportDuResponse = Record<string, unknown>;
export const Mortgage_ExportDuResponse = t.UnknownRecord;

/* Mortgage_ExportDu: Export DU */
export const Mortgage_ExportDuReader = u.controllerFactory<
  Mortgage_ExportDuRequest,
  Mortgage_ExportDuResponse
>(Mortgage_ExportDuResponse, 'post', '/api/mortgages/{loanId}/export-du');

export interface Mortgage_InsertSubjectPropertyRequest {
  path: {
    /** id of the mortgage */
    mortgageId: number;
  };
  body: m.SubjectPropertyViewModel;
}
export type Mortgage_InsertSubjectPropertyResponse = m.SubjectPropertyViewModel;
export const Mortgage_InsertSubjectPropertyResponse =
  m.SubjectPropertyViewModel;

/* Mortgage_InsertSubjectProperty: Insert Subject Property for Mortgage */
export const Mortgage_InsertSubjectPropertyReader = u.controllerFactory<
  Mortgage_InsertSubjectPropertyRequest,
  Mortgage_InsertSubjectPropertyResponse
>(
  Mortgage_InsertSubjectPropertyResponse,
  'post',
  '/api/mortgages/{mortgageId}/subjectproperty'
);

export interface Mortgage_InsertMortgageTermRequest {
  path: {
    /** id of the mortgage */
    mortgageId: number;
  };
  body: m.MortgageTermViewModel;
}
export type Mortgage_InsertMortgageTermResponse = m.MortgageTermViewModel;
export const Mortgage_InsertMortgageTermResponse = m.MortgageTermViewModel;

/* Mortgage_InsertMortgageTerm: Insert Mortgage Term for Mortgage */
export const Mortgage_InsertMortgageTermReader = u.controllerFactory<
  Mortgage_InsertMortgageTermRequest,
  Mortgage_InsertMortgageTermResponse
>(
  Mortgage_InsertMortgageTermResponse,
  'post',
  '/api/mortgages/{mortgageId}/mortgageterm'
);

export interface Mortgage_InsertTransactionDetailRequest {
  path: {
    /** id of the mortgage */
    mortgageId: number;
  };
  body: m.TransactionDetailViewModel;
}
export type Mortgage_InsertTransactionDetailResponse = m.TransactionDetailViewModel;
export const Mortgage_InsertTransactionDetailResponse =
  m.TransactionDetailViewModel;

/* Mortgage_InsertTransactionDetail: Insert Transaction Detail for Mortgage */
export const Mortgage_InsertTransactionDetailReader = u.controllerFactory<
  Mortgage_InsertTransactionDetailRequest,
  Mortgage_InsertTransactionDetailResponse
>(
  Mortgage_InsertTransactionDetailResponse,
  'post',
  '/api/mortgages/{mortgageId}/transactiondetail'
);

export interface Mortgage_GetBorrowersByMortgageIdRequest {
  path: {
    mortgageId: number;
  };
}
export type Mortgage_GetBorrowersByMortgageIdResponse = Array<
  m.MortgageBorrowerViewModel
>;
export const Mortgage_GetBorrowersByMortgageIdResponse = t.array(
  m.MortgageBorrowerViewModel
);

/* Mortgage_GetBorrowersByMortgageId: Get Borrower by Mortgage Id */
export const Mortgage_GetBorrowersByMortgageIdReader = u.controllerFactory<
  Mortgage_GetBorrowersByMortgageIdRequest,
  Mortgage_GetBorrowersByMortgageIdResponse
>(
  Mortgage_GetBorrowersByMortgageIdResponse,
  'get',
  '/api/mortgages/{mortgageId}/borrowers'
);

export interface Mortgage_InsertBorrowerRequest {
  path: {
    /** id of the mortgage */
    mortgageId: number;
  };
  body: m.MortgageBorrowerViewModel;
}
export type Mortgage_InsertBorrowerResponse = m.MortgageBorrowerViewModel;
export const Mortgage_InsertBorrowerResponse = m.MortgageBorrowerViewModel;

/* Mortgage_InsertBorrower: Insert Borrower for Mortgage */
export const Mortgage_InsertBorrowerReader = u.controllerFactory<
  Mortgage_InsertBorrowerRequest,
  Mortgage_InsertBorrowerResponse
>(
  Mortgage_InsertBorrowerResponse,
  'post',
  '/api/mortgages/{mortgageId}/borrowers'
);

export interface MortgageAddress_GetAddressByIdRequest {
  path: {
    addressId: number;
  };
}
export type MortgageAddress_GetAddressByIdResponse = m.AddressViewModel;
export const MortgageAddress_GetAddressByIdResponse = m.AddressViewModel;

/* MortgageAddress_GetAddressById */
export const MortgageAddress_GetAddressByIdReader = u.controllerFactory<
  MortgageAddress_GetAddressByIdRequest,
  MortgageAddress_GetAddressByIdResponse
>(
  MortgageAddress_GetAddressByIdResponse,
  'get',
  '/api/mortgage/addresses/{addressId}'
);

export interface MortgageAddress_UpdateAddressRequest {
  path: {
    addressId: number;
  };
  body: m.AddressViewModel;
}
export type MortgageAddress_UpdateAddressResponse = m.AddressViewModel;
export const MortgageAddress_UpdateAddressResponse = m.AddressViewModel;

/* MortgageAddress_UpdateAddress */
export const MortgageAddress_UpdateAddressReader = u.controllerFactory<
  MortgageAddress_UpdateAddressRequest,
  MortgageAddress_UpdateAddressResponse
>(
  MortgageAddress_UpdateAddressResponse,
  'post',
  '/api/mortgage/addresses/{addressId}'
);

export interface MortgageAddress_DeleteAddressRequest {
  path: {
    addressId: number;
  };
}
export type MortgageAddress_DeleteAddressResponse = Record<string, unknown>;
export const MortgageAddress_DeleteAddressResponse = t.UnknownRecord;

/* MortgageAddress_DeleteAddress */
export const MortgageAddress_DeleteAddressReader = u.controllerFactory<
  MortgageAddress_DeleteAddressRequest,
  MortgageAddress_DeleteAddressResponse
>(
  MortgageAddress_DeleteAddressResponse,
  'delete',
  '/api/mortgage/addresses/{addressId}'
);

export interface MortgageAsset_GetAssetByIdRequest {
  path: {
    assetId: number;
  };
}
export type MortgageAsset_GetAssetByIdResponse = m.AssetViewModel;
export const MortgageAsset_GetAssetByIdResponse = m.AssetViewModel;

/* MortgageAsset_GetAssetById */
export const MortgageAsset_GetAssetByIdReader = u.controllerFactory<
  MortgageAsset_GetAssetByIdRequest,
  MortgageAsset_GetAssetByIdResponse
>(MortgageAsset_GetAssetByIdResponse, 'get', '/api/mortgage/assets/{assetId}');

export interface MortgageAsset_UpdateAssetRequest {
  path: {
    assetId: number;
  };
  body: m.AssetViewModel;
}
export type MortgageAsset_UpdateAssetResponse = m.AssetViewModel;
export const MortgageAsset_UpdateAssetResponse = m.AssetViewModel;

/* MortgageAsset_UpdateAsset */
export const MortgageAsset_UpdateAssetReader = u.controllerFactory<
  MortgageAsset_UpdateAssetRequest,
  MortgageAsset_UpdateAssetResponse
>(MortgageAsset_UpdateAssetResponse, 'post', '/api/mortgage/assets/{assetId}');

export interface MortgageAsset_DeleteAssetRequest {
  path: {
    assetId: number;
  };
}
export type MortgageAsset_DeleteAssetResponse = Record<string, unknown>;
export const MortgageAsset_DeleteAssetResponse = t.UnknownRecord;

/* MortgageAsset_DeleteAsset */
export const MortgageAsset_DeleteAssetReader = u.controllerFactory<
  MortgageAsset_DeleteAssetRequest,
  MortgageAsset_DeleteAssetResponse
>(
  MortgageAsset_DeleteAssetResponse,
  'delete',
  '/api/mortgage/assets/{assetId}'
);

export interface MortgageAsset_InsertAssetRequest {
  body: m.AssetViewModel;
}
export type MortgageAsset_InsertAssetResponse = m.AssetViewModel;
export const MortgageAsset_InsertAssetResponse = m.AssetViewModel;

/* MortgageAsset_InsertAsset */
export const MortgageAsset_InsertAssetReader = u.controllerFactory<
  MortgageAsset_InsertAssetRequest,
  MortgageAsset_InsertAssetResponse
>(MortgageAsset_InsertAssetResponse, 'post', '/api/mortgage/assets');

export interface MortgageAsset_InsertAddressRequest {
  path: {
    assetId: number;
  };
  body: m.AddressViewModel;
}
export type MortgageAsset_InsertAddressResponse = m.AddressViewModel;
export const MortgageAsset_InsertAddressResponse = m.AddressViewModel;

/* MortgageAsset_InsertAddress */
export const MortgageAsset_InsertAddressReader = u.controllerFactory<
  MortgageAsset_InsertAddressRequest,
  MortgageAsset_InsertAddressResponse
>(
  MortgageAsset_InsertAddressResponse,
  'post',
  '/api/mortgage/assets/{assetId}/address'
);

export interface MortgageBorrower_GetBorrowerByIdRequest {
  path: {
    borrowerId: number;
  };
}
export type MortgageBorrower_GetBorrowerByIdResponse = m.MortgageBorrowerViewModel;
export const MortgageBorrower_GetBorrowerByIdResponse =
  m.MortgageBorrowerViewModel;

/* MortgageBorrower_GetBorrowerById */
export const MortgageBorrower_GetBorrowerByIdReader = u.controllerFactory<
  MortgageBorrower_GetBorrowerByIdRequest,
  MortgageBorrower_GetBorrowerByIdResponse
>(
  MortgageBorrower_GetBorrowerByIdResponse,
  'get',
  '/api/mortgage/borrowers/{borrowerId}'
);

export interface MortgageBorrower_UpdateBorrowerRequest {
  path: {
    borrowerId: number;
  };
  body: m.MortgageBorrowerViewModel;
}
export type MortgageBorrower_UpdateBorrowerResponse = m.MortgageBorrowerViewModel;
export const MortgageBorrower_UpdateBorrowerResponse =
  m.MortgageBorrowerViewModel;

/* MortgageBorrower_UpdateBorrower */
export const MortgageBorrower_UpdateBorrowerReader = u.controllerFactory<
  MortgageBorrower_UpdateBorrowerRequest,
  MortgageBorrower_UpdateBorrowerResponse
>(
  MortgageBorrower_UpdateBorrowerResponse,
  'post',
  '/api/mortgage/borrowers/{borrowerId}'
);

export interface MortgageBorrower_DeleteBorrowerRequest {
  path: {
    borrowerId: number;
  };
  query: {
    cleanupOrphanedContacts?: boolean;
  };
}
export type MortgageBorrower_DeleteBorrowerResponse = Record<string, unknown>;
export const MortgageBorrower_DeleteBorrowerResponse = t.UnknownRecord;

/* MortgageBorrower_DeleteBorrower */
export const MortgageBorrower_DeleteBorrowerReader = u.controllerFactory<
  MortgageBorrower_DeleteBorrowerRequest,
  MortgageBorrower_DeleteBorrowerResponse
>(
  MortgageBorrower_DeleteBorrowerResponse,
  'delete',
  '/api/mortgage/borrowers/{borrowerId}'
);

export interface MortgageBorrower_InsertBorrowerRequest {
  body: m.MortgageBorrowerViewModel;
}
export type MortgageBorrower_InsertBorrowerResponse = m.MortgageBorrowerViewModel;
export const MortgageBorrower_InsertBorrowerResponse =
  m.MortgageBorrowerViewModel;

/* MortgageBorrower_InsertBorrower */
export const MortgageBorrower_InsertBorrowerReader = u.controllerFactory<
  MortgageBorrower_InsertBorrowerRequest,
  MortgageBorrower_InsertBorrowerResponse
>(MortgageBorrower_InsertBorrowerResponse, 'post', '/api/mortgage/borrowers');

export interface MortgageBorrower_GetAssetsByBorrowerIdRequest {
  path: {
    borrowerId: number;
  };
}
export type MortgageBorrower_GetAssetsByBorrowerIdResponse = Array<
  m.AssetViewModel
>;
export const MortgageBorrower_GetAssetsByBorrowerIdResponse = t.array(
  m.AssetViewModel
);

/* MortgageBorrower_GetAssetsByBorrowerId */
export const MortgageBorrower_GetAssetsByBorrowerIdReader = u.controllerFactory<
  MortgageBorrower_GetAssetsByBorrowerIdRequest,
  MortgageBorrower_GetAssetsByBorrowerIdResponse
>(
  MortgageBorrower_GetAssetsByBorrowerIdResponse,
  'get',
  '/api/mortgage/borrowers/{borrowerId}/assets'
);

export interface MortgageBorrower_InsertAssetRequest {
  path: {
    borrowerId: number;
  };
  body: m.AssetViewModel;
}
export type MortgageBorrower_InsertAssetResponse = m.AssetViewModel;
export const MortgageBorrower_InsertAssetResponse = m.AssetViewModel;

/* MortgageBorrower_InsertAsset */
export const MortgageBorrower_InsertAssetReader = u.controllerFactory<
  MortgageBorrower_InsertAssetRequest,
  MortgageBorrower_InsertAssetResponse
>(
  MortgageBorrower_InsertAssetResponse,
  'post',
  '/api/mortgage/borrowers/{borrowerId}/assets'
);

export interface MortgageBorrower_GetDeclarationsByBorrowerIdRequest {
  path: {
    borrowerId: number;
  };
}
export type MortgageBorrower_GetDeclarationsByBorrowerIdResponse = Array<
  m.DeclarationViewModel
>;
export const MortgageBorrower_GetDeclarationsByBorrowerIdResponse = t.array(
  m.DeclarationViewModel
);

/* MortgageBorrower_GetDeclarationsByBorrowerId */
export const MortgageBorrower_GetDeclarationsByBorrowerIdReader = u.controllerFactory<
  MortgageBorrower_GetDeclarationsByBorrowerIdRequest,
  MortgageBorrower_GetDeclarationsByBorrowerIdResponse
>(
  MortgageBorrower_GetDeclarationsByBorrowerIdResponse,
  'get',
  '/api/mortgage/borrowers/{borrowerId}/declarations'
);

export interface MortgageBorrower_InsertDeclarationRequest {
  path: {
    borrowerId: number;
  };
  body: m.DeclarationViewModel;
}
export type MortgageBorrower_InsertDeclarationResponse = m.DeclarationViewModel;
export const MortgageBorrower_InsertDeclarationResponse =
  m.DeclarationViewModel;

/* MortgageBorrower_InsertDeclaration */
export const MortgageBorrower_InsertDeclarationReader = u.controllerFactory<
  MortgageBorrower_InsertDeclarationRequest,
  MortgageBorrower_InsertDeclarationResponse
>(
  MortgageBorrower_InsertDeclarationResponse,
  'post',
  '/api/mortgage/borrowers/{borrowerId}/declarations'
);

export interface MortgageBorrower_GetDependentsByBorrowerIdRequest {
  path: {
    borrowerId: number;
  };
}
export type MortgageBorrower_GetDependentsByBorrowerIdResponse = Array<
  m.DependentViewModel
>;
export const MortgageBorrower_GetDependentsByBorrowerIdResponse = t.array(
  m.DependentViewModel
);

/* MortgageBorrower_GetDependentsByBorrowerId */
export const MortgageBorrower_GetDependentsByBorrowerIdReader = u.controllerFactory<
  MortgageBorrower_GetDependentsByBorrowerIdRequest,
  MortgageBorrower_GetDependentsByBorrowerIdResponse
>(
  MortgageBorrower_GetDependentsByBorrowerIdResponse,
  'get',
  '/api/mortgage/borrowers/{borrowerId}/dependents'
);

export interface MortgageBorrower_InsertDependentRequest {
  path: {
    borrowerId: number;
  };
  body: m.DependentViewModel;
}
export type MortgageBorrower_InsertDependentResponse = m.DependentViewModel;
export const MortgageBorrower_InsertDependentResponse = m.DependentViewModel;

/* MortgageBorrower_InsertDependent */
export const MortgageBorrower_InsertDependentReader = u.controllerFactory<
  MortgageBorrower_InsertDependentRequest,
  MortgageBorrower_InsertDependentResponse
>(
  MortgageBorrower_InsertDependentResponse,
  'post',
  '/api/mortgage/borrowers/{borrowerId}/dependents'
);

export interface MortgageBorrower_GetEmailsByBorrowerIdRequest {
  path: {
    borrowerId: number;
  };
}
export type MortgageBorrower_GetEmailsByBorrowerIdResponse = Array<
  m.EmailViewModel
>;
export const MortgageBorrower_GetEmailsByBorrowerIdResponse = t.array(
  m.EmailViewModel
);

/* MortgageBorrower_GetEmailsByBorrowerId */
export const MortgageBorrower_GetEmailsByBorrowerIdReader = u.controllerFactory<
  MortgageBorrower_GetEmailsByBorrowerIdRequest,
  MortgageBorrower_GetEmailsByBorrowerIdResponse
>(
  MortgageBorrower_GetEmailsByBorrowerIdResponse,
  'get',
  '/api/mortgage/borrowers/{borrowerId}/emails'
);

export interface MortgageBorrower_InsertEmailRequest {
  path: {
    borrowerId: number;
  };
  body: m.EmailViewModel;
}
export type MortgageBorrower_InsertEmailResponse = m.EmailViewModel;
export const MortgageBorrower_InsertEmailResponse = m.EmailViewModel;

/* MortgageBorrower_InsertEmail */
export const MortgageBorrower_InsertEmailReader = u.controllerFactory<
  MortgageBorrower_InsertEmailRequest,
  MortgageBorrower_InsertEmailResponse
>(
  MortgageBorrower_InsertEmailResponse,
  'post',
  '/api/mortgage/borrowers/{borrowerId}/emails'
);

export interface MortgageBorrower_GetEmploymentsByBorrowerIdRequest {
  path: {
    borrowerId: number;
  };
}
export type MortgageBorrower_GetEmploymentsByBorrowerIdResponse = Array<
  m.EmploymentViewModel
>;
export const MortgageBorrower_GetEmploymentsByBorrowerIdResponse = t.array(
  m.EmploymentViewModel
);

/* MortgageBorrower_GetEmploymentsByBorrowerId */
export const MortgageBorrower_GetEmploymentsByBorrowerIdReader = u.controllerFactory<
  MortgageBorrower_GetEmploymentsByBorrowerIdRequest,
  MortgageBorrower_GetEmploymentsByBorrowerIdResponse
>(
  MortgageBorrower_GetEmploymentsByBorrowerIdResponse,
  'get',
  '/api/mortgage/borrowers/{borrowerId}/employments'
);

export interface MortgageBorrower_InsertEmploymentRequest {
  path: {
    borrowerId: number;
  };
  body: m.EmploymentViewModel;
}
export type MortgageBorrower_InsertEmploymentResponse = m.EmploymentViewModel;
export const MortgageBorrower_InsertEmploymentResponse = m.EmploymentViewModel;

/* MortgageBorrower_InsertEmployment */
export const MortgageBorrower_InsertEmploymentReader = u.controllerFactory<
  MortgageBorrower_InsertEmploymentRequest,
  MortgageBorrower_InsertEmploymentResponse
>(
  MortgageBorrower_InsertEmploymentResponse,
  'post',
  '/api/mortgage/borrowers/{borrowerId}/employments'
);

export interface MortgageBorrower_GetExpensesByBorrowerIdRequest {
  path: {
    borrowerId: number;
  };
}
export type MortgageBorrower_GetExpensesByBorrowerIdResponse = Array<
  m.ExpenseViewModel
>;
export const MortgageBorrower_GetExpensesByBorrowerIdResponse = t.array(
  m.ExpenseViewModel
);

/* MortgageBorrower_GetExpensesByBorrowerId */
export const MortgageBorrower_GetExpensesByBorrowerIdReader = u.controllerFactory<
  MortgageBorrower_GetExpensesByBorrowerIdRequest,
  MortgageBorrower_GetExpensesByBorrowerIdResponse
>(
  MortgageBorrower_GetExpensesByBorrowerIdResponse,
  'get',
  '/api/mortgage/borrowers/{borrowerId}/expenses'
);

export interface MortgageBorrower_InsertExpenseRequest {
  path: {
    borrowerId: number;
  };
  body: m.ExpenseViewModel;
}
export type MortgageBorrower_InsertExpenseResponse = m.ExpenseViewModel;
export const MortgageBorrower_InsertExpenseResponse = m.ExpenseViewModel;

/* MortgageBorrower_InsertExpense */
export const MortgageBorrower_InsertExpenseReader = u.controllerFactory<
  MortgageBorrower_InsertExpenseRequest,
  MortgageBorrower_InsertExpenseResponse
>(
  MortgageBorrower_InsertExpenseResponse,
  'post',
  '/api/mortgage/borrowers/{borrowerId}/expenses'
);

export interface MortgageBorrower_GetGovernmentMonitorsByBorrowerIdRequest {
  path: {
    borrowerId: number;
  };
}
export type MortgageBorrower_GetGovernmentMonitorsByBorrowerIdResponse = Array<
  m.GovernmentMonitorViewModel
>;
export const MortgageBorrower_GetGovernmentMonitorsByBorrowerIdResponse = t.array(
  m.GovernmentMonitorViewModel
);

/* MortgageBorrower_GetGovernmentMonitorsByBorrowerId */
export const MortgageBorrower_GetGovernmentMonitorsByBorrowerIdReader = u.controllerFactory<
  MortgageBorrower_GetGovernmentMonitorsByBorrowerIdRequest,
  MortgageBorrower_GetGovernmentMonitorsByBorrowerIdResponse
>(
  MortgageBorrower_GetGovernmentMonitorsByBorrowerIdResponse,
  'get',
  '/api/mortgage/borrowers/{borrowerId}/governmentmonitors'
);

export interface MortgageBorrower_InsertGovernmentMonitorRequest {
  path: {
    borrowerId: number;
  };
  body: m.GovernmentMonitorViewModel;
}
export type MortgageBorrower_InsertGovernmentMonitorResponse = m.GovernmentMonitorViewModel;
export const MortgageBorrower_InsertGovernmentMonitorResponse =
  m.GovernmentMonitorViewModel;

/* MortgageBorrower_InsertGovernmentMonitor */
export const MortgageBorrower_InsertGovernmentMonitorReader = u.controllerFactory<
  MortgageBorrower_InsertGovernmentMonitorRequest,
  MortgageBorrower_InsertGovernmentMonitorResponse
>(
  MortgageBorrower_InsertGovernmentMonitorResponse,
  'post',
  '/api/mortgage/borrowers/{borrowerId}/governmentmonitors'
);

export interface MortgageBorrower_GetIncomesByBorrowerIdRequest {
  path: {
    borrowerId: number;
  };
}
export type MortgageBorrower_GetIncomesByBorrowerIdResponse = Array<
  m.IncomeViewModel
>;
export const MortgageBorrower_GetIncomesByBorrowerIdResponse = t.array(
  m.IncomeViewModel
);

/* MortgageBorrower_GetIncomesByBorrowerId */
export const MortgageBorrower_GetIncomesByBorrowerIdReader = u.controllerFactory<
  MortgageBorrower_GetIncomesByBorrowerIdRequest,
  MortgageBorrower_GetIncomesByBorrowerIdResponse
>(
  MortgageBorrower_GetIncomesByBorrowerIdResponse,
  'get',
  '/api/mortgage/borrowers/{borrowerId}/incomes'
);

export interface MortgageBorrower_InsertIncomeRequest {
  path: {
    borrowerId: number;
  };
  body: m.IncomeViewModel;
}
export type MortgageBorrower_InsertIncomeResponse = m.IncomeViewModel;
export const MortgageBorrower_InsertIncomeResponse = m.IncomeViewModel;

/* MortgageBorrower_InsertIncome */
export const MortgageBorrower_InsertIncomeReader = u.controllerFactory<
  MortgageBorrower_InsertIncomeRequest,
  MortgageBorrower_InsertIncomeResponse
>(
  MortgageBorrower_InsertIncomeResponse,
  'post',
  '/api/mortgage/borrowers/{borrowerId}/incomes'
);

export interface MortgageBorrower_GetLiabilitiesByBorrowerIdRequest {
  path: {
    borrowerId: number;
  };
}
export type MortgageBorrower_GetLiabilitiesByBorrowerIdResponse = Array<
  m.LiabilityViewModel
>;
export const MortgageBorrower_GetLiabilitiesByBorrowerIdResponse = t.array(
  m.LiabilityViewModel
);

/* MortgageBorrower_GetLiabilitiesByBorrowerId */
export const MortgageBorrower_GetLiabilitiesByBorrowerIdReader = u.controllerFactory<
  MortgageBorrower_GetLiabilitiesByBorrowerIdRequest,
  MortgageBorrower_GetLiabilitiesByBorrowerIdResponse
>(
  MortgageBorrower_GetLiabilitiesByBorrowerIdResponse,
  'get',
  '/api/mortgage/borrowers/{borrowerId}/liabilities'
);

export interface MortgageBorrower_InsertLiabilityRequest {
  path: {
    borrowerId: number;
  };
  body: m.LiabilityViewModel;
}
export type MortgageBorrower_InsertLiabilityResponse = m.LiabilityViewModel;
export const MortgageBorrower_InsertLiabilityResponse = m.LiabilityViewModel;

/* MortgageBorrower_InsertLiability */
export const MortgageBorrower_InsertLiabilityReader = u.controllerFactory<
  MortgageBorrower_InsertLiabilityRequest,
  MortgageBorrower_InsertLiabilityResponse
>(
  MortgageBorrower_InsertLiabilityResponse,
  'post',
  '/api/mortgage/borrowers/{borrowerId}/liabilities'
);

export interface MortgageBorrower_GetPhonesByBorrowerIdRequest {
  path: {
    borrowerId: number;
  };
}
export type MortgageBorrower_GetPhonesByBorrowerIdResponse = Array<
  m.PhoneViewModel
>;
export const MortgageBorrower_GetPhonesByBorrowerIdResponse = t.array(
  m.PhoneViewModel
);

/* MortgageBorrower_GetPhonesByBorrowerId */
export const MortgageBorrower_GetPhonesByBorrowerIdReader = u.controllerFactory<
  MortgageBorrower_GetPhonesByBorrowerIdRequest,
  MortgageBorrower_GetPhonesByBorrowerIdResponse
>(
  MortgageBorrower_GetPhonesByBorrowerIdResponse,
  'get',
  '/api/mortgage/borrowers/{borrowerId}/phones'
);

export interface MortgageBorrower_InsertPhoneRequest {
  path: {
    borrowerId: number;
  };
  body: m.PhoneViewModel;
}
export type MortgageBorrower_InsertPhoneResponse = m.PhoneViewModel;
export const MortgageBorrower_InsertPhoneResponse = m.PhoneViewModel;

/* MortgageBorrower_InsertPhone */
export const MortgageBorrower_InsertPhoneReader = u.controllerFactory<
  MortgageBorrower_InsertPhoneRequest,
  MortgageBorrower_InsertPhoneResponse
>(
  MortgageBorrower_InsertPhoneResponse,
  'post',
  '/api/mortgage/borrowers/{borrowerId}/phones'
);

export interface MortgageBorrower_GetReosByBorrowerIdRequest {
  path: {
    borrowerId: number;
  };
}
export type MortgageBorrower_GetReosByBorrowerIdResponse = Array<
  m.ReoViewModel
>;
export const MortgageBorrower_GetReosByBorrowerIdResponse = t.array(
  m.ReoViewModel
);

/* MortgageBorrower_GetReosByBorrowerId */
export const MortgageBorrower_GetReosByBorrowerIdReader = u.controllerFactory<
  MortgageBorrower_GetReosByBorrowerIdRequest,
  MortgageBorrower_GetReosByBorrowerIdResponse
>(
  MortgageBorrower_GetReosByBorrowerIdResponse,
  'get',
  '/api/mortgage/borrowers/{borrowerId}/reos'
);

export interface MortgageBorrower_InsertReoRequest {
  path: {
    borrowerId: number;
  };
  body: m.ReoViewModel;
}
export type MortgageBorrower_InsertReoResponse = m.ReoViewModel;
export const MortgageBorrower_InsertReoResponse = m.ReoViewModel;

/* MortgageBorrower_InsertReo */
export const MortgageBorrower_InsertReoReader = u.controllerFactory<
  MortgageBorrower_InsertReoRequest,
  MortgageBorrower_InsertReoResponse
>(
  MortgageBorrower_InsertReoResponse,
  'post',
  '/api/mortgage/borrowers/{borrowerId}/reos'
);

export interface MortgageBorrower_GetResidencyAddressesByBorrowerIdRequest {
  path: {
    borrowerId: number;
  };
}
export type MortgageBorrower_GetResidencyAddressesByBorrowerIdResponse = Array<
  m.ResidencyAddressViewModel
>;
export const MortgageBorrower_GetResidencyAddressesByBorrowerIdResponse = t.array(
  m.ResidencyAddressViewModel
);

/* MortgageBorrower_GetResidencyAddressesByBorrowerId */
export const MortgageBorrower_GetResidencyAddressesByBorrowerIdReader = u.controllerFactory<
  MortgageBorrower_GetResidencyAddressesByBorrowerIdRequest,
  MortgageBorrower_GetResidencyAddressesByBorrowerIdResponse
>(
  MortgageBorrower_GetResidencyAddressesByBorrowerIdResponse,
  'get',
  '/api/mortgage/borrowers/{borrowerId}/residencyaddresses'
);

export interface MortgageBorrower_InsertResidencyAddressRequest {
  path: {
    borrowerId: number;
  };
  body: m.ResidencyAddressViewModel;
}
export type MortgageBorrower_InsertResidencyAddressResponse = m.ResidencyAddressViewModel;
export const MortgageBorrower_InsertResidencyAddressResponse =
  m.ResidencyAddressViewModel;

/* MortgageBorrower_InsertResidencyAddress */
export const MortgageBorrower_InsertResidencyAddressReader = u.controllerFactory<
  MortgageBorrower_InsertResidencyAddressRequest,
  MortgageBorrower_InsertResidencyAddressResponse
>(
  MortgageBorrower_InsertResidencyAddressResponse,
  'post',
  '/api/mortgage/borrowers/{borrowerId}/residencyaddresses'
);

export interface MortgageDeclaration_GetDeclarationByIdRequest {
  path: {
    declarationId: number;
  };
}
export type MortgageDeclaration_GetDeclarationByIdResponse = m.DeclarationViewModel;
export const MortgageDeclaration_GetDeclarationByIdResponse =
  m.DeclarationViewModel;

/* MortgageDeclaration_GetDeclarationById */
export const MortgageDeclaration_GetDeclarationByIdReader = u.controllerFactory<
  MortgageDeclaration_GetDeclarationByIdRequest,
  MortgageDeclaration_GetDeclarationByIdResponse
>(
  MortgageDeclaration_GetDeclarationByIdResponse,
  'get',
  '/api/mortgage/declarations/{declarationId}'
);

export interface MortgageDeclaration_UpdateDeclarationRequest {
  path: {
    declarationId: number;
  };
  body: m.DeclarationViewModel;
}
export type MortgageDeclaration_UpdateDeclarationResponse = m.DeclarationViewModel;
export const MortgageDeclaration_UpdateDeclarationResponse =
  m.DeclarationViewModel;

/* MortgageDeclaration_UpdateDeclaration */
export const MortgageDeclaration_UpdateDeclarationReader = u.controllerFactory<
  MortgageDeclaration_UpdateDeclarationRequest,
  MortgageDeclaration_UpdateDeclarationResponse
>(
  MortgageDeclaration_UpdateDeclarationResponse,
  'post',
  '/api/mortgage/declarations/{declarationId}'
);

export interface MortgageDeclaration_DeleteDeclarationRequest {
  path: {
    declarationId: number;
  };
}
export type MortgageDeclaration_DeleteDeclarationResponse = Record<
  string,
  unknown
>;
export const MortgageDeclaration_DeleteDeclarationResponse = t.UnknownRecord;

/* MortgageDeclaration_DeleteDeclaration */
export const MortgageDeclaration_DeleteDeclarationReader = u.controllerFactory<
  MortgageDeclaration_DeleteDeclarationRequest,
  MortgageDeclaration_DeleteDeclarationResponse
>(
  MortgageDeclaration_DeleteDeclarationResponse,
  'delete',
  '/api/mortgage/declarations/{declarationId}'
);

export interface MortgageDeclaration_InsertDeclarationRequest {
  body: m.DeclarationViewModel;
}
export type MortgageDeclaration_InsertDeclarationResponse = m.DeclarationViewModel;
export const MortgageDeclaration_InsertDeclarationResponse =
  m.DeclarationViewModel;

/* MortgageDeclaration_InsertDeclaration */
export const MortgageDeclaration_InsertDeclarationReader = u.controllerFactory<
  MortgageDeclaration_InsertDeclarationRequest,
  MortgageDeclaration_InsertDeclarationResponse
>(
  MortgageDeclaration_InsertDeclarationResponse,
  'post',
  '/api/mortgage/declarations'
);

export interface MortgageDependent_GetDependentByIdRequest {
  path: {
    dependentId: number;
  };
}
export type MortgageDependent_GetDependentByIdResponse = m.DependentViewModel;
export const MortgageDependent_GetDependentByIdResponse = m.DependentViewModel;

/* MortgageDependent_GetDependentById */
export const MortgageDependent_GetDependentByIdReader = u.controllerFactory<
  MortgageDependent_GetDependentByIdRequest,
  MortgageDependent_GetDependentByIdResponse
>(
  MortgageDependent_GetDependentByIdResponse,
  'get',
  '/api/mortgage/dependents/{dependentId}'
);

export interface MortgageDependent_UpdateDependentRequest {
  path: {
    dependentId: number;
  };
  body: m.DependentViewModel;
}
export type MortgageDependent_UpdateDependentResponse = m.DependentViewModel;
export const MortgageDependent_UpdateDependentResponse = m.DependentViewModel;

/* MortgageDependent_UpdateDependent */
export const MortgageDependent_UpdateDependentReader = u.controllerFactory<
  MortgageDependent_UpdateDependentRequest,
  MortgageDependent_UpdateDependentResponse
>(
  MortgageDependent_UpdateDependentResponse,
  'post',
  '/api/mortgage/dependents/{dependentId}'
);

export interface MortgageDependent_DeleteDependentRequest {
  path: {
    dependentId: number;
  };
}
export type MortgageDependent_DeleteDependentResponse = Record<string, unknown>;
export const MortgageDependent_DeleteDependentResponse = t.UnknownRecord;

/* MortgageDependent_DeleteDependent */
export const MortgageDependent_DeleteDependentReader = u.controllerFactory<
  MortgageDependent_DeleteDependentRequest,
  MortgageDependent_DeleteDependentResponse
>(
  MortgageDependent_DeleteDependentResponse,
  'delete',
  '/api/mortgage/dependents/{dependentId}'
);

export interface MortgageDependent_InsertDependentRequest {
  body: m.DependentViewModel;
}
export type MortgageDependent_InsertDependentResponse = m.DependentViewModel;
export const MortgageDependent_InsertDependentResponse = m.DependentViewModel;

/* MortgageDependent_InsertDependent */
export const MortgageDependent_InsertDependentReader = u.controllerFactory<
  MortgageDependent_InsertDependentRequest,
  MortgageDependent_InsertDependentResponse
>(
  MortgageDependent_InsertDependentResponse,
  'post',
  '/api/mortgage/dependents'
);

export interface MortgageEmail_GetEmailByIdRequest {
  path: {
    emailId: number;
  };
}
export type MortgageEmail_GetEmailByIdResponse = m.EmailViewModel;
export const MortgageEmail_GetEmailByIdResponse = m.EmailViewModel;

/* MortgageEmail_GetEmailById */
export const MortgageEmail_GetEmailByIdReader = u.controllerFactory<
  MortgageEmail_GetEmailByIdRequest,
  MortgageEmail_GetEmailByIdResponse
>(MortgageEmail_GetEmailByIdResponse, 'get', '/api/mortgage/emails/{emailId}');

export interface MortgageEmail_UpdateEmailRequest {
  path: {
    emailId: number;
  };
  body: m.EmailViewModel;
}
export type MortgageEmail_UpdateEmailResponse = m.EmailViewModel;
export const MortgageEmail_UpdateEmailResponse = m.EmailViewModel;

/* MortgageEmail_UpdateEmail */
export const MortgageEmail_UpdateEmailReader = u.controllerFactory<
  MortgageEmail_UpdateEmailRequest,
  MortgageEmail_UpdateEmailResponse
>(MortgageEmail_UpdateEmailResponse, 'post', '/api/mortgage/emails/{emailId}');

export interface MortgageEmail_DeleteEmailRequest {
  path: {
    emailId: number;
  };
}
export type MortgageEmail_DeleteEmailResponse = Record<string, unknown>;
export const MortgageEmail_DeleteEmailResponse = t.UnknownRecord;

/* MortgageEmail_DeleteEmail */
export const MortgageEmail_DeleteEmailReader = u.controllerFactory<
  MortgageEmail_DeleteEmailRequest,
  MortgageEmail_DeleteEmailResponse
>(
  MortgageEmail_DeleteEmailResponse,
  'delete',
  '/api/mortgage/emails/{emailId}'
);

export interface MortgageEmployment_GetEmploymentByIdRequest {
  path: {
    employmentId: number;
  };
}
export type MortgageEmployment_GetEmploymentByIdResponse = m.EmploymentViewModel;
export const MortgageEmployment_GetEmploymentByIdResponse =
  m.EmploymentViewModel;

/* MortgageEmployment_GetEmploymentById */
export const MortgageEmployment_GetEmploymentByIdReader = u.controllerFactory<
  MortgageEmployment_GetEmploymentByIdRequest,
  MortgageEmployment_GetEmploymentByIdResponse
>(
  MortgageEmployment_GetEmploymentByIdResponse,
  'get',
  '/api/mortgage/employments/{employmentId}'
);

export interface MortgageEmployment_UpdateEmploymentRequest {
  path: {
    employmentId: number;
  };
  body: m.EmploymentViewModel;
}
export type MortgageEmployment_UpdateEmploymentResponse = m.EmploymentViewModel;
export const MortgageEmployment_UpdateEmploymentResponse =
  m.EmploymentViewModel;

/* MortgageEmployment_UpdateEmployment */
export const MortgageEmployment_UpdateEmploymentReader = u.controllerFactory<
  MortgageEmployment_UpdateEmploymentRequest,
  MortgageEmployment_UpdateEmploymentResponse
>(
  MortgageEmployment_UpdateEmploymentResponse,
  'post',
  '/api/mortgage/employments/{employmentId}'
);

export interface MortgageEmployment_DeleteEmploymentRequest {
  path: {
    employmentId: number;
  };
}
export type MortgageEmployment_DeleteEmploymentResponse = Record<
  string,
  unknown
>;
export const MortgageEmployment_DeleteEmploymentResponse = t.UnknownRecord;

/* MortgageEmployment_DeleteEmployment */
export const MortgageEmployment_DeleteEmploymentReader = u.controllerFactory<
  MortgageEmployment_DeleteEmploymentRequest,
  MortgageEmployment_DeleteEmploymentResponse
>(
  MortgageEmployment_DeleteEmploymentResponse,
  'delete',
  '/api/mortgage/employments/{employmentId}'
);

export interface MortgageEmployment_InsertEmploymentRequest {
  body: m.EmploymentViewModel;
}
export type MortgageEmployment_InsertEmploymentResponse = m.EmploymentViewModel;
export const MortgageEmployment_InsertEmploymentResponse =
  m.EmploymentViewModel;

/* MortgageEmployment_InsertEmployment */
export const MortgageEmployment_InsertEmploymentReader = u.controllerFactory<
  MortgageEmployment_InsertEmploymentRequest,
  MortgageEmployment_InsertEmploymentResponse
>(
  MortgageEmployment_InsertEmploymentResponse,
  'post',
  '/api/mortgage/employments'
);

export interface MortgageEmployment_InsertAddressRequest {
  path: {
    employmentId: number;
  };
  body: m.AddressViewModel;
}
export type MortgageEmployment_InsertAddressResponse = m.AddressViewModel;
export const MortgageEmployment_InsertAddressResponse = m.AddressViewModel;

/* MortgageEmployment_InsertAddress */
export const MortgageEmployment_InsertAddressReader = u.controllerFactory<
  MortgageEmployment_InsertAddressRequest,
  MortgageEmployment_InsertAddressResponse
>(
  MortgageEmployment_InsertAddressResponse,
  'post',
  '/api/mortgage/employments/{employmentId}/address'
);

export interface MortgageExpense_GetExpenseByIdRequest {
  path: {
    expenseId: number;
  };
}
export type MortgageExpense_GetExpenseByIdResponse = m.ExpenseViewModel;
export const MortgageExpense_GetExpenseByIdResponse = m.ExpenseViewModel;

/* MortgageExpense_GetExpenseById */
export const MortgageExpense_GetExpenseByIdReader = u.controllerFactory<
  MortgageExpense_GetExpenseByIdRequest,
  MortgageExpense_GetExpenseByIdResponse
>(
  MortgageExpense_GetExpenseByIdResponse,
  'get',
  '/api/mortgage/expenses/{expenseId}'
);

export interface MortgageExpense_UpdateExpenseRequest {
  path: {
    expenseId: number;
  };
  body: m.ExpenseViewModel;
}
export type MortgageExpense_UpdateExpenseResponse = m.ExpenseViewModel;
export const MortgageExpense_UpdateExpenseResponse = m.ExpenseViewModel;

/* MortgageExpense_UpdateExpense */
export const MortgageExpense_UpdateExpenseReader = u.controllerFactory<
  MortgageExpense_UpdateExpenseRequest,
  MortgageExpense_UpdateExpenseResponse
>(
  MortgageExpense_UpdateExpenseResponse,
  'post',
  '/api/mortgage/expenses/{expenseId}'
);

export interface MortgageExpense_DeleteExpenseRequest {
  path: {
    expenseId: number;
  };
}
export type MortgageExpense_DeleteExpenseResponse = Record<string, unknown>;
export const MortgageExpense_DeleteExpenseResponse = t.UnknownRecord;

/* MortgageExpense_DeleteExpense */
export const MortgageExpense_DeleteExpenseReader = u.controllerFactory<
  MortgageExpense_DeleteExpenseRequest,
  MortgageExpense_DeleteExpenseResponse
>(
  MortgageExpense_DeleteExpenseResponse,
  'delete',
  '/api/mortgage/expenses/{expenseId}'
);

export interface MortgageExpense_InsertExpenseRequest {
  body: m.ExpenseViewModel;
}
export type MortgageExpense_InsertExpenseResponse = m.ExpenseViewModel;
export const MortgageExpense_InsertExpenseResponse = m.ExpenseViewModel;

/* MortgageExpense_InsertExpense */
export const MortgageExpense_InsertExpenseReader = u.controllerFactory<
  MortgageExpense_InsertExpenseRequest,
  MortgageExpense_InsertExpenseResponse
>(MortgageExpense_InsertExpenseResponse, 'post', '/api/mortgage/expenses');

export interface MortgageGovernmentMonitor_GetGovernmentMonitorByIdRequest {
  path: {
    governmentMonitorId: number;
  };
}
export type MortgageGovernmentMonitor_GetGovernmentMonitorByIdResponse = m.GovernmentMonitorViewModel;
export const MortgageGovernmentMonitor_GetGovernmentMonitorByIdResponse =
  m.GovernmentMonitorViewModel;

/* MortgageGovernmentMonitor_GetGovernmentMonitorById */
export const MortgageGovernmentMonitor_GetGovernmentMonitorByIdReader = u.controllerFactory<
  MortgageGovernmentMonitor_GetGovernmentMonitorByIdRequest,
  MortgageGovernmentMonitor_GetGovernmentMonitorByIdResponse
>(
  MortgageGovernmentMonitor_GetGovernmentMonitorByIdResponse,
  'get',
  '/api/mortgage/governmentmonitors/{governmentMonitorId}'
);

export interface MortgageGovernmentMonitor_UpdateGovernmentMonitorRequest {
  path: {
    governmentMonitorId: number;
  };
  body: m.GovernmentMonitorViewModel;
}
export type MortgageGovernmentMonitor_UpdateGovernmentMonitorResponse = m.GovernmentMonitorViewModel;
export const MortgageGovernmentMonitor_UpdateGovernmentMonitorResponse =
  m.GovernmentMonitorViewModel;

/* MortgageGovernmentMonitor_UpdateGovernmentMonitor */
export const MortgageGovernmentMonitor_UpdateGovernmentMonitorReader = u.controllerFactory<
  MortgageGovernmentMonitor_UpdateGovernmentMonitorRequest,
  MortgageGovernmentMonitor_UpdateGovernmentMonitorResponse
>(
  MortgageGovernmentMonitor_UpdateGovernmentMonitorResponse,
  'post',
  '/api/mortgage/governmentmonitors/{governmentMonitorId}'
);

export interface MortgageGovernmentMonitor_DeleteGovernmentMonitorRequest {
  path: {
    governmentMonitorId: number;
  };
}
export type MortgageGovernmentMonitor_DeleteGovernmentMonitorResponse = Record<
  string,
  unknown
>;
export const MortgageGovernmentMonitor_DeleteGovernmentMonitorResponse =
  t.UnknownRecord;

/* MortgageGovernmentMonitor_DeleteGovernmentMonitor */
export const MortgageGovernmentMonitor_DeleteGovernmentMonitorReader = u.controllerFactory<
  MortgageGovernmentMonitor_DeleteGovernmentMonitorRequest,
  MortgageGovernmentMonitor_DeleteGovernmentMonitorResponse
>(
  MortgageGovernmentMonitor_DeleteGovernmentMonitorResponse,
  'delete',
  '/api/mortgage/governmentmonitors/{governmentMonitorId}'
);

export interface MortgageGovernmentMonitor_InsertGovernmentMonitorRequest {
  body: m.GovernmentMonitorViewModel;
}
export type MortgageGovernmentMonitor_InsertGovernmentMonitorResponse = m.GovernmentMonitorViewModel;
export const MortgageGovernmentMonitor_InsertGovernmentMonitorResponse =
  m.GovernmentMonitorViewModel;

/* MortgageGovernmentMonitor_InsertGovernmentMonitor */
export const MortgageGovernmentMonitor_InsertGovernmentMonitorReader = u.controllerFactory<
  MortgageGovernmentMonitor_InsertGovernmentMonitorRequest,
  MortgageGovernmentMonitor_InsertGovernmentMonitorResponse
>(
  MortgageGovernmentMonitor_InsertGovernmentMonitorResponse,
  'post',
  '/api/mortgage/governmentmonitors'
);

export interface MortgageIncome_GetIncomeByIdRequest {
  path: {
    incomeId: number;
  };
}
export type MortgageIncome_GetIncomeByIdResponse = m.IncomeViewModel;
export const MortgageIncome_GetIncomeByIdResponse = m.IncomeViewModel;

/* MortgageIncome_GetIncomeById */
export const MortgageIncome_GetIncomeByIdReader = u.controllerFactory<
  MortgageIncome_GetIncomeByIdRequest,
  MortgageIncome_GetIncomeByIdResponse
>(
  MortgageIncome_GetIncomeByIdResponse,
  'get',
  '/api/mortgage/incomes/{incomeId}'
);

export interface MortgageIncome_UpdateIncomeRequest {
  path: {
    incomeId: number;
  };
  body: m.IncomeViewModel;
}
export type MortgageIncome_UpdateIncomeResponse = m.IncomeViewModel;
export const MortgageIncome_UpdateIncomeResponse = m.IncomeViewModel;

/* MortgageIncome_UpdateIncome */
export const MortgageIncome_UpdateIncomeReader = u.controllerFactory<
  MortgageIncome_UpdateIncomeRequest,
  MortgageIncome_UpdateIncomeResponse
>(
  MortgageIncome_UpdateIncomeResponse,
  'post',
  '/api/mortgage/incomes/{incomeId}'
);

export interface MortgageIncome_DeleteIncomeRequest {
  path: {
    incomeId: number;
  };
}
export type MortgageIncome_DeleteIncomeResponse = Record<string, unknown>;
export const MortgageIncome_DeleteIncomeResponse = t.UnknownRecord;

/* MortgageIncome_DeleteIncome */
export const MortgageIncome_DeleteIncomeReader = u.controllerFactory<
  MortgageIncome_DeleteIncomeRequest,
  MortgageIncome_DeleteIncomeResponse
>(
  MortgageIncome_DeleteIncomeResponse,
  'delete',
  '/api/mortgage/incomes/{incomeId}'
);

export interface MortgageIncome_InsertIncomeRequest {
  body: m.IncomeViewModel;
}
export type MortgageIncome_InsertIncomeResponse = m.IncomeViewModel;
export const MortgageIncome_InsertIncomeResponse = m.IncomeViewModel;

/* MortgageIncome_InsertIncome */
export const MortgageIncome_InsertIncomeReader = u.controllerFactory<
  MortgageIncome_InsertIncomeRequest,
  MortgageIncome_InsertIncomeResponse
>(MortgageIncome_InsertIncomeResponse, 'post', '/api/mortgage/incomes');

export interface MortgageLiability_GetLiabilityByIdRequest {
  path: {
    liabilityId: number;
  };
}
export type MortgageLiability_GetLiabilityByIdResponse = m.LiabilityViewModel;
export const MortgageLiability_GetLiabilityByIdResponse = m.LiabilityViewModel;

/* MortgageLiability_GetLiabilityById */
export const MortgageLiability_GetLiabilityByIdReader = u.controllerFactory<
  MortgageLiability_GetLiabilityByIdRequest,
  MortgageLiability_GetLiabilityByIdResponse
>(
  MortgageLiability_GetLiabilityByIdResponse,
  'get',
  '/api/mortgage/liabilities/{liabilityId}'
);

export interface MortgageLiability_UpdateLiabilityRequest {
  path: {
    liabilityId: number;
  };
  body: m.LiabilityViewModel;
}
export type MortgageLiability_UpdateLiabilityResponse = m.LiabilityViewModel;
export const MortgageLiability_UpdateLiabilityResponse = m.LiabilityViewModel;

/* MortgageLiability_UpdateLiability */
export const MortgageLiability_UpdateLiabilityReader = u.controllerFactory<
  MortgageLiability_UpdateLiabilityRequest,
  MortgageLiability_UpdateLiabilityResponse
>(
  MortgageLiability_UpdateLiabilityResponse,
  'post',
  '/api/mortgage/liabilities/{liabilityId}'
);

export interface MortgageLiability_DeleteLiabilityRequest {
  path: {
    liabilityId: number;
  };
}
export type MortgageLiability_DeleteLiabilityResponse = Record<string, unknown>;
export const MortgageLiability_DeleteLiabilityResponse = t.UnknownRecord;

/* MortgageLiability_DeleteLiability */
export const MortgageLiability_DeleteLiabilityReader = u.controllerFactory<
  MortgageLiability_DeleteLiabilityRequest,
  MortgageLiability_DeleteLiabilityResponse
>(
  MortgageLiability_DeleteLiabilityResponse,
  'delete',
  '/api/mortgage/liabilities/{liabilityId}'
);

export interface MortgageLiability_InsertLiabilityRequest {
  body: m.LiabilityViewModel;
}
export type MortgageLiability_InsertLiabilityResponse = m.LiabilityViewModel;
export const MortgageLiability_InsertLiabilityResponse = m.LiabilityViewModel;

/* MortgageLiability_InsertLiability */
export const MortgageLiability_InsertLiabilityReader = u.controllerFactory<
  MortgageLiability_InsertLiabilityRequest,
  MortgageLiability_InsertLiabilityResponse
>(
  MortgageLiability_InsertLiabilityResponse,
  'post',
  '/api/mortgage/liabilities'
);

export interface MortgageLiability_InsertAddressRequest {
  path: {
    liabilityId: number;
  };
  body: m.AddressViewModel;
}
export type MortgageLiability_InsertAddressResponse = m.AddressViewModel;
export const MortgageLiability_InsertAddressResponse = m.AddressViewModel;

/* MortgageLiability_InsertAddress */
export const MortgageLiability_InsertAddressReader = u.controllerFactory<
  MortgageLiability_InsertAddressRequest,
  MortgageLiability_InsertAddressResponse
>(
  MortgageLiability_InsertAddressResponse,
  'post',
  '/api/mortgage/liabilities/{liabilityId}/address'
);

export interface MortgagePhone_GetPhoneByIdRequest {
  path: {
    phoneId: number;
  };
}
export type MortgagePhone_GetPhoneByIdResponse = m.PhoneViewModel;
export const MortgagePhone_GetPhoneByIdResponse = m.PhoneViewModel;

/* MortgagePhone_GetPhoneById */
export const MortgagePhone_GetPhoneByIdReader = u.controllerFactory<
  MortgagePhone_GetPhoneByIdRequest,
  MortgagePhone_GetPhoneByIdResponse
>(MortgagePhone_GetPhoneByIdResponse, 'get', '/api/mortgage/phones/{phoneId}');

export interface MortgagePhone_UpdatePhoneRequest {
  path: {
    phoneId: number;
  };
  body: m.PhoneViewModel;
}
export type MortgagePhone_UpdatePhoneResponse = m.PhoneViewModel;
export const MortgagePhone_UpdatePhoneResponse = m.PhoneViewModel;

/* MortgagePhone_UpdatePhone */
export const MortgagePhone_UpdatePhoneReader = u.controllerFactory<
  MortgagePhone_UpdatePhoneRequest,
  MortgagePhone_UpdatePhoneResponse
>(MortgagePhone_UpdatePhoneResponse, 'post', '/api/mortgage/phones/{phoneId}');

export interface MortgagePhone_DeletePhoneRequest {
  path: {
    phoneId: number;
  };
}
export type MortgagePhone_DeletePhoneResponse = Record<string, unknown>;
export const MortgagePhone_DeletePhoneResponse = t.UnknownRecord;

/* MortgagePhone_DeletePhone */
export const MortgagePhone_DeletePhoneReader = u.controllerFactory<
  MortgagePhone_DeletePhoneRequest,
  MortgagePhone_DeletePhoneResponse
>(
  MortgagePhone_DeletePhoneResponse,
  'delete',
  '/api/mortgage/phones/{phoneId}'
);

export interface MortgagePurchaseCredit_GetPurchaseCreditByIdRequest {
  path: {
    purchaseCreditId: number;
  };
}
export type MortgagePurchaseCredit_GetPurchaseCreditByIdResponse = m.PurchaseCreditViewModel;
export const MortgagePurchaseCredit_GetPurchaseCreditByIdResponse =
  m.PurchaseCreditViewModel;

/* MortgagePurchaseCredit_GetPurchaseCreditById */
export const MortgagePurchaseCredit_GetPurchaseCreditByIdReader = u.controllerFactory<
  MortgagePurchaseCredit_GetPurchaseCreditByIdRequest,
  MortgagePurchaseCredit_GetPurchaseCreditByIdResponse
>(
  MortgagePurchaseCredit_GetPurchaseCreditByIdResponse,
  'get',
  '/api/mortgage/purchasecredits/{purchaseCreditId}'
);

export interface MortgagePurchaseCredit_UpdatePurchaseCreditRequest {
  path: {
    purchaseCreditId: number;
  };
  body: m.PurchaseCreditViewModel;
}
export type MortgagePurchaseCredit_UpdatePurchaseCreditResponse = m.PurchaseCreditViewModel;
export const MortgagePurchaseCredit_UpdatePurchaseCreditResponse =
  m.PurchaseCreditViewModel;

/* MortgagePurchaseCredit_UpdatePurchaseCredit */
export const MortgagePurchaseCredit_UpdatePurchaseCreditReader = u.controllerFactory<
  MortgagePurchaseCredit_UpdatePurchaseCreditRequest,
  MortgagePurchaseCredit_UpdatePurchaseCreditResponse
>(
  MortgagePurchaseCredit_UpdatePurchaseCreditResponse,
  'post',
  '/api/mortgage/purchasecredits/{purchaseCreditId}'
);

export interface MortgagePurchaseCredit_DeletePurchaseCreditRequest {
  path: {
    purchaseCreditId: number;
  };
}
export type MortgagePurchaseCredit_DeletePurchaseCreditResponse = Record<
  string,
  unknown
>;
export const MortgagePurchaseCredit_DeletePurchaseCreditResponse =
  t.UnknownRecord;

/* MortgagePurchaseCredit_DeletePurchaseCredit */
export const MortgagePurchaseCredit_DeletePurchaseCreditReader = u.controllerFactory<
  MortgagePurchaseCredit_DeletePurchaseCreditRequest,
  MortgagePurchaseCredit_DeletePurchaseCreditResponse
>(
  MortgagePurchaseCredit_DeletePurchaseCreditResponse,
  'delete',
  '/api/mortgage/purchasecredits/{purchaseCreditId}'
);

export interface MortgagePurchaseCredit_InsertPurchaseCreditRequest {
  body: m.PurchaseCreditViewModel;
}
export type MortgagePurchaseCredit_InsertPurchaseCreditResponse = m.PurchaseCreditViewModel;
export const MortgagePurchaseCredit_InsertPurchaseCreditResponse =
  m.PurchaseCreditViewModel;

/* MortgagePurchaseCredit_InsertPurchaseCredit */
export const MortgagePurchaseCredit_InsertPurchaseCreditReader = u.controllerFactory<
  MortgagePurchaseCredit_InsertPurchaseCreditRequest,
  MortgagePurchaseCredit_InsertPurchaseCreditResponse
>(
  MortgagePurchaseCredit_InsertPurchaseCreditResponse,
  'post',
  '/api/mortgage/purchasecredits'
);

export interface MortgageReo_GetReoByIdRequest {
  path: {
    reoId: number;
  };
}
export type MortgageReo_GetReoByIdResponse = m.ReoViewModel;
export const MortgageReo_GetReoByIdResponse = m.ReoViewModel;

/* MortgageReo_GetReoById */
export const MortgageReo_GetReoByIdReader = u.controllerFactory<
  MortgageReo_GetReoByIdRequest,
  MortgageReo_GetReoByIdResponse
>(MortgageReo_GetReoByIdResponse, 'get', '/api/mortgage/reos/{reoId}');

export interface MortgageReo_UpdateReoRequest {
  path: {
    reoId: number;
  };
  body: m.ReoViewModel;
}
export type MortgageReo_UpdateReoResponse = m.ReoViewModel;
export const MortgageReo_UpdateReoResponse = m.ReoViewModel;

/* MortgageReo_UpdateReo */
export const MortgageReo_UpdateReoReader = u.controllerFactory<
  MortgageReo_UpdateReoRequest,
  MortgageReo_UpdateReoResponse
>(MortgageReo_UpdateReoResponse, 'post', '/api/mortgage/reos/{reoId}');

export interface MortgageReo_DeleteReoRequest {
  path: {
    reoId: number;
  };
}
export type MortgageReo_DeleteReoResponse = Record<string, unknown>;
export const MortgageReo_DeleteReoResponse = t.UnknownRecord;

/* MortgageReo_DeleteReo */
export const MortgageReo_DeleteReoReader = u.controllerFactory<
  MortgageReo_DeleteReoRequest,
  MortgageReo_DeleteReoResponse
>(MortgageReo_DeleteReoResponse, 'delete', '/api/mortgage/reos/{reoId}');

export interface MortgageReo_InsertReoRequest {
  body: m.ReoViewModel;
}
export type MortgageReo_InsertReoResponse = m.ReoViewModel;
export const MortgageReo_InsertReoResponse = m.ReoViewModel;

/* MortgageReo_InsertReo */
export const MortgageReo_InsertReoReader = u.controllerFactory<
  MortgageReo_InsertReoRequest,
  MortgageReo_InsertReoResponse
>(MortgageReo_InsertReoResponse, 'post', '/api/mortgage/reos');

export interface MortgageReo_InsertAddressRequest {
  path: {
    reoId: number;
  };
  body: m.AddressViewModel;
}
export type MortgageReo_InsertAddressResponse = m.AddressViewModel;
export const MortgageReo_InsertAddressResponse = m.AddressViewModel;

/* MortgageReo_InsertAddress */
export const MortgageReo_InsertAddressReader = u.controllerFactory<
  MortgageReo_InsertAddressRequest,
  MortgageReo_InsertAddressResponse
>(
  MortgageReo_InsertAddressResponse,
  'post',
  '/api/mortgage/reos/{reoId}/address'
);

export interface MortgageResidencyAddress_GetResidencyAddressByIdRequest {
  path: {
    residencyAddressId: number;
  };
}
export type MortgageResidencyAddress_GetResidencyAddressByIdResponse = m.ResidencyAddressViewModel;
export const MortgageResidencyAddress_GetResidencyAddressByIdResponse =
  m.ResidencyAddressViewModel;

/* MortgageResidencyAddress_GetResidencyAddressById */
export const MortgageResidencyAddress_GetResidencyAddressByIdReader = u.controllerFactory<
  MortgageResidencyAddress_GetResidencyAddressByIdRequest,
  MortgageResidencyAddress_GetResidencyAddressByIdResponse
>(
  MortgageResidencyAddress_GetResidencyAddressByIdResponse,
  'get',
  '/api/mortgage/residencyaddresses/{residencyAddressId}'
);

export interface MortgageResidencyAddress_UpdateResidencyAddressRequest {
  path: {
    residencyAddressId: number;
  };
  body: m.ResidencyAddressViewModel;
}
export type MortgageResidencyAddress_UpdateResidencyAddressResponse = m.ResidencyAddressViewModel;
export const MortgageResidencyAddress_UpdateResidencyAddressResponse =
  m.ResidencyAddressViewModel;

/* MortgageResidencyAddress_UpdateResidencyAddress */
export const MortgageResidencyAddress_UpdateResidencyAddressReader = u.controllerFactory<
  MortgageResidencyAddress_UpdateResidencyAddressRequest,
  MortgageResidencyAddress_UpdateResidencyAddressResponse
>(
  MortgageResidencyAddress_UpdateResidencyAddressResponse,
  'post',
  '/api/mortgage/residencyaddresses/{residencyAddressId}'
);

export interface MortgageResidencyAddress_DeleteResidencyAddressRequest {
  path: {
    residencyAddressId: number;
  };
}
export type MortgageResidencyAddress_DeleteResidencyAddressResponse = Record<
  string,
  unknown
>;
export const MortgageResidencyAddress_DeleteResidencyAddressResponse =
  t.UnknownRecord;

/* MortgageResidencyAddress_DeleteResidencyAddress */
export const MortgageResidencyAddress_DeleteResidencyAddressReader = u.controllerFactory<
  MortgageResidencyAddress_DeleteResidencyAddressRequest,
  MortgageResidencyAddress_DeleteResidencyAddressResponse
>(
  MortgageResidencyAddress_DeleteResidencyAddressResponse,
  'delete',
  '/api/mortgage/residencyaddresses/{residencyAddressId}'
);

export interface MortgageResidencyAddress_InsertResidencyAddressRequest {
  body: m.ResidencyAddressViewModel;
}
export type MortgageResidencyAddress_InsertResidencyAddressResponse = m.ResidencyAddressViewModel;
export const MortgageResidencyAddress_InsertResidencyAddressResponse =
  m.ResidencyAddressViewModel;

/* MortgageResidencyAddress_InsertResidencyAddress */
export const MortgageResidencyAddress_InsertResidencyAddressReader = u.controllerFactory<
  MortgageResidencyAddress_InsertResidencyAddressRequest,
  MortgageResidencyAddress_InsertResidencyAddressResponse
>(
  MortgageResidencyAddress_InsertResidencyAddressResponse,
  'post',
  '/api/mortgage/residencyaddresses'
);

export interface MortgageResidencyAddress_InsertAddressRequest {
  path: {
    residencyAddressId: number;
  };
  body: m.AddressViewModel;
}
export type MortgageResidencyAddress_InsertAddressResponse = m.AddressViewModel;
export const MortgageResidencyAddress_InsertAddressResponse =
  m.AddressViewModel;

/* MortgageResidencyAddress_InsertAddress */
export const MortgageResidencyAddress_InsertAddressReader = u.controllerFactory<
  MortgageResidencyAddress_InsertAddressRequest,
  MortgageResidencyAddress_InsertAddressResponse
>(
  MortgageResidencyAddress_InsertAddressResponse,
  'post',
  '/api/mortgage/residencyaddresses/{residencyAddressId}/address'
);

export interface MortgageSubjectProperty_GetSubjectPropertyByIdRequest {
  path: {
    subjectPropertyId: number;
  };
}
export type MortgageSubjectProperty_GetSubjectPropertyByIdResponse = m.SubjectPropertyViewModel;
export const MortgageSubjectProperty_GetSubjectPropertyByIdResponse =
  m.SubjectPropertyViewModel;

/* MortgageSubjectProperty_GetSubjectPropertyById */
export const MortgageSubjectProperty_GetSubjectPropertyByIdReader = u.controllerFactory<
  MortgageSubjectProperty_GetSubjectPropertyByIdRequest,
  MortgageSubjectProperty_GetSubjectPropertyByIdResponse
>(
  MortgageSubjectProperty_GetSubjectPropertyByIdResponse,
  'get',
  '/api/mortgage/subjectproperties/{subjectPropertyId}'
);

export interface MortgageSubjectProperty_UpdateSubjectPropertyRequest {
  path: {
    subjectPropertyId: number;
  };
  body: m.SubjectPropertyViewModel;
}
export type MortgageSubjectProperty_UpdateSubjectPropertyResponse = m.SubjectPropertyViewModel;
export const MortgageSubjectProperty_UpdateSubjectPropertyResponse =
  m.SubjectPropertyViewModel;

/* MortgageSubjectProperty_UpdateSubjectProperty */
export const MortgageSubjectProperty_UpdateSubjectPropertyReader = u.controllerFactory<
  MortgageSubjectProperty_UpdateSubjectPropertyRequest,
  MortgageSubjectProperty_UpdateSubjectPropertyResponse
>(
  MortgageSubjectProperty_UpdateSubjectPropertyResponse,
  'post',
  '/api/mortgage/subjectproperties/{subjectPropertyId}'
);

export interface MortgageSubjectProperty_DeleteSubjectPropertyRequest {
  path: {
    subjectPropertyId: number;
  };
}
export type MortgageSubjectProperty_DeleteSubjectPropertyResponse = Record<
  string,
  unknown
>;
export const MortgageSubjectProperty_DeleteSubjectPropertyResponse =
  t.UnknownRecord;

/* MortgageSubjectProperty_DeleteSubjectProperty */
export const MortgageSubjectProperty_DeleteSubjectPropertyReader = u.controllerFactory<
  MortgageSubjectProperty_DeleteSubjectPropertyRequest,
  MortgageSubjectProperty_DeleteSubjectPropertyResponse
>(
  MortgageSubjectProperty_DeleteSubjectPropertyResponse,
  'delete',
  '/api/mortgage/subjectproperties/{subjectPropertyId}'
);

export interface MortgageSubjectProperty_InsertAddressRequest {
  path: {
    subjectPropertyId: number;
  };
  body: m.AddressViewModel;
}
export type MortgageSubjectProperty_InsertAddressResponse = m.AddressViewModel;
export const MortgageSubjectProperty_InsertAddressResponse = m.AddressViewModel;

/* MortgageSubjectProperty_InsertAddress */
export const MortgageSubjectProperty_InsertAddressReader = u.controllerFactory<
  MortgageSubjectProperty_InsertAddressRequest,
  MortgageSubjectProperty_InsertAddressResponse
>(
  MortgageSubjectProperty_InsertAddressResponse,
  'post',
  '/api/mortgage/subjectproperties/{subjectPropertyId}/address'
);

export interface MortgageTerm_GetMortgageTermByIdRequest {
  path: {
    mortgageTermId: number;
  };
}
export type MortgageTerm_GetMortgageTermByIdResponse = m.MortgageTermViewModel;
export const MortgageTerm_GetMortgageTermByIdResponse = m.MortgageTermViewModel;

/* MortgageTerm_GetMortgageTermById */
export const MortgageTerm_GetMortgageTermByIdReader = u.controllerFactory<
  MortgageTerm_GetMortgageTermByIdRequest,
  MortgageTerm_GetMortgageTermByIdResponse
>(
  MortgageTerm_GetMortgageTermByIdResponse,
  'get',
  '/api/mortgage/mortgageterms/{mortgageTermId}'
);

export interface MortgageTerm_UpdateMortgageTermRequest {
  path: {
    mortgageTermId: number;
  };
  body: m.MortgageTermViewModel;
}
export type MortgageTerm_UpdateMortgageTermResponse = m.MortgageTermViewModel;
export const MortgageTerm_UpdateMortgageTermResponse = m.MortgageTermViewModel;

/* MortgageTerm_UpdateMortgageTerm */
export const MortgageTerm_UpdateMortgageTermReader = u.controllerFactory<
  MortgageTerm_UpdateMortgageTermRequest,
  MortgageTerm_UpdateMortgageTermResponse
>(
  MortgageTerm_UpdateMortgageTermResponse,
  'post',
  '/api/mortgage/mortgageterms/{mortgageTermId}'
);

export interface MortgageTerm_DeleteMortgageTermRequest {
  path: {
    mortgageTermId: number;
  };
}
export type MortgageTerm_DeleteMortgageTermResponse = Record<string, unknown>;
export const MortgageTerm_DeleteMortgageTermResponse = t.UnknownRecord;

/* MortgageTerm_DeleteMortgageTerm */
export const MortgageTerm_DeleteMortgageTermReader = u.controllerFactory<
  MortgageTerm_DeleteMortgageTermRequest,
  MortgageTerm_DeleteMortgageTermResponse
>(
  MortgageTerm_DeleteMortgageTermResponse,
  'delete',
  '/api/mortgage/mortgageterms/{mortgageTermId}'
);

export interface MortgageTransactionDetail_GetTransactionDetailByIdRequest {
  path: {
    transactionDetailId: number;
  };
}
export type MortgageTransactionDetail_GetTransactionDetailByIdResponse = m.TransactionDetailViewModel;
export const MortgageTransactionDetail_GetTransactionDetailByIdResponse =
  m.TransactionDetailViewModel;

/* MortgageTransactionDetail_GetTransactionDetailById */
export const MortgageTransactionDetail_GetTransactionDetailByIdReader = u.controllerFactory<
  MortgageTransactionDetail_GetTransactionDetailByIdRequest,
  MortgageTransactionDetail_GetTransactionDetailByIdResponse
>(
  MortgageTransactionDetail_GetTransactionDetailByIdResponse,
  'get',
  '/api/mortgage/transactiondetails/{transactionDetailId}'
);

export interface MortgageTransactionDetail_UpdateTransactionDetailRequest {
  path: {
    transactionDetailId: number;
  };
  body: m.TransactionDetailViewModel;
}
export type MortgageTransactionDetail_UpdateTransactionDetailResponse = m.TransactionDetailViewModel;
export const MortgageTransactionDetail_UpdateTransactionDetailResponse =
  m.TransactionDetailViewModel;

/* MortgageTransactionDetail_UpdateTransactionDetail */
export const MortgageTransactionDetail_UpdateTransactionDetailReader = u.controllerFactory<
  MortgageTransactionDetail_UpdateTransactionDetailRequest,
  MortgageTransactionDetail_UpdateTransactionDetailResponse
>(
  MortgageTransactionDetail_UpdateTransactionDetailResponse,
  'post',
  '/api/mortgage/transactiondetails/{transactionDetailId}'
);

export interface MortgageTransactionDetail_DeleteTransactionDetailRequest {
  path: {
    transactionDetailId: number;
  };
}
export type MortgageTransactionDetail_DeleteTransactionDetailResponse = Record<
  string,
  unknown
>;
export const MortgageTransactionDetail_DeleteTransactionDetailResponse =
  t.UnknownRecord;

/* MortgageTransactionDetail_DeleteTransactionDetail */
export const MortgageTransactionDetail_DeleteTransactionDetailReader = u.controllerFactory<
  MortgageTransactionDetail_DeleteTransactionDetailRequest,
  MortgageTransactionDetail_DeleteTransactionDetailResponse
>(
  MortgageTransactionDetail_DeleteTransactionDetailResponse,
  'delete',
  '/api/mortgage/transactiondetails/{transactionDetailId}'
);

export interface MortgageTransactionDetail_GetPurchaseCreditsByTransactionDetailIdRequest {
  path: {
    transactionDetailId: number;
  };
}
export type MortgageTransactionDetail_GetPurchaseCreditsByTransactionDetailIdResponse = Array<
  m.PurchaseCreditViewModel
>;
export const MortgageTransactionDetail_GetPurchaseCreditsByTransactionDetailIdResponse = t.array(
  m.PurchaseCreditViewModel
);

/* MortgageTransactionDetail_GetPurchaseCreditsByTransactionDetailId */
export const MortgageTransactionDetail_GetPurchaseCreditsByTransactionDetailIdReader = u.controllerFactory<
  MortgageTransactionDetail_GetPurchaseCreditsByTransactionDetailIdRequest,
  MortgageTransactionDetail_GetPurchaseCreditsByTransactionDetailIdResponse
>(
  MortgageTransactionDetail_GetPurchaseCreditsByTransactionDetailIdResponse,
  'get',
  '/api/mortgage/transactiondetails/{transactionDetailId}/purchasecredits'
);

export interface MortgageTransactionDetail_InsertPurchaseCreditRequest {
  path: {
    transactionDetailId: number;
  };
  body: m.PurchaseCreditViewModel;
}
export type MortgageTransactionDetail_InsertPurchaseCreditResponse = m.PurchaseCreditViewModel;
export const MortgageTransactionDetail_InsertPurchaseCreditResponse =
  m.PurchaseCreditViewModel;

/* MortgageTransactionDetail_InsertPurchaseCredit */
export const MortgageTransactionDetail_InsertPurchaseCreditReader = u.controllerFactory<
  MortgageTransactionDetail_InsertPurchaseCreditRequest,
  MortgageTransactionDetail_InsertPurchaseCreditResponse
>(
  MortgageTransactionDetail_InsertPurchaseCreditResponse,
  'post',
  '/api/mortgage/transactiondetails/{transactionDetailId}/purchasecredits'
);

export interface NewSubmission_LosLoanSearchRequest {
  path: {
    credentialId: number;
  };
  query: {
    loanNumber?: string;
    borrowerFirstName?: string;
    borrowerLastName?: string;
  };
}
export type NewSubmission_LosLoanSearchResponse = m.LosLoanSearchResponseModel;
export const NewSubmission_LosLoanSearchResponse = m.LosLoanSearchResponseModel;

/* NewSubmission_LosLoanSearch */
export const NewSubmission_LosLoanSearchReader = u.controllerFactory<
  NewSubmission_LosLoanSearchRequest,
  NewSubmission_LosLoanSearchResponse
>(
  NewSubmission_LosLoanSearchResponse,
  'get',
  '/api/new-submission/los-loan-search/{credentialId}'
);

export interface NewSubmission_ImportFromLosRequest {
  path: {
    credentialId: number;
    losIdentifier: string;
  };
}
export type NewSubmission_ImportFromLosResponse = m.ParseDuViewModel;
export const NewSubmission_ImportFromLosResponse = m.ParseDuViewModel;

/* NewSubmission_ImportFromLos */
export const NewSubmission_ImportFromLosReader = u.controllerFactory<
  NewSubmission_ImportFromLosRequest,
  NewSubmission_ImportFromLosResponse
>(
  NewSubmission_ImportFromLosResponse,
  'get',
  '/api/new-submission/import-from-los/{credentialId}/{losIdentifier}'
);

export interface NewSubmission_CreateMortgageInIntegratedLosRequest {
  path: {
    credentialId: number;
    applicationId: number;
  };
}
export type NewSubmission_CreateMortgageInIntegratedLosResponse = Record<
  string,
  unknown
>;
export const NewSubmission_CreateMortgageInIntegratedLosResponse =
  t.UnknownRecord;

/* NewSubmission_CreateMortgageInIntegratedLos */
export const NewSubmission_CreateMortgageInIntegratedLosReader = u.controllerFactory<
  NewSubmission_CreateMortgageInIntegratedLosRequest,
  NewSubmission_CreateMortgageInIntegratedLosResponse
>(
  NewSubmission_CreateMortgageInIntegratedLosResponse,
  'post',
  '/api/new-submission/create-in-integrated-los/{credentialId}/{applicationId}'
);

export interface NewSubmission_UpdateMortgageFromIntegratedLosRequest {
  path: {
    applicationId: number;
    credentialId: string;
  };
}
export type NewSubmission_UpdateMortgageFromIntegratedLosResponse = Record<
  string,
  unknown
>;
export const NewSubmission_UpdateMortgageFromIntegratedLosResponse =
  t.UnknownRecord;

/* NewSubmission_UpdateMortgageFromIntegratedLos */
export const NewSubmission_UpdateMortgageFromIntegratedLosReader = u.controllerFactory<
  NewSubmission_UpdateMortgageFromIntegratedLosRequest,
  NewSubmission_UpdateMortgageFromIntegratedLosResponse
>(
  NewSubmission_UpdateMortgageFromIntegratedLosResponse,
  'post',
  '/api/new-submission/update-from-integrated-los/{credentialId}/{applicationId}'
);

export type NewSubmission_ParseDuResponse = m.ParseDuViewModel;
export const NewSubmission_ParseDuResponse = m.ParseDuViewModel;

/* NewSubmission_ParseDu */
export const NewSubmission_ParseDuReader = u.requestlessControllerFactory<
  NewSubmission_ParseDuResponse
>(NewSubmission_ParseDuResponse, 'post', '/api/new-submission/parse-du');

export interface NewSubmission_ProcessSubmissionRequest {
  body: m.ProcessDuViewModel;
}
export type NewSubmission_ProcessSubmissionResponse = m.ProcessDuResponseModel;
export const NewSubmission_ProcessSubmissionResponse = m.ProcessDuResponseModel;

/* NewSubmission_ProcessSubmission */
export const NewSubmission_ProcessSubmissionReader = u.controllerFactory<
  NewSubmission_ProcessSubmissionRequest,
  NewSubmission_ProcessSubmissionResponse
>(
  NewSubmission_ProcessSubmissionResponse,
  'post',
  '/api/new-submission/process-submission'
);

export interface OnlineApp_GetFeatureFlagsRequest {
  path: {
    /** loan id */
    loanId: number;
  };
}
export type OnlineApp_GetFeatureFlagsResponse = m.FeatureFlags;
export const OnlineApp_GetFeatureFlagsResponse = m.FeatureFlags;

/* OnlineApp_GetFeatureFlags: Get feature flags for Online App */
export const OnlineApp_GetFeatureFlagsReader = u.controllerFactory<
  OnlineApp_GetFeatureFlagsRequest,
  OnlineApp_GetFeatureFlagsResponse
>(OnlineApp_GetFeatureFlagsResponse, 'get', '/api/online-app/config/{loanId}');

export interface OnlineApp_GetLoanPurposesRequest {
  path: {
    /** loan / application id */
    loanId: number;
  };
}
export type OnlineApp_GetLoanPurposesResponse = Array<m.LoanPurposeModel>;
export const OnlineApp_GetLoanPurposesResponse = t.array(m.LoanPurposeModel);

/* OnlineApp_GetLoanPurposes: Get loan types for online application */
export const OnlineApp_GetLoanPurposesReader = u.controllerFactory<
  OnlineApp_GetLoanPurposesRequest,
  OnlineApp_GetLoanPurposesResponse
>(
  OnlineApp_GetLoanPurposesResponse,
  'get',
  '/api/online-app/loanPurposes/{loanId}'
);

export interface OnlineApp_GetLoanTypesRequest {
  path: {
    /** loan / application id */
    loanId: number;
  };
}
export type OnlineApp_GetLoanTypesResponse = Array<m.LoanTypeModel>;
export const OnlineApp_GetLoanTypesResponse = t.array(m.LoanTypeModel);

/* OnlineApp_GetLoanTypes: Get loan types for online application */
export const OnlineApp_GetLoanTypesReader = u.controllerFactory<
  OnlineApp_GetLoanTypesRequest,
  OnlineApp_GetLoanTypesResponse
>(OnlineApp_GetLoanTypesResponse, 'get', '/api/online-app/loantypes/{loanId}');

export interface OnlineApp_GetApplicationViewModelRequest {
  path: {
    /** loan / application id */
    loanId: number;
  };
}
export type OnlineApp_GetApplicationViewModelResponse = m.ApplicationViewModel;
export const OnlineApp_GetApplicationViewModelResponse = m.ApplicationViewModel;

/* OnlineApp_GetApplicationViewModel: Get application view model */
export const OnlineApp_GetApplicationViewModelReader = u.controllerFactory<
  OnlineApp_GetApplicationViewModelRequest,
  OnlineApp_GetApplicationViewModelResponse
>(
  OnlineApp_GetApplicationViewModelResponse,
  'get',
  '/api/online-app/get-application/{loanId}'
);

export interface OnlineApp_UpdateLoanTypeRequest {
  path: {
    /** loan / application id */
    loanId: number;
    /** loan type id */
    loanTypeId: number;
  };
}
export type OnlineApp_UpdateLoanTypeResponse = m.OnlineAppUpdateReturnModel;
export const OnlineApp_UpdateLoanTypeResponse = m.OnlineAppUpdateReturnModel;

/* OnlineApp_UpdateLoanType: Update Loan type on an application */
export const OnlineApp_UpdateLoanTypeReader = u.controllerFactory<
  OnlineApp_UpdateLoanTypeRequest,
  OnlineApp_UpdateLoanTypeResponse
>(
  OnlineApp_UpdateLoanTypeResponse,
  'post',
  '/api/online-app/loantype/{loanId}/{loanTypeId}'
);

export interface OnlineApp_UpdateLoanPurposeRequest {
  path: {
    /** loan / application id */
    loanId: number;
    /** loan purpose id */
    loanPurposeId: number;
  };
}
export type OnlineApp_UpdateLoanPurposeResponse = m.OnlineAppUpdateReturnModel;
export const OnlineApp_UpdateLoanPurposeResponse = m.OnlineAppUpdateReturnModel;

/* OnlineApp_UpdateLoanPurpose: Update Loan type on an application */
export const OnlineApp_UpdateLoanPurposeReader = u.controllerFactory<
  OnlineApp_UpdateLoanPurposeRequest,
  OnlineApp_UpdateLoanPurposeResponse
>(
  OnlineApp_UpdateLoanPurposeResponse,
  'post',
  '/api/online-app/loanpurpose/{loanId}/{loanPurposeId}'
);

export interface OnlineApp_GetStatusRequest {
  path: {
    /** loan / application id */
    loanId: number;
  };
}
export type OnlineApp_GetStatusResponse = m.OnlineAppProgressViewModel;
export const OnlineApp_GetStatusResponse = m.OnlineAppProgressViewModel;

/* OnlineApp_GetStatus: Update online application status */
export const OnlineApp_GetStatusReader = u.controllerFactory<
  OnlineApp_GetStatusRequest,
  OnlineApp_GetStatusResponse
>(OnlineApp_GetStatusResponse, 'get', '/api/online-app/status/{loanId}');

export interface OnlineApp_UpdateStatusRequest {
  path: {
    /** loan / application id */
    loanId: number;
    /** id of the mortgage model */
    mortgageId: number;
    /** current status to save */
    currentStatusId: number;
  };
}
export type OnlineApp_UpdateStatusResponse = m.OnlineAppProgressViewModel;
export const OnlineApp_UpdateStatusResponse = m.OnlineAppProgressViewModel;

/* OnlineApp_UpdateStatus: Update online application status */
export const OnlineApp_UpdateStatusReader = u.controllerFactory<
  OnlineApp_UpdateStatusRequest,
  OnlineApp_UpdateStatusResponse
>(
  OnlineApp_UpdateStatusResponse,
  'post',
  '/api/online-app/status/{loanId}/{mortgageId}/{currentStatusId}'
);

export interface OnlineApp_SubmitOnlineAppRequest {
  path: {
    /** loan / application id */
    loanId: number;
  };
}
export type OnlineApp_SubmitOnlineAppResponse = Record<string, unknown>;
export const OnlineApp_SubmitOnlineAppResponse = t.UnknownRecord;

/* OnlineApp_SubmitOnlineApp: Submit Online Application */
export const OnlineApp_SubmitOnlineAppReader = u.controllerFactory<
  OnlineApp_SubmitOnlineAppRequest,
  OnlineApp_SubmitOnlineAppResponse
>(
  OnlineApp_SubmitOnlineAppResponse,
  'post',
  '/api/online-app/submit-app/{loanId}'
);

export interface OnlineApp_CreateBorrowerAccountAndMortgageRequest {
  path: {
    companyGuid: string;
  };
  body: m.CreateBorrowerAccountMortgageRequest;
}
export type OnlineApp_CreateBorrowerAccountAndMortgageResponse = m.CreateBorrowerAccountMortgageResponse;
export const OnlineApp_CreateBorrowerAccountAndMortgageResponse =
  m.CreateBorrowerAccountMortgageResponse;

/* OnlineApp_CreateBorrowerAccountAndMortgage */
export const OnlineApp_CreateBorrowerAccountAndMortgageReader = u.controllerFactory<
  OnlineApp_CreateBorrowerAccountAndMortgageRequest,
  OnlineApp_CreateBorrowerAccountAndMortgageResponse
>(
  OnlineApp_CreateBorrowerAccountAndMortgageResponse,
  'post',
  '/api/online-app/{companyGuid}/CreateBorrowerAndApplication'
);

export interface OnlineApp_InitializeFormFreeRequest {
  path: {
    loanId: number;
  };
  body: m.InitializeFormFreeRequest;
}
export type OnlineApp_InitializeFormFreeResponse = m.EnrollmentWidgetResponse;
export const OnlineApp_InitializeFormFreeResponse = m.EnrollmentWidgetResponse;

/* OnlineApp_InitializeFormFree: Initialize Form Free for Online Application (authed). This will link the request to the loanid and the primary borrower on that loan. */
export const OnlineApp_InitializeFormFreeReader = u.controllerFactory<
  OnlineApp_InitializeFormFreeRequest,
  OnlineApp_InitializeFormFreeResponse
>(
  OnlineApp_InitializeFormFreeResponse,
  'post',
  '/api/online-app/InitializeFormFree/{loanId}'
);

export interface OnlineApp_InitializeFormFreeForBorrowerRequest {
  path: {
    /** the loan id */
    loanId: number;
    /** id of the borrower to initialize form free for */
    borrowerId: number;
  };
}
export type OnlineApp_InitializeFormFreeForBorrowerResponse = m.EnrollmentWidgetResponse;
export const OnlineApp_InitializeFormFreeForBorrowerResponse =
  m.EnrollmentWidgetResponse;

/* OnlineApp_InitializeFormFreeForBorrower: Initialize Form Free for Online Application (authed). This will link the request to the loanid and the borrowerId passed. */
export const OnlineApp_InitializeFormFreeForBorrowerReader = u.controllerFactory<
  OnlineApp_InitializeFormFreeForBorrowerRequest,
  OnlineApp_InitializeFormFreeForBorrowerResponse
>(
  OnlineApp_InitializeFormFreeForBorrowerResponse,
  'post',
  '/api/online-app/InitializeFormFreeForBorrower/{loanId}/{borrowerId}'
);

export interface OnlineApp_MarkFormFreeForBorrowerCompleteRequest {
  path: {
    /** the loan id */
    loanId: number;
    /** id of the borrower to initialize form free for */
    borrowerId: number;
  };
}
export type OnlineApp_MarkFormFreeForBorrowerCompleteResponse = Record<
  string,
  unknown
>;
export const OnlineApp_MarkFormFreeForBorrowerCompleteResponse =
  t.UnknownRecord;

/* OnlineApp_MarkFormFreeForBorrowerComplete: Initialize Form Free for Online Application (authed). This will link the request to the loanid and the borrowerId passed. */
export const OnlineApp_MarkFormFreeForBorrowerCompleteReader = u.controllerFactory<
  OnlineApp_MarkFormFreeForBorrowerCompleteRequest,
  OnlineApp_MarkFormFreeForBorrowerCompleteResponse
>(
  OnlineApp_MarkFormFreeForBorrowerCompleteResponse,
  'post',
  '/api/online-app/MarkFormFreeForBorrowerComplete/{loanId}/{borrowerId}'
);

export interface OnlineApp_GenerateEConsentDocumentRequest {
  path: {
    loanId: number;
  };
  body: m.GenerateEConsentRequest;
}
export type OnlineApp_GenerateEConsentDocumentResponse = m.GenerateEConsentResponse;
export const OnlineApp_GenerateEConsentDocumentResponse =
  m.GenerateEConsentResponse;

/* OnlineApp_GenerateEConsentDocument */
export const OnlineApp_GenerateEConsentDocumentReader = u.controllerFactory<
  OnlineApp_GenerateEConsentDocumentRequest,
  OnlineApp_GenerateEConsentDocumentResponse
>(
  OnlineApp_GenerateEConsentDocumentResponse,
  'post',
  '/api/online-app/GenerateEConsentDocument/{loanId}'
);

export interface OnlineApp_GenerateCreditAuthDocumentRequest {
  path: {
    loanId: number;
  };
  body: m.GenerateCreditAuthRequest;
}
export type OnlineApp_GenerateCreditAuthDocumentResponse = m.GenerateCreditAuthResponse;
export const OnlineApp_GenerateCreditAuthDocumentResponse =
  m.GenerateCreditAuthResponse;

/* OnlineApp_GenerateCreditAuthDocument */
export const OnlineApp_GenerateCreditAuthDocumentReader = u.controllerFactory<
  OnlineApp_GenerateCreditAuthDocumentRequest,
  OnlineApp_GenerateCreditAuthDocumentResponse
>(
  OnlineApp_GenerateCreditAuthDocumentResponse,
  'post',
  '/api/online-app/GenerateCreditAuthDocument/{loanId}'
);

export interface Pipeline_GetAppsByLoanStatusIdRequest {
  body: m.PipelineFilterCriteria;
}
export type Pipeline_GetAppsByLoanStatusIdResponse = Array<
  m.PipelineApplicationView
>;
export const Pipeline_GetAppsByLoanStatusIdResponse = t.array(
  m.PipelineApplicationView
);

/* Pipeline_GetAppsByLoanStatusId: Get Applications by filter criteria */
export const Pipeline_GetAppsByLoanStatusIdReader = u.controllerFactory<
  Pipeline_GetAppsByLoanStatusIdRequest,
  Pipeline_GetAppsByLoanStatusIdResponse
>(
  Pipeline_GetAppsByLoanStatusIdResponse,
  'post',
  '/api/Pipeline/GetAppsByLoanStatusId'
);

export type Pipeline_GetCountApplicationbyLoanStatusResponse = m.PipelineApplicationCounts;
export const Pipeline_GetCountApplicationbyLoanStatusResponse =
  m.PipelineApplicationCounts;

/* Pipeline_GetCountApplicationbyLoanStatus: Get Application counts by loan status and by loan purpose */
export const Pipeline_GetCountApplicationbyLoanStatusReader = u.requestlessControllerFactory<
  Pipeline_GetCountApplicationbyLoanStatusResponse
>(
  Pipeline_GetCountApplicationbyLoanStatusResponse,
  'get',
  '/api/Pipeline/GetCountApplicationByFilterTypes'
);

export interface Pipeline_GetAllApplicationsForInternalContactRequest {
  query: {
    /** true for archived applications, false for non-archive (defaults to false) */
    archive: boolean;
  };
}
export type Pipeline_GetAllApplicationsForInternalContactResponse = Array<
  m.PipelineApplicationView
>;
export const Pipeline_GetAllApplicationsForInternalContactResponse = t.array(
  m.PipelineApplicationView
);

/* Pipeline_GetAllApplicationsForInternalContact: Get Applications for Internal Contact */
export const Pipeline_GetAllApplicationsForInternalContactReader = u.controllerFactory<
  Pipeline_GetAllApplicationsForInternalContactRequest,
  Pipeline_GetAllApplicationsForInternalContactResponse
>(
  Pipeline_GetAllApplicationsForInternalContactResponse,
  'get',
  '/api/Pipeline/GetAllApplicationsForInternalContact'
);

export interface PrequalDetail_GetPrequalDetailRequest {
  query: {
    applicationId: number;
  };
}
export type PrequalDetail_GetPrequalDetailResponse = m.PrequalDetailViewModel;
export const PrequalDetail_GetPrequalDetailResponse = m.PrequalDetailViewModel;

/* PrequalDetail_GetPrequalDetail */
export const PrequalDetail_GetPrequalDetailReader = u.controllerFactory<
  PrequalDetail_GetPrequalDetailRequest,
  PrequalDetail_GetPrequalDetailResponse
>(PrequalDetail_GetPrequalDetailResponse, 'get', '/api/admin/prequal-detail');

export interface PrequalDetail_UpsertPrequalDetailRequest {
  body: m.PrequalDetailViewModel;
}
export type PrequalDetail_UpsertPrequalDetailResponse = m.PrequalDetailViewModel;
export const PrequalDetail_UpsertPrequalDetailResponse =
  m.PrequalDetailViewModel;

/* PrequalDetail_UpsertPrequalDetail */
export const PrequalDetail_UpsertPrequalDetailReader = u.controllerFactory<
  PrequalDetail_UpsertPrequalDetailRequest,
  PrequalDetail_UpsertPrequalDetailResponse
>(
  PrequalDetail_UpsertPrequalDetailResponse,
  'post',
  '/api/admin/prequal-detail'
);

export interface PublicAPI_GetUserListPrimaryRoleRequest {
  path: {
    companyGuid: string;
  };
}
export type PublicAPI_GetUserListPrimaryRoleResponse = Array<m.UserViewModel>;
export const PublicAPI_GetUserListPrimaryRoleResponse = t.array(
  m.UserViewModel
);

/* PublicAPI_GetUserListPrimaryRole */
export const PublicAPI_GetUserListPrimaryRoleReader = u.controllerFactory<
  PublicAPI_GetUserListPrimaryRoleRequest,
  PublicAPI_GetUserListPrimaryRoleResponse
>(
  PublicAPI_GetUserListPrimaryRoleResponse,
  'get',
  '/api/PublicApi/GetUserListPrimaryRole/{companyGuid}'
);

export interface PublicAPI_GetUserListRequest {
  path: {
    companyGuid: string;
  };
}
export type PublicAPI_GetUserListResponse = Record<string, string>;
export const PublicAPI_GetUserListResponse = t.record(t.string, t.string);

/* PublicAPI_GetUserList */
export const PublicAPI_GetUserListReader = u.controllerFactory<
  PublicAPI_GetUserListRequest,
  PublicAPI_GetUserListResponse
>(
  PublicAPI_GetUserListResponse,
  'get',
  '/api/PublicApi/GetUserList/{companyGuid}'
);

export interface PublicAPI_GetLoanPurposesRequest {
  path: {
    companyGuid: string;
  };
}
export type PublicAPI_GetLoanPurposesResponse = Record<string, string>;
export const PublicAPI_GetLoanPurposesResponse = t.record(t.string, t.string);

/* PublicAPI_GetLoanPurposes */
export const PublicAPI_GetLoanPurposesReader = u.controllerFactory<
  PublicAPI_GetLoanPurposesRequest,
  PublicAPI_GetLoanPurposesResponse
>(
  PublicAPI_GetLoanPurposesResponse,
  'get',
  '/api/PublicApi/GetLoanPurposes/{companyGuid}'
);

export interface PublicAPI_PostLodasoftLeadRequest {
  path: {
    companyGuid: string;
  };
  body: m.LodasoftLead;
}
export type PublicAPI_PostLodasoftLeadResponse = Record<string, unknown>;
export const PublicAPI_PostLodasoftLeadResponse = t.UnknownRecord;

/* PublicAPI_PostLodasoftLead */
export const PublicAPI_PostLodasoftLeadReader = u.controllerFactory<
  PublicAPI_PostLodasoftLeadRequest,
  PublicAPI_PostLodasoftLeadResponse
>(
  PublicAPI_PostLodasoftLeadResponse,
  'post',
  '/api/PublicApi/PostLead/{companyGuid}'
);

export interface PublicAPI_PostBestReferralLeadRequest {
  path: {
    companyGuid: string;
    userId: string;
  };
  body: m.BestReferralLead;
}
export type PublicAPI_PostBestReferralLeadResponse = Record<string, unknown>;
export const PublicAPI_PostBestReferralLeadResponse = t.UnknownRecord;

/* PublicAPI_PostBestReferralLead */
export const PublicAPI_PostBestReferralLeadReader = u.controllerFactory<
  PublicAPI_PostBestReferralLeadRequest,
  PublicAPI_PostBestReferralLeadResponse
>(
  PublicAPI_PostBestReferralLeadResponse,
  'post',
  '/api/PublicApi/PostBestReferralLead/{companyGuid}/{userId}'
);

export interface PublicAPI_PostZillowLeadRequest {
  path: {
    companyGuid: string;
    userId: string;
  };
  body: m.ZillowLead;
}
export type PublicAPI_PostZillowLeadResponse = Record<string, unknown>;
export const PublicAPI_PostZillowLeadResponse = t.UnknownRecord;

/* PublicAPI_PostZillowLead */
export const PublicAPI_PostZillowLeadReader = u.controllerFactory<
  PublicAPI_PostZillowLeadRequest,
  PublicAPI_PostZillowLeadResponse
>(
  PublicAPI_PostZillowLeadResponse,
  'post',
  '/api/PublicApi/PostZillowLead/{companyGuid}/{userId}'
);

export interface PublicAPI_PostLeadPointLeadRequest {
  path: {
    companyGuid: string;
    userId: string;
  };
  query: {
    'lead.product'?: string;
    'lead.loaN_VAL'?: number;
    'lead.esT_VAL'?: number;
    'lead.loaN_TYPE'?: string;
    'lead.dowN_PMT'?: number;
    'lead.proP_ZIP'?: string;
    'lead.proP_DESC'?: string;
    'lead.speC_HOME'?: string;
    'lead.proP_ST'?: string;
    'lead.proP_PURP'?: string;
    'lead.proP_AREA'?: string;
    'lead.buY_TIMEFRAME'?: string;
    'lead.purchasE_CONTRACT'?: string;
    'lead.agenT_FOUND'?: string;
    'lead.agenT_NAME'?: string;
    'lead.agenT_PHONE'?: string;
    'lead.agenT_COMPANY'?: string;
    'lead.agenT_EMAIL'?: string;
    'lead.agenT_ADDRESS'?: string;
    'lead.agenT_CITY'?: string;
    'lead.agenT_STATE'?: string;
    'lead.agenT_ZIP'?: string;
    'lead.agenT_STATUS'?: string;
    'lead.agenT2_NAME'?: string;
    'lead.agenT2_COMPANY'?: string;
    'lead.agenT2_EMAIL'?: string;
    'lead.agenT2_PHONE'?: string;
    'lead.agenT2_ADDRESS'?: string;
    'lead.agenT2_CITY'?: string;
    'lead.agenT2_STATE'?: string;
    'lead.agenT2_ZIP'?: string;
    'lead.agenT3_NAME'?: string;
    'lead.agenT3_PHONE'?: string;
    'lead.agenT3_COMPANY'?: string;
    'lead.agenT3_EMAIL'?: string;
    'lead.agenT3_ADDRESS'?: string;
    'lead.agenT2_STATUS'?: string;
    'lead.agenT3_CITY'?: string;
    'lead.agenT3_ZIP'?: string;
    'lead.agenT3_STATUS'?: string;
    'lead.agenT4_NAME'?: string;
    'lead.agenT4_PHONE'?: string;
    'lead.agenT4_COMPANY'?: string;
    'lead.agenT4_EMAIL'?: string;
    'lead.agenT4_ADDRESS'?: string;
    'lead.agenT4_CITY'?: string;
    'lead.agenT4_STATE'?: string;
    'lead.agenT4_ZIP'?: string;
    'lead.agenT4_STATUS'?: string;
    'lead.proP_URL'?: string;
    'lead.proP_BEDS'?: string;
    'lead.proP_BATHS'?: string;
    'lead.proP_SQFT'?: string;
    'lead.agenT3_STATE'?: string;
    'lead.creD_GRADE'?: string;
    'lead.income'?: string;
    'lead.miN_PAY'?: string;
    'lead.ocC_STAT'?: string;
    'lead.bkcy'?: string;
    'lead.firsT_BUYER'?: string;
    'lead.fhA_BANK_FORECLOSURE'?: string;
    'lead.annuaL_VERIFIABLE_INCOME'?: string;
    'lead.vA_STATUS'?: string;
    'lead.nuM_MORTGAGE_LATES'?: string;
    'lead.fname'?: string;
    'lead.lname'?: string;
    'lead.email'?: string;
    'lead.prI_PHON'?: string;
    'lead.seC_PHON'?: string;
    'lead.preF_CALLTIME'?: string;
    'lead.address'?: string;
    'lead.city'?: string;
    'lead.state'?: string;
    'lead.zip'?: string;
    'lead.ssn'?: string;
    'lead.custom'?: string;
    'lead.calleR_ID'?: string;
    'lead.agE_ATLEAST_62'?: string;
    'lead.dobmm'?: string;
    'lead.dobdd'?: string;
    'lead.dobyyyy'?: string;
    'lead.ssN_CHECK'?: string;
    'lead.consumeR_COMMENTS'?: string;
    'lead.language'?: string;
  };
}
export type PublicAPI_PostLeadPointLeadResponse = Record<string, unknown>;
export const PublicAPI_PostLeadPointLeadResponse = t.UnknownRecord;

/* PublicAPI_PostLeadPointLead */
export const PublicAPI_PostLeadPointLeadReader = u.controllerFactory<
  PublicAPI_PostLeadPointLeadRequest,
  PublicAPI_PostLeadPointLeadResponse
>(
  PublicAPI_PostLeadPointLeadResponse,
  'post',
  '/api/PublicApi/PostLeadPointLead/{companyGuid}/{userId}'
);

export interface PublicAPI_PostLendingTreeLeadAsyncRequest {
  path: {
    companyGuid: string;
    userId: string;
  };
}
export type PublicAPI_PostLendingTreeLeadAsyncResponse = Record<
  string,
  unknown
>;
export const PublicAPI_PostLendingTreeLeadAsyncResponse = t.UnknownRecord;

/* PublicAPI_PostLendingTreeLeadAsync */
export const PublicAPI_PostLendingTreeLeadAsyncReader = u.controllerFactory<
  PublicAPI_PostLendingTreeLeadAsyncRequest,
  PublicAPI_PostLendingTreeLeadAsyncResponse
>(
  PublicAPI_PostLendingTreeLeadAsyncResponse,
  'post',
  '/api/PublicApi/PostLendingTreeLead/{companyGuid}/{userId}'
);

export interface Report_GetTaskMetricsRequest {
  body: m.TaskMetricsRequest;
}
export type Report_GetTaskMetricsResponse = m.TaskMetricsModel;
export const Report_GetTaskMetricsResponse = m.TaskMetricsModel;

/* Report_GetTaskMetrics: Get Task Metrics */
export const Report_GetTaskMetricsReader = u.controllerFactory<
  Report_GetTaskMetricsRequest,
  Report_GetTaskMetricsResponse
>(Report_GetTaskMetricsResponse, 'post', '/api/Report/GetTaskMetrics');

export interface Report_GetPipelineMetricsRequest {
  body: m.PipelineMetricsRequest;
}
export type Report_GetPipelineMetricsResponse = m.PipelineMetricsModel;
export const Report_GetPipelineMetricsResponse = m.PipelineMetricsModel;

/* Report_GetPipelineMetrics: Get Pipeline Metrics */
export const Report_GetPipelineMetricsReader = u.controllerFactory<
  Report_GetPipelineMetricsRequest,
  Report_GetPipelineMetricsResponse
>(Report_GetPipelineMetricsResponse, 'post', '/api/Report/GetPipelineMetrics');

export interface Sms_SendTestSmsRequest {
  body: m.SendTestSmsRequest;
}
export type Sms_SendTestSmsResponse = Record<string, unknown>;
export const Sms_SendTestSmsResponse = t.UnknownRecord;

/* Sms_SendTestSms */
export const Sms_SendTestSmsReader = u.controllerFactory<
  Sms_SendTestSmsRequest,
  Sms_SendTestSmsResponse
>(Sms_SendTestSmsResponse, 'post', '/api/Sms/SendTestSms');

export interface Sms_SendSmsRequest {
  body: m.SendSmsViewModel;
}
export type Sms_SendSmsResponse = Record<string, unknown>;
export const Sms_SendSmsResponse = t.UnknownRecord;

/* Sms_SendSms */
export const Sms_SendSmsReader = u.controllerFactory<
  Sms_SendSmsRequest,
  Sms_SendSmsResponse
>(Sms_SendSmsResponse, 'post', '/api/Sms/send-sms');

export interface Sms_GetBetweenRequest {
  body: m.SendSmsBetweenModel;
}
export type Sms_GetBetweenResponse = Array<m.SmsHistoryViewModel>;
export const Sms_GetBetweenResponse = t.array(m.SmsHistoryViewModel);

/* Sms_GetBetween */
export const Sms_GetBetweenReader = u.controllerFactory<
  Sms_GetBetweenRequest,
  Sms_GetBetweenResponse
>(Sms_GetBetweenResponse, 'post', '/api/Sms/get-between');

export interface Sms_GetBorrowerInfoRequest {
  body: m.SmsSearchBorrowerRequest;
}
export type Sms_GetBorrowerInfoResponse = Array<m.BorrowerDto>;
export const Sms_GetBorrowerInfoResponse = t.array(m.BorrowerDto);

/* Sms_GetBorrowerInfo */
export const Sms_GetBorrowerInfoReader = u.controllerFactory<
  Sms_GetBorrowerInfoRequest,
  Sms_GetBorrowerInfoResponse
>(Sms_GetBorrowerInfoResponse, 'post', '/api/Sms/get-borrower-info');

export interface Sms_ReceiveSmsRequest {
  path: {
    companyGuid: string;
  };
}
export type Sms_ReceiveSmsResponse = Record<string, unknown>;
export const Sms_ReceiveSmsResponse = t.UnknownRecord;

/* Sms_ReceiveSms */
export const Sms_ReceiveSmsReader = u.controllerFactory<
  Sms_ReceiveSmsRequest,
  Sms_ReceiveSmsResponse
>(Sms_ReceiveSmsResponse, 'get', '/api/Sms/receive-sms/{companyGuid}');

export type System_GetVersionResponse = m.VersionResult;
export const System_GetVersionResponse = m.VersionResult;

/* System_GetVersion: Get System Version */
export const System_GetVersionReader = u.requestlessControllerFactory<
  System_GetVersionResponse
>(System_GetVersionResponse, 'get', '/api/System/Version');

export interface Task_UpsertLoanDocTaskRequest {
  body: m.LoanDocTaskUpsertModel;
}
export type Task_UpsertLoanDocTaskResponse = m.LoanDocTaskModel;
export const Task_UpsertLoanDocTaskResponse = m.LoanDocTaskModel;

/* Task_UpsertLoanDocTask: Create or Update a Task */
export const Task_UpsertLoanDocTaskReader = u.controllerFactory<
  Task_UpsertLoanDocTaskRequest,
  Task_UpsertLoanDocTaskResponse
>(Task_UpsertLoanDocTaskResponse, 'post', '/api/Task/UpsertLoanDocTask');

export interface Task_GetLoanDocTaskRequest {
  path: {
    loanDocTaskId: number;
  };
}
export type Task_GetLoanDocTaskResponse = m.LoanDocTaskViewModel;
export const Task_GetLoanDocTaskResponse = m.LoanDocTaskViewModel;

/* Task_GetLoanDocTask: Get a LoanDocTask */
export const Task_GetLoanDocTaskReader = u.controllerFactory<
  Task_GetLoanDocTaskRequest,
  Task_GetLoanDocTaskResponse
>(Task_GetLoanDocTaskResponse, 'get', '/api/Task/{loanDocTaskId}');

export interface Task_TrackingFileRequest {
  path: {
    loanDocTaskId: number;
  };
}
export type Task_TrackingFileResponse = Array<m.TrackingViewModel>;
export const Task_TrackingFileResponse = t.array(m.TrackingViewModel);

/* Task_TrackingFile */
export const Task_TrackingFileReader = u.controllerFactory<
  Task_TrackingFileRequest,
  Task_TrackingFileResponse
>(Task_TrackingFileResponse, 'get', '/api/Task/tracking/{loanDocTaskId}');

export interface Task_AddTaskNoteRequest {
  path: {
    loandoctaskid: number;
  };
  body: m.TaskNoteModel;
}
export type Task_AddTaskNoteResponse = Record<string, unknown>;
export const Task_AddTaskNoteResponse = t.UnknownRecord;

/* Task_AddTaskNote: Add notes to existing task */
export const Task_AddTaskNoteReader = u.controllerFactory<
  Task_AddTaskNoteRequest,
  Task_AddTaskNoteResponse
>(Task_AddTaskNoteResponse, 'post', '/api/Task/{loandoctaskid}/AddTaskNote');

export interface Task_UpdateFollowUpRequest {
  path: {
    loandoctaskid: number;
  };
  query: {
    followup: string;
  };
}
export type Task_UpdateFollowUpResponse = Record<string, unknown>;
export const Task_UpdateFollowUpResponse = t.UnknownRecord;

/* Task_UpdateFollowUp: Update the FollowUp date for a task */
export const Task_UpdateFollowUpReader = u.controllerFactory<
  Task_UpdateFollowUpRequest,
  Task_UpdateFollowUpResponse
>(
  Task_UpdateFollowUpResponse,
  'post',
  '/api/Task/{loandoctaskid}/UpdateFollowUp'
);

export interface Task_UpdateFollowUpBulkRequest {
  query: {
    followup: string;
  };
  body: number[];
}
export type Task_UpdateFollowUpBulkResponse = Record<string, unknown>;
export const Task_UpdateFollowUpBulkResponse = t.UnknownRecord;

/* Task_UpdateFollowUpBulk */
export const Task_UpdateFollowUpBulkReader = u.controllerFactory<
  Task_UpdateFollowUpBulkRequest,
  Task_UpdateFollowUpBulkResponse
>(Task_UpdateFollowUpBulkResponse, 'post', '/api/Task/UpdateFollowUpBulk');

export interface Task_SetTaskStatusRequest {
  path: {
    loandoctaskId: number;
    /** Lookup LoanDocStatus or OtherTaskStatus */
    status: string;
  };
}
export type Task_SetTaskStatusResponse = Record<string, unknown>;
export const Task_SetTaskStatusResponse = t.UnknownRecord;

/* Task_SetTaskStatus: Set Task Status */
export const Task_SetTaskStatusReader = u.controllerFactory<
  Task_SetTaskStatusRequest,
  Task_SetTaskStatusResponse
>(
  Task_SetTaskStatusResponse,
  'post',
  '/api/Task/{loandoctaskId}/SetTaskStatus/{status}'
);

export interface Task_SetConditionStatusRequest {
  path: {
    loandoctaskId: number;
    status: number;
  };
}
export type Task_SetConditionStatusResponse = m.LoanDocTaskModel;
export const Task_SetConditionStatusResponse = m.LoanDocTaskModel;

/* Task_SetConditionStatus: Set condition status for a task */
export const Task_SetConditionStatusReader = u.controllerFactory<
  Task_SetConditionStatusRequest,
  Task_SetConditionStatusResponse
>(
  Task_SetConditionStatusResponse,
  'post',
  '/api/Task/{loandoctaskId}/SetConditionStatus/{status}'
);

export interface Task_ChangeResponsibleMultiTasksRequest {
  path: {
    userId: string;
  };
  body: number[];
}
export type Task_ChangeResponsibleMultiTasksResponse = Record<string, unknown>;
export const Task_ChangeResponsibleMultiTasksResponse = t.UnknownRecord;

/* Task_ChangeResponsibleMultiTasks: Change Responsible User for Multiple Tasks */
export const Task_ChangeResponsibleMultiTasksReader = u.controllerFactory<
  Task_ChangeResponsibleMultiTasksRequest,
  Task_ChangeResponsibleMultiTasksResponse
>(
  Task_ChangeResponsibleMultiTasksResponse,
  'post',
  '/api/Task/ChangeResponsibleMultiTasks/{userId}'
);

export interface Task_DeleteLoanDocTaskRequest {
  path: {
    loandoctaskid: number;
  };
}
export type Task_DeleteLoanDocTaskResponse = Record<string, unknown>;
export const Task_DeleteLoanDocTaskResponse = t.UnknownRecord;

/* Task_DeleteLoanDocTask: Delete a Loan Doc Task */
export const Task_DeleteLoanDocTaskReader = u.controllerFactory<
  Task_DeleteLoanDocTaskRequest,
  Task_DeleteLoanDocTaskResponse
>(
  Task_DeleteLoanDocTaskResponse,
  'delete',
  '/api/Task/{loandoctaskid}/DeleteLoanDocTask'
);

export interface Task_DeleteMultiTasksRequest {
  body: number[];
}
export type Task_DeleteMultiTasksResponse = Record<string, unknown>;
export const Task_DeleteMultiTasksResponse = t.UnknownRecord;

/* Task_DeleteMultiTasks: Delete multiple Loan Doc Tasks */
export const Task_DeleteMultiTasksReader = u.controllerFactory<
  Task_DeleteMultiTasksRequest,
  Task_DeleteMultiTasksResponse
>(Task_DeleteMultiTasksResponse, 'post', '/api/Task/DeleteMultiTasks');

export interface Task_GetTaskDashboardViewByIdRequest {
  path: {
    loandoctaskid: number;
  };
}
export type Task_GetTaskDashboardViewByIdResponse = m.LoanDocTaskDashBoardView;
export const Task_GetTaskDashboardViewByIdResponse = m.LoanDocTaskDashBoardView;

/* Task_GetTaskDashboardViewById */
export const Task_GetTaskDashboardViewByIdReader = u.controllerFactory<
  Task_GetTaskDashboardViewByIdRequest,
  Task_GetTaskDashboardViewByIdResponse
>(
  Task_GetTaskDashboardViewByIdResponse,
  'get',
  '/api/Task/{loandoctaskid}/GetTaskDashboardViewById'
);

export interface Task_DownloadTemplateFileRequest {
  path: {
    taskTypeId: string;
    currentUserId: string;
  };
}
export type Task_DownloadTemplateFileResponse = Record<string, unknown>;
export const Task_DownloadTemplateFileResponse = t.UnknownRecord;

/* Task_DownloadTemplateFile */
export const Task_DownloadTemplateFileReader = u.controllerFactory<
  Task_DownloadTemplateFileRequest,
  Task_DownloadTemplateFileResponse
>(
  Task_DownloadTemplateFileResponse,
  'get',
  '/api/Task/DownloadTemplateFile/{taskTypeId}/{currentUserId}'
);

export interface Task_ViewTemplateFileRequest {
  path: {
    taskTypeId: string;
    currentUserId: string;
  };
}
export type Task_ViewTemplateFileResponse = Record<string, unknown>;
export const Task_ViewTemplateFileResponse = t.UnknownRecord;

/* Task_ViewTemplateFile */
export const Task_ViewTemplateFileReader = u.controllerFactory<
  Task_ViewTemplateFileRequest,
  Task_ViewTemplateFileResponse
>(
  Task_ViewTemplateFileResponse,
  'get',
  '/api/Task/ViewTemplateFile/{taskTypeId}/{currentUserId}'
);

export interface TheWorkNumber_RequestVerificationRequest {
  body: m.VerificationRequest;
}
export type TheWorkNumber_RequestVerificationResponse = m.VerificationResponse;
export const TheWorkNumber_RequestVerificationResponse = m.VerificationResponse;

/* TheWorkNumber_RequestVerification: Request VOE/VOI from TheWorkNumber (by Equifax) */
export const TheWorkNumber_RequestVerificationReader = u.controllerFactory<
  TheWorkNumber_RequestVerificationRequest,
  TheWorkNumber_RequestVerificationResponse
>(TheWorkNumber_RequestVerificationResponse, 'post', '/api/twn/verification');

export type Wizard_GetAllWizardConfigsResponse = Array<m.WizardConfigViewModel>;
export const Wizard_GetAllWizardConfigsResponse = t.array(
  m.WizardConfigViewModel
);

/* Wizard_GetAllWizardConfigs */
export const Wizard_GetAllWizardConfigsReader = u.requestlessControllerFactory<
  Wizard_GetAllWizardConfigsResponse
>(Wizard_GetAllWizardConfigsResponse, 'get', '/api/wizardconfigs');

export interface Wizard_UpsertWizardConfigRequest {
  body: m.WizardConfigViewModel;
}
export type Wizard_UpsertWizardConfigResponse = m.WizardConfigViewModel;
export const Wizard_UpsertWizardConfigResponse = m.WizardConfigViewModel;

/* Wizard_UpsertWizardConfig */
export const Wizard_UpsertWizardConfigReader = u.controllerFactory<
  Wizard_UpsertWizardConfigRequest,
  Wizard_UpsertWizardConfigResponse
>(Wizard_UpsertWizardConfigResponse, 'post', '/api/wizardconfigs');

export interface Wizard_GetWizardConfigByIdRequest {
  path: {
    wizardConfigId: number;
  };
}
export type Wizard_GetWizardConfigByIdResponse = m.WizardConfigViewModel;
export const Wizard_GetWizardConfigByIdResponse = m.WizardConfigViewModel;

/* Wizard_GetWizardConfigById */
export const Wizard_GetWizardConfigByIdReader = u.controllerFactory<
  Wizard_GetWizardConfigByIdRequest,
  Wizard_GetWizardConfigByIdResponse
>(
  Wizard_GetWizardConfigByIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}'
);

export interface Wizard_DeleteWizardConfigRequest {
  path: {
    wizardConfigId: number;
  };
}
export type Wizard_DeleteWizardConfigResponse = Record<string, unknown>;
export const Wizard_DeleteWizardConfigResponse = t.UnknownRecord;

/* Wizard_DeleteWizardConfig */
export const Wizard_DeleteWizardConfigReader = u.controllerFactory<
  Wizard_DeleteWizardConfigRequest,
  Wizard_DeleteWizardConfigResponse
>(
  Wizard_DeleteWizardConfigResponse,
  'delete',
  '/api/wizardconfigs/{wizardConfigId}'
);

export interface Wizard_GetExtractedWizardConfigByIdRequest {
  path: {
    wizardConfigId: number;
  };
}
export type Wizard_GetExtractedWizardConfigByIdResponse = m.ExtractedWizardConfigViewModel;
export const Wizard_GetExtractedWizardConfigByIdResponse =
  m.ExtractedWizardConfigViewModel;

/* Wizard_GetExtractedWizardConfigById */
export const Wizard_GetExtractedWizardConfigByIdReader = u.controllerFactory<
  Wizard_GetExtractedWizardConfigByIdRequest,
  Wizard_GetExtractedWizardConfigByIdResponse
>(
  Wizard_GetExtractedWizardConfigByIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}/extracted'
);

export interface Wizard_UpsertExtractedWizardConfigRequest {
  body: m.ExtractedWizardConfigViewModel;
}
export type Wizard_UpsertExtractedWizardConfigResponse = m.ExtractedWizardConfigViewModel;
export const Wizard_UpsertExtractedWizardConfigResponse =
  m.ExtractedWizardConfigViewModel;

/* Wizard_UpsertExtractedWizardConfig */
export const Wizard_UpsertExtractedWizardConfigReader = u.controllerFactory<
  Wizard_UpsertExtractedWizardConfigRequest,
  Wizard_UpsertExtractedWizardConfigResponse
>(
  Wizard_UpsertExtractedWizardConfigResponse,
  'post',
  '/api/wizardconfigs/extracted'
);

export interface Wizard_GetDataIdListByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
  };
}
export type Wizard_GetDataIdListByWizardConfigIdResponse = Array<
  m.DataIdViewModel
>;
export const Wizard_GetDataIdListByWizardConfigIdResponse = t.array(
  m.DataIdViewModel
);

/* Wizard_GetDataIdListByWizardConfigId */
export const Wizard_GetDataIdListByWizardConfigIdReader = u.controllerFactory<
  Wizard_GetDataIdListByWizardConfigIdRequest,
  Wizard_GetDataIdListByWizardConfigIdResponse
>(
  Wizard_GetDataIdListByWizardConfigIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}/dataids'
);

export interface Wizard_UpsertDataIdAndDataByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
  };
  body: m.DataIdViewModel;
}
export type Wizard_UpsertDataIdAndDataByWizardConfigIdResponse = m.DataIdViewModel;
export const Wizard_UpsertDataIdAndDataByWizardConfigIdResponse =
  m.DataIdViewModel;

/* Wizard_UpsertDataIdAndDataByWizardConfigId */
export const Wizard_UpsertDataIdAndDataByWizardConfigIdReader = u.controllerFactory<
  Wizard_UpsertDataIdAndDataByWizardConfigIdRequest,
  Wizard_UpsertDataIdAndDataByWizardConfigIdResponse
>(
  Wizard_UpsertDataIdAndDataByWizardConfigIdResponse,
  'post',
  '/api/wizardconfigs/{wizardConfigId}/dataids'
);

export interface Wizard_GetDataIdByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
    dataIdId: number;
  };
}
export type Wizard_GetDataIdByWizardConfigIdResponse = m.DataIdViewModel;
export const Wizard_GetDataIdByWizardConfigIdResponse = m.DataIdViewModel;

/* Wizard_GetDataIdByWizardConfigId */
export const Wizard_GetDataIdByWizardConfigIdReader = u.controllerFactory<
  Wizard_GetDataIdByWizardConfigIdRequest,
  Wizard_GetDataIdByWizardConfigIdResponse
>(
  Wizard_GetDataIdByWizardConfigIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}/dataids/{dataIdId}'
);

export interface Wizard_DeleteDataIdByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
    dataIdId: number;
  };
}
export type Wizard_DeleteDataIdByWizardConfigIdResponse = Record<
  string,
  unknown
>;
export const Wizard_DeleteDataIdByWizardConfigIdResponse = t.UnknownRecord;

/* Wizard_DeleteDataIdByWizardConfigId */
export const Wizard_DeleteDataIdByWizardConfigIdReader = u.controllerFactory<
  Wizard_DeleteDataIdByWizardConfigIdRequest,
  Wizard_DeleteDataIdByWizardConfigIdResponse
>(
  Wizard_DeleteDataIdByWizardConfigIdResponse,
  'delete',
  '/api/wizardconfigs/{wizardConfigId}/dataids/{dataIdId}'
);

export interface Wizard_GetDataListByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
  };
}
export type Wizard_GetDataListByWizardConfigIdResponse = Array<m.DataViewModel>;
export const Wizard_GetDataListByWizardConfigIdResponse = t.array(
  m.DataViewModel
);

/* Wizard_GetDataListByWizardConfigId */
export const Wizard_GetDataListByWizardConfigIdReader = u.controllerFactory<
  Wizard_GetDataListByWizardConfigIdRequest,
  Wizard_GetDataListByWizardConfigIdResponse
>(
  Wizard_GetDataListByWizardConfigIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}/datas'
);

export interface Wizard_GetDataByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
    dataId: number;
  };
  query: {
    category: number;
  };
}
export type Wizard_GetDataByWizardConfigIdResponse = Array<m.DataViewModel>;
export const Wizard_GetDataByWizardConfigIdResponse = t.array(m.DataViewModel);

/* Wizard_GetDataByWizardConfigId */
export const Wizard_GetDataByWizardConfigIdReader = u.controllerFactory<
  Wizard_GetDataByWizardConfigIdRequest,
  Wizard_GetDataByWizardConfigIdResponse
>(
  Wizard_GetDataByWizardConfigIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}/datas/{dataId}'
);

export interface Wizard_DeleteDataByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
    dataId: number;
  };
}
export type Wizard_DeleteDataByWizardConfigIdResponse = Record<string, unknown>;
export const Wizard_DeleteDataByWizardConfigIdResponse = t.UnknownRecord;

/* Wizard_DeleteDataByWizardConfigId */
export const Wizard_DeleteDataByWizardConfigIdReader = u.controllerFactory<
  Wizard_DeleteDataByWizardConfigIdRequest,
  Wizard_DeleteDataByWizardConfigIdResponse
>(
  Wizard_DeleteDataByWizardConfigIdResponse,
  'delete',
  '/api/wizardconfigs/{wizardConfigId}/datas/{dataId}'
);

export interface Wizard_GetGroupIdListByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
  };
}
export type Wizard_GetGroupIdListByWizardConfigIdResponse = Array<
  m.GroupIdViewModel
>;
export const Wizard_GetGroupIdListByWizardConfigIdResponse = t.array(
  m.GroupIdViewModel
);

/* Wizard_GetGroupIdListByWizardConfigId */
export const Wizard_GetGroupIdListByWizardConfigIdReader = u.controllerFactory<
  Wizard_GetGroupIdListByWizardConfigIdRequest,
  Wizard_GetGroupIdListByWizardConfigIdResponse
>(
  Wizard_GetGroupIdListByWizardConfigIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}/groupids'
);

export interface Wizard_UpsertGroupIdAndGroupByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
  };
  body: m.GroupIdViewModel;
}
export type Wizard_UpsertGroupIdAndGroupByWizardConfigIdResponse = m.GroupIdViewModel;
export const Wizard_UpsertGroupIdAndGroupByWizardConfigIdResponse =
  m.GroupIdViewModel;

/* Wizard_UpsertGroupIdAndGroupByWizardConfigId */
export const Wizard_UpsertGroupIdAndGroupByWizardConfigIdReader = u.controllerFactory<
  Wizard_UpsertGroupIdAndGroupByWizardConfigIdRequest,
  Wizard_UpsertGroupIdAndGroupByWizardConfigIdResponse
>(
  Wizard_UpsertGroupIdAndGroupByWizardConfigIdResponse,
  'post',
  '/api/wizardconfigs/{wizardConfigId}/groupids'
);

export interface Wizard_GetGroupIdByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
    groupIdId: number;
  };
}
export type Wizard_GetGroupIdByWizardConfigIdResponse = m.GroupIdViewModel;
export const Wizard_GetGroupIdByWizardConfigIdResponse = m.GroupIdViewModel;

/* Wizard_GetGroupIdByWizardConfigId */
export const Wizard_GetGroupIdByWizardConfigIdReader = u.controllerFactory<
  Wizard_GetGroupIdByWizardConfigIdRequest,
  Wizard_GetGroupIdByWizardConfigIdResponse
>(
  Wizard_GetGroupIdByWizardConfigIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}/groupids/{groupIdId}'
);

export interface Wizard_DeleteGroupIdByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
    groupIdId: number;
  };
}
export type Wizard_DeleteGroupIdByWizardConfigIdResponse = Record<
  string,
  unknown
>;
export const Wizard_DeleteGroupIdByWizardConfigIdResponse = t.UnknownRecord;

/* Wizard_DeleteGroupIdByWizardConfigId */
export const Wizard_DeleteGroupIdByWizardConfigIdReader = u.controllerFactory<
  Wizard_DeleteGroupIdByWizardConfigIdRequest,
  Wizard_DeleteGroupIdByWizardConfigIdResponse
>(
  Wizard_DeleteGroupIdByWizardConfigIdResponse,
  'delete',
  '/api/wizardconfigs/{wizardConfigId}/groupids/{groupIdId}'
);

export interface Wizard_GetGroupListByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
  };
}
export type Wizard_GetGroupListByWizardConfigIdResponse = Array<
  m.GroupViewModel
>;
export const Wizard_GetGroupListByWizardConfigIdResponse = t.array(
  m.GroupViewModel
);

/* Wizard_GetGroupListByWizardConfigId */
export const Wizard_GetGroupListByWizardConfigIdReader = u.controllerFactory<
  Wizard_GetGroupListByWizardConfigIdRequest,
  Wizard_GetGroupListByWizardConfigIdResponse
>(
  Wizard_GetGroupListByWizardConfigIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}/groups'
);

export interface Wizard_GetGroupByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
    groupId: number;
  };
}
export type Wizard_GetGroupByWizardConfigIdResponse = m.GroupViewModel;
export const Wizard_GetGroupByWizardConfigIdResponse = m.GroupViewModel;

/* Wizard_GetGroupByWizardConfigId */
export const Wizard_GetGroupByWizardConfigIdReader = u.controllerFactory<
  Wizard_GetGroupByWizardConfigIdRequest,
  Wizard_GetGroupByWizardConfigIdResponse
>(
  Wizard_GetGroupByWizardConfigIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}/groups/{groupId}'
);

export interface Wizard_DeleteGroupByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
    groupId: number;
  };
}
export type Wizard_DeleteGroupByWizardConfigIdResponse = Record<
  string,
  unknown
>;
export const Wizard_DeleteGroupByWizardConfigIdResponse = t.UnknownRecord;

/* Wizard_DeleteGroupByWizardConfigId */
export const Wizard_DeleteGroupByWizardConfigIdReader = u.controllerFactory<
  Wizard_DeleteGroupByWizardConfigIdRequest,
  Wizard_DeleteGroupByWizardConfigIdResponse
>(
  Wizard_DeleteGroupByWizardConfigIdResponse,
  'delete',
  '/api/wizardconfigs/{wizardConfigId}/groups/{groupId}'
);

export interface Wizard_GetValidListByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
  };
}
export type Wizard_GetValidListByWizardConfigIdResponse = Array<
  m.ValidViewModel
>;
export const Wizard_GetValidListByWizardConfigIdResponse = t.array(
  m.ValidViewModel
);

/* Wizard_GetValidListByWizardConfigId */
export const Wizard_GetValidListByWizardConfigIdReader = u.controllerFactory<
  Wizard_GetValidListByWizardConfigIdRequest,
  Wizard_GetValidListByWizardConfigIdResponse
>(
  Wizard_GetValidListByWizardConfigIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}/valids'
);

export interface Wizard_GetValidByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
    validId: number;
  };
}
export type Wizard_GetValidByWizardConfigIdResponse = m.ValidViewModel;
export const Wizard_GetValidByWizardConfigIdResponse = m.ValidViewModel;

/* Wizard_GetValidByWizardConfigId */
export const Wizard_GetValidByWizardConfigIdReader = u.controllerFactory<
  Wizard_GetValidByWizardConfigIdRequest,
  Wizard_GetValidByWizardConfigIdResponse
>(
  Wizard_GetValidByWizardConfigIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}/valids/{validId}'
);

export interface Wizard_DeleteValidByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
    validId: number;
  };
}
export type Wizard_DeleteValidByWizardConfigIdResponse = Record<
  string,
  unknown
>;
export const Wizard_DeleteValidByWizardConfigIdResponse = t.UnknownRecord;

/* Wizard_DeleteValidByWizardConfigId */
export const Wizard_DeleteValidByWizardConfigIdReader = u.controllerFactory<
  Wizard_DeleteValidByWizardConfigIdRequest,
  Wizard_DeleteValidByWizardConfigIdResponse
>(
  Wizard_DeleteValidByWizardConfigIdResponse,
  'delete',
  '/api/wizardconfigs/{wizardConfigId}/valids/{validId}'
);

export interface Wizard_GetTreeListByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
  };
}
export type Wizard_GetTreeListByWizardConfigIdResponse = Array<m.TreeViewModel>;
export const Wizard_GetTreeListByWizardConfigIdResponse = t.array(
  m.TreeViewModel
);

/* Wizard_GetTreeListByWizardConfigId */
export const Wizard_GetTreeListByWizardConfigIdReader = u.controllerFactory<
  Wizard_GetTreeListByWizardConfigIdRequest,
  Wizard_GetTreeListByWizardConfigIdResponse
>(
  Wizard_GetTreeListByWizardConfigIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}/tree'
);

export interface Wizard_UpsertTreeByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
  };
  body: Array<m.TreeViewModel>;
}
export type Wizard_UpsertTreeByWizardConfigIdResponse = Array<m.TreeViewModel>;
export const Wizard_UpsertTreeByWizardConfigIdResponse = t.array(
  m.TreeViewModel
);

/* Wizard_UpsertTreeByWizardConfigId */
export const Wizard_UpsertTreeByWizardConfigIdReader = u.controllerFactory<
  Wizard_UpsertTreeByWizardConfigIdRequest,
  Wizard_UpsertTreeByWizardConfigIdResponse
>(
  Wizard_UpsertTreeByWizardConfigIdResponse,
  'post',
  '/api/wizardconfigs/{wizardConfigId}/tree'
);

export type Wizard_GetAllWizardQuestionsResponse = Array<
  m.WizardQuestionViewModel
>;
export const Wizard_GetAllWizardQuestionsResponse = t.array(
  m.WizardQuestionViewModel
);

/* Wizard_GetAllWizardQuestions */
export const Wizard_GetAllWizardQuestionsReader = u.requestlessControllerFactory<
  Wizard_GetAllWizardQuestionsResponse
>(Wizard_GetAllWizardQuestionsResponse, 'get', '/api/wizardconfigs/questions');

export interface Wizard_UpsertWizardQuestionRequest {
  body: m.WizardQuestionViewModel;
}
export type Wizard_UpsertWizardQuestionResponse = m.WizardQuestionViewModel;
export const Wizard_UpsertWizardQuestionResponse = m.WizardQuestionViewModel;

/* Wizard_UpsertWizardQuestion */
export const Wizard_UpsertWizardQuestionReader = u.controllerFactory<
  Wizard_UpsertWizardQuestionRequest,
  Wizard_UpsertWizardQuestionResponse
>(Wizard_UpsertWizardQuestionResponse, 'post', '/api/wizardconfigs/questions');

export interface Wizard_GetWizardQuestionByIdRequest {
  path: {
    questionId: number;
  };
}
export type Wizard_GetWizardQuestionByIdResponse = m.WizardQuestionViewModel;
export const Wizard_GetWizardQuestionByIdResponse = m.WizardQuestionViewModel;

/* Wizard_GetWizardQuestionById */
export const Wizard_GetWizardQuestionByIdReader = u.controllerFactory<
  Wizard_GetWizardQuestionByIdRequest,
  Wizard_GetWizardQuestionByIdResponse
>(
  Wizard_GetWizardQuestionByIdResponse,
  'get',
  '/api/wizardconfigs/questions/{questionId}'
);

export interface Wizard_DeleteWizardQuestionRequest {
  path: {
    questionId: number;
  };
}
export type Wizard_DeleteWizardQuestionResponse = Record<string, unknown>;
export const Wizard_DeleteWizardQuestionResponse = t.UnknownRecord;

/* Wizard_DeleteWizardQuestion */
export const Wizard_DeleteWizardQuestionReader = u.controllerFactory<
  Wizard_DeleteWizardQuestionRequest,
  Wizard_DeleteWizardQuestionResponse
>(
  Wizard_DeleteWizardQuestionResponse,
  'delete',
  '/api/wizardconfigs/questions/{questionId}'
);

export interface Wizard_GetWizardQuestionListByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
  };
}
export type Wizard_GetWizardQuestionListByWizardConfigIdResponse = Array<
  m.WizardQuestionViewModel
>;
export const Wizard_GetWizardQuestionListByWizardConfigIdResponse = t.array(
  m.WizardQuestionViewModel
);

/* Wizard_GetWizardQuestionListByWizardConfigId */
export const Wizard_GetWizardQuestionListByWizardConfigIdReader = u.controllerFactory<
  Wizard_GetWizardQuestionListByWizardConfigIdRequest,
  Wizard_GetWizardQuestionListByWizardConfigIdResponse
>(
  Wizard_GetWizardQuestionListByWizardConfigIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}/questions'
);

export interface Wizard_UpsertWizardQuestionDataByWizardConfigIdRequest {
  path: {
    wizardConfigId: number;
  };
  body: m.WizardQuestionDataViewModel;
}
export type Wizard_UpsertWizardQuestionDataByWizardConfigIdResponse = m.WizardQuestionDataViewModel;
export const Wizard_UpsertWizardQuestionDataByWizardConfigIdResponse =
  m.WizardQuestionDataViewModel;

/* Wizard_UpsertWizardQuestionDataByWizardConfigId */
export const Wizard_UpsertWizardQuestionDataByWizardConfigIdReader = u.controllerFactory<
  Wizard_UpsertWizardQuestionDataByWizardConfigIdRequest,
  Wizard_UpsertWizardQuestionDataByWizardConfigIdResponse
>(
  Wizard_UpsertWizardQuestionDataByWizardConfigIdResponse,
  'post',
  '/api/wizardconfigs/{wizardConfigId}/questions'
);

export interface Wizard_GetWizardQuestionDataByIdRequest {
  path: {
    wizardConfigId: number;
    questionId: number;
  };
}
export type Wizard_GetWizardQuestionDataByIdResponse = m.WizardQuestionDataViewModel;
export const Wizard_GetWizardQuestionDataByIdResponse =
  m.WizardQuestionDataViewModel;

/* Wizard_GetWizardQuestionDataById */
export const Wizard_GetWizardQuestionDataByIdReader = u.controllerFactory<
  Wizard_GetWizardQuestionDataByIdRequest,
  Wizard_GetWizardQuestionDataByIdResponse
>(
  Wizard_GetWizardQuestionDataByIdResponse,
  'get',
  '/api/wizardconfigs/{wizardConfigId}/questions/{questionId}'
);

export interface Wizard_DeleteWizardQuestionDataRequest {
  path: {
    wizardConfigId: number;
    questionId: number;
  };
}
export type Wizard_DeleteWizardQuestionDataResponse = Record<string, unknown>;
export const Wizard_DeleteWizardQuestionDataResponse = t.UnknownRecord;

/* Wizard_DeleteWizardQuestionData */
export const Wizard_DeleteWizardQuestionDataReader = u.controllerFactory<
  Wizard_DeleteWizardQuestionDataRequest,
  Wizard_DeleteWizardQuestionDataResponse
>(
  Wizard_DeleteWizardQuestionDataResponse,
  'delete',
  '/api/wizardconfigs/{wizardConfigId}/questions/{questionId}'
);

export interface Wizard_InitializeFormFreeRequest {
  path: {
    companyGuid: string;
  };
  body: m.InitializeFormFreeRequest;
}
export type Wizard_InitializeFormFreeResponse = m.EnrollmentWidgetResponse;
export const Wizard_InitializeFormFreeResponse = m.EnrollmentWidgetResponse;

/* Wizard_InitializeFormFree */
export const Wizard_InitializeFormFreeReader = u.controllerFactory<
  Wizard_InitializeFormFreeRequest,
  Wizard_InitializeFormFreeResponse
>(
  Wizard_InitializeFormFreeResponse,
  'post',
  '/api/wizardconfigs/InitializeFormFree/{companyGuid}'
);

export interface Zipcode_ZipcodeLookupRequest {
  path: {
    zip: string;
  };
}
export type Zipcode_ZipcodeLookupResponse = Array<m.ZipcodeLookupResult>;
export const Zipcode_ZipcodeLookupResponse = t.array(m.ZipcodeLookupResult);

/* Zipcode_ZipcodeLookup: Lookup a Zip Code */
export const Zipcode_ZipcodeLookupReader = u.controllerFactory<
  Zipcode_ZipcodeLookupRequest,
  Zipcode_ZipcodeLookupResponse
>(Zipcode_ZipcodeLookupResponse, 'get', '/api/Zipcode/Lookup/{zip}');

export interface Zipcode_ZipcodeLookuAnonymouspRequest {
  path: {
    zip: string;
  };
}
export type Zipcode_ZipcodeLookuAnonymouspResponse = Array<
  m.ZipcodeLookupResult
>;
export const Zipcode_ZipcodeLookuAnonymouspResponse = t.array(
  m.ZipcodeLookupResult
);

/* Zipcode_ZipcodeLookuAnonymousp: Lookup a Zip Code */
export const Zipcode_ZipcodeLookuAnonymouspReader = u.controllerFactory<
  Zipcode_ZipcodeLookuAnonymouspRequest,
  Zipcode_ZipcodeLookuAnonymouspResponse
>(Zipcode_ZipcodeLookuAnonymouspResponse, 'get', '/api/Zipcode/{zip}');

export interface Zipcode_SendRequest {
  path: {
    toUserId: string;
  };
  query: {
    message: string;
  };
}
export type Zipcode_SendResponse = Record<string, unknown>;
export const Zipcode_SendResponse = t.UnknownRecord;

/* Zipcode_Send */
export const Zipcode_SendReader = u.controllerFactory<
  Zipcode_SendRequest,
  Zipcode_SendResponse
>(Zipcode_SendResponse, 'put', '/api/Zipcode/send/{toUserId}');
