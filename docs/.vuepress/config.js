const { link } = require('fs');
const path = require('path')
module.exports = {
    base: process.env.BASE_URL,
    title: '欢迎来chenglNG的博客',
    description: '英雄不问出处, 流氓不看岁月',
    shouldPrefetch: (file, type) => type === 'image',
    head: [
        ['link', { rel: 'icon', href:'/favicon.ico'}],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
	],
    themeConfig: {
        say: 'I am Yuki' ,
        nav: [
            { text: '首页', link: '/index' },
            {
                text: '前端',
                ariaLabel: 'Menu',
                items: [
                    {
                        text: 'Javascript',
                        ariaLabel: 'Javascript',
                        items: [
                            {
                                text: 'ES6',
                                ariaLabel: 'ES6',
                                link: '/web/javascript/ES6/index.md'
                            },
                            {
                                text: 'ES7',
                                ariaLabel: 'ES7',
                                link: '/web/javascript/ES7/async.md'
                            }
                        ]
                    },
                    {
                        text: 'Typescript',
                        ariaLabel: 'Typescript',
                        link: '/web/typescript/index.md'
                    },
                    {
                        text: 'Css',
                        ariaLabel: 'Css',
                        items: [
                            {
                                text: '布局',
                                ariaLabel: '布局',
                                link: '/web/css/layout/index.md'
                            },
                            {
                                text: '动画',
                                ariaLabel: '布局',
                                link: '/web/css/animation/index.md'
                            }
                        ]
                    },
                    {
                        text: 'Vue',
                        ariaLabel: 'Vue',
                        items: [{
                            text: '基本使用',
                            ariaLabel: '基本使用',
                            link: '/web/vue/api/index.md'
                        }]
                    },
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
                    {
                        text: 'Git',
                        ariaLabel: 'Git',
                        items: [
                            {
                                text: '常用命令',
                                ariaLabel: 'command',
                                link: '/deployment/git/command/index.md'
                            },
                            {
                                text: '提交规范',
                                ariaLabel: 'standard',
                                link: '/deployment/git/standard/index.md'
                            },
                            {
                                text: 'SSH',
                                ariaLabel: 'SSH',
                                link: '/deployment/git/ssh/index.md'
                            }
                        ]
                    },
                    {
                        text: 'CI/CD',
                        ariaLabel: 'CI/CD',
                        link: '/deployment/CICD/index.md'
                    }
                ]
            },
            // {
            //     text: '前端早早聊',
            //     ariaLabel: '前端早早聊',
            //     items: [
            //         {
            //             text: '十四届',
            //             link: '/fronttalk/fourteen/index.md'
            //         }
            //     ]
            // },
            {
                text: '算法与数据结构',
                ariaLabel: 'code',
                items: [
                    {
                        text: '排序',
                        ariaLabel: '排序',
                        items: [
                            {
                                text: '选择排序',
                                ariaLabel: '选择排序',
                                link: '/code/sort/选择排序.html'
                            },
                            {
                                text: '插入排序',
                                ariaLabel: '插入排序',
                                link: '/code/sort/插入排序.html'
                            },
                            {
                                text: '希尔排序',
                                ariaLabel: '希尔排序',
                                link: '/code/sort/希尔排序.html'
                            },
                            {
                                text: '归并排序',
                                ariaLabel: '归并排序',
                                link: '/code/sort/归并排序.html'
                            },
                            {
                                text: '快速排序',
                                ariaLabel: '快速排序',
                                link: '/code/sort/快速排序.html'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'github',
                ariaLabel: 'github',
                link: 'https://github.com/JhonLandy'
            }
        ],

        sidebarItems: [
            [],[]
        ]
    },
   
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
            // .use('img-loader')
            //     .loader('img-loader')
            //     .options({
            //         pngquant: {
            //             quality: 80
            //         },
                    // plugins: [
                    //     require('imagemin-optipng')(),
                    // ]
                // })
            
        config
            .module
            .rule('babel')
                .test(/\.js$/)
                .use('babel')
                    .loader('babel-loader')
        .end()

        config
            .resolve
            .alias
            .set('@images', process.cwd() + '/docs/.vuepress/public/images')

    },
    plugins: [
        '@vuepress/back-to-top',
        ['@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true
            }
        ]
    ]
}
