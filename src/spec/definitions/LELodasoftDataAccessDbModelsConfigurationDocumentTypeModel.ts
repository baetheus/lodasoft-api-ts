import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel = {
	documentTypeId: Option<number>;
	companyId: Option<number>;
	documentTypeName: Option<string>;
	order: Option<number>;
};
export const LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO = type({
	documentTypeId: createOptionFromOptional(number, 'documentTypeId'),
	companyId: createOptionFromOptional(number, 'companyId'),
	documentTypeName: createOptionFromOptional(string, 'documentTypeName'),
	order: createOptionFromOptional(number, 'order'),
});
