module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
  ],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'yoda': 'error',
  },
};
