import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsAdminQuestionTaskAnswerDto = {
    questionAnswerId: Option<number>;
    questionId: Option<number>;
    companyId: Option<number>;
    answerText: Option<string>;
    sortValue: Option<number>;
    require: Option<boolean>;
    tableName: Option<string>;
    columnName: Option<string>;
    dataType: Option<'Immediately' | 'OnLoanStatus' | 'Private' | 'Group' | 'Public' | 'Al' | 'Event' | 'ToDo' | 'Appointment' | 'AutoApply' | 'Confirm' | 'RequestQuantity' | 'LoanCharacteristic' | 'BorrowerCharacteristic' | 'LessThan' | 'LessThanOrEqualTo' | 'EqualTo' | 'GreatherThan' | 'GreaterThanOrEqualTo' | 'NullOrEmpty' | 'NotNullOrEmpty' | 'StartsWith' | 'Contains' | 'DoesNotContain' | 'In' | 'NotIn' | 'YesNo' | 'TrueFalse' | 'OnOff' | 'Text' | 'Integer' | 'Decimal' | 'MultiSelect' | 'SelectList' | 'Value' | 'Docvalue' | 'DataValidation' | 'DocumentValidation' | 'ManualValidation' | 'Pdf' | 'Doc' | 'Txt' | 'Excel' | 'Csv' | 'Img' | 'ApplyToLoan' | 'ApplyToPrimaryBorrower' | 'ApplyToSelectBorrowers' | 'ChangeStatus' | 'Uploadfile' | 'DeleteFile' | 'DownloadFile' | 'ExportFile' | 'FileNoteUpdated' | 'BorrowerNoteUpdated' | 'DeleteTask' | 'RemoveFileFromTrash' | 'ConditionStatusChange' | 'CreateTask' | 'RestoreTask' | 'MergeFile' | 'PostponeTask' | 'ChangeFollowUpDate' | 'ChangeDueDate' | 'ViewFile' | 'FileNameChanged' | 'ChangeConditionFlag' | 'ChangeDescription' | 'ChangeNotifyParty' | 'ChangePriority' | 'ChangeResponsibleParty' | 'ChangeReviewRequired' | 'InternalMessageAlert' | 'BorrowerMessageAlert' | 'TaskStatusAlert' | 'GeneralAlert' | 'LoanStatusAlert' | 'FailedEmailAlert' | 'FailedSmsAlert'>;
    comparisonType: Option<'Immediately' | 'OnLoanStatus' | 'Private' | 'Group' | 'Public' | 'Al' | 'Event' | 'ToDo' | 'Appointment' | 'AutoApply' | 'Confirm' | 'RequestQuantity' | 'LoanCharacteristic' | 'BorrowerCharacteristic' | 'LessThan' | 'LessThanOrEqualTo' | 'EqualTo' | 'GreatherThan' | 'GreaterThanOrEqualTo' | 'NullOrEmpty' | 'NotNullOrEmpty' | 'StartsWith' | 'Contains' | 'DoesNotContain' | 'In' | 'NotIn' | 'YesNo' | 'TrueFalse' | 'OnOff' | 'Text' | 'Integer' | 'Decimal' | 'MultiSelect' | 'SelectList' | 'Value' | 'Docvalue' | 'DataValidation' | 'DocumentValidation' | 'ManualValidation' | 'Pdf' | 'Doc' | 'Txt' | 'Excel' | 'Csv' | 'Img' | 'ApplyToLoan' | 'ApplyToPrimaryBorrower' | 'ApplyToSelectBorrowers' | 'ChangeStatus' | 'Uploadfile' | 'DeleteFile' | 'DownloadFile' | 'ExportFile' | 'FileNoteUpdated' | 'BorrowerNoteUpdated' | 'DeleteTask' | 'RemoveFileFromTrash' | 'ConditionStatusChange' | 'CreateTask' | 'RestoreTask' | 'MergeFile' | 'PostponeTask' | 'ChangeFollowUpDate' | 'ChangeDueDate' | 'ViewFile' | 'FileNameChanged' | 'ChangeConditionFlag' | 'ChangeDescription' | 'ChangeNotifyParty' | 'ChangePriority' | 'ChangeResponsibleParty' | 'ChangeReviewRequired' | 'InternalMessageAlert' | 'BorrowerMessageAlert' | 'TaskStatusAlert' | 'GeneralAlert' | 'LoanStatusAlert' | 'FailedEmailAlert' | 'FailedSmsAlert'>;
    compareValue: Option<string>;
    documentTypeId: Option<number>;
    exist: Option<boolean>;
    qaTaskId: Option<Array<number>>;
};
export declare const LELodasoftApiModelsAdminQuestionTaskAnswerDtoIO: import("io-ts").TypeC<{
    questionAnswerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    questionId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    answerText: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    sortValue: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    require: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    tableName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    columnName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dataType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        Immediately: null;
        OnLoanStatus: null;
        Private: null;
        Group: null;
        Public: null;
        Al: null;
        Event: null;
        ToDo: null;
        Appointment: null;
        AutoApply: null;
        Confirm: null;
        RequestQuantity: null;
        LoanCharacteristic: null;
        BorrowerCharacteristic: null;
        LessThan: null;
        LessThanOrEqualTo: null;
        EqualTo: null;
        GreatherThan: null;
        GreaterThanOrEqualTo: null;
        NullOrEmpty: null;
        NotNullOrEmpty: null;
        StartsWith: null;
        Contains: null;
        DoesNotContain: null;
        In: null;
        NotIn: null;
        YesNo: null;
        TrueFalse: null;
        OnOff: null;
        Text: null;
        Integer: null;
        Decimal: null;
        MultiSelect: null;
        SelectList: null;
        Value: null;
        Docvalue: null;
        DataValidation: null;
        DocumentValidation: null;
        ManualValidation: null;
        Pdf: null;
        Doc: null;
        Txt: null;
        Excel: null;
        Csv: null;
        Img: null;
        ApplyToLoan: null;
        ApplyToPrimaryBorrower: null;
        ApplyToSelectBorrowers: null;
        ChangeStatus: null;
        Uploadfile: null;
        DeleteFile: null;
        DownloadFile: null;
        ExportFile: null;
        FileNoteUpdated: null;
        BorrowerNoteUpdated: null;
        DeleteTask: null;
        RemoveFileFromTrash: null;
        ConditionStatusChange: null;
        CreateTask: null;
        RestoreTask: null;
        MergeFile: null;
        PostponeTask: null;
        ChangeFollowUpDate: null;
        ChangeDueDate: null;
        ViewFile: null;
        FileNameChanged: null;
        ChangeConditionFlag: null;
        ChangeDescription: null;
        ChangeNotifyParty: null;
        ChangePriority: null;
        ChangeResponsibleParty: null;
        ChangeReviewRequired: null;
        InternalMessageAlert: null;
        BorrowerMessageAlert: null;
        TaskStatusAlert: null;
        GeneralAlert: null;
        LoanStatusAlert: null;
        FailedEmailAlert: null;
        FailedSmsAlert: null;
    }>>;
    comparisonType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        Immediately: null;
        OnLoanStatus: null;
        Private: null;
        Group: null;
        Public: null;
        Al: null;
        Event: null;
        ToDo: null;
        Appointment: null;
        AutoApply: null;
        Confirm: null;
        RequestQuantity: null;
        LoanCharacteristic: null;
        BorrowerCharacteristic: null;
        LessThan: null;
        LessThanOrEqualTo: null;
        EqualTo: null;
        GreatherThan: null;
        GreaterThanOrEqualTo: null;
        NullOrEmpty: null;
        NotNullOrEmpty: null;
        StartsWith: null;
        Contains: null;
        DoesNotContain: null;
        In: null;
        NotIn: null;
        YesNo: null;
        TrueFalse: null;
        OnOff: null;
        Text: null;
        Integer: null;
        Decimal: null;
        MultiSelect: null;
        SelectList: null;
        Value: null;
        Docvalue: null;
        DataValidation: null;
        DocumentValidation: null;
        ManualValidation: null;
        Pdf: null;
        Doc: null;
        Txt: null;
        Excel: null;
        Csv: null;
        Img: null;
        ApplyToLoan: null;
        ApplyToPrimaryBorrower: null;
        ApplyToSelectBorrowers: null;
        ChangeStatus: null;
        Uploadfile: null;
        DeleteFile: null;
        DownloadFile: null;
        ExportFile: null;
        FileNoteUpdated: null;
        BorrowerNoteUpdated: null;
        DeleteTask: null;
        RemoveFileFromTrash: null;
        ConditionStatusChange: null;
        CreateTask: null;
        RestoreTask: null;
        MergeFile: null;
        PostponeTask: null;
        ChangeFollowUpDate: null;
        ChangeDueDate: null;
        ViewFile: null;
        FileNameChanged: null;
        ChangeConditionFlag: null;
        ChangeDescription: null;
        ChangeNotifyParty: null;
        ChangePriority: null;
        ChangeResponsibleParty: null;
        ChangeReviewRequired: null;
        InternalMessageAlert: null;
        BorrowerMessageAlert: null;
        TaskStatusAlert: null;
        GeneralAlert: null;
        LoanStatusAlert: null;
        FailedEmailAlert: null;
        FailedSmsAlert: null;
    }>>;
    compareValue: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    documentTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    exist: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    qaTaskId: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
}>;
