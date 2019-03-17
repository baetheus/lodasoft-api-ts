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
	loanDocId: createOptionFromNullable(number),
	description: createOptionFromNullable(string),
	documentTypeId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	dateView: createOptionFromNullable(DateFromISOString),
	dateDownload: createOptionFromNullable(DateFromISOString),
	dateCreate: createOptionFromNullable(DateFromISOString),
	expirationDate: createOptionFromNullable(DateFromISOString),
	fileName: createOptionFromNullable(string),
	note: createOptionFromNullable(string),
	condition: createOptionFromNullable(boolean),
	borrowerID: createOptionFromNullable(number),
	userId: createOptionFromNullable(number),
	active: createOptionFromNullable(boolean),
	uploadFiles: createOptionFromNullable(array(LELodasoftDataAccessModelsAdminBorrowerFileDtoIO)),
});
