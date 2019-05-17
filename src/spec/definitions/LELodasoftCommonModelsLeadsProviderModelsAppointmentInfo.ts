import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';

import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsLeadsProviderModelsAppointmentInfo = {
	date: Option<Date>;
	description: Option<string>;
	notes: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsAppointmentInfoIO = type({
	date: createOptionFromOptional(DateFromDatelike, 'date'),
	description: createOptionFromOptional(string, 'description'),
	notes: createOptionFromOptional(string, 'notes'),
});
