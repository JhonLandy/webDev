<template>
<div>
    <div class="title" @click="doClick">
        <span class="nav-link-new"> {{item.text}} </span>
        <i class="el-icon-arrow-down el-icon--right" />
    </div>
    <ul ref="meun" class="meun" @click="doHide">
        <li
            v-for="(subItem, index) in item.items"
            :key="index"
        >
            <DropdownMeun 
                v-if="subItem.items"
            />
            <NavLinkNew
                v-else
                :item="subItem"
            />
        </li>
    </ul>
</div>
</template>
<script>
import NavLinkNew from '@theme/components/NavLinkNew.vue'
const DropdownMeun = {
    name: 'DropdownMeun',
    components: {DropdownMeun, NavLinkNew},
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            meunShow: false
        }
    },
    watch: {
        meunShow(value) {
            if (value) {
                this.$refs.meun.style.height = `${this.$refs.meun.children.length*this.$refs.meun.children[0].offsetHeight}px`
            } else {
                this.$refs.meun.style.height = '0px'
            }
        }
    },
    methods: {
        doClick() {
            this.meunShow = !this.meunShow
        },
        doHide() {
            this.meunShow = false
            this.$emit('dropdown')
        }
    }
}
export default DropdownMeun;
</script>
<style lang="stylus">
ul,li {list-style none; margin: 0;padding: 0}
.nav-link-new
    font-size: 13.8px
    color rgb(96, 98, 102)
    &:hover
        color $accentColor
.title
    >>>.el-icon--right
        float right
        padding-top: 13.8px
.meun
    height 0px
    padding-left 3px
    overflow hidden
    transition .2s
    transition-timing-function cubic-bezier(0, 0, 0.58, 1)
    li
      height 30px
</style>