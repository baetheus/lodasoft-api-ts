import {
	LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower,
	LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrowerIO,
} from '../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower';
import { Option } from 'fp-ts/lib/Option';
import { keyof, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest = {
	requestType: Option<'VOE' | 'VOI'>;
	responseFormat: Option<'Pdf' | 'Xml'>;
	referenceNumber: Option<string>;
	borrower: Option<LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower>;
};
export const LELodasoftThirdPartyTheWorkNumberModelsVerificationRequestIO = type({
	requestType: createOptionFromNullable(keyof({ VOE: null, VOI: null }), 'requestType'),
	responseFormat: createOptionFromNullable(keyof({ Pdf: null, Xml: null }), 'responseFormat'),
	referenceNumber: createOptionFromNullable(string, 'referenceNumber'),
	borrower: createOptionFromNullable(LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrowerIO, 'borrower'),
});
