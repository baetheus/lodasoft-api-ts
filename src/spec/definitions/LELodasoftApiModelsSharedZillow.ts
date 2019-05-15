import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsSharedZillow = { leadPostUrl: Option<string> };
export const LELodasoftApiModelsSharedZillowIO = type({ leadPostUrl: createOptionFromOptional(string, 'leadPostUrl') });
