import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsAdminWizardEverythingElseRequestModel = {
	templateCompanyId: Option<number>;
	destinationCompanyId: Option<number>;
};
export const LELodasoftApiModelsAdminWizardEverythingElseRequestModelIO = type({
	templateCompanyId: createOptionFromNullable(number),
	destinationCompanyId: createOptionFromNullable(number),
});
