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
	setupRefernceId: createOptionFromNullable(number),
	tableName: createOptionFromNullable(string),
	templateCompanyId: createOptionFromNullable(number),
	templateId: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	insertedId: createOptionFromNullable(number),
});
