import { Option } from 'fp-ts/lib/Option';
import { number, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsConfigurationWizardValidViewModel = {
	id: Option<number>;
	questionId: Option<number>;
	min: Option<number>;
	max: Option<number>;
	required: Option<boolean>;
};
export const LELodasoftCommonModelsConfigurationWizardValidViewModelIO = type({
	id: createOptionFromOptional(number, 'id'),
	questionId: createOptionFromOptional(number, 'questionId'),
	min: createOptionFromOptional(number, 'min'),
	max: createOptionFromOptional(number, 'max'),
	required: createOptionFromOptional(boolean, 'required'),
});
