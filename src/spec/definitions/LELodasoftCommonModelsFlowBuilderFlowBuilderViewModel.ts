import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';

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
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
