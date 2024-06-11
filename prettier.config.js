/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig}
 */
const config = {
  printWidth: 120,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,

  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],

  // @trivago/prettier-plugin-sort-imports
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
