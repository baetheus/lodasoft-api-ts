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
	leadCampaignId: createOptionFromNullable(number),
	name: createOptionFromNullable(string),
	description: createOptionFromNullable(string),
	type: createOptionFromNullable(string),
	costPerLead: createOptionFromNullable(number),
	email: createOptionFromNullable(string),
	note: createOptionFromNullable(string),
	active: createOptionFromNullable(boolean),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
