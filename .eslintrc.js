module.exports ={
   env: {
        browser: false,
        es6: true,
        jest: true,
    },
  globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
  "extends": ["prettier", "airbnb-base"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"],
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
            'error',
            'LabeledStatement',
            'WithStatement',
        ],
  }
}
