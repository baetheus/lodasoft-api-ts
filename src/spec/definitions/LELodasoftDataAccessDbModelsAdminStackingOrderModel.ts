import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsAdminStackingOrderModel = {
	stakingOrderId: Option<number>;
	companyId: Option<number>;
	company: Option<LELodasoftDataAccessDbModelsConfigurationCompanyModel>;
	docType: Option<string>;
	associate: Option<string>;
};
export const LELodasoftDataAccessDbModelsAdminStackingOrderModelIO = type({
	stakingOrderId: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	company: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO),
	docType: createOptionFromNullable(string),
	associate: createOptionFromNullable(string),
});
