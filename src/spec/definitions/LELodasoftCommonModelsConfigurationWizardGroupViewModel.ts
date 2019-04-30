import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationWizardGroupViewModel = {
	id: Option<number>;
	groupId: Option<number>;
	questionId: Option<number>;
	categoryId: Option<number>;
	name: Option<string>;
	question: Option<string>;
	answer: Option<string>;
	validate: Option<string>;
};
export const LELodasoftCommonModelsConfigurationWizardGroupViewModelIO = type({
	id: createOptionFromNullable(number, 'id'),
	groupId: createOptionFromNullable(number, 'groupId'),
	questionId: createOptionFromNullable(number, 'questionId'),
	categoryId: createOptionFromNullable(number, 'categoryId'),
	name: createOptionFromNullable(string, 'name'),
	question: createOptionFromNullable(string, 'question'),
	answer: createOptionFromNullable(string, 'answer'),
	validate: createOptionFromNullable(string, 'validate'),
});
