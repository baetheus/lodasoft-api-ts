import {
	LELodasoftDataAccessModelsAdminBorrowerFileDto,
	LELodasoftDataAccessModelsAdminBorrowerFileDtoIO,
} from '../definitions/LELodasoftDataAccessModelsAdminBorrowerFileDto';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, array, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsBorrowerLoanDocDto = {
	loanDocId: Option<number>;
	description: Option<string>;
	documentTypeId: Option<number>;
	applicationId: Option<number>;
	dateView: Option<Date>;
	dateDownload: Option<Date>;
	dateCreate: Option<Date>;
	expirationDate: Option<Date>;
	fileName: Option<string>;
	note: Option<string>;
	condition: Option<boolean>;
	borrowerID: Option<number>;
	userId: Option<number>;
	active: Option<boolean>;
	uploadFiles: Option<Array<LELodasoftDataAccessModelsAdminBorrowerFileDto>>;
};
export const LELodasoftApiModelsBorrowerLoanDocDtoIO = type({
	loanDocId: createOptionFromOptional(number, 'loanDocId'),
	description: createOptionFromOptional(string, 'description'),
	documentTypeId: createOptionFromOptional(number, 'documentTypeId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	dateView: createOptionFromOptional(DateFromDatelike, 'dateView'),
	dateDownload: createOptionFromOptional(DateFromDatelike, 'dateDownload'),
	dateCreate: createOptionFromOptional(DateFromDatelike, 'dateCreate'),
	expirationDate: createOptionFromOptional(DateFromDatelike, 'expirationDate'),
	fileName: createOptionFromOptional(string, 'fileName'),
	note: createOptionFromOptional(string, 'note'),
	condition: createOptionFromOptional(boolean, 'condition'),
	borrowerID: createOptionFromOptional(number, 'borrowerID'),
	userId: createOptionFromOptional(number, 'userId'),
	active: createOptionFromOptional(boolean, 'active'),
	uploadFiles: createOptionFromOptional(array(LELodasoftDataAccessModelsAdminBorrowerFileDtoIO), 'uploadFiles'),
});
