import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsSharedPortalContentViewModel = {
    companyId: Option<number>;
    userId: Option<string>;
    aboutUsContent: Option<string>;
    referralContent: Option<string>;
    showReferralTerms: Option<boolean>;
    referralTermsContent: Option<string>;
    showPrequalLetterGeneration: Option<boolean>;
};
export declare const LELodasoftApiModelsSharedPortalContentViewModelIO: import("io-ts").TypeC<{
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    aboutUsContent: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    referralContent: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    showReferralTerms: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    referralTermsContent: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    showPrequalLetterGeneration: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
}>;
