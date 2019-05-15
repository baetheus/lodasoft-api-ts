import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	id: createOptionFromOptional(number, 'id'),
	groupId: createOptionFromOptional(number, 'groupId'),
	questionId: createOptionFromOptional(number, 'questionId'),
	categoryId: createOptionFromOptional(number, 'categoryId'),
	name: createOptionFromOptional(string, 'name'),
	question: createOptionFromOptional(string, 'question'),
	answer: createOptionFromOptional(string, 'answer'),
	validate: createOptionFromOptional(string, 'validate'),
});
