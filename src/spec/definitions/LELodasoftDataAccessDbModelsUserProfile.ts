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
import { Option } from 'fp-ts/lib/Option';
import { number, union, literal, string, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsUserProfile = {
	companyId: Option<number>;
	companyModel: Option<LELodasoftDataAccessDbModelsConfigurationCompanyModel>;
	stackOrderId: Option<number>;
	stackingOrder: Option<LELodasoftDataAccessDbModelsAdminStackingOrderModel>;
	roleId: Option<number>;
	roleModel: Option<LELodasoftDataAccessDbModelsConfigurationRoleModel>;
	userType: Option<'Admin' | 'Borrower' | 'Agent'>;
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
	companyId: createOptionFromNullable(number),
	companyModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO),
	stackOrderId: createOptionFromNullable(number),
	stackingOrder: createOptionFromNullable(LELodasoftDataAccessDbModelsAdminStackingOrderModelIO),
	roleId: createOptionFromNullable(number),
	roleModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationRoleModelIO),
	userType: createOptionFromNullable(union([literal('Admin'), literal('Borrower'), literal('Agent')])),
	avatarId: createOptionFromNullable(string),
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	dob: createOptionFromNullable(DateFromISOString),
	timeZone: createOptionFromNullable(string),
	title: createOptionFromNullable(string),
	nmls: createOptionFromNullable(string),
	emailSignature: createOptionFromNullable(string),
	smsSignature: createOptionFromNullable(string),
	flagAdmin: createOptionFromNullable(boolean),
	reportTo: createOptionFromNullable(string),
	inviteDate: createOptionFromNullable(DateFromISOString),
	confirmationDate: createOptionFromNullable(DateFromISOString),
	confirmationToken: createOptionFromNullable(string),
	cellPhone: createOptionFromNullable(string),
	workPhone: createOptionFromNullable(string),
	homePhone: createOptionFromNullable(string),
	fax: createOptionFromNullable(string),
	mailingStreet: createOptionFromNullable(string),
	mailingPOBox: createOptionFromNullable(string),
	mailingCity: createOptionFromNullable(string),
	mailingState: createOptionFromNullable(string),
	mailingZip: createOptionFromNullable(string),
	active: createOptionFromNullable(boolean),
	currentTimeLogin: createOptionFromNullable(DateFromISOString),
	lastTimeLogin: createOptionFromNullable(DateFromISOString),
	releaseNotesVersion: createOptionFromNullable(string),
	userImage: createOptionFromNullable(string),
	userImageData: createOptionFromNullable(string),
	email: createOptionFromNullable(string),
	emailConfirmed: createOptionFromNullable(boolean),
	passwordHash: createOptionFromNullable(string),
	securityStamp: createOptionFromNullable(string),
	phoneNumber: createOptionFromNullable(string),
	phoneNumberConfirmed: createOptionFromNullable(boolean),
	twoFactorEnabled: createOptionFromNullable(boolean),
	lockoutEndDateUtc: createOptionFromNullable(DateFromISOString),
	lockoutEnabled: createOptionFromNullable(boolean),
	accessFailedCount: createOptionFromNullable(number),
	roles: createOptionFromNullable(array(MicrosoftAspNetIdentityEntityFrameworkIdentityUserRoleIO)),
	claims: createOptionFromNullable(array(MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaimIO)),
	logins: createOptionFromNullable(array(MicrosoftAspNetIdentityEntityFrameworkIdentityUserLoginIO)),
	id: createOptionFromNullable(string),
	userName: createOptionFromNullable(string),
});
