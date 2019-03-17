import {
	LELodasoftCommonModelsLoanMergeDocFilesInstruction,
	LELodasoftCommonModelsLoanMergeDocFilesInstructionIO,
} from '../definitions/LELodasoftCommonModelsLoanMergeDocFilesInstruction';
import { Option } from 'fp-ts/lib/Option';
import { string, dictionary, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLoanMergeDocFilesRequest = {
	newSourceDocFileBase64Content: Option<{ [key: string]: string }>;
	mergeInstructions: Option<Array<LELodasoftCommonModelsLoanMergeDocFilesInstruction>>;
	originalFileGuid: Option<string>;
	newFileName: Option<string>;
};
export const LELodasoftCommonModelsLoanMergeDocFilesRequestIO = type({
	newSourceDocFileBase64Content: createOptionFromNullable(dictionary(string, string)),
	mergeInstructions: createOptionFromNullable(array(LELodasoftCommonModelsLoanMergeDocFilesInstructionIO)),
	originalFileGuid: createOptionFromNullable(string),
	newFileName: createOptionFromNullable(string),
});
