import {
	LELodasoftDataAccessDbModelsConfigurationLoanStatusModel,
	LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel = {
	id: Option<number>;
	loanPurposeId: Option<number>;
	loanStatusId: Option<number>;
	loanStatusModel: Option<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>;
	borrowerFriendlyStatus: Option<string>;
	borrowerFriendlyBlurb: Option<string>;
	supressBorrowerNotification: Option<boolean>;
	companyId: Option<number>;
	order: Option<number>;
	associatedStatuses: Option<string>;
	isLeadStatusAssociation: Option<boolean>;
};
export const LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO = type({
	id: createOptionFromNullable(number, 'id'),
	loanPurposeId: createOptionFromNullable(number, 'loanPurposeId'),
	loanStatusId: createOptionFromNullable(number, 'loanStatusId'),
	loanStatusModel: createOptionFromNullable(
		LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
		'loanStatusModel',
	),
	borrowerFriendlyStatus: createOptionFromNullable(string, 'borrowerFriendlyStatus'),
	borrowerFriendlyBlurb: createOptionFromNullable(string, 'borrowerFriendlyBlurb'),
	supressBorrowerNotification: createOptionFromNullable(boolean, 'supressBorrowerNotification'),
	companyId: createOptionFromNullable(number, 'companyId'),
	order: createOptionFromNullable(number, 'order'),
	associatedStatuses: createOptionFromNullable(string, 'associatedStatuses'),
	isLeadStatusAssociation: createOptionFromNullable(boolean, 'isLeadStatusAssociation'),
});
