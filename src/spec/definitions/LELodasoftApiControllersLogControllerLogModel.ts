import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { dictionary, string, type } from 'io-ts';

import { unknownType } from '../utils/utils';

export enum LevelEnum {
	'Fatal',
	'Error',
	'Warning',
	'Info',
	'Debug',
	'Trace',
}

export type LELodasoftApiControllersLogControllerLogModel = {
	level: Option<LevelEnum>;
	timestamp: Option<Date>;
	message: Option<string>;
	actionType: Option<string>;
	origin: Option<string>;
	data: Option<{ [key: string]: unknown }>;
};
export const LELodasoftApiControllersLogControllerLogModelIO = type({
	level: createOptionFromOptional(createEnumType<LevelEnum>(LevelEnum, 'LevelEnum')),
	timestamp: createOptionFromOptional(DateFromDatelike, 'timestamp'),
	message: createOptionFromOptional(string, 'message'),
	actionType: createOptionFromOptional(string, 'actionType'),
	origin: createOptionFromOptional(string, 'origin'),
	data: createOptionFromOptional(dictionary(string, unknownType), 'data'),
});
