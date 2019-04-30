import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel = {
	id: Option<number>;
	categoryId: Option<number>;
	dataId: Option<number>;
	groupId: Option<number>;
	name: Option<string>;
	question: Option<string>;
	additional: Option<string>;
	validate: Option<string>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO = type({
	id: createOptionFromNullable(number, 'id'),
	categoryId: createOptionFromNullable(number, 'categoryId'),
	dataId: createOptionFromNullable(number, 'dataId'),
	groupId: createOptionFromNullable(number, 'groupId'),
	name: createOptionFromNullable(string, 'name'),
	question: createOptionFromNullable(string, 'question'),
	additional: createOptionFromNullable(string, 'additional'),
	validate: createOptionFromNullable(string, 'validate'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
