module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  globals: {
    describe: 'readonly',
    test: 'readonly',
    expect: 'readonly'
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'never']
  }
}
