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
              label: "Tutorials & Samples",
              to: "https://darklang.com/docs/tutorials",
            },
            {
              label: "Building Slack Apps",
              to: "https://darklang.com/docs/slack-apps",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "Company",
              to: "https://darklang.com/about",
            },
            {
              label: "Dev Blog",
              to: "https://dev.to/darklang",
            },
            {
              label: "Corp Blog",
              to: "https://medium.com/darklang",
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
          // TODO: re-add these in the footer
          // editUrl: "https://github.com/darklang/docs/edit/main/",
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
