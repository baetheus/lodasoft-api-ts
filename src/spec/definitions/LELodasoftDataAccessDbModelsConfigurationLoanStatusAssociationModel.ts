import {
	LELodasoftDataAccessDbModelsConfigurationLoanStatusModel,
	LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	id: createOptionFromOptional(number, 'id'),
	loanPurposeId: createOptionFromOptional(number, 'loanPurposeId'),
	loanStatusId: createOptionFromOptional(number, 'loanStatusId'),
	loanStatusModel: createOptionFromOptional(
		LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
		'loanStatusModel',
	),
	borrowerFriendlyStatus: createOptionFromOptional(string, 'borrowerFriendlyStatus'),
	borrowerFriendlyBlurb: createOptionFromOptional(string, 'borrowerFriendlyBlurb'),
	supressBorrowerNotification: createOptionFromOptional(boolean, 'supressBorrowerNotification'),
	companyId: createOptionFromOptional(number, 'companyId'),
	order: createOptionFromOptional(number, 'order'),
	associatedStatuses: createOptionFromOptional(string, 'associatedStatuses'),
	isLeadStatusAssociation: createOptionFromOptional(boolean, 'isLeadStatusAssociation'),
});
