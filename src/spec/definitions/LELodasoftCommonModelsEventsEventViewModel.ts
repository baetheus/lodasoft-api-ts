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
	eventId: createOptionFromNullable(number, 'eventId'),
	title: createOptionFromNullable(string, 'title'),
	eventType: createOptionFromNullable(
		keyof({ Appointment: null, EstimatedClosing: null, LockExpiration: null }),
		'eventType',
	),
	description: createOptionFromNullable(string, 'description'),
	privilege: createOptionFromNullable(keyof({ Private: null, Public: null }), 'privilege'),
	location: createOptionFromNullable(string, 'location'),
	icon: createOptionFromNullable(string, 'icon'),
	className: createOptionFromNullable(string, 'className'),
	allDay: createOptionFromNullable(boolean, 'allDay'),
	dateCreate: createOptionFromNullable(DateFromISOString, 'dateCreate'),
	dateStart: createOptionFromNullable(DateFromISOString, 'dateStart'),
	dateEnd: createOptionFromNullable(DateFromISOString, 'dateEnd'),
	eventRepeat: createOptionFromNullable(string, 'eventRepeat'),
	remindBeforeMinutes: createOptionFromNullable(number, 'remindBeforeMinutes'),
	remindToaster: createOptionFromNullable(boolean, 'remindToaster'),
	remindSms: createOptionFromNullable(boolean, 'remindSms'),
	remindEmail: createOptionFromNullable(boolean, 'remindEmail'),
	userId: createOptionFromNullable(string, 'userId'),
	userName: createOptionFromNullable(string, 'userName'),
	companyId: createOptionFromNullable(number, 'companyId'),
	loginName: createOptionFromNullable(string, 'loginName'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	leadId: createOptionFromNullable(number, 'leadId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	borrowerName: createOptionFromNullable(string, 'borrowerName'),
	borrowerPhone: createOptionFromNullable(string, 'borrowerPhone'),
	displayAddress: createOptionFromNullable(string, 'displayAddress'),
	readOnly: createOptionFromNullable(boolean, 'readOnly'),
});
