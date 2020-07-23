module.exports = function (context) {
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const { heapio } = themeConfig || {};

  if (!heapio) {
    throw new Error(
      `You need to specify 'heapio' object in 'themeConfig' with 'apiKey' field`,
    );
  }

  var apiKey = heapio.apiKey;
  if (!apiKey) {
    throw new Error("You must specify the `apiKey` field for `heapio`.");
  }

  if (process.env.NODE_ENV !== "production") {
    const devApiKey = heapio.devApiKey;
    if (!devApiKey) {
      throw new Error(
        "You are not in production so you must specify the `devApiKey` field for `heapio`.",
      );
    }
    apiKey = devApiKey;
  }
  return {
    name: "heap-analytics",

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "link",
            attributes: {
              rel: "preconnect",
              href: "https://cdn.heapanalytics.com",
            },
          },
          {
            tagName: "link",
            attributes: {
              rel: "dns-prefetch",
              href: "https://cdn.heapanalytics.com",
            },
          },
          {
            tagName: "script",
            innerHTML: `
              window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};   
              heap.load(${apiKey});
            `,
          },
        ],
      };
    },
  };
};
