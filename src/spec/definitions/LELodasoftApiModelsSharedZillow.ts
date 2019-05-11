import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsSharedZillow = { leadPostUrl: Option<string> };
export const LELodasoftApiModelsSharedZillowIO = type({ leadPostUrl: createOptionFromOptional(string, 'leadPostUrl') });
