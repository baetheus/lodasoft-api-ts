import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsAdminChecklistAnswerViewModel = {
    checklistAnswerId: Option<number>;
    answerText: Option<string>;
    answerId: Option<number>;
    applicationId: number;
    checkListId: number;
    questionId: number;
    loanDocTaskId: Option<number>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsAdminChecklistAnswerViewModelIO: import("io-ts").TypeC<{
    checklistAnswerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    answerText: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    answerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    applicationId: import("io-ts").NumberC;
    checkListId: import("io-ts").NumberC;
    questionId: import("io-ts").NumberC;
    loanDocTaskId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
