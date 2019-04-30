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
	serviceType: createOptionFromNullable(string, 'serviceType'),
	server: createOptionFromNullable(string, 'server'),
	port: createOptionFromNullable(number, 'port'),
	userName: createOptionFromNullable(string, 'userName'),
	password: createOptionFromNullable(string, 'password'),
	isSecure: createOptionFromNullable(boolean, 'isSecure'),
	userId: createOptionFromNullable(string, 'userId'),
	servicesUrl: createOptionFromNullable(string, 'servicesUrl'),
	companyId: createOptionFromNullable(number, 'companyId'),
});
