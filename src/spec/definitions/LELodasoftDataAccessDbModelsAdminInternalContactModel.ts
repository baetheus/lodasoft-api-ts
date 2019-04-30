import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsAdminInternalContactModel = {
	internalContactId: Option<number>;
	applicationId: Option<number>;
	roleId: Option<number>;
	userId: Option<string>;
};
export const LELodasoftDataAccessDbModelsAdminInternalContactModelIO = type({
	internalContactId: createOptionFromNullable(number, 'internalContactId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	roleId: createOptionFromNullable(number, 'roleId'),
	userId: createOptionFromNullable(string, 'userId'),
});
