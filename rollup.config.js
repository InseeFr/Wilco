import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';

const { dependencies } = require('./package.json');

export default {
	input: 'src/index.js',
	output: {
		name: 'wilco',
		file: 'dist/index.js',
		format: 'cjs',
		strict: false,
		globals: {
			react: 'React',
		},
		sourcemap: true,
	},
	plugins: [
		builtins(),
		postcss({ extract: true }),
		resolve(),
		babel({
			exclude: 'node_modules/**',
		}),
		commonjs(),
		replace({
			exclude: 'node_modules/**',
			ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
		}),
	],
	external: ['react', ...Object.keys(dependencies)],
};
