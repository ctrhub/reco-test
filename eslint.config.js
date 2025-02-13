import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
	eslintConfigPrettier,
  pluginReact.configs.flat.recommended,
  ...tseslint.configs.recommended,
	{
		languageOptions: { globals: globals.browser },
		plugins: {
			"react-hooks": pluginReactHooks,
		},
		settings: { react: { version: "detect" } },
		rules: {
			...pluginReactHooks.configs.recommended.rules,
			// React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
		}
	},
];