import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiControllersTaskNoteModel = { note: Option<string>; borrowerNote: Option<string> };
export const LELodasoftApiControllersTaskNoteModelIO = type({
	note: createOptionFromOptional(string, 'note'),
	borrowerNote: createOptionFromOptional(string, 'borrowerNote'),
});
