import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedBorrowerView = {
	borrowerId: Option<number>;
	borrowerName: Option<string>;
	borrowerPhone: Option<string>;
	borrowerEmail: Option<string>;
};
export const LELodasoftCommonModelsSharedBorrowerViewIO = type({
	borrowerId: createOptionFromNullable(number),
	borrowerName: createOptionFromNullable(string),
	borrowerPhone: createOptionFromNullable(string),
	borrowerEmail: createOptionFromNullable(string),
});
