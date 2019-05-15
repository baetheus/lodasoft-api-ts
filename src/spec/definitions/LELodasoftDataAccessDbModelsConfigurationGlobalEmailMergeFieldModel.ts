import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel = {
	mergeFieldId: Option<number>;
	mergeText: Option<string>;
	displayName: Option<string>;
	table: Option<string>;
	column: Option<string>;
	baseType: Option<string>;
};
export const LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO = type({
	mergeFieldId: createOptionFromOptional(number, 'mergeFieldId'),
	mergeText: createOptionFromOptional(string, 'mergeText'),
	displayName: createOptionFromOptional(string, 'displayName'),
	table: createOptionFromOptional(string, 'table'),
	column: createOptionFromOptional(string, 'column'),
	baseType: createOptionFromOptional(string, 'baseType'),
});
