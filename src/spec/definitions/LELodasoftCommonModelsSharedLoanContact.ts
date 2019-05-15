import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsSharedLoanContact = {
	userId: Option<string>;
	name: Option<string>;
	title: Option<string>;
	phone: Option<string>;
	email: Option<string>;
	avatarUrl: Option<string>;
	order: Option<number>;
};
export const LELodasoftCommonModelsSharedLoanContactIO = type({
	userId: createOptionFromOptional(string, 'userId'),
	name: createOptionFromOptional(string, 'name'),
	title: createOptionFromOptional(string, 'title'),
	phone: createOptionFromOptional(string, 'phone'),
	email: createOptionFromOptional(string, 'email'),
	avatarUrl: createOptionFromOptional(string, 'avatarUrl'),
	order: createOptionFromOptional(number, 'order'),
});
