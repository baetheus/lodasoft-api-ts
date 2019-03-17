import { Option } from 'fp-ts/lib/Option';
import { number, boolean, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationPrequalGenerationSettingsModel = {
	prequalGenerationSettingsId: Option<number>;
	documentTemplateId: Option<number>;
	enabledForInternalUsers: Option<boolean>;
	enabledForAgents: Option<boolean>;
	enabledForBorrowers: Option<boolean>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftDataAccessDbModelsConfigurationPrequalGenerationSettingsModelIO = type({
	prequalGenerationSettingsId: createOptionFromNullable(number),
	documentTemplateId: createOptionFromNullable(number),
	enabledForInternalUsers: createOptionFromNullable(boolean),
	enabledForAgents: createOptionFromNullable(boolean),
	enabledForBorrowers: createOptionFromNullable(boolean),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
