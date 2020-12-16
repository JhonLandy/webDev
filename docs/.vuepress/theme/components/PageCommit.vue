<template>
  <div class="page-commit">
    <Vssue ref="issue"/>
  </div>
</template>

<script>
export default {
    name: 'PageCommit',
    props: ['sidebarItems'],
    updated() {
        const issue = this.$refs.issue
        issue.init()
    }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page-commit
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid $borderColor
    padding-top 1rem
    overflow auto // clear float
  .next
    float right
</style>
