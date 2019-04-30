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
	agentId: createOptionFromNullable(number, 'agentId'),
	userId: createOptionFromNullable(string, 'userId'),
	userProfile: createOptionFromNullable(LELodasoftCommonModelsLeadsUserProfileViewModelIO, 'userProfile'),
	firstName: createOptionFromNullable(string, 'firstName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	title: createOptionFromNullable(string, 'title'),
	department: createOptionFromNullable(string, 'department'),
	orgName: createOptionFromNullable(string, 'orgName'),
	nmlsId: createOptionFromNullable(string, 'nmlsId'),
	mobilePhone: createOptionFromNullable(string, 'mobilePhone'),
	workPhone: createOptionFromNullable(string, 'workPhone'),
	extPhone: createOptionFromNullable(string, 'extPhone'),
	fax: createOptionFromNullable(string, 'fax'),
	email: createOptionFromNullable(string, 'email'),
	assistantName: createOptionFromNullable(string, 'assistantName'),
	assistantPhone: createOptionFromNullable(string, 'assistantPhone'),
	assistantEmail: createOptionFromNullable(string, 'assistantEmail'),
	doNotCall: createOptionFromNullable(boolean, 'doNotCall'),
	doNotEmail: createOptionFromNullable(boolean, 'doNotEmail'),
	alertViaSms: createOptionFromNullable(boolean, 'alertViaSms'),
	mailingStreet: createOptionFromNullable(string, 'mailingStreet'),
	mailingPOBox: createOptionFromNullable(string, 'mailingPOBox'),
	mailingCity: createOptionFromNullable(string, 'mailingCity'),
	mailingState: createOptionFromNullable(string, 'mailingState'),
	mailingZip: createOptionFromNullable(string, 'mailingZip'),
	createDate: createOptionFromNullable(string, 'createDate'),
	modifiedDate: createOptionFromNullable(string, 'modifiedDate'),
	agentListIds: createOptionFromNullable(array(number), 'agentListIds'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
