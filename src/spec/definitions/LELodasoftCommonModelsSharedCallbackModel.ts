import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsSharedCallbackModel = {
	applicationId: Option<number>;
	bestContactNumber: Option<string>;
	note: Option<string>;
	bestCallbackTime: Option<Date>;
};
export const LELodasoftCommonModelsSharedCallbackModelIO = type({
	applicationId: createOptionFromNullable(number, 'applicationId'),
	bestContactNumber: createOptionFromNullable(string, 'bestContactNumber'),
	note: createOptionFromNullable(string, 'note'),
	bestCallbackTime: createOptionFromNullable(DateFromISOString, 'bestCallbackTime'),
});
