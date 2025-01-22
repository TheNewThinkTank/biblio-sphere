import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
// import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config} */
export default {
	ignorePatterns: ["node_modules/", "dist/"],
	overrides: [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    parser: tsParser,
    parserOptions: {
      project: "./.config/tsconfig.json",
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  ],
  ...pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // {files: ["**/*.{js,mjs,cjs,ts}"]},
  // {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
  // {languageOptions: { globals: globals.browser }},
  // pluginJs.configs.recommended,
  // ...tseslint.configs.recommended,
};
