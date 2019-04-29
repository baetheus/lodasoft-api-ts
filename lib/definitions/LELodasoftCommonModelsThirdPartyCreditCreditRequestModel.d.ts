import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsThirdPartyCreditCreditRequestModel = {
    applicationId: number;
    borrowerIds: Array<number>;
    pullType: 'Individual' | 'Joint';
    creditVendor: 'MeridianLink' | 'CoreLogicCredco';
    creditRequestType: 'Submit' | 'Reissue' | 'Upgrade';
    experian: boolean;
    equifax: boolean;
    transUnion: boolean;
    creditReferenceNumber: Option<string>;
};
export declare const LELodasoftCommonModelsThirdPartyCreditCreditRequestModelIO: import("io-ts").TypeC<{
    applicationId: import("io-ts").NumberC;
    borrowerIds: import("io-ts").ArrayC<import("io-ts").NumberC>;
    pullType: import("io-ts").KeyofC<{
        Individual: null;
        Joint: null;
    }>;
    creditVendor: import("io-ts").KeyofC<{
        MeridianLink: null;
        CoreLogicCredco: null;
    }>;
    creditRequestType: import("io-ts").KeyofC<{
        Submit: null;
        Reissue: null;
        Upgrade: null;
    }>;
    experian: import("io-ts").BooleanC;
    equifax: import("io-ts").BooleanC;
    transUnion: import("io-ts").BooleanC;
    creditReferenceNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
