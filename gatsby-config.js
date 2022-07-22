/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphQL`,
        fieldName: `wpgraphql`,
        url : `https://eventosyfestivales.com/graphql`
      }
    }
  ],
}
