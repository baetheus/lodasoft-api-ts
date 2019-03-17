import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsMortgageProcessDuResponseModel = {
	applicationId: Option<number>;
	primaryBorrowerId: Option<number>;
};
export const LELodasoftApiModelsMortgageProcessDuResponseModelIO = type({
	applicationId: createOptionFromNullable(number),
	primaryBorrowerId: createOptionFromNullable(number),
});
