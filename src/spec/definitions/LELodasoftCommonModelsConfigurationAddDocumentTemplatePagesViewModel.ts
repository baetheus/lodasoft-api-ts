import {
	LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel,
	LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel';
import { Option } from 'fp-ts/lib/Option';
import { array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModel = {
	pages: Option<Array<LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel>>;
};
export const LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModelIO = type({
	pages: createOptionFromNullable(array(LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModelIO), 'pages'),
});
