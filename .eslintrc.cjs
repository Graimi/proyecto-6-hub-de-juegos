module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off'
  }
};
