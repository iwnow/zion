
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import html from 'rollup-plugin-fill-html';

import path from 'path';

const production = !process.env.ROLLUP_WATCH;

export default [
    {
        input: path.resolve(__dirname, 'libs/core/src/index.ts'),
        output: {
            name: 'zion.core',
            format: 'umd',
            file: path.resolve(__dirname, 'dist/libs/core/zion.core.umd.js'),
            globals: {},
            sourcemap: true,
        },
        plugins: [
            typescript({
                tsconfig: path.resolve(__dirname, './libs/core/tsconfig.lib.json')
            }),
            resolve(),
            // live reload if dev
            !production && livereload(),
            !production && serve('dist'),
            !production && html({
                template: path.resolve(__dirname, 'tmpl-libs.index.html'),
                filename: 'index.html'
              }),
            // minify if prod
            production && terser()
        ],
        watch: {
            clearScreen: true
        }
    }
];