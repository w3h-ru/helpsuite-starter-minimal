/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve:'gatsby-source-filesystem',
            options: {
                name: `tables`,
                path: `${__dirname}/src/data/tables/`,
            },
        },
        'help-suite-theme-config',
        'help-suite-theme-fonts',
        'help-suite-api-mock'
    ],
}