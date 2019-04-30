import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel = {
	setupRefernceId: Option<number>;
	tableName: Option<string>;
	templateCompanyId: Option<number>;
	templateId: Option<number>;
	companyId: Option<number>;
	insertedId: Option<number>;
};
export const LELodasoftDataAccessDbModelsConfigurationSetupReferenceModelIO = type({
	setupRefernceId: createOptionFromNullable(number, 'setupRefernceId'),
	tableName: createOptionFromNullable(string, 'tableName'),
	templateCompanyId: createOptionFromNullable(number, 'templateCompanyId'),
	templateId: createOptionFromNullable(number, 'templateId'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedId: createOptionFromNullable(number, 'insertedId'),
});
