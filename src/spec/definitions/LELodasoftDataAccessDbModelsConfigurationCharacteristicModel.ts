import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

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
	taskCategoryId: createOptionFromNullable(number, 'taskCategoryId'),
	taskCategoryName: createOptionFromNullable(string, 'taskCategoryName'),
	companyId: createOptionFromNullable(number, 'companyId'),
	taskOption: createOptionFromNullable(
		createEnumType<TaskOptionEnum>(TaskOptionEnum, 'TaskOptionEnum'),
		'taskOption',
	),
	characteristicType: createOptionFromNullable(
		createEnumType<CharacteristicTypeEnum>(CharacteristicTypeEnum, 'CharacteristicTypeEnum'),
		'characteristicType',
	),
	order: createOptionFromNullable(number, 'order'),
});
