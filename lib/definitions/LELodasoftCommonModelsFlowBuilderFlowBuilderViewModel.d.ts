import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel = {
    id: Option<number>;
    flowType: 'Unspecified' | 'LeadPost' | 'OnlineApplication' | 'ContactStrategy';
    title: string;
    comment: string;
    data: Option<string>;
    flowGuid: Option<string>;
    active: boolean;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO: import("io-ts").TypeC<{
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    flowType: import("io-ts").KeyofC<{
        Unspecified: null;
        LeadPost: null;
        OnlineApplication: null;
        ContactStrategy: null;
    }>;
    title: import("io-ts").StringC;
    comment: import("io-ts").StringC;
    data: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    flowGuid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    active: import("io-ts").BooleanC;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
