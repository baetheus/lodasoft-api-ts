import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';

export enum MergeModeEnum {
	'Append',
	'Prepend',
	'Replace',
}

export type LELodasoftCommonModelsLoanMergeDocFilesInstruction = {
	sourceDocFileGuid: Option<string>;
	destinationDocFileGuid: Option<string>;
	destinationLoanDocId: Option<number>;
	destinationLoanDocTaskId: Option<number>;
	documentTypeId: Option<number>;
	description: Option<string>;
	fileName: Option<string>;
	note: Option<string>;
	borrowerNote: Option<string>;
	condition: Option<boolean>;
	mergeMode: Option<MergeModeEnum>;
	allPages: Option<boolean>;
	customPages: Option<Array<number>>;
	removePagesFromSource: Option<boolean>;
};
export const LELodasoftCommonModelsLoanMergeDocFilesInstructionIO = type({
	sourceDocFileGuid: createOptionFromOptional(string, 'sourceDocFileGuid'),
	destinationDocFileGuid: createOptionFromOptional(string, 'destinationDocFileGuid'),
	destinationLoanDocId: createOptionFromOptional(number, 'destinationLoanDocId'),
	destinationLoanDocTaskId: createOptionFromOptional(number, 'destinationLoanDocTaskId'),
	documentTypeId: createOptionFromOptional(number, 'documentTypeId'),
	description: createOptionFromOptional(string, 'description'),
	fileName: createOptionFromOptional(string, 'fileName'),
	note: createOptionFromOptional(string, 'note'),
	borrowerNote: createOptionFromOptional(string, 'borrowerNote'),
	condition: createOptionFromOptional(boolean, 'condition'),
	mergeMode: createOptionFromOptional(createEnumType<MergeModeEnum>(MergeModeEnum, 'MergeModeEnum'), 'mergeMode'),
	allPages: createOptionFromOptional(boolean, 'allPages'),
	customPages: createOptionFromOptional(array(number), 'customPages'),
	removePagesFromSource: createOptionFromOptional(boolean, 'removePagesFromSource'),
});
