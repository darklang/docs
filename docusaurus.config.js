const path = require("path");
module.exports = {
  title: "Dark Documentation",
  tagline: "Dark Documentation",
  url: "https://docs.darklang.com", // Website URL
  baseUrl: "/", // Base URL for the project. For projects hosted on GitHub pages, it follows the format "/projectName/"
  favicon: "img/favicon.ico",
  organizationName: "darklang", // Usually your GitHub org/user name.
  trailingSlash: false, // See https://docusaurus.io/docs/deployment#deploying-to-github-pages
  projectName: "docs", // Usually your repo name.
  plugins: [
    path.resolve(__dirname, "src/plugins/heap-analytics"),
    path.resolve(__dirname, "src/plugins/savvy"),
    [
      "@docusaurus/plugin-client-redirects",
      { redirects: [{ to: "/reference/changelog", from: "/changelog" }] },
    ],
  ],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  themeConfig: {
    image: "img/favicon.ico",
    navbar: {
      title: "Dark",
      logo: {
        alt: "Dark logo",
        src: "img/favicon.ico",
        href: "https://darklang.com",
      },
      items: [
        {
          to: "/introduction",
          activeBasePath: "docs",
          label: "Documentation",
          position: "right",
        },
        {
          to: "tutorials/first-dark-application",
          label: "Tutorial",
          position: "right",
        },
        {
          to: "contributing/getting-started",
          label: "Contributing",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Learning",
          items: [
            {
              label: "Demo Video",
              to: "https://darklang.com/launch/demo-video",
            },
            {
              label: "Tutorial Videos",
              to: "https://youtube.com/c/Darklang/videos",
            },
            {
              label: "Docs",
              to: "https://darklang.com/docs",
            },
            {
              label: "Tutorial",
              to: "tutorials/first-dark-application",
            },
            {
              label: "Walk-throughs",
              to: "category/walk-throughs",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "Company",
              to: "https://darklang.com/",
            },
            {
              label: "Blog",
              to: "https://blog.darklang.com",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Community Slack",
              to: "https://darklang.com/slack-invite",
            },
            {
              label: "Dark Repo",
              to: "https://github.com/darklang/dark",
            },
            {
              label: "Docs Repo",
              to: "https://github.com/darklang/docs",
            },
            {
              label: "Contributor Docs",
              to: "/contributing/getting-started",
            },
            {
              label: "Code of Conduct",
              to: "https://darklang.com/code-of-conduct",
            },
          ],
        },
        {
          title: "Product",
          items: [
            {
              label: "Sign in",
              to: "https://darklang.com/login",
            },
            {
              label: "Sign up",
              to: "https://darklang.com/signup",
            },
            {
              label: "Desktop Client",
              to: "https://darklang.com/desktop-client",
            },
            {
              label: "Mailing List",
              to: "https://darklang.com/mailing-list",
            },
            {
              label: "Changelog",
              to: "reference/changelog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dark Inc. Built with Docusaurus.`,
    },
    // "v2" heapanalytics.com account
    heapio: {
      apiKey: 477722926,
      devApiKey: 2080145903,
    },
    savvy: {
      apiKey: "6HBmUjmI12nCuopyvB0B",
    },
    algolia: {
      // this is a docsearch account, which is run by algolia:
      // https://docsearch.algolia.com. Config is at
      // https://github.com/algolia/docsearch-configs/blob/master/configs/darklang.json
      appId: "QFOZBC0VVL",
      apiKey: "715121cc838a8c3c4ea54324456bd5f9",
      indexName: "darklang",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          sidebarPath: require.resolve("./sidebars.json"),
          routeBasePath: "/",
          editUrl: "https://github.com/darklang/docs/edit/main/",
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
        },
        googleAnalytics: {
          trackingID: "UA-159199190-1",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
