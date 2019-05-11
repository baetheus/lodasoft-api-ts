import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsAdminNotificationViewModel = { head: Option<string>; body: Option<string> };
export const LELodasoftCommonModelsAdminNotificationViewModelIO = type({
	head: createOptionFromOptional(string, 'head'),
	body: createOptionFromOptional(string, 'body'),
});
