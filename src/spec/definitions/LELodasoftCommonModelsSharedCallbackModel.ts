import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsSharedCallbackModel = {
	applicationId: Option<number>;
	bestContactNumber: Option<string>;
	note: Option<string>;
	bestCallbackTime: Option<Date>;
};
export const LELodasoftCommonModelsSharedCallbackModelIO = type({
	applicationId: createOptionFromOptional(number, 'applicationId'),
	bestContactNumber: createOptionFromOptional(string, 'bestContactNumber'),
	note: createOptionFromOptional(string, 'note'),
	bestCallbackTime: createOptionFromOptional(DateFromDatelike, 'bestCallbackTime'),
});
