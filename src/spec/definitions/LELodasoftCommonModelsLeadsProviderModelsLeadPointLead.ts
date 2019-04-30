import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsProviderModelsLeadPointLead = {
	product: Option<string>;
	loaN_VAL: Option<number>;
	esT_VAL: Option<number>;
	loaN_TYPE: Option<string>;
	dowN_PMT: Option<number>;
	proP_ZIP: Option<string>;
	proP_DESC: Option<string>;
	speC_HOME: Option<string>;
	proP_ST: Option<string>;
	proP_PURP: Option<string>;
	proP_AREA: Option<string>;
	buY_TIMEFRAME: Option<string>;
	purchasE_CONTRACT: Option<string>;
	agenT_FOUND: Option<string>;
	agenT_NAME: Option<string>;
	agenT_PHONE: Option<string>;
	agenT_COMPANY: Option<string>;
	agenT_EMAIL: Option<string>;
	agenT_ADDRESS: Option<string>;
	agenT_CITY: Option<string>;
	agenT_STATE: Option<string>;
	agenT_ZIP: Option<string>;
	agenT_STATUS: Option<string>;
	agenT2_NAME: Option<string>;
	agenT2_COMPANY: Option<string>;
	agenT2_EMAIL: Option<string>;
	agenT2_PHONE: Option<string>;
	agenT2_ADDRESS: Option<string>;
	agenT2_CITY: Option<string>;
	agenT2_STATE: Option<string>;
	agenT2_ZIP: Option<string>;
	agenT3_NAME: Option<string>;
	agenT3_PHONE: Option<string>;
	agenT3_COMPANY: Option<string>;
	agenT3_EMAIL: Option<string>;
	agenT3_ADDRESS: Option<string>;
	agenT2_STATUS: Option<string>;
	agenT3_CITY: Option<string>;
	agenT3_ZIP: Option<string>;
	agenT3_STATUS: Option<string>;
	agenT4_NAME: Option<string>;
	agenT4_PHONE: Option<string>;
	agenT4_COMPANY: Option<string>;
	agenT4_EMAIL: Option<string>;
	agenT4_ADDRESS: Option<string>;
	agenT4_CITY: Option<string>;
	agenT4_STATE: Option<string>;
	agenT4_ZIP: Option<string>;
	agenT4_STATUS: Option<string>;
	proP_URL: Option<string>;
	proP_BEDS: Option<string>;
	proP_BATHS: Option<string>;
	proP_SQFT: Option<string>;
	agenT3_STATE: Option<string>;
	creD_GRADE: Option<string>;
	income: Option<string>;
	miN_PAY: Option<string>;
	ocC_STAT: Option<string>;
	bkcy: Option<string>;
	firsT_BUYER: Option<string>;
	fhA_BANK_FORECLOSURE: Option<string>;
	annuaL_VERIFIABLE_INCOME: Option<string>;
	vA_STATUS: Option<string>;
	nuM_MORTGAGE_LATES: Option<string>;
	fname: Option<string>;
	lname: Option<string>;
	email: Option<string>;
	prI_PHON: Option<string>;
	seC_PHON: Option<string>;
	preF_CALLTIME: Option<string>;
	address: Option<string>;
	city: Option<string>;
	state: Option<string>;
	zip: Option<string>;
	ssn: Option<string>;
	custom: Option<string>;
	calleR_ID: Option<string>;
	agE_ATLEAST_62: Option<string>;
	dobmm: Option<string>;
	dobdd: Option<string>;
	dobyyyy: Option<string>;
	ssN_CHECK: Option<string>;
	consumeR_COMMENTS: Option<string>;
	language: Option<string>;
};
export const LELodasoftCommonModelsLeadsProviderModelsLeadPointLeadIO = type({
	product: createOptionFromNullable(string, 'product'),
	loaN_VAL: createOptionFromNullable(number, 'loaN_VAL'),
	esT_VAL: createOptionFromNullable(number, 'esT_VAL'),
	loaN_TYPE: createOptionFromNullable(string, 'loaN_TYPE'),
	dowN_PMT: createOptionFromNullable(number, 'dowN_PMT'),
	proP_ZIP: createOptionFromNullable(string, 'proP_ZIP'),
	proP_DESC: createOptionFromNullable(string, 'proP_DESC'),
	speC_HOME: createOptionFromNullable(string, 'speC_HOME'),
	proP_ST: createOptionFromNullable(string, 'proP_ST'),
	proP_PURP: createOptionFromNullable(string, 'proP_PURP'),
	proP_AREA: createOptionFromNullable(string, 'proP_AREA'),
	buY_TIMEFRAME: createOptionFromNullable(string, 'buY_TIMEFRAME'),
	purchasE_CONTRACT: createOptionFromNullable(string, 'purchasE_CONTRACT'),
	agenT_FOUND: createOptionFromNullable(string, 'agenT_FOUND'),
	agenT_NAME: createOptionFromNullable(string, 'agenT_NAME'),
	agenT_PHONE: createOptionFromNullable(string, 'agenT_PHONE'),
	agenT_COMPANY: createOptionFromNullable(string, 'agenT_COMPANY'),
	agenT_EMAIL: createOptionFromNullable(string, 'agenT_EMAIL'),
	agenT_ADDRESS: createOptionFromNullable(string, 'agenT_ADDRESS'),
	agenT_CITY: createOptionFromNullable(string, 'agenT_CITY'),
	agenT_STATE: createOptionFromNullable(string, 'agenT_STATE'),
	agenT_ZIP: createOptionFromNullable(string, 'agenT_ZIP'),
	agenT_STATUS: createOptionFromNullable(string, 'agenT_STATUS'),
	agenT2_NAME: createOptionFromNullable(string, 'agenT2_NAME'),
	agenT2_COMPANY: createOptionFromNullable(string, 'agenT2_COMPANY'),
	agenT2_EMAIL: createOptionFromNullable(string, 'agenT2_EMAIL'),
	agenT2_PHONE: createOptionFromNullable(string, 'agenT2_PHONE'),
	agenT2_ADDRESS: createOptionFromNullable(string, 'agenT2_ADDRESS'),
	agenT2_CITY: createOptionFromNullable(string, 'agenT2_CITY'),
	agenT2_STATE: createOptionFromNullable(string, 'agenT2_STATE'),
	agenT2_ZIP: createOptionFromNullable(string, 'agenT2_ZIP'),
	agenT3_NAME: createOptionFromNullable(string, 'agenT3_NAME'),
	agenT3_PHONE: createOptionFromNullable(string, 'agenT3_PHONE'),
	agenT3_COMPANY: createOptionFromNullable(string, 'agenT3_COMPANY'),
	agenT3_EMAIL: createOptionFromNullable(string, 'agenT3_EMAIL'),
	agenT3_ADDRESS: createOptionFromNullable(string, 'agenT3_ADDRESS'),
	agenT2_STATUS: createOptionFromNullable(string, 'agenT2_STATUS'),
	agenT3_CITY: createOptionFromNullable(string, 'agenT3_CITY'),
	agenT3_ZIP: createOptionFromNullable(string, 'agenT3_ZIP'),
	agenT3_STATUS: createOptionFromNullable(string, 'agenT3_STATUS'),
	agenT4_NAME: createOptionFromNullable(string, 'agenT4_NAME'),
	agenT4_PHONE: createOptionFromNullable(string, 'agenT4_PHONE'),
	agenT4_COMPANY: createOptionFromNullable(string, 'agenT4_COMPANY'),
	agenT4_EMAIL: createOptionFromNullable(string, 'agenT4_EMAIL'),
	agenT4_ADDRESS: createOptionFromNullable(string, 'agenT4_ADDRESS'),
	agenT4_CITY: createOptionFromNullable(string, 'agenT4_CITY'),
	agenT4_STATE: createOptionFromNullable(string, 'agenT4_STATE'),
	agenT4_ZIP: createOptionFromNullable(string, 'agenT4_ZIP'),
	agenT4_STATUS: createOptionFromNullable(string, 'agenT4_STATUS'),
	proP_URL: createOptionFromNullable(string, 'proP_URL'),
	proP_BEDS: createOptionFromNullable(string, 'proP_BEDS'),
	proP_BATHS: createOptionFromNullable(string, 'proP_BATHS'),
	proP_SQFT: createOptionFromNullable(string, 'proP_SQFT'),
	agenT3_STATE: createOptionFromNullable(string, 'agenT3_STATE'),
	creD_GRADE: createOptionFromNullable(string, 'creD_GRADE'),
	income: createOptionFromNullable(string, 'income'),
	miN_PAY: createOptionFromNullable(string, 'miN_PAY'),
	ocC_STAT: createOptionFromNullable(string, 'ocC_STAT'),
	bkcy: createOptionFromNullable(string, 'bkcy'),
	firsT_BUYER: createOptionFromNullable(string, 'firsT_BUYER'),
	fhA_BANK_FORECLOSURE: createOptionFromNullable(string, 'fhA_BANK_FORECLOSURE'),
	annuaL_VERIFIABLE_INCOME: createOptionFromNullable(string, 'annuaL_VERIFIABLE_INCOME'),
	vA_STATUS: createOptionFromNullable(string, 'vA_STATUS'),
	nuM_MORTGAGE_LATES: createOptionFromNullable(string, 'nuM_MORTGAGE_LATES'),
	fname: createOptionFromNullable(string, 'fname'),
	lname: createOptionFromNullable(string, 'lname'),
	email: createOptionFromNullable(string, 'email'),
	prI_PHON: createOptionFromNullable(string, 'prI_PHON'),
	seC_PHON: createOptionFromNullable(string, 'seC_PHON'),
	preF_CALLTIME: createOptionFromNullable(string, 'preF_CALLTIME'),
	address: createOptionFromNullable(string, 'address'),
	city: createOptionFromNullable(string, 'city'),
	state: createOptionFromNullable(string, 'state'),
	zip: createOptionFromNullable(string, 'zip'),
	ssn: createOptionFromNullable(string, 'ssn'),
	custom: createOptionFromNullable(string, 'custom'),
	calleR_ID: createOptionFromNullable(string, 'calleR_ID'),
	agE_ATLEAST_62: createOptionFromNullable(string, 'agE_ATLEAST_62'),
	dobmm: createOptionFromNullable(string, 'dobmm'),
	dobdd: createOptionFromNullable(string, 'dobdd'),
	dobyyyy: createOptionFromNullable(string, 'dobyyyy'),
	ssN_CHECK: createOptionFromNullable(string, 'ssN_CHECK'),
	consumeR_COMMENTS: createOptionFromNullable(string, 'consumeR_COMMENTS'),
	language: createOptionFromNullable(string, 'language'),
});
