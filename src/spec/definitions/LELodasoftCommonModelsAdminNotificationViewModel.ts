import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsAdminNotificationViewModel = { head: Option<string>; body: Option<string> };
export const LELodasoftCommonModelsAdminNotificationViewModelIO = type({
	head: createOptionFromNullable(string),
	body: createOptionFromNullable(string),
});
