import { Option } from 'fp-ts/lib/Option';
import { string, number, boolean, keyof, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

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
	mergeMode: Option<'Append' | 'Prepend' | 'Replace'>;
	allPages: Option<boolean>;
	customPages: Option<Array<number>>;
	removePagesFromSource: Option<boolean>;
};
export const LELodasoftCommonModelsLoanMergeDocFilesInstructionIO = type({
	sourceDocFileGuid: createOptionFromNullable(string),
	destinationDocFileGuid: createOptionFromNullable(string),
	destinationLoanDocId: createOptionFromNullable(number),
	destinationLoanDocTaskId: createOptionFromNullable(number),
	documentTypeId: createOptionFromNullable(number),
	description: createOptionFromNullable(string),
	fileName: createOptionFromNullable(string),
	note: createOptionFromNullable(string),
	borrowerNote: createOptionFromNullable(string),
	condition: createOptionFromNullable(boolean),
	mergeMode: createOptionFromNullable(keyof({ Append: null, Prepend: null, Replace: null })),
	allPages: createOptionFromNullable(boolean),
	customPages: createOptionFromNullable(array(number)),
	removePagesFromSource: createOptionFromNullable(boolean),
});
