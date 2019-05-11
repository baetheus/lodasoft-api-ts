import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsSharedLiveData = {
	applicationId: Option<number>;
	taskCount: Option<number>;
	messageCount: Option<number>;
};
export const LELodasoftCommonModelsSharedLiveDataIO = type({
	applicationId: createOptionFromOptional(number, 'applicationId'),
	taskCount: createOptionFromOptional(number, 'taskCount'),
	messageCount: createOptionFromOptional(number, 'messageCount'),
});
