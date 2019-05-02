import { Option } from 'fp-ts/lib/Option';
import { number, boolean, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	onlineApplicationSettingsId: createOptionFromNullable(number, 'onlineApplicationSettingsId'),
	eConsentDocumentTemplateId: createOptionFromNullable(number, 'eConsentDocumentTemplateId'),
	creditAuthDocumentTemplateId: createOptionFromNullable(number, 'creditAuthDocumentTemplateId'),
	showEConsentVerbiage: createOptionFromNullable(boolean, 'showEConsentVerbiage'),
	eConsentText: createOptionFromNullable(string, 'eConsentText'),
	enableEConsentDocumentGeneration: createOptionFromNullable(boolean, 'enableEConsentDocumentGeneration'),
	showCreditAuthVerbiage: createOptionFromNullable(boolean, 'showCreditAuthVerbiage'),
	creditAuthText: createOptionFromNullable(string, 'creditAuthText'),
	enableCreditAuthDocumentGeneration: createOptionFromNullable(boolean, 'enableCreditAuthDocumentGeneration'),
	enableDigitalAssetVerification: createOptionFromNullable(boolean, 'enableDigitalAssetVerification'),
	enableDigitalEmploymentVerification: createOptionFromNullable(boolean, 'enableDigitalEmploymentVerification'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
