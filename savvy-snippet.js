module.exports = function (context, options) {
  var id = options.id;
  var url = options.url;
  return {
    name: "savvy-analytics-snippet",
    injectHtmlTags: function () {
      return {
        headTags: [
          {
            attributes: {
              src: url || "https://cdn.heysavvy.com/wc/savvy.min.js",
            },
            tagName: "script",
          },
        ],
        postBodyTags: `<savvy-smart-form id=${id}></savvy-smart-form>`,
      };
    },
  };
};
