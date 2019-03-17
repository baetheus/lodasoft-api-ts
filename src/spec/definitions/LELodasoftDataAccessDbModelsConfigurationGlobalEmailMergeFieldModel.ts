import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel = {
	mergeFieldId: Option<number>;
	mergeText: Option<string>;
	displayName: Option<string>;
	table: Option<string>;
	column: Option<string>;
	baseType: Option<string>;
};
export const LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO = type({
	mergeFieldId: createOptionFromNullable(number),
	mergeText: createOptionFromNullable(string),
	displayName: createOptionFromNullable(string),
	table: createOptionFromNullable(string),
	column: createOptionFromNullable(string),
	baseType: createOptionFromNullable(string),
});
