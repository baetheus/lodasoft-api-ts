import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsMortgageProcessDuResponseModel = {
	applicationId: Option<number>;
	primaryBorrowerId: Option<number>;
};
export const LELodasoftApiModelsMortgageProcessDuResponseModelIO = type({
	applicationId: createOptionFromOptional(number, 'applicationId'),
	primaryBorrowerId: createOptionFromOptional(number, 'primaryBorrowerId'),
});
