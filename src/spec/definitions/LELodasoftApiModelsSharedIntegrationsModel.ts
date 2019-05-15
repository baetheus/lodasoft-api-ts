import {
	LELodasoftApiModelsSharedLeadPoint,
	LELodasoftApiModelsSharedLeadPointIO,
} from '../definitions/LELodasoftApiModelsSharedLeadPoint';
import {
	LELodasoftApiModelsSharedOnlineApplicationsModel,
	LELodasoftApiModelsSharedOnlineApplicationsModelIO,
} from '../definitions/LELodasoftApiModelsSharedOnlineApplicationsModel';
import {
	LELodasoftApiModelsSharedZillow,
	LELodasoftApiModelsSharedZillowIO,
} from '../definitions/LELodasoftApiModelsSharedZillow';
import {
	LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel,
	LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO,
} from '../definitions/LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel';
import { Option } from 'fp-ts/lib/Option';
import { array, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsSharedIntegrationsModel = {
	zillow: Option<LELodasoftApiModelsSharedZillow>;
	leadPoint: Option<LELodasoftApiModelsSharedLeadPoint>;
	onlineApplications: Option<LELodasoftApiModelsSharedOnlineApplicationsModel>;
	thirdPartyCredentials: Option<Array<LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel>>;
};
export const LELodasoftApiModelsSharedIntegrationsModelIO = type({
	zillow: createOptionFromOptional(LELodasoftApiModelsSharedZillowIO, 'zillow'),
	leadPoint: createOptionFromOptional(LELodasoftApiModelsSharedLeadPointIO, 'leadPoint'),
	onlineApplications: createOptionFromOptional(
		LELodasoftApiModelsSharedOnlineApplicationsModelIO,
		'onlineApplications',
	),
	thirdPartyCredentials: createOptionFromOptional(
		array(LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO),
		'thirdPartyCredentials',
	),
});
