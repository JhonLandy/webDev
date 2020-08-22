<template>
<div>
    <div class="title" @click="doClick">
        <span class="nav-link"> {{item.text}} </span>
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
            <NavLink
                v-else
                :item="subItem"
            />
        </li>
    </ul>
</div>
</template>
<script>
import NavLink from '@theme/components/NavLink.vue'
const DropdownMeun = {
    name: 'DropdownMeun',
    components: {DropdownMeun, NavLink},
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
                this.$refs.meun.style.minHeight = '30px'
            } else {
                this.$refs.meun.style.minHeight = '0px'
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
<style lang="stylus" scoped>
ul,li {list-style none; margin: 0;padding: 0}
.title
    >>>.el-icon--right
        float right
        padding-top: 13.8px
.meun
    min-height 0px
    height 0px
    overflow hidden
    transition .2s
    transition-timing-function cubic-bezier(0, 0, 0.58, 1)
</style>