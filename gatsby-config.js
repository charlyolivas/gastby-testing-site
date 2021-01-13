/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Gastby Testing Site",
    description:
      "A basic Gastby project, the initial boilerplate is cloned from https://github.com/gatsbyjs/gatsby-starter-hello-world - and this project is using for basic testing and adding custom integrations and styles",
    data: [
      {name:"Tailwind:", link: "https://tailwindcss.com/"},
      {name:"Tailwindcomponents:", link: "https://tailwindcomponents.com/"},
      {name:"Contentful:", link: "https://www.contentful.com/"},
      {name:"Gatsby Plugins:", link: "https://www.gatsbyjs.com/plugins"},     
      {name:"unDraw:", link: "https://undraw.co"},     
    ],
    author: "@charlyolivas",
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
      },
    },
  ],
}
