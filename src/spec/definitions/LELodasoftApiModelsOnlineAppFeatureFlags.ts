import { Option } from 'fp-ts/lib/Option';
import { boolean, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsOnlineAppFeatureFlags = {
	voaEnabled: Option<boolean>;
	creditPullEnabled: Option<boolean>;
	duEnabled: Option<boolean>;
	lpaEnabled: Option<boolean>;
	showEConsentVerbiage: Option<boolean>;
	eConsentText: Option<string>;
	eConsentGenerationEnabled: Option<boolean>;
	showCreditAuthVerbiage: Option<boolean>;
	creditAuthText: Option<string>;
	creditAuthGenerationEnabled: Option<boolean>;
};
export const LELodasoftApiModelsOnlineAppFeatureFlagsIO = type({
	voaEnabled: createOptionFromNullable(boolean, 'voaEnabled'),
	creditPullEnabled: createOptionFromNullable(boolean, 'creditPullEnabled'),
	duEnabled: createOptionFromNullable(boolean, 'duEnabled'),
	lpaEnabled: createOptionFromNullable(boolean, 'lpaEnabled'),
	showEConsentVerbiage: createOptionFromNullable(boolean, 'showEConsentVerbiage'),
	eConsentText: createOptionFromNullable(string, 'eConsentText'),
	eConsentGenerationEnabled: createOptionFromNullable(boolean, 'eConsentGenerationEnabled'),
	showCreditAuthVerbiage: createOptionFromNullable(boolean, 'showCreditAuthVerbiage'),
	creditAuthText: createOptionFromNullable(string, 'creditAuthText'),
	creditAuthGenerationEnabled: createOptionFromNullable(boolean, 'creditAuthGenerationEnabled'),
});
