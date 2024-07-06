/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Developers & Coders Club Blog ',
  author: 'Developers & Coders Club',
  headerTitle: 'DCCBlog',
  description: 'This is the official blog website of Developers & Coders Club here we share everything from tech trends to evergreen tech concepts. This website is focussed on people who are just getting started in tech',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://blog.dccnita.in/',
  siteRepo: 'https://github.com/GawdOfGithub/dcc-blog',
  sitelogo: '/static/images/logo3.png',
  socialBanner: '/static/images/twitter-card.png',
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'dccnita@gmail.com',
  github: 'https://github.com/Developers-and-Coders-Club',
  x: 'https://twitter.com/dccnita?t=wa7G9AW_mHU1jYi5Mfml-Q&s=08',
  // twitter: 'https://twitter.com/Twitter',
  facebook: 'https://twitter.com/dccnita?t=wa7G9AW_mHU1jYi5Mfml-Q&s=08',
  youtube: 'https://youtube.com/@dccnita?si=LnBW1j6fGnGuwE-9',
  linkedin: 'https://www.linkedin.com/company/dccnita/',
  threads: 'https://twitter.com/dccnita?t=wa7G9AW_mHU1jYi5Mfml-Q&s=08',
  instagram: 'https://www.instagram.com/dccnita/',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. DCCBlog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    provider: 'mailchimp',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
    
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      
      metadata: '1',
      
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
