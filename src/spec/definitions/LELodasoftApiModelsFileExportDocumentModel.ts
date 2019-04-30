import {
	LELodasoftApiModelsFileExportLoanDocModel,
	LELodasoftApiModelsFileExportLoanDocModelIO,
} from '../definitions/LELodasoftApiModelsFileExportLoanDocModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsFileExportDocumentModel = {
	documentTypeId: Option<number>;
	documentTypeName: Option<string>;
	docFiles: Option<Array<LELodasoftApiModelsFileExportLoanDocModel>>;
};
export const LELodasoftApiModelsFileExportDocumentModelIO = type({
	documentTypeId: createOptionFromNullable(number, 'documentTypeId'),
	documentTypeName: createOptionFromNullable(string, 'documentTypeName'),
	docFiles: createOptionFromNullable(array(LELodasoftApiModelsFileExportLoanDocModelIO), 'docFiles'),
});
