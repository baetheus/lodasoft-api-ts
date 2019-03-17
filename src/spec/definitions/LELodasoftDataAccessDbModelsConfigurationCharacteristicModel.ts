import { Option } from 'fp-ts/lib/Option';
import { number, string, union, literal, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationCharacteristicModel = {
	taskCategoryId: Option<number>;
	taskCategoryName: Option<string>;
	companyId: Option<number>;
	taskOption: Option<'AutoApply' | 'Confirm' | 'RequestQuantity'>;
	characteristicType: Option<'LoanCharacteristic' | 'BorrowerCharacteristic'>;
};
export const LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO = type({
	taskCategoryId: createOptionFromNullable(number),
	taskCategoryName: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	taskOption: createOptionFromNullable(union([literal('AutoApply'), literal('Confirm'), literal('RequestQuantity')])),
	characteristicType: createOptionFromNullable(
		union([literal('LoanCharacteristic'), literal('BorrowerCharacteristic')]),
	),
});
