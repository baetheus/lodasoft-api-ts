import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';

import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';

export enum MortgageAppliedForTypeEnum {
	'VA',
	'FHA',
	'Conventional',
	'USDARuralHousingService',
	'OtherMortgage',
}

export type LELodasoftDataAccessDbModelsConfigurationLoanTypeModel = {
	loanTypeId: Option<number>;
	loanTypeName: Option<string>;
	mortgageAppliedForType: Option<MortgageAppliedForTypeEnum>;
	companyId: Option<number>;
	companyModel: Option<LELodasoftDataAccessDbModelsConfigurationCompanyModel>;
	showInOnlineApp: Option<boolean>;
	defaultForOnlineApp: Option<boolean>;
	order: Option<number>;
};
export const LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO = type({
	loanTypeId: createOptionFromOptional(number, 'loanTypeId'),
	loanTypeName: createOptionFromOptional(string, 'loanTypeName'),
	mortgageAppliedForType: createOptionFromOptional(
		createEnumType<MortgageAppliedForTypeEnum>(MortgageAppliedForTypeEnum, 'MortgageAppliedForTypeEnum'),
		'mortgageAppliedForType',
	),
	companyId: createOptionFromOptional(number, 'companyId'),
	companyModel: createOptionFromOptional(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'companyModel'),
	showInOnlineApp: createOptionFromOptional(boolean, 'showInOnlineApp'),
	defaultForOnlineApp: createOptionFromOptional(boolean, 'defaultForOnlineApp'),
	order: createOptionFromOptional(number, 'order'),
});
