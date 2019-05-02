import { Option } from 'fp-ts/lib/Option';
import { boolean, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

import {
	LELodasoftDataAccessDbModelsAdminBorrowerModel,
	LELodasoftDataAccessDbModelsAdminBorrowerModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminBorrowerModel';
import { createEnumType } from '../utils/utils';

export enum AccountStatusEnum {
	'NotInvited',
	'Invited',
	'Live',
}

export type LELodasoftApiModelsBorrowerBorrowerFull = {
	portalUserName: Option<string>;
	borrower: Option<LELodasoftDataAccessDbModelsAdminBorrowerModel>;
	isEdit: Option<boolean>;
	accountStatus: Option<AccountStatusEnum>;
};
export const LELodasoftApiModelsBorrowerBorrowerFullIO = type({
	portalUserName: createOptionFromNullable(string, 'portalUserName'),
	borrower: createOptionFromNullable(LELodasoftDataAccessDbModelsAdminBorrowerModelIO, 'borrower'),
	isEdit: createOptionFromNullable(boolean, 'isEdit'),
	accountStatus: createOptionFromNullable(
		createEnumType<AccountStatusEnum>(AccountStatusEnum, 'AccountStatusEnum'),
		'accountStatus',
	),
});
