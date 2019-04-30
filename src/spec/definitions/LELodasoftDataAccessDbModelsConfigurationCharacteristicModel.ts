import { Option } from 'fp-ts/lib/Option';
import { number, string, keyof, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationCharacteristicModel = {
	taskCategoryId: Option<number>;
	taskCategoryName: Option<string>;
	companyId: Option<number>;
	taskOption: Option<'AutoApply' | 'Confirm' | 'RequestQuantity'>;
	characteristicType: Option<'LoanCharacteristic' | 'BorrowerCharacteristic'>;
	order: Option<number>;
};
export const LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO = type({
	taskCategoryId: createOptionFromNullable(number, 'taskCategoryId'),
	taskCategoryName: createOptionFromNullable(string, 'taskCategoryName'),
	companyId: createOptionFromNullable(number, 'companyId'),
	taskOption: createOptionFromNullable(
		keyof({ AutoApply: null, Confirm: null, RequestQuantity: null }),
		'taskOption',
	),
	characteristicType: createOptionFromNullable(
		keyof({ LoanCharacteristic: null, BorrowerCharacteristic: null }),
		'characteristicType',
	),
	order: createOptionFromNullable(number, 'order'),
});
