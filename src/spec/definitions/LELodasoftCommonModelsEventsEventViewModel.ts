import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

export enum EventTypeEnum {
	'Appointment',
	'EstimatedClosing',
	'LockExpiration',
}

export enum PrivilegeEnum {
	'Private',
	'Public',
}

export type LELodasoftCommonModelsEventsEventViewModel = {
	eventId: Option<number>;
	title: Option<string>;
	eventType: Option<EventTypeEnum>;
	description: Option<string>;
	privilege: Option<PrivilegeEnum>;
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
	eventId: createOptionFromOptional(number, 'eventId'),
	title: createOptionFromOptional(string, 'title'),
	eventType: createOptionFromOptional(createEnumType<EventTypeEnum>(EventTypeEnum, 'EventTypeEnum'), 'eventType'),
	description: createOptionFromOptional(string, 'description'),
	privilege: createOptionFromOptional(createEnumType<PrivilegeEnum>(PrivilegeEnum, 'PrivilegeEnum'), 'privilege'),
	location: createOptionFromOptional(string, 'location'),
	icon: createOptionFromOptional(string, 'icon'),
	className: createOptionFromOptional(string, 'className'),
	allDay: createOptionFromOptional(boolean, 'allDay'),
	dateCreate: createOptionFromOptional(DateFromISOString, 'dateCreate'),
	dateStart: createOptionFromOptional(DateFromISOString, 'dateStart'),
	dateEnd: createOptionFromOptional(DateFromISOString, 'dateEnd'),
	eventRepeat: createOptionFromOptional(string, 'eventRepeat'),
	remindBeforeMinutes: createOptionFromOptional(number, 'remindBeforeMinutes'),
	remindToaster: createOptionFromOptional(boolean, 'remindToaster'),
	remindSms: createOptionFromOptional(boolean, 'remindSms'),
	remindEmail: createOptionFromOptional(boolean, 'remindEmail'),
	userId: createOptionFromOptional(string, 'userId'),
	userName: createOptionFromOptional(string, 'userName'),
	companyId: createOptionFromOptional(number, 'companyId'),
	loginName: createOptionFromOptional(string, 'loginName'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	leadId: createOptionFromOptional(number, 'leadId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	borrowerName: createOptionFromOptional(string, 'borrowerName'),
	borrowerPhone: createOptionFromOptional(string, 'borrowerPhone'),
	displayAddress: createOptionFromOptional(string, 'displayAddress'),
	readOnly: createOptionFromOptional(boolean, 'readOnly'),
});
