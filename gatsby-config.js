/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-kentico-cloud`,
      options: {
        deliveryClientConfig: { // Configuration object
          projectId: `6bf2c182-c337-010c-2383-ac4eddf0e261`,
          enableSecuredMode: true,
          securedApiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogImE1ZjQ1NTdkN2U1ZDRhMDE4Y2YxOTMyZGIwM2VhODExIiwNCiAgImlhdCI6ICIxNTY5NTgyMjUwIiwNCiAgImV4cCI6ICIxOTE1MTgyMjUwIiwNCiAgInByb2plY3RfaWQiOiAiNmJmMmMxODJjMzM3MDEwYzIzODNhYzRlZGRmMGUyNjEiLA0KICAidmVyIjogIjEuMC4wIiwNCiAgImF1ZCI6ICJkZWxpdmVyLmtlbnRpY29jbG91ZC5jb20iDQp9.fqyqyx-NbyB8lrAX6uJhj1E-MJ5mfE8mI31wE37lFyA',
          typeResolvers: [],
          enableAdvancedLogging: true,
        },
        languageCodenames: [ // example configuration
          `default`, // default language
        ]
      }
    }
  ]
}