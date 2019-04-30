import { Option } from 'fp-ts/lib/Option';
import { number, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsBorrowerLoanCharacteristicView = {
	loanCharacteristicId: Option<number>;
	applicationId: Option<number>;
	selectedCharacteristics: Option<Array<number>>;
};
export const LELodasoftApiModelsBorrowerLoanCharacteristicViewIO = type({
	loanCharacteristicId: createOptionFromNullable(number, 'loanCharacteristicId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	selectedCharacteristics: createOptionFromNullable(array(number), 'selectedCharacteristics'),
});
