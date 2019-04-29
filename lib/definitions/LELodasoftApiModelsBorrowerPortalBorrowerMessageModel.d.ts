import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsBorrowerPortalBorrowerMessageModel = {
    applicationId: Option<number>;
    loanDocTaskId: Option<number>;
    messageText: Option<string>;
};
export declare const LELodasoftApiModelsBorrowerPortalBorrowerMessageModelIO: import("io-ts").TypeC<{
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    loanDocTaskId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    messageText: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
