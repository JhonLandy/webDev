<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />
    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />
    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>
    <Home v-if="$page.frontmatter.home" />
    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>
    <!-- <iframe 
      id="wyymusic"
      frameborder="no" 
      border="0" 
      marginwidth="0" 
      marginheight="0" 
      src="//music.163.com/outchain/player?type=2&id=1374329431&auto=1&height=32">
    </iframe> -->
    <div class="advertising-l">
      <img :src="leftUrl" width="100%" height="100%"/>
    </div>
    <div class="advertising-r">
      <img :src="rightUrl" width="100%" height="100%"/>
    </div>
  </div>
</template>
<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'

export default {
  name: 'Layout',
  components: {
    Home,
    Page,
    Sidebar,
    Navbar
  },
  data () {
    return {
      isSidebarOpen: false
    }
  },
  computed: {
    leftUrl() {
      return require('@images/home/16pic_9349989_s.png')
    },
    rightUrl() {
      return require('@images/home/niuniu.jpg')
    },
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },
    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },
  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },
  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.advertising-l
  position fixed
  top $navbarHeight + 5px
  left 10px
  height 242px
  width 180px
  z-index 999
  
.advertising-r
  position fixed
  right: 10px
  top $navbarHeight + 5px
  width 180px
  height 242px
  z-index 999
@media (max-width: $MQMobile) 
  .advertising-l, .advertising-r
    display none
</style>


