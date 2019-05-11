import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsSharedLeadPoint = { leadPostUrl: Option<string> };
export const LELodasoftApiModelsSharedLeadPointIO = type({
	leadPostUrl: createOptionFromOptional(string, 'leadPostUrl'),
});
