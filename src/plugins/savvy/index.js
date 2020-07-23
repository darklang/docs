module.exports = function (context, options) {
  var id = options.id;

  return {
    name: "savvy-analytics-snippet",
    injectHtmlTags: function () {
      return {
        headTags: [
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
