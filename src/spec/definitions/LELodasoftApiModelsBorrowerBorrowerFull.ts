import {
	LELodasoftDataAccessDbModelsAdminBorrowerModel,
	LELodasoftDataAccessDbModelsAdminBorrowerModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminBorrowerModel';
import { Option } from 'fp-ts/lib/Option';
import { string, boolean, union, literal, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsBorrowerBorrowerFull = {
	portalUserName: Option<string>;
	borrower: Option<LELodasoftDataAccessDbModelsAdminBorrowerModel>;
	isEdit: Option<boolean>;
	accountStatus: Option<'NotInvited' | 'Invited' | 'Live'>;
};
export const LELodasoftApiModelsBorrowerBorrowerFullIO = type({
	portalUserName: createOptionFromNullable(string),
	borrower: createOptionFromNullable(LELodasoftDataAccessDbModelsAdminBorrowerModelIO),
	isEdit: createOptionFromNullable(boolean),
	accountStatus: createOptionFromNullable(union([literal('NotInvited'), literal('Invited'), literal('Live')])),
});
