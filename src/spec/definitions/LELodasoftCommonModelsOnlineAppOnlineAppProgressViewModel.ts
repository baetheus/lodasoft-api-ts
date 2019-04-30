import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	id: createOptionFromNullable(number, 'id'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	mortgageId: createOptionFromNullable(number, 'mortgageId'),
	currentStatus: createOptionFromNullable(number, 'currentStatus'),
	currentStatusDatetime: createOptionFromNullable(DateFromISOString, 'currentStatusDatetime'),
	lastSuccessfulStatus: createOptionFromNullable(number, 'lastSuccessfulStatus'),
	lastSuccessfulStatusDatetime: createOptionFromNullable(DateFromISOString, 'lastSuccessfulStatusDatetime'),
	currentSessionId: createOptionFromNullable(string, 'currentSessionId'),
	sessionCount: createOptionFromNullable(number, 'sessionCount'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
