import * as t from 'io-ts';

export interface IncomeViewModel {
  incomeId?: number;
  borrowerId?: number;
  employmentId?: number;
  employmentModel?: EmploymentViewModel;
  reoId?: number;
  reoModel?: ReoViewModel;
  monthlyIncome?: number;
  typeOfIncome?:
    | 'AlimonyChildSupport'
    | 'AutomobileExpenseAccount'
    | 'Base'
    | 'Bonus'
    | 'Commissions'
    | 'DividendsInterest'
    | 'FosterCare'
    | 'NetRentalIncome'
    | 'NotesReceivableInstallment'
    | 'OtherTypesOfIncome'
    | 'Overtime'
    | 'Pension'
    | 'SocialSecurity'
    | 'SubjectPropertyNetCashFlow'
    | 'Trust'
    | 'Unemployment'
    | 'PublicAssistance'
    | 'VABenefitsNonEducational'
    | 'MortgageDifferential'
    | 'MilitaryBasePay'
    | 'MilitaryRationsAllowance'
    | 'MilitaryFlightPay'
    | 'MilitaryHazardPay'
    | 'MilitaryClothesAllowance'
    | 'MilitaryQuartersAllowance'
    | 'MilitaryPropPay'
    | 'MilitaryOverseasPay'
    | 'MilitaryCombatPay'
    | 'MilitaryVariableHousingAllowance'
    | 'AccessoryUnitIncome'
    | 'NonBorrowerHouseholdIncome'
    | 'HousingChoiceVoucher'
    | 'BoarderIncome'
    | 'MortgateCreditCertificate'
    | 'CapitalGains'
    | 'EmploymentRelatedAssets'
    | 'ForeignIncome'
    | 'RoyaltyPayment'
    | 'SeasonalIncome'
    | 'TemporaryLeave'
    | 'TipIncome';
  categoryOfIncome?:
    | 'Employment'
    | 'IndependentContractor'
    | 'MilitaryPay'
    | 'Rental'
    | 'SocialSecurity'
    | 'Pension'
    | 'BuisnessSelfEmployment'
    | 'Other';
  fromCreditReport?: boolean;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export interface IncomeViewModelOutput {
  incomeId?: number;
  borrowerId?: number;
  employmentId?: number;
  employmentModel?: EmploymentViewModel;
  reoId?: number;
  reoModel?: ReoViewModel;
  monthlyIncome?: number;
  typeOfIncome?:
    | 'AlimonyChildSupport'
    | 'AutomobileExpenseAccount'
    | 'Base'
    | 'Bonus'
    | 'Commissions'
    | 'DividendsInterest'
    | 'FosterCare'
    | 'NetRentalIncome'
    | 'NotesReceivableInstallment'
    | 'OtherTypesOfIncome'
    | 'Overtime'
    | 'Pension'
    | 'SocialSecurity'
    | 'SubjectPropertyNetCashFlow'
    | 'Trust'
    | 'Unemployment'
    | 'PublicAssistance'
    | 'VABenefitsNonEducational'
    | 'MortgageDifferential'
    | 'MilitaryBasePay'
    | 'MilitaryRationsAllowance'
    | 'MilitaryFlightPay'
    | 'MilitaryHazardPay'
    | 'MilitaryClothesAllowance'
    | 'MilitaryQuartersAllowance'
    | 'MilitaryPropPay'
    | 'MilitaryOverseasPay'
    | 'MilitaryCombatPay'
    | 'MilitaryVariableHousingAllowance'
    | 'AccessoryUnitIncome'
    | 'NonBorrowerHouseholdIncome'
    | 'HousingChoiceVoucher'
    | 'BoarderIncome'
    | 'MortgateCreditCertificate'
    | 'CapitalGains'
    | 'EmploymentRelatedAssets'
    | 'ForeignIncome'
    | 'RoyaltyPayment'
    | 'SeasonalIncome'
    | 'TemporaryLeave'
    | 'TipIncome';
  categoryOfIncome?:
    | 'Employment'
    | 'IndependentContractor'
    | 'MilitaryPay'
    | 'Rental'
    | 'SocialSecurity'
    | 'Pension'
    | 'BuisnessSelfEmployment'
    | 'Other';
  fromCreditReport?: boolean;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const IncomeViewModel: t.Type<
  IncomeViewModel,
  IncomeViewModelOutput
> = t.recursion('IncomeViewModel', () =>
  t.partial({
    incomeId: t.number,
    borrowerId: t.number,
    employmentId: t.number,
    employmentModel: EmploymentViewModel,
    reoId: t.number,
    reoModel: ReoViewModel,
    monthlyIncome: t.number,
    typeOfIncome: t.keyof({
      AlimonyChildSupport: null,
      AutomobileExpenseAccount: null,
      Base: null,
      Bonus: null,
      Commissions: null,
      DividendsInterest: null,
      FosterCare: null,
      NetRentalIncome: null,
      NotesReceivableInstallment: null,
      OtherTypesOfIncome: null,
      Overtime: null,
      Pension: null,
      SocialSecurity: null,
      SubjectPropertyNetCashFlow: null,
      Trust: null,
      Unemployment: null,
      PublicAssistance: null,
      VABenefitsNonEducational: null,
      MortgageDifferential: null,
      MilitaryBasePay: null,
      MilitaryRationsAllowance: null,
      MilitaryFlightPay: null,
      MilitaryHazardPay: null,
      MilitaryClothesAllowance: null,
      MilitaryQuartersAllowance: null,
      MilitaryPropPay: null,
      MilitaryOverseasPay: null,
      MilitaryCombatPay: null,
      MilitaryVariableHousingAllowance: null,
      AccessoryUnitIncome: null,
      NonBorrowerHouseholdIncome: null,
      HousingChoiceVoucher: null,
      BoarderIncome: null,
      MortgateCreditCertificate: null,
      CapitalGains: null,
      EmploymentRelatedAssets: null,
      ForeignIncome: null,
      RoyaltyPayment: null,
      SeasonalIncome: null,
      TemporaryLeave: null,
      TipIncome: null,
    }),
    categoryOfIncome: t.keyof({
      Employment: null,
      IndependentContractor: null,
      MilitaryPay: null,
      Rental: null,
      SocialSecurity: null,
      Pension: null,
      BuisnessSelfEmployment: null,
      Other: null,
    }),
    fromCreditReport: t.boolean,
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  })
);

export interface EmploymentViewModel {
  employmentId?: number;
  borrowerId?: number;
  addressId?: number;
  employer?: string;
  employerEmail?: string;
  employerPhone?: string;
  employmentType?: 'CurrentEmployer' | 'FormerEmployer';
  selfEmployed?: boolean;
  isPrimary?: boolean;
  position?: string;
  startDate?: string;
  endDate?: string;
  yearsOnJob?: number;
  monthsOnJob?: number;
  yearsInLineOfWork?: number;
  fromCreditReport?: boolean;
  address?: AddressViewModel;
  incomes?: Array<IncomeViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export interface EmploymentViewModelOutput {
  employmentId?: number;
  borrowerId?: number;
  addressId?: number;
  employer?: string;
  employerEmail?: string;
  employerPhone?: string;
  employmentType?: 'CurrentEmployer' | 'FormerEmployer';
  selfEmployed?: boolean;
  isPrimary?: boolean;
  position?: string;
  startDate?: string;
  endDate?: string;
  yearsOnJob?: number;
  monthsOnJob?: number;
  yearsInLineOfWork?: number;
  fromCreditReport?: boolean;
  address?: AddressViewModel;
  incomes?: Array<IncomeViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const EmploymentViewModel: t.Type<
  EmploymentViewModel,
  EmploymentViewModelOutput
> = t.recursion('EmploymentViewModel', () =>
  t.partial({
    employmentId: t.number,
    borrowerId: t.number,
    addressId: t.number,
    employer: t.string,
    employerEmail: t.string,
    employerPhone: t.string,
    employmentType: t.keyof({
      CurrentEmployer: null,
      FormerEmployer: null,
    }),
    selfEmployed: t.boolean,
    isPrimary: t.boolean,
    position: t.string,
    startDate: t.string,
    endDate: t.string,
    yearsOnJob: t.number,
    monthsOnJob: t.number,
    yearsInLineOfWork: t.number,
    fromCreditReport: t.boolean,
    address: AddressViewModel,
    incomes: t.array(IncomeViewModel),
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  })
);

export interface UserInfoViewModel {
  userName?: string;
  hasRegistered?: boolean;
  loginProvider?: string;
  emailAddress?: string;
}
export const UserInfoViewModel = t.partial({
  userName: t.string,
  hasRegistered: t.boolean,
  loginProvider: t.string,
  emailAddress: t.string,
});

export interface UserLoginInfo {
  loginProvider?: string;
  providerKey?: string;
}
export const UserLoginInfo = t.partial({
  loginProvider: t.string,
  providerKey: t.string,
});

export interface UserData {
  userId?: string;
  email?: string;
  phoneNumber?: string;
  twoFactor?: boolean;
  logins?: Array<UserLoginInfo>;
  lastTimeLogin?: string;
  avatar?: string;
}
export const UserData = t.partial({
  userId: t.string,
  email: t.string,
  phoneNumber: t.string,
  twoFactor: t.boolean,
  logins: t.array(UserLoginInfo),
  lastTimeLogin: t.string,
  avatar: t.string,
});

export interface LoginBindingModel {
  email: string;
  password: string;
  rememberMe?: boolean;
  scope?: string;
}
export const LoginBindingModel = t.intersection([
  t.type({
    email: t.string,
    password: t.string,
  }),
  t.partial({
    rememberMe: t.boolean,
    scope: t.string,
  }),
]);

export interface VerifyCodeModel {
  code?: string;
  email?: string;
  password?: string;
}
export const VerifyCodeModel = t.partial({
  code: t.string,
  email: t.string,
  password: t.string,
});

export interface UserLoginInfoViewModel {
  loginProvider?: string;
  providerKey?: string;
}
export const UserLoginInfoViewModel = t.partial({
  loginProvider: t.string,
  providerKey: t.string,
});

export interface ExternalLoginViewModel {
  name?: string;
  url?: string;
  state?: string;
}
export const ExternalLoginViewModel = t.partial({
  name: t.string,
  url: t.string,
  state: t.string,
});

export interface ManageInfoViewModel {
  localLoginProvider?: string;
  userName?: string;
  logins?: Array<UserLoginInfoViewModel>;
  externalLoginProviders?: Array<ExternalLoginViewModel>;
}
export const ManageInfoViewModel = t.partial({
  localLoginProvider: t.string,
  userName: t.string,
  logins: t.array(UserLoginInfoViewModel),
  externalLoginProviders: t.array(ExternalLoginViewModel),
});

export interface ChangePasswordBindingModel {
  oldPassword: string;
  newPassword: string;
  confirmPassword?: string;
}
export const ChangePasswordBindingModel = t.intersection([
  t.type({
    oldPassword: t.string,
    newPassword: t.string,
  }),
  t.partial({
    confirmPassword: t.string,
  }),
]);

export interface SetPasswordBindingModel {
  newPassword: string;
  confirmPassword?: string;
}
export const SetPasswordBindingModel = t.intersection([
  t.type({
    newPassword: t.string,
  }),
  t.partial({
    confirmPassword: t.string,
  }),
]);

export interface AddExternalLoginBindingModel {
  externalAccessToken: string;
}
export const AddExternalLoginBindingModel = t.type({
  externalAccessToken: t.string,
});

export interface RemoveLoginBindingModel {
  loginProvider: string;
  providerKey: string;
}
export const RemoveLoginBindingModel = t.type({
  loginProvider: t.string,
  providerKey: t.string,
});

export interface RegisterBindingModel {
  email: string;
  password: string;
  confirmPassword?: string;
}
export const RegisterBindingModel = t.intersection([
  t.type({
    email: t.string,
    password: t.string,
  }),
  t.partial({
    confirmPassword: t.string,
  }),
]);

export interface ForgotPasswordBindingModel {
  email: string;
}
export const ForgotPasswordBindingModel = t.type({
  email: t.string,
});

export interface ResetPasswordBindingModel {
  email: string;
  password: string;
  confirmPassword?: string;
  code?: string;
}
export const ResetPasswordBindingModel = t.intersection([
  t.type({
    email: t.string,
    password: t.string,
  }),
  t.partial({
    confirmPassword: t.string,
    code: t.string,
  }),
]);

export interface RegisterExternalBindingModel {
  userName: string;
  password: string;
  confirmPassword?: string;
  provider: string;
  externalAccessToken: string;
}
export const RegisterExternalBindingModel = t.intersection([
  t.type({
    userName: t.string,
    password: t.string,
    provider: t.string,
    externalAccessToken: t.string,
  }),
  t.partial({
    confirmPassword: t.string,
  }),
]);

export interface ConfigurationViewModel {
  id?: number;
  key?: string;
  value?: number;
  valueStr?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ConfigurationViewModel = t.partial({
  id: t.number,
  key: t.string,
  value: t.number,
  valueStr: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface PrequalGenerationSettingsModel {
  prequalGenerationSettingsId?: number;
  documentTemplateId?: number;
  enabledForInternalUsers?: boolean;
  enabledForAgents?: boolean;
  enabledForBorrowers?: boolean;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const PrequalGenerationSettingsModel = t.partial({
  prequalGenerationSettingsId: t.number,
  documentTemplateId: t.number,
  enabledForInternalUsers: t.boolean,
  enabledForAgents: t.boolean,
  enabledForBorrowers: t.boolean,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface OnlineApplicationSettingsModel {
  onlineApplicationSettingsId?: number;
  eConsentDocumentTemplateId?: number;
  creditAuthDocumentTemplateId?: number;
  showEConsentVerbiage?: boolean;
  eConsentText?: string;
  enableEConsentDocumentGeneration?: boolean;
  showCreditAuthVerbiage?: boolean;
  creditAuthText?: string;
  enableCreditAuthDocumentGeneration?: boolean;
  enableDigitalAssetVerification?: boolean;
  enableDigitalEmploymentVerification?: boolean;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const OnlineApplicationSettingsModel = t.partial({
  onlineApplicationSettingsId: t.number,
  eConsentDocumentTemplateId: t.number,
  creditAuthDocumentTemplateId: t.number,
  showEConsentVerbiage: t.boolean,
  eConsentText: t.string,
  enableEConsentDocumentGeneration: t.boolean,
  showCreditAuthVerbiage: t.boolean,
  creditAuthText: t.string,
  enableCreditAuthDocumentGeneration: t.boolean,
  enableDigitalAssetVerification: t.boolean,
  enableDigitalEmploymentVerification: t.boolean,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface EmailTemplateImageViewModel {
  emailTemplateImageId?: number;
  emailTemplateImageGuid?: string;
  definedEmailTemplateId?: number;
  emailTemplateId?: number;
  mimeType?: string;
  imageData?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const EmailTemplateImageViewModel = t.partial({
  emailTemplateImageId: t.number,
  emailTemplateImageGuid: t.string,
  definedEmailTemplateId: t.number,
  emailTemplateId: t.number,
  mimeType: t.string,
  imageData: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface DefinedEmailTemplateViewModel {
  id?: number;
  userId?: string;
  onlineAppRegistrationOverride?: boolean;
  onlineAppRegistrationSubject?: string;
  onlineAppRegistrationEmail?: string;
  onlineAppStartedOverride?: boolean;
  onlineAppStartedSubject?: string;
  onlineAppStartedEmail?: string;
  onlineAppSubmissionOverride?: boolean;
  onlineAppSubmissionSubject?: string;
  onlineAppSubmissionEmail?: string;
  inviteOverride?: boolean;
  inviteSubject?: string;
  inviteEmail?: string;
  inviteAgentOverride?: boolean;
  inviteAgentSubject?: string;
  inviteAgentEmail?: string;
  requestOverride?: boolean;
  requestSubject?: string;
  requestEmail?: string;
  reminderOverride?: boolean;
  reminderSubject?: string;
  reminderEmail?: string;
  images?: Array<EmailTemplateImageViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const DefinedEmailTemplateViewModel = t.partial({
  id: t.number,
  userId: t.string,
  onlineAppRegistrationOverride: t.boolean,
  onlineAppRegistrationSubject: t.string,
  onlineAppRegistrationEmail: t.string,
  onlineAppStartedOverride: t.boolean,
  onlineAppStartedSubject: t.string,
  onlineAppStartedEmail: t.string,
  onlineAppSubmissionOverride: t.boolean,
  onlineAppSubmissionSubject: t.string,
  onlineAppSubmissionEmail: t.string,
  inviteOverride: t.boolean,
  inviteSubject: t.string,
  inviteEmail: t.string,
  inviteAgentOverride: t.boolean,
  inviteAgentSubject: t.string,
  inviteAgentEmail: t.string,
  requestOverride: t.boolean,
  requestSubject: t.string,
  requestEmail: t.string,
  reminderOverride: t.boolean,
  reminderSubject: t.string,
  reminderEmail: t.string,
  images: t.array(EmailTemplateImageViewModel),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CompanyModel {
  companyId?: number;
  companyURL?: string;
  borrowerURL?: string;
  agentURL?: string;
  companyGUID?: string;
  companyName?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  logo?: string;
  smallLogo?: string;
  signatureLogo?: string;
  nmls?: string;
  isTemplate?: boolean;
  docEditingEnabled?: boolean;
  docGenerationEnabled?: boolean;
  full1003Enabled?: boolean;
  leadManagementEnabled?: boolean;
  onlineApplicationEnabled?: boolean;
  digitalAssetVerificationEnabled?: boolean;
  digitalEmploymentVerificationEnabled?: boolean;
  prequalGenerationEnabled?: boolean;
  smsAlertsEnabled?: boolean;
  emailTestsEnabled?: boolean;
  inviteBorrowerCheckedByDefault?: boolean;
  creditMonitoringEnabled?: boolean;
  creditReportingEnabled?: boolean;
  ausEnabled?: boolean;
  losEnabled?: boolean;
  campaignsEnabled?: boolean;
  multipleCredentialSupportEnabled?: boolean;
}
export const CompanyModel = t.partial({
  companyId: t.number,
  companyURL: t.string,
  borrowerURL: t.string,
  agentURL: t.string,
  companyGUID: t.string,
  companyName: t.string,
  address: t.string,
  city: t.string,
  state: t.string,
  zip: t.string,
  logo: t.string,
  smallLogo: t.string,
  signatureLogo: t.string,
  nmls: t.string,
  isTemplate: t.boolean,
  docEditingEnabled: t.boolean,
  docGenerationEnabled: t.boolean,
  full1003Enabled: t.boolean,
  leadManagementEnabled: t.boolean,
  onlineApplicationEnabled: t.boolean,
  digitalAssetVerificationEnabled: t.boolean,
  digitalEmploymentVerificationEnabled: t.boolean,
  prequalGenerationEnabled: t.boolean,
  smsAlertsEnabled: t.boolean,
  emailTestsEnabled: t.boolean,
  inviteBorrowerCheckedByDefault: t.boolean,
  creditMonitoringEnabled: t.boolean,
  creditReportingEnabled: t.boolean,
  ausEnabled: t.boolean,
  losEnabled: t.boolean,
  campaignsEnabled: t.boolean,
  multipleCredentialSupportEnabled: t.boolean,
});

export interface StackingOrderModel {
  stakingOrderId?: number;
  companyId?: number;
  company?: CompanyModel;
  docType?: string;
  associate?: string;
}
export const StackingOrderModel = t.partial({
  stakingOrderId: t.number,
  companyId: t.number,
  company: CompanyModel,
  docType: t.string,
  associate: t.string,
});

export interface RoleModel {
  roleId?: number;
  roleName?: string;
  isLoanContact?: boolean;
  order?: number;
  allowAccessAllLoans?: boolean;
  allowBorrowerAssignment?: boolean;
  showOnPortals?: boolean;
  showNewSubmissionForm?: boolean;
  bulkEditTasks?: boolean;
  readOnlyTasks?: boolean;
  useForCreditMonitoring?: boolean;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const RoleModel = t.partial({
  roleId: t.number,
  roleName: t.string,
  isLoanContact: t.boolean,
  order: t.number,
  allowAccessAllLoans: t.boolean,
  allowBorrowerAssignment: t.boolean,
  showOnPortals: t.boolean,
  showNewSubmissionForm: t.boolean,
  bulkEditTasks: t.boolean,
  readOnlyTasks: t.boolean,
  useForCreditMonitoring: t.boolean,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface IdentityUserRole {
  userId?: string;
  roleId?: string;
}
export const IdentityUserRole = t.partial({
  userId: t.string,
  roleId: t.string,
});

export interface IdentityUserClaim {
  id?: number;
  userId?: string;
  claimType?: string;
  claimValue?: string;
}
export const IdentityUserClaim = t.partial({
  id: t.number,
  userId: t.string,
  claimType: t.string,
  claimValue: t.string,
});

export interface IdentityUserLogin {
  loginProvider?: string;
  providerKey?: string;
  userId?: string;
}
export const IdentityUserLogin = t.partial({
  loginProvider: t.string,
  providerKey: t.string,
  userId: t.string,
});

export interface UserProfile {
  companyId?: number;
  companyModel?: CompanyModel;
  stackOrderId?: number;
  stackingOrder?: StackingOrderModel;
  roleId?: number;
  roleModel?: RoleModel;
  userType?: 'Admin' | 'Borrower' | 'Agent';
  avatarId?: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  timeZone?: string;
  title?: string;
  nmls?: string;
  emailSignature?: string;
  smsSignature?: string;
  flagAdmin?: boolean;
  reportTo?: string;
  inviteDate?: string;
  confirmationDate?: string;
  confirmationToken?: string;
  cellPhone?: string;
  workPhone?: string;
  homePhone?: string;
  fax?: string;
  mailingStreet?: string;
  mailingPOBox?: string;
  mailingCity?: string;
  mailingState?: string;
  mailingZip?: string;
  active?: boolean;
  currentTimeLogin?: string;
  lastTimeLogin?: string;
  releaseNotesVersion?: string;
  userImage?: string;
  userImageData?: string;
  email?: string;
  emailConfirmed?: boolean;
  passwordHash?: string;
  securityStamp?: string;
  phoneNumber?: string;
  phoneNumberConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  lockoutEndDateUtc?: string;
  lockoutEnabled?: boolean;
  accessFailedCount?: number;
  roles?: Array<IdentityUserRole>;
  claims?: Array<IdentityUserClaim>;
  logins?: Array<IdentityUserLogin>;
  id?: string;
  userName?: string;
}
export const UserProfile = t.partial({
  companyId: t.number,
  companyModel: CompanyModel,
  stackOrderId: t.number,
  stackingOrder: StackingOrderModel,
  roleId: t.number,
  roleModel: RoleModel,
  userType: t.keyof({
    Admin: null,
    Borrower: null,
    Agent: null,
  }),
  avatarId: t.string,
  firstName: t.string,
  lastName: t.string,
  dob: t.string,
  timeZone: t.string,
  title: t.string,
  nmls: t.string,
  emailSignature: t.string,
  smsSignature: t.string,
  flagAdmin: t.boolean,
  reportTo: t.string,
  inviteDate: t.string,
  confirmationDate: t.string,
  confirmationToken: t.string,
  cellPhone: t.string,
  workPhone: t.string,
  homePhone: t.string,
  fax: t.string,
  mailingStreet: t.string,
  mailingPOBox: t.string,
  mailingCity: t.string,
  mailingState: t.string,
  mailingZip: t.string,
  active: t.boolean,
  currentTimeLogin: t.string,
  lastTimeLogin: t.string,
  releaseNotesVersion: t.string,
  userImage: t.string,
  userImageData: t.string,
  email: t.string,
  emailConfirmed: t.boolean,
  passwordHash: t.string,
  securityStamp: t.string,
  phoneNumber: t.string,
  phoneNumberConfirmed: t.boolean,
  twoFactorEnabled: t.boolean,
  lockoutEndDateUtc: t.string,
  lockoutEnabled: t.boolean,
  accessFailedCount: t.number,
  roles: t.array(IdentityUserRole),
  claims: t.array(IdentityUserClaim),
  logins: t.array(IdentityUserLogin),
  id: t.string,
  userName: t.string,
});

export interface DefinedSmsTemplateModel {
  id?: number;
  companyId?: number;
  company?: CompanyModel;
  userId?: string;
  user?: UserProfile;
  onlineAppRegistrationOverride?: boolean;
  onlineAppRegistrationSms?: string;
  inviteOverride?: boolean;
  inviteSms?: string;
  inviteAgentOverride?: boolean;
  inviteAgentSms?: string;
  requestOverride?: boolean;
  requestSms?: string;
  reminderOverride?: boolean;
  reminderSms?: string;
}
export const DefinedSmsTemplateModel = t.partial({
  id: t.number,
  companyId: t.number,
  company: CompanyModel,
  userId: t.string,
  user: UserProfile,
  onlineAppRegistrationOverride: t.boolean,
  onlineAppRegistrationSms: t.string,
  inviteOverride: t.boolean,
  inviteSms: t.string,
  inviteAgentOverride: t.boolean,
  inviteAgentSms: t.string,
  requestOverride: t.boolean,
  requestSms: t.string,
  reminderOverride: t.boolean,
  reminderSms: t.string,
});

export interface BorrowerPortalContentModel {
  id?: number;
  companyId?: number;
  userId?: string;
  aboutUsContent?: string;
  referralContent?: string;
  showReferralTerms?: boolean;
  referralTermsContent?: string;
}
export const BorrowerPortalContentModel = t.partial({
  id: t.number,
  companyId: t.number,
  userId: t.string,
  aboutUsContent: t.string,
  referralContent: t.string,
  showReferralTerms: t.boolean,
  referralTermsContent: t.string,
});

export interface AgentPortalContentModel {
  id?: number;
  companyId?: number;
  company?: CompanyModel;
  userId?: string;
  user?: UserProfile;
  aboutUsContent?: string;
  referralContent?: string;
  showReferralTerms?: boolean;
  referralTermsContent?: string;
}
export const AgentPortalContentModel = t.partial({
  id: t.number,
  companyId: t.number,
  company: CompanyModel,
  userId: t.string,
  user: UserProfile,
  aboutUsContent: t.string,
  referralContent: t.string,
  showReferralTerms: t.boolean,
  referralTermsContent: t.string,
});

export interface EmailServiceModel {
  serviceType?: string;
  server?: string;
  port?: number;
  userName?: string;
  password?: string;
  isSecure?: boolean;
  userId?: string;
  servicesUrl?: string;
  companyId?: number;
}
export const EmailServiceModel = t.partial({
  serviceType: t.string,
  server: t.string,
  port: t.number,
  userName: t.string,
  password: t.string,
  isSecure: t.boolean,
  userId: t.string,
  servicesUrl: t.string,
  companyId: t.number,
});

export interface SmsServiceModel {
  smsServiceId?: number;
  userId?: string;
  serviceType?: string;
  fromPhoneNumber?: string;
  accountIdentifier?: string;
  authToken?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const SmsServiceModel = t.partial({
  smsServiceId: t.number,
  userId: t.string,
  serviceType: t.string,
  fromPhoneNumber: t.string,
  accountIdentifier: t.string,
  authToken: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface LeadPosting {
  leadPostUrl?: string;
  vendorName?: string;
}
export const LeadPosting = t.partial({
  leadPostUrl: t.string,
  vendorName: t.string,
});

export interface OnlineWizardModel {
  name?: string;
  url?: string;
}
export const OnlineWizardModel = t.partial({
  name: t.string,
  url: t.string,
});

export interface OnlineApplicationsModel {
  wizardUrls?: Array<OnlineWizardModel>;
}
export const OnlineApplicationsModel = t.partial({
  wizardUrls: t.array(OnlineWizardModel),
});

export interface ThirdPartyKeyValuePairViewModel {
  thirdPartyKeyValueId?: number;
  key?: string;
  value?: string;
  credentialId?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ThirdPartyKeyValuePairViewModel = t.partial({
  thirdPartyKeyValueId: t.number,
  key: t.string,
  value: t.string,
  credentialId: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface ThirdPartyCredentialsViewModel {
  credentialId?: number;
  credentialType?: string;
  vendorName?: string;
  url?: string;
  userName?: string;
  password?: string;
  userId?: string;
  credentialProviderId?: number;
  thirdPartyKeyValuePairs?: Array<ThirdPartyKeyValuePairViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ThirdPartyCredentialsViewModel = t.partial({
  credentialId: t.number,
  credentialType: t.string,
  vendorName: t.string,
  url: t.string,
  userName: t.string,
  password: t.string,
  userId: t.string,
  credentialProviderId: t.number,
  thirdPartyKeyValuePairs: t.array(ThirdPartyKeyValuePairViewModel),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface IntegrationsModel {
  leadPostingUrls?: Array<LeadPosting>;
  onlineApplications?: OnlineApplicationsModel;
  thirdPartyCredentials?: Array<ThirdPartyCredentialsViewModel>;
}
export const IntegrationsModel = t.partial({
  leadPostingUrls: t.array(LeadPosting),
  onlineApplications: OnlineApplicationsModel,
  thirdPartyCredentials: t.array(ThirdPartyCredentialsViewModel),
});

export interface CustomDataConfigModel {
  customDataConfigId?: number;
  label1Text?: string;
  field1Type?: 'Integer' | 'Double' | 'Decimal' | 'String' | 'DateTime';
  editor1Type?:
    | 'Unspecified'
    | 'Text'
    | 'CheckBox'
    | 'RadioButton'
    | 'Email'
    | 'Phone'
    | 'Currency'
    | 'Percent';
  label2Text?: string;
  field2Type?: 'Integer' | 'Double' | 'Decimal' | 'String' | 'DateTime';
  editor2Type?:
    | 'Unspecified'
    | 'Text'
    | 'CheckBox'
    | 'RadioButton'
    | 'Email'
    | 'Phone'
    | 'Currency'
    | 'Percent';
  label3Text?: string;
  field3Type?: 'Integer' | 'Double' | 'Decimal' | 'String' | 'DateTime';
  editor3Type?:
    | 'Unspecified'
    | 'Text'
    | 'CheckBox'
    | 'RadioButton'
    | 'Email'
    | 'Phone'
    | 'Currency'
    | 'Percent';
  label4Text?: string;
  field4Type?: 'Integer' | 'Double' | 'Decimal' | 'String' | 'DateTime';
  editor4Type?:
    | 'Unspecified'
    | 'Text'
    | 'CheckBox'
    | 'RadioButton'
    | 'Email'
    | 'Phone'
    | 'Currency'
    | 'Percent';
  label5Text?: string;
  field5Type?: 'Integer' | 'Double' | 'Decimal' | 'String' | 'DateTime';
  editor5Type?:
    | 'Unspecified'
    | 'Text'
    | 'CheckBox'
    | 'RadioButton'
    | 'Email'
    | 'Phone'
    | 'Currency'
    | 'Percent';
  label6Text?: string;
  field6Type?: 'Integer' | 'Double' | 'Decimal' | 'String' | 'DateTime';
  editor6Type?:
    | 'Unspecified'
    | 'Text'
    | 'CheckBox'
    | 'RadioButton'
    | 'Email'
    | 'Phone'
    | 'Currency'
    | 'Percent';
  label7Text?: string;
  field7Type?: 'Integer' | 'Double' | 'Decimal' | 'String' | 'DateTime';
  editor7Type?:
    | 'Unspecified'
    | 'Text'
    | 'CheckBox'
    | 'RadioButton'
    | 'Email'
    | 'Phone'
    | 'Currency'
    | 'Percent';
  label8Text?: string;
  field8Type?: 'Integer' | 'Double' | 'Decimal' | 'String' | 'DateTime';
  editor8Type?:
    | 'Unspecified'
    | 'Text'
    | 'CheckBox'
    | 'RadioButton'
    | 'Email'
    | 'Phone'
    | 'Currency'
    | 'Percent';
  label9Text?: string;
  field9Type?: 'Integer' | 'Double' | 'Decimal' | 'String' | 'DateTime';
  editor9Type?:
    | 'Unspecified'
    | 'Text'
    | 'CheckBox'
    | 'RadioButton'
    | 'Email'
    | 'Phone'
    | 'Currency'
    | 'Percent';
  label10Text?: string;
  field10Type?: 'Integer' | 'Double' | 'Decimal' | 'String' | 'DateTime';
  editor10Type?:
    | 'Unspecified'
    | 'Text'
    | 'CheckBox'
    | 'RadioButton'
    | 'Email'
    | 'Phone'
    | 'Currency'
    | 'Percent';
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CustomDataConfigModel = t.partial({
  customDataConfigId: t.number,
  label1Text: t.string,
  field1Type: t.keyof({
    Integer: null,
    Double: null,
    Decimal: null,
    String: null,
    DateTime: null,
  }),
  editor1Type: t.keyof({
    Unspecified: null,
    Text: null,
    CheckBox: null,
    RadioButton: null,
    Email: null,
    Phone: null,
    Currency: null,
    Percent: null,
  }),
  label2Text: t.string,
  field2Type: t.keyof({
    Integer: null,
    Double: null,
    Decimal: null,
    String: null,
    DateTime: null,
  }),
  editor2Type: t.keyof({
    Unspecified: null,
    Text: null,
    CheckBox: null,
    RadioButton: null,
    Email: null,
    Phone: null,
    Currency: null,
    Percent: null,
  }),
  label3Text: t.string,
  field3Type: t.keyof({
    Integer: null,
    Double: null,
    Decimal: null,
    String: null,
    DateTime: null,
  }),
  editor3Type: t.keyof({
    Unspecified: null,
    Text: null,
    CheckBox: null,
    RadioButton: null,
    Email: null,
    Phone: null,
    Currency: null,
    Percent: null,
  }),
  label4Text: t.string,
  field4Type: t.keyof({
    Integer: null,
    Double: null,
    Decimal: null,
    String: null,
    DateTime: null,
  }),
  editor4Type: t.keyof({
    Unspecified: null,
    Text: null,
    CheckBox: null,
    RadioButton: null,
    Email: null,
    Phone: null,
    Currency: null,
    Percent: null,
  }),
  label5Text: t.string,
  field5Type: t.keyof({
    Integer: null,
    Double: null,
    Decimal: null,
    String: null,
    DateTime: null,
  }),
  editor5Type: t.keyof({
    Unspecified: null,
    Text: null,
    CheckBox: null,
    RadioButton: null,
    Email: null,
    Phone: null,
    Currency: null,
    Percent: null,
  }),
  label6Text: t.string,
  field6Type: t.keyof({
    Integer: null,
    Double: null,
    Decimal: null,
    String: null,
    DateTime: null,
  }),
  editor6Type: t.keyof({
    Unspecified: null,
    Text: null,
    CheckBox: null,
    RadioButton: null,
    Email: null,
    Phone: null,
    Currency: null,
    Percent: null,
  }),
  label7Text: t.string,
  field7Type: t.keyof({
    Integer: null,
    Double: null,
    Decimal: null,
    String: null,
    DateTime: null,
  }),
  editor7Type: t.keyof({
    Unspecified: null,
    Text: null,
    CheckBox: null,
    RadioButton: null,
    Email: null,
    Phone: null,
    Currency: null,
    Percent: null,
  }),
  label8Text: t.string,
  field8Type: t.keyof({
    Integer: null,
    Double: null,
    Decimal: null,
    String: null,
    DateTime: null,
  }),
  editor8Type: t.keyof({
    Unspecified: null,
    Text: null,
    CheckBox: null,
    RadioButton: null,
    Email: null,
    Phone: null,
    Currency: null,
    Percent: null,
  }),
  label9Text: t.string,
  field9Type: t.keyof({
    Integer: null,
    Double: null,
    Decimal: null,
    String: null,
    DateTime: null,
  }),
  editor9Type: t.keyof({
    Unspecified: null,
    Text: null,
    CheckBox: null,
    RadioButton: null,
    Email: null,
    Phone: null,
    Currency: null,
    Percent: null,
  }),
  label10Text: t.string,
  field10Type: t.keyof({
    Integer: null,
    Double: null,
    Decimal: null,
    String: null,
    DateTime: null,
  }),
  editor10Type: t.keyof({
    Unspecified: null,
    Text: null,
    CheckBox: null,
    RadioButton: null,
    Email: null,
    Phone: null,
    Currency: null,
    Percent: null,
  }),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface SystemLevel {
  sessionTimeout?: ConfigurationViewModel;
  reminderEmailEnabled?: ConfigurationViewModel;
  reminderEmailInterval?: ConfigurationViewModel;
  reminderSmsEnabled?: ConfigurationViewModel;
  reminderSmsInterval?: ConfigurationViewModel;
  documentExportFormat?: ConfigurationViewModel;
  digitalAssetVerificationEnabled?: ConfigurationViewModel;
  digitalEmploymentVerificationEnabled?: ConfigurationViewModel;
  creditReportingEnabled?: ConfigurationViewModel;
  ausEnabled?: ConfigurationViewModel;
  losEnabled?: ConfigurationViewModel;
  defaultCreditVendor?: ConfigurationViewModel;
  prequalGenerationSettings?: PrequalGenerationSettingsModel;
  onlineApplicationSettings?: OnlineApplicationSettingsModel;
  definedEmailTemplate?: DefinedEmailTemplateViewModel;
  definedSmsTemplate?: DefinedSmsTemplateModel;
  borrowerPortalContent?: BorrowerPortalContentModel;
  agentPortalContent?: AgentPortalContentModel;
  emailService?: EmailServiceModel;
  smsService?: SmsServiceModel;
  integrations?: IntegrationsModel;
  thirdPartyCredentials?: Array<ThirdPartyCredentialsViewModel>;
  company?: CompanyModel;
  customDataConfigModel?: CustomDataConfigModel;
}
export const SystemLevel = t.partial({
  sessionTimeout: ConfigurationViewModel,
  reminderEmailEnabled: ConfigurationViewModel,
  reminderEmailInterval: ConfigurationViewModel,
  reminderSmsEnabled: ConfigurationViewModel,
  reminderSmsInterval: ConfigurationViewModel,
  documentExportFormat: ConfigurationViewModel,
  digitalAssetVerificationEnabled: ConfigurationViewModel,
  digitalEmploymentVerificationEnabled: ConfigurationViewModel,
  creditReportingEnabled: ConfigurationViewModel,
  ausEnabled: ConfigurationViewModel,
  losEnabled: ConfigurationViewModel,
  defaultCreditVendor: ConfigurationViewModel,
  prequalGenerationSettings: PrequalGenerationSettingsModel,
  onlineApplicationSettings: OnlineApplicationSettingsModel,
  definedEmailTemplate: DefinedEmailTemplateViewModel,
  definedSmsTemplate: DefinedSmsTemplateModel,
  borrowerPortalContent: BorrowerPortalContentModel,
  agentPortalContent: AgentPortalContentModel,
  emailService: EmailServiceModel,
  smsService: SmsServiceModel,
  integrations: IntegrationsModel,
  thirdPartyCredentials: t.array(ThirdPartyCredentialsViewModel),
  company: CompanyModel,
  customDataConfigModel: CustomDataConfigModel,
});

export interface ConfigurationModel {
  id?: number;
  key?: string;
  value?: number;
  valueStr?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ConfigurationModel = t.partial({
  id: t.number,
  key: t.string,
  value: t.number,
  valueStr: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface ChecklistQuestionModel {
  checklistQuestionId?: number;
  checklistId?: number;
  parentRefId?: number;
  parentQuestionId?: number;
  questionAnswerId?: number;
  answerValue?: boolean;
  questionId?: number;
  questionRefId?: number;
  level?: number;
}
export const ChecklistQuestionModel = t.partial({
  checklistQuestionId: t.number,
  checklistId: t.number,
  parentRefId: t.number,
  parentQuestionId: t.number,
  questionAnswerId: t.number,
  answerValue: t.boolean,
  questionId: t.number,
  questionRefId: t.number,
  level: t.number,
});

export interface ProductModel {
  productId?: number;
  productName?: string;
  term?: number;
  companyId?: number;
}
export const ProductModel = t.partial({
  productId: t.number,
  productName: t.string,
  term: t.number,
  companyId: t.number,
});

export interface QuestionModel {
  questionId?: number;
  questionText?: string;
  questionType?:
    | 'Immediately'
    | 'OnLoanStatus'
    | 'CreateInternalContact'
    | 'UpdateInternalContact'
    | 'Private'
    | 'Group'
    | 'Public'
    | 'Al'
    | 'Event'
    | 'ToDo'
    | 'Appointment'
    | 'AutoApply'
    | 'Confirm'
    | 'RequestQuantity'
    | 'LoanCharacteristic'
    | 'BorrowerCharacteristic'
    | 'LessThan'
    | 'LessThanOrEqualTo'
    | 'EqualTo'
    | 'GreatherThan'
    | 'GreaterThanOrEqualTo'
    | 'NullOrEmpty'
    | 'NotNullOrEmpty'
    | 'StartsWith'
    | 'Contains'
    | 'DoesNotContain'
    | 'In'
    | 'NotIn'
    | 'YesNo'
    | 'TrueFalse'
    | 'OnOff'
    | 'Text'
    | 'Integer'
    | 'Decimal'
    | 'MultiSelect'
    | 'SelectList'
    | 'Value'
    | 'Docvalue'
    | 'DataValidation'
    | 'DocumentValidation'
    | 'ManualValidation'
    | 'Pdf'
    | 'Doc'
    | 'Txt'
    | 'Excel'
    | 'Csv'
    | 'Img'
    | 'ApplyToLoan'
    | 'ApplyToPrimaryBorrower'
    | 'ApplyToSelectBorrowers'
    | 'ChangeStatus'
    | 'Uploadfile'
    | 'DeleteFile'
    | 'DownloadFile'
    | 'ExportFile'
    | 'FileNoteUpdated'
    | 'BorrowerNoteUpdated'
    | 'DeleteTask'
    | 'RemoveFileFromTrash'
    | 'ConditionStatusChange'
    | 'CreateTask'
    | 'RestoreTask'
    | 'MergeFile'
    | 'PostponeTask'
    | 'ChangeFollowUpDate'
    | 'ChangeDueDate'
    | 'ViewFile'
    | 'FileNameChanged'
    | 'ChangeConditionFlag'
    | 'ChangeDescription'
    | 'ChangeNotifyParty'
    | 'ChangePriority'
    | 'ChangeResponsibleParty'
    | 'ChangeReviewRequired'
    | 'InternalMessageAlert'
    | 'BorrowerMessageAlert'
    | 'TaskStatusAlert'
    | 'GeneralAlert'
    | 'LoanStatusAlert'
    | 'FailedEmailAlert'
    | 'FailedSmsAlert'
    | 'NewLeadAlert';
  companyId?: number;
}
export const QuestionModel = t.partial({
  questionId: t.number,
  questionText: t.string,
  questionType: t.keyof({
    Immediately: null,
    OnLoanStatus: null,
    CreateInternalContact: null,
    UpdateInternalContact: null,
    Private: null,
    Group: null,
    Public: null,
    Al: null,
    Event: null,
    ToDo: null,
    Appointment: null,
    AutoApply: null,
    Confirm: null,
    RequestQuantity: null,
    LoanCharacteristic: null,
    BorrowerCharacteristic: null,
    LessThan: null,
    LessThanOrEqualTo: null,
    EqualTo: null,
    GreatherThan: null,
    GreaterThanOrEqualTo: null,
    NullOrEmpty: null,
    NotNullOrEmpty: null,
    StartsWith: null,
    Contains: null,
    DoesNotContain: null,
    In: null,
    NotIn: null,
    YesNo: null,
    TrueFalse: null,
    OnOff: null,
    Text: null,
    Integer: null,
    Decimal: null,
    MultiSelect: null,
    SelectList: null,
    Value: null,
    Docvalue: null,
    DataValidation: null,
    DocumentValidation: null,
    ManualValidation: null,
    Pdf: null,
    Doc: null,
    Txt: null,
    Excel: null,
    Csv: null,
    Img: null,
    ApplyToLoan: null,
    ApplyToPrimaryBorrower: null,
    ApplyToSelectBorrowers: null,
    ChangeStatus: null,
    Uploadfile: null,
    DeleteFile: null,
    DownloadFile: null,
    ExportFile: null,
    FileNoteUpdated: null,
    BorrowerNoteUpdated: null,
    DeleteTask: null,
    RemoveFileFromTrash: null,
    ConditionStatusChange: null,
    CreateTask: null,
    RestoreTask: null,
    MergeFile: null,
    PostponeTask: null,
    ChangeFollowUpDate: null,
    ChangeDueDate: null,
    ViewFile: null,
    FileNameChanged: null,
    ChangeConditionFlag: null,
    ChangeDescription: null,
    ChangeNotifyParty: null,
    ChangePriority: null,
    ChangeResponsibleParty: null,
    ChangeReviewRequired: null,
    InternalMessageAlert: null,
    BorrowerMessageAlert: null,
    TaskStatusAlert: null,
    GeneralAlert: null,
    LoanStatusAlert: null,
    FailedEmailAlert: null,
    FailedSmsAlert: null,
    NewLeadAlert: null,
  }),
  companyId: t.number,
});

export interface QuestionTaskAnswerDto {
  questionAnswerId?: number;
  questionId?: number;
  companyId?: number;
  answerText?: string;
  sortValue?: number;
  require?: boolean;
  tableName?: string;
  columnName?: string;
  dataType?:
    | 'Immediately'
    | 'OnLoanStatus'
    | 'CreateInternalContact'
    | 'UpdateInternalContact'
    | 'Private'
    | 'Group'
    | 'Public'
    | 'Al'
    | 'Event'
    | 'ToDo'
    | 'Appointment'
    | 'AutoApply'
    | 'Confirm'
    | 'RequestQuantity'
    | 'LoanCharacteristic'
    | 'BorrowerCharacteristic'
    | 'LessThan'
    | 'LessThanOrEqualTo'
    | 'EqualTo'
    | 'GreatherThan'
    | 'GreaterThanOrEqualTo'
    | 'NullOrEmpty'
    | 'NotNullOrEmpty'
    | 'StartsWith'
    | 'Contains'
    | 'DoesNotContain'
    | 'In'
    | 'NotIn'
    | 'YesNo'
    | 'TrueFalse'
    | 'OnOff'
    | 'Text'
    | 'Integer'
    | 'Decimal'
    | 'MultiSelect'
    | 'SelectList'
    | 'Value'
    | 'Docvalue'
    | 'DataValidation'
    | 'DocumentValidation'
    | 'ManualValidation'
    | 'Pdf'
    | 'Doc'
    | 'Txt'
    | 'Excel'
    | 'Csv'
    | 'Img'
    | 'ApplyToLoan'
    | 'ApplyToPrimaryBorrower'
    | 'ApplyToSelectBorrowers'
    | 'ChangeStatus'
    | 'Uploadfile'
    | 'DeleteFile'
    | 'DownloadFile'
    | 'ExportFile'
    | 'FileNoteUpdated'
    | 'BorrowerNoteUpdated'
    | 'DeleteTask'
    | 'RemoveFileFromTrash'
    | 'ConditionStatusChange'
    | 'CreateTask'
    | 'RestoreTask'
    | 'MergeFile'
    | 'PostponeTask'
    | 'ChangeFollowUpDate'
    | 'ChangeDueDate'
    | 'ViewFile'
    | 'FileNameChanged'
    | 'ChangeConditionFlag'
    | 'ChangeDescription'
    | 'ChangeNotifyParty'
    | 'ChangePriority'
    | 'ChangeResponsibleParty'
    | 'ChangeReviewRequired'
    | 'InternalMessageAlert'
    | 'BorrowerMessageAlert'
    | 'TaskStatusAlert'
    | 'GeneralAlert'
    | 'LoanStatusAlert'
    | 'FailedEmailAlert'
    | 'FailedSmsAlert'
    | 'NewLeadAlert';
  comparisonType?:
    | 'Immediately'
    | 'OnLoanStatus'
    | 'CreateInternalContact'
    | 'UpdateInternalContact'
    | 'Private'
    | 'Group'
    | 'Public'
    | 'Al'
    | 'Event'
    | 'ToDo'
    | 'Appointment'
    | 'AutoApply'
    | 'Confirm'
    | 'RequestQuantity'
    | 'LoanCharacteristic'
    | 'BorrowerCharacteristic'
    | 'LessThan'
    | 'LessThanOrEqualTo'
    | 'EqualTo'
    | 'GreatherThan'
    | 'GreaterThanOrEqualTo'
    | 'NullOrEmpty'
    | 'NotNullOrEmpty'
    | 'StartsWith'
    | 'Contains'
    | 'DoesNotContain'
    | 'In'
    | 'NotIn'
    | 'YesNo'
    | 'TrueFalse'
    | 'OnOff'
    | 'Text'
    | 'Integer'
    | 'Decimal'
    | 'MultiSelect'
    | 'SelectList'
    | 'Value'
    | 'Docvalue'
    | 'DataValidation'
    | 'DocumentValidation'
    | 'ManualValidation'
    | 'Pdf'
    | 'Doc'
    | 'Txt'
    | 'Excel'
    | 'Csv'
    | 'Img'
    | 'ApplyToLoan'
    | 'ApplyToPrimaryBorrower'
    | 'ApplyToSelectBorrowers'
    | 'ChangeStatus'
    | 'Uploadfile'
    | 'DeleteFile'
    | 'DownloadFile'
    | 'ExportFile'
    | 'FileNoteUpdated'
    | 'BorrowerNoteUpdated'
    | 'DeleteTask'
    | 'RemoveFileFromTrash'
    | 'ConditionStatusChange'
    | 'CreateTask'
    | 'RestoreTask'
    | 'MergeFile'
    | 'PostponeTask'
    | 'ChangeFollowUpDate'
    | 'ChangeDueDate'
    | 'ViewFile'
    | 'FileNameChanged'
    | 'ChangeConditionFlag'
    | 'ChangeDescription'
    | 'ChangeNotifyParty'
    | 'ChangePriority'
    | 'ChangeResponsibleParty'
    | 'ChangeReviewRequired'
    | 'InternalMessageAlert'
    | 'BorrowerMessageAlert'
    | 'TaskStatusAlert'
    | 'GeneralAlert'
    | 'LoanStatusAlert'
    | 'FailedEmailAlert'
    | 'FailedSmsAlert'
    | 'NewLeadAlert';
  compareValue?: string;
  documentTypeId?: number;
  exist?: boolean;
  qaTaskId?: Array<number>;
}
export const QuestionTaskAnswerDto = t.partial({
  questionAnswerId: t.number,
  questionId: t.number,
  companyId: t.number,
  answerText: t.string,
  sortValue: t.number,
  require: t.boolean,
  tableName: t.string,
  columnName: t.string,
  dataType: t.keyof({
    Immediately: null,
    OnLoanStatus: null,
    CreateInternalContact: null,
    UpdateInternalContact: null,
    Private: null,
    Group: null,
    Public: null,
    Al: null,
    Event: null,
    ToDo: null,
    Appointment: null,
    AutoApply: null,
    Confirm: null,
    RequestQuantity: null,
    LoanCharacteristic: null,
    BorrowerCharacteristic: null,
    LessThan: null,
    LessThanOrEqualTo: null,
    EqualTo: null,
    GreatherThan: null,
    GreaterThanOrEqualTo: null,
    NullOrEmpty: null,
    NotNullOrEmpty: null,
    StartsWith: null,
    Contains: null,
    DoesNotContain: null,
    In: null,
    NotIn: null,
    YesNo: null,
    TrueFalse: null,
    OnOff: null,
    Text: null,
    Integer: null,
    Decimal: null,
    MultiSelect: null,
    SelectList: null,
    Value: null,
    Docvalue: null,
    DataValidation: null,
    DocumentValidation: null,
    ManualValidation: null,
    Pdf: null,
    Doc: null,
    Txt: null,
    Excel: null,
    Csv: null,
    Img: null,
    ApplyToLoan: null,
    ApplyToPrimaryBorrower: null,
    ApplyToSelectBorrowers: null,
    ChangeStatus: null,
    Uploadfile: null,
    DeleteFile: null,
    DownloadFile: null,
    ExportFile: null,
    FileNoteUpdated: null,
    BorrowerNoteUpdated: null,
    DeleteTask: null,
    RemoveFileFromTrash: null,
    ConditionStatusChange: null,
    CreateTask: null,
    RestoreTask: null,
    MergeFile: null,
    PostponeTask: null,
    ChangeFollowUpDate: null,
    ChangeDueDate: null,
    ViewFile: null,
    FileNameChanged: null,
    ChangeConditionFlag: null,
    ChangeDescription: null,
    ChangeNotifyParty: null,
    ChangePriority: null,
    ChangeResponsibleParty: null,
    ChangeReviewRequired: null,
    InternalMessageAlert: null,
    BorrowerMessageAlert: null,
    TaskStatusAlert: null,
    GeneralAlert: null,
    LoanStatusAlert: null,
    FailedEmailAlert: null,
    FailedSmsAlert: null,
    NewLeadAlert: null,
  }),
  comparisonType: t.keyof({
    Immediately: null,
    OnLoanStatus: null,
    CreateInternalContact: null,
    UpdateInternalContact: null,
    Private: null,
    Group: null,
    Public: null,
    Al: null,
    Event: null,
    ToDo: null,
    Appointment: null,
    AutoApply: null,
    Confirm: null,
    RequestQuantity: null,
    LoanCharacteristic: null,
    BorrowerCharacteristic: null,
    LessThan: null,
    LessThanOrEqualTo: null,
    EqualTo: null,
    GreatherThan: null,
    GreaterThanOrEqualTo: null,
    NullOrEmpty: null,
    NotNullOrEmpty: null,
    StartsWith: null,
    Contains: null,
    DoesNotContain: null,
    In: null,
    NotIn: null,
    YesNo: null,
    TrueFalse: null,
    OnOff: null,
    Text: null,
    Integer: null,
    Decimal: null,
    MultiSelect: null,
    SelectList: null,
    Value: null,
    Docvalue: null,
    DataValidation: null,
    DocumentValidation: null,
    ManualValidation: null,
    Pdf: null,
    Doc: null,
    Txt: null,
    Excel: null,
    Csv: null,
    Img: null,
    ApplyToLoan: null,
    ApplyToPrimaryBorrower: null,
    ApplyToSelectBorrowers: null,
    ChangeStatus: null,
    Uploadfile: null,
    DeleteFile: null,
    DownloadFile: null,
    ExportFile: null,
    FileNoteUpdated: null,
    BorrowerNoteUpdated: null,
    DeleteTask: null,
    RemoveFileFromTrash: null,
    ConditionStatusChange: null,
    CreateTask: null,
    RestoreTask: null,
    MergeFile: null,
    PostponeTask: null,
    ChangeFollowUpDate: null,
    ChangeDueDate: null,
    ViewFile: null,
    FileNameChanged: null,
    ChangeConditionFlag: null,
    ChangeDescription: null,
    ChangeNotifyParty: null,
    ChangePriority: null,
    ChangeResponsibleParty: null,
    ChangeReviewRequired: null,
    InternalMessageAlert: null,
    BorrowerMessageAlert: null,
    TaskStatusAlert: null,
    GeneralAlert: null,
    LoanStatusAlert: null,
    FailedEmailAlert: null,
    FailedSmsAlert: null,
    NewLeadAlert: null,
  }),
  compareValue: t.string,
  documentTypeId: t.number,
  exist: t.boolean,
  qaTaskId: t.array(t.number),
});

export interface QATaskModel {
  qaTaskId?: number;
  taskName?: string;
  roleId?: number;
  documentTypeId?: number;
  dueDays?: number;
  borrowerTrigger?: number;
  companyId?: number;
  requestBorrower?: boolean;
}
export const QATaskModel = t.partial({
  qaTaskId: t.number,
  taskName: t.string,
  roleId: t.number,
  documentTypeId: t.number,
  dueDays: t.number,
  borrowerTrigger: t.number,
  companyId: t.number,
  requestBorrower: t.boolean,
});

export interface LoanStatusModel {
  loanStatusId?: number;
  loanStatusName?: string;
  selectByRole?: string;
  order?: number;
  showAsArchive?: boolean;
  hideFromCounter?: boolean;
  isLeadStatus?: boolean;
  emailFromRoleId?: number;
  roleModel?: RoleModel;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const LoanStatusModel = t.partial({
  loanStatusId: t.number,
  loanStatusName: t.string,
  selectByRole: t.string,
  order: t.number,
  showAsArchive: t.boolean,
  hideFromCounter: t.boolean,
  isLeadStatus: t.boolean,
  emailFromRoleId: t.number,
  roleModel: RoleModel,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface ChecklistModel {
  checklistId?: number;
  checkListName?: string;
  loanStatusId?: number;
  loanStatus?: LoanStatusModel;
  companyId?: number;
  companyModel?: CompanyModel;
}
export const ChecklistModel = t.partial({
  checklistId: t.number,
  checkListName: t.string,
  loanStatusId: t.number,
  loanStatus: LoanStatusModel,
  companyId: t.number,
  companyModel: CompanyModel,
});

export interface SetupReferenceModel {
  setupRefernceId?: number;
  tableName?: string;
  templateCompanyId?: number;
  templateId?: number;
  companyId?: number;
  insertedId?: number;
}
export const SetupReferenceModel = t.partial({
  setupRefernceId: t.number,
  tableName: t.string,
  templateCompanyId: t.number,
  templateId: t.number,
  companyId: t.number,
  insertedId: t.number,
});

export interface ProfileModel {
  userProfile?: UserProfile;
  integrations?: IntegrationsModel;
  thirdPartyCredentials?: Array<ThirdPartyCredentialsViewModel>;
  emailService?: EmailServiceModel;
  smsService?: SmsServiceModel;
  userName?: string;
  reminderEmailEnabled?: ConfigurationViewModel;
  reminderEmailInterval?: ConfigurationViewModel;
  reminderSmsEnabled?: ConfigurationViewModel;
  reminderSmsInterval?: ConfigurationViewModel;
  definedEmailTemplate?: DefinedEmailTemplateViewModel;
  definedSmsTemplate?: DefinedSmsTemplateModel;
}
export const ProfileModel = t.partial({
  userProfile: UserProfile,
  integrations: IntegrationsModel,
  thirdPartyCredentials: t.array(ThirdPartyCredentialsViewModel),
  emailService: EmailServiceModel,
  smsService: SmsServiceModel,
  userName: t.string,
  reminderEmailEnabled: ConfigurationViewModel,
  reminderEmailInterval: ConfigurationViewModel,
  reminderSmsEnabled: ConfigurationViewModel,
  reminderSmsInterval: ConfigurationViewModel,
  definedEmailTemplate: DefinedEmailTemplateViewModel,
  definedSmsTemplate: DefinedSmsTemplateModel,
});

export interface WizardEverythingElseRequestModel {
  templateCompanyId?: number;
  destinationCompanyId?: number;
}
export const WizardEverythingElseRequestModel = t.partial({
  templateCompanyId: t.number,
  destinationCompanyId: t.number,
});

export interface ReleaseNotesViewModel {
  id?: number;
  version?: string;
  uri?: string;
  releaseDate?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ReleaseNotesViewModel = t.partial({
  id: t.number,
  version: t.string,
  uri: t.string,
  releaseDate: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface RecentApplicationView {
  borrowerId?: number;
  applicationId?: number;
  displayText?: string;
}
export const RecentApplicationView = t.partial({
  borrowerId: t.number,
  applicationId: t.number,
  displayText: t.string,
});

export interface PermissionMenu {
  superAdmin?: boolean;
  admin?: boolean;
  creditMonitoringEnabled?: boolean;
  creditReportingEnabled?: boolean;
  docEditingEnabled?: boolean;
  docGenerationEnabled?: boolean;
  full1003Enabled?: boolean;
  inviteBorrowerCheckedByDefault?: boolean;
  leadManagementEnabled?: boolean;
  multipleCredentialSupportEnabled?: boolean;
  onlineApplicationEnabled?: boolean;
  prequalGenerationEnabled?: boolean;
  digitalAssetVerificationEnabled?: boolean;
  digitalEmploymentVerificationEnabled?: boolean;
  ausEnabled?: boolean;
  losEnabled?: boolean;
  campaignsEnabled?: boolean;
  smsAlertsEnabled?: boolean;
  showNewSubmissionForm?: boolean;
  bulkEditTasks?: boolean;
  readOnlyTasks?: boolean;
  companyId?: number;
  stackingOrderId?: number;
  userId?: string;
  recentApplications?: Array<RecentApplicationView>;
}
export const PermissionMenu = t.partial({
  superAdmin: t.boolean,
  admin: t.boolean,
  creditMonitoringEnabled: t.boolean,
  creditReportingEnabled: t.boolean,
  docEditingEnabled: t.boolean,
  docGenerationEnabled: t.boolean,
  full1003Enabled: t.boolean,
  inviteBorrowerCheckedByDefault: t.boolean,
  leadManagementEnabled: t.boolean,
  multipleCredentialSupportEnabled: t.boolean,
  onlineApplicationEnabled: t.boolean,
  prequalGenerationEnabled: t.boolean,
  digitalAssetVerificationEnabled: t.boolean,
  digitalEmploymentVerificationEnabled: t.boolean,
  ausEnabled: t.boolean,
  losEnabled: t.boolean,
  campaignsEnabled: t.boolean,
  smsAlertsEnabled: t.boolean,
  showNewSubmissionForm: t.boolean,
  bulkEditTasks: t.boolean,
  readOnlyTasks: t.boolean,
  companyId: t.number,
  stackingOrderId: t.number,
  userId: t.string,
  recentApplications: t.array(RecentApplicationView),
});

export interface CheckRegisterModel {
  username?: string;
  token?: string;
}
export const CheckRegisterModel = t.partial({
  username: t.string,
  token: t.string,
});

export interface InviteViewModel {
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  companyId?: number;
  sentDate?: string;
  registerDate?: string;
  isAdmin?: boolean;
  userId?: string;
  active?: boolean;
}
export const InviteViewModel = t.partial({
  userName: t.string,
  email: t.string,
  firstName: t.string,
  lastName: t.string,
  companyId: t.number,
  sentDate: t.string,
  registerDate: t.string,
  isAdmin: t.boolean,
  userId: t.string,
  active: t.boolean,
});

export interface LoanStatusAssociationModel {
  id?: number;
  loanPurposeId?: number;
  loanStatusId?: number;
  loanStatusModel?: LoanStatusModel;
  borrowerFriendlyStatus?: string;
  borrowerFriendlyBlurb?: string;
  supressBorrowerNotification?: boolean;
  companyId?: number;
  order?: number;
  associatedStatuses?: string;
  isLeadStatusAssociation?: boolean;
}
export const LoanStatusAssociationModel = t.partial({
  id: t.number,
  loanPurposeId: t.number,
  loanStatusId: t.number,
  loanStatusModel: LoanStatusModel,
  borrowerFriendlyStatus: t.string,
  borrowerFriendlyBlurb: t.string,
  supressBorrowerNotification: t.boolean,
  companyId: t.number,
  order: t.number,
  associatedStatuses: t.string,
  isLeadStatusAssociation: t.boolean,
});

export interface LoanTypeModel {
  loanTypeId?: number;
  loanTypeName?: string;
  mortgageAppliedForType?:
    | 'VA'
    | 'FHA'
    | 'Conventional'
    | 'USDARuralHousingService'
    | 'OtherMortgage';
  companyId?: number;
  showInOnlineApp?: boolean;
  defaultForOnlineApp?: boolean;
  order?: number;
}
export const LoanTypeModel = t.partial({
  loanTypeId: t.number,
  loanTypeName: t.string,
  mortgageAppliedForType: t.keyof({
    VA: null,
    FHA: null,
    Conventional: null,
    USDARuralHousingService: null,
    OtherMortgage: null,
  }),
  companyId: t.number,
  showInOnlineApp: t.boolean,
  defaultForOnlineApp: t.boolean,
  order: t.number,
});

export interface LoanPurposeModel {
  loanPurposeId?: number;
  loanPurposeName?: string;
  mortgageLoanPurpose?:
    | 'Refinance'
    | 'Purchase'
    | 'ConstructionOnly'
    | 'ConstructionToPermanent'
    | 'OtherLoanPurpose'
    | 'RefinanceCashOut';
  companyId?: number;
  order?: number;
}
export const LoanPurposeModel = t.partial({
  loanPurposeId: t.number,
  loanPurposeName: t.string,
  mortgageLoanPurpose: t.keyof({
    Refinance: null,
    Purchase: null,
    ConstructionOnly: null,
    ConstructionToPermanent: null,
    OtherLoanPurpose: null,
    RefinanceCashOut: null,
  }),
  companyId: t.number,
  order: t.number,
});

export interface TaskViewModel {
  taskId?: number;
  taskName?: string;
  triggerAssociations?: string;
  borrowerTrigger?:
    | 'Loan'
    | 'PrimaryBorrower'
    | 'AllBorrowers'
    | 'SelectBorrowers';
  isLeadTask?: boolean;
  roleId?: number;
  documentTypeId?: number;
  reviewRequiredRoleId?: number;
  notifyPartyRoleId?: number;
  documentTemplateModelId?: number;
  taskType?:
    | 'RequestDocument'
    | 'ViewDocument'
    | 'AcknowledgeReceipt'
    | 'EsignDocument'
    | 'RequestInformation'
    | 'PerformAction'
    | 'OnlineApplication'
    | 'DigitalAssetVerification'
    | 'GenerateDocument';
  defaultTaskPriority?: 'Low' | 'Normal' | 'High' | 'Immediate';
  dueDays?: number;
  permittedAgentTypes?: string;
  tasksOnCompletion?: string;
  documentDataHeader?: string;
  documentData?: string;
  docDataString?: string;
  requestBorrower?: boolean;
  alwaysShowPending?: boolean;
  helpUrl?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const TaskViewModel = t.partial({
  taskId: t.number,
  taskName: t.string,
  triggerAssociations: t.string,
  borrowerTrigger: t.keyof({
    Loan: null,
    PrimaryBorrower: null,
    AllBorrowers: null,
    SelectBorrowers: null,
  }),
  isLeadTask: t.boolean,
  roleId: t.number,
  documentTypeId: t.number,
  reviewRequiredRoleId: t.number,
  notifyPartyRoleId: t.number,
  documentTemplateModelId: t.number,
  taskType: t.keyof({
    RequestDocument: null,
    ViewDocument: null,
    AcknowledgeReceipt: null,
    EsignDocument: null,
    RequestInformation: null,
    PerformAction: null,
    OnlineApplication: null,
    DigitalAssetVerification: null,
    GenerateDocument: null,
  }),
  defaultTaskPriority: t.keyof({
    Low: null,
    Normal: null,
    High: null,
    Immediate: null,
  }),
  dueDays: t.number,
  permittedAgentTypes: t.string,
  tasksOnCompletion: t.string,
  documentDataHeader: t.string,
  documentData: t.string,
  docDataString: t.string,
  requestBorrower: t.boolean,
  alwaysShowPending: t.boolean,
  helpUrl: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface GlobalEmailMergeFieldModel {
  mergeFieldId?: number;
  mergeText?: string;
  displayName?: string;
  table?: string;
  column?: string;
  baseType?: string;
}
export const GlobalEmailMergeFieldModel = t.partial({
  mergeFieldId: t.number,
  mergeText: t.string,
  displayName: t.string,
  table: t.string,
  column: t.string,
  baseType: t.string,
});

export interface LookupTypeModel {
  id?: number;
  lookupTypeID?: number;
  lookupGroup?: string;
  lookupValue?: string;
  lookupDescription?: string;
  lookupOrder?: number;
}
export const LookupTypeModel = t.partial({
  id: t.number,
  lookupTypeID: t.number,
  lookupGroup: t.string,
  lookupValue: t.string,
  lookupDescription: t.string,
  lookupOrder: t.number,
});

export interface EmailCampaignModel {
  emailCampaignId?: number;
  emailCampaignName?: string;
  repeatDays?: number;
  active?: boolean;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const EmailCampaignModel = t.partial({
  emailCampaignId: t.number,
  emailCampaignName: t.string,
  repeatDays: t.number,
  active: t.boolean,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface EmailCampaignTriggerModelView {
  id?: number;
  emailCampaignId?: number;
  fieldName?: number;
  comparisionType?: number;
  compareValue?: string;
  companyId?: number;
  group?: string;
  emailCampaignIdString?: string;
  comparisionTypeString?: string;
  fieldNameString?: string;
  listComparision?: Array<LookupTypeModel>;
  listEmailCampaign?: Array<EmailCampaignModel>;
  listGlobalEmail?: Array<GlobalEmailMergeFieldModel>;
}
export const EmailCampaignTriggerModelView = t.partial({
  id: t.number,
  emailCampaignId: t.number,
  fieldName: t.number,
  comparisionType: t.number,
  compareValue: t.string,
  companyId: t.number,
  group: t.string,
  emailCampaignIdString: t.string,
  comparisionTypeString: t.string,
  fieldNameString: t.string,
  listComparision: t.array(LookupTypeModel),
  listEmailCampaign: t.array(EmailCampaignModel),
  listGlobalEmail: t.array(GlobalEmailMergeFieldModel),
});

export interface GetAllEmailCampaignTrigger {
  group?: string;
  listEmailCampaignTriggerModel?: Array<EmailCampaignTriggerModelView>;
}
export const GetAllEmailCampaignTrigger = t.partial({
  group: t.string,
  listEmailCampaignTriggerModel: t.array(EmailCampaignTriggerModelView),
});

export interface CharacteristicFieldViewModel {
  characteristicFieldId?: number;
  taskCategoryId?: number;
  fieldKey?: string;
  fieldType?:
    | 'Unspecified'
    | 'Text'
    | 'CheckBox'
    | 'RadioButton'
    | 'Email'
    | 'Phone'
    | 'Currency'
    | 'Percent';
  displayName?: string;
  order?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CharacteristicFieldViewModel = t.partial({
  characteristicFieldId: t.number,
  taskCategoryId: t.number,
  fieldKey: t.string,
  fieldType: t.keyof({
    Unspecified: null,
    Text: null,
    CheckBox: null,
    RadioButton: null,
    Email: null,
    Phone: null,
    Currency: null,
    Percent: null,
  }),
  displayName: t.string,
  order: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CharacteristicViewModel {
  taskCategoryId?: number;
  taskCategoryName?: string;
  taskOption?: 'AutoApply' | 'Confirm' | 'RequestQuantity';
  characteristicType?: 'LoanCharacteristic' | 'BorrowerCharacteristic';
  order?: number;
  fields?: Array<CharacteristicFieldViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CharacteristicViewModel = t.partial({
  taskCategoryId: t.number,
  taskCategoryName: t.string,
  taskOption: t.keyof({
    AutoApply: null,
    Confirm: null,
    RequestQuantity: null,
  }),
  characteristicType: t.keyof({
    LoanCharacteristic: null,
    BorrowerCharacteristic: null,
  }),
  order: t.number,
  fields: t.array(CharacteristicFieldViewModel),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CharacteristicModel {
  taskCategoryId?: number;
  taskCategoryName?: string;
  taskOption?: 'AutoApply' | 'Confirm' | 'RequestQuantity';
  characteristicType?: 'LoanCharacteristic' | 'BorrowerCharacteristic';
  order?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CharacteristicModel = t.partial({
  taskCategoryId: t.number,
  taskCategoryName: t.string,
  taskOption: t.keyof({
    AutoApply: null,
    Confirm: null,
    RequestQuantity: null,
  }),
  characteristicType: t.keyof({
    LoanCharacteristic: null,
    BorrowerCharacteristic: null,
  }),
  order: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface DocumentTypeModel {
  documentTypeId?: number;
  documentTypeName?: string;
  order?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const DocumentTypeModel = t.partial({
  documentTypeId: t.number,
  documentTypeName: t.string,
  order: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface DocumentTemplateModel {
  documentTemplateId?: number;
  documentTypeId?: number;
  documentTemplateCategory?:
    | 'DocumentGeneration'
    | 'EConsent'
    | 'CreditAuth'
    | 'PreQual';
  documentTemplateType?: 'Unspecified' | 'Html' | 'Pdf';
  documentTemplateName?: string;
  description?: string;
  headerHtml?: string;
  bodyHtml?: string;
  footerHtml?: string;
  pdfData?: string;
  availableFieldsJson?: string;
  fieldConfigurationJson?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const DocumentTemplateModel = t.partial({
  documentTemplateId: t.number,
  documentTypeId: t.number,
  documentTemplateCategory: t.keyof({
    DocumentGeneration: null,
    EConsent: null,
    CreditAuth: null,
    PreQual: null,
  }),
  documentTemplateType: t.keyof({
    Unspecified: null,
    Html: null,
    Pdf: null,
  }),
  documentTemplateName: t.string,
  description: t.string,
  headerHtml: t.string,
  bodyHtml: t.string,
  footerHtml: t.string,
  pdfData: t.string,
  availableFieldsJson: t.string,
  fieldConfigurationJson: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CustomTaskModel {
  customTaskId?: number;
  taskCategoryId?: number;
  taskCategoryModel?: CharacteristicModel;
  loanStatusId?: number;
  loanStatusModel?: LoanStatusModel;
  taskDescription?: string;
  option?: 'Immediately' | 'OnLoanStatus';
  applyTo?: 'Loan' | 'PrimaryBorrower' | 'SelectBorrowers';
  roleId?: number;
  roleModel?: RoleModel;
  documentTypeId?: number;
  documentType?: DocumentTypeModel;
  reviewRequiredRoleId?: number;
  reviewRequiredRoleModel?: RoleModel;
  notifyPartyRoleId?: number;
  notifyPartyRoleModel?: RoleModel;
  documentTemplateModelId?: number;
  documentTemplateModel?: DocumentTemplateModel;
  taskType?:
    | 'RequestDocument'
    | 'ViewDocument'
    | 'AcknowledgeReceipt'
    | 'EsignDocument'
    | 'RequestInformation'
    | 'PerformAction'
    | 'OnlineApplication'
    | 'DigitalAssetVerification'
    | 'GenerateDocument';
  dueDays?: number;
  permittedAgentTypes?: string;
  tasksOnCompletion?: string;
  documentDataHeader?: string;
  defaultTaskPriority?: 'Low' | 'Normal' | 'High' | 'Immediate';
  docDataString?: string;
  requestBorrower?: boolean;
  alwaysShowPending?: boolean;
  helpUrl?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CustomTaskModel = t.partial({
  customTaskId: t.number,
  taskCategoryId: t.number,
  taskCategoryModel: CharacteristicModel,
  loanStatusId: t.number,
  loanStatusModel: LoanStatusModel,
  taskDescription: t.string,
  option: t.keyof({
    Immediately: null,
    OnLoanStatus: null,
  }),
  applyTo: t.keyof({
    Loan: null,
    PrimaryBorrower: null,
    SelectBorrowers: null,
  }),
  roleId: t.number,
  roleModel: RoleModel,
  documentTypeId: t.number,
  documentType: DocumentTypeModel,
  reviewRequiredRoleId: t.number,
  reviewRequiredRoleModel: RoleModel,
  notifyPartyRoleId: t.number,
  notifyPartyRoleModel: RoleModel,
  documentTemplateModelId: t.number,
  documentTemplateModel: DocumentTemplateModel,
  taskType: t.keyof({
    RequestDocument: null,
    ViewDocument: null,
    AcknowledgeReceipt: null,
    EsignDocument: null,
    RequestInformation: null,
    PerformAction: null,
    OnlineApplication: null,
    DigitalAssetVerification: null,
    GenerateDocument: null,
  }),
  dueDays: t.number,
  permittedAgentTypes: t.string,
  tasksOnCompletion: t.string,
  documentDataHeader: t.string,
  defaultTaskPriority: t.keyof({
    Low: null,
    Normal: null,
    High: null,
    Immediate: null,
  }),
  docDataString: t.string,
  requestBorrower: t.boolean,
  alwaysShowPending: t.boolean,
  helpUrl: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CustomTaskViewModel {
  customTaskId?: number;
  taskCategoryId?: number;
  loanStatusId?: number;
  taskDescription?: string;
  option?: 'Immediately' | 'OnLoanStatus';
  applyTo?: 'Loan' | 'PrimaryBorrower' | 'SelectBorrowers';
  roleId?: number;
  documentTypeId?: number;
  reviewRequiredRoleId?: number;
  notifyPartyRoleId?: number;
  documentTemplateModelId?: number;
  taskType?:
    | 'RequestDocument'
    | 'ViewDocument'
    | 'AcknowledgeReceipt'
    | 'EsignDocument'
    | 'RequestInformation'
    | 'PerformAction'
    | 'OnlineApplication'
    | 'DigitalAssetVerification'
    | 'GenerateDocument';
  defaultTaskPriority?: 'Low' | 'Normal' | 'High' | 'Immediate';
  dueDays?: number;
  permittedAgentTypes?: string;
  tasksOnCompletion?: string;
  documentDataHeader?: string;
  documentData?: string;
  docDataString?: string;
  requestBorrower?: boolean;
  alwaysShowPending?: boolean;
  helpUrl?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CustomTaskViewModel = t.partial({
  customTaskId: t.number,
  taskCategoryId: t.number,
  loanStatusId: t.number,
  taskDescription: t.string,
  option: t.keyof({
    Immediately: null,
    OnLoanStatus: null,
  }),
  applyTo: t.keyof({
    Loan: null,
    PrimaryBorrower: null,
    SelectBorrowers: null,
  }),
  roleId: t.number,
  documentTypeId: t.number,
  reviewRequiredRoleId: t.number,
  notifyPartyRoleId: t.number,
  documentTemplateModelId: t.number,
  taskType: t.keyof({
    RequestDocument: null,
    ViewDocument: null,
    AcknowledgeReceipt: null,
    EsignDocument: null,
    RequestInformation: null,
    PerformAction: null,
    OnlineApplication: null,
    DigitalAssetVerification: null,
    GenerateDocument: null,
  }),
  defaultTaskPriority: t.keyof({
    Low: null,
    Normal: null,
    High: null,
    Immediate: null,
  }),
  dueDays: t.number,
  permittedAgentTypes: t.string,
  tasksOnCompletion: t.string,
  documentDataHeader: t.string,
  documentData: t.string,
  docDataString: t.string,
  requestBorrower: t.boolean,
  alwaysShowPending: t.boolean,
  helpUrl: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface AgentTypeModel {
  agentTypeId?: number;
  agentTypeName?: string;
  order?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const AgentTypeModel = t.partial({
  agentTypeId: t.number,
  agentTypeName: t.string,
  order: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface LenderModelView {
  companyId?: number;
  lenderId?: number;
  nameOfLender?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
}
export const LenderModelView = t.partial({
  companyId: t.number,
  lenderId: t.number,
  nameOfLender: t.string,
  phone: t.string,
  address: t.string,
  city: t.string,
  state: t.string,
  zip: t.string,
});

export interface OrgChartModel {
  userId?: string;
  reportTo?: string;
}
export const OrgChartModel = t.partial({
  userId: t.string,
  reportTo: t.string,
});

export interface UserProfileViewModel {
  id?: string;
  companyId?: number;
  stackOrderId?: number;
  roleId?: number;
  userName?: string;
  userType?: 'Admin' | 'Borrower' | 'Agent';
  avatarId?: string;
  firstName?: string;
  lastName?: string;
  timeZone?: string;
  title?: string;
  nmls?: string;
  emailSignature?: string;
  smsSignature?: string;
  flagAdmin?: boolean;
  reportTo?: string;
  inviteDate?: string;
  confirmationDate?: string;
  twoFactorEnabled?: boolean;
  email?: string;
  emailConfirmed?: boolean;
  phoneNumber?: string;
  phoneNumberConfirmed?: boolean;
  cellPhone?: string;
  workPhone?: string;
  homePhone?: string;
  fax?: string;
  mailingStreet?: string;
  mailingPOBox?: string;
  mailingCity?: string;
  mailingState?: string;
  mailingZip?: string;
  active?: boolean;
}
export const UserProfileViewModel = t.partial({
  id: t.string,
  companyId: t.number,
  stackOrderId: t.number,
  roleId: t.number,
  userName: t.string,
  userType: t.keyof({
    Admin: null,
    Borrower: null,
    Agent: null,
  }),
  avatarId: t.string,
  firstName: t.string,
  lastName: t.string,
  timeZone: t.string,
  title: t.string,
  nmls: t.string,
  emailSignature: t.string,
  smsSignature: t.string,
  flagAdmin: t.boolean,
  reportTo: t.string,
  inviteDate: t.string,
  confirmationDate: t.string,
  twoFactorEnabled: t.boolean,
  email: t.string,
  emailConfirmed: t.boolean,
  phoneNumber: t.string,
  phoneNumberConfirmed: t.boolean,
  cellPhone: t.string,
  workPhone: t.string,
  homePhone: t.string,
  fax: t.string,
  mailingStreet: t.string,
  mailingPOBox: t.string,
  mailingCity: t.string,
  mailingState: t.string,
  mailingZip: t.string,
  active: t.boolean,
});

export interface AgentViewModel {
  agentId?: number;
  userId?: string;
  userProfile?: UserProfileViewModel;
  firstName?: string;
  lastName?: string;
  title?: string;
  department?: string;
  orgName?: string;
  nmlsId?: string;
  mobilePhone?: string;
  workPhone?: string;
  extPhone?: string;
  fax?: string;
  email?: string;
  assistantName?: string;
  assistantPhone?: string;
  assistantEmail?: string;
  doNotCall?: boolean;
  doNotEmail?: boolean;
  alertViaSms?: boolean;
  mailingStreet?: string;
  mailingPOBox?: string;
  mailingCity?: string;
  mailingState?: string;
  mailingZip?: string;
  agentListIds?: Array<number>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const AgentViewModel = t.partial({
  agentId: t.number,
  userId: t.string,
  userProfile: UserProfileViewModel,
  firstName: t.string,
  lastName: t.string,
  title: t.string,
  department: t.string,
  orgName: t.string,
  nmlsId: t.string,
  mobilePhone: t.string,
  workPhone: t.string,
  extPhone: t.string,
  fax: t.string,
  email: t.string,
  assistantName: t.string,
  assistantPhone: t.string,
  assistantEmail: t.string,
  doNotCall: t.boolean,
  doNotEmail: t.boolean,
  alertViaSms: t.boolean,
  mailingStreet: t.string,
  mailingPOBox: t.string,
  mailingCity: t.string,
  mailingState: t.string,
  mailingZip: t.string,
  agentListIds: t.array(t.number),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface ReferralSourceModel {
  agentId?: number;
  firstName?: string;
  lastName?: string;
  title?: string;
  orgName?: string;
}
export const ReferralSourceModel = t.partial({
  agentId: t.number,
  firstName: t.string,
  lastName: t.string,
  title: t.string,
  orgName: t.string,
});

export interface AgentFull {
  agent?: AgentViewModel;
  portalUserName?: string;
  agentTypeId?: number;
  isEdit?: boolean;
  accountStatus?: 'NotInvited' | 'Invited' | 'Live';
}
export const AgentFull = t.partial({
  agent: AgentViewModel,
  portalUserName: t.string,
  agentTypeId: t.number,
  isEdit: t.boolean,
  accountStatus: t.keyof({
    NotInvited: null,
    Invited: null,
    Live: null,
  }),
});

export interface PipelineApplicationView {
  primaryBorrowerId?: number;
  applicationId?: number;
  lastName?: string;
  firstName?: string;
  dateCreateBorrower?: string;
  refNumber?: string;
  mailingStreet?: string;
  mailingCity?: string;
  mailingState?: string;
  mailingZip?: string;
  dateInserted?: string;
  loanAmount?: number;
  interestRate?: number;
  loanStatusId?: number;
  loanStatusName?: string;
  loanPurposeId?: number;
  loanPurposeName?: string;
  loanTypeId?: number;
  loanTypeName?: string;
  companyId?: number;
  userId?: string;
  showAsArchive?: boolean;
  hideFromCounter?: boolean;
  appCreateDate?: string;
  lockExpirationDate?: string;
  estimatedClosingDate?: string;
  cdIssueDate?: string;
  cdSignedDate?: string;
  originationDate?: string;
  primaryRoleContact?: string;
  primaryRoleContactId?: string;
  primaryRoleName?: string;
  lenderName?: string;
  loanStatusChangedDate?: string;
}
export const PipelineApplicationView = t.partial({
  primaryBorrowerId: t.number,
  applicationId: t.number,
  lastName: t.string,
  firstName: t.string,
  dateCreateBorrower: t.string,
  refNumber: t.string,
  mailingStreet: t.string,
  mailingCity: t.string,
  mailingState: t.string,
  mailingZip: t.string,
  dateInserted: t.string,
  loanAmount: t.number,
  interestRate: t.number,
  loanStatusId: t.number,
  loanStatusName: t.string,
  loanPurposeId: t.number,
  loanPurposeName: t.string,
  loanTypeId: t.number,
  loanTypeName: t.string,
  companyId: t.number,
  userId: t.string,
  showAsArchive: t.boolean,
  hideFromCounter: t.boolean,
  appCreateDate: t.string,
  lockExpirationDate: t.string,
  estimatedClosingDate: t.string,
  cdIssueDate: t.string,
  cdSignedDate: t.string,
  originationDate: t.string,
  primaryRoleContact: t.string,
  primaryRoleContactId: t.string,
  primaryRoleName: t.string,
  lenderName: t.string,
  loanStatusChangedDate: t.string,
});

export interface AgentListViewModel {
  agentListId?: number;
  name?: string;
  description?: string;
  agentIds?: Array<number>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const AgentListViewModel = t.partial({
  agentListId: t.number,
  name: t.string,
  description: t.string,
  agentIds: t.array(t.number),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface AgentNoteViewModel {
  messageId?: number;
  agentId?: number;
  userId?: string;
  content?: string;
  postTime?: string;
  userFirstName?: string;
  userLastName?: string;
  userAvatar?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const AgentNoteViewModel = t.partial({
  messageId: t.number,
  agentId: t.number,
  userId: t.string,
  content: t.string,
  postTime: t.string,
  userFirstName: t.string,
  userLastName: t.string,
  userAvatar: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface ConfirmRegisterRequestModel {
  userName?: string;
  token?: string;
}
export const ConfirmRegisterRequestModel = t.partial({
  userName: t.string,
  token: t.string,
});

export interface RegisterModel {
  token?: string;
  isConfirmed?: boolean;
  userName: string;
  password: string;
  confirmPassword?: string;
}
export const RegisterModel = t.intersection([
  t.type({
    userName: t.string,
    password: t.string,
  }),
  t.partial({
    token: t.string,
    isConfirmed: t.boolean,
    confirmPassword: t.string,
  }),
]);

export interface BorrowerView {
  borrowerId?: number;
  borrowerName?: string;
  borrowerPhone?: string;
  borrowerEmail?: string;
}
export const BorrowerView = t.partial({
  borrowerId: t.number,
  borrowerName: t.string,
  borrowerPhone: t.string,
  borrowerEmail: t.string,
});

export interface ApplicationView {
  applicationId?: number;
  refNumber?: string;
  streetViewImageUrl?: string;
  mapViewImageUrl?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  loanStatus?: string;
  blurb?: string;
  loanPurpose?: string;
  loanAmount?: number;
  interestRate?: number;
  contactRole?: string;
  contactName?: string;
  contactNumber?: string;
  companyId?: number;
  companyName?: string;
  applicationName?: string;
  onlineAppInProgress?: boolean;
  forceFinishOnlineApp?: boolean;
  myDetails?: BorrowerView;
  otherBorrowersOnLoan?: Array<BorrowerView>;
}
export const ApplicationView = t.partial({
  applicationId: t.number,
  refNumber: t.string,
  streetViewImageUrl: t.string,
  mapViewImageUrl: t.string,
  address: t.string,
  city: t.string,
  state: t.string,
  zip: t.string,
  loanStatus: t.string,
  blurb: t.string,
  loanPurpose: t.string,
  loanAmount: t.number,
  interestRate: t.number,
  contactRole: t.string,
  contactName: t.string,
  contactNumber: t.string,
  companyId: t.number,
  companyName: t.string,
  applicationName: t.string,
  onlineAppInProgress: t.boolean,
  forceFinishOnlineApp: t.boolean,
  myDetails: BorrowerView,
  otherBorrowersOnLoan: t.array(BorrowerView),
});

export interface ReferralView {
  leadId?: number;
  applicationId?: number;
  streetViewImageUrl?: string;
  mapViewImageUrl?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  loanStatus?: string;
  blurb?: string;
  loanPurpose?: string;
  loanAmount?: number;
  interestRate?: number;
  contactRole?: string;
  contactName?: string;
  contactNumber?: string;
  companyId?: number;
  companyName?: string;
  applicationName?: string;
  createDate?: string;
  borrowerDetails?: BorrowerView;
}
export const ReferralView = t.partial({
  leadId: t.number,
  applicationId: t.number,
  streetViewImageUrl: t.string,
  mapViewImageUrl: t.string,
  address: t.string,
  city: t.string,
  state: t.string,
  zip: t.string,
  loanStatus: t.string,
  blurb: t.string,
  loanPurpose: t.string,
  loanAmount: t.number,
  interestRate: t.number,
  contactRole: t.string,
  contactName: t.string,
  contactNumber: t.string,
  companyId: t.number,
  companyName: t.string,
  applicationName: t.string,
  createDate: t.string,
  borrowerDetails: BorrowerView,
});

export interface PortalContentViewModel {
  companyId?: number;
  userId?: string;
  aboutUsContent?: string;
  referralContent?: string;
  showReferralTerms?: boolean;
  referralTermsContent?: string;
  showPrequalLetterGeneration?: boolean;
}
export const PortalContentViewModel = t.partial({
  companyId: t.number,
  userId: t.string,
  aboutUsContent: t.string,
  referralContent: t.string,
  showReferralTerms: t.boolean,
  referralTermsContent: t.string,
  showPrequalLetterGeneration: t.boolean,
});

export interface PortalTaskDocument {
  documentGuid?: string;
  documentUrl?: string;
  fileName?: string;
  borrowerNote?: string;
}
export const PortalTaskDocument = t.partial({
  documentGuid: t.string,
  documentUrl: t.string,
  fileName: t.string,
  borrowerNote: t.string,
});

export interface PortalTaskModel {
  taskId?: number;
  taskTypeId?: string;
  borrowerTaskType?:
    | 'RequestDocument'
    | 'ViewDocument'
    | 'AcknowledgeReceipt'
    | 'EsignDocument'
    | 'RequestInformation'
    | 'PerformAction'
    | 'OnlineApplication'
    | 'DigitalAssetVerification'
    | 'GenerateDocument';
  description?: string;
  docType?: string;
  docSortOrder?: number;
  submittedDate?: string;
  approvedDate?: string;
  dueDate?: string;
  templateDocumentUrl?: string;
  borrowerId?: number;
  borrowerName?: string;
  borrowerFacingNote?: string;
  borrowerTaskStatus?: 'Pending' | 'Submitted' | 'Rejected' | 'Completed';
  linkedDocuments?: Array<PortalTaskDocument>;
  allowUpload?: boolean;
}
export const PortalTaskModel = t.partial({
  taskId: t.number,
  taskTypeId: t.string,
  borrowerTaskType: t.keyof({
    RequestDocument: null,
    ViewDocument: null,
    AcknowledgeReceipt: null,
    EsignDocument: null,
    RequestInformation: null,
    PerformAction: null,
    OnlineApplication: null,
    DigitalAssetVerification: null,
    GenerateDocument: null,
  }),
  description: t.string,
  docType: t.string,
  docSortOrder: t.number,
  submittedDate: t.string,
  approvedDate: t.string,
  dueDate: t.string,
  templateDocumentUrl: t.string,
  borrowerId: t.number,
  borrowerName: t.string,
  borrowerFacingNote: t.string,
  borrowerTaskStatus: t.keyof({
    Pending: null,
    Submitted: null,
    Rejected: null,
    Completed: null,
  }),
  linkedDocuments: t.array(PortalTaskDocument),
  allowUpload: t.boolean,
});

export interface PortalTasks {
  requested?: Array<PortalTaskModel>;
  submitted?: Array<PortalTaskModel>;
  approved?: Array<PortalTaskModel>;
}
export const PortalTasks = t.partial({
  requested: t.array(PortalTaskModel),
  submitted: t.array(PortalTaskModel),
  approved: t.array(PortalTaskModel),
});

export interface PrequalDetailViewModel {
  prequalDetailId?: number;
  applicationId?: number;
  loanProgramDescription?: string;
  maxPurchasePrice?: number;
  downPaymentPercent?: number;
  interestRate?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const PrequalDetailViewModel = t.partial({
  prequalDetailId: t.number,
  applicationId: t.number,
  loanProgramDescription: t.string,
  maxPurchasePrice: t.number,
  downPaymentPercent: t.number,
  interestRate: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface GeneratePrequalLetterRequest {
  productDescription?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  loanAmount?: number;
  purchasePrice?: number;
  downPayment?: number;
  interestRate?: number;
}
export const GeneratePrequalLetterRequest = t.partial({
  productDescription: t.string,
  address: t.string,
  city: t.string,
  state: t.string,
  zip: t.string,
  loanAmount: t.number,
  purchasePrice: t.number,
  downPayment: t.number,
  interestRate: t.number,
});

export interface GeneratePrequalLetterResponse {
  docFileGuid?: string;
}
export const GeneratePrequalLetterResponse = t.partial({
  docFileGuid: t.string,
});

export interface LoanContact {
  userId?: string;
  name?: string;
  title?: string;
  phone?: string;
  email?: string;
  avatarUrl?: string;
  order?: number;
}
export const LoanContact = t.partial({
  userId: t.string,
  name: t.string,
  title: t.string,
  phone: t.string,
  email: t.string,
  avatarUrl: t.string,
  order: t.number,
});

export interface AgentContact {
  firstName?: string;
  lastName?: string;
  title?: string;
  agentNMLS?: string;
  agentAvatarUrl?: string;
  agentAddressUrl?: string;
  phoneNumber?: string;
  faxNumber?: string;
  emailAddress?: string;
  companyName?: string;
  companyUrl?: string;
  companyNMLS?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  loanContacts?: Array<LoanContact>;
}
export const AgentContact = t.partial({
  firstName: t.string,
  lastName: t.string,
  title: t.string,
  agentNMLS: t.string,
  agentAvatarUrl: t.string,
  agentAddressUrl: t.string,
  phoneNumber: t.string,
  faxNumber: t.string,
  emailAddress: t.string,
  companyName: t.string,
  companyUrl: t.string,
  companyNMLS: t.string,
  address: t.string,
  city: t.string,
  state: t.string,
  zip: t.string,
  loanContacts: t.array(LoanContact),
});

export interface DocFileViewModel {
  guid?: string;
  loanDocId?: number;
  applicationId?: number;
  borrowerId?: number;
  documentTypeId?: number;
  note?: string;
  borrowerNote?: string;
  condition?: boolean;
  fileName?: string;
  mimeType?: string;
  fileData?: string;
  createDate?: string;
  exportDate?: string;
  active?: boolean;
}
export const DocFileViewModel = t.partial({
  guid: t.string,
  loanDocId: t.number,
  applicationId: t.number,
  borrowerId: t.number,
  documentTypeId: t.number,
  note: t.string,
  borrowerNote: t.string,
  condition: t.boolean,
  fileName: t.string,
  mimeType: t.string,
  fileData: t.string,
  createDate: t.string,
  exportDate: t.string,
  active: t.boolean,
});

export interface LoanDocViewModel {
  loanDocId?: number;
  applicationId?: number;
  borrowerID?: number;
  documentTypeId?: number;
  description?: string;
  note?: string;
  expirationDate?: string;
  retask?: boolean;
  active?: boolean;
  docFiles?: Array<DocFileViewModel>;
}
export const LoanDocViewModel = t.partial({
  loanDocId: t.number,
  applicationId: t.number,
  borrowerID: t.number,
  documentTypeId: t.number,
  description: t.string,
  note: t.string,
  expirationDate: t.string,
  retask: t.boolean,
  active: t.boolean,
  docFiles: t.array(DocFileViewModel),
});

export interface DocumentTemplateFieldViewModel {
  documentTemplateFieldId?: number;
  documentTemplateId?: number;
  fieldKey?: string;
  fieldType?:
    | 'Unspecified'
    | 'Text'
    | 'CheckBox'
    | 'RadioButton'
    | 'Email'
    | 'Phone'
    | 'Currency'
    | 'Percent';
  displayName?: string;
  globalMergeFieldKey?: string;
  defaultValue?: string;
  visible?: boolean;
  editable?: boolean;
  documentTemplatePageId?: number;
  pageOrder?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const DocumentTemplateFieldViewModel = t.partial({
  documentTemplateFieldId: t.number,
  documentTemplateId: t.number,
  fieldKey: t.string,
  fieldType: t.keyof({
    Unspecified: null,
    Text: null,
    CheckBox: null,
    RadioButton: null,
    Email: null,
    Phone: null,
    Currency: null,
    Percent: null,
  }),
  displayName: t.string,
  globalMergeFieldKey: t.string,
  defaultValue: t.string,
  visible: t.boolean,
  editable: t.boolean,
  documentTemplatePageId: t.number,
  pageOrder: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface DocumentTemplateViewModel {
  documentTemplateId?: number;
  documentTypeId?: number;
  documentTemplateCategory?:
    | 'DocumentGeneration'
    | 'EConsent'
    | 'CreditAuth'
    | 'PreQual';
  documentTemplateType?: 'Unspecified' | 'Html' | 'Pdf';
  documentTemplateName?: string;
  description?: string;
  headerHtml?: string;
  bodyHtml?: string;
  footerHtml?: string;
  hasPdfData?: boolean;
  pdfData?: string;
  fields?: Array<DocumentTemplateFieldViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const DocumentTemplateViewModel = t.partial({
  documentTemplateId: t.number,
  documentTypeId: t.number,
  documentTemplateCategory: t.keyof({
    DocumentGeneration: null,
    EConsent: null,
    CreditAuth: null,
    PreQual: null,
  }),
  documentTemplateType: t.keyof({
    Unspecified: null,
    Html: null,
    Pdf: null,
  }),
  documentTemplateName: t.string,
  description: t.string,
  headerHtml: t.string,
  bodyHtml: t.string,
  footerHtml: t.string,
  hasPdfData: t.boolean,
  pdfData: t.string,
  fields: t.array(DocumentTemplateFieldViewModel),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface LoanDocTaskViewModel {
  loanDocTaskId?: number;
  taskCategoryId?: number;
  leadId?: number;
  applicationId?: number;
  borrowerId?: number;
  taskId?: number;
  customTaskId?: number;
  borrowerCharacteristicId?: number;
  loanCharacteristicId?: number;
  documentTemplateModelId?: number;
  loanDocId?: number;
  documentTypeId?: number;
  roleId?: number;
  userId?: string;
  notifyPartyId?: string;
  reviewPartyId?: string;
  templateDocumentUrl?: string;
  helpUrl?: string;
  taskType?:
    | 'RequestDocument'
    | 'ViewDocument'
    | 'AcknowledgeReceipt'
    | 'EsignDocument'
    | 'RequestInformation'
    | 'PerformAction'
    | 'OnlineApplication'
    | 'DigitalAssetVerification'
    | 'GenerateDocument';
  taskPriority?: 'Low' | 'Normal' | 'High' | 'Immediate';
  description?: string;
  note?: string;
  borrowerFacingNote?: string;
  requestedBy?: string;
  dueDays?: number;
  conditionText?: string;
  taskStatus?:
    | 'Pending'
    | 'Submitted'
    | 'Rejected'
    | 'Approved'
    | 'NotApplicable'
    | 'Requested'
    | 'Completed'
    | 'ReviewReady';
  conditionStatus?:
    | 'ConditionPending'
    | 'ConditionCleared'
    | 'ConditionReOpened'
    | 'ConditionNotApplicable';
  conditionType?: 'PTS' | 'PTD' | 'PTF' | 'PTC';
  requestBorrower?: boolean;
  condition?: boolean;
  requiresReview?: boolean;
  requestDate?: string;
  dueDate?: string;
  submittedDate?: string;
  acknowledgementDate?: string;
  completeDate?: string;
  followUpDate?: string;
  active?: boolean;
  taskModel?: TaskViewModel;
  customTaskModel?: CustomTaskViewModel;
  loanDocModel?: LoanDocViewModel;
  documentTemplateModel?: DocumentTemplateViewModel;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const LoanDocTaskViewModel = t.partial({
  loanDocTaskId: t.number,
  taskCategoryId: t.number,
  leadId: t.number,
  applicationId: t.number,
  borrowerId: t.number,
  taskId: t.number,
  customTaskId: t.number,
  borrowerCharacteristicId: t.number,
  loanCharacteristicId: t.number,
  documentTemplateModelId: t.number,
  loanDocId: t.number,
  documentTypeId: t.number,
  roleId: t.number,
  userId: t.string,
  notifyPartyId: t.string,
  reviewPartyId: t.string,
  templateDocumentUrl: t.string,
  helpUrl: t.string,
  taskType: t.keyof({
    RequestDocument: null,
    ViewDocument: null,
    AcknowledgeReceipt: null,
    EsignDocument: null,
    RequestInformation: null,
    PerformAction: null,
    OnlineApplication: null,
    DigitalAssetVerification: null,
    GenerateDocument: null,
  }),
  taskPriority: t.keyof({
    Low: null,
    Normal: null,
    High: null,
    Immediate: null,
  }),
  description: t.string,
  note: t.string,
  borrowerFacingNote: t.string,
  requestedBy: t.string,
  dueDays: t.number,
  conditionText: t.string,
  taskStatus: t.keyof({
    Pending: null,
    Submitted: null,
    Rejected: null,
    Approved: null,
    NotApplicable: null,
    Requested: null,
    Completed: null,
    ReviewReady: null,
  }),
  conditionStatus: t.keyof({
    ConditionPending: null,
    ConditionCleared: null,
    ConditionReOpened: null,
    ConditionNotApplicable: null,
  }),
  conditionType: t.keyof({
    PTS: null,
    PTD: null,
    PTF: null,
    PTC: null,
  }),
  requestBorrower: t.boolean,
  condition: t.boolean,
  requiresReview: t.boolean,
  requestDate: t.string,
  dueDate: t.string,
  submittedDate: t.string,
  acknowledgementDate: t.string,
  completeDate: t.string,
  followUpDate: t.string,
  active: t.boolean,
  taskModel: TaskViewModel,
  customTaskModel: CustomTaskViewModel,
  loanDocModel: LoanDocViewModel,
  documentTemplateModel: DocumentTemplateViewModel,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface ReferralAgent {
  userId?: string;
  firstName?: string;
  lastName?: string;
}
export const ReferralAgent = t.partial({
  userId: t.string,
  firstName: t.string,
  lastName: t.string,
});

export interface ReferralModel {
  referToUserId?: string;
  referralType?: 'Borrower' | 'Agent';
  firstName?: string;
  lastName?: string;
  userContact?: string;
  email?: string;
  phone?: string;
  note?: string;
  referredByName?: string;
  referredByEmail?: string;
  referredByPhone?: string;
}
export const ReferralModel = t.partial({
  referToUserId: t.string,
  referralType: t.keyof({
    Borrower: null,
    Agent: null,
  }),
  firstName: t.string,
  lastName: t.string,
  userContact: t.string,
  email: t.string,
  phone: t.string,
  note: t.string,
  referredByName: t.string,
  referredByEmail: t.string,
  referredByPhone: t.string,
});

export interface CallbackModel {
  applicationId?: number;
  bestContactNumber?: string;
  note?: string;
  bestCallbackTime?: string;
}
export const CallbackModel = t.partial({
  applicationId: t.number,
  bestContactNumber: t.string,
  note: t.string,
  bestCallbackTime: t.string,
});

export interface LiveData {
  applicationId?: number;
  taskCount?: number;
  messageCount?: number;
}
export const LiveData = t.partial({
  applicationId: t.number,
  taskCount: t.number,
  messageCount: t.number,
});

export interface PortalLiveData {
  total?: LiveData;
  applicationTotals?: Record<string, LiveData>;
}
export const PortalLiveData = t.partial({
  total: LiveData,
  applicationTotals: t.record(t.string, LiveData),
});

export interface BorrowerDto {
  borrowerId?: number;
  companyId?: number;
  creditScore?: number;
  firstName?: string;
  lastName?: string;
  last4Ssn?: string;
  userId?: string;
  phone?: string;
  email?: string;
  isRegister?: boolean;
  isInvited?: boolean;
  isPrimary?: boolean;
  isPortalMerged?: boolean;
  applicationId?: number;
  lastTimeLogin?: string;
  birthDate?: string;
  mailingStreet?: string;
  mailingCity?: string;
  mailingState?: string;
  mailingZip?: string;
  borrowerContact?: string;
  creditMonitoringStatus?: 'Unset' | 'Active' | 'Disabled';
  dateCreateBorrower?: string;
}
export const BorrowerDto = t.partial({
  borrowerId: t.number,
  companyId: t.number,
  creditScore: t.number,
  firstName: t.string,
  lastName: t.string,
  last4Ssn: t.string,
  userId: t.string,
  phone: t.string,
  email: t.string,
  isRegister: t.boolean,
  isInvited: t.boolean,
  isPrimary: t.boolean,
  isPortalMerged: t.boolean,
  applicationId: t.number,
  lastTimeLogin: t.string,
  birthDate: t.string,
  mailingStreet: t.string,
  mailingCity: t.string,
  mailingState: t.string,
  mailingZip: t.string,
  borrowerContact: t.string,
  creditMonitoringStatus: t.keyof({
    Unset: null,
    Active: null,
    Disabled: null,
  }),
  dateCreateBorrower: t.string,
});

export interface BorrowerModel {
  borrowerId?: number;
  userId?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  suffix?: string;
  birthDate?: string;
  socialSecNum?: string;
  borrowerContact?: string;
  creditScore?: number;
  alertViaSms?: boolean;
  mobilePhone?: string;
  workPhone?: string;
  extPhone?: string;
  fax?: string;
  email?: string;
  doNotCall?: boolean;
  doNotEmail?: boolean;
  mailingStreet?: string;
  mailingPOBox?: string;
  mailingCity?: string;
  mailingState?: string;
  mailingZip?: string;
  creditMonitoringStatus?: 'Unset' | 'Active' | 'Disabled';
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const BorrowerModel = t.partial({
  borrowerId: t.number,
  userId: t.string,
  firstName: t.string,
  middleName: t.string,
  lastName: t.string,
  suffix: t.string,
  birthDate: t.string,
  socialSecNum: t.string,
  borrowerContact: t.string,
  creditScore: t.number,
  alertViaSms: t.boolean,
  mobilePhone: t.string,
  workPhone: t.string,
  extPhone: t.string,
  fax: t.string,
  email: t.string,
  doNotCall: t.boolean,
  doNotEmail: t.boolean,
  mailingStreet: t.string,
  mailingPOBox: t.string,
  mailingCity: t.string,
  mailingState: t.string,
  mailingZip: t.string,
  creditMonitoringStatus: t.keyof({
    Unset: null,
    Active: null,
    Disabled: null,
  }),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface BorrowerFull {
  portalUserName?: string;
  borrower?: BorrowerModel;
  isEdit?: boolean;
  accountStatus?: 'NotInvited' | 'Invited' | 'Live';
}
export const BorrowerFull = t.partial({
  portalUserName: t.string,
  borrower: BorrowerModel,
  isEdit: t.boolean,
  accountStatus: t.keyof({
    NotInvited: null,
    Invited: null,
    Live: null,
  }),
});

export interface ApplicationViewModel {
  applicationId?: number;
  userId?: string;
  primaryBorrowerId?: number;
  loanStatusId?: number;
  loanTypeId?: number;
  loanPurposeId?: number;
  customDataId?: number;
  losIdentifier?: string;
  refNumber?: string;
  loanAmount?: number;
  mipAmount?: number;
  cashOutAmount?: number;
  subordinateLienAmount?: number;
  purchasePrice?: number;
  presentValue?: number;
  downAmount?: number;
  rate?: number;
  productId?: number;
  lenderId?: number;
  term?: number;
  ltv?: number;
  cltv?: number;
  estimatedClosingDate?: string;
  lockExpirationDate?: string;
  cdIssueDate?: string;
  cdSignedDate?: string;
  originationDate?: string;
  mailingStreet?: string;
  mailingPOBox?: string;
  mailingCity?: string;
  mailingState?: string;
  mailingZip?: string;
  referralSource?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ApplicationViewModel = t.partial({
  applicationId: t.number,
  userId: t.string,
  primaryBorrowerId: t.number,
  loanStatusId: t.number,
  loanTypeId: t.number,
  loanPurposeId: t.number,
  customDataId: t.number,
  losIdentifier: t.string,
  refNumber: t.string,
  loanAmount: t.number,
  mipAmount: t.number,
  cashOutAmount: t.number,
  subordinateLienAmount: t.number,
  purchasePrice: t.number,
  presentValue: t.number,
  downAmount: t.number,
  rate: t.number,
  productId: t.number,
  lenderId: t.number,
  term: t.number,
  ltv: t.number,
  cltv: t.number,
  estimatedClosingDate: t.string,
  lockExpirationDate: t.string,
  cdIssueDate: t.string,
  cdSignedDate: t.string,
  originationDate: t.string,
  mailingStreet: t.string,
  mailingPOBox: t.string,
  mailingCity: t.string,
  mailingState: t.string,
  mailingZip: t.string,
  referralSource: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface NewApplicationRequest {
  application?: ApplicationViewModel;
  internalContactGroupNumber?: string;
  coBorrower?: BorrowerModel;
}
export const NewApplicationRequest = t.partial({
  application: ApplicationViewModel,
  internalContactGroupNumber: t.string,
  coBorrower: BorrowerModel,
});

export interface ApplicationModel {
  applicationId?: number;
  userId?: string;
  primaryBorrowerId?: number;
  loanStatusId?: number;
  loanTypeId?: number;
  loanPurposeId?: number;
  customDataId?: number;
  refNumber?: string;
  losIdentifier?: string;
  thirdPartyCredentialProviderId?: number;
  losVendor?: 'Encompass' | 'LendingQb';
  loanAmount?: number;
  mipAmount?: number;
  cashOutAmount?: number;
  purchasePrice?: number;
  subordinateLienAmount?: number;
  presentValue?: number;
  downAmount?: number;
  rate?: number;
  productId?: number;
  lenderId?: number;
  term?: number;
  estimatedClosingDate?: string;
  lockExpirationDate?: string;
  cdIssueDate?: string;
  cdSignedDate?: string;
  originationDate?: string;
  mailingStreet?: string;
  mailingPOBox?: string;
  mailingCity?: string;
  mailingState?: string;
  mailingZip?: string;
  referralSource?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ApplicationModel = t.partial({
  applicationId: t.number,
  userId: t.string,
  primaryBorrowerId: t.number,
  loanStatusId: t.number,
  loanTypeId: t.number,
  loanPurposeId: t.number,
  customDataId: t.number,
  refNumber: t.string,
  losIdentifier: t.string,
  thirdPartyCredentialProviderId: t.number,
  losVendor: t.keyof({
    Encompass: null,
    LendingQb: null,
  }),
  loanAmount: t.number,
  mipAmount: t.number,
  cashOutAmount: t.number,
  purchasePrice: t.number,
  subordinateLienAmount: t.number,
  presentValue: t.number,
  downAmount: t.number,
  rate: t.number,
  productId: t.number,
  lenderId: t.number,
  term: t.number,
  estimatedClosingDate: t.string,
  lockExpirationDate: t.string,
  cdIssueDate: t.string,
  cdSignedDate: t.string,
  originationDate: t.string,
  mailingStreet: t.string,
  mailingPOBox: t.string,
  mailingCity: t.string,
  mailingState: t.string,
  mailingZip: t.string,
  referralSource: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface BorrowerApplicationViewModel {
  companyId?: number;
  applicationId?: number;
  userId?: string;
  borrowerId?: number;
  refNumber?: string;
  borrowerName?: string;
  mailingStreet?: string;
  mailingCity?: string;
  mailingState?: string;
  mailingZip?: string;
  loanAmount?: number;
  loanStatusId?: number;
  loanPurposeId?: number;
  dateCreated?: string;
}
export const BorrowerApplicationViewModel = t.partial({
  companyId: t.number,
  applicationId: t.number,
  userId: t.string,
  borrowerId: t.number,
  refNumber: t.string,
  borrowerName: t.string,
  mailingStreet: t.string,
  mailingCity: t.string,
  mailingState: t.string,
  mailingZip: t.string,
  loanAmount: t.number,
  loanStatusId: t.number,
  loanPurposeId: t.number,
  dateCreated: t.string,
});

export interface UpsertApplicationInfoView {
  application?: ApplicationViewModel;
  loanDocTasks?: Array<LoanDocTaskViewModel>;
}
export const UpsertApplicationInfoView = t.partial({
  application: ApplicationViewModel,
  loanDocTasks: t.array(LoanDocTaskViewModel),
});

export interface LoanDocTaskModel {
  loanDocTaskId?: number;
  taskCategoryId?: number;
  leadId?: number;
  applicationId?: number;
  borrowerId?: number;
  taskId?: number;
  customTaskId?: number;
  borrowerCharacteristicId?: number;
  loanCharacteristicId?: number;
  loanDocId?: number;
  documentTypeId?: number;
  roleId?: number;
  userId?: string;
  notifyPartyId?: string;
  reviewPartyId?: string;
  documentTemplateModelId?: number;
  taskType?:
    | 'RequestDocument'
    | 'ViewDocument'
    | 'AcknowledgeReceipt'
    | 'EsignDocument'
    | 'RequestInformation'
    | 'PerformAction'
    | 'OnlineApplication'
    | 'DigitalAssetVerification'
    | 'GenerateDocument';
  taskPriority?: 'Low' | 'Normal' | 'High' | 'Immediate';
  description?: string;
  note?: string;
  borrowerFacingNote?: string;
  requestedBy?: string;
  dueDays?: number;
  conditionText?: string;
  taskStatus?:
    | 'Pending'
    | 'Submitted'
    | 'Rejected'
    | 'Approved'
    | 'NotApplicable'
    | 'Requested'
    | 'Completed'
    | 'ReviewReady';
  conditionStatus?:
    | 'ConditionPending'
    | 'ConditionCleared'
    | 'ConditionReOpened'
    | 'ConditionNotApplicable';
  conditionType?: 'PTS' | 'PTD' | 'PTF' | 'PTC';
  requestBorrower?: boolean;
  condition?: boolean;
  requiresReview?: boolean;
  requestDate?: string;
  dueDate?: string;
  submittedDate?: string;
  acknowledgementDate?: string;
  completeDate?: string;
  followUpDate?: string;
  active?: boolean;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const LoanDocTaskModel = t.partial({
  loanDocTaskId: t.number,
  taskCategoryId: t.number,
  leadId: t.number,
  applicationId: t.number,
  borrowerId: t.number,
  taskId: t.number,
  customTaskId: t.number,
  borrowerCharacteristicId: t.number,
  loanCharacteristicId: t.number,
  loanDocId: t.number,
  documentTypeId: t.number,
  roleId: t.number,
  userId: t.string,
  notifyPartyId: t.string,
  reviewPartyId: t.string,
  documentTemplateModelId: t.number,
  taskType: t.keyof({
    RequestDocument: null,
    ViewDocument: null,
    AcknowledgeReceipt: null,
    EsignDocument: null,
    RequestInformation: null,
    PerformAction: null,
    OnlineApplication: null,
    DigitalAssetVerification: null,
    GenerateDocument: null,
  }),
  taskPriority: t.keyof({
    Low: null,
    Normal: null,
    High: null,
    Immediate: null,
  }),
  description: t.string,
  note: t.string,
  borrowerFacingNote: t.string,
  requestedBy: t.string,
  dueDays: t.number,
  conditionText: t.string,
  taskStatus: t.keyof({
    Pending: null,
    Submitted: null,
    Rejected: null,
    Approved: null,
    NotApplicable: null,
    Requested: null,
    Completed: null,
    ReviewReady: null,
  }),
  conditionStatus: t.keyof({
    ConditionPending: null,
    ConditionCleared: null,
    ConditionReOpened: null,
    ConditionNotApplicable: null,
  }),
  conditionType: t.keyof({
    PTS: null,
    PTD: null,
    PTF: null,
    PTC: null,
  }),
  requestBorrower: t.boolean,
  condition: t.boolean,
  requiresReview: t.boolean,
  requestDate: t.string,
  dueDate: t.string,
  submittedDate: t.string,
  acknowledgementDate: t.string,
  completeDate: t.string,
  followUpDate: t.string,
  active: t.boolean,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface EmploymentInfoModel {
  employementInfoId?: number;
  companyName?: string;
  position?: string;
  years?: number;
  months?: number;
  monthlyIncome?: number;
  borrowerId?: number;
  current?: boolean;
}
export const EmploymentInfoModel = t.partial({
  employementInfoId: t.number,
  companyName: t.string,
  position: t.string,
  years: t.number,
  months: t.number,
  monthlyIncome: t.number,
  borrowerId: t.number,
  current: t.boolean,
});

export interface CreditViewModel {
  creditID?: number;
  refNumber?: string;
  creditVendor?: 'MeridianLink' | 'CoreLogicCredco';
  date?: string;
  equifaxRequested?: boolean;
  equifax?: number;
  experianRequested?: boolean;
  experian?: number;
  transUnionRequested?: boolean;
  transUnion?: number;
  joint?: boolean;
  borrowerId?: number;
  borrowerName?: string;
  applicationId?: number;
  integrationHistoryId?: number;
  successful?: boolean;
  failureReason?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CreditViewModel = t.partial({
  creditID: t.number,
  refNumber: t.string,
  creditVendor: t.keyof({
    MeridianLink: null,
    CoreLogicCredco: null,
  }),
  date: t.string,
  equifaxRequested: t.boolean,
  equifax: t.number,
  experianRequested: t.boolean,
  experian: t.number,
  transUnionRequested: t.boolean,
  transUnion: t.number,
  joint: t.boolean,
  borrowerId: t.number,
  borrowerName: t.string,
  applicationId: t.number,
  integrationHistoryId: t.number,
  successful: t.boolean,
  failureReason: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CreateAccountModel {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  confirmPassword?: string;
}
export const CreateAccountModel = t.intersection([
  t.type({
    firstName: t.string,
    lastName: t.string,
    userName: t.string,
    password: t.string,
  }),
  t.partial({
    confirmPassword: t.string,
  }),
]);

export interface CreateAccountResponseModel {
  userId?: string;
  success?: boolean;
  alreadyRegistered?: boolean;
  errorMessage?: string;
}
export const CreateAccountResponseModel = t.partial({
  userId: t.string,
  success: t.boolean,
  alreadyRegistered: t.boolean,
  errorMessage: t.string,
});

export interface BorrowerContact {
  firstName?: string;
  lastName?: string;
  title?: string;
  agentNMLS?: string;
  agentAvatarUrl?: string;
  agentAddressUrl?: string;
  phoneNumber?: string;
  faxNumber?: string;
  emailAddress?: string;
  companyName?: string;
  companyUrl?: string;
  companyNMLS?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  loanContacts?: Array<LoanContact>;
}
export const BorrowerContact = t.partial({
  firstName: t.string,
  lastName: t.string,
  title: t.string,
  agentNMLS: t.string,
  agentAvatarUrl: t.string,
  agentAddressUrl: t.string,
  phoneNumber: t.string,
  faxNumber: t.string,
  emailAddress: t.string,
  companyName: t.string,
  companyUrl: t.string,
  companyNMLS: t.string,
  address: t.string,
  city: t.string,
  state: t.string,
  zip: t.string,
  loanContacts: t.array(LoanContact),
});

export interface MessageViewModel {
  messageId?: number;
  applicationId?: number;
  loanDocTaskId?: number;
  borrowerId?: number;
  userId?: string;
  content?: string;
  flagInternalMessage?: boolean;
  postTime?: string;
  senderId?: string;
  senderFirstName?: string;
  senderLastName?: string;
  senderAvatar?: string;
  notifyPartyId?: Array<string>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const MessageViewModel = t.partial({
  messageId: t.number,
  applicationId: t.number,
  loanDocTaskId: t.number,
  borrowerId: t.number,
  userId: t.string,
  content: t.string,
  flagInternalMessage: t.boolean,
  postTime: t.string,
  senderId: t.string,
  senderFirstName: t.string,
  senderLastName: t.string,
  senderAvatar: t.string,
  notifyPartyId: t.array(t.string),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface BorrowerMessageModel {
  applicationId?: number;
  loanDocTaskId?: number;
  messageText?: string;
}
export const BorrowerMessageModel = t.partial({
  applicationId: t.number,
  loanDocTaskId: t.number,
  messageText: t.string,
});

export interface InitializeFormFreeRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
  last4Ssn?: string;
  maxHeight?: number;
  maxWidth?: number;
}
export const InitializeFormFreeRequest = t.partial({
  firstName: t.string,
  lastName: t.string,
  email: t.string,
  last4Ssn: t.string,
  maxHeight: t.number,
  maxWidth: t.number,
});

export interface EnrollmentWidgetResponse {
  success?: boolean;
  htmlWidgetSrc?: string;
  errorMessage?: string;
}
export const EnrollmentWidgetResponse = t.partial({
  success: t.boolean,
  htmlWidgetSrc: t.string,
  errorMessage: t.string,
});

export interface CampaignTriggerItemValueViewModel {
  campaignTriggerItemValueId?: number;
  value?: string;
  campaignTriggerItemId?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CampaignTriggerItemValueViewModel = t.partial({
  campaignTriggerItemValueId: t.number,
  value: t.string,
  campaignTriggerItemId: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CampaignTriggerItemViewModel {
  campaignTriggerItemId?: number;
  campaignTriggerOperatorType:
    | 'Equal'
    | 'NotEqual'
    | 'GreaterThan'
    | 'GreaterThanOrEqual'
    | 'LessThan'
    | 'LessThanOrEqual'
    | 'In'
    | 'NotIn';
  virtualPath?: string;
  campaignTriggerId?: number;
  contactListFieldId?: number;
  values: Array<CampaignTriggerItemValueViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CampaignTriggerItemViewModel = t.intersection([
  t.type({
    campaignTriggerOperatorType: t.keyof({
      Equal: null,
      NotEqual: null,
      GreaterThan: null,
      GreaterThanOrEqual: null,
      LessThan: null,
      LessThanOrEqual: null,
      In: null,
      NotIn: null,
    }),
    values: t.array(CampaignTriggerItemValueViewModel),
  }),
  t.partial({
    campaignTriggerItemId: t.number,
    virtualPath: t.string,
    campaignTriggerId: t.number,
    contactListFieldId: t.number,
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  }),
]);

export interface CampaignTriggerViewModel {
  campaignTriggerId?: number;
  campaignId?: number;
  items: Array<CampaignTriggerItemViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CampaignTriggerViewModel = t.intersection([
  t.type({
    items: t.array(CampaignTriggerItemViewModel),
  }),
  t.partial({
    campaignTriggerId: t.number,
    campaignId: t.number,
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  }),
]);

export interface CampaignEmailActionContactListFieldViewModel {
  campaignEmailActionContactListFieldId?: number;
  campaignEmailActionContactType?: 'To' | 'Cc' | 'Bcc';
  campaignEmailActionId?: number;
  contactListFieldId?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CampaignEmailActionContactListFieldViewModel = t.partial({
  campaignEmailActionContactListFieldId: t.number,
  campaignEmailActionContactType: t.keyof({
    To: null,
    Cc: null,
    Bcc: null,
  }),
  campaignEmailActionId: t.number,
  contactListFieldId: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CampaignEmailActionVirtualContactListFieldViewModel {
  campaignEmailActionVirtualContactListFieldId?: number;
  campaignEmailActionContactType?: 'To' | 'Cc' | 'Bcc';
  campaignEmailActionId?: number;
  virtualPath?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CampaignEmailActionVirtualContactListFieldViewModel = t.partial({
  campaignEmailActionVirtualContactListFieldId: t.number,
  campaignEmailActionContactType: t.keyof({
    To: null,
    Cc: null,
    Bcc: null,
  }),
  campaignEmailActionId: t.number,
  virtualPath: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CampaignEmailActionViewModel {
  campaignEmailActionId?: number;
  subject: string;
  body: string;
  sendFromLoanContact?: boolean;
  appendLoanContactEmailSignature?: boolean;
  campaignId?: number;
  fieldRelationships?: Array<CampaignEmailActionContactListFieldViewModel>;
  virtualFieldRelationships?: Array<
    CampaignEmailActionVirtualContactListFieldViewModel
  >;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CampaignEmailActionViewModel = t.intersection([
  t.type({
    subject: t.string,
    body: t.string,
  }),
  t.partial({
    campaignEmailActionId: t.number,
    sendFromLoanContact: t.boolean,
    appendLoanContactEmailSignature: t.boolean,
    campaignId: t.number,
    fieldRelationships: t.array(CampaignEmailActionContactListFieldViewModel),
    virtualFieldRelationships: t.array(
      CampaignEmailActionVirtualContactListFieldViewModel
    ),
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  }),
]);

export interface CampaignSmsActionContactListFieldViewModel {
  campaignSmsActionContactListFieldId?: number;
  campaignSmsActionId?: number;
  contactListFieldId?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CampaignSmsActionContactListFieldViewModel = t.partial({
  campaignSmsActionContactListFieldId: t.number,
  campaignSmsActionId: t.number,
  contactListFieldId: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CampaignSmsActionVirtualContactListFieldViewModel {
  campaignSmsActionVirtualContactListFieldId?: number;
  campaignSmsActionId?: number;
  virtualPath?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CampaignSmsActionVirtualContactListFieldViewModel = t.partial({
  campaignSmsActionVirtualContactListFieldId: t.number,
  campaignSmsActionId: t.number,
  virtualPath: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CampaignSmsActionViewModel {
  campaignSmsActionId?: number;
  text: string;
  campaignId?: number;
  fieldRelationships?: Array<CampaignSmsActionContactListFieldViewModel>;
  virtualFieldRelationships?: Array<
    CampaignSmsActionVirtualContactListFieldViewModel
  >;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CampaignSmsActionViewModel = t.intersection([
  t.type({
    text: t.string,
  }),
  t.partial({
    campaignSmsActionId: t.number,
    campaignId: t.number,
    fieldRelationships: t.array(CampaignSmsActionContactListFieldViewModel),
    virtualFieldRelationships: t.array(
      CampaignSmsActionVirtualContactListFieldViewModel
    ),
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  }),
]);

export interface CampaignVoiceActionContactListFieldViewModel {
  campaignVoiceActionContactListFieldId?: number;
  campaignVoiceActionId?: number;
  contactListFieldId?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CampaignVoiceActionContactListFieldViewModel = t.partial({
  campaignVoiceActionContactListFieldId: t.number,
  campaignVoiceActionId: t.number,
  contactListFieldId: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CampaignVoiceActionVirtualContactListFieldViewModel {
  campaignVoiceActionVirtualContactListFieldId?: number;
  campaignVoiceActionId?: number;
  virtualPath?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CampaignVoiceActionVirtualContactListFieldViewModel = t.partial({
  campaignVoiceActionVirtualContactListFieldId: t.number,
  campaignVoiceActionId: t.number,
  virtualPath: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CampaignVoiceActionViewModel {
  campaignVoiceActionId?: number;
  file?: string;
  campaignId?: number;
  fieldRelationships?: Array<CampaignVoiceActionContactListFieldViewModel>;
  virtualFieldRelationships?: Array<
    CampaignVoiceActionVirtualContactListFieldViewModel
  >;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CampaignVoiceActionViewModel = t.partial({
  campaignVoiceActionId: t.number,
  file: t.string,
  campaignId: t.number,
  fieldRelationships: t.array(CampaignVoiceActionContactListFieldViewModel),
  virtualFieldRelationships: t.array(
    CampaignVoiceActionVirtualContactListFieldViewModel
  ),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CampaignViewModel {
  campaignId?: number;
  name: string;
  contactListId: number;
  triggers?: Array<CampaignTriggerViewModel>;
  emailActions?: Array<CampaignEmailActionViewModel>;
  smsActions?: Array<CampaignSmsActionViewModel>;
  voiceActions?: Array<CampaignVoiceActionViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CampaignViewModel = t.intersection([
  t.type({
    name: t.string,
    contactListId: t.number,
  }),
  t.partial({
    campaignId: t.number,
    triggers: t.array(CampaignTriggerViewModel),
    emailActions: t.array(CampaignEmailActionViewModel),
    smsActions: t.array(CampaignSmsActionViewModel),
    voiceActions: t.array(CampaignVoiceActionViewModel),
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  }),
]);

export interface ChatBorrowerViewModel {
  borrowerId?: number;
  userId?: string;
  isPrimaryBorrower?: boolean;
  applications?: Array<PipelineApplicationView>;
  firstName?: string;
  lastName?: string;
}
export const ChatBorrowerViewModel = t.partial({
  borrowerId: t.number,
  userId: t.string,
  isPrimaryBorrower: t.boolean,
  applications: t.array(PipelineApplicationView),
  firstName: t.string,
  lastName: t.string,
});

export interface ChatMessageViewModel {
  application?: ApplicationViewModel;
  borrowers?: Array<ChatBorrowerViewModel>;
  displayName?: string;
  messages?: Array<MessageViewModel>;
}
export const ChatMessageViewModel = t.partial({
  application: ApplicationViewModel,
  borrowers: t.array(ChatBorrowerViewModel),
  displayName: t.string,
  messages: t.array(MessageViewModel),
});

export interface ChatAgentViewModel {
  agentId?: number;
  userId?: string;
  applications?: Array<PipelineApplicationView>;
  firstName?: string;
  lastName?: string;
}
export const ChatAgentViewModel = t.partial({
  agentId: t.number,
  userId: t.string,
  applications: t.array(PipelineApplicationView),
  firstName: t.string,
  lastName: t.string,
});

export interface ChatLeadViewModel {
  leadId?: number;
  leadStatusId?: number;
  loanPurposeId?: number;
  loanTypeId?: number;
  firstName?: string;
  lastName?: string;
}
export const ChatLeadViewModel = t.partial({
  leadId: t.number,
  leadStatusId: t.number,
  loanPurposeId: t.number,
  loanTypeId: t.number,
  firstName: t.string,
  lastName: t.string,
});

export interface SmsHistoryViewModel {
  id?: number;
  from?: string;
  to?: string;
  body?: string;
  direction?: 'Unspecified' | 'Outbound' | 'Inbound';
  smsMessageSid?: string;
  messageSid?: string;
  accountSid?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const SmsHistoryViewModel = t.partial({
  id: t.number,
  from: t.string,
  to: t.string,
  body: t.string,
  direction: t.keyof({
    Unspecified: null,
    Outbound: null,
    Inbound: null,
  }),
  smsMessageSid: t.string,
  messageSid: t.string,
  accountSid: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface ChatSmsViewModel {
  agents?: Array<ChatAgentViewModel>;
  borrowers?: Array<ChatBorrowerViewModel>;
  leads?: Array<ChatLeadViewModel>;
  smsMessages?: Array<SmsHistoryViewModel>;
}
export const ChatSmsViewModel = t.partial({
  agents: t.array(ChatAgentViewModel),
  borrowers: t.array(ChatBorrowerViewModel),
  leads: t.array(ChatLeadViewModel),
  smsMessages: t.array(SmsHistoryViewModel),
});

export interface ChecklistAnswerViewModel {
  checklistAnswerId?: number;
  answerText?: string;
  answerId?: number;
  applicationId: number;
  checklistQuestionId: number;
  questionId: number;
  loanDocTaskId?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ChecklistAnswerViewModel = t.intersection([
  t.type({
    applicationId: t.number,
    checklistQuestionId: t.number,
    questionId: t.number,
  }),
  t.partial({
    checklistAnswerId: t.number,
    answerText: t.string,
    answerId: t.number,
    loanDocTaskId: t.number,
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  }),
]);

export interface AlertModel {
  alertId?: number;
  applicationId?: number;
  leadId?: number;
  taskId?: number;
  loanDocId?: number;
  messageModelId?: number;
  messageDelivery?: 'Unspecified' | 'Email' | 'SMS' | 'Toaster';
  userId?: string;
  notifyPartyId?: string;
  alertType?:
    | 'Immediately'
    | 'OnLoanStatus'
    | 'CreateInternalContact'
    | 'UpdateInternalContact'
    | 'Private'
    | 'Group'
    | 'Public'
    | 'Al'
    | 'Event'
    | 'ToDo'
    | 'Appointment'
    | 'AutoApply'
    | 'Confirm'
    | 'RequestQuantity'
    | 'LoanCharacteristic'
    | 'BorrowerCharacteristic'
    | 'LessThan'
    | 'LessThanOrEqualTo'
    | 'EqualTo'
    | 'GreatherThan'
    | 'GreaterThanOrEqualTo'
    | 'NullOrEmpty'
    | 'NotNullOrEmpty'
    | 'StartsWith'
    | 'Contains'
    | 'DoesNotContain'
    | 'In'
    | 'NotIn'
    | 'YesNo'
    | 'TrueFalse'
    | 'OnOff'
    | 'Text'
    | 'Integer'
    | 'Decimal'
    | 'MultiSelect'
    | 'SelectList'
    | 'Value'
    | 'Docvalue'
    | 'DataValidation'
    | 'DocumentValidation'
    | 'ManualValidation'
    | 'Pdf'
    | 'Doc'
    | 'Txt'
    | 'Excel'
    | 'Csv'
    | 'Img'
    | 'ApplyToLoan'
    | 'ApplyToPrimaryBorrower'
    | 'ApplyToSelectBorrowers'
    | 'ChangeStatus'
    | 'Uploadfile'
    | 'DeleteFile'
    | 'DownloadFile'
    | 'ExportFile'
    | 'FileNoteUpdated'
    | 'BorrowerNoteUpdated'
    | 'DeleteTask'
    | 'RemoveFileFromTrash'
    | 'ConditionStatusChange'
    | 'CreateTask'
    | 'RestoreTask'
    | 'MergeFile'
    | 'PostponeTask'
    | 'ChangeFollowUpDate'
    | 'ChangeDueDate'
    | 'ViewFile'
    | 'FileNameChanged'
    | 'ChangeConditionFlag'
    | 'ChangeDescription'
    | 'ChangeNotifyParty'
    | 'ChangePriority'
    | 'ChangeResponsibleParty'
    | 'ChangeReviewRequired'
    | 'InternalMessageAlert'
    | 'BorrowerMessageAlert'
    | 'TaskStatusAlert'
    | 'GeneralAlert'
    | 'LoanStatusAlert'
    | 'FailedEmailAlert'
    | 'FailedSmsAlert'
    | 'NewLeadAlert';
  alertText?: string;
  createDate?: string;
  applicationStatus?: string;
  propertyAddress?: string;
  userName?: string;
  taskText?: string;
  taskNote?: string;
  notifyPartyName?: string;
  borrowerId?: number;
  borrowerName?: string;
}
export const AlertModel = t.partial({
  alertId: t.number,
  applicationId: t.number,
  leadId: t.number,
  taskId: t.number,
  loanDocId: t.number,
  messageModelId: t.number,
  messageDelivery: t.keyof({
    Unspecified: null,
    Email: null,
    SMS: null,
    Toaster: null,
  }),
  userId: t.string,
  notifyPartyId: t.string,
  alertType: t.keyof({
    Immediately: null,
    OnLoanStatus: null,
    CreateInternalContact: null,
    UpdateInternalContact: null,
    Private: null,
    Group: null,
    Public: null,
    Al: null,
    Event: null,
    ToDo: null,
    Appointment: null,
    AutoApply: null,
    Confirm: null,
    RequestQuantity: null,
    LoanCharacteristic: null,
    BorrowerCharacteristic: null,
    LessThan: null,
    LessThanOrEqualTo: null,
    EqualTo: null,
    GreatherThan: null,
    GreaterThanOrEqualTo: null,
    NullOrEmpty: null,
    NotNullOrEmpty: null,
    StartsWith: null,
    Contains: null,
    DoesNotContain: null,
    In: null,
    NotIn: null,
    YesNo: null,
    TrueFalse: null,
    OnOff: null,
    Text: null,
    Integer: null,
    Decimal: null,
    MultiSelect: null,
    SelectList: null,
    Value: null,
    Docvalue: null,
    DataValidation: null,
    DocumentValidation: null,
    ManualValidation: null,
    Pdf: null,
    Doc: null,
    Txt: null,
    Excel: null,
    Csv: null,
    Img: null,
    ApplyToLoan: null,
    ApplyToPrimaryBorrower: null,
    ApplyToSelectBorrowers: null,
    ChangeStatus: null,
    Uploadfile: null,
    DeleteFile: null,
    DownloadFile: null,
    ExportFile: null,
    FileNoteUpdated: null,
    BorrowerNoteUpdated: null,
    DeleteTask: null,
    RemoveFileFromTrash: null,
    ConditionStatusChange: null,
    CreateTask: null,
    RestoreTask: null,
    MergeFile: null,
    PostponeTask: null,
    ChangeFollowUpDate: null,
    ChangeDueDate: null,
    ViewFile: null,
    FileNameChanged: null,
    ChangeConditionFlag: null,
    ChangeDescription: null,
    ChangeNotifyParty: null,
    ChangePriority: null,
    ChangeResponsibleParty: null,
    ChangeReviewRequired: null,
    InternalMessageAlert: null,
    BorrowerMessageAlert: null,
    TaskStatusAlert: null,
    GeneralAlert: null,
    LoanStatusAlert: null,
    FailedEmailAlert: null,
    FailedSmsAlert: null,
    NewLeadAlert: null,
  }),
  alertText: t.string,
  createDate: t.string,
  applicationStatus: t.string,
  propertyAddress: t.string,
  userName: t.string,
  taskText: t.string,
  taskNote: t.string,
  notifyPartyName: t.string,
  borrowerId: t.number,
  borrowerName: t.string,
});

export interface AlertViewModel {
  alertId?: number;
  applicationId?: number;
  leadId?: number;
  taskId?: number;
  loanDocId?: number;
  messageModelId?: number;
  messageDelivery?: 'Unspecified' | 'Email' | 'SMS' | 'Toaster';
  userId?: string;
  notifyPartyId?: string;
  alertType?:
    | 'Immediately'
    | 'OnLoanStatus'
    | 'CreateInternalContact'
    | 'UpdateInternalContact'
    | 'Private'
    | 'Group'
    | 'Public'
    | 'Al'
    | 'Event'
    | 'ToDo'
    | 'Appointment'
    | 'AutoApply'
    | 'Confirm'
    | 'RequestQuantity'
    | 'LoanCharacteristic'
    | 'BorrowerCharacteristic'
    | 'LessThan'
    | 'LessThanOrEqualTo'
    | 'EqualTo'
    | 'GreatherThan'
    | 'GreaterThanOrEqualTo'
    | 'NullOrEmpty'
    | 'NotNullOrEmpty'
    | 'StartsWith'
    | 'Contains'
    | 'DoesNotContain'
    | 'In'
    | 'NotIn'
    | 'YesNo'
    | 'TrueFalse'
    | 'OnOff'
    | 'Text'
    | 'Integer'
    | 'Decimal'
    | 'MultiSelect'
    | 'SelectList'
    | 'Value'
    | 'Docvalue'
    | 'DataValidation'
    | 'DocumentValidation'
    | 'ManualValidation'
    | 'Pdf'
    | 'Doc'
    | 'Txt'
    | 'Excel'
    | 'Csv'
    | 'Img'
    | 'ApplyToLoan'
    | 'ApplyToPrimaryBorrower'
    | 'ApplyToSelectBorrowers'
    | 'ChangeStatus'
    | 'Uploadfile'
    | 'DeleteFile'
    | 'DownloadFile'
    | 'ExportFile'
    | 'FileNoteUpdated'
    | 'BorrowerNoteUpdated'
    | 'DeleteTask'
    | 'RemoveFileFromTrash'
    | 'ConditionStatusChange'
    | 'CreateTask'
    | 'RestoreTask'
    | 'MergeFile'
    | 'PostponeTask'
    | 'ChangeFollowUpDate'
    | 'ChangeDueDate'
    | 'ViewFile'
    | 'FileNameChanged'
    | 'ChangeConditionFlag'
    | 'ChangeDescription'
    | 'ChangeNotifyParty'
    | 'ChangePriority'
    | 'ChangeResponsibleParty'
    | 'ChangeReviewRequired'
    | 'InternalMessageAlert'
    | 'BorrowerMessageAlert'
    | 'TaskStatusAlert'
    | 'GeneralAlert'
    | 'LoanStatusAlert'
    | 'FailedEmailAlert'
    | 'FailedSmsAlert'
    | 'NewLeadAlert';
  alertText?: string;
  createDate?: string;
  applicationStatus?: string;
  propertyAddress?: string;
  userName?: string;
  taskText?: string;
  taskNote?: string;
  notifyPartyName?: string;
  borrowerId?: number;
  borrowerName?: string;
}
export const AlertViewModel = t.partial({
  alertId: t.number,
  applicationId: t.number,
  leadId: t.number,
  taskId: t.number,
  loanDocId: t.number,
  messageModelId: t.number,
  messageDelivery: t.keyof({
    Unspecified: null,
    Email: null,
    SMS: null,
    Toaster: null,
  }),
  userId: t.string,
  notifyPartyId: t.string,
  alertType: t.keyof({
    Immediately: null,
    OnLoanStatus: null,
    CreateInternalContact: null,
    UpdateInternalContact: null,
    Private: null,
    Group: null,
    Public: null,
    Al: null,
    Event: null,
    ToDo: null,
    Appointment: null,
    AutoApply: null,
    Confirm: null,
    RequestQuantity: null,
    LoanCharacteristic: null,
    BorrowerCharacteristic: null,
    LessThan: null,
    LessThanOrEqualTo: null,
    EqualTo: null,
    GreatherThan: null,
    GreaterThanOrEqualTo: null,
    NullOrEmpty: null,
    NotNullOrEmpty: null,
    StartsWith: null,
    Contains: null,
    DoesNotContain: null,
    In: null,
    NotIn: null,
    YesNo: null,
    TrueFalse: null,
    OnOff: null,
    Text: null,
    Integer: null,
    Decimal: null,
    MultiSelect: null,
    SelectList: null,
    Value: null,
    Docvalue: null,
    DataValidation: null,
    DocumentValidation: null,
    ManualValidation: null,
    Pdf: null,
    Doc: null,
    Txt: null,
    Excel: null,
    Csv: null,
    Img: null,
    ApplyToLoan: null,
    ApplyToPrimaryBorrower: null,
    ApplyToSelectBorrowers: null,
    ChangeStatus: null,
    Uploadfile: null,
    DeleteFile: null,
    DownloadFile: null,
    ExportFile: null,
    FileNoteUpdated: null,
    BorrowerNoteUpdated: null,
    DeleteTask: null,
    RemoveFileFromTrash: null,
    ConditionStatusChange: null,
    CreateTask: null,
    RestoreTask: null,
    MergeFile: null,
    PostponeTask: null,
    ChangeFollowUpDate: null,
    ChangeDueDate: null,
    ViewFile: null,
    FileNameChanged: null,
    ChangeConditionFlag: null,
    ChangeDescription: null,
    ChangeNotifyParty: null,
    ChangePriority: null,
    ChangeResponsibleParty: null,
    ChangeReviewRequired: null,
    InternalMessageAlert: null,
    BorrowerMessageAlert: null,
    TaskStatusAlert: null,
    GeneralAlert: null,
    LoanStatusAlert: null,
    FailedEmailAlert: null,
    FailedSmsAlert: null,
    NewLeadAlert: null,
  }),
  alertText: t.string,
  createDate: t.string,
  applicationStatus: t.string,
  propertyAddress: t.string,
  userName: t.string,
  taskText: t.string,
  taskNote: t.string,
  notifyPartyName: t.string,
  borrowerId: t.number,
  borrowerName: t.string,
});

export interface NotificationViewModel {
  head?: string;
  body?: string;
}
export const NotificationViewModel = t.partial({
  head: t.string,
  body: t.string,
});

export interface ContactListFieldTypeEnumValueViewModel {
  contactListFieldTypeEnumValueId?: number;
  value: string;
  contactListFieldTypeEnumId?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ContactListFieldTypeEnumValueViewModel = t.intersection([
  t.type({
    value: t.string,
  }),
  t.partial({
    contactListFieldTypeEnumValueId: t.number,
    contactListFieldTypeEnumId: t.number,
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  }),
]);

export interface ContactListFieldTypeEnumViewModel {
  contactListFieldTypeEnumId?: number;
  name: string;
  values?: Array<ContactListFieldTypeEnumValueViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ContactListFieldTypeEnumViewModel = t.intersection([
  t.type({
    name: t.string,
  }),
  t.partial({
    contactListFieldTypeEnumId: t.number,
    values: t.array(ContactListFieldTypeEnumValueViewModel),
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  }),
]);

export interface ContactListFieldViewModel {
  contactListFieldId?: number;
  name: string;
  contactListFieldType:
    | 'None'
    | 'Integer'
    | 'Double'
    | 'Decimal'
    | 'String'
    | 'Boolean'
    | 'DateTime'
    | 'Enum'
    | 'Email'
    | 'MobilePhone'
    | 'LandLinePhone'
    | 'FaxPhone'
    | 'LoanType'
    | 'LoanPurpose'
    | 'LoanStatus'
    | 'LeadStatus'
    | 'User'
    | 'Product'
    | 'Lender'
    | 'LookupList';
  isContactMethod?: boolean;
  isTrigger?: boolean;
  contactListId?: number;
  contactListFieldTypeEnumId?: number;
  contactListFieldTypeEnum?: ContactListFieldTypeEnumViewModel;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ContactListFieldViewModel = t.intersection([
  t.type({
    name: t.string,
    contactListFieldType: t.keyof({
      None: null,
      Integer: null,
      Double: null,
      Decimal: null,
      String: null,
      Boolean: null,
      DateTime: null,
      Enum: null,
      Email: null,
      MobilePhone: null,
      LandLinePhone: null,
      FaxPhone: null,
      LoanType: null,
      LoanPurpose: null,
      LoanStatus: null,
      LeadStatus: null,
      User: null,
      Product: null,
      Lender: null,
      LookupList: null,
    }),
  }),
  t.partial({
    contactListFieldId: t.number,
    isContactMethod: t.boolean,
    isTrigger: t.boolean,
    contactListId: t.number,
    contactListFieldTypeEnumId: t.number,
    contactListFieldTypeEnum: ContactListFieldTypeEnumViewModel,
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  }),
]);

export interface ContactListViewModel {
  contactListId?: number;
  contactListType: 'Application' | 'Agent' | 'Borrower' | 'Lead' | 'Custom';
  name: string;
  table?: string;
  fields?: Array<ContactListFieldViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ContactListViewModel = t.intersection([
  t.type({
    contactListType: t.keyof({
      Application: null,
      Agent: null,
      Borrower: null,
      Lead: null,
      Custom: null,
    }),
    name: t.string,
  }),
  t.partial({
    contactListId: t.number,
    table: t.string,
    fields: t.array(ContactListFieldViewModel),
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  }),
]);

export interface LookupListValueViewModel {
  name?: string;
  value?: string;
  type?:
    | 'None'
    | 'Integer'
    | 'Double'
    | 'Decimal'
    | 'String'
    | 'Boolean'
    | 'DateTime'
    | 'Enum'
    | 'Email'
    | 'MobilePhone'
    | 'LandLinePhone'
    | 'FaxPhone'
    | 'LoanType'
    | 'LoanPurpose'
    | 'LoanStatus'
    | 'LeadStatus'
    | 'User'
    | 'Product'
    | 'Lender'
    | 'LookupList';
}
export const LookupListValueViewModel = t.partial({
  name: t.string,
  value: t.string,
  type: t.keyof({
    None: null,
    Integer: null,
    Double: null,
    Decimal: null,
    String: null,
    Boolean: null,
    DateTime: null,
    Enum: null,
    Email: null,
    MobilePhone: null,
    LandLinePhone: null,
    FaxPhone: null,
    LoanType: null,
    LoanPurpose: null,
    LoanStatus: null,
    LeadStatus: null,
    User: null,
    Product: null,
    Lender: null,
    LookupList: null,
  }),
});

export interface CreditRequestModel {
  leadId?: number;
  applicationId?: number;
  borrowerIds: Array<number>;
  pullType: 'Individual' | 'Joint';
  creditVendor: 'MeridianLink' | 'CoreLogicCredco';
  creditRequestType: 'Submit' | 'Reissue' | 'Upgrade';
  experian: boolean;
  equifax: boolean;
  transUnion: boolean;
  creditReferenceNumber?: string;
}
export const CreditRequestModel = t.intersection([
  t.type({
    borrowerIds: t.array(t.number),
    pullType: t.keyof({
      Individual: null,
      Joint: null,
    }),
    creditVendor: t.keyof({
      MeridianLink: null,
      CoreLogicCredco: null,
    }),
    creditRequestType: t.keyof({
      Submit: null,
      Reissue: null,
      Upgrade: null,
    }),
    experian: t.boolean,
    equifax: t.boolean,
    transUnion: t.boolean,
  }),
  t.partial({
    leadId: t.number,
    applicationId: t.number,
    creditReferenceNumber: t.string,
  }),
]);

export interface CreditResponseModel {
  success?: boolean;
  validationErrors?: Array<string>;
  errorMessage?: string;
}
export const CreditResponseModel = t.partial({
  success: t.boolean,
  validationErrors: t.array(t.string),
  errorMessage: t.string,
});

export interface CreditModel {
  creditID?: number;
  refNumber?: string;
  creditVendor?: 'MeridianLink' | 'CoreLogicCredco';
  date?: string;
  equifaxRequested?: boolean;
  equifax?: number;
  experianRequested?: boolean;
  experian?: number;
  transUnionRequested?: boolean;
  transUnion?: number;
  joint?: boolean;
  borrowerId?: number;
  successful?: boolean;
  failureReason?: string;
  applicationId?: number;
  integrationHistoryId?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const CreditModel = t.partial({
  creditID: t.number,
  refNumber: t.string,
  creditVendor: t.keyof({
    MeridianLink: null,
    CoreLogicCredco: null,
  }),
  date: t.string,
  equifaxRequested: t.boolean,
  equifax: t.number,
  experianRequested: t.boolean,
  experian: t.number,
  transUnionRequested: t.boolean,
  transUnion: t.number,
  joint: t.boolean,
  borrowerId: t.number,
  successful: t.boolean,
  failureReason: t.string,
  applicationId: t.number,
  integrationHistoryId: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface DashboardFilterCriteria {
  lpValues?: Array<string>;
  lsValues?: Array<string>;
}
export const DashboardFilterCriteria = t.partial({
  lpValues: t.array(t.string),
  lsValues: t.array(t.string),
});

export interface TaskCountModel {
  mt_g2?: number;
  mt_l2?: number;
  ot_g2?: number;
  ot_l2?: number;
  bt_s?: number;
  bt_p?: number;
  bt_c?: number;
  doc_l5exp?: number;
  doc_exp?: number;
  ct?: number;
  filter11?: number;
  filter12?: number;
}
export const TaskCountModel = t.partial({
  mt_g2: t.number,
  mt_l2: t.number,
  ot_g2: t.number,
  ot_l2: t.number,
  bt_s: t.number,
  bt_p: t.number,
  bt_c: t.number,
  doc_l5exp: t.number,
  doc_exp: t.number,
  ct: t.number,
  filter11: t.number,
  filter12: t.number,
});

export interface FileDto {
  guid?: string;
  loanDocId?: number;
  fileName?: string;
  note?: string;
  borrowerNote?: string;
  condition?: boolean;
  createDate?: string;
  expirationDate?: string;
  active?: boolean;
}
export const FileDto = t.partial({
  guid: t.string,
  loanDocId: t.number,
  fileName: t.string,
  note: t.string,
  borrowerNote: t.string,
  condition: t.boolean,
  createDate: t.string,
  expirationDate: t.string,
  active: t.boolean,
});

export interface LoanDocTaskDashBoardView {
  loanDocTaskId?: number;
  applicationId?: number;
  leadId?: number;
  loanDocId?: number;
  primaryBorrowerId?: number;
  borrowerId?: number;
  fullName?: string;
  applicationName?: string;
  taskId?: number;
  customTaskId?: number;
  responsibleParty?: string;
  requestedBy?: string;
  note?: string;
  status?:
    | 'Pending'
    | 'Submitted'
    | 'Rejected'
    | 'Approved'
    | 'NotApplicable'
    | 'Requested'
    | 'Completed'
    | 'ReviewReady';
  taskStatus?: string;
  taskPriority?: 'Low' | 'Normal' | 'High' | 'Immediate';
  taskType?:
    | 'RequestDocument'
    | 'ViewDocument'
    | 'AcknowledgeReceipt'
    | 'EsignDocument'
    | 'RequestInformation'
    | 'PerformAction'
    | 'OnlineApplication'
    | 'DigitalAssetVerification'
    | 'GenerateDocument';
  documentTemplateModelId?: number;
  documentTypeId?: number;
  docTypeText?: string;
  description?: string;
  dueDays?: number;
  requestDate?: string;
  dueDate?: string;
  followUp?: string;
  completeDate?: string;
  submittedDate?: string;
  expirationDate?: string;
  dateUpdated?: string;
  userId?: string;
  roleId?: number;
  requestBorrower?: boolean;
  loading?: boolean;
  borrowerNote?: string;
  condition?: boolean;
  conditionStatus?:
    | 'ConditionPending'
    | 'ConditionCleared'
    | 'ConditionReOpened'
    | 'ConditionNotApplicable';
  conditionType?: 'PTS' | 'PTD' | 'PTF' | 'PTC';
  conditionText?: string;
  docFiles?: Array<FileDto>;
  notifyPartyId?: string;
  requiresReview?: boolean;
  reviewPartyId?: string;
  borrowerFacingNote?: string;
  hasTemplateDocument?: boolean;
  templateDocumentUrl?: string;
  helpUrl?: string;
}
export const LoanDocTaskDashBoardView = t.partial({
  loanDocTaskId: t.number,
  applicationId: t.number,
  leadId: t.number,
  loanDocId: t.number,
  primaryBorrowerId: t.number,
  borrowerId: t.number,
  fullName: t.string,
  applicationName: t.string,
  taskId: t.number,
  customTaskId: t.number,
  responsibleParty: t.string,
  requestedBy: t.string,
  note: t.string,
  status: t.keyof({
    Pending: null,
    Submitted: null,
    Rejected: null,
    Approved: null,
    NotApplicable: null,
    Requested: null,
    Completed: null,
    ReviewReady: null,
  }),
  taskStatus: t.string,
  taskPriority: t.keyof({
    Low: null,
    Normal: null,
    High: null,
    Immediate: null,
  }),
  taskType: t.keyof({
    RequestDocument: null,
    ViewDocument: null,
    AcknowledgeReceipt: null,
    EsignDocument: null,
    RequestInformation: null,
    PerformAction: null,
    OnlineApplication: null,
    DigitalAssetVerification: null,
    GenerateDocument: null,
  }),
  documentTemplateModelId: t.number,
  documentTypeId: t.number,
  docTypeText: t.string,
  description: t.string,
  dueDays: t.number,
  requestDate: t.string,
  dueDate: t.string,
  followUp: t.string,
  completeDate: t.string,
  submittedDate: t.string,
  expirationDate: t.string,
  dateUpdated: t.string,
  userId: t.string,
  roleId: t.number,
  requestBorrower: t.boolean,
  loading: t.boolean,
  borrowerNote: t.string,
  condition: t.boolean,
  conditionStatus: t.keyof({
    ConditionPending: null,
    ConditionCleared: null,
    ConditionReOpened: null,
    ConditionNotApplicable: null,
  }),
  conditionType: t.keyof({
    PTS: null,
    PTD: null,
    PTF: null,
    PTC: null,
  }),
  conditionText: t.string,
  docFiles: t.array(FileDto),
  notifyPartyId: t.string,
  requiresReview: t.boolean,
  reviewPartyId: t.string,
  borrowerFacingNote: t.string,
  hasTemplateDocument: t.boolean,
  templateDocumentUrl: t.string,
  helpUrl: t.string,
});

export interface RequestDemoViewModel {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
}
export const RequestDemoViewModel = t.partial({
  name: t.string,
  phone: t.string,
  email: t.string,
  subject: t.string,
  message: t.string,
});

export interface DocumentTemplatePageViewModel {
  documentTemplatePageId?: number;
  documentTemplateId?: number;
  title?: string;
  fields?: Array<DocumentTemplateFieldViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const DocumentTemplatePageViewModel = t.partial({
  documentTemplatePageId: t.number,
  documentTemplateId: t.number,
  title: t.string,
  fields: t.array(DocumentTemplateFieldViewModel),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface AddDocumentTemplatePagesViewModel {
  pages?: Array<DocumentTemplatePageViewModel>;
}
export const AddDocumentTemplatePagesViewModel = t.partial({
  pages: t.array(DocumentTemplatePageViewModel),
});

export interface MessageHistoryViewModel {
  extendedDetail?: string;
  id?: number;
  campaignId?: number;
  automatedEmailId?: number;
  applicationId?: number;
  borrowerId?: number;
  agentId?: number;
  eventId?: number;
  leadId?: number;
  fromUserId?: string;
  msgType?:
    | 'Unspecified'
    | 'UserInvite'
    | 'BorrowerInvite'
    | 'AgentInvite'
    | 'ForgotPassword'
    | 'DocRequest'
    | 'DocReject'
    | 'DocAccepted'
    | 'StatusUpdate'
    | 'Reminder'
    | 'ApplicationEmailCampaign'
    | 'ContactEmailCampaign'
    | 'NewMessage'
    | 'UserCreatedEmail'
    | 'UserCreatedSms'
    | 'Test'
    | 'AppointmentAlert'
    | 'Referral'
    | 'CombinedParent';
  delivery?: 'Unspecified' | 'Email' | 'SMS' | 'Toaster';
  priority?:
    | 'Unspecified'
    | 'Immediate'
    | 'Queue'
    | 'QueuedImmediate'
    | 'Retry';
  status?:
    | 'Unprocessed'
    | 'InProcess'
    | 'FailureSmsNotEnabled'
    | 'Failure'
    | 'Success'
    | 'CombinedChild';
  to?: string;
  from?: string;
  cc?: string;
  bcc?: string;
  subject?: string;
  body?: string;
  trackingGuid?: string;
  originalOpenDate?: string;
  mostRecentOpenDate?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const MessageHistoryViewModel = t.partial({
  extendedDetail: t.string,
  id: t.number,
  campaignId: t.number,
  automatedEmailId: t.number,
  applicationId: t.number,
  borrowerId: t.number,
  agentId: t.number,
  eventId: t.number,
  leadId: t.number,
  fromUserId: t.string,
  msgType: t.keyof({
    Unspecified: null,
    UserInvite: null,
    BorrowerInvite: null,
    AgentInvite: null,
    ForgotPassword: null,
    DocRequest: null,
    DocReject: null,
    DocAccepted: null,
    StatusUpdate: null,
    Reminder: null,
    ApplicationEmailCampaign: null,
    ContactEmailCampaign: null,
    NewMessage: null,
    UserCreatedEmail: null,
    UserCreatedSms: null,
    Test: null,
    AppointmentAlert: null,
    Referral: null,
    CombinedParent: null,
  }),
  delivery: t.keyof({
    Unspecified: null,
    Email: null,
    SMS: null,
    Toaster: null,
  }),
  priority: t.keyof({
    Unspecified: null,
    Immediate: null,
    Queue: null,
    QueuedImmediate: null,
    Retry: null,
  }),
  status: t.keyof({
    Unprocessed: null,
    InProcess: null,
    FailureSmsNotEnabled: null,
    Failure: null,
    Success: null,
    CombinedChild: null,
  }),
  to: t.string,
  from: t.string,
  cc: t.string,
  bcc: t.string,
  subject: t.string,
  body: t.string,
  trackingGuid: t.string,
  originalOpenDate: t.string,
  mostRecentOpenDate: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface MessageMessageViewModel {
  id?: number;
  campaignId?: number;
  automatedEmailId?: number;
  applicationId?: number;
  borrowerId?: number;
  agentId?: number;
  eventId?: number;
  leadId?: number;
  fromUserId?: string;
  msgType?:
    | 'Unspecified'
    | 'UserInvite'
    | 'BorrowerInvite'
    | 'AgentInvite'
    | 'ForgotPassword'
    | 'DocRequest'
    | 'DocReject'
    | 'DocAccepted'
    | 'StatusUpdate'
    | 'Reminder'
    | 'ApplicationEmailCampaign'
    | 'ContactEmailCampaign'
    | 'NewMessage'
    | 'UserCreatedEmail'
    | 'UserCreatedSms'
    | 'Test'
    | 'AppointmentAlert'
    | 'Referral'
    | 'CombinedParent';
  delivery?: 'Unspecified' | 'Email' | 'SMS' | 'Toaster';
  priority?:
    | 'Unspecified'
    | 'Immediate'
    | 'Queue'
    | 'QueuedImmediate'
    | 'Retry';
  status?:
    | 'Unprocessed'
    | 'InProcess'
    | 'FailureSmsNotEnabled'
    | 'Failure'
    | 'Success'
    | 'CombinedChild';
  to?: string;
  from?: string;
  cc?: string;
  bcc?: string;
  subject?: string;
  body?: string;
  trackingGuid?: string;
  originalOpenDate?: string;
  mostRecentOpenDate?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const MessageMessageViewModel = t.partial({
  id: t.number,
  campaignId: t.number,
  automatedEmailId: t.number,
  applicationId: t.number,
  borrowerId: t.number,
  agentId: t.number,
  eventId: t.number,
  leadId: t.number,
  fromUserId: t.string,
  msgType: t.keyof({
    Unspecified: null,
    UserInvite: null,
    BorrowerInvite: null,
    AgentInvite: null,
    ForgotPassword: null,
    DocRequest: null,
    DocReject: null,
    DocAccepted: null,
    StatusUpdate: null,
    Reminder: null,
    ApplicationEmailCampaign: null,
    ContactEmailCampaign: null,
    NewMessage: null,
    UserCreatedEmail: null,
    UserCreatedSms: null,
    Test: null,
    AppointmentAlert: null,
    Referral: null,
    CombinedParent: null,
  }),
  delivery: t.keyof({
    Unspecified: null,
    Email: null,
    SMS: null,
    Toaster: null,
  }),
  priority: t.keyof({
    Unspecified: null,
    Immediate: null,
    Queue: null,
    QueuedImmediate: null,
    Retry: null,
  }),
  status: t.keyof({
    Unprocessed: null,
    InProcess: null,
    FailureSmsNotEnabled: null,
    Failure: null,
    Success: null,
    CombinedChild: null,
  }),
  to: t.string,
  from: t.string,
  cc: t.string,
  bcc: t.string,
  subject: t.string,
  body: t.string,
  trackingGuid: t.string,
  originalOpenDate: t.string,
  mostRecentOpenDate: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface EmailCampaignLoanStatusTriggerViewModel {
  emailCampaignLoanStatusTriggerId?: number;
  emailCampaignId?: number;
  loanPurposeId?: number;
  loanStatusId?: number;
  loanTypeId?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const EmailCampaignLoanStatusTriggerViewModel = t.partial({
  emailCampaignLoanStatusTriggerId: t.number,
  emailCampaignId: t.number,
  loanPurposeId: t.number,
  loanStatusId: t.number,
  loanTypeId: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface EmailCampaignTaskStatusTriggerViewModel {
  emailCampaignTaskStatusTriggerId?: number;
  emailCampaignId?: number;
  taskId?: number;
  customTaskId?: number;
  taskStatus?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const EmailCampaignTaskStatusTriggerViewModel = t.partial({
  emailCampaignTaskStatusTriggerId: t.number,
  emailCampaignId: t.number,
  taskId: t.number,
  customTaskId: t.number,
  taskStatus: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface AutomatedEmailViewModel {
  automatedEmailId?: number;
  emailCampaignId?: number;
  emailTemplateId?: number;
  delayDays?: number;
  daysOfWeekToSend?: string;
  timeOfDayToSend?: string;
  from?: string;
  sendFromLoanContact?: boolean;
  to?: string;
  cc?: string;
  bcc?: string;
  subject?: string;
  appendLoanContactEmailSignature?: boolean;
  active?: boolean;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const AutomatedEmailViewModel = t.partial({
  automatedEmailId: t.number,
  emailCampaignId: t.number,
  emailTemplateId: t.number,
  delayDays: t.number,
  daysOfWeekToSend: t.string,
  timeOfDayToSend: t.string,
  from: t.string,
  sendFromLoanContact: t.boolean,
  to: t.string,
  cc: t.string,
  bcc: t.string,
  subject: t.string,
  appendLoanContactEmailSignature: t.boolean,
  active: t.boolean,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface EmailCampaignViewModel {
  emailCampaignId?: number;
  emailCampaignName?: string;
  repeatDays?: number;
  active?: boolean;
  triggers?: Array<EmailCampaignLoanStatusTriggerViewModel>;
  taskStatusTriggers?: Array<EmailCampaignTaskStatusTriggerViewModel>;
  automatedEmails?: Array<AutomatedEmailViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const EmailCampaignViewModel = t.partial({
  emailCampaignId: t.number,
  emailCampaignName: t.string,
  repeatDays: t.number,
  active: t.boolean,
  triggers: t.array(EmailCampaignLoanStatusTriggerViewModel),
  taskStatusTriggers: t.array(EmailCampaignTaskStatusTriggerViewModel),
  automatedEmails: t.array(AutomatedEmailViewModel),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface EmailTemplateViewModel {
  emailTemplateId?: number;
  emailTemplateName?: string;
  description?: string;
  emailTemplateType?: 'Loan' | 'Lead';
  manualSendEnabled?: boolean;
  emailText?: string;
  images?: Array<EmailTemplateImageViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const EmailTemplateViewModel = t.partial({
  emailTemplateId: t.number,
  emailTemplateName: t.string,
  description: t.string,
  emailTemplateType: t.keyof({
    Loan: null,
    Lead: null,
  }),
  manualSendEnabled: t.boolean,
  emailText: t.string,
  images: t.array(EmailTemplateImageViewModel),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface EventViewModel {
  eventId?: number;
  title?: string;
  eventType?: 'Appointment' | 'EstimatedClosing' | 'LockExpiration';
  description?: string;
  privilege?: 'Private' | 'Public';
  location?: string;
  icon?: string;
  className?: string;
  allDay?: boolean;
  dateCreate?: string;
  dateStart?: string;
  dateEnd?: string;
  eventRepeat?: string;
  remindBeforeMinutes?: number;
  remindToaster?: boolean;
  remindSms?: boolean;
  remindEmail?: boolean;
  userId?: string;
  userName?: string;
  companyId?: number;
  loginName?: string;
  applicationId?: number;
  leadId?: number;
  borrowerId?: number;
  borrowerName?: string;
  borrowerPhone?: string;
  displayAddress?: string;
  readOnly?: boolean;
}
export const EventViewModel = t.partial({
  eventId: t.number,
  title: t.string,
  eventType: t.keyof({
    Appointment: null,
    EstimatedClosing: null,
    LockExpiration: null,
  }),
  description: t.string,
  privilege: t.keyof({
    Private: null,
    Public: null,
  }),
  location: t.string,
  icon: t.string,
  className: t.string,
  allDay: t.boolean,
  dateCreate: t.string,
  dateStart: t.string,
  dateEnd: t.string,
  eventRepeat: t.string,
  remindBeforeMinutes: t.number,
  remindToaster: t.boolean,
  remindSms: t.boolean,
  remindEmail: t.boolean,
  userId: t.string,
  userName: t.string,
  companyId: t.number,
  loginName: t.string,
  applicationId: t.number,
  leadId: t.number,
  borrowerId: t.number,
  borrowerName: t.string,
  borrowerPhone: t.string,
  displayAddress: t.string,
  readOnly: t.boolean,
});

export interface TrackingUserViewModel {
  id?: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
}
export const TrackingUserViewModel = t.partial({
  id: t.string,
  userName: t.string,
  firstName: t.string,
  lastName: t.string,
});

export interface TrackingViewModel {
  trackingId?: number;
  by?: string;
  applicationId?: number;
  taskId?: number;
  fileId?: string;
  actionType?:
    | 'Immediately'
    | 'OnLoanStatus'
    | 'CreateInternalContact'
    | 'UpdateInternalContact'
    | 'Private'
    | 'Group'
    | 'Public'
    | 'Al'
    | 'Event'
    | 'ToDo'
    | 'Appointment'
    | 'AutoApply'
    | 'Confirm'
    | 'RequestQuantity'
    | 'LoanCharacteristic'
    | 'BorrowerCharacteristic'
    | 'LessThan'
    | 'LessThanOrEqualTo'
    | 'EqualTo'
    | 'GreatherThan'
    | 'GreaterThanOrEqualTo'
    | 'NullOrEmpty'
    | 'NotNullOrEmpty'
    | 'StartsWith'
    | 'Contains'
    | 'DoesNotContain'
    | 'In'
    | 'NotIn'
    | 'YesNo'
    | 'TrueFalse'
    | 'OnOff'
    | 'Text'
    | 'Integer'
    | 'Decimal'
    | 'MultiSelect'
    | 'SelectList'
    | 'Value'
    | 'Docvalue'
    | 'DataValidation'
    | 'DocumentValidation'
    | 'ManualValidation'
    | 'Pdf'
    | 'Doc'
    | 'Txt'
    | 'Excel'
    | 'Csv'
    | 'Img'
    | 'ApplyToLoan'
    | 'ApplyToPrimaryBorrower'
    | 'ApplyToSelectBorrowers'
    | 'ChangeStatus'
    | 'Uploadfile'
    | 'DeleteFile'
    | 'DownloadFile'
    | 'ExportFile'
    | 'FileNoteUpdated'
    | 'BorrowerNoteUpdated'
    | 'DeleteTask'
    | 'RemoveFileFromTrash'
    | 'ConditionStatusChange'
    | 'CreateTask'
    | 'RestoreTask'
    | 'MergeFile'
    | 'PostponeTask'
    | 'ChangeFollowUpDate'
    | 'ChangeDueDate'
    | 'ViewFile'
    | 'FileNameChanged'
    | 'ChangeConditionFlag'
    | 'ChangeDescription'
    | 'ChangeNotifyParty'
    | 'ChangePriority'
    | 'ChangeResponsibleParty'
    | 'ChangeReviewRequired'
    | 'InternalMessageAlert'
    | 'BorrowerMessageAlert'
    | 'TaskStatusAlert'
    | 'GeneralAlert'
    | 'LoanStatusAlert'
    | 'FailedEmailAlert'
    | 'FailedSmsAlert'
    | 'NewLeadAlert';
  actionValue?: string;
  dateCreated?: string;
  userProfile?: TrackingUserViewModel;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const TrackingViewModel = t.partial({
  trackingId: t.number,
  by: t.string,
  applicationId: t.number,
  taskId: t.number,
  fileId: t.string,
  actionType: t.keyof({
    Immediately: null,
    OnLoanStatus: null,
    CreateInternalContact: null,
    UpdateInternalContact: null,
    Private: null,
    Group: null,
    Public: null,
    Al: null,
    Event: null,
    ToDo: null,
    Appointment: null,
    AutoApply: null,
    Confirm: null,
    RequestQuantity: null,
    LoanCharacteristic: null,
    BorrowerCharacteristic: null,
    LessThan: null,
    LessThanOrEqualTo: null,
    EqualTo: null,
    GreatherThan: null,
    GreaterThanOrEqualTo: null,
    NullOrEmpty: null,
    NotNullOrEmpty: null,
    StartsWith: null,
    Contains: null,
    DoesNotContain: null,
    In: null,
    NotIn: null,
    YesNo: null,
    TrueFalse: null,
    OnOff: null,
    Text: null,
    Integer: null,
    Decimal: null,
    MultiSelect: null,
    SelectList: null,
    Value: null,
    Docvalue: null,
    DataValidation: null,
    DocumentValidation: null,
    ManualValidation: null,
    Pdf: null,
    Doc: null,
    Txt: null,
    Excel: null,
    Csv: null,
    Img: null,
    ApplyToLoan: null,
    ApplyToPrimaryBorrower: null,
    ApplyToSelectBorrowers: null,
    ChangeStatus: null,
    Uploadfile: null,
    DeleteFile: null,
    DownloadFile: null,
    ExportFile: null,
    FileNoteUpdated: null,
    BorrowerNoteUpdated: null,
    DeleteTask: null,
    RemoveFileFromTrash: null,
    ConditionStatusChange: null,
    CreateTask: null,
    RestoreTask: null,
    MergeFile: null,
    PostponeTask: null,
    ChangeFollowUpDate: null,
    ChangeDueDate: null,
    ViewFile: null,
    FileNameChanged: null,
    ChangeConditionFlag: null,
    ChangeDescription: null,
    ChangeNotifyParty: null,
    ChangePriority: null,
    ChangeResponsibleParty: null,
    ChangeReviewRequired: null,
    InternalMessageAlert: null,
    BorrowerMessageAlert: null,
    TaskStatusAlert: null,
    GeneralAlert: null,
    LoanStatusAlert: null,
    FailedEmailAlert: null,
    FailedSmsAlert: null,
    NewLeadAlert: null,
  }),
  actionValue: t.string,
  dateCreated: t.string,
  userProfile: TrackingUserViewModel,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface DocFileModel {
  guid?: string;
  loanDocId?: number;
  note?: string;
  borrowerNote?: string;
  condition?: boolean;
  replacementValuesJson?: string;
  fileName?: string;
  mimeType?: string;
  fileData?: string;
  createDate?: string;
  exportDate?: string;
  active?: boolean;
}
export const DocFileModel = t.partial({
  guid: t.string,
  loanDocId: t.number,
  note: t.string,
  borrowerNote: t.string,
  condition: t.boolean,
  replacementValuesJson: t.string,
  fileName: t.string,
  mimeType: t.string,
  fileData: t.string,
  createDate: t.string,
  exportDate: t.string,
  active: t.boolean,
});

export interface ExportLoanDocModel {
  taskStatus?:
    | 'Pending'
    | 'Submitted'
    | 'Rejected'
    | 'Approved'
    | 'NotApplicable'
    | 'Requested'
    | 'Completed'
    | 'ReviewReady';
  conditionStatus?:
    | 'ConditionPending'
    | 'ConditionCleared'
    | 'ConditionReOpened'
    | 'ConditionNotApplicable';
  guid?: string;
  loanDocId?: number;
  note?: string;
  borrowerNote?: string;
  condition?: boolean;
  replacementValuesJson?: string;
  fileName?: string;
  mimeType?: string;
  fileData?: string;
  createDate?: string;
  exportDate?: string;
  active?: boolean;
}
export const ExportLoanDocModel = t.partial({
  taskStatus: t.keyof({
    Pending: null,
    Submitted: null,
    Rejected: null,
    Approved: null,
    NotApplicable: null,
    Requested: null,
    Completed: null,
    ReviewReady: null,
  }),
  conditionStatus: t.keyof({
    ConditionPending: null,
    ConditionCleared: null,
    ConditionReOpened: null,
    ConditionNotApplicable: null,
  }),
  guid: t.string,
  loanDocId: t.number,
  note: t.string,
  borrowerNote: t.string,
  condition: t.boolean,
  replacementValuesJson: t.string,
  fileName: t.string,
  mimeType: t.string,
  fileData: t.string,
  createDate: t.string,
  exportDate: t.string,
  active: t.boolean,
});

export interface ExportDocumentModel {
  documentTypeId?: number;
  documentTypeName?: string;
  docFiles?: Array<ExportLoanDocModel>;
}
export const ExportDocumentModel = t.partial({
  documentTypeId: t.number,
  documentTypeName: t.string,
  docFiles: t.array(ExportLoanDocModel),
});

export interface ExportDocFilesRequest {
  docFileGuids?: Array<string>;
}
export const ExportDocFilesRequest = t.partial({
  docFileGuids: t.array(t.string),
});

export interface FlowBuilderViewModel {
  id?: number;
  flowType:
    | 'Unspecified'
    | 'LeadPost'
    | 'OnlineApplication'
    | 'ContactStrategy';
  title: string;
  comment: string;
  data?: string;
  flowGuid?: string;
  active: boolean;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const FlowBuilderViewModel = t.intersection([
  t.type({
    flowType: t.keyof({
      Unspecified: null,
      LeadPost: null,
      OnlineApplication: null,
      ContactStrategy: null,
    }),
    title: t.string,
    comment: t.string,
    active: t.boolean,
  }),
  t.partial({
    id: t.number,
    data: t.string,
    flowGuid: t.string,
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  }),
]);

export interface FormFreeHistoryViewModel {
  formFreeHistoryId?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  last4Ssn?: string;
  voaRequestType?: 'full' | 'lite';
  transactionId?: string;
  accountChekOrderId?: string;
  reportId?: string;
  orderStatus?: number;
  loginUrl?: string;
  status?: string;
  leadId?: number;
  applicationId?: number;
  borrowerId?: number;
  loanDocTaskId?: number;
  taskStatus?:
    | 'Pending'
    | 'Submitted'
    | 'Rejected'
    | 'Approved'
    | 'NotApplicable'
    | 'Requested'
    | 'Completed'
    | 'ReviewReady';
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const FormFreeHistoryViewModel = t.partial({
  formFreeHistoryId: t.number,
  firstName: t.string,
  lastName: t.string,
  email: t.string,
  last4Ssn: t.string,
  voaRequestType: t.keyof({
    full: null,
    lite: null,
  }),
  transactionId: t.string,
  accountChekOrderId: t.string,
  reportId: t.string,
  orderStatus: t.number,
  loginUrl: t.string,
  status: t.string,
  leadId: t.number,
  applicationId: t.number,
  borrowerId: t.number,
  loanDocTaskId: t.number,
  taskStatus: t.keyof({
    Pending: null,
    Submitted: null,
    Rejected: null,
    Approved: null,
    NotApplicable: null,
    Requested: null,
    Completed: null,
    ReviewReady: null,
  }),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface LiteAccountInfo {
  accountId?: string;
  accountType?: 'DDA' | 'SDA' | 'INV' | 'OLA';
  accountName?: string;
  accountNumber?: string;
  accountHolder?: string;
  fiName?: string;
  fiAccountType?: string;
  fiPlanName?: string;
  balance?: number;
  balanceDate?: string;
}
export const LiteAccountInfo = t.partial({
  accountId: t.string,
  accountType: t.keyof({
    DDA: null,
    SDA: null,
    INV: null,
    OLA: null,
  }),
  accountName: t.string,
  accountNumber: t.string,
  accountHolder: t.string,
  fiName: t.string,
  fiAccountType: t.string,
  fiPlanName: t.string,
  balance: t.number,
  balanceDate: t.string,
});

export interface GenerateDocumentRequest {
  documentTemplateId?: number;
  applicationId?: number;
  loanDocTaskId?: number;
  replacementValues?: Record<string, string>;
}
export const GenerateDocumentRequest = t.partial({
  documentTemplateId: t.number,
  applicationId: t.number,
  loanDocTaskId: t.number,
  replacementValues: t.record(t.string, t.string),
});

export interface KpiRequestModel {
  kpi?:
    | 'Leads'
    | 'LeadCreditPulls'
    | 'LeadConversions'
    | 'ApplicationCreditPulls'
    | 'ApplicationSubmissions'
    | 'ApplicationApprovals'
    | 'ApplicationFundings';
  startDate?: string;
  endDate?: string;
  statusId?: number;
  taskId?: number;
  orderBy?: 'Units' | 'Volume';
  numberOfResults?: number;
}
export const KpiRequestModel = t.partial({
  kpi: t.keyof({
    Leads: null,
    LeadCreditPulls: null,
    LeadConversions: null,
    ApplicationCreditPulls: null,
    ApplicationSubmissions: null,
    ApplicationApprovals: null,
    ApplicationFundings: null,
  }),
  startDate: t.string,
  endDate: t.string,
  statusId: t.number,
  taskId: t.number,
  orderBy: t.keyof({
    Units: null,
    Volume: null,
  }),
  numberOfResults: t.number,
});

export interface UserKpiDataModel {
  avatarId?: string;
  userId?: string;
  units?: number;
  volume?: number;
}
export const UserKpiDataModel = t.partial({
  avatarId: t.string,
  userId: t.string,
  units: t.number,
  volume: t.number,
});

export interface KpiDataModel {
  units?: number;
  volume?: number;
}
export const KpiDataModel = t.partial({
  units: t.number,
  volume: t.number,
});

export interface KpiResponseModel {
  kpi?:
    | 'Leads'
    | 'LeadCreditPulls'
    | 'LeadConversions'
    | 'ApplicationCreditPulls'
    | 'ApplicationSubmissions'
    | 'ApplicationApprovals'
    | 'ApplicationFundings';
  displayName?: string;
  icon?: string;
  color?: string;
  kpiData?: Array<UserKpiDataModel>;
  totalKpiData?: KpiDataModel;
}
export const KpiResponseModel = t.partial({
  kpi: t.keyof({
    Leads: null,
    LeadCreditPulls: null,
    LeadConversions: null,
    ApplicationCreditPulls: null,
    ApplicationSubmissions: null,
    ApplicationApprovals: null,
    ApplicationFundings: null,
  }),
  displayName: t.string,
  icon: t.string,
  color: t.string,
  kpiData: t.array(UserKpiDataModel),
  totalKpiData: KpiDataModel,
});

export interface LeadViewModel {
  leadId?: number;
  borrowerId?: number;
  coBorrowerId?: number;
  applicationId?: number;
  firstName?: string;
  lastName?: string;
  suffix?: string;
  socialSecurityNumber?: string;
  birthDate?: string;
  email?: string;
  phone?: string;
  workPhone?: string;
  fax?: string;
  presentAddress1?: string;
  presentAddress2?: string;
  presentCity?: string;
  presentState?: string;
  presentZip?: string;
  mailingAddress1?: string;
  mailingAddress2?: string;
  mailingCity?: string;
  mailingState?: string;
  mailingZip?: string;
  coFirstName?: string;
  coLastName?: string;
  coSuffix?: string;
  coSocialSecurityNumber?: string;
  coBirthDate?: string;
  coCreditScore?: number;
  coEmail?: string;
  coPhone?: string;
  coWorkPhone?: string;
  coFax?: string;
  coPresentAddress1?: string;
  coPresentAddress2?: string;
  coPresentCity?: string;
  coPresentState?: string;
  coPresentZip?: string;
  coMailingAddress1?: string;
  coMailingAddress2?: string;
  coMailingCity?: string;
  coMailingState?: string;
  coMailingZip?: string;
  creditScore?: number;
  subjectPropertyAddress1?: string;
  subjectPropertyAddress2?: string;
  subjectPropertyCity?: string;
  subjectPropertyState?: string;
  subjectPropertyZip?: string;
  loanAmount?: number;
  appraisedValue?: number;
  cashOutAmount?: number;
  downPayment?: number;
  interestRate?: number;
  loanTypeId?: number;
  loanPurposeId?: number;
  currentLoanUnpaidPrincipalBalance?: number;
  currentLoanEstimatedValue?: number;
  currentLoanInterestRate?: number;
  currentLoanTerm?: number;
  leadContactUserId?: string;
  appointmentDate?: string;
  appointmentDescription?: string;
  appointmentNotes?: string;
  customData1?: string;
  customData2?: string;
  customData3?: string;
  customData4?: string;
  customData5?: string;
  customData6?: string;
  customData7?: string;
  customData8?: string;
  customData9?: string;
  customData10?: string;
  leadCampaignId?: number;
  leadStatusId?: number;
  referralSource?: number;
  leadSource?: string;
  losRefNumber?: string;
  internalNotes?: string;
  postLeadRequestJson?: string;
  lastAttemptedContact?: string;
  lastSuccessfulContact?: string;
  leadListIds?: Array<number>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const LeadViewModel = t.partial({
  leadId: t.number,
  borrowerId: t.number,
  coBorrowerId: t.number,
  applicationId: t.number,
  firstName: t.string,
  lastName: t.string,
  suffix: t.string,
  socialSecurityNumber: t.string,
  birthDate: t.string,
  email: t.string,
  phone: t.string,
  workPhone: t.string,
  fax: t.string,
  presentAddress1: t.string,
  presentAddress2: t.string,
  presentCity: t.string,
  presentState: t.string,
  presentZip: t.string,
  mailingAddress1: t.string,
  mailingAddress2: t.string,
  mailingCity: t.string,
  mailingState: t.string,
  mailingZip: t.string,
  coFirstName: t.string,
  coLastName: t.string,
  coSuffix: t.string,
  coSocialSecurityNumber: t.string,
  coBirthDate: t.string,
  coCreditScore: t.number,
  coEmail: t.string,
  coPhone: t.string,
  coWorkPhone: t.string,
  coFax: t.string,
  coPresentAddress1: t.string,
  coPresentAddress2: t.string,
  coPresentCity: t.string,
  coPresentState: t.string,
  coPresentZip: t.string,
  coMailingAddress1: t.string,
  coMailingAddress2: t.string,
  coMailingCity: t.string,
  coMailingState: t.string,
  coMailingZip: t.string,
  creditScore: t.number,
  subjectPropertyAddress1: t.string,
  subjectPropertyAddress2: t.string,
  subjectPropertyCity: t.string,
  subjectPropertyState: t.string,
  subjectPropertyZip: t.string,
  loanAmount: t.number,
  appraisedValue: t.number,
  cashOutAmount: t.number,
  downPayment: t.number,
  interestRate: t.number,
  loanTypeId: t.number,
  loanPurposeId: t.number,
  currentLoanUnpaidPrincipalBalance: t.number,
  currentLoanEstimatedValue: t.number,
  currentLoanInterestRate: t.number,
  currentLoanTerm: t.number,
  leadContactUserId: t.string,
  appointmentDate: t.string,
  appointmentDescription: t.string,
  appointmentNotes: t.string,
  customData1: t.string,
  customData2: t.string,
  customData3: t.string,
  customData4: t.string,
  customData5: t.string,
  customData6: t.string,
  customData7: t.string,
  customData8: t.string,
  customData9: t.string,
  customData10: t.string,
  leadCampaignId: t.number,
  leadStatusId: t.number,
  referralSource: t.number,
  leadSource: t.string,
  losRefNumber: t.string,
  internalNotes: t.string,
  postLeadRequestJson: t.string,
  lastAttemptedContact: t.string,
  lastSuccessfulContact: t.string,
  leadListIds: t.array(t.number),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface LeadEventViewModel {
  leadEventId?: number;
  leadId?: number;
  leadStatusId?: number;
  createdByUserId?: string;
  type?: string;
  note?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const LeadEventViewModel = t.partial({
  leadEventId: t.number,
  leadId: t.number,
  leadStatusId: t.number,
  createdByUserId: t.string,
  type: t.string,
  note: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface LeadEmploymentViewModel {
  leadEmploymentId?: number;
  leadId?: number;
  companyName?: string;
  position?: string;
  employmentLengthYears?: number;
  monthlyIncome?: number;
  isCurrentEmployer?: boolean;
  notes?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const LeadEmploymentViewModel = t.partial({
  leadEmploymentId: t.number,
  leadId: t.number,
  companyName: t.string,
  position: t.string,
  employmentLengthYears: t.number,
  monthlyIncome: t.number,
  isCurrentEmployer: t.boolean,
  notes: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface LeadCreditViewModel {
  leadCreditId?: number;
  leadId?: number;
  borrowerType?: 'PrimaryBorrower' | 'CoBorrower';
  creditVendor?: 'MeridianLink' | 'CoreLogicCredco';
  integrationHistoryId?: number;
  creditRunDate?: string;
  experianRequested?: boolean;
  experianScore?: number;
  equifaxRequested?: boolean;
  equifaxScore?: number;
  transUnionRequested?: boolean;
  transUnionScore?: number;
  isJoint?: boolean;
  referenceNumber?: string;
  notes?: string;
  successful?: boolean;
  failureReason?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const LeadCreditViewModel = t.partial({
  leadCreditId: t.number,
  leadId: t.number,
  borrowerType: t.keyof({
    PrimaryBorrower: null,
    CoBorrower: null,
  }),
  creditVendor: t.keyof({
    MeridianLink: null,
    CoreLogicCredco: null,
  }),
  integrationHistoryId: t.number,
  creditRunDate: t.string,
  experianRequested: t.boolean,
  experianScore: t.number,
  equifaxRequested: t.boolean,
  equifaxScore: t.number,
  transUnionRequested: t.boolean,
  transUnionScore: t.number,
  isJoint: t.boolean,
  referenceNumber: t.string,
  notes: t.string,
  successful: t.boolean,
  failureReason: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface LeadCampaignViewModel {
  leadCampaignId?: number;
  name?: string;
  description?: string;
  type?: string;
  costPerLead?: number;
  email?: string;
  note?: string;
  active?: boolean;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const LeadCampaignViewModel = t.partial({
  leadCampaignId: t.number,
  name: t.string,
  description: t.string,
  type: t.string,
  costPerLead: t.number,
  email: t.string,
  note: t.string,
  active: t.boolean,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface LeadListViewModel {
  leadListId?: number;
  name?: string;
  description?: string;
  leadIds?: Array<number>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const LeadListViewModel = t.partial({
  leadListId: t.number,
  name: t.string,
  description: t.string,
  leadIds: t.array(t.number),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface LeadMilestonesReportResponse {
  speedToContactAttemptMinutes?: number;
  speedToContactMinutes?: number;
  leads?: number;
  activeLeads?: number;
  convertedLeads?: number;
  contactRate?: number;
  conversionRate?: number;
  filterTotalLeads?: number;
  filterTotalActiveLeads?: number;
  filterTotalConvertedLeads?: number;
  filterTotalConversionRate?: number;
  filterTotalContactRate?: number;
  totalLeads?: number;
  totalActiveLeads?: number;
  totalConvertedLeads?: number;
  totalConversionRate?: number;
  totalContactRate?: number;
}
export const LeadMilestonesReportResponse = t.partial({
  speedToContactAttemptMinutes: t.number,
  speedToContactMinutes: t.number,
  leads: t.number,
  activeLeads: t.number,
  convertedLeads: t.number,
  contactRate: t.number,
  conversionRate: t.number,
  filterTotalLeads: t.number,
  filterTotalActiveLeads: t.number,
  filterTotalConvertedLeads: t.number,
  filterTotalConversionRate: t.number,
  filterTotalContactRate: t.number,
  totalLeads: t.number,
  totalActiveLeads: t.number,
  totalConvertedLeads: t.number,
  totalConversionRate: t.number,
  totalContactRate: t.number,
});

export interface LeadPerformanceReportResponse {
  newLeadsReceived?: number;
  contactAttemptsCount?: number;
  contactSuccessCount?: number;
  emailsSentCount?: number;
  uniqueLeadsContactedCount?: number;
  leadsConvertedCount?: number;
}
export const LeadPerformanceReportResponse = t.partial({
  newLeadsReceived: t.number,
  contactAttemptsCount: t.number,
  contactSuccessCount: t.number,
  emailsSentCount: t.number,
  uniqueLeadsContactedCount: t.number,
  leadsConvertedCount: t.number,
});

export interface LeadPerformanceReportDetailResponse {
  labels?: Array<string>;
  newLeadsReceived?: Array<number>;
  contactAttemptsCount?: Array<number>;
  contactSuccessCount?: Array<number>;
  emailsSentCount?: Array<number>;
  uniqueLeadsContactedCount?: Array<number>;
  leadsConvertedCount?: Array<number>;
}
export const LeadPerformanceReportDetailResponse = t.partial({
  labels: t.array(t.string),
  newLeadsReceived: t.array(t.number),
  contactAttemptsCount: t.array(t.number),
  contactSuccessCount: t.array(t.number),
  emailsSentCount: t.array(t.number),
  uniqueLeadsContactedCount: t.array(t.number),
  leadsConvertedCount: t.array(t.number),
});

export interface LeadStatusReportResponse {
  leadCountByStatus?: Record<string, number>;
}
export const LeadStatusReportResponse = t.partial({
  leadCountByStatus: t.record(t.string, t.number),
});

export interface ParseDuLeadViewModel {
  leadViewModel?: LeadViewModel;
  loanNumber?: string;
  loanPurposeId?: number;
  loanTypeId?: number;
  losIdentifier?: string;
  success?: boolean;
  validationErrors?: Array<string>;
  errorMessage?: string;
}
export const ParseDuLeadViewModel = t.partial({
  leadViewModel: LeadViewModel,
  loanNumber: t.string,
  loanPurposeId: t.number,
  loanTypeId: t.number,
  losIdentifier: t.string,
  success: t.boolean,
  validationErrors: t.array(t.string),
  errorMessage: t.string,
});

export interface ExternalContactView {
  agentId?: number;
  agentTypeId?: number;
  agentType?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  orgName?: string;
  fax?: string;
}
export const ExternalContactView = t.partial({
  agentId: t.number,
  agentTypeId: t.number,
  agentType: t.string,
  firstName: t.string,
  lastName: t.string,
  phone: t.string,
  email: t.string,
  orgName: t.string,
  fax: t.string,
});

export interface InternalContactModel {
  internalContactId?: number;
  applicationId?: number;
  roleId?: number;
  userId?: string;
}
export const InternalContactModel = t.partial({
  internalContactId: t.number,
  applicationId: t.number,
  roleId: t.number,
  userId: t.string,
});

export interface CurrentLoanInfoModel {
  currentLoanInfoId?: number;
  applicationId?: number;
  currentUnpaidPrincipalBalance?: number;
  propertyValue?: number;
  currentRate?: number;
  term?: number;
}
export const CurrentLoanInfoModel = t.partial({
  currentLoanInfoId: t.number,
  applicationId: t.number,
  currentUnpaidPrincipalBalance: t.number,
  propertyValue: t.number,
  currentRate: t.number,
  term: t.number,
});

export interface CharacteristicMergeValueViewModel {
  characteristicMergeValueId?: number;
  characteristicFieldId?: number;
  borrowerCharacteristicId?: number;
  loanCharacteristicId?: number;
  mergeValue?: string;
}
export const CharacteristicMergeValueViewModel = t.partial({
  characteristicMergeValueId: t.number,
  characteristicFieldId: t.number,
  borrowerCharacteristicId: t.number,
  loanCharacteristicId: t.number,
  mergeValue: t.string,
});

export interface LoanCharacteristicViewModel {
  loanCharacteristicId?: number;
  applicationId?: number;
  characteristicId?: number;
  characteristicMergeValues?: Array<CharacteristicMergeValueViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const LoanCharacteristicViewModel = t.partial({
  loanCharacteristicId: t.number,
  applicationId: t.number,
  characteristicId: t.number,
  characteristicMergeValues: t.array(CharacteristicMergeValueViewModel),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface UpsertLoanCharacteristicView {
  loanCharacteristics?: Array<LoanCharacteristicViewModel>;
  loanDocTasks?: Array<LoanDocTaskViewModel>;
}
export const UpsertLoanCharacteristicView = t.partial({
  loanCharacteristics: t.array(LoanCharacteristicViewModel),
  loanDocTasks: t.array(LoanDocTaskViewModel),
});

export interface BorrowerCharacteristicViewModel {
  borrowerCharacteristicId?: number;
  applicationId?: number;
  borrowerId?: number;
  characteristicId?: number;
  characteristicMergeValues?: Array<CharacteristicMergeValueViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const BorrowerCharacteristicViewModel = t.partial({
  borrowerCharacteristicId: t.number,
  applicationId: t.number,
  borrowerId: t.number,
  characteristicId: t.number,
  characteristicMergeValues: t.array(CharacteristicMergeValueViewModel),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface UpsertBorrowerCharacteristicsView {
  borrowerCharacteristics?: Array<BorrowerCharacteristicViewModel>;
  loanDocTasks?: Array<LoanDocTaskViewModel>;
}
export const UpsertBorrowerCharacteristicsView = t.partial({
  borrowerCharacteristics: t.array(BorrowerCharacteristicViewModel),
  loanDocTasks: t.array(LoanDocTaskViewModel),
});

export interface LoanDocModel {
  loanDocId?: number;
  applicationId?: number;
  borrowerID?: number;
  documentTypeId?: number;
  description?: string;
  note?: string;
  expirationDate?: string;
  retask?: boolean;
  active?: boolean;
  docFiles?: Array<DocFileModel>;
}
export const LoanDocModel = t.partial({
  loanDocId: t.number,
  applicationId: t.number,
  borrowerID: t.number,
  documentTypeId: t.number,
  description: t.string,
  note: t.string,
  expirationDate: t.string,
  retask: t.boolean,
  active: t.boolean,
  docFiles: t.array(DocFileModel),
});

export interface LoanDocDto {
  loanDocId?: number;
  description?: string;
  documentTypeId?: number;
  applicationId?: number;
  dateView?: string;
  dateDownload?: string;
  dateCreate?: string;
  expirationDate?: string;
  fileName?: string;
  note?: string;
  condition?: boolean;
  borrowerID?: number;
  userId?: number;
  active?: boolean;
  uploadFiles?: Array<FileDto>;
}
export const LoanDocDto = t.partial({
  loanDocId: t.number,
  description: t.string,
  documentTypeId: t.number,
  applicationId: t.number,
  dateView: t.string,
  dateDownload: t.string,
  dateCreate: t.string,
  expirationDate: t.string,
  fileName: t.string,
  note: t.string,
  condition: t.boolean,
  borrowerID: t.number,
  userId: t.number,
  active: t.boolean,
  uploadFiles: t.array(FileDto),
});

export interface ActivityLogViewModel {
  userId?: string;
  category?:
    | 'LoanChangeStatus'
    | 'BorrowerMessage'
    | 'InternalMessage'
    | 'Lead'
    | 'DocumentFile';
  activityType?:
    | 'LoanChangeStatus'
    | 'BorrowerMessage'
    | 'InternalMessage'
    | 'LeadNote'
    | 'LeadEmail'
    | 'LeadSms'
    | 'LeadPhoneAttempt'
    | 'LeadPhoneSuccess'
    | 'ChangeStatus'
    | 'Uploadfile'
    | 'DeleteFile'
    | 'DownloadFile'
    | 'ExportFile'
    | 'FileNoteUpdated'
    | 'BorrowerNoteUpdated'
    | 'DeleteTask'
    | 'RemoveFileFromTrash'
    | 'ConditionStatusChange'
    | 'CreateTask'
    | 'RestoreTask'
    | 'MergeFile'
    | 'PostponeTask'
    | 'ChangeFollowUpDate'
    | 'ChangeDueDate'
    | 'ViewFile'
    | 'FileNameChanged'
    | 'ChangeConditionFlag'
    | 'ChangeDescription'
    | 'ChangeNotifyParty'
    | 'ChangePriority'
    | 'ChangeResponsibleParty'
    | 'ChangeReviewRequired'
    | 'Unknown';
  displayText?: string;
  dateCreated?: string;
  loanDocTaskId?: number;
  messageId?: number;
  leadEventId?: number;
  fileId?: string;
  trackingId?: number;
}
export const ActivityLogViewModel = t.partial({
  userId: t.string,
  category: t.keyof({
    LoanChangeStatus: null,
    BorrowerMessage: null,
    InternalMessage: null,
    Lead: null,
    DocumentFile: null,
  }),
  activityType: t.keyof({
    LoanChangeStatus: null,
    BorrowerMessage: null,
    InternalMessage: null,
    LeadNote: null,
    LeadEmail: null,
    LeadSms: null,
    LeadPhoneAttempt: null,
    LeadPhoneSuccess: null,
    ChangeStatus: null,
    Uploadfile: null,
    DeleteFile: null,
    DownloadFile: null,
    ExportFile: null,
    FileNoteUpdated: null,
    BorrowerNoteUpdated: null,
    DeleteTask: null,
    RemoveFileFromTrash: null,
    ConditionStatusChange: null,
    CreateTask: null,
    RestoreTask: null,
    MergeFile: null,
    PostponeTask: null,
    ChangeFollowUpDate: null,
    ChangeDueDate: null,
    ViewFile: null,
    FileNameChanged: null,
    ChangeConditionFlag: null,
    ChangeDescription: null,
    ChangeNotifyParty: null,
    ChangePriority: null,
    ChangeResponsibleParty: null,
    ChangeReviewRequired: null,
    Unknown: null,
  }),
  displayText: t.string,
  dateCreated: t.string,
  loanDocTaskId: t.number,
  messageId: t.number,
  leadEventId: t.number,
  fileId: t.string,
  trackingId: t.number,
});

export interface LoanInfo {
  application?: ApplicationViewModel;
  currentLoanInfo?: CurrentLoanInfoModel;
}
export const LoanInfo = t.partial({
  application: ApplicationViewModel,
  currentLoanInfo: CurrentLoanInfoModel,
});

export interface AddressView {
  mailingStreet?: string;
  mailingPOBox?: string;
  mailingCity?: string;
  mailingState?: string;
  mailingZip?: string;
}
export const AddressView = t.partial({
  mailingStreet: t.string,
  mailingPOBox: t.string,
  mailingCity: t.string,
  mailingState: t.string,
  mailingZip: t.string,
});

export interface MergeDocFilesInstruction {
  sourceDocFileGuid?: string;
  destinationDocFileGuid?: string;
  destinationLoanDocId?: number;
  destinationLoanDocTaskId?: number;
  documentTypeId?: number;
  description?: string;
  fileName?: string;
  note?: string;
  borrowerNote?: string;
  condition?: boolean;
  mergeMode?: 'Append' | 'Prepend' | 'Replace';
  allPages?: boolean;
  customPages?: Array<number>;
  removePagesFromSource?: boolean;
}
export const MergeDocFilesInstruction = t.partial({
  sourceDocFileGuid: t.string,
  destinationDocFileGuid: t.string,
  destinationLoanDocId: t.number,
  destinationLoanDocTaskId: t.number,
  documentTypeId: t.number,
  description: t.string,
  fileName: t.string,
  note: t.string,
  borrowerNote: t.string,
  condition: t.boolean,
  mergeMode: t.keyof({
    Append: null,
    Prepend: null,
    Replace: null,
  }),
  allPages: t.boolean,
  customPages: t.array(t.number),
  removePagesFromSource: t.boolean,
});

export interface MergeDocFilesRequest {
  newSourceDocFileBase64Content?: Record<string, string>;
  mergeInstructions?: Array<MergeDocFilesInstruction>;
  originalFileGuid?: string;
  newFileName?: string;
}
export const MergeDocFilesRequest = t.partial({
  newSourceDocFileBase64Content: t.record(t.string, t.string),
  mergeInstructions: t.array(MergeDocFilesInstruction),
  originalFileGuid: t.string,
  newFileName: t.string,
});

export interface LogModel {
  level?: 'Fatal' | 'Error' | 'Warning' | 'Info' | 'Debug' | 'Trace';
  timestamp?: string;
  message?: string;
  actionType?: string;
  origin?: string;
  data?: Record<string, Record<string, unknown>>;
}
export const LogModel = t.partial({
  level: t.keyof({
    Fatal: null,
    Error: null,
    Warning: null,
    Info: null,
    Debug: null,
    Trace: null,
  }),
  timestamp: t.string,
  message: t.string,
  actionType: t.string,
  origin: t.string,
  data: t.record(t.string, t.UnknownRecord),
});

export interface UserLookupView {
  id?: string;
  firstName?: string;
  lastName?: string;
  roleId?: number;
}
export const UserLookupView = t.partial({
  id: t.string,
  firstName: t.string,
  lastName: t.string,
  roleId: t.number,
});

export interface AddressViewModel {
  addressId?: number;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  county?: string;
  country?: string;
  active?: boolean;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const AddressViewModel = t.partial({
  addressId: t.number,
  address1: t.string,
  address2: t.string,
  city: t.string,
  state: t.string,
  zipCode: t.string,
  county: t.string,
  country: t.string,
  active: t.boolean,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface SubjectPropertyViewModel {
  subjectPropertyId?: number;
  addressId?: number;
  purposeOfLoan?:
    | 'Refinance'
    | 'Purchase'
    | 'ConstructionOnly'
    | 'ConstructionToPermanent'
    | 'OtherLoanPurpose'
    | 'RefinanceCashOut';
  loanPurposeOtherDescription?: string;
  propertyWillBe?: 'PrimaryResidence' | 'SecondaryResidence' | 'Investment';
  grossRent?: number;
  occupancyPercent?: number;
  noOfUnits?: number;
  yearBuilt?: number;
  propertyType?:
    | 'SFRAttached'
    | 'Condominium'
    | 'Cooperative'
    | 'SFR'
    | 'HighRiseCondominium'
    | 'ManufacturedHousing'
    | 'Modular'
    | 'PUD'
    | 'ManufacturedHousingSingleWide'
    | 'ManufacturedHousingDoubleWide'
    | 'DetachedCondominium'
    | 'ManufacturedHomeCondominium'
    | 'ManufacturedHousingMultiWide'
    | 'ManufacturedHomeCondominiumOrPUDOrCooperative';
  constructionPeriodMonths?: number;
  amountOutstanding?: number;
  presentValue?: number;
  improvementCost?: number;
  amountExistLiensYear?: number;
  originalCostYear?: number;
  originalCost?: number;
  refiPurpose?:
    | 'NoCashOut'
    | 'CashOutOther'
    | 'CashOutHomeImprovement'
    | 'CashOutDebtConsolidation'
    | 'CashOutLimited';
  describeImprovement?: string;
  improvementStatus?: 'Made' | 'ToBeMade';
  cost?: number;
  refinanceWithOriginalCreditor?: boolean;
  titleNames?: string;
  downPaymentSource?:
    | 'BridgeLoan'
    | 'CashOnHand'
    | 'CheckingSavings'
    | 'DepositOnSalesContract'
    | 'EquityOnPendingSale'
    | 'EquityOnSoldProperty'
    | 'EquityOnSubjectProperty'
    | 'GiftFunds'
    | 'LifeInsuranceCashValue'
    | 'LotEquity'
    | 'OtherTypeOfDownPayment'
    | 'RentWithOptionToPurchase'
    | 'RetirementFunds'
    | 'SaleOfChattel'
    | 'SecuredBorrowedFunds'
    | 'StocksAndBonds'
    | 'SweatEquity'
    | 'TradeEquity'
    | 'TrustFunds'
    | 'UnsecuredBorrowedFunds'
    | 'EarnestMoney'
    | 'RelocationFunds'
    | 'EmployerAssistedHousing'
    | 'LeasePurchaseFund'
    | 'Other'
    | 'LenderCredit'
    | 'CashDepositOnSalesContract'
    | 'SellerCredit'
    | 'BorrowerPaidFees'
    | 'FhaGiftSourceNotApplicable'
    | 'FhaGiftSourceRelative'
    | 'FhaGiftSourceGovernmentAssistance'
    | 'FhaGiftSourceEmployer'
    | 'FhaGiftSourceReligiousSellerFunded'
    | 'FhaGiftSourceReligiousNonSellerFunded';
  explain?: string;
  manner?: string;
  estate?: 'FeeSimple' | 'LeaseHold';
  leaseHoldExpirationDate?: string;
  legalDescriptionType?: 'Other' | 'MetesAndBounds';
  address?: AddressViewModel;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const SubjectPropertyViewModel = t.partial({
  subjectPropertyId: t.number,
  addressId: t.number,
  purposeOfLoan: t.keyof({
    Refinance: null,
    Purchase: null,
    ConstructionOnly: null,
    ConstructionToPermanent: null,
    OtherLoanPurpose: null,
    RefinanceCashOut: null,
  }),
  loanPurposeOtherDescription: t.string,
  propertyWillBe: t.keyof({
    PrimaryResidence: null,
    SecondaryResidence: null,
    Investment: null,
  }),
  grossRent: t.number,
  occupancyPercent: t.number,
  noOfUnits: t.number,
  yearBuilt: t.number,
  propertyType: t.keyof({
    SFRAttached: null,
    Condominium: null,
    Cooperative: null,
    SFR: null,
    HighRiseCondominium: null,
    ManufacturedHousing: null,
    Modular: null,
    PUD: null,
    ManufacturedHousingSingleWide: null,
    ManufacturedHousingDoubleWide: null,
    DetachedCondominium: null,
    ManufacturedHomeCondominium: null,
    ManufacturedHousingMultiWide: null,
    ManufacturedHomeCondominiumOrPUDOrCooperative: null,
  }),
  constructionPeriodMonths: t.number,
  amountOutstanding: t.number,
  presentValue: t.number,
  improvementCost: t.number,
  amountExistLiensYear: t.number,
  originalCostYear: t.number,
  originalCost: t.number,
  refiPurpose: t.keyof({
    NoCashOut: null,
    CashOutOther: null,
    CashOutHomeImprovement: null,
    CashOutDebtConsolidation: null,
    CashOutLimited: null,
  }),
  describeImprovement: t.string,
  improvementStatus: t.keyof({
    Made: null,
    ToBeMade: null,
  }),
  cost: t.number,
  refinanceWithOriginalCreditor: t.boolean,
  titleNames: t.string,
  downPaymentSource: t.keyof({
    BridgeLoan: null,
    CashOnHand: null,
    CheckingSavings: null,
    DepositOnSalesContract: null,
    EquityOnPendingSale: null,
    EquityOnSoldProperty: null,
    EquityOnSubjectProperty: null,
    GiftFunds: null,
    LifeInsuranceCashValue: null,
    LotEquity: null,
    OtherTypeOfDownPayment: null,
    RentWithOptionToPurchase: null,
    RetirementFunds: null,
    SaleOfChattel: null,
    SecuredBorrowedFunds: null,
    StocksAndBonds: null,
    SweatEquity: null,
    TradeEquity: null,
    TrustFunds: null,
    UnsecuredBorrowedFunds: null,
    EarnestMoney: null,
    RelocationFunds: null,
    EmployerAssistedHousing: null,
    LeasePurchaseFund: null,
    Other: null,
    LenderCredit: null,
    CashDepositOnSalesContract: null,
    SellerCredit: null,
    BorrowerPaidFees: null,
    FhaGiftSourceNotApplicable: null,
    FhaGiftSourceRelative: null,
    FhaGiftSourceGovernmentAssistance: null,
    FhaGiftSourceEmployer: null,
    FhaGiftSourceReligiousSellerFunded: null,
    FhaGiftSourceReligiousNonSellerFunded: null,
  }),
  explain: t.string,
  manner: t.string,
  estate: t.keyof({
    FeeSimple: null,
    LeaseHold: null,
  }),
  leaseHoldExpirationDate: t.string,
  legalDescriptionType: t.keyof({
    Other: null,
    MetesAndBounds: null,
  }),
  address: AddressViewModel,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface MortgageTermViewModel {
  mortgageTermId?: number;
  mortgageAppliedFor?:
    | 'VA'
    | 'FHA'
    | 'Conventional'
    | 'USDARuralHousingService'
    | 'OtherMortgage';
  loanTypeOtherDescription?: string;
  incomeAssetsOtherThanBorrowerWillBeUsed?: boolean;
  incomeAssetsOfSpouseNotUsed?: boolean;
  agencyCaseNumber?: string;
  lenderCaseNumber?: string;
  amount?: number;
  totalLoanAmount?: number;
  appraisedValue?: number;
  interestRate?: number;
  qualifyingRate?: number;
  noOfMonths?: number;
  amortizationType?: 'FixedRate' | 'GEM' | 'GPM' | 'ARM' | 'OtherAmortization';
  amortizationOtherDescription?: string;
  armTextualDescription?: string;
  lienPosition?: 'FirstLien' | 'SecondLien' | 'Other';
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const MortgageTermViewModel = t.partial({
  mortgageTermId: t.number,
  mortgageAppliedFor: t.keyof({
    VA: null,
    FHA: null,
    Conventional: null,
    USDARuralHousingService: null,
    OtherMortgage: null,
  }),
  loanTypeOtherDescription: t.string,
  incomeAssetsOtherThanBorrowerWillBeUsed: t.boolean,
  incomeAssetsOfSpouseNotUsed: t.boolean,
  agencyCaseNumber: t.string,
  lenderCaseNumber: t.string,
  amount: t.number,
  totalLoanAmount: t.number,
  appraisedValue: t.number,
  interestRate: t.number,
  qualifyingRate: t.number,
  noOfMonths: t.number,
  amortizationType: t.keyof({
    FixedRate: null,
    GEM: null,
    GPM: null,
    ARM: null,
    OtherAmortization: null,
  }),
  amortizationOtherDescription: t.string,
  armTextualDescription: t.string,
  lienPosition: t.keyof({
    FirstLien: null,
    SecondLien: null,
    Other: null,
  }),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface PurchaseCreditViewModel {
  purchaseCreditId?: number;
  transactionDetailId?: number;
  purchaseCreditType?:
    | 'BridgeLoan'
    | 'CashOnHand'
    | 'CheckingSavings'
    | 'DepositOnSalesContract'
    | 'EquityOnPendingSale'
    | 'EquityOnSoldProperty'
    | 'EquityOnSubjectProperty'
    | 'GiftFunds'
    | 'LifeInsuranceCashValue'
    | 'LotEquity'
    | 'OtherTypeOfDownPayment'
    | 'RentWithOptionToPurchase'
    | 'RetirementFunds'
    | 'SaleOfChattel'
    | 'SecuredBorrowedFunds'
    | 'StocksAndBonds'
    | 'SweatEquity'
    | 'TradeEquity'
    | 'TrustFunds'
    | 'UnsecuredBorrowedFunds'
    | 'EarnestMoney'
    | 'RelocationFunds'
    | 'EmployerAssistedHousing'
    | 'LeasePurchaseFund'
    | 'Other'
    | 'LenderCredit'
    | 'CashDepositOnSalesContract'
    | 'SellerCredit'
    | 'BorrowerPaidFees'
    | 'FhaGiftSourceNotApplicable'
    | 'FhaGiftSourceRelative'
    | 'FhaGiftSourceGovernmentAssistance'
    | 'FhaGiftSourceEmployer'
    | 'FhaGiftSourceReligiousSellerFunded'
    | 'FhaGiftSourceReligiousNonSellerFunded';
  purchaseCreditAmount?: number;
  explanation?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const PurchaseCreditViewModel = t.partial({
  purchaseCreditId: t.number,
  transactionDetailId: t.number,
  purchaseCreditType: t.keyof({
    BridgeLoan: null,
    CashOnHand: null,
    CheckingSavings: null,
    DepositOnSalesContract: null,
    EquityOnPendingSale: null,
    EquityOnSoldProperty: null,
    EquityOnSubjectProperty: null,
    GiftFunds: null,
    LifeInsuranceCashValue: null,
    LotEquity: null,
    OtherTypeOfDownPayment: null,
    RentWithOptionToPurchase: null,
    RetirementFunds: null,
    SaleOfChattel: null,
    SecuredBorrowedFunds: null,
    StocksAndBonds: null,
    SweatEquity: null,
    TradeEquity: null,
    TrustFunds: null,
    UnsecuredBorrowedFunds: null,
    EarnestMoney: null,
    RelocationFunds: null,
    EmployerAssistedHousing: null,
    LeasePurchaseFund: null,
    Other: null,
    LenderCredit: null,
    CashDepositOnSalesContract: null,
    SellerCredit: null,
    BorrowerPaidFees: null,
    FhaGiftSourceNotApplicable: null,
    FhaGiftSourceRelative: null,
    FhaGiftSourceGovernmentAssistance: null,
    FhaGiftSourceEmployer: null,
    FhaGiftSourceReligiousSellerFunded: null,
    FhaGiftSourceReligiousNonSellerFunded: null,
  }),
  purchaseCreditAmount: t.number,
  explanation: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface TransactionDetailViewModel {
  transactionDetailId?: number;
  purchasePriceAmount?: number;
  landAmount?: number;
  alterationsImprovementsAndRepairsAmount?: number;
  refinanceIncludingDebtsToBePaidOffAmount?: number;
  prepaidItemsEstimatedAmount?: number;
  estimatedClosingCostsAmount?: number;
  miAndFundingFeeTotalAmount?: number;
  borrowerPaidDiscountPointsTotalAmount?: number;
  subordinateLienAmount?: number;
  sellerPaidClosingCostsAmount?: number;
  miAndFundingFeeFinancedAmount?: number;
  purchaseCredits?: Array<PurchaseCreditViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const TransactionDetailViewModel = t.partial({
  transactionDetailId: t.number,
  purchasePriceAmount: t.number,
  landAmount: t.number,
  alterationsImprovementsAndRepairsAmount: t.number,
  refinanceIncludingDebtsToBePaidOffAmount: t.number,
  prepaidItemsEstimatedAmount: t.number,
  estimatedClosingCostsAmount: t.number,
  miAndFundingFeeTotalAmount: t.number,
  borrowerPaidDiscountPointsTotalAmount: t.number,
  subordinateLienAmount: t.number,
  sellerPaidClosingCostsAmount: t.number,
  miAndFundingFeeFinancedAmount: t.number,
  purchaseCredits: t.array(PurchaseCreditViewModel),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface EmailViewModel {
  emailId?: number;
  borrowerId?: number;
  emailAddress?: string;
  typeOfEmail?: 'PrimaryEmail' | 'AdditionalEmail';
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const EmailViewModel = t.partial({
  emailId: t.number,
  borrowerId: t.number,
  emailAddress: t.string,
  typeOfEmail: t.keyof({
    PrimaryEmail: null,
    AdditionalEmail: null,
  }),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface PhoneViewModel {
  phoneId?: number;
  borrowerId?: number;
  phoneNumber?: string;
  typeOfPhone?: 'HomePhone' | 'WorkPhone' | 'CellPhone';
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const PhoneViewModel = t.partial({
  phoneId: t.number,
  borrowerId: t.number,
  phoneNumber: t.string,
  typeOfPhone: t.keyof({
    HomePhone: null,
    WorkPhone: null,
    CellPhone: null,
  }),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface OriginatorInformationViewModel {
  originatorInformationId?: number;
  organizationName?: string;
  organizationAddressId?: number;
  organizationAddress?: AddressViewModel;
  organizationNmlsr?: string;
  organizationStateLicense?: number;
  name?: string;
  nmlsr?: string;
  stateLicense?: number;
  emailId?: number;
  email?: EmailViewModel;
  phoneId?: number;
  phone?: PhoneViewModel;
  applicationTakenMethod?:
    | 'FaceToFace'
    | 'MailOrFax'
    | 'Telephone'
    | 'InternetOrEmail';
  applicationSignedDate?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const OriginatorInformationViewModel = t.partial({
  originatorInformationId: t.number,
  organizationName: t.string,
  organizationAddressId: t.number,
  organizationAddress: AddressViewModel,
  organizationNmlsr: t.string,
  organizationStateLicense: t.number,
  name: t.string,
  nmlsr: t.string,
  stateLicense: t.number,
  emailId: t.number,
  email: EmailViewModel,
  phoneId: t.number,
  phone: PhoneViewModel,
  applicationTakenMethod: t.keyof({
    FaceToFace: null,
    MailOrFax: null,
    Telephone: null,
    InternetOrEmail: null,
  }),
  applicationSignedDate: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface ExtensionViewModel {
  extensionId?: number;
  fannieMaeProjectClassificationType?:
    | 'EPud'
    | 'FPud'
    | 'OneCoop'
    | 'TwoCoop'
    | 'PCondo'
    | 'QCondo'
    | 'RCondo'
    | 'SCondo'
    | 'TCondo'
    | 'UCondo'
    | 'VCondo'
    | 'G';
  isBalloonPaymentRequiredToPayOffLoan?: boolean;
  willEscrowBeWaived?: boolean;
  isLoanCoveredUnderHomeOwnershipEquityProtectionAct?: boolean;
  isPreApprovalLoan?: boolean;
  fannieMaeProductDesciptionType?: 'StandardLCOR' | 'AffordableLTV';
  productCode?: string;
  fannieMaeAdjustableRateMortgagePlanNumber?:
    | 'NGAM'
    | 'GEN06'
    | 'GEN1A'
    | 'GEN1B'
    | 'GEN3'
    | 'GEN5'
    | 'GEN7'
    | 'GEN10'
    | 'TwoFiveOne'
    | 'FHAHY'
    | 'VA1YR'
    | 'VAARM';
  isLoanAssumableByAnotherParty?: boolean;
  fannieMaePaymentFrequencyType?: 'Monthly' | 'BiWeekly';
  isPenaltyChargedInEventOfPrepayment?: boolean;
  isPrepaymentOfLoanRestricted?: boolean;
  fannieMaeRepaymentType?:
    | 'FullyAmortizing'
    | 'ScheduledAmortization'
    | 'InterestOnly'
    | 'PossibleNegativeAmortization'
    | 'ScheduledNegativeAmortization';
  buydownInterestRateChangeFrequencyInMonths?: number;
  buydownInterestRateDurationInMonths?: number;
  buydownInterestRateAdjustment?: number;
  isLenderFundingInterestRateBuydown?: boolean;
  fannieMaeBuydownBaseDateType?:
    | 'NoteDate'
    | 'FirstPaymentDate'
    | 'LatePaymentDate';
  isBuydownPermanent?: boolean;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ExtensionViewModel = t.partial({
  extensionId: t.number,
  fannieMaeProjectClassificationType: t.keyof({
    EPud: null,
    FPud: null,
    OneCoop: null,
    TwoCoop: null,
    PCondo: null,
    QCondo: null,
    RCondo: null,
    SCondo: null,
    TCondo: null,
    UCondo: null,
    VCondo: null,
    G: null,
  }),
  isBalloonPaymentRequiredToPayOffLoan: t.boolean,
  willEscrowBeWaived: t.boolean,
  isLoanCoveredUnderHomeOwnershipEquityProtectionAct: t.boolean,
  isPreApprovalLoan: t.boolean,
  fannieMaeProductDesciptionType: t.keyof({
    StandardLCOR: null,
    AffordableLTV: null,
  }),
  productCode: t.string,
  fannieMaeAdjustableRateMortgagePlanNumber: t.keyof({
    NGAM: null,
    GEN06: null,
    GEN1A: null,
    GEN1B: null,
    GEN3: null,
    GEN5: null,
    GEN7: null,
    GEN10: null,
    TwoFiveOne: null,
    FHAHY: null,
    VA1YR: null,
    VAARM: null,
  }),
  isLoanAssumableByAnotherParty: t.boolean,
  fannieMaePaymentFrequencyType: t.keyof({
    Monthly: null,
    BiWeekly: null,
  }),
  isPenaltyChargedInEventOfPrepayment: t.boolean,
  isPrepaymentOfLoanRestricted: t.boolean,
  fannieMaeRepaymentType: t.keyof({
    FullyAmortizing: null,
    ScheduledAmortization: null,
    InterestOnly: null,
    PossibleNegativeAmortization: null,
    ScheduledNegativeAmortization: null,
  }),
  buydownInterestRateChangeFrequencyInMonths: t.number,
  buydownInterestRateDurationInMonths: t.number,
  buydownInterestRateAdjustment: t.number,
  isLenderFundingInterestRateBuydown: t.boolean,
  fannieMaeBuydownBaseDateType: t.keyof({
    NoteDate: null,
    FirstPaymentDate: null,
    LatePaymentDate: null,
  }),
  isBuydownPermanent: t.boolean,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface AssetViewModel {
  assetId?: number;
  borrowerId?: number;
  addressId?: number;
  assetType?:
    | 'Automobile'
    | 'Bond'
    | 'BridgeLoanNotDeposited'
    | 'Cash'
    | 'CertificateOfDepositTimeDeposit'
    | 'CheckingAccount'
    | 'EarnestMoneyCashDepositTowardPurchase'
    | 'GiftsTotal'
    | 'GiftsNotDeposited'
    | 'LifeInsurance'
    | 'MoneyMarketFund'
    | 'MutualFund'
    | 'NetWorthOfBusinessOwned'
    | 'OtherLiquidAssets'
    | 'OtherNonLiquidAssets'
    | 'PendingNetSaleProceedsFromRealEstateAssets'
    | 'RelocationMoney'
    | 'RetirementFund'
    | 'SaleOtherAssets'
    | 'SavingsAccount'
    | 'SecuredBorrowedFundsNotDeposited'
    | 'Stock'
    | 'TrustAccount';
  cashMarketValue?: number;
  lifeInsuranceFaceValueAmount?: number;
  accountNumber?: string;
  depository?: string;
  makeModel?: string;
  year?: number;
  disposition?: string;
  amountOfMortgageLien?: number;
  morgagePayment?: number;
  gross?: number;
  netRentalIncome?: number;
  insMainTaxMisc?: number;
  stockBondMutualFundShareCount?: number;
  otherAssetTypeDescription?: string;
  address?: AddressViewModel;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const AssetViewModel = t.partial({
  assetId: t.number,
  borrowerId: t.number,
  addressId: t.number,
  assetType: t.keyof({
    Automobile: null,
    Bond: null,
    BridgeLoanNotDeposited: null,
    Cash: null,
    CertificateOfDepositTimeDeposit: null,
    CheckingAccount: null,
    EarnestMoneyCashDepositTowardPurchase: null,
    GiftsTotal: null,
    GiftsNotDeposited: null,
    LifeInsurance: null,
    MoneyMarketFund: null,
    MutualFund: null,
    NetWorthOfBusinessOwned: null,
    OtherLiquidAssets: null,
    OtherNonLiquidAssets: null,
    PendingNetSaleProceedsFromRealEstateAssets: null,
    RelocationMoney: null,
    RetirementFund: null,
    SaleOtherAssets: null,
    SavingsAccount: null,
    SecuredBorrowedFundsNotDeposited: null,
    Stock: null,
    TrustAccount: null,
  }),
  cashMarketValue: t.number,
  lifeInsuranceFaceValueAmount: t.number,
  accountNumber: t.string,
  depository: t.string,
  makeModel: t.string,
  year: t.number,
  disposition: t.string,
  amountOfMortgageLien: t.number,
  morgagePayment: t.number,
  gross: t.number,
  netRentalIncome: t.number,
  insMainTaxMisc: t.number,
  stockBondMutualFundShareCount: t.number,
  otherAssetTypeDescription: t.string,
  address: AddressViewModel,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface DeclarationViewModel {
  declarationId?: number;
  borrowerId?: number;
  haveJudgement?: boolean;
  haveJudgementInfo?: string;
  declaredBankruptcy?: boolean;
  declaredBankruptcyInfo?: string;
  beenForclosed?: boolean;
  beenForclosedInfo?: string;
  haveLawsuit?: boolean;
  haveLawsuitInfo?: string;
  haveLoanObligation?: boolean;
  haveLoanObligationInfo?: string;
  haveTaxDebt?: boolean;
  haveTaxDebtInfo?: string;
  haveChildSupport?: boolean;
  haveChildSupportInfo?: string;
  borrowedDownPayment?: boolean;
  borrowedDownPaymentInfo?: string;
  coSignedLoan?: boolean;
  coSignedLoanInfo?: string;
  isVeteran?: boolean;
  residenceStatus?:
    | 'USCitizen'
    | 'PermanentResident'
    | 'ResidentAlien'
    | 'UnknownResidencyStatus';
  occupyProperty?: boolean;
  havePropertiesOwnership?: boolean;
  typeOfProperty?:
    | 'SFRAttached'
    | 'Condominium'
    | 'Cooperative'
    | 'SFR'
    | 'HighRiseCondominium'
    | 'ManufacturedHousing'
    | 'Modular'
    | 'PUD'
    | 'ManufacturedHousingSingleWide'
    | 'ManufacturedHousingDoubleWide'
    | 'DetachedCondominium'
    | 'ManufacturedHomeCondominium'
    | 'ManufacturedHousingMultiWide'
    | 'ManufacturedHomeCondominiumOrPUDOrCooperative';
  propertyWillBe?: 'PrimaryResidence' | 'SecondaryResidence' | 'Investment';
  heldTitleHow?: 'Sole' | 'JointWithSpouse' | 'JointWithOtherThanSpouse';
  fromCreditReport?: boolean;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const DeclarationViewModel = t.partial({
  declarationId: t.number,
  borrowerId: t.number,
  haveJudgement: t.boolean,
  haveJudgementInfo: t.string,
  declaredBankruptcy: t.boolean,
  declaredBankruptcyInfo: t.string,
  beenForclosed: t.boolean,
  beenForclosedInfo: t.string,
  haveLawsuit: t.boolean,
  haveLawsuitInfo: t.string,
  haveLoanObligation: t.boolean,
  haveLoanObligationInfo: t.string,
  haveTaxDebt: t.boolean,
  haveTaxDebtInfo: t.string,
  haveChildSupport: t.boolean,
  haveChildSupportInfo: t.string,
  borrowedDownPayment: t.boolean,
  borrowedDownPaymentInfo: t.string,
  coSignedLoan: t.boolean,
  coSignedLoanInfo: t.string,
  isVeteran: t.boolean,
  residenceStatus: t.keyof({
    USCitizen: null,
    PermanentResident: null,
    ResidentAlien: null,
    UnknownResidencyStatus: null,
  }),
  occupyProperty: t.boolean,
  havePropertiesOwnership: t.boolean,
  typeOfProperty: t.keyof({
    SFRAttached: null,
    Condominium: null,
    Cooperative: null,
    SFR: null,
    HighRiseCondominium: null,
    ManufacturedHousing: null,
    Modular: null,
    PUD: null,
    ManufacturedHousingSingleWide: null,
    ManufacturedHousingDoubleWide: null,
    DetachedCondominium: null,
    ManufacturedHomeCondominium: null,
    ManufacturedHousingMultiWide: null,
    ManufacturedHomeCondominiumOrPUDOrCooperative: null,
  }),
  propertyWillBe: t.keyof({
    PrimaryResidence: null,
    SecondaryResidence: null,
    Investment: null,
  }),
  heldTitleHow: t.keyof({
    Sole: null,
    JointWithSpouse: null,
    JointWithOtherThanSpouse: null,
  }),
  fromCreditReport: t.boolean,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface DependentViewModel {
  dependentId?: number;
  borrowerId?: number;
  age?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const DependentViewModel = t.partial({
  dependentId: t.number,
  borrowerId: t.number,
  age: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface ReoViewModel {
  reoId?: number;
  borrowerId?: number;
  addressId?: number;
  typeOfProperty?:
    | 'SingleFamily'
    | 'Condo'
    | 'Townhouse'
    | 'Coop'
    | 'TwoToFourUnitProperty'
    | 'MultifamilyMoreThanFourUnits'
    | 'CommercialNonResidential'
    | 'MixedUseResidential'
    | 'Farm'
    | 'HomeAndBusinessCombined'
    | 'Land';
  dispositionStatus?:
    | 'Sold'
    | 'PendingSale'
    | 'RetainForPrimaryOrSecondaryResidence'
    | 'RentalProperty';
  marketValue?: number;
  amountOfMortgage?: number;
  grossRentalIncome?: number;
  netRentalIncome?: number;
  mortgagePayment?: number;
  monthlyMiscExpenses?: number;
  isCurrentResidence?: boolean;
  isSubjectProperty?: boolean;
  address?: AddressViewModel;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ReoViewModel = t.partial({
  reoId: t.number,
  borrowerId: t.number,
  addressId: t.number,
  typeOfProperty: t.keyof({
    SingleFamily: null,
    Condo: null,
    Townhouse: null,
    Coop: null,
    TwoToFourUnitProperty: null,
    MultifamilyMoreThanFourUnits: null,
    CommercialNonResidential: null,
    MixedUseResidential: null,
    Farm: null,
    HomeAndBusinessCombined: null,
    Land: null,
  }),
  dispositionStatus: t.keyof({
    Sold: null,
    PendingSale: null,
    RetainForPrimaryOrSecondaryResidence: null,
    RentalProperty: null,
  }),
  marketValue: t.number,
  amountOfMortgage: t.number,
  grossRentalIncome: t.number,
  netRentalIncome: t.number,
  mortgagePayment: t.number,
  monthlyMiscExpenses: t.number,
  isCurrentResidence: t.boolean,
  isSubjectProperty: t.boolean,
  address: AddressViewModel,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface ExpenseViewModel {
  expenseId?: number;
  borrowerId?: number;
  monthlyAmount?: number;
  expenseType?:
    | 'FirstMortgagePrincipalAndInterest'
    | 'HazardInsurance'
    | 'HomeownersInsurance'
    | 'HomeownersAssociationDuesAndCondominiumFees'
    | 'MorgageInsurance'
    | 'OtherHousingExpense'
    | 'OtherMortgageLoanPrincipalAndInterest'
    | 'RealEstateTax'
    | 'Rent';
  isCurrent?: boolean;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ExpenseViewModel = t.partial({
  expenseId: t.number,
  borrowerId: t.number,
  monthlyAmount: t.number,
  expenseType: t.keyof({
    FirstMortgagePrincipalAndInterest: null,
    HazardInsurance: null,
    HomeownersInsurance: null,
    HomeownersAssociationDuesAndCondominiumFees: null,
    MorgageInsurance: null,
    OtherHousingExpense: null,
    OtherMortgageLoanPrincipalAndInterest: null,
    RealEstateTax: null,
    Rent: null,
  }),
  isCurrent: t.boolean,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface GovernmentMonitorViewModel {
  governmentMonitorId?: number;
  borrowerId?: number;
  isFurnishInfo?: boolean;
  ethnicity?:
    | 'HispanicOrLatino'
    | 'InformationNotProvided'
    | 'NotApplicable'
    | 'NotHispanicOrLatino';
  race?:
    | 'AmericanIndianOrAlaskaNative'
    | 'Asian'
    | 'BlackOrAfricanAmerican'
    | 'NativeHawaiianOrOtherPacificIslander'
    | 'White'
    | 'InformationNotProvided'
    | 'NotApplicable';
  sex?: 'Female' | 'Male' | 'InformationNotProvided' | 'NotApplicable';
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const GovernmentMonitorViewModel = t.partial({
  governmentMonitorId: t.number,
  borrowerId: t.number,
  isFurnishInfo: t.boolean,
  ethnicity: t.keyof({
    HispanicOrLatino: null,
    InformationNotProvided: null,
    NotApplicable: null,
    NotHispanicOrLatino: null,
  }),
  race: t.keyof({
    AmericanIndianOrAlaskaNative: null,
    Asian: null,
    BlackOrAfricanAmerican: null,
    NativeHawaiianOrOtherPacificIslander: null,
    White: null,
    InformationNotProvided: null,
    NotApplicable: null,
  }),
  sex: t.keyof({
    Female: null,
    Male: null,
    InformationNotProvided: null,
    NotApplicable: null,
  }),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface LiabilityViewModel {
  liabilityId?: number;
  borrowerId?: number;
  addressId?: number;
  reoId?: number;
  typeOfLiability?:
    | 'Alimony'
    | 'ChildCare'
    | 'ChildSupport'
    | 'CollectionsJudgementsAndLiens'
    | 'HELOC'
    | 'Installment'
    | 'JobRelatedExpenses'
    | 'LeasePayments'
    | 'MortgageLoan'
    | 'Open30DayChargeAccount'
    | 'OtherLiability'
    | 'Revolving'
    | 'SeparateMaintenanceExpense'
    | 'OtherExpense'
    | 'Taxes';
  creditorName?: string;
  accountNumber?: string;
  monthlyPayment?: number;
  monthsLeftToPay?: number;
  unpaidBalance?: number;
  willBePaidOff?: boolean;
  isResubordinate?: boolean;
  isExcluded?: boolean;
  late30Days?: number;
  late60Days?: number;
  late90Days?: number;
  late120Days?: number;
  consumerDisputeIndicator?: boolean;
  derogatoryDataIndicator?: boolean;
  fromCreditReport?: boolean;
  address?: AddressViewModel;
  reo?: ReoViewModel;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const LiabilityViewModel = t.partial({
  liabilityId: t.number,
  borrowerId: t.number,
  addressId: t.number,
  reoId: t.number,
  typeOfLiability: t.keyof({
    Alimony: null,
    ChildCare: null,
    ChildSupport: null,
    CollectionsJudgementsAndLiens: null,
    HELOC: null,
    Installment: null,
    JobRelatedExpenses: null,
    LeasePayments: null,
    MortgageLoan: null,
    Open30DayChargeAccount: null,
    OtherLiability: null,
    Revolving: null,
    SeparateMaintenanceExpense: null,
    OtherExpense: null,
    Taxes: null,
  }),
  creditorName: t.string,
  accountNumber: t.string,
  monthlyPayment: t.number,
  monthsLeftToPay: t.number,
  unpaidBalance: t.number,
  willBePaidOff: t.boolean,
  isResubordinate: t.boolean,
  isExcluded: t.boolean,
  late30Days: t.number,
  late60Days: t.number,
  late90Days: t.number,
  late120Days: t.number,
  consumerDisputeIndicator: t.boolean,
  derogatoryDataIndicator: t.boolean,
  fromCreditReport: t.boolean,
  address: AddressViewModel,
  reo: ReoViewModel,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface ResidencyAddressViewModel {
  residencyAddressId?: number;
  borrowerId: number;
  addressId?: number;
  residencyBasis?: 'Own' | 'Rent' | 'LivingRentFree';
  residencyType?: 'PresentAddress' | 'FormerAddress' | 'MailingAddress';
  durationYears?: number;
  durationMonths?: number;
  fromCreditReport?: boolean;
  address?: AddressViewModel;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const ResidencyAddressViewModel = t.intersection([
  t.type({
    borrowerId: t.number,
  }),
  t.partial({
    residencyAddressId: t.number,
    addressId: t.number,
    residencyBasis: t.keyof({
      Own: null,
      Rent: null,
      LivingRentFree: null,
    }),
    residencyType: t.keyof({
      PresentAddress: null,
      FormerAddress: null,
      MailingAddress: null,
    }),
    durationYears: t.number,
    durationMonths: t.number,
    fromCreditReport: t.boolean,
    address: AddressViewModel,
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  }),
]);

export interface MortgageBorrowerViewModel {
  borrowerId?: number;
  mortgageId: number;
  contactId?: number;
  jointWithBorrowerSocialSecurityNumber?: string;
  jointWithBorrowerId?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  nameSuffix?: string;
  yearsOfSchool?: number;
  authorizedCreditCheck?: boolean;
  socialSecNum?: string;
  maritalStatus?: 'Single' | 'Married' | 'Separated';
  dateOfBirth?: string;
  creditScore?: number;
  creditScore_Equifax?: number;
  creditScore_Experian?: number;
  creditScore_TransUnion?: number;
  typeOfBorrower: 'PrimaryBorrower' | 'CoBorrower';
  rawSocialSecurityNumber?: string;
  dependentCount?: number;
  active?: boolean;
  assets?: Array<AssetViewModel>;
  declarations?: Array<DeclarationViewModel>;
  dependents?: Array<DependentViewModel>;
  emails?: Array<EmailViewModel>;
  employments?: Array<EmploymentViewModel>;
  expenses?: Array<ExpenseViewModel>;
  governmentMonitors?: Array<GovernmentMonitorViewModel>;
  incomes?: Array<IncomeViewModel>;
  liabilities?: Array<LiabilityViewModel>;
  phones?: Array<PhoneViewModel>;
  reos?: Array<ReoViewModel>;
  residencyAddresses?: Array<ResidencyAddressViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const MortgageBorrowerViewModel = t.intersection([
  t.type({
    mortgageId: t.number,
    typeOfBorrower: t.keyof({
      PrimaryBorrower: null,
      CoBorrower: null,
    }),
  }),
  t.partial({
    borrowerId: t.number,
    contactId: t.number,
    jointWithBorrowerSocialSecurityNumber: t.string,
    jointWithBorrowerId: t.number,
    firstName: t.string,
    middleName: t.string,
    lastName: t.string,
    nameSuffix: t.string,
    yearsOfSchool: t.number,
    authorizedCreditCheck: t.boolean,
    socialSecNum: t.string,
    maritalStatus: t.keyof({
      Single: null,
      Married: null,
      Separated: null,
    }),
    dateOfBirth: t.string,
    creditScore: t.number,
    creditScore_Equifax: t.number,
    creditScore_Experian: t.number,
    creditScore_TransUnion: t.number,
    rawSocialSecurityNumber: t.string,
    dependentCount: t.number,
    active: t.boolean,
    assets: t.array(AssetViewModel),
    declarations: t.array(DeclarationViewModel),
    dependents: t.array(DependentViewModel),
    emails: t.array(EmailViewModel),
    employments: t.array(EmploymentViewModel),
    expenses: t.array(ExpenseViewModel),
    governmentMonitors: t.array(GovernmentMonitorViewModel),
    incomes: t.array(IncomeViewModel),
    liabilities: t.array(LiabilityViewModel),
    phones: t.array(PhoneViewModel),
    reos: t.array(ReoViewModel),
    residencyAddresses: t.array(ResidencyAddressViewModel),
    companyId: t.number,
    insertedBy: t.string,
    dateInserted: t.string,
    updatedBy: t.string,
    dateUpdated: t.string,
  }),
]);

export interface MortgageViewModel {
  mortgageId?: number;
  applicationId?: number;
  subjectPropertyId?: number;
  mortgageTermId?: number;
  transactionDetailId?: number;
  originatorinformationId?: number;
  extensionId?: number;
  subjectProperty?: SubjectPropertyViewModel;
  mortgageTerm?: MortgageTermViewModel;
  transactionDetail?: TransactionDetailViewModel;
  originatorInformation?: OriginatorInformationViewModel;
  extension?: ExtensionViewModel;
  borrowers?: Array<MortgageBorrowerViewModel>;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const MortgageViewModel = t.partial({
  mortgageId: t.number,
  applicationId: t.number,
  subjectPropertyId: t.number,
  mortgageTermId: t.number,
  transactionDetailId: t.number,
  originatorinformationId: t.number,
  extensionId: t.number,
  subjectProperty: SubjectPropertyViewModel,
  mortgageTerm: MortgageTermViewModel,
  transactionDetail: TransactionDetailViewModel,
  originatorInformation: OriginatorInformationViewModel,
  extension: ExtensionViewModel,
  borrowers: t.array(MortgageBorrowerViewModel),
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface SearchResponseItem {
  losIdentifier?: string;
  loanNumber?: string;
  borrowerFirstName?: string;
  borrowerLastName?: string;
  subjectPropertyAddress?: string;
  subjectPropertyCity?: string;
  subjectPropertyState?: string;
  subjectPropertyZip?: string;
}
export const SearchResponseItem = t.partial({
  losIdentifier: t.string,
  loanNumber: t.string,
  borrowerFirstName: t.string,
  borrowerLastName: t.string,
  subjectPropertyAddress: t.string,
  subjectPropertyCity: t.string,
  subjectPropertyState: t.string,
  subjectPropertyZip: t.string,
});

export interface LosLoanSearchResponseModel {
  searchResponseItems?: Array<SearchResponseItem>;
  success?: boolean;
  validationErrors?: Array<string>;
  errorMessage?: string;
}
export const LosLoanSearchResponseModel = t.partial({
  searchResponseItems: t.array(SearchResponseItem),
  success: t.boolean,
  validationErrors: t.array(t.string),
  errorMessage: t.string,
});

export interface ParseDuViewModel {
  mortgageViewModel?: MortgageViewModel;
  suggestedBorrowers?: Record<string, Array<BorrowerDto>>;
  loanNumber?: string;
  loanPurposeId?: number;
  loanTypeId?: number;
  losIdentifier?: string;
  success?: boolean;
  validationErrors?: Array<string>;
  errorMessage?: string;
}
export const ParseDuViewModel = t.partial({
  mortgageViewModel: MortgageViewModel,
  suggestedBorrowers: t.record(t.string, t.array(BorrowerDto)),
  loanNumber: t.string,
  loanPurposeId: t.number,
  loanTypeId: t.number,
  losIdentifier: t.string,
  success: t.boolean,
  validationErrors: t.array(t.string),
  errorMessage: t.string,
});

export interface ProcessDuViewModel {
  mortgageViewModel?: MortgageViewModel;
  loanNumber?: string;
  losIdentifier?: string;
  credentialId?: number;
  linkBorrowers?: Record<string, number>;
  loanCharacteristics?: Array<LoanCharacteristicViewModel>;
  borrowerCharacteristics?: Array<BorrowerCharacteristicViewModel>;
  loanPurposeId?: number;
  loanTypeId?: number;
  alignmentGroupId?: string;
}
export const ProcessDuViewModel = t.partial({
  mortgageViewModel: MortgageViewModel,
  loanNumber: t.string,
  losIdentifier: t.string,
  credentialId: t.number,
  linkBorrowers: t.record(t.string, t.number),
  loanCharacteristics: t.array(LoanCharacteristicViewModel),
  borrowerCharacteristics: t.array(BorrowerCharacteristicViewModel),
  loanPurposeId: t.number,
  loanTypeId: t.number,
  alignmentGroupId: t.string,
});

export interface ProcessDuResponseModel {
  applicationId?: number;
  primaryBorrowerId?: number;
}
export const ProcessDuResponseModel = t.partial({
  applicationId: t.number,
  primaryBorrowerId: t.number,
});

export interface FeatureFlags {
  voaEnabled?: boolean;
  creditPullEnabled?: boolean;
  duEnabled?: boolean;
  lpaEnabled?: boolean;
  showEConsentVerbiage?: boolean;
  eConsentText?: string;
  eConsentGenerationEnabled?: boolean;
  showCreditAuthVerbiage?: boolean;
  creditAuthText?: string;
  creditAuthGenerationEnabled?: boolean;
}
export const FeatureFlags = t.partial({
  voaEnabled: t.boolean,
  creditPullEnabled: t.boolean,
  duEnabled: t.boolean,
  lpaEnabled: t.boolean,
  showEConsentVerbiage: t.boolean,
  eConsentText: t.string,
  eConsentGenerationEnabled: t.boolean,
  showCreditAuthVerbiage: t.boolean,
  creditAuthText: t.string,
  creditAuthGenerationEnabled: t.boolean,
});

export interface OnlineAppUpdateReturnModel {
  applicationViewModel?: ApplicationViewModel;
  mortgageViewModel?: MortgageViewModel;
}
export const OnlineAppUpdateReturnModel = t.partial({
  applicationViewModel: ApplicationViewModel,
  mortgageViewModel: MortgageViewModel,
});

export interface OnlineAppProgressViewModel {
  id?: number;
  applicationId?: number;
  mortgageId?: number;
  currentStatus?: number;
  currentStatusDatetime?: string;
  lastSuccessfulStatus?: number;
  lastSuccessfulStatusDatetime?: string;
  currentSessionId?: string;
  sessionCount?: number;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const OnlineAppProgressViewModel = t.partial({
  id: t.number,
  applicationId: t.number,
  mortgageId: t.number,
  currentStatus: t.number,
  currentStatusDatetime: t.string,
  lastSuccessfulStatus: t.number,
  lastSuccessfulStatusDatetime: t.string,
  currentSessionId: t.string,
  sessionCount: t.number,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface CreateBorrowerAccountMortgageRequest {
  companyGuid: string;
  userGuid?: string;
  loanPurposeId?: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}
export const CreateBorrowerAccountMortgageRequest = t.intersection([
  t.type({
    companyGuid: t.string,
    firstName: t.string,
    lastName: t.string,
    email: t.string,
  }),
  t.partial({
    userGuid: t.string,
    loanPurposeId: t.number,
    password: t.string,
  }),
]);

export interface TokenResponseModel {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  userName?: string;
  '.issued'?: string;
  '.expires'?: string;
}
export const TokenResponseModel = t.partial({
  access_token: t.string,
  token_type: t.string,
  expires_in: t.number,
  userName: t.string,
  '.issued': t.string,
  '.expires': t.string,
});

export interface CreateBorrowerAccountMortgageResponse {
  borrowerId?: number;
  applicationId?: number;
  userExists?: boolean;
  userMustConfirmRegistration?: boolean;
  authToken?: TokenResponseModel;
}
export const CreateBorrowerAccountMortgageResponse = t.partial({
  borrowerId: t.number,
  applicationId: t.number,
  userExists: t.boolean,
  userMustConfirmRegistration: t.boolean,
  authToken: TokenResponseModel,
});

export interface GenerateEConsentRequest {
  eConsentText?: string;
}
export const GenerateEConsentRequest = t.partial({
  eConsentText: t.string,
});

export interface GenerateEConsentResponse {
  docFileGuid?: string;
}
export const GenerateEConsentResponse = t.partial({
  docFileGuid: t.string,
});

export interface GenerateCreditAuthRequest {
  creditAuthText?: string;
}
export const GenerateCreditAuthRequest = t.partial({
  creditAuthText: t.string,
});

export interface GenerateCreditAuthResponse {
  docFileGuid?: string;
}
export const GenerateCreditAuthResponse = t.partial({
  docFileGuid: t.string,
});

export interface PipelineFilterCriteria {
  loanPurposes?: Array<number>;
  loanStatuses?: Array<number>;
  users?: Array<string>;
}
export const PipelineFilterCriteria = t.partial({
  loanPurposes: t.array(t.number),
  loanStatuses: t.array(t.number),
  users: t.array(t.string),
});

export interface AppCountByFilterCriteria {
  filterCriteriaId?: number;
  total?: number;
}
export const AppCountByFilterCriteria = t.partial({
  filterCriteriaId: t.number,
  total: t.number,
});

export interface PipelineApplicationCounts {
  byLoanStatus?: Array<AppCountByFilterCriteria>;
  byLoanPurpose?: Array<AppCountByFilterCriteria>;
}
export const PipelineApplicationCounts = t.partial({
  byLoanStatus: t.array(AppCountByFilterCriteria),
  byLoanPurpose: t.array(AppCountByFilterCriteria),
});

export interface UserViewModel {
  userId?: string;
  avatar?: string;
  firstName?: string;
  lastName?: string;
}
export const UserViewModel = t.partial({
  userId: t.string,
  avatar: t.string,
  firstName: t.string,
  lastName: t.string,
});

export interface AddressInfo {
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
}
export const AddressInfo = t.partial({
  address1: t.string,
  address2: t.string,
  city: t.string,
  state: t.string,
  zip: t.string,
});

export interface BorrowerInfo {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  email?: string;
  phone?: string;
  workPhone?: string;
  mailingAddress?: AddressInfo;
  creditScore?: number;
}
export const BorrowerInfo = t.partial({
  firstName: t.string,
  lastName: t.string,
  birthDate: t.string,
  email: t.string,
  phone: t.string,
  workPhone: t.string,
  mailingAddress: AddressInfo,
  creditScore: t.number,
});

export interface CurrentLoanInfo {
  unpaidPrincipalBalance?: number;
  estimatedValue?: number;
  interestRate?: number;
  term?: number;
}
export const CurrentLoanInfo = t.partial({
  unpaidPrincipalBalance: t.number,
  estimatedValue: t.number,
  interestRate: t.number,
  term: t.number,
});

export interface AssignmentInfo {
  userName?: string;
  userGuid?: string;
}
export const AssignmentInfo = t.partial({
  userName: t.string,
  userGuid: t.string,
});

export interface AppointmentInfo {
  date?: string;
  description?: string;
  notes?: string;
}
export const AppointmentInfo = t.partial({
  date: t.string,
  description: t.string,
  notes: t.string,
});

export interface CustomDataInfo {
  customData1?: string;
  customData2?: string;
  customData3?: string;
  customData4?: string;
  customData5?: string;
  customData6?: string;
  customData7?: string;
  customData8?: string;
  customData9?: string;
  customData10?: string;
}
export const CustomDataInfo = t.partial({
  customData1: t.string,
  customData2: t.string,
  customData3: t.string,
  customData4: t.string,
  customData5: t.string,
  customData6: t.string,
  customData7: t.string,
  customData8: t.string,
  customData9: t.string,
  customData10: t.string,
});

export interface LodasoftLead {
  borrowerInfo?: BorrowerInfo;
  subjectPropertyAddress?: AddressInfo;
  loanAmount?: number;
  appraisedValue?: number;
  cashOutAmount?: number;
  downPayment?: number;
  interestRate?: number;
  loanPurposeId?: number;
  currentLoanInfo?: CurrentLoanInfo;
  assignmentInfo?: AssignmentInfo;
  appointmentInfo?: AppointmentInfo;
  customData?: CustomDataInfo;
  losRefNumber?: string;
  internalNotes?: string;
  leadSource?: string;
  tags?: Array<string>;
  referralSource?: number;
}
export const LodasoftLead = t.partial({
  borrowerInfo: BorrowerInfo,
  subjectPropertyAddress: AddressInfo,
  loanAmount: t.number,
  appraisedValue: t.number,
  cashOutAmount: t.number,
  downPayment: t.number,
  interestRate: t.number,
  loanPurposeId: t.number,
  currentLoanInfo: CurrentLoanInfo,
  assignmentInfo: AssignmentInfo,
  appointmentInfo: AppointmentInfo,
  customData: CustomDataInfo,
  losRefNumber: t.string,
  internalNotes: t.string,
  leadSource: t.string,
  tags: t.array(t.string),
  referralSource: t.number,
});

export interface BestReferralLead {
  first_name?: string;
  last_name?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  email_address?: string;
  phone_work?: string;
  phone_home?: string;
  phone_cell?: string;
  best_time?: string;
  ip_address?: string;
  type_of_loan?: string;
  home_value?: number;
  mortgage_amount?: number;
  property_description?: string;
  credit_rating?: string;
  loan_type?: string;
  cash_out_request?: number;
  current_interest_rate?: number;
  down_payment?: number;
  found_home?: string;
  military_service?: string;
  website?: string;
  current_va?: string;
  current_fha?: string;
  months_late?: string;
  improve_credit?: string;
  realtor?: string;
  property_purpose?: string;
  mortgage_payment?: number;
  bankruptcy?: string;
  foreclosure?: string;
  first_homebuyer?: string;
  timeframe?: string;
  leadID?: string;
}
export const BestReferralLead = t.partial({
  first_name: t.string,
  last_name: t.string,
  address: t.string,
  city: t.string,
  state: t.string,
  zip_code: t.string,
  email_address: t.string,
  phone_work: t.string,
  phone_home: t.string,
  phone_cell: t.string,
  best_time: t.string,
  ip_address: t.string,
  type_of_loan: t.string,
  home_value: t.number,
  mortgage_amount: t.number,
  property_description: t.string,
  credit_rating: t.string,
  loan_type: t.string,
  cash_out_request: t.number,
  current_interest_rate: t.number,
  down_payment: t.number,
  found_home: t.string,
  military_service: t.string,
  website: t.string,
  current_va: t.string,
  current_fha: t.string,
  months_late: t.string,
  improve_credit: t.string,
  realtor: t.string,
  property_purpose: t.string,
  mortgage_payment: t.number,
  bankruptcy: t.string,
  foreclosure: t.string,
  first_homebuyer: t.string,
  timeframe: t.string,
  leadID: t.string,
});

export interface ZillowLenderContactSender {
  emailAddress?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}
export const ZillowLenderContactSender = t.partial({
  emailAddress: t.string,
  firstName: t.string,
  lastName: t.string,
  phoneNumber: t.string,
});

export interface ZillowLenderContactRecipient {
  lenderId?: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  nmlsLicense?: string;
}
export const ZillowLenderContactRecipient = t.partial({
  lenderId: t.string,
  firstName: t.string,
  lastName: t.string,
  emailAddress: t.string,
  phoneNumber: t.string,
  nmlsLicense: t.string,
});

export interface ZillowLenderContactDetails {
  acceptPrepaymentPenalty?: boolean;
  agentBusinessName?: string;
  agentEmailAddress?: string;
  agentFirstName?: string;
  agentId?: string;
  agentLastName?: string;
  agentPhoneNumber?: string;
  annualIncome?: number;
  banks?: Array<string>;
  cashOut?: number;
  city?: string;
  closingTimelineDays?: number;
  coborrowerFirstName?: string;
  coborrowerLastName?: string;
  creditScoreRange?:
    | 'R_760_'
    | 'R_740_759'
    | 'R_720_739'
    | 'R_700_719'
    | 'R_680_699'
    | 'R_660_679'
    | 'R_640_659'
    | 'R_620_639'
    | 'R_600_619'
    | 'R_560_599'
    | 'R_300_559';
  currentBacker?: 'FannieMae' | 'FreddieMac' | 'FHA';
  currentBalance?: number;
  debtToIncomePercent?: number;
  desiredPrograms?: Array<
    | 'Fixed30Year'
    | 'Fixed20Year'
    | 'Fixed15Year'
    | 'Fixed10Year'
    | 'ARM3'
    | 'ARM5'
    | 'ARM7'
    | 'HomeEquity30Year'
    | 'HomeEquity30YearDueIn15'
    | 'HomeEquity15Year'
    | 'HELOC20Year'
    | 'HELOC15Year'
    | 'HELOC10Year'
    | 'LowOrNoDown'
    | 'InterestOnly'
  >;
  downPayment?: number;
  fhaStreamlineEligible?: boolean;
  firstTimeBuyer?: boolean;
  harpEligible?: boolean;
  hasAgent?: boolean;
  hasBankruptcy?: boolean;
  hasCoborrower?: boolean;
  hasForeclosure?: boolean;
  hasSecondMortgage?: boolean;
  loanAmount?: number;
  loanPurpose?:
    | 'Purchase'
    | 'Refinance'
    | 'HomeEquity'
    | 'Construction'
    | 'HELOC';
  loanToValuePercent?: number;
  message?: string;
  monthlyDebts?: number;
  newConstruction?: boolean;
  propertyAddress?: string;
  propertyType?:
    | 'SingleFamilyHome'
    | 'TownHouse'
    | 'CondoFourOrFewerStories'
    | 'CondoFiveOrMoreStories'
    | 'Cooperative'
    | 'MobileOrManufactured'
    | 'Modular'
    | 'Leasehold';
  propertyUse?: 'Primary' | 'SecondaryOrVacation' | 'InvestmentOrRental';
  propertyValue?: number;
  quoteId?: string;
  requestId?: string;
  selfEmployed?: boolean;
  stateAbbreviation?:
    | 'AK'
    | 'AL'
    | 'AR'
    | 'AS'
    | 'AZ'
    | 'CA'
    | 'CO'
    | 'CT'
    | 'DC'
    | 'DE'
    | 'FL'
    | 'GA'
    | 'GU'
    | 'HI'
    | 'IA'
    | 'ID'
    | 'IL'
    | 'IN'
    | 'KS'
    | 'KY'
    | 'LA'
    | 'MA'
    | 'MD'
    | 'ME'
    | 'MH'
    | 'MI'
    | 'MN'
    | 'MO'
    | 'MP'
    | 'MS'
    | 'MT'
    | 'NC'
    | 'ND'
    | 'NE'
    | 'NH'
    | 'NJ'
    | 'NM'
    | 'NV'
    | 'NY'
    | 'OH'
    | 'OK'
    | 'OR'
    | 'PA'
    | 'PR'
    | 'RI'
    | 'SC'
    | 'SD'
    | 'TN'
    | 'TX'
    | 'UT'
    | 'VA'
    | 'VI'
    | 'VT'
    | 'WA'
    | 'WI'
    | 'WV'
    | 'WY';
  streetAddress?: string;
  totalAssets?: number;
  wantsCashOut?: boolean;
  vaEligible?: boolean;
  vaFirstTimeUser?: boolean;
  vaHasDisability?: boolean;
  veteranType?:
    | 'RegularMilitary'
    | 'Reserves'
    | 'NationalGuard'
    | 'SpouseOfRegularMilitary'
    | 'SpouseOfReserveMilitary';
  yearPurchased?: number;
  zipCode?: string;
}
export const ZillowLenderContactDetails = t.partial({
  acceptPrepaymentPenalty: t.boolean,
  agentBusinessName: t.string,
  agentEmailAddress: t.string,
  agentFirstName: t.string,
  agentId: t.string,
  agentLastName: t.string,
  agentPhoneNumber: t.string,
  annualIncome: t.number,
  banks: t.array(t.string),
  cashOut: t.number,
  city: t.string,
  closingTimelineDays: t.number,
  coborrowerFirstName: t.string,
  coborrowerLastName: t.string,
  creditScoreRange: t.keyof({
    R_760_: null,
    R_740_759: null,
    R_720_739: null,
    R_700_719: null,
    R_680_699: null,
    R_660_679: null,
    R_640_659: null,
    R_620_639: null,
    R_600_619: null,
    R_560_599: null,
    R_300_559: null,
  }),
  currentBacker: t.keyof({
    FannieMae: null,
    FreddieMac: null,
    FHA: null,
  }),
  currentBalance: t.number,
  debtToIncomePercent: t.number,
  desiredPrograms: t.array(
    t.keyof({
      Fixed30Year: null,
      Fixed20Year: null,
      Fixed15Year: null,
      Fixed10Year: null,
      ARM3: null,
      ARM5: null,
      ARM7: null,
      HomeEquity30Year: null,
      HomeEquity30YearDueIn15: null,
      HomeEquity15Year: null,
      HELOC20Year: null,
      HELOC15Year: null,
      HELOC10Year: null,
      LowOrNoDown: null,
      InterestOnly: null,
    })
  ),
  downPayment: t.number,
  fhaStreamlineEligible: t.boolean,
  firstTimeBuyer: t.boolean,
  harpEligible: t.boolean,
  hasAgent: t.boolean,
  hasBankruptcy: t.boolean,
  hasCoborrower: t.boolean,
  hasForeclosure: t.boolean,
  hasSecondMortgage: t.boolean,
  loanAmount: t.number,
  loanPurpose: t.keyof({
    Purchase: null,
    Refinance: null,
    HomeEquity: null,
    Construction: null,
    HELOC: null,
  }),
  loanToValuePercent: t.number,
  message: t.string,
  monthlyDebts: t.number,
  newConstruction: t.boolean,
  propertyAddress: t.string,
  propertyType: t.keyof({
    SingleFamilyHome: null,
    TownHouse: null,
    CondoFourOrFewerStories: null,
    CondoFiveOrMoreStories: null,
    Cooperative: null,
    MobileOrManufactured: null,
    Modular: null,
    Leasehold: null,
  }),
  propertyUse: t.keyof({
    Primary: null,
    SecondaryOrVacation: null,
    InvestmentOrRental: null,
  }),
  propertyValue: t.number,
  quoteId: t.string,
  requestId: t.string,
  selfEmployed: t.boolean,
  stateAbbreviation: t.keyof({
    AK: null,
    AL: null,
    AR: null,
    AS: null,
    AZ: null,
    CA: null,
    CO: null,
    CT: null,
    DC: null,
    DE: null,
    FL: null,
    GA: null,
    GU: null,
    HI: null,
    IA: null,
    ID: null,
    IL: null,
    IN: null,
    KS: null,
    KY: null,
    LA: null,
    MA: null,
    MD: null,
    ME: null,
    MH: null,
    MI: null,
    MN: null,
    MO: null,
    MP: null,
    MS: null,
    MT: null,
    NC: null,
    ND: null,
    NE: null,
    NH: null,
    NJ: null,
    NM: null,
    NV: null,
    NY: null,
    OH: null,
    OK: null,
    OR: null,
    PA: null,
    PR: null,
    RI: null,
    SC: null,
    SD: null,
    TN: null,
    TX: null,
    UT: null,
    VA: null,
    VI: null,
    VT: null,
    WA: null,
    WI: null,
    WV: null,
    WY: null,
  }),
  streetAddress: t.string,
  totalAssets: t.number,
  wantsCashOut: t.boolean,
  vaEligible: t.boolean,
  vaFirstTimeUser: t.boolean,
  vaHasDisability: t.boolean,
  veteranType: t.keyof({
    RegularMilitary: null,
    Reserves: null,
    NationalGuard: null,
    SpouseOfRegularMilitary: null,
    SpouseOfReserveMilitary: null,
  }),
  yearPurchased: t.number,
  zipCode: t.string,
});

export interface ZillowLenderContactLoanQuote {
  rate?: number;
  apr?: number;
  termMonths?: number;
  dueInMonths?: number;
  interestOnlyMonths?: number;
  lockDays?: number;
  hasPrepaymentPenalty?: boolean;
  jumbo?: boolean;
  harp?: boolean;
  lenderPaidMortgageInsurance?: boolean;
  annualMortgageInsurancePercent?: number;
  currentBackerMustBeFannieMae?: boolean;
  currentBackerMustBeFreddieMac?: boolean;
  lenderCredit?: number;
  lenderCreditPercent?: number;
  maxAllowedLTV?: number;
}
export const ZillowLenderContactLoanQuote = t.partial({
  rate: t.number,
  apr: t.number,
  termMonths: t.number,
  dueInMonths: t.number,
  interestOnlyMonths: t.number,
  lockDays: t.number,
  hasPrepaymentPenalty: t.boolean,
  jumbo: t.boolean,
  harp: t.boolean,
  lenderPaidMortgageInsurance: t.boolean,
  annualMortgageInsurancePercent: t.number,
  currentBackerMustBeFannieMae: t.boolean,
  currentBackerMustBeFreddieMac: t.boolean,
  lenderCredit: t.number,
  lenderCreditPercent: t.number,
  maxAllowedLTV: t.number,
});

export interface ZillowLead {
  type?: 'simple' | 'quote' | 'longForm' | 'propertyPreapproval';
  id?: string;
  created?: string;
  source?: string;
  price?: number;
  conciergeStatus?:
    | 'Transferred'
    | 'AppointmentSet'
    | 'UnsupportedLanguage'
    | 'EmailRequested'
    | 'DoNotCall'
    | 'Duplicate'
    | 'LenderContacted'
    | 'NotInterested'
    | 'ConciergeUnsuccessful'
    | 'LenderMustCall';
  sender?: ZillowLenderContactSender;
  recipient?: ZillowLenderContactRecipient;
  details?: ZillowLenderContactDetails;
  quote?: ZillowLenderContactLoanQuote;
}
export const ZillowLead = t.partial({
  type: t.keyof({
    simple: null,
    quote: null,
    longForm: null,
    propertyPreapproval: null,
  }),
  id: t.string,
  created: t.string,
  source: t.string,
  price: t.number,
  conciergeStatus: t.keyof({
    Transferred: null,
    AppointmentSet: null,
    UnsupportedLanguage: null,
    EmailRequested: null,
    DoNotCall: null,
    Duplicate: null,
    LenderContacted: null,
    NotInterested: null,
    ConciergeUnsuccessful: null,
    LenderMustCall: null,
  }),
  sender: ZillowLenderContactSender,
  recipient: ZillowLenderContactRecipient,
  details: ZillowLenderContactDetails,
  quote: ZillowLenderContactLoanQuote,
});

export interface LeadPointLead {
  product?: string;
  loaN_VAL?: number;
  esT_VAL?: number;
  loaN_TYPE?: string;
  dowN_PMT?: number;
  proP_ZIP?: string;
  proP_DESC?: string;
  speC_HOME?: string;
  proP_ST?: string;
  proP_PURP?: string;
  proP_AREA?: string;
  buY_TIMEFRAME?: string;
  purchasE_CONTRACT?: string;
  agenT_FOUND?: string;
  agenT_NAME?: string;
  agenT_PHONE?: string;
  agenT_COMPANY?: string;
  agenT_EMAIL?: string;
  agenT_ADDRESS?: string;
  agenT_CITY?: string;
  agenT_STATE?: string;
  agenT_ZIP?: string;
  agenT_STATUS?: string;
  agenT2_NAME?: string;
  agenT2_COMPANY?: string;
  agenT2_EMAIL?: string;
  agenT2_PHONE?: string;
  agenT2_ADDRESS?: string;
  agenT2_CITY?: string;
  agenT2_STATE?: string;
  agenT2_ZIP?: string;
  agenT3_NAME?: string;
  agenT3_PHONE?: string;
  agenT3_COMPANY?: string;
  agenT3_EMAIL?: string;
  agenT3_ADDRESS?: string;
  agenT2_STATUS?: string;
  agenT3_CITY?: string;
  agenT3_ZIP?: string;
  agenT3_STATUS?: string;
  agenT4_NAME?: string;
  agenT4_PHONE?: string;
  agenT4_COMPANY?: string;
  agenT4_EMAIL?: string;
  agenT4_ADDRESS?: string;
  agenT4_CITY?: string;
  agenT4_STATE?: string;
  agenT4_ZIP?: string;
  agenT4_STATUS?: string;
  proP_URL?: string;
  proP_BEDS?: string;
  proP_BATHS?: string;
  proP_SQFT?: string;
  agenT3_STATE?: string;
  creD_GRADE?: string;
  income?: string;
  miN_PAY?: string;
  ocC_STAT?: string;
  bkcy?: string;
  firsT_BUYER?: string;
  fhA_BANK_FORECLOSURE?: string;
  annuaL_VERIFIABLE_INCOME?: string;
  vA_STATUS?: string;
  nuM_MORTGAGE_LATES?: string;
  fname?: string;
  lname?: string;
  email?: string;
  prI_PHON?: string;
  seC_PHON?: string;
  preF_CALLTIME?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  ssn?: string;
  custom?: string;
  calleR_ID?: string;
  agE_ATLEAST_62?: string;
  dobmm?: string;
  dobdd?: string;
  dobyyyy?: string;
  ssN_CHECK?: string;
  consumeR_COMMENTS?: string;
  language?: string;
}
export const LeadPointLead = t.partial({
  product: t.string,
  loaN_VAL: t.number,
  esT_VAL: t.number,
  loaN_TYPE: t.string,
  dowN_PMT: t.number,
  proP_ZIP: t.string,
  proP_DESC: t.string,
  speC_HOME: t.string,
  proP_ST: t.string,
  proP_PURP: t.string,
  proP_AREA: t.string,
  buY_TIMEFRAME: t.string,
  purchasE_CONTRACT: t.string,
  agenT_FOUND: t.string,
  agenT_NAME: t.string,
  agenT_PHONE: t.string,
  agenT_COMPANY: t.string,
  agenT_EMAIL: t.string,
  agenT_ADDRESS: t.string,
  agenT_CITY: t.string,
  agenT_STATE: t.string,
  agenT_ZIP: t.string,
  agenT_STATUS: t.string,
  agenT2_NAME: t.string,
  agenT2_COMPANY: t.string,
  agenT2_EMAIL: t.string,
  agenT2_PHONE: t.string,
  agenT2_ADDRESS: t.string,
  agenT2_CITY: t.string,
  agenT2_STATE: t.string,
  agenT2_ZIP: t.string,
  agenT3_NAME: t.string,
  agenT3_PHONE: t.string,
  agenT3_COMPANY: t.string,
  agenT3_EMAIL: t.string,
  agenT3_ADDRESS: t.string,
  agenT2_STATUS: t.string,
  agenT3_CITY: t.string,
  agenT3_ZIP: t.string,
  agenT3_STATUS: t.string,
  agenT4_NAME: t.string,
  agenT4_PHONE: t.string,
  agenT4_COMPANY: t.string,
  agenT4_EMAIL: t.string,
  agenT4_ADDRESS: t.string,
  agenT4_CITY: t.string,
  agenT4_STATE: t.string,
  agenT4_ZIP: t.string,
  agenT4_STATUS: t.string,
  proP_URL: t.string,
  proP_BEDS: t.string,
  proP_BATHS: t.string,
  proP_SQFT: t.string,
  agenT3_STATE: t.string,
  creD_GRADE: t.string,
  income: t.string,
  miN_PAY: t.string,
  ocC_STAT: t.string,
  bkcy: t.string,
  firsT_BUYER: t.string,
  fhA_BANK_FORECLOSURE: t.string,
  annuaL_VERIFIABLE_INCOME: t.string,
  vA_STATUS: t.string,
  nuM_MORTGAGE_LATES: t.string,
  fname: t.string,
  lname: t.string,
  email: t.string,
  prI_PHON: t.string,
  seC_PHON: t.string,
  preF_CALLTIME: t.string,
  address: t.string,
  city: t.string,
  state: t.string,
  zip: t.string,
  ssn: t.string,
  custom: t.string,
  calleR_ID: t.string,
  agE_ATLEAST_62: t.string,
  dobmm: t.string,
  dobdd: t.string,
  dobyyyy: t.string,
  ssN_CHECK: t.string,
  consumeR_COMMENTS: t.string,
  language: t.string,
});

export interface TaskMetricsRequest {
  companyId?: number;
  startDate?: string;
  endDate?: string;
  reportType?:
    | 'TasksByCompany'
    | 'TasksByUser'
    | 'TasksByRole'
    | 'TasksByRoleByUser'
    | 'TasksByTaskType'
    | 'TasksByTaskTypeByUser'
    | 'TasksByUserByTaskType'
    | 'TasksByLoanType'
    | 'TasksByLoanPurpose';
  activeLoansOnly?: boolean;
  loanPurposeFilters?: Array<number>;
  loanStatusFilters?: Array<number>;
}
export const TaskMetricsRequest = t.partial({
  companyId: t.number,
  startDate: t.string,
  endDate: t.string,
  reportType: t.keyof({
    TasksByCompany: null,
    TasksByUser: null,
    TasksByRole: null,
    TasksByRoleByUser: null,
    TasksByTaskType: null,
    TasksByTaskTypeByUser: null,
    TasksByUserByTaskType: null,
    TasksByLoanType: null,
    TasksByLoanPurpose: null,
  }),
  activeLoansOnly: t.boolean,
  loanPurposeFilters: t.array(t.number),
  loanStatusFilters: t.array(t.number),
});

export interface TaskMetricsModel {
  userId?: string;
  userFullName?: string;
  applicationId?: number;
  roleId?: number;
  loanPurpose?: number;
  loanType?: number;
  taskCount?: number;
  taskIdentifier?: string;
  avgTaskCompletion?: number;
  avgBorrSubmission?: number;
  avgBorrApproval?: number;
}
export const TaskMetricsModel = t.partial({
  userId: t.string,
  userFullName: t.string,
  applicationId: t.number,
  roleId: t.number,
  loanPurpose: t.number,
  loanType: t.number,
  taskCount: t.number,
  taskIdentifier: t.string,
  avgTaskCompletion: t.number,
  avgBorrSubmission: t.number,
  avgBorrApproval: t.number,
});

export interface PipelineMetricsRequest {
  companyId?: number;
  startDate?: string;
  endDate?: string;
  reportType?: 'PipelineByCompany';
  activeLoansOnly?: boolean;
  loanPurposeFilters?: Array<number>;
  loanStatusFilters?: Array<number>;
}
export const PipelineMetricsRequest = t.partial({
  companyId: t.number,
  startDate: t.string,
  endDate: t.string,
  reportType: t.literal('PipelineByCompany'),
  activeLoansOnly: t.boolean,
  loanPurposeFilters: t.array(t.number),
  loanStatusFilters: t.array(t.number),
});

export interface PipelineMetricsModel {
  loanStatus?: string;
  primaryRoleUser?: string;
  applicationId?: number;
  primaryBorrowerId?: number;
  borrowerName?: string;
  loanAmount?: number;
  loanPurpose?: string;
  loanType?: string;
}
export const PipelineMetricsModel = t.partial({
  loanStatus: t.string,
  primaryRoleUser: t.string,
  applicationId: t.number,
  primaryBorrowerId: t.number,
  borrowerName: t.string,
  loanAmount: t.number,
  loanPurpose: t.string,
  loanType: t.string,
});

export interface SendTestSmsRequest {
  serviceType?: 'Twilio';
  fromPhoneNumber?: string;
  accountIdentifier?: string;
  authToken?: string;
  toPhoneNumber?: string;
  message?: string;
  companyId?: number;
}
export const SendTestSmsRequest = t.partial({
  serviceType: t.literal('Twilio'),
  fromPhoneNumber: t.string,
  accountIdentifier: t.string,
  authToken: t.string,
  toPhoneNumber: t.string,
  message: t.string,
  companyId: t.number,
});

export interface SendSmsViewModel {
  from?: string;
  to?: string;
  body?: string;
}
export const SendSmsViewModel = t.partial({
  from: t.string,
  to: t.string,
  body: t.string,
});

export interface SendSmsBetweenModel {
  num1?: string;
  num2?: string;
}
export const SendSmsBetweenModel = t.partial({
  num1: t.string,
  num2: t.string,
});

export interface SmsSearchBorrowerRequest {
  phone?: string;
}
export const SmsSearchBorrowerRequest = t.partial({
  phone: t.string,
});

export interface VersionResult {
  assemblyVersion?: string;
  assemblyInformation?: string;
  machineName?: string;
  port?: number;
}
export const VersionResult = t.partial({
  assemblyVersion: t.string,
  assemblyInformation: t.string,
  machineName: t.string,
  port: t.number,
});

export interface LoanDocTaskUpsertModel {
  loanDocTask?: LoanDocTaskViewModel;
  multipleBorrower?: Array<number>;
  numFiles?: number;
  expirationDate?: string;
}
export const LoanDocTaskUpsertModel = t.partial({
  loanDocTask: LoanDocTaskViewModel,
  multipleBorrower: t.array(t.number),
  numFiles: t.number,
  expirationDate: t.string,
});

export interface TaskNoteModel {
  note?: string;
  borrowerNote?: string;
}
export const TaskNoteModel = t.partial({
  note: t.string,
  borrowerNote: t.string,
});

export interface VerificationEmployer {
  name?: string;
  code?: string;
  alternateIdentifier?: string;
  salaryKey?: string;
}
export const VerificationEmployer = t.partial({
  name: t.string,
  code: t.string,
  alternateIdentifier: t.string,
  salaryKey: t.string,
});

export interface VerificationBorrower {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  ssn?: string;
  employer?: VerificationEmployer;
}
export const VerificationBorrower = t.partial({
  firstName: t.string,
  middleName: t.string,
  lastName: t.string,
  ssn: t.string,
  employer: VerificationEmployer,
});

export interface VerificationRequest {
  requestType?: 'VOE' | 'VOI';
  responseFormat?: 'Pdf' | 'Xml';
  referenceNumber?: string;
  borrower?: VerificationBorrower;
}
export const VerificationRequest = t.partial({
  requestType: t.keyof({
    VOE: null,
    VOI: null,
  }),
  responseFormat: t.keyof({
    Pdf: null,
    Xml: null,
  }),
  referenceNumber: t.string,
  borrower: VerificationBorrower,
});

export interface VerificationResponse {}
export const VerificationResponse = t.type({});

export interface WizardConfigViewModel {
  id?: number;
  name?: string;
  dataId?: string;
  data?: string;
  groupId?: string;
  group?: string;
  valid?: string;
  tree?: string;
  questionId?: string;
  startUrl?: string;
  postUrl?: string;
  answersModelJSON?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const WizardConfigViewModel = t.partial({
  id: t.number,
  name: t.string,
  dataId: t.string,
  data: t.string,
  groupId: t.string,
  group: t.string,
  valid: t.string,
  tree: t.string,
  questionId: t.string,
  startUrl: t.string,
  postUrl: t.string,
  answersModelJSON: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface DataViewModel {
  id?: number;
  dataId?: number;
  value?: string;
  name?: string;
  buttonImage?: string;
}
export const DataViewModel = t.partial({
  id: t.number,
  dataId: t.number,
  value: t.string,
  name: t.string,
  buttonImage: t.string,
});

export interface DataIdViewModel {
  id?: number;
  name?: string;
  dataList?: Array<DataViewModel>;
}
export const DataIdViewModel = t.partial({
  id: t.number,
  name: t.string,
  dataList: t.array(DataViewModel),
});

export interface GroupViewModel {
  id?: number;
  groupId?: number;
  questionId?: number;
  categoryId?: number;
  name?: string;
  question?: string;
  answer?: string;
  validate?: string;
}
export const GroupViewModel = t.partial({
  id: t.number,
  groupId: t.number,
  questionId: t.number,
  categoryId: t.number,
  name: t.string,
  question: t.string,
  answer: t.string,
  validate: t.string,
});

export interface GroupIdViewModel {
  id?: number;
  name?: string;
  propertyName?: string;
  groupList?: Array<GroupViewModel>;
}
export const GroupIdViewModel = t.partial({
  id: t.number,
  name: t.string,
  propertyName: t.string,
  groupList: t.array(GroupViewModel),
});

export interface ValidViewModel {
  id?: number;
  questionId?: number;
  min?: number;
  max?: number;
  required?: boolean;
}
export const ValidViewModel = t.partial({
  id: t.number,
  questionId: t.number,
  min: t.number,
  max: t.number,
  required: t.boolean,
});

export interface TreeViewModel {
  parentQuestionId?: number;
  parentRefId?: number;
  questionId?: number;
  questionRefId?: number;
  questionCategoryId?: number;
  questionAnswerId?: number;
  checkListItemId?: string;
  questionText?: string;
  answer?: string;
  answerValue?: string;
  answerList?: Array<DataViewModel>;
}
export const TreeViewModel = t.partial({
  parentQuestionId: t.number,
  parentRefId: t.number,
  questionId: t.number,
  questionRefId: t.number,
  questionCategoryId: t.number,
  questionAnswerId: t.number,
  checkListItemId: t.string,
  questionText: t.string,
  answer: t.string,
  answerValue: t.string,
  answerList: t.array(DataViewModel),
});

export interface WizardQuestionViewModel {
  id?: number;
  categoryId?: number;
  dataId?: number;
  groupId?: number;
  name?: string;
  question?: string;
  additional?: string;
  validate?: string;
  companyId?: number;
  insertedBy?: string;
  dateInserted?: string;
  updatedBy?: string;
  dateUpdated?: string;
}
export const WizardQuestionViewModel = t.partial({
  id: t.number,
  categoryId: t.number,
  dataId: t.number,
  groupId: t.number,
  name: t.string,
  question: t.string,
  additional: t.string,
  validate: t.string,
  companyId: t.number,
  insertedBy: t.string,
  dateInserted: t.string,
  updatedBy: t.string,
  dateUpdated: t.string,
});

export interface ExtractedWizardConfigViewModel {
  id?: number;
  name?: string;
  dataId?: Array<DataIdViewModel>;
  data?: Array<DataViewModel>;
  groupId?: Array<GroupIdViewModel>;
  group?: Array<GroupViewModel>;
  valid?: Array<ValidViewModel>;
  tree?: Array<TreeViewModel>;
  question?: Array<WizardQuestionViewModel>;
}
export const ExtractedWizardConfigViewModel = t.partial({
  id: t.number,
  name: t.string,
  dataId: t.array(DataIdViewModel),
  data: t.array(DataViewModel),
  groupId: t.array(GroupIdViewModel),
  group: t.array(GroupViewModel),
  valid: t.array(ValidViewModel),
  tree: t.array(TreeViewModel),
  question: t.array(WizardQuestionViewModel),
});

export interface WizardQuestionDataViewModel {
  question?: WizardQuestionViewModel;
  valid?: ValidViewModel;
}
export const WizardQuestionDataViewModel = t.partial({
  question: WizardQuestionViewModel,
  valid: ValidViewModel,
});

export interface ZipcodeLookupResult {
  recordNumber?: number;
  zipcode?: string;
  city?: string;
  state?: string;
  locationText?: string;
}
export const ZipcodeLookupResult = t.partial({
  recordNumber: t.number,
  zipcode: t.string,
  city: t.string,
  state: t.string,
  locationText: t.string,
});
