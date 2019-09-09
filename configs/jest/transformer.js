module.exports = require(`babel-jest`).createTransformer({
  presets: [`@babel/react`, `@babel/env`],
  plugins: [`babel-plugin-remove-graphql-queries`]
});
