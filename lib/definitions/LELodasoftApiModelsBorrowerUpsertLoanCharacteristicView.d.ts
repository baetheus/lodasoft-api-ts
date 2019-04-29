import { LELodasoftApiModelsBorrowerLoanCharacteristicView } from '../definitions/LELodasoftApiModelsBorrowerLoanCharacteristicView';
import { LELodasoftCommonModelsLoanLoanDocTaskViewModel } from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsBorrowerUpsertLoanCharacteristicView = {
    loanCharacteristic: Option<LELodasoftApiModelsBorrowerLoanCharacteristicView>;
    loanDocTasks: Option<Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>>;
};
export declare const LELodasoftApiModelsBorrowerUpsertLoanCharacteristicViewIO: import("io-ts").TypeC<{
    loanCharacteristic: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        loanCharacteristicId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        selectedCharacteristics: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
    }>>;
    loanDocTasks: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        loanDocTaskId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        leadId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        borrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        taskId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        customTaskId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        loanDocId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        documentTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        roleId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        notifyPartyId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        reviewPartyId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        templateDocumentUrl: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        taskType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            RequestDocument: null;
            ViewDocument: null;
            AcknowledgeReceipt: null;
            EsignDocument: null;
            RequestInformation: null;
            PerformAction: null;
            OnlineApplication: null;
            DigitalAssetVerification: null;
        }>>;
        taskPriority: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            Low: null;
            Normal: null;
            High: null;
            Immediate: null;
        }>>;
        description: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        note: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        borrowerFacingNote: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        requestedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dueDays: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        taskStatus: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            Pending: null;
            Submitted: null;
            Rejected: null;
            Approved: null;
            NotApplicable: null;
            Requested: null;
            Completed: null;
            ReviewReady: null;
        }>>;
        conditionStatus: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            ConditionPending: null;
            ConditionCleared: null;
            ConditionReOpened: null;
        }>>;
        conditionType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            PTS: null;
            PTD: null;
            PTF: null;
            PTC: null;
        }>>;
        requestBorrower: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        condition: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        requiresReview: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        requestDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        dueDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        submittedDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        acknowledgementDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        completeDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        followUpDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        active: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        taskModel: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
            taskId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            taskName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            triggerAssociations: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            borrowerTrigger: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
                Loan: null;
                PrimaryBorrower: null;
                AllBorrowers: null;
                SelectBorrowers: null;
            }>>;
            isLeadTask: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
            roleId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            documentTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            reviewRequiredRoleId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            notifyPartyRoleId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            taskType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
                RequestDocument: null;
                ViewDocument: null;
                AcknowledgeReceipt: null;
                EsignDocument: null;
                RequestInformation: null;
                PerformAction: null;
                OnlineApplication: null;
                DigitalAssetVerification: null;
            }>>;
            defaultTaskPriority: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
                Low: null;
                Normal: null;
                High: null;
                Immediate: null;
            }>>;
            dueDays: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            permittedAgentTypes: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            tasksOnCompletion: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            documentDataHeader: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            documentData: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            docDataString: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            requestBorrower: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
            alwaysShowPending: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
            companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
            updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        }>>;
        customTaskModel: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
            customTaskId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            taskCategoryId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            loanStatusId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            taskDescription: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            option: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
                Immediately: null;
                OnLoanStatus: null;
            }>>;
            applyTo: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
                Loan: null;
                PrimaryBorrower: null;
                SelectBorrowers: null;
            }>>;
            roleId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            documentTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            reviewRequiredRoleId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            notifyPartyRoleId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            taskType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
                RequestDocument: null;
                ViewDocument: null;
                AcknowledgeReceipt: null;
                EsignDocument: null;
                RequestInformation: null;
                PerformAction: null;
                OnlineApplication: null;
                DigitalAssetVerification: null;
            }>>;
            defaultTaskPriority: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
                Low: null;
                Normal: null;
                High: null;
                Immediate: null;
            }>>;
            dueDays: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            permittedAgentTypes: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            tasksOnCompletion: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            documentDataHeader: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            documentData: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            docDataString: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            requestBorrower: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
            alwaysShowPending: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
            companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
            updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        }>>;
        loanDocModel: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
            loanDocId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            borrowerID: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            documentTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            description: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            note: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            expirationDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
            retask: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
            active: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
            docFiles: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
                guid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
                loanDocId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
                applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
                borrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
                documentTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
                note: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
                borrowerNote: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
                condition: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
                fileName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
                mimeType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
                fileData: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
                createDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
                exportDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
                active: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
            }>>>;
        }>>;
        companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    }>>>;
}>;
