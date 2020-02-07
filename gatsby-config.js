require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
  plugins: [
    `gatsby-plugin-less`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Gatsby Store",
        short_name: "Gatsby Store",
        start_url: "/",
        background_color: "#001529",
        theme_color: "#001529",
        display: "standalone",
        icon: "src/images/shopping-logo.png",
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/static/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
		`gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    }
  ],
}
