---
  title: Webpack性能优化
---

<big>作者： 枸杞</big>

<big>日期：2020年11月11号</big>

# Webpack性能优化

## Css 的处理

### 对Less、Sass 做处理

```bas
 npm install -D less less-loader (sass同理)
```

```jso
{
 test: /\.less$/,
 use: ["style-loader", "css-loader", "less-loader"]
}
```

### 使⽤postcss为样式⾃动补⻬浏览器前缀

```bash
npm i postcss-loader autoprefixer -D
```

```js
//.postcssrc.js
{
    plugins: [
         require("autoprefixer")({
         	overrideBrowserslist: ["last 2 versions", ">1%"]
         })
 	]
}
//webpack.config.js
{
     test: /\.less$/,
     include: path.resolve(__dirname, "./src"),
     use: [
     "style-loader",
     {
         loader: "css-loader",
         options: {}
     },
     "less-loader",
     "postcss-loader"
     ]
},
```

> 如果不做抽取配置，我们的 css 是直接打包进 js ⾥⾯的，我们希望能单独⽣成 css ⽂件。 因为单独⽣ 成css,css可以和js并⾏下载，提⾼⻚⾯加载效率

### 抽离css

```bash
npm install mini-css-extract-plugin -D
```

```js
new MiniCssExtractPlugin({//放在HtmlWebpackPlugin后面
    "title": 'demo',
    "filename": 'css/[name].[hash].css',
    "chunkFilename": 'css/[id]-[contenthash].css',
})
```



### 压缩

```bash
npm i -D optimize-css-assets-webpack-plugin cssnano
```

```JS
new OptimizeCSSAssetsPlugin({
     cssProcessor: require("cssnano"), //引⼊cssnano配置压缩选项
         cssProcessorOptions: {
         discardComments: { removeAll: true }
     }
})
```

### Tree Shaking

> webpack2.x开始⽀持 tree shaking概念，顾名思义，"摇树"，清除⽆⽤ css,js(Dead Code)
>
> Dead Code ⼀般具有以下⼏个特征 代码不会被执⾏: 
>
>  - 不可到达 
>  - 代码执⾏的结果不会被⽤到 
>  - 死变量（只写不读）

```BASH
npm i glob-all purify-css purifycss-webpack --save-dev
```

```JS
const PurifyCSS = require('purifycss-webpack')
const glob = require('glob-all')
plugins:[
     // 清除⽆⽤ css
     new PurifyCSS({
         paths: glob.sync([
         // 要做 CSS Tree Shaking 的路径⽂件
         path.resolve(__dirname, './src/*.html'), // 请注意，我们同样需要对 html ⽂件进⾏ tree shaking
         path.resolve(__dirname, './src/*.js')
     ])
 })
]
//这方法在.vue文件实测有效
```

## 对js的处理

### tree shaking

只⽀持import⽅式引⼊，不⽀持commonjs的⽅式引⼊。对有副作用的代码，会失效，不会摇掉，比如你在全局变量window添加了一个属性,window.a = 1

```js
//webpack.config.js
optimization: {
 	usedExports: true // 哪些导出的模块被使⽤了，再做打包
}
```

> 只要mode是production就会⽣效，develpoment的tree shaking是不⽣效的，因为webpack为了 ⽅便你的调试

## sideEffects 

```js
//package.json
"sideEffects":false //正常对所有模块进⾏tree shaking , 仅⽣产模式有效，需要配合usedExports
"sideEffects":['*.css','@babel/polyfill']//或者 在数组⾥⾯排除不需要tree shaking的模块

```

## 对babel 的处理

```js
//.babelrc 
"presets": [
     ["@babel/preset-env", {
         "targets": {
             "edge": "17",
             "firefox": "60",
             "chrome": "67",
             "safari": "11.1"
         },
         "corejs": 3,//新版本需要指定核⼼库版本,7.4以上指定3版本,并安装core-js3
         "useBuiltIns": "usage"//按需注⼊垫片,自动检测入口无序配置
     }]
 ],
```

## 图片压缩
我使用的是<code>image-webpack-loader</code>,挺方便的。不过要科学上网，才能安装成功，要注意哦！[源地址](https://github.com/tcoopman/image-webpack-loader)，配置规则如下：
```js
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
            rule.use('image-webpack-loader')
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
```


