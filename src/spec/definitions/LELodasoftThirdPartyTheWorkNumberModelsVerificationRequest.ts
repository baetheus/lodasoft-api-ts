import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

import {
	LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower,
	LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrowerIO,
} from '../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower';
import { createEnumType } from '@nll/utils-ts/lib/io';

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
	requestType: createOptionFromOptional(
		createEnumType<RequestTypeEnum>(RequestTypeEnum, 'RequestTypeEnum'),
		'requestType',
	),
	responseFormat: createOptionFromOptional(
		createEnumType<ResponseFormatEnum>(ResponseFormatEnum, 'ResponseFormatEnum'),
		'responseFormat',
	),
	referenceNumber: createOptionFromOptional(string, 'referenceNumber'),
	borrower: createOptionFromOptional(LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrowerIO, 'borrower'),
});
