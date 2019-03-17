import {
	LELodasoftCommonModelsLeadsUserProfileViewModel,
	LELodasoftCommonModelsLeadsUserProfileViewModelIO,
} from '../definitions/LELodasoftCommonModelsLeadsUserProfileViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsAdminAgentViewModel = {
	agentId: Option<number>;
	userId: Option<string>;
	userProfile: Option<LELodasoftCommonModelsLeadsUserProfileViewModel>;
	firstName: Option<string>;
	lastName: Option<string>;
	title: Option<string>;
	department: Option<string>;
	orgName: Option<string>;
	nmlsId: Option<string>;
	mobilePhone: Option<string>;
	workPhone: Option<string>;
	extPhone: Option<string>;
	fax: Option<string>;
	email: Option<string>;
	assistantName: Option<string>;
	assistantPhone: Option<string>;
	assistantEmail: Option<string>;
	doNotCall: Option<boolean>;
	doNotEmail: Option<boolean>;
	alertViaSms: Option<boolean>;
	mailingStreet: Option<string>;
	mailingPOBox: Option<string>;
	mailingCity: Option<string>;
	mailingState: Option<string>;
	mailingZip: Option<string>;
	createDate: Option<string>;
	modifiedDate: Option<string>;
	agentListIds: Option<Array<number>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsAdminAgentViewModelIO = type({
	agentId: createOptionFromNullable(number),
	userId: createOptionFromNullable(string),
	userProfile: createOptionFromNullable(LELodasoftCommonModelsLeadsUserProfileViewModelIO),
	firstName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	title: createOptionFromNullable(string),
	department: createOptionFromNullable(string),
	orgName: createOptionFromNullable(string),
	nmlsId: createOptionFromNullable(string),
	mobilePhone: createOptionFromNullable(string),
	workPhone: createOptionFromNullable(string),
	extPhone: createOptionFromNullable(string),
	fax: createOptionFromNullable(string),
	email: createOptionFromNullable(string),
	assistantName: createOptionFromNullable(string),
	assistantPhone: createOptionFromNullable(string),
	assistantEmail: createOptionFromNullable(string),
	doNotCall: createOptionFromNullable(boolean),
	doNotEmail: createOptionFromNullable(boolean),
	alertViaSms: createOptionFromNullable(boolean),
	mailingStreet: createOptionFromNullable(string),
	mailingPOBox: createOptionFromNullable(string),
	mailingCity: createOptionFromNullable(string),
	mailingState: createOptionFromNullable(string),
	mailingZip: createOptionFromNullable(string),
	createDate: createOptionFromNullable(string),
	modifiedDate: createOptionFromNullable(string),
	agentListIds: createOptionFromNullable(array(number)),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
