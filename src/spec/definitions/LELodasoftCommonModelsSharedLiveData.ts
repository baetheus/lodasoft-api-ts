import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedLiveData = {
	applicationId: Option<number>;
	taskCount: Option<number>;
	messageCount: Option<number>;
};
export const LELodasoftCommonModelsSharedLiveDataIO = type({
	applicationId: createOptionFromNullable(number, 'applicationId'),
	taskCount: createOptionFromNullable(number, 'taskCount'),
	messageCount: createOptionFromNullable(number, 'messageCount'),
});
