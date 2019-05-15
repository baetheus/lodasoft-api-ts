import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsAdminWizardEverythingElseRequestModel = {
	templateCompanyId: Option<number>;
	destinationCompanyId: Option<number>;
};
export const LELodasoftApiModelsAdminWizardEverythingElseRequestModelIO = type({
	templateCompanyId: createOptionFromOptional(number, 'templateCompanyId'),
	destinationCompanyId: createOptionFromOptional(number, 'destinationCompanyId'),
});
