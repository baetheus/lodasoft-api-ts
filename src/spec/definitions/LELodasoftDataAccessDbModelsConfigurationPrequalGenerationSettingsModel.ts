import { Option } from 'fp-ts/lib/Option';
import { number, boolean, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	prequalGenerationSettingsId: createOptionFromOptional(number, 'prequalGenerationSettingsId'),
	documentTemplateId: createOptionFromOptional(number, 'documentTemplateId'),
	enabledForInternalUsers: createOptionFromOptional(boolean, 'enabledForInternalUsers'),
	enabledForAgents: createOptionFromOptional(boolean, 'enabledForAgents'),
	enabledForBorrowers: createOptionFromOptional(boolean, 'enabledForBorrowers'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
