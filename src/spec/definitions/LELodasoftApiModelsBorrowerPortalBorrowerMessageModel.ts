import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsBorrowerPortalBorrowerMessageModel = {
	applicationId: Option<number>;
	loanDocTaskId: Option<number>;
	messageText: Option<string>;
};
export const LELodasoftApiModelsBorrowerPortalBorrowerMessageModelIO = type({
	applicationId: createOptionFromNullable(number),
	loanDocTaskId: createOptionFromNullable(number),
	messageText: createOptionFromNullable(string),
});
