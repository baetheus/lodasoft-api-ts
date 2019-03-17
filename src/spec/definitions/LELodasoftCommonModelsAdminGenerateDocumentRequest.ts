import { Option } from 'fp-ts/lib/Option';
import { number, string, dictionary, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsAdminGenerateDocumentRequest = {
	documentTemplateId: Option<number>;
	applicationId: Option<number>;
	replacementValues: Option<{ [key: string]: string }>;
};
export const LELodasoftCommonModelsAdminGenerateDocumentRequestIO = type({
	documentTemplateId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	replacementValues: createOptionFromNullable(dictionary(string, string)),
});
