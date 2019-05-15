import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsBorrowerPortalBorrowerMessageModel = {
	applicationId: Option<number>;
	loanDocTaskId: Option<number>;
	messageText: Option<string>;
};
export const LELodasoftApiModelsBorrowerPortalBorrowerMessageModelIO = type({
	applicationId: createOptionFromOptional(number, 'applicationId'),
	loanDocTaskId: createOptionFromOptional(number, 'loanDocTaskId'),
	messageText: createOptionFromOptional(string, 'messageText'),
});
