import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsLeadsLeadCampaignViewModel = {
	leadCampaignId: Option<number>;
	name: Option<string>;
	description: Option<string>;
	type: Option<string>;
	costPerLead: Option<number>;
	email: Option<string>;
	note: Option<string>;
	active: Option<boolean>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsLeadsLeadCampaignViewModelIO = type({
	leadCampaignId: createOptionFromOptional(number, 'leadCampaignId'),
	name: createOptionFromOptional(string, 'name'),
	description: createOptionFromOptional(string, 'description'),
	type: createOptionFromOptional(string, 'type'),
	costPerLead: createOptionFromOptional(number, 'costPerLead'),
	email: createOptionFromOptional(string, 'email'),
	note: createOptionFromOptional(string, 'note'),
	active: createOptionFromOptional(boolean, 'active'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
