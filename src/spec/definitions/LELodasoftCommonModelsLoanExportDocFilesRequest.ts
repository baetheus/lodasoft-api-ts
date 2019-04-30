import { Option } from 'fp-ts/lib/Option';
import { string, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLoanExportDocFilesRequest = { docFileGuids: Option<Array<string>> };
export const LELodasoftCommonModelsLoanExportDocFilesRequestIO = type({
	docFileGuids: createOptionFromNullable(array(string), 'docFileGuids'),
});
