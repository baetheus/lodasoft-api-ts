import {
	LELodasoftDataAccessDbModelsAdminBorrowerModel,
	LELodasoftDataAccessDbModelsAdminBorrowerModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminBorrowerModel';
import { Option } from 'fp-ts/lib/Option';
import { string, boolean, keyof, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsBorrowerBorrowerFull = {
	portalUserName: Option<string>;
	borrower: Option<LELodasoftDataAccessDbModelsAdminBorrowerModel>;
	isEdit: Option<boolean>;
	accountStatus: Option<'NotInvited' | 'Invited' | 'Live'>;
};
export const LELodasoftApiModelsBorrowerBorrowerFullIO = type({
	portalUserName: createOptionFromNullable(string, 'portalUserName'),
	borrower: createOptionFromNullable(LELodasoftDataAccessDbModelsAdminBorrowerModelIO, 'borrower'),
	isEdit: createOptionFromNullable(boolean, 'isEdit'),
	accountStatus: createOptionFromNullable(keyof({ NotInvited: null, Invited: null, Live: null }), 'accountStatus'),
});
