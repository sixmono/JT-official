
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  hooks: {
    generate: {
      page(page) {
        const cheerio = require("cheerio");
        const $ = cheerio.load(page.html, { decodeEntities: false });
 
        const attrs = [
          "data-n-head-ssr",
          "data-n-head",
          "data-hid",
          "data-vue-ssr-id",
          "data-server-rendered",
          "data-h-head='1'"
        ];
 
        attrs.forEach(value => {
          $("*[" + value + "]").removeAttr(value);
        });
        
        page.html = $.html();
      }
    }
  },
  render:{
    route(url, result){
      result.html = result.html.replace(/data-n-head=\"1\"/gi, '')
    }
 },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "上海疆通科技有限公司",
    meta: [
      { charset: "utf-8" },
      { name: "baidu-site-verification", content:"codeva-PT3yV321fk"},
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    
    script:[
      {
        src:"https://mininiu.top/webim/webim.js?id=17044840710842354630",
        id:"xim_script",
        charset:"utf-8",
        type:"text/javascript"
      }
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
