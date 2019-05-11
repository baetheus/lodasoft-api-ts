import { Option } from 'fp-ts/lib/Option';
import { string, number, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	serviceType: createOptionFromOptional(string, 'serviceType'),
	server: createOptionFromOptional(string, 'server'),
	port: createOptionFromOptional(number, 'port'),
	userName: createOptionFromOptional(string, 'userName'),
	password: createOptionFromOptional(string, 'password'),
	isSecure: createOptionFromOptional(boolean, 'isSecure'),
	userId: createOptionFromOptional(string, 'userId'),
	servicesUrl: createOptionFromOptional(string, 'servicesUrl'),
	companyId: createOptionFromOptional(number, 'companyId'),
});
