import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';

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
	emailTemplateImageId: createOptionFromOptional(number, 'emailTemplateImageId'),
	emailTemplateImageGuid: createOptionFromOptional(string, 'emailTemplateImageGuid'),
	definedEmailTemplateId: createOptionFromOptional(number, 'definedEmailTemplateId'),
	emailTemplateId: createOptionFromOptional(number, 'emailTemplateId'),
	mimeType: createOptionFromOptional(string, 'mimeType'),
	imageData: createOptionFromOptional(string, 'imageData'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
