import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

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
	userId: createOptionFromNullable(string),
	name: createOptionFromNullable(string),
	title: createOptionFromNullable(string),
	phone: createOptionFromNullable(string),
	email: createOptionFromNullable(string),
	avatarUrl: createOptionFromNullable(string),
	order: createOptionFromNullable(number),
});
