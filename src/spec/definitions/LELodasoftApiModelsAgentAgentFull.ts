import {
	LELodasoftCommonModelsAdminAgentViewModel,
	LELodasoftCommonModelsAdminAgentViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminAgentViewModel';
import { Option } from 'fp-ts/lib/Option';
import { string, number, boolean, union, literal, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsAgentAgentFull = {
	agent: Option<LELodasoftCommonModelsAdminAgentViewModel>;
	portalUserName: Option<string>;
	agentTypeId: Option<number>;
	isEdit: Option<boolean>;
	accountStatus: Option<'NotInvited' | 'Invited' | 'Live'>;
};
export const LELodasoftApiModelsAgentAgentFullIO = type({
	agent: createOptionFromNullable(LELodasoftCommonModelsAdminAgentViewModelIO),
	portalUserName: createOptionFromNullable(string),
	agentTypeId: createOptionFromNullable(number),
	isEdit: createOptionFromNullable(boolean),
	accountStatus: createOptionFromNullable(union([literal('NotInvited'), literal('Invited'), literal('Live')])),
});
