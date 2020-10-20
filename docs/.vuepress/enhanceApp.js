import {Carousel, CarouselItem, Dropdown, DropdownMenu, DropdownItem} from 'element-ui'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  // options, // 附加到根实例的一些选项
  // router, // 当前应用的路由实例
  // siteData, // 站点元数据
  // isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  Vue.use(Carousel)
  Vue.use(CarouselItem)
  Vue.use(Dropdown)
  Vue.use(DropdownMenu)
  Vue.use(DropdownItem)
}