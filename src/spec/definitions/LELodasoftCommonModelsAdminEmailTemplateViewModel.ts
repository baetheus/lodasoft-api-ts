import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import {
	LELodasoftCommonModelsAdminEmailTemplateImageViewModel,
	LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminEmailTemplateImageViewModel';
import { createEnumType } from '../utils/utils';

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
	emailTemplateId: createOptionFromNullable(number, 'emailTemplateId'),
	emailTemplateName: createOptionFromNullable(string, 'emailTemplateName'),
	description: createOptionFromNullable(string, 'description'),
	emailTemplateType: createOptionFromNullable(
		createEnumType<EmailTemplateTypeEnum>(EmailTemplateTypeEnum, 'EmailTemplateTypeEnum'),
		'emailTemplateType',
	),
	manualSendEnabled: createOptionFromNullable(boolean, 'manualSendEnabled'),
	emailText: createOptionFromNullable(string, 'emailText'),
	images: createOptionFromNullable(array(LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO), 'images'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
