import { Option } from 'fp-ts/lib/Option';
import { boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsOnlineAppFeatureFlags = {
	voaEnabled: Option<boolean>;
	creditPullEnabled: Option<boolean>;
	duEnabled: Option<boolean>;
	lpaEnabled: Option<boolean>;
};
export const LELodasoftApiModelsOnlineAppFeatureFlagsIO = type({
	voaEnabled: createOptionFromNullable(boolean),
	creditPullEnabled: createOptionFromNullable(boolean),
	duEnabled: createOptionFromNullable(boolean),
	lpaEnabled: createOptionFromNullable(boolean),
});
