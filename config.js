const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://gatsbyjustdocs.underlost.net',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/static/images/favicon.png',
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
    description: 'Documentation built with MDX.',
    ogImage: '/images/ogImage.jpg',
    docsLocation: 'https://github.com/underlost/gatsby-just-the-docs/tree/master/content',
    favicon: '/images/favicon.png',
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
          src: 'static/images/favicon.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
