import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsSharedLeadPoint = { leadPostUrl: Option<string> };
export const LELodasoftApiModelsSharedLeadPointIO = type({ leadPostUrl: createOptionFromNullable(string) });
