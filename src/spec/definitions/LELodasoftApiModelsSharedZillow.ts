import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsSharedZillow = { leadPostUrl: Option<string> };
export const LELodasoftApiModelsSharedZillowIO = type({ leadPostUrl: createOptionFromNullable(string) });
