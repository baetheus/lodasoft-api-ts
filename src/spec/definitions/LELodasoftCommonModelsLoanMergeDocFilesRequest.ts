import {
	LELodasoftCommonModelsLoanMergeDocFilesInstruction,
	LELodasoftCommonModelsLoanMergeDocFilesInstructionIO,
} from '../definitions/LELodasoftCommonModelsLoanMergeDocFilesInstruction';
import { Option } from 'fp-ts/lib/Option';
import { string, dictionary, array, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsLoanMergeDocFilesRequest = {
	newSourceDocFileBase64Content: Option<{ [key: string]: string }>;
	mergeInstructions: Option<Array<LELodasoftCommonModelsLoanMergeDocFilesInstruction>>;
	originalFileGuid: Option<string>;
	newFileName: Option<string>;
};
export const LELodasoftCommonModelsLoanMergeDocFilesRequestIO = type({
	newSourceDocFileBase64Content: createOptionFromOptional(
		dictionary(string, string),
		'newSourceDocFileBase64Content',
	),
	mergeInstructions: createOptionFromOptional(
		array(LELodasoftCommonModelsLoanMergeDocFilesInstructionIO),
		'mergeInstructions',
	),
	originalFileGuid: createOptionFromOptional(string, 'originalFileGuid'),
	newFileName: createOptionFromOptional(string, 'newFileName'),
});
