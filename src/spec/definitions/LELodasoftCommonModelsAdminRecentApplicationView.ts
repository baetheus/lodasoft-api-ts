import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsAdminRecentApplicationView = {
	borrowerId: Option<number>;
	applicationId: Option<number>;
	displayText: Option<string>;
};
export const LELodasoftCommonModelsAdminRecentApplicationViewIO = type({
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	displayText: createOptionFromOptional(string, 'displayText'),
});
