<template>
  <RouterLink
    v-if="isInternal"
    class="nav-link-new"
    :to="link"
    :exact="exact"
    @focusout.native="focusoutAction"
  >
    <span class="nav-link-new">{{ item.text }}</span>
  </RouterLink>
  <a
    v-else
    :href="link"
    class="nav-link-new external"
    :target="target"
    :rel="rel"
    @focusout="focusoutAction"
  >
    {{ item.text }}
    <OutboundLink v-if="isBlankTarget" />
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../util'

export default {
  name: 'NavLink',

  props: {
    item: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    },

    isNonHttpURI () {
      return isMailto(this.link) || isTel(this.link)
    },

    isBlankTarget () {
      return this.target === '_blank'
    },

    isInternal () {
      return !isExternal(this.link) && !this.isBlankTarget
    },

    target () {
      if (this.isNonHttpURI) {
        return null
      }
      if (this.item.target) {
        return this.item.target
      }
      return isExternal(this.link) ? '_blank' : ''
    },

    rel () {
      if (this.isNonHttpURI) {
        return null
      }
      if (this.item.rel === false) {
        return null
      }
      if (this.item.rel) {
        return this.item.rel
      }
      return this.isBlankTarget ? 'noopener noreferrer' : null
    }
  },

  methods: {
    focusoutAction () {
      this.$emit('focusout')
    }
  }
}
</script>
<style lang="stylus">
.nav-link-new
    font-size: 13.8px
    color: rgb(96, 98, 102)
    &:hover
        color: rgb(2, 174, 213)
</style>
