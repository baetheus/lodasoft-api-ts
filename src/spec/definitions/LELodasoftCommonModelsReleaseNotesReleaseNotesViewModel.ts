import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	id: createOptionFromOptional(number, 'id'),
	version: createOptionFromOptional(string, 'version'),
	uri: createOptionFromOptional(string, 'uri'),
	releaseDate: createOptionFromOptional(DateFromISOString, 'releaseDate'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
