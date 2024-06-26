import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  vue: true,
  rules: {
    'no-console': 'off',
    'curly': 'off',
    'brace-style': [2, '1tbs', {
      allowSingleLine: true,
    }],
    '@typescript-eslint/brace-style': [2, '1tbs', {
      allowSingleLine: true,
    }],
  },
})
