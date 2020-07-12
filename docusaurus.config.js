module.exports = {
  title: "Dark Documentation",
  tagline: "Dark Documentation",
  url: "https://darklang.github.io", // Website URL
  baseUrl: "/docs/", // Base URL for the project. For projects hosted on GitHub pages, it follows the format "/projectName/"
  favicon: "img/favicon.ico",
  organizationName: "darklang", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  themeConfig: {
    navbar: {
      title: "Dark",
      logo: {
        alt: "Dark logo",
        src: "img/favicon.ico",
        href: "https://darklang.com",
      },
      links: [
        {
          to: "/introduction",
          activeBasePath: "docs",
          label: "Documentation",
          position: "right",
        },
        {
          to: "tutorials/tutorial-intro",
          label: "Tutorials & Samples",
          position: "right",
        },
        {
          to: "slack-apps/slack-intro",
          label: "Building Slack Apps",
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
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dark Inc. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: "1e1c6adb6b62f53c456dc70e833c2c26",
      indexName: "darklang",
      algoliaOptions: {},
    },
    googleAnalytics: {
      trackingID: "UA-159199190-1",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          homePageId: "/docs/introduction",
          sidebarPath: require.resolve("./sidebars.json"),
          editUrl: "https://github.com/darklang/docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
