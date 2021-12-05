module.exports = {
  title: "제이의 기록보관소",
  description: "공부한 기록을 남기는 공간",
  dest: "./dist",
  base: "/jay-templar-archives/",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    // ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#F7E85D" }],
    // ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    // [
    //   "meta",
    //   { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    // ],
    // ["link", { rel: "apple-touch-icon", href: "/images/icons/152.png" }],
    [
      "link",
      { rel: "mask-icon", href: "/images/icons/logo.svg", color: "#F7E85D" },
    ],
    // [
    //   "meta",
    //   { name: "msapplication-TileImage", content: "/images/icons/144.png" },
    // ],
    // ["meta", { name: "msapplication-TileColor", content: "#F7E85D" }],
  ],
  themeConfig: {
    sidebar: [
      "/guide",
      {
        title: "JavaScript",
        collapsable: false,
        // children: ["/url1", "/url2", "/url3"],
      },
    ],
    nav: [
      {
        text: "📖  Guide",
        link: "/guide",
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
        // link: "http://dongjay00.kdt-gitlab.elice.io/donghoon-homepage/",
      },
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@img": "./images",
      },
    },
  },
  plugins: {
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: {
        message: "새 글이 등록되었습니다. 새로고침 버튼을 눌러주세요 🔔",
        buttonText: "새로고침",
      },
    },
    // "@vuepress/google-analytics": {
    //   ga: "UA-87965695-1",
    // },
  },
};
