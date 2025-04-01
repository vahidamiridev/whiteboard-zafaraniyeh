import { Linter } from 'eslint'; // تایپ گذاری برای ESLint
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

// پیکربندی ESLint
const config: Linter.Config = {
  ignores: ['dist'], // نادیده گرفتن پوشه‌ها یا فایل‌های خاص
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'], // اضافه کردن انواع فایل TypeScript
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
          ecmaVersion: 'latest',
          ecmaFeatures: { jsx: true },
          sourceType: 'module',
        },
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
      },
      rules: {
        ...js.configs.recommended.rules,
        ...reactHooks.configs.recommended.rules,
        'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    },
  ],
};

export default config;
