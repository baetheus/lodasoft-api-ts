import { unknownType } from '../utils/utils';
import { Option } from 'fp-ts/lib/Option';
import { keyof, string, dictionary, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftApiControllersLogControllerLogModel = {
	level: Option<'Fatal' | 'Error' | 'Warning' | 'Info' | 'Debug' | 'Trace'>;
	timestamp: Option<Date>;
	message: Option<string>;
	actionType: Option<string>;
	origin: Option<string>;
	data: Option<{ [key: string]: unknown }>;
};
export const LELodasoftApiControllersLogControllerLogModelIO = type({
	level: createOptionFromNullable(
		keyof({ Fatal: null, Error: null, Warning: null, Info: null, Debug: null, Trace: null }),
		'level',
	),
	timestamp: createOptionFromNullable(DateFromISOString, 'timestamp'),
	message: createOptionFromNullable(string, 'message'),
	actionType: createOptionFromNullable(string, 'actionType'),
	origin: createOptionFromNullable(string, 'origin'),
	data: createOptionFromNullable(dictionary(string, unknownType), 'data'),
});
