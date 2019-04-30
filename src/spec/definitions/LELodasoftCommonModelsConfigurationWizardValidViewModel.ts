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
	id: createOptionFromNullable(number, 'id'),
	questionId: createOptionFromNullable(number, 'questionId'),
	min: createOptionFromNullable(number, 'min'),
	max: createOptionFromNullable(number, 'max'),
	required: createOptionFromNullable(boolean, 'required'),
});
