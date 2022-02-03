const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "제이의 기록보관소",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#F7E85D" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "mask-icon", href: "/images/icons/logo.svg", color: "#F7E85D" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "📖  Guide",
        link: "/guide/",
      },
      {
        text: "📌  Blog",
        link: "https://blog.naver.com/dongjay00",
      },
      {
        text: "💻  Github",
        link: "https://github.com/dongjay00",
      },
      {
        text: "📝  Portfolio",
        link: "https://general-viola-ee5.notion.site/Donghoon-Lee-5bd1c8b6cd9c40efbc94f61d4cff3212",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "links"],
        },
      ],
      "/react/": [
        {
          title: "React",
          collapsable: false,
          children: [""],
        },
      ],
      "/git/": [
        {
          title: "Git",
          collapsable: false,
          children: ["", "basic_command"],
        },
      ],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@img": "./images",
      },
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
