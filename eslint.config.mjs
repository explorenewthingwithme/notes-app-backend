import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';



/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,

  daStyle,

];

/*
export default [
  daStyle,

];*/

/*
import globals from "globals";
import pluginJs from "@eslint/js";
import daStyle from "eslint-config-dicodingacademy";

@type {import('eslint').Linter.Config[]}
export default [
  // Konfigurasi untuk file JavaScript
  {
    files: ["**.js"],
    languageOptions: { sourceType: "commonjs" },
  },
  // Konfigurasi untuk browser globals
  {
    languageOptions: { globals: globals.browser },
  },
  // Konfigurasi plugin JavaScript
  pluginJs.configs.recommended,
  // Konfigurasi dari Dicoding Academy
  daStyle,
];

*/