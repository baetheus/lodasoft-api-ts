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
	id: createOptionFromNullable(number, 'id'),
	flowType: keyof({ Unspecified: null, LeadPost: null, OnlineApplication: null, ContactStrategy: null }),
	title: string,
	comment: string,
	data: createOptionFromNullable(string, 'data'),
	flowGuid: createOptionFromNullable(string, 'flowGuid'),
	active: boolean,
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
