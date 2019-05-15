import {
	LELodasoftCommonModelsSharedLiveData,
	LELodasoftCommonModelsSharedLiveDataIO,
} from '../definitions/LELodasoftCommonModelsSharedLiveData';
import { Option } from 'fp-ts/lib/Option';
import { string, dictionary, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsSharedPortalLiveData = {
	total: Option<LELodasoftCommonModelsSharedLiveData>;
	applicationTotals: Option<{ [key: string]: LELodasoftCommonModelsSharedLiveData }>;
};
export const LELodasoftCommonModelsSharedPortalLiveDataIO = type({
	total: createOptionFromOptional(LELodasoftCommonModelsSharedLiveDataIO, 'total'),
	applicationTotals: createOptionFromOptional(
		dictionary(string, LELodasoftCommonModelsSharedLiveDataIO),
		'applicationTotals',
	),
});
