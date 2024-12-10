import pipersESLintConfig from '@pipers/eslint-config';

export default [
  ...pipersESLintConfig,
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
        projectServices: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
