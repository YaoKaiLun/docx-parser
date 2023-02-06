module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  // 0 = off, 1 = warn, 2 = error
  rules: {
    /*
     * https://cn.eslint.org/docs/rules/
     */
    'comma-dangle': [2, 'always-multiline'], // IE8 及以下，尾部逗号会报错，根据项目的兼容性选择开启或关闭
    indent: [2, 2, { SwitchCase: 1 }], // 缩进 2 格，jquery 项目可忽略。switch 和 case 之间缩进两个
    'max-len': [2, { code: 140 }], // 渐进式调整，先设置最大长度为 140
    quotes: [2, 'single'], // 统一使用单引号
    semi: 2, // 语句尾部加分号
    'no-tabs': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-trailing-spaces': 2, // 语句尾部不能出现空格
    'no-multi-spaces': 2,
    'space-before-blocks': 2, // if 和函数等，大括号前需要空格
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'arrow-spacing': 2,
    'keyword-spacing': 2, // if else 等关键字前后加空格
    'space-in-parens': 2, // 括号内前后不加空格
    'comma-spacing': 2, // 逗号后空格
    'space-infix-ops': 2, // 中缀（二元）操作符前后加空格
    'spaced-comment': 2, // 注释双斜杠后保留一个空格
    'array-bracket-spacing': 2,
    'block-spacing': 2,
    'computed-property-spacing': 2,
    'func-call-spacing': 2,
    'key-spacing': 2,
    'semi-spacing': 2,
    'rest-spread-spacing': 2,
    'template-curly-spacing': 2,
    'object-curly-spacing': [2, 'always'],
    'no-whitespace-before-property': 2,
    'brace-style': 2,
    camelcase: [2, { allow: ['^UNSAFE_', '^unstable_', 'error_code'] }],
    'function-paren-newline': [2, 'multiline-arguments'],
    'no-else-return': 0,
    'no-lone-blocks': 2,
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'no-useless-return': 2,
    'require-await': 2,
    'no-multi-assign': 2,
    'no-multiple-empty-lines': [2, { max: 2, maxBOF: 0, maxEOF: 0 }],
    'no-unneeded-ternary': 2,
    'object-shorthand': 2,
    'padded-blocks': [2, 'never'],
    'no-console': [2, { allow: ['info', 'warn', 'error', 'time'] }], // 谨慎提交 console.log
    'import/no-unresolved': [2, { ignore: ['^@theme', '^@docusaurus', '^@site'] }],
  },
};
