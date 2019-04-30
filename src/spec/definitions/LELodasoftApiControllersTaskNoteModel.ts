import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiControllersTaskNoteModel = { note: Option<string>; borrowerNote: Option<string> };
export const LELodasoftApiControllersTaskNoteModelIO = type({
	note: createOptionFromNullable(string, 'note'),
	borrowerNote: createOptionFromNullable(string, 'borrowerNote'),
});
