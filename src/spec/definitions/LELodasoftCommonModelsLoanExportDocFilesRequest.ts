import { Option } from 'fp-ts/lib/Option';
import { string, array, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsLoanExportDocFilesRequest = { docFileGuids: Option<Array<string>> };
export const LELodasoftCommonModelsLoanExportDocFilesRequestIO = type({
	docFileGuids: createOptionFromOptional(array(string), 'docFileGuids'),
});
