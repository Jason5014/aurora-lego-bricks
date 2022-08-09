import basicConfig, { name, fileName } from './rollup.config';

export default {
	...basicConfig,
	output: {
		name,
		file: fileName('esm'),
		format: 'es',
	},
};
