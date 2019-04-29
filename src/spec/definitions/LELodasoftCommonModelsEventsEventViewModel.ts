import { Option } from 'fp-ts/lib/Option';
import { number, string, keyof, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsEventsEventViewModel = {
	eventId: Option<number>;
	title: Option<string>;
	eventType: Option<'Appointment' | 'EstimatedClosing' | 'LockExpiration'>;
	description: Option<string>;
	privilege: Option<'Private' | 'Public'>;
	location: Option<string>;
	icon: Option<string>;
	className: Option<string>;
	allDay: Option<boolean>;
	dateCreate: Option<Date>;
	dateStart: Option<Date>;
	dateEnd: Option<Date>;
	eventRepeat: Option<string>;
	remindBeforeMinutes: Option<number>;
	remindToaster: Option<boolean>;
	remindSms: Option<boolean>;
	remindEmail: Option<boolean>;
	userId: Option<string>;
	userName: Option<string>;
	companyId: Option<number>;
	loginName: Option<string>;
	applicationId: Option<number>;
	leadId: Option<number>;
	borrowerId: Option<number>;
	borrowerName: Option<string>;
	borrowerPhone: Option<string>;
	displayAddress: Option<string>;
	readOnly: Option<boolean>;
};
export const LELodasoftCommonModelsEventsEventViewModelIO = type({
	eventId: createOptionFromNullable(number),
	title: createOptionFromNullable(string),
	eventType: createOptionFromNullable(keyof({ Appointment: null, EstimatedClosing: null, LockExpiration: null })),
	description: createOptionFromNullable(string),
	privilege: createOptionFromNullable(keyof({ Private: null, Public: null })),
	location: createOptionFromNullable(string),
	icon: createOptionFromNullable(string),
	className: createOptionFromNullable(string),
	allDay: createOptionFromNullable(boolean),
	dateCreate: createOptionFromNullable(DateFromISOString),
	dateStart: createOptionFromNullable(DateFromISOString),
	dateEnd: createOptionFromNullable(DateFromISOString),
	eventRepeat: createOptionFromNullable(string),
	remindBeforeMinutes: createOptionFromNullable(number),
	remindToaster: createOptionFromNullable(boolean),
	remindSms: createOptionFromNullable(boolean),
	remindEmail: createOptionFromNullable(boolean),
	userId: createOptionFromNullable(string),
	userName: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	loginName: createOptionFromNullable(string),
	applicationId: createOptionFromNullable(number),
	leadId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	borrowerName: createOptionFromNullable(string),
	borrowerPhone: createOptionFromNullable(string),
	displayAddress: createOptionFromNullable(string),
	readOnly: createOptionFromNullable(boolean),
});
