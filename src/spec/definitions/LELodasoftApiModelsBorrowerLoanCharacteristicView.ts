import { Option } from 'fp-ts/lib/Option';
import { number, array, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsBorrowerLoanCharacteristicView = {
	loanCharacteristicId: Option<number>;
	applicationId: Option<number>;
	selectedCharacteristics: Option<Array<number>>;
};
export const LELodasoftApiModelsBorrowerLoanCharacteristicViewIO = type({
	loanCharacteristicId: createOptionFromOptional(number, 'loanCharacteristicId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	selectedCharacteristics: createOptionFromOptional(array(number), 'selectedCharacteristics'),
});
