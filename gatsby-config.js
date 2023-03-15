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
        'help-suite-theme-fonts',
        'help-suite-api-mock',
        'help-suite-plugin-tables',
        'help-suite-plugin-auth',
        'help-suite-theme-config',
    ],
}