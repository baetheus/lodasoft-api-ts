import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	leadCampaignId: createOptionFromNullable(number, 'leadCampaignId'),
	name: createOptionFromNullable(string, 'name'),
	description: createOptionFromNullable(string, 'description'),
	type: createOptionFromNullable(string, 'type'),
	costPerLead: createOptionFromNullable(number, 'costPerLead'),
	email: createOptionFromNullable(string, 'email'),
	note: createOptionFromNullable(string, 'note'),
	active: createOptionFromNullable(boolean, 'active'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
