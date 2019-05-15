import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsSharedLeadPoint = { leadPostUrl: Option<string> };
export const LELodasoftApiModelsSharedLeadPointIO = type({
	leadPostUrl: createOptionFromOptional(string, 'leadPostUrl'),
});
