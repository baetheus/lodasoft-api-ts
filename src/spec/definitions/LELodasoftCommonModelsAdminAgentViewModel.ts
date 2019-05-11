import {
	LELodasoftCommonModelsLeadsUserProfileViewModel,
	LELodasoftCommonModelsLeadsUserProfileViewModelIO,
} from '../definitions/LELodasoftCommonModelsLeadsUserProfileViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, array, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	agentId: createOptionFromOptional(number, 'agentId'),
	userId: createOptionFromOptional(string, 'userId'),
	userProfile: createOptionFromOptional(LELodasoftCommonModelsLeadsUserProfileViewModelIO, 'userProfile'),
	firstName: createOptionFromOptional(string, 'firstName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	title: createOptionFromOptional(string, 'title'),
	department: createOptionFromOptional(string, 'department'),
	orgName: createOptionFromOptional(string, 'orgName'),
	nmlsId: createOptionFromOptional(string, 'nmlsId'),
	mobilePhone: createOptionFromOptional(string, 'mobilePhone'),
	workPhone: createOptionFromOptional(string, 'workPhone'),
	extPhone: createOptionFromOptional(string, 'extPhone'),
	fax: createOptionFromOptional(string, 'fax'),
	email: createOptionFromOptional(string, 'email'),
	assistantName: createOptionFromOptional(string, 'assistantName'),
	assistantPhone: createOptionFromOptional(string, 'assistantPhone'),
	assistantEmail: createOptionFromOptional(string, 'assistantEmail'),
	doNotCall: createOptionFromOptional(boolean, 'doNotCall'),
	doNotEmail: createOptionFromOptional(boolean, 'doNotEmail'),
	alertViaSms: createOptionFromOptional(boolean, 'alertViaSms'),
	mailingStreet: createOptionFromOptional(string, 'mailingStreet'),
	mailingPOBox: createOptionFromOptional(string, 'mailingPOBox'),
	mailingCity: createOptionFromOptional(string, 'mailingCity'),
	mailingState: createOptionFromOptional(string, 'mailingState'),
	mailingZip: createOptionFromOptional(string, 'mailingZip'),
	createDate: createOptionFromOptional(string, 'createDate'),
	modifiedDate: createOptionFromOptional(string, 'modifiedDate'),
	agentListIds: createOptionFromOptional(array(number), 'agentListIds'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
