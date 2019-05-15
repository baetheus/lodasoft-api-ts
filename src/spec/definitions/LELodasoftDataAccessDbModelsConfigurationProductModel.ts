import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftDataAccessDbModelsConfigurationProductModel = {
	productId: Option<number>;
	productName: Option<string>;
	term: Option<number>;
	companyId: Option<number>;
};
export const LELodasoftDataAccessDbModelsConfigurationProductModelIO = type({
	productId: createOptionFromOptional(number, 'productId'),
	productName: createOptionFromOptional(string, 'productName'),
	term: createOptionFromOptional(number, 'term'),
	companyId: createOptionFromOptional(number, 'companyId'),
});
