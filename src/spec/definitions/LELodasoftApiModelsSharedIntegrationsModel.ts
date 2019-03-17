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
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsSharedIntegrationsModel = {
	zillow: Option<LELodasoftApiModelsSharedZillow>;
	leadPoint: Option<LELodasoftApiModelsSharedLeadPoint>;
	onlineApplications: Option<LELodasoftApiModelsSharedOnlineApplicationsModel>;
	thirdPartyCredentials: Option<Array<LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel>>;
};
export const LELodasoftApiModelsSharedIntegrationsModelIO = type({
	zillow: createOptionFromNullable(LELodasoftApiModelsSharedZillowIO),
	leadPoint: createOptionFromNullable(LELodasoftApiModelsSharedLeadPointIO),
	onlineApplications: createOptionFromNullable(LELodasoftApiModelsSharedOnlineApplicationsModelIO),
	thirdPartyCredentials: createOptionFromNullable(
		array(LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO),
	),
});
