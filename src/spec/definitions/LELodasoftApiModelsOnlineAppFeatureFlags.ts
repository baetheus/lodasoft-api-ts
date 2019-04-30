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
	voaEnabled: createOptionFromNullable(boolean, 'voaEnabled'),
	creditPullEnabled: createOptionFromNullable(boolean, 'creditPullEnabled'),
	duEnabled: createOptionFromNullable(boolean, 'duEnabled'),
	lpaEnabled: createOptionFromNullable(boolean, 'lpaEnabled'),
});
