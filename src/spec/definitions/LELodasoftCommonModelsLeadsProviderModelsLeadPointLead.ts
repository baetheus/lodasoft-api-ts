import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	product: createOptionFromOptional(string, 'product'),
	loaN_VAL: createOptionFromOptional(number, 'loaN_VAL'),
	esT_VAL: createOptionFromOptional(number, 'esT_VAL'),
	loaN_TYPE: createOptionFromOptional(string, 'loaN_TYPE'),
	dowN_PMT: createOptionFromOptional(number, 'dowN_PMT'),
	proP_ZIP: createOptionFromOptional(string, 'proP_ZIP'),
	proP_DESC: createOptionFromOptional(string, 'proP_DESC'),
	speC_HOME: createOptionFromOptional(string, 'speC_HOME'),
	proP_ST: createOptionFromOptional(string, 'proP_ST'),
	proP_PURP: createOptionFromOptional(string, 'proP_PURP'),
	proP_AREA: createOptionFromOptional(string, 'proP_AREA'),
	buY_TIMEFRAME: createOptionFromOptional(string, 'buY_TIMEFRAME'),
	purchasE_CONTRACT: createOptionFromOptional(string, 'purchasE_CONTRACT'),
	agenT_FOUND: createOptionFromOptional(string, 'agenT_FOUND'),
	agenT_NAME: createOptionFromOptional(string, 'agenT_NAME'),
	agenT_PHONE: createOptionFromOptional(string, 'agenT_PHONE'),
	agenT_COMPANY: createOptionFromOptional(string, 'agenT_COMPANY'),
	agenT_EMAIL: createOptionFromOptional(string, 'agenT_EMAIL'),
	agenT_ADDRESS: createOptionFromOptional(string, 'agenT_ADDRESS'),
	agenT_CITY: createOptionFromOptional(string, 'agenT_CITY'),
	agenT_STATE: createOptionFromOptional(string, 'agenT_STATE'),
	agenT_ZIP: createOptionFromOptional(string, 'agenT_ZIP'),
	agenT_STATUS: createOptionFromOptional(string, 'agenT_STATUS'),
	agenT2_NAME: createOptionFromOptional(string, 'agenT2_NAME'),
	agenT2_COMPANY: createOptionFromOptional(string, 'agenT2_COMPANY'),
	agenT2_EMAIL: createOptionFromOptional(string, 'agenT2_EMAIL'),
	agenT2_PHONE: createOptionFromOptional(string, 'agenT2_PHONE'),
	agenT2_ADDRESS: createOptionFromOptional(string, 'agenT2_ADDRESS'),
	agenT2_CITY: createOptionFromOptional(string, 'agenT2_CITY'),
	agenT2_STATE: createOptionFromOptional(string, 'agenT2_STATE'),
	agenT2_ZIP: createOptionFromOptional(string, 'agenT2_ZIP'),
	agenT3_NAME: createOptionFromOptional(string, 'agenT3_NAME'),
	agenT3_PHONE: createOptionFromOptional(string, 'agenT3_PHONE'),
	agenT3_COMPANY: createOptionFromOptional(string, 'agenT3_COMPANY'),
	agenT3_EMAIL: createOptionFromOptional(string, 'agenT3_EMAIL'),
	agenT3_ADDRESS: createOptionFromOptional(string, 'agenT3_ADDRESS'),
	agenT2_STATUS: createOptionFromOptional(string, 'agenT2_STATUS'),
	agenT3_CITY: createOptionFromOptional(string, 'agenT3_CITY'),
	agenT3_ZIP: createOptionFromOptional(string, 'agenT3_ZIP'),
	agenT3_STATUS: createOptionFromOptional(string, 'agenT3_STATUS'),
	agenT4_NAME: createOptionFromOptional(string, 'agenT4_NAME'),
	agenT4_PHONE: createOptionFromOptional(string, 'agenT4_PHONE'),
	agenT4_COMPANY: createOptionFromOptional(string, 'agenT4_COMPANY'),
	agenT4_EMAIL: createOptionFromOptional(string, 'agenT4_EMAIL'),
	agenT4_ADDRESS: createOptionFromOptional(string, 'agenT4_ADDRESS'),
	agenT4_CITY: createOptionFromOptional(string, 'agenT4_CITY'),
	agenT4_STATE: createOptionFromOptional(string, 'agenT4_STATE'),
	agenT4_ZIP: createOptionFromOptional(string, 'agenT4_ZIP'),
	agenT4_STATUS: createOptionFromOptional(string, 'agenT4_STATUS'),
	proP_URL: createOptionFromOptional(string, 'proP_URL'),
	proP_BEDS: createOptionFromOptional(string, 'proP_BEDS'),
	proP_BATHS: createOptionFromOptional(string, 'proP_BATHS'),
	proP_SQFT: createOptionFromOptional(string, 'proP_SQFT'),
	agenT3_STATE: createOptionFromOptional(string, 'agenT3_STATE'),
	creD_GRADE: createOptionFromOptional(string, 'creD_GRADE'),
	income: createOptionFromOptional(string, 'income'),
	miN_PAY: createOptionFromOptional(string, 'miN_PAY'),
	ocC_STAT: createOptionFromOptional(string, 'ocC_STAT'),
	bkcy: createOptionFromOptional(string, 'bkcy'),
	firsT_BUYER: createOptionFromOptional(string, 'firsT_BUYER'),
	fhA_BANK_FORECLOSURE: createOptionFromOptional(string, 'fhA_BANK_FORECLOSURE'),
	annuaL_VERIFIABLE_INCOME: createOptionFromOptional(string, 'annuaL_VERIFIABLE_INCOME'),
	vA_STATUS: createOptionFromOptional(string, 'vA_STATUS'),
	nuM_MORTGAGE_LATES: createOptionFromOptional(string, 'nuM_MORTGAGE_LATES'),
	fname: createOptionFromOptional(string, 'fname'),
	lname: createOptionFromOptional(string, 'lname'),
	email: createOptionFromOptional(string, 'email'),
	prI_PHON: createOptionFromOptional(string, 'prI_PHON'),
	seC_PHON: createOptionFromOptional(string, 'seC_PHON'),
	preF_CALLTIME: createOptionFromOptional(string, 'preF_CALLTIME'),
	address: createOptionFromOptional(string, 'address'),
	city: createOptionFromOptional(string, 'city'),
	state: createOptionFromOptional(string, 'state'),
	zip: createOptionFromOptional(string, 'zip'),
	ssn: createOptionFromOptional(string, 'ssn'),
	custom: createOptionFromOptional(string, 'custom'),
	calleR_ID: createOptionFromOptional(string, 'calleR_ID'),
	agE_ATLEAST_62: createOptionFromOptional(string, 'agE_ATLEAST_62'),
	dobmm: createOptionFromOptional(string, 'dobmm'),
	dobdd: createOptionFromOptional(string, 'dobdd'),
	dobyyyy: createOptionFromOptional(string, 'dobyyyy'),
	ssN_CHECK: createOptionFromOptional(string, 'ssN_CHECK'),
	consumeR_COMMENTS: createOptionFromOptional(string, 'consumeR_COMMENTS'),
	language: createOptionFromOptional(string, 'language'),
});
