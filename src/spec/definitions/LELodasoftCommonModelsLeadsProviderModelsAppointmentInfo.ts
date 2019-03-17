import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { DateFromISOString, createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsProviderModelsAppointmentInfo = {
	date: Option<Date>;
	description: Option<string>;
	notes: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsAppointmentInfoIO = type({
	date: createOptionFromNullable(DateFromISOString),
	description: createOptionFromNullable(string),
	notes: createOptionFromNullable(string),
});
