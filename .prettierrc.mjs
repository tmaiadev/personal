/** @type {import("prettier").Config} */
export default {
  // prettier-plugin-tailwindcss MUST be last so it runs after other plugins
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles/global.css',
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
