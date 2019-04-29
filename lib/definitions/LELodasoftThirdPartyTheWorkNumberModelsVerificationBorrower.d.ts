import { LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer } from '../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower = {
    firstName: Option<string>;
    middleName: Option<string>;
    lastName: Option<string>;
    ssn: Option<string>;
    employer: Option<LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer>;
};
export declare const LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrowerIO: import("io-ts").TypeC<{
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
}>;
