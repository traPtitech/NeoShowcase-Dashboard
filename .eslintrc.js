module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2017: true
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['**/*.mjs', '**/*.js'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-restricted-imports': [
      'error',
      {
        name: '/@/lib/apis/generated',
        message: 'Please use /@/lib/apis instead.'
      }
    ]
  }
}
