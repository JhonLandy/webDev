<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />
    <Vssue ref="issue" class="theme-default-content" />

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
      const issue = this.$refs.issue
      issue.vssue.init()
  },
  mounted() {
      const issue = this.$refs.issue
      issue.vssue.init()
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
</style>
