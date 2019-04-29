import { LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower } from '../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest = {
    requestType: Option<'VOE' | 'VOI'>;
    responseFormat: Option<'Pdf' | 'Xml'>;
    referenceNumber: Option<string>;
    borrower: Option<LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower>;
};
export declare const LELodasoftThirdPartyTheWorkNumberModelsVerificationRequestIO: import("io-ts").TypeC<{
    requestType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        VOE: null;
        VOI: null;
    }>>;
    responseFormat: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        Pdf: null;
        Xml: null;
    }>>;
    referenceNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    borrower: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        middleName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        ssn: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        employer: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
            name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            code: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            alternateIdentifier: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            salaryKey: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        }>>;
    }>>;
}>;
