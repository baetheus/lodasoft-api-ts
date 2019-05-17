import { Option } from 'fp-ts/lib/Option';
import { number, boolean, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftDataAccessDbModelsConfigurationOnlineApplicationSettingsModel = {
	onlineApplicationSettingsId: Option<number>;
	eConsentDocumentTemplateId: Option<number>;
	creditAuthDocumentTemplateId: Option<number>;
	showEConsentVerbiage: Option<boolean>;
	eConsentText: Option<string>;
	enableEConsentDocumentGeneration: Option<boolean>;
	showCreditAuthVerbiage: Option<boolean>;
	creditAuthText: Option<string>;
	enableCreditAuthDocumentGeneration: Option<boolean>;
	enableDigitalAssetVerification: Option<boolean>;
	enableDigitalEmploymentVerification: Option<boolean>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftDataAccessDbModelsConfigurationOnlineApplicationSettingsModelIO = type({
	onlineApplicationSettingsId: createOptionFromOptional(number, 'onlineApplicationSettingsId'),
	eConsentDocumentTemplateId: createOptionFromOptional(number, 'eConsentDocumentTemplateId'),
	creditAuthDocumentTemplateId: createOptionFromOptional(number, 'creditAuthDocumentTemplateId'),
	showEConsentVerbiage: createOptionFromOptional(boolean, 'showEConsentVerbiage'),
	eConsentText: createOptionFromOptional(string, 'eConsentText'),
	enableEConsentDocumentGeneration: createOptionFromOptional(boolean, 'enableEConsentDocumentGeneration'),
	showCreditAuthVerbiage: createOptionFromOptional(boolean, 'showCreditAuthVerbiage'),
	creditAuthText: createOptionFromOptional(string, 'creditAuthText'),
	enableCreditAuthDocumentGeneration: createOptionFromOptional(boolean, 'enableCreditAuthDocumentGeneration'),
	enableDigitalAssetVerification: createOptionFromOptional(boolean, 'enableDigitalAssetVerification'),
	enableDigitalEmploymentVerification: createOptionFromOptional(boolean, 'enableDigitalEmploymentVerification'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
