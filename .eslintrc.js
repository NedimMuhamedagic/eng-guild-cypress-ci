module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'cypress',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
    'max-len': 0,
    'class-methods-use-this': 0,

  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  globals: {
    mocha: true,
    cypress: true,
    cy: true,
  },
};
