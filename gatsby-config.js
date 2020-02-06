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
        name: "HAH Store",
        short_name: "HAH Store",
        start_url: "/",
        background_color: "#001529",
        theme_color: "#001529",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        globPatterns: ["**/component*","**/page-data/**/*"],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8hgxbouhiiug`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
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
