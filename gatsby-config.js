module.exports = {
  siteMetadata: {
    title: 'Liam O\'Flynn',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/pages',
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-image',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
