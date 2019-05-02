import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

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
	sourceDocFileGuid: createOptionFromNullable(string, 'sourceDocFileGuid'),
	destinationDocFileGuid: createOptionFromNullable(string, 'destinationDocFileGuid'),
	destinationLoanDocId: createOptionFromNullable(number, 'destinationLoanDocId'),
	destinationLoanDocTaskId: createOptionFromNullable(number, 'destinationLoanDocTaskId'),
	documentTypeId: createOptionFromNullable(number, 'documentTypeId'),
	description: createOptionFromNullable(string, 'description'),
	fileName: createOptionFromNullable(string, 'fileName'),
	note: createOptionFromNullable(string, 'note'),
	borrowerNote: createOptionFromNullable(string, 'borrowerNote'),
	condition: createOptionFromNullable(boolean, 'condition'),
	mergeMode: createOptionFromNullable(createEnumType<MergeModeEnum>(MergeModeEnum, 'MergeModeEnum'), 'mergeMode'),
	allPages: createOptionFromNullable(boolean, 'allPages'),
	customPages: createOptionFromNullable(array(number), 'customPages'),
	removePagesFromSource: createOptionFromNullable(boolean, 'removePagesFromSource'),
});
