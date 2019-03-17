import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsProviderModelsCustomDataInfo = {
	customData1: Option<string>;
	customData2: Option<string>;
	customData3: Option<string>;
	customData4: Option<string>;
	customData5: Option<string>;
	customData6: Option<string>;
	customData7: Option<string>;
	customData8: Option<string>;
	customData9: Option<string>;
	customData10: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsCustomDataInfoIO = type({
	customData1: createOptionFromNullable(string),
	customData2: createOptionFromNullable(string),
	customData3: createOptionFromNullable(string),
	customData4: createOptionFromNullable(string),
	customData5: createOptionFromNullable(string),
	customData6: createOptionFromNullable(string),
	customData7: createOptionFromNullable(string),
	customData8: createOptionFromNullable(string),
	customData9: createOptionFromNullable(string),
	customData10: createOptionFromNullable(string),
});
