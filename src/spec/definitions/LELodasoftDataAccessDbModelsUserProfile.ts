import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
import { createEnumType } from '@nll/utils-ts/lib/io';

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
	companyId: createOptionFromOptional(number, 'companyId'),
	companyModel: createOptionFromOptional(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'companyModel'),
	stackOrderId: createOptionFromOptional(number, 'stackOrderId'),
	stackingOrder: createOptionFromOptional(LELodasoftDataAccessDbModelsAdminStackingOrderModelIO, 'stackingOrder'),
	roleId: createOptionFromOptional(number, 'roleId'),
	roleModel: createOptionFromOptional(LELodasoftDataAccessDbModelsConfigurationRoleModelIO, 'roleModel'),
	userType: createOptionFromOptional(createEnumType<UserTypeEnum>(UserTypeEnum, 'UserTypeEnum'), 'userType'),
	avatarId: createOptionFromOptional(string, 'avatarId'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	dob: createOptionFromOptional(DateFromISOString, 'dob'),
	timeZone: createOptionFromOptional(string, 'timeZone'),
	title: createOptionFromOptional(string, 'title'),
	nmls: createOptionFromOptional(string, 'nmls'),
	emailSignature: createOptionFromOptional(string, 'emailSignature'),
	smsSignature: createOptionFromOptional(string, 'smsSignature'),
	flagAdmin: createOptionFromOptional(boolean, 'flagAdmin'),
	reportTo: createOptionFromOptional(string, 'reportTo'),
	inviteDate: createOptionFromOptional(DateFromISOString, 'inviteDate'),
	confirmationDate: createOptionFromOptional(DateFromISOString, 'confirmationDate'),
	confirmationToken: createOptionFromOptional(string, 'confirmationToken'),
	cellPhone: createOptionFromOptional(string, 'cellPhone'),
	workPhone: createOptionFromOptional(string, 'workPhone'),
	homePhone: createOptionFromOptional(string, 'homePhone'),
	fax: createOptionFromOptional(string, 'fax'),
	mailingStreet: createOptionFromOptional(string, 'mailingStreet'),
	mailingPOBox: createOptionFromOptional(string, 'mailingPOBox'),
	mailingCity: createOptionFromOptional(string, 'mailingCity'),
	mailingState: createOptionFromOptional(string, 'mailingState'),
	mailingZip: createOptionFromOptional(string, 'mailingZip'),
	active: createOptionFromOptional(boolean, 'active'),
	currentTimeLogin: createOptionFromOptional(DateFromISOString, 'currentTimeLogin'),
	lastTimeLogin: createOptionFromOptional(DateFromISOString, 'lastTimeLogin'),
	releaseNotesVersion: createOptionFromOptional(string, 'releaseNotesVersion'),
	userImage: createOptionFromOptional(string, 'userImage'),
	userImageData: createOptionFromOptional(string, 'userImageData'),
	email: createOptionFromOptional(string, 'email'),
	emailConfirmed: createOptionFromOptional(boolean, 'emailConfirmed'),
	passwordHash: createOptionFromOptional(string, 'passwordHash'),
	securityStamp: createOptionFromOptional(string, 'securityStamp'),
	phoneNumber: createOptionFromOptional(string, 'phoneNumber'),
	phoneNumberConfirmed: createOptionFromOptional(boolean, 'phoneNumberConfirmed'),
	twoFactorEnabled: createOptionFromOptional(boolean, 'twoFactorEnabled'),
	lockoutEndDateUtc: createOptionFromOptional(DateFromISOString, 'lockoutEndDateUtc'),
	lockoutEnabled: createOptionFromOptional(boolean, 'lockoutEnabled'),
	accessFailedCount: createOptionFromOptional(number, 'accessFailedCount'),
	roles: createOptionFromOptional(array(MicrosoftAspNetIdentityEntityFrameworkIdentityUserRoleIO), 'roles'),
	claims: createOptionFromOptional(array(MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaimIO), 'claims'),
	logins: createOptionFromOptional(array(MicrosoftAspNetIdentityEntityFrameworkIdentityUserLoginIO), 'logins'),
	id: createOptionFromOptional(string, 'id'),
	userName: createOptionFromOptional(string, 'userName'),
});
