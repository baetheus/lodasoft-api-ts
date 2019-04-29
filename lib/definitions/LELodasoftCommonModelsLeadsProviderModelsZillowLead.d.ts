import { LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetails } from '../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetails';
import { LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuote } from '../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuote';
import { LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipient } from '../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipient';
import { LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSender } from '../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSender';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsProviderModelsZillowLead = {
    type: Option<'simple' | 'quote' | 'longForm' | 'propertyPreapproval'>;
    id: Option<string>;
    created: Option<Date>;
    source: Option<string>;
    price: Option<number>;
    conciergeStatus: Option<'Transferred' | 'AppointmentSet' | 'UnsupportedLanguage' | 'EmailRequested' | 'DoNotCall' | 'Duplicate' | 'LenderContacted' | 'NotInterested' | 'ConciergeUnsuccessful' | 'LenderMustCall'>;
    sender: Option<LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSender>;
    recipient: Option<LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipient>;
    details: Option<LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetails>;
    quote: Option<LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuote>;
};
export declare const LELodasoftCommonModelsLeadsProviderModelsZillowLeadIO: import("io-ts").TypeC<{
    type: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        simple: null;
        quote: null;
        longForm: null;
        propertyPreapproval: null;
    }>>;
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    created: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    source: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    price: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    conciergeStatus: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        Transferred: null;
        AppointmentSet: null;
        UnsupportedLanguage: null;
        EmailRequested: null;
        DoNotCall: null;
        Duplicate: null;
        LenderContacted: null;
        NotInterested: null;
        ConciergeUnsuccessful: null;
        LenderMustCall: null;
    }>>;
    sender: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        emailAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        phoneNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>;
    recipient: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        lenderId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        emailAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        phoneNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        nmlsLicense: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>;
    details: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        acceptPrepaymentPenalty: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        agentBusinessName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        agentEmailAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        agentFirstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        agentId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        agentLastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        agentPhoneNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        annualIncome: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        banks: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").StringC>>;
        cashOut: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        city: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        closingTimelineDays: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        coborrowerFirstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        coborrowerLastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        creditScoreRange: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            R_760_: null;
            R_740_759: null;
            R_720_739: null;
            R_700_719: null;
            R_680_699: null;
            R_660_679: null;
            R_640_659: null;
            R_620_639: null;
            R_600_619: null;
            R_560_599: null;
            R_300_559: null;
        }>>;
        currentBacker: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            FannieMae: null;
            FreddieMac: null;
            FHA: null;
        }>>;
        currentBalance: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        debtToIncomePercent: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        desiredPrograms: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").KeyofC<{
            Fixed30Year: null;
            Fixed20Year: null;
            Fixed15Year: null;
            Fixed10Year: null;
            ARM3: null;
            ARM5: null;
            ARM7: null;
            HomeEquity30Year: null;
            HomeEquity30YearDueIn15: null;
            HomeEquity15Year: null;
            HELOC20Year: null;
            HELOC15Year: null;
            HELOC10Year: null;
            LowOrNoDown: null;
            InterestOnly: null;
        }>>>;
        downPayment: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        fhaStreamlineEligible: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        firstTimeBuyer: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        harpEligible: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        hasAgent: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        hasBankruptcy: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        hasCoborrower: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        hasForeclosure: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        hasSecondMortgage: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        loanAmount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        loanPurpose: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            Purchase: null;
            Refinance: null;
            HomeEquity: null;
            Construction: null;
            HELOC: null;
        }>>;
        loanToValuePercent: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        message: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        monthlyDebts: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        newConstruction: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        propertyAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        propertyType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            SingleFamilyHome: null;
            TownHouse: null;
            CondoFourOrFewerStories: null;
            CondoFiveOrMoreStories: null;
            Cooperative: null;
            MobileOrManufactured: null;
            Modular: null;
            Leasehold: null;
        }>>;
        propertyUse: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            Primary: null;
            SecondaryOrVacation: null;
            InvestmentOrRental: null;
        }>>;
        propertyValue: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        quoteId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        requestId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        selfEmployed: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        stateAbbreviation: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            AK: null;
            AL: null;
            AR: null;
            AS: null;
            AZ: null;
            CA: null;
            CO: null;
            CT: null;
            DC: null;
            DE: null;
            FL: null;
            GA: null;
            GU: null;
            HI: null;
            IA: null;
            ID: null;
            IL: null;
            IN: null;
            KS: null;
            KY: null;
            LA: null;
            MA: null;
            MD: null;
            ME: null;
            MH: null;
            MI: null;
            MN: null;
            MO: null;
            MP: null;
            MS: null;
            MT: null;
            NC: null;
            ND: null;
            NE: null;
            NH: null;
            NJ: null;
            NM: null;
            NV: null;
            NY: null;
            OH: null;
            OK: null;
            OR: null;
            PA: null;
            PR: null;
            RI: null;
            SC: null;
            SD: null;
            TN: null;
            TX: null;
            UT: null;
            VA: null;
            VI: null;
            VT: null;
            WA: null;
            WI: null;
            WV: null;
            WY: null;
        }>>;
        streetAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        totalAssets: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        wantsCashOut: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        vaEligible: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        vaFirstTimeUser: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        vaHasDisability: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        veteranType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            RegularMilitary: null;
            Reserves: null;
            NationalGuard: null;
            SpouseOfRegularMilitary: null;
            SpouseOfReserveMilitary: null;
        }>>;
        yearPurchased: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        zipCode: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>;
    quote: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        rate: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        apr: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        termMonths: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        dueInMonths: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        interestOnlyMonths: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        lockDays: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        hasPrepaymentPenalty: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        jumbo: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        harp: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        lenderPaidMortgageInsurance: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        annualMortgageInsurancePercent: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        currentBackerMustBeFannieMae: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        currentBackerMustBeFreddieMac: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        lenderCredit: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        lenderCreditPercent: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        maxAllowedLTV: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    }>>;
}>;
