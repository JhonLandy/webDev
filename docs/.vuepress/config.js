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
         // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/JhonLandy/webDev',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助小弟弟改善此页面！',
        sidebar: [
            {
                title: 'chengING 学习笔记',
                collapsable: false,
            },
            {
                title: '浏览器',
                sidebarDepth: 1,
                children: [
                    {
                        title: '性能指标',
                        path: '/sidebar/browers/性能指标.md',
                        collapsable: false
                    }
                ]
            },
            {
                title: 'CSS',   // 必要的
                // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                // collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  {
                    title: '每日一学',
                    path: '/sidebar/css/每日一学/每日一学.md',
                    collapsable: false
                  }
                ]
            },
            {
                title: 'JavaScript',   // 必要的
                // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                // collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  {
                    title: 'async/await-Promise语法糖',
                    path: '/sidebar/javascript/async-await.md',
                    collapsable: false
                  },
                  {
                    title: '深入浅出的eventLoop',
                    path: '/sidebar/javascript/eventLoop.md',
                    collapsable: false
                  }
                ]
            },
            {
                title: 'Git',
                sidebarDepth: 1,
                children: [
                    {
                        title: 'origin与upstream的区别',
                        path: '/sidebar/git/OriginAndUpstream.md'
                    }
                ]
            },
            {
                title: 'React',
                sidebarDepth: 2,
                children: [
                    {
                        title: '执行流程',
                        path: '/sidebar/react/process.md'
                    }
                ]
            }, 
            {
                title: 'Vue',
                sidebarDepth: 2,
                children: [
                    {
                        title: 'Vue2.0'
                    },
                    {
                        title: 'Vue3.0',
                        children: [
                            {
                                title: 'CompositionAPI小试牛刀',
                                path: '/sidebar/vue/vue3.0/CompositionAPI小试牛刀.md'
                            },
                            {
                                title: 'Vue3采坑笔记',
                                path: '/sidebar/vue/vue3.0/Vue3采坑笔记.md',
                            }
                        ]
                    }
                ]
            }, 
            {
                title: 'VueRouter原理解析'
            },
            {
                title: 'webpack',
                sidebarDepth: 1,
                children: [
                    {
                        title: 'webpack性能优化',
                        path: '/sidebar/webpack/performence.md'
                    }
                ]
            },
            {
                title: 'jest',
                sidebarDepth: 1,
                children: [
                    {
                        title: '测试用例',
                        path: '/sidebar/jest/测试用例.md'
                    }
                ]
            },
            {
                title: '源计划',
                path: '/sidebar/review/'
            },
            {
                title: '前端管理学习',
                path: '/sidebar/manager/前端管理.md'
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
                                text: '对象、类面向对象编程',
                                ariaLabel: '对象、类面向对象编程',
                                link: '/nav/web/javascript/object/index.md'
                            },
                            {
                                text: '期约与异步函数',
                                ariaLabel: '期约与异步函数',
                                link: '/nav/web/javascript/promise/index.md'
                            },
                            {
                                text: '动画与Canvas图形',
                                ariaLabel: '动画与Canvas图形',
                                link: '/nav/web/javascript/canvas/index.md'
                            },
                            {
                                text: '表单脚本',
                                ariaLabel: '表单脚本',
                                link: '/nav/web/javascript/form/index.md'
                            },
                            {
                                text: '网络请求与远程资源',
                                ariaLabel: '网络请求与远程资源',
                                link: '/nav/web/javascript/网络请求与远程资源.md'
                            },
                            {
                                text: '工作者线程',
                                ariaLabel: '工作者线程',
                                link: '/nav/web/javascript/工作者线程.md'
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
                    },
                    {
                        text: '查找',
                        ariaLabel: '查找',
                        link: '/nav/code/search/index.md'
                    },
                    {
                        text: '图',
                        ariaLabel: '图',
                        link: '/nav/code/picture/index.md'
                    },
                    {
                        text: '字符串',
                        ariaLabel: '字符串',
                        link: '/nav/code/string/index.md'
                    }
                ]
            },
            {
                text: 'github',
                ariaLabel: 'github',
                link: 'https://github.com/JhonLandy'
            }
        ],
    },

    chainWebpack (config, isServer) {
        config.module
            .rule('images')
                .use('url-loader')
                    .loader('url-loader')
                    .tap(options => {
                        options.esModule = false;
                        options.limit = 10000
                        return options
                    })
                .end()
                .when(process.env.NODE_ENV === 'production', rule => {
                    rule.use('image-webpack-loader')//https://github.com/tcoopman/image-webpack-loader
                        .loader('image-webpack-loader')
                        .options({
                            mozjpeg: {
                                progressive: true,//默认为true
                                // quality: 75//图片质量（大小）可以不用配置，会默认按照一定比例智能压缩
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        })
                })
                
                // .use('img-loader')
                //     .loader('img-loader')
                //     .options({
                //         plugins: [
                //             require('imagemin-gifsicle')({
                //                 optimizationLevel: 3
                //             }),
                //             require('imagemin-mozjpeg')({
                //                 quality: 60,
                //                 progressive: true,
                //             }),
                //             require('imagemin-pngquant')({
                //                 quality: [0.3, 0.5],
                //                 speed: 2
                //             }),
                //             require('imagemin-svgo')({
                //             plugins: [
                //                 { removeTitle: true },
                //                 { convertPathData: false },
                //                 {removeViewBox: false}
                //             ]
                //             }),
                //             // require('imagemin-optipng')({
                //             //     optimizationLevel: 7
                //             // })
                //         ]
                //     })
                // .end()//图片压缩报错，不知道是不是node版本问题
            
        config
            .when(!isServer, _config => {
                _config.module
                    .rule('babel')
                        .test(/\.js$/)
                        .use('babel')
                            .loader('babel-loader')
            })
            

        config
            .resolve
            .alias
            .set('@images', process.cwd() + '/docs/.vuepress/public/images')

        config
            .when(process.env.NODE_ENV === 'production' && !isServer, _config => {
                _config.optimization //这种不管用
                    .concatenateModules(true)
                    .flagIncludedChunks(true)
                    .mergeDuplicateChunks(true)
                    .minimize(true)//告诉webpack使用TerserPlugin或指定的插件最小化捆绑包optimization.minimizer；使用TerserPlugin则需要下载TerserPlugin
                    .occurrenceOrder(true)
                    .providedExports(true)
                    .removeAvailableModules(true)
                    .removeEmptyChunks(true)
                    .sideEffects(true)
                    .runtimeChunk('single')
                    .splitChunks({//抽离公用模块，不能使用
                        chunks: 'all',
                        minSize: 20000,
                        maxSize: 0,
                        minChunks: 1,
                        maxAsyncRequests: 30,
                        maxInitialRequests: 30,
                        automaticNameDelimiter: '~',
                        enforceSizeThreshold: 50000,
                        cacheGroups: {
                            elementUI: {
                                name: 'chunk-elementUI', // split elementUI into a single package
                                priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                            },
                            styles: {//需要下载MiniCssExtractPlugin
                                name: 'styles',
                                test: /\.css$/,
                                chunks: 'all',
                                enforce: true,
                                priority: 20,
                            },
                            libs: {
                                name: 'chunk-libs',
                                test: /[\\/]node_modules[\\/]/,
                                priority: 10,
                                chunks: 'initial' // only package third parties that are initially dependent
                            },
                        }
                    })
                    .usedExports(true)//tree shaking
                })
        

    },
   
    plugins: [
        '@vuepress/back-to-top',
        ['@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true
            }
        ],
        ['@vssue/vuepress-plugin-vssue', 
            {
                platform: 'github-v4', //v3的platform是github，v4的是github-v4
                locale: 'zh', //语言
                // 其他的 Vssue 配置
                owner: 'JhonLandy', //github账户名
                repo: 'webDev', //github一个项目的名称
                clientId: '4744107b9edc61935f13',//注册的Client ID
                clientSecret: '5c9ee56d8d18f5abe0d520ec1bdf91d86ce14ec4',//注册的Client Secret
                autoCreateIssue:true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
            }
        ]
    ]
}
