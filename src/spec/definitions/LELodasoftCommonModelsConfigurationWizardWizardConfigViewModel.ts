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
	id: createOptionFromNullable(number),
	name: createOptionFromNullable(string),
	dataId: createOptionFromNullable(string),
	data: createOptionFromNullable(string),
	groupId: createOptionFromNullable(string),
	group: createOptionFromNullable(string),
	valid: createOptionFromNullable(string),
	tree: createOptionFromNullable(string),
	questionId: createOptionFromNullable(string),
	startUrl: createOptionFromNullable(string),
	postUrl: createOptionFromNullable(string),
	answersModelJSON: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
