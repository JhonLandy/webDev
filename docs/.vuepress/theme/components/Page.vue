<template>
  <main class="page">
    <slot name="top" />
    <Content class="theme-default-content" />
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
    <PageCommit :sidebarItems="sidebarItems" />
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import PageCommit from '@theme/components/PageCommit.vue'

export default {
  components: { PageEdit, PageNav, PageCommit },
  props: ['sidebarItems'],
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
</style>
