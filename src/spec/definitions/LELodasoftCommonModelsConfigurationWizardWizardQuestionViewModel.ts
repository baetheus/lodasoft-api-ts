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
	id: createOptionFromNullable(number),
	categoryId: createOptionFromNullable(number),
	dataId: createOptionFromNullable(number),
	groupId: createOptionFromNullable(number),
	name: createOptionFromNullable(string),
	question: createOptionFromNullable(string),
	additional: createOptionFromNullable(string),
	validate: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
