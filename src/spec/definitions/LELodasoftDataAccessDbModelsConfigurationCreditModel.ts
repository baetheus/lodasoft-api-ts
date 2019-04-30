import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationCreditModel = {
	creditID: Option<number>;
	refNumber: Option<string>;
	date: Option<Date>;
	equifax: Option<number>;
	experian: Option<number>;
	transUnion: Option<number>;
	joint: Option<boolean>;
	borrowerId: Option<number>;
	applicationId: Option<number>;
	integrationHistoryId: Option<number>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftDataAccessDbModelsConfigurationCreditModelIO = type({
	creditID: createOptionFromNullable(number, 'creditID'),
	refNumber: createOptionFromNullable(string, 'refNumber'),
	date: createOptionFromNullable(DateFromISOString, 'date'),
	equifax: createOptionFromNullable(number, 'equifax'),
	experian: createOptionFromNullable(number, 'experian'),
	transUnion: createOptionFromNullable(number, 'transUnion'),
	joint: createOptionFromNullable(boolean, 'joint'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	integrationHistoryId: createOptionFromNullable(number, 'integrationHistoryId'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
