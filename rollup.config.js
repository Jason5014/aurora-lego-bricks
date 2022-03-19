import { name } from './package.json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-css-only';
import vue from 'rollup-plugin-vue';

export { name };

export const fileName = type => `dist/${name}.${type}.js`;

export const tsconfigOverride = {
	"compilerOptions": {
		"declaration": true,
	},
	"exclude": [
		"node_modules",
		"src/App.vue",
		"src/main.ts",
	]
};

export default {
	input: 'src/index.ts',
	plugins: [
		nodeResolve(),
		typescript({ tsconfigOverride }),
		vue(),
		css({ output: 'bundle.css' }),
	],
	external: (id) => {
		return /^vue/.test(id);
	}
};
