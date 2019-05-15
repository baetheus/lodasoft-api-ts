import {
	LELodasoftThirdPartyLosSearchResponseItem,
	LELodasoftThirdPartyLosSearchResponseItemIO,
} from '../definitions/LELodasoftThirdPartyLosSearchResponseItem';
import { Option } from 'fp-ts/lib/Option';
import { array, boolean, string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftApiModelsMortgageLosLoanSearchResponseModel = {
	searchResponseItems: Option<Array<LELodasoftThirdPartyLosSearchResponseItem>>;
	success: Option<boolean>;
	validationErrors: Option<Array<string>>;
	errorMessage: Option<string>;
};
export const LELodasoftApiModelsMortgageLosLoanSearchResponseModelIO = type({
	searchResponseItems: createOptionFromOptional(
		array(LELodasoftThirdPartyLosSearchResponseItemIO),
		'searchResponseItems',
	),
	success: createOptionFromOptional(boolean, 'success'),
	validationErrors: createOptionFromOptional(array(string), 'validationErrors'),
	errorMessage: createOptionFromOptional(string, 'errorMessage'),
});
