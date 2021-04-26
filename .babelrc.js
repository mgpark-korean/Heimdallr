/**
 * @see guide about presets: https://babeljs.io/docs/en/presets
 * @see setting example github: https://github.com/Microsoft/TypeScript-Babel-Starter
 */

module.exports = (api) => {
  const isProdMode = process.env.NODE_ENV === 'production';

  // This caches the Babel config by environment.
  api.cache.using(() => isProdMode);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript',
      '@babel/preset-react'
    ],
    browserslistConfigFile: true,
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-typescript'
    ]
  }
}
