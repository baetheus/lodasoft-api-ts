import {
	LELodasoftCommonModelsSharedLiveData,
	LELodasoftCommonModelsSharedLiveDataIO,
} from '../definitions/LELodasoftCommonModelsSharedLiveData';
import { Option } from 'fp-ts/lib/Option';
import { string, dictionary, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedPortalLiveData = {
	total: Option<LELodasoftCommonModelsSharedLiveData>;
	applicationTotals: Option<{ [key: string]: LELodasoftCommonModelsSharedLiveData }>;
};
export const LELodasoftCommonModelsSharedPortalLiveDataIO = type({
	total: createOptionFromNullable(LELodasoftCommonModelsSharedLiveDataIO, 'total'),
	applicationTotals: createOptionFromNullable(
		dictionary(string, LELodasoftCommonModelsSharedLiveDataIO),
		'applicationTotals',
	),
});
