import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
	eslintConfigPrettier,
  pluginReact.configs.flat.recommended,
  ...tseslint.configs.recommended,
	{
		languageOptions: { globals: globals.browser },
		rules: {
			"react/react-in-jsx-scope": "off"
		}
	},
];