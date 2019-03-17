import {
	LELodasoftApiModelsSharedOnlineWizardModel,
	LELodasoftApiModelsSharedOnlineWizardModelIO,
} from '../definitions/LELodasoftApiModelsSharedOnlineWizardModel';
import { Option } from 'fp-ts/lib/Option';
import { array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsSharedOnlineApplicationsModel = {
	wizardUrls: Option<Array<LELodasoftApiModelsSharedOnlineWizardModel>>;
};
export const LELodasoftApiModelsSharedOnlineApplicationsModelIO = type({
	wizardUrls: createOptionFromNullable(array(LELodasoftApiModelsSharedOnlineWizardModelIO)),
});
