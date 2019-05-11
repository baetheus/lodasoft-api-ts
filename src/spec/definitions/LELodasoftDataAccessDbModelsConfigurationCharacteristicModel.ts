import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

import { createEnumType } from '../utils/utils';

export enum TaskOptionEnum {
	'AutoApply',
	'Confirm',
	'RequestQuantity',
}

export enum CharacteristicTypeEnum {
	'LoanCharacteristic',
	'BorrowerCharacteristic',
}

export type LELodasoftDataAccessDbModelsConfigurationCharacteristicModel = {
	taskCategoryId: Option<number>;
	taskCategoryName: Option<string>;
	companyId: Option<number>;
	taskOption: Option<TaskOptionEnum>;
	characteristicType: Option<CharacteristicTypeEnum>;
	order: Option<number>;
};
export const LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO = type({
	taskCategoryId: createOptionFromOptional(number, 'taskCategoryId'),
	taskCategoryName: createOptionFromOptional(string, 'taskCategoryName'),
	companyId: createOptionFromOptional(number, 'companyId'),
	taskOption: createOptionFromOptional(
		createEnumType<TaskOptionEnum>(TaskOptionEnum, 'TaskOptionEnum'),
		'taskOption',
	),
	characteristicType: createOptionFromOptional(
		createEnumType<CharacteristicTypeEnum>(CharacteristicTypeEnum, 'CharacteristicTypeEnum'),
		'characteristicType',
	),
	order: createOptionFromOptional(number, 'order'),
});
