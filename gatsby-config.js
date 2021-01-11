/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path:`.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: "Gastby Tutorial",
    description: "Some description",
    author: "@charlyolivas",
    data: ["item 1", "item 2"],
    person: { name: "Charly", age: 35 },
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vsmrnhyh3dw7`,        
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, 
        develop: false, 
        tailwind: true,
      }
    },
  ],
}
