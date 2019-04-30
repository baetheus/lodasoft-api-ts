import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel = {
	id: Option<number>;
	name: Option<string>;
	dataId: Option<string>;
	data: Option<string>;
	groupId: Option<string>;
	group: Option<string>;
	valid: Option<string>;
	tree: Option<string>;
	questionId: Option<string>;
	startUrl: Option<string>;
	postUrl: Option<string>;
	answersModelJSON: Option<string>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO = type({
	id: createOptionFromNullable(number, 'id'),
	name: createOptionFromNullable(string, 'name'),
	dataId: createOptionFromNullable(string, 'dataId'),
	data: createOptionFromNullable(string, 'data'),
	groupId: createOptionFromNullable(string, 'groupId'),
	group: createOptionFromNullable(string, 'group'),
	valid: createOptionFromNullable(string, 'valid'),
	tree: createOptionFromNullable(string, 'tree'),
	questionId: createOptionFromNullable(string, 'questionId'),
	startUrl: createOptionFromNullable(string, 'startUrl'),
	postUrl: createOptionFromNullable(string, 'postUrl'),
	answersModelJSON: createOptionFromNullable(string, 'answersModelJSON'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
