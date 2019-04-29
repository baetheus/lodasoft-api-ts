import { LELodasoftThirdPartyLosSearchResponseItem } from '../definitions/LELodasoftThirdPartyLosSearchResponseItem';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsMortgageLosLoanSearchResponseModel = {
    searchResponseItems: Option<Array<LELodasoftThirdPartyLosSearchResponseItem>>;
    success: Option<boolean>;
    validationErrors: Option<Array<string>>;
    errorMessage: Option<string>;
};
export declare const LELodasoftApiModelsMortgageLosLoanSearchResponseModelIO: import("io-ts").TypeC<{
    searchResponseItems: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        losIdentifier: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        loanNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        borrowerFirstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        borrowerLastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        subjectPropertyAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        subjectPropertyCity: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        subjectPropertyState: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        subjectPropertyZip: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>>;
    success: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    validationErrors: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").StringC>>;
    errorMessage: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
