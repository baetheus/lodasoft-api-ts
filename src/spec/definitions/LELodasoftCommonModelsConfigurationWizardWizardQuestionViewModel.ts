import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	id: createOptionFromOptional(number, 'id'),
	categoryId: createOptionFromOptional(number, 'categoryId'),
	dataId: createOptionFromOptional(number, 'dataId'),
	groupId: createOptionFromOptional(number, 'groupId'),
	name: createOptionFromOptional(string, 'name'),
	question: createOptionFromOptional(string, 'question'),
	additional: createOptionFromOptional(string, 'additional'),
	validate: createOptionFromOptional(string, 'validate'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
