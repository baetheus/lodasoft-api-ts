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
	mt_g2: createOptionFromNullable(number),
	mt_l2: createOptionFromNullable(number),
	ot_g2: createOptionFromNullable(number),
	ot_l2: createOptionFromNullable(number),
	bt_s: createOptionFromNullable(number),
	bt_p: createOptionFromNullable(number),
	bt_c: createOptionFromNullable(number),
	doc_l5exp: createOptionFromNullable(number),
	doc_exp: createOptionFromNullable(number),
	ct: createOptionFromNullable(number),
	filter11: createOptionFromNullable(number),
	filter12: createOptionFromNullable(number),
});
