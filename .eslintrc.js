module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'max-depth': ['error', 3],
    'max-lines-per-function': ['error', 64],
    'operator-linebreak': ['error', 'before'],
    'no-unused-expressions': ['error', { allowTernary: true }],
  },
};
