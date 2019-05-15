import { Option } from 'fp-ts/lib/Option';
import { boolean, string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

import {
	LELodasoftDataAccessDbModelsAdminBorrowerModel,
	LELodasoftDataAccessDbModelsAdminBorrowerModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminBorrowerModel';
import { createEnumType } from '@nll/utils-ts/lib/io';

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
	portalUserName: createOptionFromOptional(string, 'portalUserName'),
	borrower: createOptionFromOptional(LELodasoftDataAccessDbModelsAdminBorrowerModelIO, 'borrower'),
	isEdit: createOptionFromOptional(boolean, 'isEdit'),
	accountStatus: createOptionFromOptional(
		createEnumType<AccountStatusEnum>(AccountStatusEnum, 'AccountStatusEnum'),
		'accountStatus',
	),
});
