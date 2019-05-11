import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftDataAccessDbModelsAdminStackingOrderModel = {
	stakingOrderId: Option<number>;
	companyId: Option<number>;
	company: Option<LELodasoftDataAccessDbModelsConfigurationCompanyModel>;
	docType: Option<string>;
	associate: Option<string>;
};
export const LELodasoftDataAccessDbModelsAdminStackingOrderModelIO = type({
	stakingOrderId: createOptionFromOptional(number, 'stakingOrderId'),
	companyId: createOptionFromOptional(number, 'companyId'),
	company: createOptionFromOptional(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'company'),
	docType: createOptionFromOptional(string, 'docType'),
	associate: createOptionFromOptional(string, 'associate'),
});
