import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

export enum DirectionEnum {
	'Unspecified',
	'Outbound',
	'Inbound',
}

export type LELodasoftCommonModelsMessageSmsHistoryViewModel = {
	id: Option<number>;
	from: Option<string>;
	to: Option<string>;
	body: Option<string>;
	direction: Option<DirectionEnum>;
	smsMessageSid: Option<string>;
	messageSid: Option<string>;
	accountSid: Option<string>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMessageSmsHistoryViewModelIO = type({
	id: createOptionFromNullable(number, 'id'),
	from: createOptionFromNullable(string, 'from'),
	to: createOptionFromNullable(string, 'to'),
	body: createOptionFromNullable(string, 'body'),
	direction: createOptionFromNullable(createEnumType<DirectionEnum>(DirectionEnum, 'DirectionEnum'), 'direction'),
	smsMessageSid: createOptionFromNullable(string, 'smsMessageSid'),
	messageSid: createOptionFromNullable(string, 'messageSid'),
	accountSid: createOptionFromNullable(string, 'accountSid'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
