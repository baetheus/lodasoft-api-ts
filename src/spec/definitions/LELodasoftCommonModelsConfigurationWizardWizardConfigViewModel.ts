import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	id: createOptionFromOptional(number, 'id'),
	name: createOptionFromOptional(string, 'name'),
	dataId: createOptionFromOptional(string, 'dataId'),
	data: createOptionFromOptional(string, 'data'),
	groupId: createOptionFromOptional(string, 'groupId'),
	group: createOptionFromOptional(string, 'group'),
	valid: createOptionFromOptional(string, 'valid'),
	tree: createOptionFromOptional(string, 'tree'),
	questionId: createOptionFromOptional(string, 'questionId'),
	startUrl: createOptionFromOptional(string, 'startUrl'),
	postUrl: createOptionFromOptional(string, 'postUrl'),
	answersModelJSON: createOptionFromOptional(string, 'answersModelJSON'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
