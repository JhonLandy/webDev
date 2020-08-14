module.exports = {
    title: 'Hello~,欢迎来到chenglang的博客',
    description: '技术源于生活',
    head: [
        ['link', { rel: 'icon', href:'/favicon.ico'}],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
	],
    themeConfig: {
        say: 'I am Yuki' ,
        logo: '/images/head/mine.png',
        lastUpdated: 'Last Updated',
        nav: [
            { text: '首页', link: '/index' },
            {
                text: '前端',
                ariaLabel: 'Menu',
                items: [
                    { 
                        text: 'javascipt', 
                        link: '/web/javascript/javascript.md' ,
                        items: [
                            {
                                text: 'es6'
                            }
                        ]
                    },
                    { text: 'css', link: '/language/japanese/' }
                ]
            },
            {
                text: '部署',
                ariaLabel: 'Deployment',
                items: [
                    { text: 'docker', link: '/deployment/docker/index.md' },
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
            },
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
				return options;
        })
    },
    plugins: {
        '@vuepress/pwa':{
            serviceWorker: true,
            updatePopup: true
        }
    }
    // plugins: ['@vuepress/back-to-top']
}
