import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

import {
	LELodasoftCommonModelsAdminAgentViewModel,
	LELodasoftCommonModelsAdminAgentViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminAgentViewModel';
import { createEnumType } from '../utils/utils';

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
	agent: createOptionFromNullable(LELodasoftCommonModelsAdminAgentViewModelIO, 'agent'),
	portalUserName: createOptionFromNullable(string, 'portalUserName'),
	agentTypeId: createOptionFromNullable(number, 'agentTypeId'),
	isEdit: createOptionFromNullable(boolean, 'isEdit'),
	accountStatus: createOptionFromNullable(
		createEnumType<AccountStatusEnum>(AccountStatusEnum, 'AccountStatusEnum'),
		'accountStatus',
	),
});
