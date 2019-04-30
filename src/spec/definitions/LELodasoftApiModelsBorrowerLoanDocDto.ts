import {
	LELodasoftDataAccessModelsAdminBorrowerFileDto,
	LELodasoftDataAccessModelsAdminBorrowerFileDtoIO,
} from '../definitions/LELodasoftDataAccessModelsAdminBorrowerFileDto';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	loanDocId: createOptionFromNullable(number, 'loanDocId'),
	description: createOptionFromNullable(string, 'description'),
	documentTypeId: createOptionFromNullable(number, 'documentTypeId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	dateView: createOptionFromNullable(DateFromISOString, 'dateView'),
	dateDownload: createOptionFromNullable(DateFromISOString, 'dateDownload'),
	dateCreate: createOptionFromNullable(DateFromISOString, 'dateCreate'),
	expirationDate: createOptionFromNullable(DateFromISOString, 'expirationDate'),
	fileName: createOptionFromNullable(string, 'fileName'),
	note: createOptionFromNullable(string, 'note'),
	condition: createOptionFromNullable(boolean, 'condition'),
	borrowerID: createOptionFromNullable(number, 'borrowerID'),
	userId: createOptionFromNullable(number, 'userId'),
	active: createOptionFromNullable(boolean, 'active'),
	uploadFiles: createOptionFromNullable(array(LELodasoftDataAccessModelsAdminBorrowerFileDtoIO), 'uploadFiles'),
});
