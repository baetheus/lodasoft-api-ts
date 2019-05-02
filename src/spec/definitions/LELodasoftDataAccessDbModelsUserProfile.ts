import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import {
	LELodasoftDataAccessDbModelsAdminStackingOrderModel,
	LELodasoftDataAccessDbModelsAdminStackingOrderModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminStackingOrderModel';
import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';
import {
	LELodasoftDataAccessDbModelsConfigurationRoleModel,
	LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationRoleModel';
import {
	MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaim,
	MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaimIO,
} from '../definitions/MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaim';
import {
	MicrosoftAspNetIdentityEntityFrameworkIdentityUserLogin,
	MicrosoftAspNetIdentityEntityFrameworkIdentityUserLoginIO,
} from '../definitions/MicrosoftAspNetIdentityEntityFrameworkIdentityUserLogin';
import {
	MicrosoftAspNetIdentityEntityFrameworkIdentityUserRole,
	MicrosoftAspNetIdentityEntityFrameworkIdentityUserRoleIO,
} from '../definitions/MicrosoftAspNetIdentityEntityFrameworkIdentityUserRole';
import { createEnumType } from '../utils/utils';

export enum UserTypeEnum {
	'Admin',
	'Borrower',
	'Agent',
}

export type LELodasoftDataAccessDbModelsUserProfile = {
	companyId: Option<number>;
	companyModel: Option<LELodasoftDataAccessDbModelsConfigurationCompanyModel>;
	stackOrderId: Option<number>;
	stackingOrder: Option<LELodasoftDataAccessDbModelsAdminStackingOrderModel>;
	roleId: Option<number>;
	roleModel: Option<LELodasoftDataAccessDbModelsConfigurationRoleModel>;
	userType: Option<UserTypeEnum>;
	avatarId: Option<string>;
	firstName: Option<string>;
	lastName: Option<string>;
	dob: Option<Date>;
	timeZone: Option<string>;
	title: Option<string>;
	nmls: Option<string>;
	emailSignature: Option<string>;
	smsSignature: Option<string>;
	flagAdmin: Option<boolean>;
	reportTo: Option<string>;
	inviteDate: Option<Date>;
	confirmationDate: Option<Date>;
	confirmationToken: Option<string>;
	cellPhone: Option<string>;
	workPhone: Option<string>;
	homePhone: Option<string>;
	fax: Option<string>;
	mailingStreet: Option<string>;
	mailingPOBox: Option<string>;
	mailingCity: Option<string>;
	mailingState: Option<string>;
	mailingZip: Option<string>;
	active: Option<boolean>;
	currentTimeLogin: Option<Date>;
	lastTimeLogin: Option<Date>;
	releaseNotesVersion: Option<string>;
	userImage: Option<string>;
	userImageData: Option<string>;
	email: Option<string>;
	emailConfirmed: Option<boolean>;
	passwordHash: Option<string>;
	securityStamp: Option<string>;
	phoneNumber: Option<string>;
	phoneNumberConfirmed: Option<boolean>;
	twoFactorEnabled: Option<boolean>;
	lockoutEndDateUtc: Option<Date>;
	lockoutEnabled: Option<boolean>;
	accessFailedCount: Option<number>;
	roles: Option<Array<MicrosoftAspNetIdentityEntityFrameworkIdentityUserRole>>;
	claims: Option<Array<MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaim>>;
	logins: Option<Array<MicrosoftAspNetIdentityEntityFrameworkIdentityUserLogin>>;
	id: Option<string>;
	userName: Option<string>;
};
export const LELodasoftDataAccessDbModelsUserProfileIO = type({
	companyId: createOptionFromNullable(number, 'companyId'),
	companyModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'companyModel'),
	stackOrderId: createOptionFromNullable(number, 'stackOrderId'),
	stackingOrder: createOptionFromNullable(LELodasoftDataAccessDbModelsAdminStackingOrderModelIO, 'stackingOrder'),
	roleId: createOptionFromNullable(number, 'roleId'),
	roleModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationRoleModelIO, 'roleModel'),
	userType: createOptionFromNullable(createEnumType<UserTypeEnum>(UserTypeEnum, 'UserTypeEnum'), 'userType'),
	avatarId: createOptionFromNullable(string, 'avatarId'),
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	dob: createOptionFromNullable(DateFromISOString, 'dob'),
	timeZone: createOptionFromNullable(string, 'timeZone'),
	title: createOptionFromNullable(string, 'title'),
	nmls: createOptionFromNullable(string, 'nmls'),
	emailSignature: createOptionFromNullable(string, 'emailSignature'),
	smsSignature: createOptionFromNullable(string, 'smsSignature'),
	flagAdmin: createOptionFromNullable(boolean, 'flagAdmin'),
	reportTo: createOptionFromNullable(string, 'reportTo'),
	inviteDate: createOptionFromNullable(DateFromISOString, 'inviteDate'),
	confirmationDate: createOptionFromNullable(DateFromISOString, 'confirmationDate'),
	confirmationToken: createOptionFromNullable(string, 'confirmationToken'),
	cellPhone: createOptionFromNullable(string, 'cellPhone'),
	workPhone: createOptionFromNullable(string, 'workPhone'),
	homePhone: createOptionFromNullable(string, 'homePhone'),
	fax: createOptionFromNullable(string, 'fax'),
	mailingStreet: createOptionFromNullable(string, 'mailingStreet'),
	mailingPOBox: createOptionFromNullable(string, 'mailingPOBox'),
	mailingCity: createOptionFromNullable(string, 'mailingCity'),
	mailingState: createOptionFromNullable(string, 'mailingState'),
	mailingZip: createOptionFromNullable(string, 'mailingZip'),
	active: createOptionFromNullable(boolean, 'active'),
	currentTimeLogin: createOptionFromNullable(DateFromISOString, 'currentTimeLogin'),
	lastTimeLogin: createOptionFromNullable(DateFromISOString, 'lastTimeLogin'),
	releaseNotesVersion: createOptionFromNullable(string, 'releaseNotesVersion'),
	userImage: createOptionFromNullable(string, 'userImage'),
	userImageData: createOptionFromNullable(string, 'userImageData'),
	email: createOptionFromNullable(string, 'email'),
	emailConfirmed: createOptionFromNullable(boolean, 'emailConfirmed'),
	passwordHash: createOptionFromNullable(string, 'passwordHash'),
	securityStamp: createOptionFromNullable(string, 'securityStamp'),
	phoneNumber: createOptionFromNullable(string, 'phoneNumber'),
	phoneNumberConfirmed: createOptionFromNullable(boolean, 'phoneNumberConfirmed'),
	twoFactorEnabled: createOptionFromNullable(boolean, 'twoFactorEnabled'),
	lockoutEndDateUtc: createOptionFromNullable(DateFromISOString, 'lockoutEndDateUtc'),
	lockoutEnabled: createOptionFromNullable(boolean, 'lockoutEnabled'),
	accessFailedCount: createOptionFromNullable(number, 'accessFailedCount'),
	roles: createOptionFromNullable(array(MicrosoftAspNetIdentityEntityFrameworkIdentityUserRoleIO), 'roles'),
	claims: createOptionFromNullable(array(MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaimIO), 'claims'),
	logins: createOptionFromNullable(array(MicrosoftAspNetIdentityEntityFrameworkIdentityUserLoginIO), 'logins'),
	id: createOptionFromNullable(string, 'id'),
	userName: createOptionFromNullable(string, 'userName'),
});
