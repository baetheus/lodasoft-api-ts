import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel = {
	id: Option<number>;
	version: Option<string>;
	uri: Option<string>;
	releaseDate: Option<Date>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO = type({
	id: createOptionFromNullable(number),
	version: createOptionFromNullable(string),
	uri: createOptionFromNullable(string),
	releaseDate: createOptionFromNullable(DateFromISOString),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
