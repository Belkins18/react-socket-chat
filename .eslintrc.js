module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'react-app',
    'prettier',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'no-console': 'warn',
    camelcase: 'warn',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.jsx', '.tsx', '.ts', '.js'] },
    ],
    'react/jsx-max-props-per-line': ['error', { maximum: 2, when: 'always' }],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
};
