// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'


module.exports = {
  siteMetadata: {
    siteUrl: `https://amiralitaheri.ir`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      // options: {
      //   query: `
      //   {
      //     wp {
      //       generalSettings {
      //         siteUrl
      //       }
      //     }
      //
      //     allSitePage {
      //       nodes {
      //         path
      //       }
      //     }
      // }`,
      //   resolveSiteUrl: ({site, allSitePage}) => {
      //     //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
      //     return site.wp.generalSettings.siteUrl
      //   },
      //   serialize: ({ site, allSitePage }) =>
      //     allSitePage.nodes.map(node => {
      //       return {
      //         url: `${site.wp.generalSettings.siteUrl}${node.path}`,
      //         changefreq: `daily`,
      //         priority: 0.7,
      //       }
      //     })
      // }
    },
  ]
}
