import cheerio from "cheerio";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  hooks: {
    'render:route': (url, result) => {
       const ara= cheerio.load(result.html,{decodeEntities: false});
       ara(`meta`).removeAttr('data-n-head');
       result.html = ara.html()
     },
     generate: {
      page(page) {
        const cheerio = require("cheerio");
        const $ = cheerio.load(page.html, { decodeEntities: false });
 
        const attrs = [
          "data-n-head-ssr",
          "data-n-head",
          "data-hid",
          "data-vue-ssr-id",
          "data-server-rendered"
        ];
 
        attrs.forEach(value => {
          $("*[" + value + "]").removeAttr(value);
        });
        
        page.html = $.html();
      }
    }
   },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "上海疆通科技有限公司",
    meta: [
      { charset: "utf-8" },
      { name:"测试"},
      { name: "baidu-site-verification", content: "codeva-PT3yV321fk" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

    script: [
      {
        src: "https://mininiu.top/webim/webim.js?id=17044840710842354630",
        id: "xim_script",
        charset: "utf-8",
        type: "text/javascript",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  target: "static",
  ssr: false,
  generate: {
    dir: "docs",
  },
};
