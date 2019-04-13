import { Option } from 'fp-ts/lib/Option';
import { number, string, keyof, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMessageSmsHistoryViewModel = {
	id: Option<number>;
	from: Option<string>;
	to: Option<string>;
	body: Option<string>;
	direction: Option<'Unspecified' | 'Outbound' | 'Inbound'>;
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
	id: createOptionFromNullable(number),
	from: createOptionFromNullable(string),
	to: createOptionFromNullable(string),
	body: createOptionFromNullable(string),
	direction: createOptionFromNullable(keyof({ Unspecified: null, Outbound: null, Inbound: null })),
	smsMessageSid: createOptionFromNullable(string),
	messageSid: createOptionFromNullable(string),
	accountSid: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
