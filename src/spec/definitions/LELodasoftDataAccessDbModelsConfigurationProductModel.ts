import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationProductModel = {
	productId: Option<number>;
	productName: Option<string>;
	term: Option<number>;
	companyId: Option<number>;
};
export const LELodasoftDataAccessDbModelsConfigurationProductModelIO = type({
	productId: createOptionFromNullable(number, 'productId'),
	productName: createOptionFromNullable(string, 'productName'),
	term: createOptionFromNullable(number, 'term'),
	companyId: createOptionFromNullable(number, 'companyId'),
});
