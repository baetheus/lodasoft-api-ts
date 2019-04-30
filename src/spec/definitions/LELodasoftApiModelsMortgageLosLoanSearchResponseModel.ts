import {
	LELodasoftThirdPartyLosSearchResponseItem,
	LELodasoftThirdPartyLosSearchResponseItemIO,
} from '../definitions/LELodasoftThirdPartyLosSearchResponseItem';
import { Option } from 'fp-ts/lib/Option';
import { array, boolean, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsMortgageLosLoanSearchResponseModel = {
	searchResponseItems: Option<Array<LELodasoftThirdPartyLosSearchResponseItem>>;
	success: Option<boolean>;
	validationErrors: Option<Array<string>>;
	errorMessage: Option<string>;
};
export const LELodasoftApiModelsMortgageLosLoanSearchResponseModelIO = type({
	searchResponseItems: createOptionFromNullable(
		array(LELodasoftThirdPartyLosSearchResponseItemIO),
		'searchResponseItems',
	),
	success: createOptionFromNullable(boolean, 'success'),
	validationErrors: createOptionFromNullable(array(string), 'validationErrors'),
	errorMessage: createOptionFromNullable(string, 'errorMessage'),
});
