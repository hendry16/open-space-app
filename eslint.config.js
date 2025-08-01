import globals from 'globals';
import { fixupPluginRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginHooks from 'eslint-plugin-react-hooks';
import pluginCypres from 'eslint-plugin-cypress/flat';
import daStyle from 'eslint-config-dicodingacademy';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginCypres.configs.recommended,
  {
    plugins: {
      'react-hooks': fixupPluginRules(pluginHooks)
    },
    rules: pluginHooks.configs.recommended.rules,
  },
  daStyle,
  {
    rules: {
      'linebreak-style': 'off',
      'no-alert': 'off',
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'no-underscore-dangle': 'off',
      'import/prefer-default-export': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-props-no-spreading': 'off'
    }
  }
];
