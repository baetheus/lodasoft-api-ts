import { Option } from 'fp-ts/lib/Option';
import { number, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationWizardValidViewModel = {
	id: Option<number>;
	questionId: Option<number>;
	min: Option<number>;
	max: Option<number>;
	required: Option<boolean>;
};
export const LELodasoftCommonModelsConfigurationWizardValidViewModelIO = type({
	id: createOptionFromNullable(number),
	questionId: createOptionFromNullable(number),
	min: createOptionFromNullable(number),
	max: createOptionFromNullable(number),
	required: createOptionFromNullable(boolean),
});
