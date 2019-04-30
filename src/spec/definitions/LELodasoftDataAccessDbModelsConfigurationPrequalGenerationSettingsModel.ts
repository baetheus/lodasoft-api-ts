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
	prequalGenerationSettingsId: createOptionFromNullable(number, 'prequalGenerationSettingsId'),
	documentTemplateId: createOptionFromNullable(number, 'documentTemplateId'),
	enabledForInternalUsers: createOptionFromNullable(boolean, 'enabledForInternalUsers'),
	enabledForAgents: createOptionFromNullable(boolean, 'enabledForAgents'),
	enabledForBorrowers: createOptionFromNullable(boolean, 'enabledForBorrowers'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
