import { Option } from 'fp-ts/lib/Option';
import { boolean, string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	voaEnabled: createOptionFromOptional(boolean, 'voaEnabled'),
	creditPullEnabled: createOptionFromOptional(boolean, 'creditPullEnabled'),
	duEnabled: createOptionFromOptional(boolean, 'duEnabled'),
	lpaEnabled: createOptionFromOptional(boolean, 'lpaEnabled'),
	showEConsentVerbiage: createOptionFromOptional(boolean, 'showEConsentVerbiage'),
	eConsentText: createOptionFromOptional(string, 'eConsentText'),
	eConsentGenerationEnabled: createOptionFromOptional(boolean, 'eConsentGenerationEnabled'),
	showCreditAuthVerbiage: createOptionFromOptional(boolean, 'showCreditAuthVerbiage'),
	creditAuthText: createOptionFromOptional(string, 'creditAuthText'),
	creditAuthGenerationEnabled: createOptionFromOptional(boolean, 'creditAuthGenerationEnabled'),
});
