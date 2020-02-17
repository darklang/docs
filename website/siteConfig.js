/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// const path = require('path');

const siteConfig = {
  // customDocsPath: path.basename(__dirname) + '/docs',
  title: 'Dark Documentation', // Title for the website.
  tagline: 'Dark Documentation',
  docsUrl: 'docs',

  // Used for publishing and more
  organizationName: 'darklang',
  projectName: 'docs',
  url: 'https://darklang.github.io', // Website URL
  baseUrl: '/docs/', // Base URL for the project. For projects hosted on GitHub pages, it follows the format "/projectName/"

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#212121',
    secondaryColor: '#5f3e6b',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

 algolia: {
  apiKey: '1e1c6adb6b62f53c456dc70e833c2c26',
  indexName: 'darklang',
  algoliaOptions: {} // Optional, if provided by Algolia
},

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Dark`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },


  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images for the site when shared.
  // ogImage: 'img/undraw_online.svg',
  // twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  
};

module.exports = siteConfig;
