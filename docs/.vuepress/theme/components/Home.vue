<template>
  <main
    class="home"
    aria-labelledby="main-title"
  >
    <header class="hero">
      <el-carousel 
        v-if="data.heroImage"
      >
        <el-carousel-item
          v-for="item in heroImage" 
          :key="item.url"
        >
          <a :href="item.path" target="_blank">
            <img :src="item.url"/>
            <div class="explain">
              <span>{{item.explain}}</span>
            </div>
          </a>
        </el-carousel-item>
        <div class="loading" v-show="count < data.heroImage.length">
          <i class="el-icon-loading" />
          {{percent + '% loading...'}}
        </div>
      </el-carousel>
      <h1
        v-if="data.heroText !== null"
        id="main-title"
      >
        {{ data.heroText || $title || 'Hello' }}
      </h1>
      <p
        v-if="data.tagline !== null"
        class="description"
      >
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>
      <p
        v-if="data.actionText && data.actionLink"
        class="action"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>
    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>
    <Content class="theme-default-content custom" />
    <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import url from '@images/home/vue.png'
require('@images/home/vue.png')
console.log(require('@images/home/vue.png'))
export default {
  name: 'Home',

  components: { NavLink },
  
  data() {
    return {
      count: 0
    }
  },

  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },
    percent() {
      return ~~((this.count/this.$page.frontmatter.heroImage.length)*100)
    },
    heroImage() {
      const urlMap = {
        '@images/home/vue.png': require('@images/home/vue.png'),
        '@images/home/webworker.jpg': require('@images/home/webworker.jpg'),
        '@images/home/html5.jpeg': require('@images/home/html5.jpeg')
      }
      const imagesMess = this.data.heroImage || []
      return imagesMess.map(item => {
        item.url = require(urlMap[item.url])
        return item
      })
    }
  },

  mounted() {
    this.preload()
  },

  methods: {
      preload: function() {
        this.data.heroImage.forEach(item => {
          const image = new Image()
          image.src = item.url
          image.onload = () => {
            this.count++
          }
        })
      }, 
    }
}
</script>

<style lang="stylus" scoped>
>>>.el-carousel__container
  height 30rem
  .explain
    position fixed
    bottom 0
    width 100%
    padding: 5px 8px 15px 8px
    text-align left
    background rgba(1, 1, 1, .7)
  span
    font-size 1.2rem
    color #ffffff
  
.home
  max-width $homePageWidth
  min-width $pageMinWidth
  margin $navbarHeight auto
  display block
  .hero
    text-align center
    .loading
      z-index 999
      position absolute
      top calc(50%)
      left calc(50% - 50px)
      font-size 1.2rem
      font-weight bold
    img
      max-width: 100%
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 2px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  >>>.el-carousel__container
    height 22rem
    span
      font-size .8rem
  .home
    .hero
      h1
        font-size 1.2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 0.8rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  >>>.el-carousel__container
    height 18rem
  .home
    .hero
      img
        margin 2rem auto 1.2rem
      h1
        font-size 1rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 0.8rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
