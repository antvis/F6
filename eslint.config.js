import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import typescriptEslint from "typescript-eslint";

export default [
  eslintConfigPrettier,
  {
    //extends: ["eslint:recommended", "plugin:prettier/recommended"],
    plugins: { eslintPluginPrettierRecommended },
    rules: {},
    files: ["**/*.jsx", "**/*.tsx", "**/*.js", "**/*.ts"],
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs"],
        },
      },
    },
  },
  ...typescriptEslint.configs.recommended,
  {
    ignores: ["**/es/", "**/dist/", "**/lib/", "**/node_modules/"],
  },
];
