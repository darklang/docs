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
        ],
        postBodyTags: `
        <script async="true" defer="true"
           src="https://cdn.heysavvy.com/wc/savvy.min.js">
        </script>
        <savvy-smart-form id=${apiKey}></savvy-smart-form>`,
      };
    },
  };
};
