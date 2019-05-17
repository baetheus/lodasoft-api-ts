import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';

import {
	LELodasoftCommonModelsAdminEmailTemplateImageViewModel,
	LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminEmailTemplateImageViewModel';

export enum EmailTemplateTypeEnum {
	'Loan',
	'Lead',
}

export type LELodasoftCommonModelsAdminEmailTemplateViewModel = {
	emailTemplateId: Option<number>;
	emailTemplateName: Option<string>;
	description: Option<string>;
	emailTemplateType: Option<EmailTemplateTypeEnum>;
	manualSendEnabled: Option<boolean>;
	emailText: Option<string>;
	images: Option<Array<LELodasoftCommonModelsAdminEmailTemplateImageViewModel>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsAdminEmailTemplateViewModelIO = type({
	emailTemplateId: createOptionFromOptional(number, 'emailTemplateId'),
	emailTemplateName: createOptionFromOptional(string, 'emailTemplateName'),
	description: createOptionFromOptional(string, 'description'),
	emailTemplateType: createOptionFromOptional(
		createEnumType<EmailTemplateTypeEnum>(EmailTemplateTypeEnum, 'EmailTemplateTypeEnum'),
		'emailTemplateType',
	),
	manualSendEnabled: createOptionFromOptional(boolean, 'manualSendEnabled'),
	emailText: createOptionFromOptional(string, 'emailText'),
	images: createOptionFromOptional(array(LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO), 'images'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
