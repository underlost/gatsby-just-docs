const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://gatsbyjustdocs.underlost.net',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: '/',
    title: 'Gatsby Just Docs',
    tweetText: 'Gatsby Just Docs',
    search: {
      enabled: true,
      indexName: 'docs_boredable',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [],
    collapsedNav: [],
    links: [{ text: 'Visit underlost.net', link: 'https://underlost.net' }],
    frontline: false,
    ignoreIndex: false,
  },
  siteMetadata: {
    title: 'Gatsby Just Docs',
    description: 'Documentation built with MDX. Powering docs.boredable.com ',
    ogImage: null,
    docsLocation: 'https://github.com/underlost/gatsby-just-the-docs/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Just Docs',
      short_name: 'gatsbyjustdocs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
