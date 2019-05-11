import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel = {
	id: Option<number>;
	applicationId: Option<number>;
	mortgageId: Option<number>;
	currentStatus: Option<number>;
	currentStatusDatetime: Option<Date>;
	lastSuccessfulStatus: Option<number>;
	lastSuccessfulStatusDatetime: Option<Date>;
	currentSessionId: Option<string>;
	sessionCount: Option<number>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModelIO = type({
	id: createOptionFromOptional(number, 'id'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	mortgageId: createOptionFromOptional(number, 'mortgageId'),
	currentStatus: createOptionFromOptional(number, 'currentStatus'),
	currentStatusDatetime: createOptionFromOptional(DateFromISOString, 'currentStatusDatetime'),
	lastSuccessfulStatus: createOptionFromOptional(number, 'lastSuccessfulStatus'),
	lastSuccessfulStatusDatetime: createOptionFromOptional(DateFromISOString, 'lastSuccessfulStatusDatetime'),
	currentSessionId: createOptionFromOptional(string, 'currentSessionId'),
	sessionCount: createOptionFromOptional(number, 'sessionCount'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
