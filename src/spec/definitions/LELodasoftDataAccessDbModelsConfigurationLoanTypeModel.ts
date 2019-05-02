import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';
import { createEnumType } from '../utils/utils';

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
	loanTypeId: createOptionFromNullable(number, 'loanTypeId'),
	loanTypeName: createOptionFromNullable(string, 'loanTypeName'),
	mortgageAppliedForType: createOptionFromNullable(
		createEnumType<MortgageAppliedForTypeEnum>(MortgageAppliedForTypeEnum, 'MortgageAppliedForTypeEnum'),
		'mortgageAppliedForType',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	companyModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'companyModel'),
	showInOnlineApp: createOptionFromNullable(boolean, 'showInOnlineApp'),
	defaultForOnlineApp: createOptionFromNullable(boolean, 'defaultForOnlineApp'),
	order: createOptionFromNullable(number, 'order'),
});
