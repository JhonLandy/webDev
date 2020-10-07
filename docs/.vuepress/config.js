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
        say: 'I am Chenglang',
        sidebar: [
            {
                title: '学习笔记',
                collapsable: false,
                sidebarDepth: 0
            },
            {
                title: 'JavaScript',   // 必要的
                // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                // collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  {
                    title: 'async/await - Promise语法糖',
                    path: 'sidebar/javascript/async-await.md',
                    collapsable: false
                  },
                  {
                    title: '深入浅出的eventLoop',
                    path: 'sidebar/javascript/eventLoop.md',
                    collapsable: false
                  }
                ]
            }, 
            {
                title: 'Vue',
            }, 
            {
                title: 'VueRouter原理解析'
            }
        ],
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
                                link: '/nav/web/javascript/ES6/index.md'
                            },
                            {
                                text: 'ES7',
                                ariaLabel: 'ES7',
                                link: '/nav/web/javascript/ES7/async.md'
                            }
                        ]
                    },
                    {
                        text: 'Typescript',
                        ariaLabel: 'Typescript',
                        link: '/nav/web/typescript/index.md'
                    },
                    {
                        text: 'Css',
                        ariaLabel: 'Css',
                        items: [
                            {
                                text: '布局',
                                ariaLabel: '布局',
                                link: '/nav/web/css/layout/index.md'
                            },
                            {
                                text: '动画',
                                ariaLabel: '布局',
                                link: '/nav/web/css/animation/index.md'
                            }
                        ]
                    },
                    {
                        text: 'Vue',
                        ariaLabel: 'Vue',
                        items: [{
                            text: '基本使用',
                            ariaLabel: '基本使用',
                            link: '/nav/web/vue/api/index.md'
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
                            link: '/nav/deployment/docker/base/index.md'
                        }]
                    },
                    {
                        text: 'Git',
                        ariaLabel: 'Git',
                        items: [
                            {
                                text: '常用命令',
                                ariaLabel: 'command',
                                link: '/nav/deployment/git/command/index.md'
                            },
                            {
                                text: '提交规范',
                                ariaLabel: 'standard',
                                link: '/nav/deployment/git/standard/index.md'
                            },
                            {
                                text: 'SSH',
                                ariaLabel: 'SSH',
                                link: '/nav/deployment/git/ssh/index.md'
                            }
                        ]
                    },
                    {
                        text: 'CI/CD',
                        ariaLabel: 'CI/CD',
                        link: '/nav/deployment/CICD/index.md'
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
                                link: '/nav/code/sort/选择排序.html'
                            },
                            {
                                text: '插入排序',
                                ariaLabel: '插入排序',
                                link: '/nav/code/sort/插入排序.html'
                            },
                            {
                                text: '希尔排序',
                                ariaLabel: '希尔排序',
                                link: '/nav/code/sort/希尔排序.html'
                            },
                            {
                                text: '归并排序',
                                ariaLabel: '归并排序',
                                link: '/nav/code/sort/归并排序.html'
                            },
                            {
                                text: '快速排序',
                                ariaLabel: '快速排序',
                                link: '/nav/code/sort/快速排序.html'
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
