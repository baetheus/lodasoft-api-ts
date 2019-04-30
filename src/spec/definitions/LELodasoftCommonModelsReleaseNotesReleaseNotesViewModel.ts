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
	id: createOptionFromNullable(number, 'id'),
	version: createOptionFromNullable(string, 'version'),
	uri: createOptionFromNullable(string, 'uri'),
	releaseDate: createOptionFromNullable(DateFromISOString, 'releaseDate'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
