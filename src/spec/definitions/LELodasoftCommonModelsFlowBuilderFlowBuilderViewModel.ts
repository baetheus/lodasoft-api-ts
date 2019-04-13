import { Option } from 'fp-ts/lib/Option';
import { number, keyof, string, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel = {
	id: Option<number>;
	flowType: 'Unspecified' | 'LeadPost' | 'OnlineApplication' | 'ContactStrategy';
	title: string;
	comment: string;
	data: Option<string>;
	flowGuid: Option<string>;
	active: boolean;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO = type({
	id: createOptionFromNullable(number),
	flowType: keyof({ Unspecified: null, LeadPost: null, OnlineApplication: null, ContactStrategy: null }),
	title: string,
	comment: string,
	data: createOptionFromNullable(string),
	flowGuid: createOptionFromNullable(string),
	active: boolean,
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
