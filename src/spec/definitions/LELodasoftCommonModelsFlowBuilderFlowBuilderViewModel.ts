import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	id: createOptionFromOptional(number, 'id'),
	flowType: createEnumType<FlowTypeEnum>(FlowTypeEnum, 'FlowTypeEnum'),
	title: string,
	comment: string,
	data: createOptionFromOptional(string, 'data'),
	flowGuid: createOptionFromOptional(string, 'flowGuid'),
	active: boolean,
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
