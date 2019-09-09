/* eslint-disable @typescript-eslint/camelcase */
const path = require(`path`);
const sourceDir = process.env.SOURCE || `src`;
const sourcePath = path.join(process.cwd(), sourceDir);

module.exports = {
  siteMetadata: {
    title: `Gabriel`,
    description: `Mieter Engel - Camera Challenge`,
    author: `Gabriel`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/RootLayout/index.tsx`)
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          services: `${sourcePath}/services/`,
          models: `${sourcePath}/models/`,
          themes: `${sourcePath}/themes/`,
          components: `${sourcePath}/components/`,
          state: `${sourcePath}/state/`,
          images: `${sourcePath}/images/`
        },
        extensions: []
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Camera Challenge`,
        short_name: `Camera Challenge`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/small_favicon.png`
      }
    },
    "gatsby-plugin-netlify",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-remove-serviceworker`
  ]
};
