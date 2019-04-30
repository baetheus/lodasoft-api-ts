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
	emailTemplateImageId: createOptionFromNullable(number, 'emailTemplateImageId'),
	emailTemplateImageGuid: createOptionFromNullable(string, 'emailTemplateImageGuid'),
	definedEmailTemplateId: createOptionFromNullable(number, 'definedEmailTemplateId'),
	emailTemplateId: createOptionFromNullable(number, 'emailTemplateId'),
	mimeType: createOptionFromNullable(string, 'mimeType'),
	imageData: createOptionFromNullable(string, 'imageData'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
