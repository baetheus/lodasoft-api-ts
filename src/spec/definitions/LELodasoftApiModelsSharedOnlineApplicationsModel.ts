import {
	LELodasoftApiModelsSharedOnlineWizardModel,
	LELodasoftApiModelsSharedOnlineWizardModelIO,
} from '../definitions/LELodasoftApiModelsSharedOnlineWizardModel';
import { Option } from 'fp-ts/lib/Option';
import { array, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsSharedOnlineApplicationsModel = {
	wizardUrls: Option<Array<LELodasoftApiModelsSharedOnlineWizardModel>>;
};
export const LELodasoftApiModelsSharedOnlineApplicationsModelIO = type({
	wizardUrls: createOptionFromOptional(array(LELodasoftApiModelsSharedOnlineWizardModelIO), 'wizardUrls'),
});
