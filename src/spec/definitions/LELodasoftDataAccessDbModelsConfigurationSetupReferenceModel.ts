import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel = {
	setupRefernceId: Option<number>;
	tableName: Option<string>;
	templateCompanyId: Option<number>;
	templateId: Option<number>;
	companyId: Option<number>;
	insertedId: Option<number>;
};
export const LELodasoftDataAccessDbModelsConfigurationSetupReferenceModelIO = type({
	setupRefernceId: createOptionFromOptional(number, 'setupRefernceId'),
	tableName: createOptionFromOptional(string, 'tableName'),
	templateCompanyId: createOptionFromOptional(number, 'templateCompanyId'),
	templateId: createOptionFromOptional(number, 'templateId'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedId: createOptionFromOptional(number, 'insertedId'),
});
