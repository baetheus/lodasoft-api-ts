import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsLeadsProviderModelsAppointmentInfo = {
	date: Option<Date>;
	description: Option<string>;
	notes: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsAppointmentInfoIO = type({
	date: createOptionFromOptional(DateFromISOString, 'date'),
	description: createOptionFromOptional(string, 'description'),
	notes: createOptionFromOptional(string, 'notes'),
});
