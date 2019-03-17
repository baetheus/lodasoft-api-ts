import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsAdminEmailTemplateImageViewModel = {
	emailTemplateImageId: Option<number>;
	emailTemplateImageGuid: Option<string>;
	definedEmailTemplateId: Option<number>;
	emailTemplateId: Option<number>;
	mimeType: Option<string>;
	imageData: Option<string>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO = type({
	emailTemplateImageId: createOptionFromNullable(number),
	emailTemplateImageGuid: createOptionFromNullable(string),
	definedEmailTemplateId: createOptionFromNullable(number),
	emailTemplateId: createOptionFromNullable(number),
	mimeType: createOptionFromNullable(string),
	imageData: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
