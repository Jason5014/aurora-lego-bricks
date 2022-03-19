import basicConfig, { name, fileName } from './rollup.config';

export default {
	...basicConfig,
	output: {
		name: 'LegoComponents',
		file: fileName('umd'),
		format: 'umd',
		globals: {
			'vue': 'Vue',
		},
		exports: 'named',
	},
};
