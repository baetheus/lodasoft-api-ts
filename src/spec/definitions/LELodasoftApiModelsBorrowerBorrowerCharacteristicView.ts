import { Option } from 'fp-ts/lib/Option';
import { number, array, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsBorrowerBorrowerCharacteristicView = {
	borrowerCharacteristicId: Option<number>;
	selectedCharacteristics: Option<Array<number>>;
	applicationId: Option<number>;
	borrowerId: Option<number>;
};
export const LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO = type({
	borrowerCharacteristicId: createOptionFromOptional(number, 'borrowerCharacteristicId'),
	selectedCharacteristics: createOptionFromOptional(array(number), 'selectedCharacteristics'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
});
