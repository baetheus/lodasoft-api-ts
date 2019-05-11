import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	id: createOptionFromOptional(number, 'id'),
	from: createOptionFromOptional(string, 'from'),
	to: createOptionFromOptional(string, 'to'),
	body: createOptionFromOptional(string, 'body'),
	direction: createOptionFromOptional(createEnumType<DirectionEnum>(DirectionEnum, 'DirectionEnum'), 'direction'),
	smsMessageSid: createOptionFromOptional(string, 'smsMessageSid'),
	messageSid: createOptionFromOptional(string, 'messageSid'),
	accountSid: createOptionFromOptional(string, 'accountSid'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
