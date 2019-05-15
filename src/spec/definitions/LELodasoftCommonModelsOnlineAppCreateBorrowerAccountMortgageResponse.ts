import {
	LELodasoftCommonModelsAuthenticationTokenResponseModel,
	LELodasoftCommonModelsAuthenticationTokenResponseModelIO,
} from '../definitions/LELodasoftCommonModelsAuthenticationTokenResponseModel';
import { Option } from 'fp-ts/lib/Option';
import { number, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponse = {
	borrowerId: Option<number>;
	applicationId: Option<number>;
	userExists: Option<boolean>;
	userMustConfirmRegistration: Option<boolean>;
	authToken: Option<LELodasoftCommonModelsAuthenticationTokenResponseModel>;
};
export const LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponseIO = type({
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	userExists: createOptionFromOptional(boolean, 'userExists'),
	userMustConfirmRegistration: createOptionFromOptional(boolean, 'userMustConfirmRegistration'),
	authToken: createOptionFromOptional(LELodasoftCommonModelsAuthenticationTokenResponseModelIO, 'authToken'),
});
