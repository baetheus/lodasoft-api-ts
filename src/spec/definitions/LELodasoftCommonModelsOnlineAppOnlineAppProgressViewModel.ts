import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	currentStatusDatetime: createOptionFromOptional(DateFromDatelike, 'currentStatusDatetime'),
	lastSuccessfulStatus: createOptionFromOptional(number, 'lastSuccessfulStatus'),
	lastSuccessfulStatusDatetime: createOptionFromOptional(DateFromDatelike, 'lastSuccessfulStatusDatetime'),
	currentSessionId: createOptionFromOptional(string, 'currentSessionId'),
	sessionCount: createOptionFromOptional(number, 'sessionCount'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
