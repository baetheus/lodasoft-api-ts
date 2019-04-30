import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsAdminRecentApplicationView = {
	borrowerId: Option<number>;
	applicationId: Option<number>;
	displayText: Option<string>;
};
export const LELodasoftCommonModelsAdminRecentApplicationViewIO = type({
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	displayText: createOptionFromNullable(string, 'displayText'),
});
