module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        trailingComma: 'es5',
        tabWidth: 2,
        printWidth: 120,
        semi: true,
        singleQuote: true,
        arrowParens: 'avoid',
        vueIndentScriptAndStyle: true,
      },
    ],
    'vue/multi-word-component-names': 0,
    'no-unused-vars': [1],
    // semi: [0, "never"],
    'comma-dangle': [1, 'only-multiline'],
    'no-inline-styles': 'off',
  },
};
