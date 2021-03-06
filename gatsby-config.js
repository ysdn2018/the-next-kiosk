/*
  This is where you tell Gatsby what plugins you are using
*/
module.exports = {
  siteMetadata: {
    title: `the next base`,
  },
  // pathPrefix: `/the-next-website`,
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-60215266-12",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/`,
      },
    },
     {
       resolve: `gatsby-transformer-remark`,
       options: {
         plugins: [
           {
             resolve: `gatsby-remark-responsive-iframe`,
             options: {
               wrapperStyle: `margin-bottom: 1.0725rem`,
             },
           },
           "gatsby-remark-external-links",
 
           'gatsby-remark-smartypants',
         ],
       },
     },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`
  ],
}
