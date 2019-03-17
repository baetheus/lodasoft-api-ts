import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationEmailCampaignModel = {
	emailCampaignId: Option<number>;
	emailCampaignName: Option<string>;
	repeatDays: Option<number>;
	active: Option<boolean>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftDataAccessDbModelsConfigurationEmailCampaignModelIO = type({
	emailCampaignId: createOptionFromNullable(number),
	emailCampaignName: createOptionFromNullable(string),
	repeatDays: createOptionFromNullable(number),
	active: createOptionFromNullable(boolean),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
