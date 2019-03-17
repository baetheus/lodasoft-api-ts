import {
	LELodasoftCommonModelsAdminEmailTemplateImageViewModel,
	LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminEmailTemplateImageViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, union, literal, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsAdminEmailTemplateViewModel = {
	emailTemplateId: Option<number>;
	emailTemplateName: Option<string>;
	description: Option<string>;
	emailTemplateType: Option<'Loan' | 'Lead'>;
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
	emailTemplateId: createOptionFromNullable(number),
	emailTemplateName: createOptionFromNullable(string),
	description: createOptionFromNullable(string),
	emailTemplateType: createOptionFromNullable(union([literal('Loan'), literal('Lead')])),
	manualSendEnabled: createOptionFromNullable(boolean),
	emailText: createOptionFromNullable(string),
	images: createOptionFromNullable(array(LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO)),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
