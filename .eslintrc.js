module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['simple-import-sort', 'unused-imports'],
  extends: [
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off',
    'react/no-unescaped-entities': 'off',

    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': [
      'off',
      { props: 'never', children: 'never' },
    ],

    //#region  //*=========== Unused Import ===========
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'off',
    'unused-imports/no-unused-vars': [
      'off',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    //#endregion  //*======== Unused Import ===========
  },
  globals: {
    React: true,
    JSX: true,
  },
};
