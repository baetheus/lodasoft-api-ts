import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsSharedBorrowerView = {
	borrowerId: Option<number>;
	borrowerName: Option<string>;
	borrowerPhone: Option<string>;
	borrowerEmail: Option<string>;
};
export const LELodasoftCommonModelsSharedBorrowerViewIO = type({
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	borrowerName: createOptionFromOptional(string, 'borrowerName'),
	borrowerPhone: createOptionFromOptional(string, 'borrowerPhone'),
	borrowerEmail: createOptionFromOptional(string, 'borrowerEmail'),
});
