import { unknownType } from '../utils/utils';
import { Option } from 'fp-ts/lib/Option';
import { union, literal, string, dictionary, type } from 'io-ts';
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
		union([
			literal('Fatal'),
			literal('Error'),
			literal('Warning'),
			literal('Info'),
			literal('Debug'),
			literal('Trace'),
		]),
	),
	timestamp: createOptionFromNullable(DateFromISOString),
	message: createOptionFromNullable(string),
	actionType: createOptionFromNullable(string),
	origin: createOptionFromNullable(string),
	data: createOptionFromNullable(dictionary(string, unknownType)),
});
