import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import progress from 'rollup-plugin-progress';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import docx4js from '../packages/docx4js/package.json';
import docx2html from '../packages/docx2html/package.json';
import omml2latex from '../packages/omml2latex/package.json';
import wmf2png from '../packages/wmf2png/package.json';

function configure(pkg) {
  const name = pkg.name.replace('@docx-parser/', '');

  return {
    input: `packages/${name}/src/index.js`,
    output: [
      {
        file: `packages/${name}/dist/index.cjs.js`,
        format: 'cjs',
      },
      {
        file: `packages/${name}/dist/index.esm.js`,
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.ts'],
        browser: true,
      }),
      // 将 commonjs 转为 es6
      commonjs(),
      babel({
        extensions: ['.js', '.ts'],
        include: [`packages/${name}/src/**/*`],
        // babelHelpers: 'runtime',
      }),
      json(),
      progress(),
    ],
    // 忽略部分 warning 信息
    onwarn: function (warning) {
      if (warning.code === 'THIS_IS_UNDEFINED' || warning.code === 'CIRCULAR_DEPENDENCY') {
        return;
      }
      console.warn(warning.message);
    },
  };
}

function factory(pkg) {
  return configure(pkg);
}

export default [
  factory(docx4js),
  factory(docx2html),
  factory(omml2latex),
  factory(wmf2png),
];