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
	productDescription: createOptionFromNullable(string, 'productDescription'),
	address: createOptionFromNullable(string, 'address'),
	city: createOptionFromNullable(string, 'city'),
	state: createOptionFromNullable(string, 'state'),
	zip: createOptionFromNullable(string, 'zip'),
	loanAmount: createOptionFromNullable(number, 'loanAmount'),
	purchasePrice: createOptionFromNullable(number, 'purchasePrice'),
	downPayment: createOptionFromNullable(number, 'downPayment'),
	interestRate: createOptionFromNullable(number, 'interestRate'),
});
