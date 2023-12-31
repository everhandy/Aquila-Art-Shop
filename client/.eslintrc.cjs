module.exports = {
  env: { browser: true, es2020: true },
  extends: ['plugin:react-refresh/recommended', 'react-app'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
};