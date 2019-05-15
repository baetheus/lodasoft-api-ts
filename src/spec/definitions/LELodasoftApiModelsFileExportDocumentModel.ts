import {
	LELodasoftApiModelsFileExportLoanDocModel,
	LELodasoftApiModelsFileExportLoanDocModelIO,
} from '../definitions/LELodasoftApiModelsFileExportLoanDocModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsFileExportDocumentModel = {
	documentTypeId: Option<number>;
	documentTypeName: Option<string>;
	docFiles: Option<Array<LELodasoftApiModelsFileExportLoanDocModel>>;
};
export const LELodasoftApiModelsFileExportDocumentModelIO = type({
	documentTypeId: createOptionFromOptional(number, 'documentTypeId'),
	documentTypeName: createOptionFromOptional(string, 'documentTypeName'),
	docFiles: createOptionFromOptional(array(LELodasoftApiModelsFileExportLoanDocModelIO), 'docFiles'),
});
