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
	id: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	mortgageId: createOptionFromNullable(number),
	currentStatus: createOptionFromNullable(number),
	currentStatusDatetime: createOptionFromNullable(DateFromISOString),
	lastSuccessfulStatus: createOptionFromNullable(number),
	lastSuccessfulStatusDatetime: createOptionFromNullable(DateFromISOString),
	currentSessionId: createOptionFromNullable(string),
	sessionCount: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
