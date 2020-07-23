module.exports = function (context, options) {
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const { savvy } = themeConfig || {};

  if (!savvy) {
    throw new Error(
      `You need to specify the 'savvy' object in 'themeConfig' with an 'apiKey' field`,
    );
  }

  var apiKey = savvy.apiKey;
  if (!apiKey) {
    throw new Error("You must specify the `apiKey` field for `savvy`.");
  }

  return {
    name: "savvy",
    injectHtmlTags: function () {
      return {
        headTags: [
          {
            tagName: "link",
            attributes: {
              rel: "preconnect",
              href: "https://cdn.heysavvy.com",
            },
          },
          {
            tagName: "link",
            attributes: {
              rel: "dns-prefetch",
              href: "https://cdn.heysavvy.com",
            },
          },
          {
            attributes: {
              src: "https://cdn.heysavvy.com/wc/savvy.min.js",
            },
            tagName: "script",
          },
        ],
        postBodyTags: `<savvy-smart-form id=${id}></savvy-smart-form>`,
      };
    },
  };
};
