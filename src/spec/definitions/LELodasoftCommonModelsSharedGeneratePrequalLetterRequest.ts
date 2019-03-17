import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedGeneratePrequalLetterRequest = {
	productDescription: Option<string>;
	address: Option<string>;
	city: Option<string>;
	state: Option<string>;
	zip: Option<string>;
	loanAmount: Option<number>;
	purchasePrice: Option<number>;
	downPayment: Option<number>;
	interestRate: Option<number>;
};
export const LELodasoftCommonModelsSharedGeneratePrequalLetterRequestIO = type({
	productDescription: createOptionFromNullable(string),
	address: createOptionFromNullable(string),
	city: createOptionFromNullable(string),
	state: createOptionFromNullable(string),
	zip: createOptionFromNullable(string),
	loanAmount: createOptionFromNullable(number),
	purchasePrice: createOptionFromNullable(number),
	downPayment: createOptionFromNullable(number),
	interestRate: createOptionFromNullable(number),
});
