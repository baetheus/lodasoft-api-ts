import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	emailCampaignId: createOptionFromOptional(number, 'emailCampaignId'),
	emailCampaignName: createOptionFromOptional(string, 'emailCampaignName'),
	repeatDays: createOptionFromOptional(number, 'repeatDays'),
	active: createOptionFromOptional(boolean, 'active'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
