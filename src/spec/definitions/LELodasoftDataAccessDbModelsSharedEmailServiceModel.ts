import { Option } from 'fp-ts/lib/Option';
import { string, number, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsSharedEmailServiceModel = {
	serviceType: Option<string>;
	server: Option<string>;
	port: Option<number>;
	userName: Option<string>;
	password: Option<string>;
	isSecure: Option<boolean>;
	userId: Option<string>;
	servicesUrl: Option<string>;
	companyId: Option<number>;
};
export const LELodasoftDataAccessDbModelsSharedEmailServiceModelIO = type({
	serviceType: createOptionFromNullable(string),
	server: createOptionFromNullable(string),
	port: createOptionFromNullable(number),
	userName: createOptionFromNullable(string),
	password: createOptionFromNullable(string),
	isSecure: createOptionFromNullable(boolean),
	userId: createOptionFromNullable(string),
	servicesUrl: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
});
