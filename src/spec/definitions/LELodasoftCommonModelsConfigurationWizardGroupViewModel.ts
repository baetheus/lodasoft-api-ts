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
	id: createOptionFromNullable(number),
	groupId: createOptionFromNullable(number),
	questionId: createOptionFromNullable(number),
	categoryId: createOptionFromNullable(number),
	name: createOptionFromNullable(string),
	question: createOptionFromNullable(string),
	answer: createOptionFromNullable(string),
	validate: createOptionFromNullable(string),
});
