import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftDataAccessDbModelsAdminInternalContactModel = {
	internalContactId: Option<number>;
	applicationId: Option<number>;
	roleId: Option<number>;
	userId: Option<string>;
};
export const LELodasoftDataAccessDbModelsAdminInternalContactModelIO = type({
	internalContactId: createOptionFromOptional(number, 'internalContactId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	roleId: createOptionFromOptional(number, 'roleId'),
	userId: createOptionFromOptional(string, 'userId'),
});
