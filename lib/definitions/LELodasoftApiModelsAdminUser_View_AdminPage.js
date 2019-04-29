"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessDbModelsAdminStackingOrderModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminStackingOrderModel");
var LELodasoftDataAccessDbModelsConfigurationCompanyModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel");
var LELodasoftDataAccessDbModelsConfigurationRoleModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationRoleModel");
var MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaim_1 = require("../definitions/MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaim");
var MicrosoftAspNetIdentityEntityFrameworkIdentityUserLogin_1 = require("../definitions/MicrosoftAspNetIdentityEntityFrameworkIdentityUserLogin");
var MicrosoftAspNetIdentityEntityFrameworkIdentityUserRole_1 = require("../definitions/MicrosoftAspNetIdentityEntityFrameworkIdentityUserRole");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsAdminUser_View_AdminPageIO = io_ts_1.type({
    email: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyModel: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModel_1.LELodasoftDataAccessDbModelsConfigurationCompanyModelIO),
    stackOrderId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    stackingOrder: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsAdminStackingOrderModel_1.LELodasoftDataAccessDbModelsAdminStackingOrderModelIO),
    roleId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    roleModel: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationRoleModel_1.LELodasoftDataAccessDbModelsConfigurationRoleModelIO),
    userType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Admin: null, Borrower: null, Agent: null })),
    avatarId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dob: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    timeZone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    title: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    nmls: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    emailSignature: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    smsSignature: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    flagAdmin: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    reportTo: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    inviteDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    confirmationDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    confirmationToken: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    cellPhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    workPhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    homePhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    fax: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingStreet: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingPOBox: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingCity: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingState: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingZip: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    active: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    currentTimeLogin: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    lastTimeLogin: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    releaseNotesVersion: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    userImage: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    userImageData: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    emailConfirmed: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    passwordHash: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    securityStamp: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    phoneNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    phoneNumberConfirmed: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    twoFactorEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    lockoutEndDateUtc: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    lockoutEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    accessFailedCount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    roles: io_ts_types_1.createOptionFromNullable(io_ts_1.array(MicrosoftAspNetIdentityEntityFrameworkIdentityUserRole_1.MicrosoftAspNetIdentityEntityFrameworkIdentityUserRoleIO)),
    claims: io_ts_types_1.createOptionFromNullable(io_ts_1.array(MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaim_1.MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaimIO)),
    logins: io_ts_types_1.createOptionFromNullable(io_ts_1.array(MicrosoftAspNetIdentityEntityFrameworkIdentityUserLogin_1.MicrosoftAspNetIdentityEntityFrameworkIdentityUserLoginIO)),
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    userName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftApiModelsAdminUser_View_AdminPage.js.map