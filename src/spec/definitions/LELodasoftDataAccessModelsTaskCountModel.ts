import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessModelsTaskCountModel = {
	mt_g2: Option<number>;
	mt_l2: Option<number>;
	ot_g2: Option<number>;
	ot_l2: Option<number>;
	bt_s: Option<number>;
	bt_p: Option<number>;
	bt_c: Option<number>;
	doc_l5exp: Option<number>;
	doc_exp: Option<number>;
	ct: Option<number>;
	filter11: Option<number>;
	filter12: Option<number>;
};
export const LELodasoftDataAccessModelsTaskCountModelIO = type({
	mt_g2: createOptionFromNullable(number, 'mt_g2'),
	mt_l2: createOptionFromNullable(number, 'mt_l2'),
	ot_g2: createOptionFromNullable(number, 'ot_g2'),
	ot_l2: createOptionFromNullable(number, 'ot_l2'),
	bt_s: createOptionFromNullable(number, 'bt_s'),
	bt_p: createOptionFromNullable(number, 'bt_p'),
	bt_c: createOptionFromNullable(number, 'bt_c'),
	doc_l5exp: createOptionFromNullable(number, 'doc_l5exp'),
	doc_exp: createOptionFromNullable(number, 'doc_exp'),
	ct: createOptionFromNullable(number, 'ct'),
	filter11: createOptionFromNullable(number, 'filter11'),
	filter12: createOptionFromNullable(number, 'filter12'),
});
