import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsConfigurationBorrowerPortalContentModel = {
    id: Option<number>;
    companyId: Option<number>;
    userId: Option<string>;
    aboutUsContent: Option<string>;
    referralContent: Option<string>;
    showReferralTerms: Option<boolean>;
    referralTermsContent: Option<string>;
};
export declare const LELodasoftDataAccessDbModelsConfigurationBorrowerPortalContentModelIO: import("io-ts").TypeC<{
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    aboutUsContent: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    referralContent: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    showReferralTerms: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    referralTermsContent: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
