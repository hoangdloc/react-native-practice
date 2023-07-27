module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: ['react', 'react-native', '@typescript-eslint', 'prettier'],
  rules: {
    semi: [2, 'always'],
    'comma-dangle': [2, 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false }
    ],
    '@typescript-eslint/naming-convention': 'off'
  }
};
