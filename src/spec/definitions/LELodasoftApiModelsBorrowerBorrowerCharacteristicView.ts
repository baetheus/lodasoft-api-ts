import { Option } from 'fp-ts/lib/Option';
import { number, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsBorrowerBorrowerCharacteristicView = {
	borrowerCharacteristicId: Option<number>;
	selectedCharacteristics: Option<Array<number>>;
	applicationId: Option<number>;
	borrowerId: Option<number>;
};
export const LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO = type({
	borrowerCharacteristicId: createOptionFromNullable(number),
	selectedCharacteristics: createOptionFromNullable(array(number)),
	applicationId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
});
