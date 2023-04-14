module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules:{
    'linebreak-style': ['off', 'unix'],
  },
  plugins: ["@typescript-eslint"],
};
