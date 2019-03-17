import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel = {
	documentTypeId: Option<number>;
	companyId: Option<number>;
	documentTypeName: Option<string>;
	order: Option<number>;
};
export const LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO = type({
	documentTypeId: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	documentTypeName: createOptionFromNullable(string),
	order: createOptionFromNullable(number),
});
