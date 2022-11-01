module.exports = {
  siteMetadata: {
    title: `Design With Compassion`,
    author: `Compassion Global Experience`,
    siteUrl: `https://designwithcompassion.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#005eb8`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/brick.svg`, // This path is relative to the root of the site.
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 80,
          breakpoints: [320, 375, 768, 1024, 1200],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-plugin-sass`,
  ],
};
