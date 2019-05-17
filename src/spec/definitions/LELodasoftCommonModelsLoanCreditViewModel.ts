import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsLoanCreditViewModel = {
	creditID: Option<number>;
	refNumber: Option<string>;
	date: Option<Date>;
	equifax: Option<number>;
	experian: Option<number>;
	transUnion: Option<number>;
	joint: Option<boolean>;
	borrowerId: Option<number>;
	borrowerName: Option<string>;
	applicationId: Option<number>;
	integrationHistoryId: Option<number>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsLoanCreditViewModelIO = type({
	creditID: createOptionFromOptional(number, 'creditID'),
	refNumber: createOptionFromOptional(string, 'refNumber'),
	date: createOptionFromOptional(DateFromDatelike, 'date'),
	equifax: createOptionFromOptional(number, 'equifax'),
	experian: createOptionFromOptional(number, 'experian'),
	transUnion: createOptionFromOptional(number, 'transUnion'),
	joint: createOptionFromOptional(boolean, 'joint'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	borrowerName: createOptionFromOptional(string, 'borrowerName'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	integrationHistoryId: createOptionFromOptional(number, 'integrationHistoryId'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
