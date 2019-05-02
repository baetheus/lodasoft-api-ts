import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

export enum FlowTypeEnum {
	'Unspecified',
	'LeadPost',
	'OnlineApplication',
	'ContactStrategy',
}

export type LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel = {
	id: Option<number>;
	flowType: FlowTypeEnum;
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
	flowType: createEnumType<FlowTypeEnum>(FlowTypeEnum, 'FlowTypeEnum'),
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
