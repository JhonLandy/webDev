<template>
  <main class="page">
    <slot name="top" />
    <Content class="theme-default-content" />
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
    <Vssue ref="Vssue" class="theme-default-content" title="评论" />
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
  updated() {
      const vssue = this.$refs['Vssue']
      vssue.$forceUpdate()
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
</style>
