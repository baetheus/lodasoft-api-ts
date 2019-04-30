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
	emailCampaignId: createOptionFromNullable(number, 'emailCampaignId'),
	emailCampaignName: createOptionFromNullable(string, 'emailCampaignName'),
	repeatDays: createOptionFromNullable(number, 'repeatDays'),
	active: createOptionFromNullable(boolean, 'active'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
