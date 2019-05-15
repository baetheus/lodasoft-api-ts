import {
	LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel,
	LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel';
import { Option } from 'fp-ts/lib/Option';
import { array, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModel = {
	pages: Option<Array<LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel>>;
};
export const LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModelIO = type({
	pages: createOptionFromOptional(array(LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModelIO), 'pages'),
});
