# Breakages

Generating directly from the lodasoft api into usable ode is not yet possible for two reasons:

1. Serialization does not detect scope conflicts between dependencies and local variables.
2. The lodasoft api does not correctly type its enums (they are listed as string enums but are returned as numbers).

Here is a list of the current modifications that must be manually performed during each build:

- Remove PublicAPI_PostLeadPointLead interface and method from src/spec/controllers/PublicAPIController.ts
- Remove unused imports from src/spec/controllers/PublicAPIController.ts
- Fix shadowed variable in Admin_GetCustomTaskModelByType from src/spec/controllers/AdminController.ts
- Remove the following properties from src/spec/definitions/LELodasoftCommonModelsMortgageIncomeViewModel.ts
  - employmentModel
  - reoModel
- Search for Option<'a' | 'b'> type definitions and manually replace with defined enums and createEnumType type codecs
- Normal enum type definitions must also be manually replaced with defined enums and createEnumType
- contactId on MortgageBorrowerViewModel must be switched to an Option type
- ResidencyBasisEnum needs a fourth option as the backend occasionally returns 3