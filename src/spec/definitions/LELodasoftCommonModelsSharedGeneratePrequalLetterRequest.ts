import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	productDescription: createOptionFromOptional(string, 'productDescription'),
	address: createOptionFromOptional(string, 'address'),
	city: createOptionFromOptional(string, 'city'),
	state: createOptionFromOptional(string, 'state'),
	zip: createOptionFromOptional(string, 'zip'),
	loanAmount: createOptionFromOptional(number, 'loanAmount'),
	purchasePrice: createOptionFromOptional(number, 'purchasePrice'),
	downPayment: createOptionFromOptional(number, 'downPayment'),
	interestRate: createOptionFromOptional(number, 'interestRate'),
});
