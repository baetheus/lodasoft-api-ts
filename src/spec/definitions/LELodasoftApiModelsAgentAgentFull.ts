import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';

import {
	LELodasoftCommonModelsAdminAgentViewModel,
	LELodasoftCommonModelsAdminAgentViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminAgentViewModel';

export enum AccountStatusEnum {
	'NotInvited',
	'Invited',
	'Live',
}

export type LELodasoftApiModelsAgentAgentFull = {
	agent: Option<LELodasoftCommonModelsAdminAgentViewModel>;
	portalUserName: Option<string>;
	agentTypeId: Option<number>;
	isEdit: Option<boolean>;
	accountStatus: Option<AccountStatusEnum>;
};
export const LELodasoftApiModelsAgentAgentFullIO = type({
	agent: createOptionFromOptional(LELodasoftCommonModelsAdminAgentViewModelIO, 'agent'),
	portalUserName: createOptionFromOptional(string, 'portalUserName'),
	agentTypeId: createOptionFromOptional(number, 'agentTypeId'),
	isEdit: createOptionFromOptional(boolean, 'isEdit'),
	accountStatus: createOptionFromOptional(
		createEnumType<AccountStatusEnum>(AccountStatusEnum, 'AccountStatusEnum'),
		'accountStatus',
	),
});
