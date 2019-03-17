import {
	LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower,
	LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrowerIO,
} from '../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower';
import { Option } from 'fp-ts/lib/Option';
import { union, literal, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest = {
	requestType: Option<'VOE' | 'VOI'>;
	responseFormat: Option<'Pdf' | 'Xml'>;
	referenceNumber: Option<string>;
	borrower: Option<LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower>;
};
export const LELodasoftThirdPartyTheWorkNumberModelsVerificationRequestIO = type({
	requestType: createOptionFromNullable(union([literal('VOE'), literal('VOI')])),
	responseFormat: createOptionFromNullable(union([literal('Pdf'), literal('Xml')])),
	referenceNumber: createOptionFromNullable(string),
	borrower: createOptionFromNullable(LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrowerIO),
});
