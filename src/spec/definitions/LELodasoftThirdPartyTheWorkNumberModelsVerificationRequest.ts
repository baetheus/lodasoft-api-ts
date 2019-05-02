import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

import {
	LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower,
	LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrowerIO,
} from '../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower';
import { createEnumType } from '../utils/utils';

export enum RequestTypeEnum {
	'VOE',
	'VOI',
}

export enum ResponseFormatEnum {
	'Pdf',
	'Xml',
}

export type LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest = {
	requestType: Option<RequestTypeEnum>;
	responseFormat: Option<ResponseFormatEnum>;
	referenceNumber: Option<string>;
	borrower: Option<LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower>;
};
export const LELodasoftThirdPartyTheWorkNumberModelsVerificationRequestIO = type({
	requestType: createOptionFromNullable(
		createEnumType<RequestTypeEnum>(RequestTypeEnum, 'RequestTypeEnum'),
		'requestType',
	),
	responseFormat: createOptionFromNullable(
		createEnumType<ResponseFormatEnum>(ResponseFormatEnum, 'ResponseFormatEnum'),
		'responseFormat',
	),
	referenceNumber: createOptionFromNullable(string, 'referenceNumber'),
	borrower: createOptionFromNullable(LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrowerIO, 'borrower'),
});
