module.exports = {
  title: 'por-ui', // 设置网站标题
  description: 'ui 库', //描述
  dest: './build', // 设置输出目录
  port: 1234, //端口
  markdown: {
    anchor: { permalink: false },
  },
  base: "./",
  // base: "/",
  themeConfig: { //主题配置
    nav: [{
        text: '主页',
        link: '/'
      }, // 导航条
    ],
    // 为以下路由添加侧边栏
    sidebar: [{
        title: '介绍',
        collapsable: true, // 可折叠
        children: ["/introduce/"]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          "/components/button",
          "/components/input",
          "/components/tabs",
          "/components/toast",
          "/components/popover",
          "/components/layout",
        ]
      }
    ]
  }
}