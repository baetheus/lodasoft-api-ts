import { Option } from 'fp-ts/lib/Option';
import { dictionary, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import { createEnumType, unknownType } from '../utils/utils';

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
	level: createOptionFromNullable(createEnumType<LevelEnum>(LevelEnum, 'LevelEnum')),
	timestamp: createOptionFromNullable(DateFromISOString, 'timestamp'),
	message: createOptionFromNullable(string, 'message'),
	actionType: createOptionFromNullable(string, 'actionType'),
	origin: createOptionFromNullable(string, 'origin'),
	data: createOptionFromNullable(dictionary(string, unknownType), 'data'),
});
