const path = require('path')
module.exports = {
    base: process.env.BASE_URL,
    title: 'Hello~,欢迎来到chenglang的博客',
    description: '技术源于生活',
    head: [
        ['link', { rel: 'icon', href:'/favicon.ico'}],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
	],
    themeConfig: {
        say: 'I am Yuki' ,
        lastUpdated: 'Last Updated',
        nav: [
            { text: '首页', link: '/index' },
            {
                text: '前端',
                ariaLabel: 'Menu',
                items: [
                    { 
                        text: 'Javascript',
                        ariaLabel: 'Javascript', 
                        items: [{
                            text: 'ES6',
                            ariaLabel: 'ES6',
                            link: '/web/javascript/ES6/index.md'
                        }]
                    },
                    { 
                        text: 'Css',
                        ariaLabel: 'Css',
                        items: [{
                            text: '布局',
                            ariaLabel: '布局',
                            link: '/web/css/layout/index.md'
                        }]
                    }
                ]
            },
            {
                text: '部署',
                ariaLabel: 'Deployment',
                items: [
                    { 
                        text: 'docker', 
                        ariaLabel: 'docker',
                        items: [{
                            text: '基本命令',
                            ariaLabel: 'base',
                            link: '/deployment/docker/base/index.md'
                        }] 
                    },
                ]
            }
        ]
    },
    pages: [
        {
            title: "javascript笔记",
            path: 'web/javascript/javascript.md',
            frontmatter: {
                sidebar: 'auto'
            }
        }
    ],
    chainWebpack (config, isServer) {
        config
            .module
            .rule('images')
            .use('url-loader')
                .loader('url-loader')
                .tap(options => {
                    options.esModule = false;
                    options.limit = 3 * 1024
                    return options
                })
        .end()
        config
            .module
            .rule('babel')
                .test(/\.js$/)
                .use('babel-loader')
                    .loader('babel-loader')
        .end()
        config
            .resolve
            .alias
            .set('@images', process.cwd() + '/docs/.vuepress/public/images')
    },
    plugins: [
        {
            '@vuepress/back-to-top': true,
            '@vuepress/pwa': {
                serviceWorker: true,
                updatePopup: {
                    message: "有新的内容更新",
                    buttonText: "刷新"
                }
            }
        }
    ]
}
