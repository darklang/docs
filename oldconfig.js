module.exports = {
  title: "Dark Documentation",
  tagline: "Dark Documentation",
  url: "https://darklang.github.io", // Website URL
  baseUrl: "/docs/", // Base URL for the project. For projects hosted on GitHub pages, it follows the format "/projectName/"
  favicon: "img/favicon.ico",
  organizationName: "darklang",
  projectName: "docs",

  /* Colors for website */
  // TODO: migrate to v2: https://v2.docusaurus.io/docs/migrating-from-v1-to-v2/#colors
  // colors: {
  //   primaryColor: "#212121",
  //   secondaryColor: "#5f3e6b",
  // },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          sidebarPath: require.resolve("./sidebars.json"),
          routeBasePath: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
      },
    ],
  ],

  // Add custom scripts here that would be placed in <script> tags.
  // scripts: ["https://buttons.github.io/buttons.js"],

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
