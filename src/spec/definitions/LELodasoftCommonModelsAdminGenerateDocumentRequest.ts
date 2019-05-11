import { Option } from 'fp-ts/lib/Option';
import { number, string, dictionary, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsAdminGenerateDocumentRequest = {
	documentTemplateId: Option<number>;
	applicationId: Option<number>;
	replacementValues: Option<{ [key: string]: string }>;
};
export const LELodasoftCommonModelsAdminGenerateDocumentRequestIO = type({
	documentTemplateId: createOptionFromOptional(number, 'documentTemplateId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	replacementValues: createOptionFromOptional(dictionary(string, string), 'replacementValues'),
});
