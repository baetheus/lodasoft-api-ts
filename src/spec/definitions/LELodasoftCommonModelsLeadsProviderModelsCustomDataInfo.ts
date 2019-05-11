import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	customData1: createOptionFromOptional(string, 'customData1'),
	customData2: createOptionFromOptional(string, 'customData2'),
	customData3: createOptionFromOptional(string, 'customData3'),
	customData4: createOptionFromOptional(string, 'customData4'),
	customData5: createOptionFromOptional(string, 'customData5'),
	customData6: createOptionFromOptional(string, 'customData6'),
	customData7: createOptionFromOptional(string, 'customData7'),
	customData8: createOptionFromOptional(string, 'customData8'),
	customData9: createOptionFromOptional(string, 'customData9'),
	customData10: createOptionFromOptional(string, 'customData10'),
});
