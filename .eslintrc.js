module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["react", "simple-import-sort", "prettier"],
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  ignorePatterns: ["public/"],
  rules: {
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-console": "warn",
    "no-unused-vars": "warn",
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    // "simple-import-sort/imports": "error",
    // "simple-import-sort/exports": "error",
    // "no-implicit-coercion": "error",
    // "prettier/prettier": ["error"],
  },
  overrides: [
    {
      files: ["**/*.{js,jsx}"],
      // rules: {
      //   "simple-import-sort/imports": "error",
      //   "simple-import-sort/exports": "error",
      // },
    },
  ],
};
